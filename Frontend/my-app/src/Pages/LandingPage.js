import React, {Fragment, useContext} from 'react';
import Header from '../Components/Header';
import Caresoul from '../Components/CarasoulSignUp';
import Footer from '../Components/Footer';
import "../css/LandingPage.css";
import AuthContext from '../store/auth-context';
import { Redirect } from "react-router";

const LandingPage = () => {
    const ctx = useContext(AuthContext);

    if(ctx.isLoggedIn){
        return(<Redirect to='/home'/>);
    }

    return (
        <Fragment>
            <Header />
            <Caresoul />
            <Footer />
        </Fragment>
    )
}

export default LandingPage;