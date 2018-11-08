import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {

    render() {

        return (
            <footer className='footerGestion'>
                <div className="footerGeneral">
                    <div><h5>©2018 Bear Your Beer</h5></div>
                    <div className="social-like">
                        <div className="fb-like">
                            <a href="https://www.facebook.com/wildcodeschool/" class="sharebox">
                                <i class="fab fa-facebook-f"></i>
                                <span class="fb-icon"></span>
                            </a>
                        </div>

                        <div className='fb-like tw-like'>
                            <a href="https://twitter.com/PradalCyril?ref_src=twsrc%5Etfw" class="sharebox">
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