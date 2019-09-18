import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'

const ContactPage = () => {
    return (
        <div>
            <Header/>
            <h1>This is the contact page.</h1>
            <p>Please don't contact me. Or go to <a href='https://twitter.com'>twitter.</a></p>
            <Footer/>
        </div>
    )
}

export default ContactPage