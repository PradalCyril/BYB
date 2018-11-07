import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    
    render() {
    
        return (

            <footer className='footerGestion'>
                <div className="footerGeneral">
                    <div id="fb-root"></div>
                    <script>{function (d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        js = d.createElement(s); js.id = id;
                        js.src = 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v3.2';
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk')};</script>

                    <div className="fb-like"
                        data-href="https://www.facebook.com/wildcodeschool/"
                        data-width="200"
                        data-layout="button_count"
                        data-action="like"
                        data-size="small"
                        data-show-faces="false"
                        data-share="false">
                    </div>
                    
                    <div className='fb-like'>
                        <a href="https://twitter.com/PradalCyril?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow We</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                        
                        
                    </div>
                </div>

            </footer>
        )
    }
}
export default Footer;