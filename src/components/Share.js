import React from "react"
import "../styles/blog-post.css"
import PropTypes from "prop-types"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
  PinterestShareButton,
  PinterestIcon,
  PocketShareButton,
  PocketIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"
library.add(fab, faEnvelopeSquare)

const Share = ({ socialConfig, tags }) => (
  <div className="post-social-container">
    <p>Share post:</p>
    <div className="post-social">
      <FacebookShareButton
        url={socialConfig.config.url}
        quote={socialConfig.config.title}
        hashtag={tags}
      >
        <FontAwesomeIcon icon={["fab", "facebook-square"]} />
      </FacebookShareButton>
      <TwitterShareButton
        url={socialConfig.config.url}
        quote={socialConfig.config.title}
        hashtag={tags}
      >
        <FontAwesomeIcon icon={["fab", "twitter-square"]} />
      </TwitterShareButton>
      <LinkedinShareButton
        url={socialConfig.config.url}
        quote={socialConfig.config.title}
        hashtag={""}
      >
        <FontAwesomeIcon icon={["fab", "linkedin"]} />
      </LinkedinShareButton>
      <EmailShareButton
        url={socialConfig.config.url}
        quote={socialConfig.config.title}
        hashtag={""}
      >
        <FontAwesomeIcon icon="envelope-square" />
      </EmailShareButton>
      <PinterestShareButton
        url={socialConfig.config.url}
        quote={socialConfig.config.title}
        hashtag={""}
      >
        <FontAwesomeIcon icon={["fab", "pinterest-square"]} />
      </PinterestShareButton>
      <PocketShareButton
        url={socialConfig.config.url}
        quote={socialConfig.config.title}
        hashtag={""}
      >
        <FontAwesomeIcon icon={["fab", "get-pocket"]} />
      </PocketShareButton>
      <TelegramShareButton
        url={socialConfig.config.url}
        quote={socialConfig.config.title}
        hashtag={""}
      >
        <FontAwesomeIcon icon={["fab", "telegram"]} />
      </TelegramShareButton>
      <WhatsappShareButton
        url={socialConfig.config.url}
        quote={socialConfig.config.title}
        hashtag={""}
      >
        <FontAwesomeIcon icon={["fab", "whatsapp-square"]} />
      </WhatsappShareButton>
    </div>
  </div>
)

Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitter: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
}
Share.defaultProps = {
  tags: [],
}

export default Share
