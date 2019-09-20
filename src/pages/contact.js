import React from 'react'

import Head from '../components/head'
import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout>
            <Head title='Contact' />
            <h1>This is the contact page.</h1>
            <p>Please don't contact me. Or go to <a href='https://twitter.com'>twitter.</a></p>
        </Layout>
    )
}

export default ContactPage