import React, { Component } from 'react';


class Header extends Component {
    
    render() {
        const myStyle = {
            backgroundImage: "url('assets/images/home-page - Copy.jpg')",
            backgroundSize: 'cover',
            width: '100%',
            height: '600px',
            backgroundAttachment: 'fixed'
        }
       
            return (
            <React.Fragment>
                <div className='header-img' style={myStyle}>
                    <div style={{  height: '100%', color: 'white' }}></div>
                       
                </div>

            </React.Fragment>
        );
    }
}

export default Header;