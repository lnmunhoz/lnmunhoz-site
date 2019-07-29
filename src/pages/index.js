import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const underConstruction = require("../../content/blog/under-construction.gif")

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges.map(e => e.node)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        {posts
          .filter(node => node.frontmatter.status !== "draft")
          .map(node => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}

        <div id="posts" style={{ width: "100%", textAlign: "center" }}>
          {posts.filter(node => node.frontmatter.status !== "draft").length ===
            0 && <img src={underConstruction} />}
        </div>

        <h3
          style={{
            marginBottom: rhythm(1 / 5),
          }}
        >
          Drafts
        </h3>

        {posts
          .filter(node => node.frontmatter.status === "draft")
          .map(node => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <li>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>{" "}
                - {node.frontmatter.date}
              </li>
            )
          })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            status
          }
        }
      }
    }
  }
`
