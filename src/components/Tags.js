import React from 'react'
import '../styles/tags.css'

const Tags = ({ children }) =>
  children && (
    <ul className="tag-blog-list">
      {children.split(', ').map(t => (
        <li key={t} className="tag-blog">
          {t}
        </li>
      ))}
    </ul>
  )

export default Tags
