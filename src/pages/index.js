import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => {
  const books = props.data.books.edges
  const posts = props.data.posts.edges

  return (
    <Layout>
      <SEO title="Home" />
      <div className="posts">
        {posts.map(post => (
          <div className="post">
            <h2>
              <Link to={"/blog/" + post.node.frontmatter.slug}>
                {post.node.frontmatter.title}
              </Link>
            </h2>
            <p>By {post.node.frontmatter.author}</p>
          </div>
        ))}
      </div>
      <div className="book-container">
        {books.map(book => (
          <div className="book">
            <Link to={"/book/" + book.node.id}>
              <img src={book.node.thumbnailUrl} alt="" />
              <h2>{book.node.title}</h2>
            </Link>
          </div>
        ))}
        <Link to="somewhere">kelvinsekx</Link>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    posts: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
            author
          }
        }
      }
    }

    books:allMongodbGatsbyBook {
      edges {
        node {
          id
          title
          thumbnailUrl
          shortDescription
        }
      }
    }
  }
`
