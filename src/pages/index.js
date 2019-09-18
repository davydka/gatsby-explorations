import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

const IndexPage = () => {
    return (
        <div>
            <Header/>
            <h1>hello</h1>
            <h2>This is David's test gatsby project, which is being developed in Portland, Oregon.</h2>
            <p>Need a developer? <Link to='/contact'>Contact me.</Link></p>
            <Footer/>
        </div>
    )
}

export default IndexPage
