import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import TermsTemplate from '../components/TermsTemplate'
import Layout from '../components/Layout'

const ArticlePage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <TermsTemplate
                content={post.html}
                contentComponent={HTMLContent}
                meta_title={post.frontmatter.meta_title}
                meta_desc={post.frontmatter.meta_description}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ArticlePage

export const pageQuery = graphql`
  query PrivacyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        meta_title
        meta_description
      }
    }
  }
`
