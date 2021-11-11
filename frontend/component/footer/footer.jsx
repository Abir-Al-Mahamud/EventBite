import React from 'react';

class Footer extends React.Component {
    render(){
        return(
            <div className="footer">
                <a className="linked" href="https://www.linkedin.com/in/abir-mahamud-2495571b3" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a className="github" href="https://github.com/Abir-Al-Mahamud" target="_blank"> <i className="fab fa-github"></i></a>
                <a className="portfolio" href="" target="_blank"> <i className="fab fa-product-hunt"></i></a>
            </div>
        )
    }
}

export default Footer;