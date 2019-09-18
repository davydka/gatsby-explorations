import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>hello</h1>
            <h2>This is David's test gatsby project, which is being developed in Portland, Oregon.</h2>
            <p>Need a developer? <Link to='/contact'>Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage
