import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'

import Layout from '../components/layout'

import styles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                        html
                        excerpt
                    }
                }
            }
        }
    `)

    const items = data.allMarkdownRemark.edges.map((item, i) => {
        return (
            <li key={i} className={styles.post}>
                <Link to={`/blog/${item.node.fields.slug}`}>
                    <h2>{item.node.frontmatter.title}</h2>
                    <p>{item.node.frontmatter.date}</p>
                </Link>
            </li>
        )
    })

    return (
        <Layout>
            <h1>Blog</h1>
            <ol className={styles.posts}>
                {items}
            </ol>
        </Layout>
    )
}

export default BlogPage