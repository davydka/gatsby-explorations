import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'

import styles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
          allContentfulBlogPost (
            sort: {
              fields: publishedDate,
              order: DESC
            }
          ) {
            edges {
              node {
                title
                slug
                publishedDate(formatString: "MMMM Do, YYYY")
              }
            }
          }
        }
    `)

    const items = data.allContentfulBlogPost.edges.map((item, i) => {
        return (
            <li key={i} className={styles.post}>
                <Link to={`/blog/${item.node.slug}`}>
                    <h2>{item.node.title}</h2>
                    <p>{item.node.publishedDate}</p>
                </Link>
            </li>
        )
    })

    return (
        <Layout>
            <Head title='Blog' />
            <h1>Blog</h1>
            <ol className={styles.posts}>
                {items}
            </ol>
        </Layout>
    )
}

export default BlogPage