import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
    return (
        <div>
            <h1>hello</h1>
            <h2>This is David's test gatsby project, which is being developed in Portland, Oregon.</h2>
            <p>Need a developer? <Link to='/contact'>Contact me.</Link></p>
        </div>
    )
}

export default IndexPage
