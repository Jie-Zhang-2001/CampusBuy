import React, {Fragment} from 'react';
import Header from '../Components/Header';
import Caresoul from '../Components/CarasoulSignUp';
import Footer from '../Components/Footer';

const LandingPage = () => {
    return (
        <Fragment>
            <Header />
            <Caresoul />
            <Footer />
        </Fragment>
    )
}

export default LandingPage;