const path = require("path")
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              tags
            }
          }
        }
      }
    }
  `)
  const posts = result.data.allMarkdownRemark.edges
  const tagsTemplate = path.resolve(`./src/templates/tag.js`);
  
  //All tags
  let allTags = []
  // Iterate through each post, putting all found tags into `allTags array`
       _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {
           allTags = allTags.concat(edge.node.frontmatter.tags)
       }
    })
              // Eliminate duplicate tags
      allTags = _.uniq(allTags)

      allTags.forEach((tag, index) => {
          createPage({
           path: `/${_.kebabCase(tag)}/`,
          component: tagsTemplate,
          context: {
              tag,
              }
          })
          })

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })

}