import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        heading={frontmatter.heading}
        registerButton={frontmatter.registerButton}
        description={frontmatter.description}
        offerings={frontmatter.offerings}
        whoForTitle={frontmatter.whoForTitle}
        whoFor={frontmatter.whoFor}
        whyNotTitle={frontmatter.whyNotTitle}
        whyNot={frontmatter.whyNot}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        registerButton
        heading
        description
        offerings {
          blurbs {
            image
            text
            class
          }
        }
        whoForTitle
        whoFor {
          item
        }
        whyNotTitle
        whyNot {
          item
        }
      }
    }
  }
`
