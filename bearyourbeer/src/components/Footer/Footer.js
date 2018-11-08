import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {

    render() {

        return (
            <footer className='footerGestion'>
                <div className="footerGeneral">
                    <div><h5 className="footer-text"> © 2018 Bear Your Beer</h5></div>
                    <div className="social-like">
                        <div className="fb-like">
                            <a href="https://www.facebook.com/wildcodeschool/" class="sharebox">
                                <i class="fab fa-facebook-f"></i>
                                <span class="fb-icon"></span>
                            </a>
                        </div>

                        <div className='fb-like tw-like'>
                            <a href="https://twitter.com/WildSchool_Bxl" class="sharebox">
                                <i class="fab fa-twitter"></i>
                                <span class="fb-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>

            </footer>
        )
    }
}
export default Footer;