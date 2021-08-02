import React from 'react'
import Navbar from './navbar';
import Header from './header';
import Main from './main';
import Booster from './booster';
import Footer from './footer';
const Home = ({logged, setLogged}) => {
    return (
        <>
        <Navbar logged={logged} setLogged={setLogged}/>
        <Header/>
        <Main/>
        <Booster/>
        <Footer/>
        </>
    )
}

export default Home
