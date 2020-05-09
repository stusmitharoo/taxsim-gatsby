import React from 'react'
import Content from '../Content'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'

const ArticleTemplate = ({
  content,
  contentComponent,
  meta_title,
  meta_desc,
  tags,
  title,
}) => {
  const PostContent = contentComponent || Content
  return (
    <div className='terms'>
      <h1 className='title is-size-2-desktop has-text-weight-bold is-bold-light'>
        {title}
      </h1>
      <PostContent content={content} />
      <hr />
    </div>
  )
}

export default ArticleTemplate
