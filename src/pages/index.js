import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title='Home' />
            <h1>hello</h1>
            <h2>This is David's test gatsby project, which is being developed in Portland, Oregon.</h2>
            <p>Need a developer? <Link to='/contact'>Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage
