import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Slider from 'react-slick';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import logo from '../../../public/img/a.jpg';
import logo1 from '../../../public/img/b.jpg';
import logo2 from '../../../public/img/c.jpg';
import logo3 from '../../../public/img/d.jpg';
import logo4 from '../../../public/img/e.jpg';
import logo5 from '../../../public/img/f.jpg';



class Home extends Component {
    render() {
        const { navBar, navBarHeader, navBarBrand, nav,imgSlide } = style;

        const sliderSettings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 10,
            // slidesToShow: 1,
            // slidesToScroll: 4,
            initialSlide: 0,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        };
        return (
            <div>
                <Navbar style={navBar}>
                    <Navbar.Header style={navBarHeader}>
                        <Navbar.Brand style={navBarBrand}>
                            <a href="#">Best Spread Forex</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav style={nav}>
                        <NavItem eventKey={1} href="http://www.home.com">Home</NavItem>
                        <NavItem eventKey={2} href="#">About</NavItem>
                        <NavDropdown eventKey={3} title="Project" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={4} href="#">Rates</NavItem>
                        <NavItem eventKey={5} href="#">Charts</NavItem>
                        <NavItem eventKey={6} href="#">Contact</NavItem>
                    </Nav>
                </Navbar>
                <div>
                    <Slider {...sliderSettings}>
                        <div><img style={imgSlide}  src={logo} alt="logo" /></div>
                        <div><img style={imgSlide}  src={logo1} alt="logo" /></div>
                        <div><img style={imgSlide}  src={logo2} alt="logo" /></div>
                        <div><img style={imgSlide}  src={logo3} alt="logo" /></div>
                        <div><img style={imgSlide}  src={logo4} alt="logo" /></div>
                        <div><img style={imgSlide}  src={logo5} alt="logo" /></div>

                         {/*<div><img style={imgSlide} className="img-responsive" src={logo5} alt="logo" /></div>*/}
                    </Slider>
                </div>
            </div>

        );
    };
}

const style = {
    navBar: {
        backgroundColor: '#E59400',
    },
    navBarHeader: {
        backgroundColor: 'purple',
    },
    navBarBrand: {
        backgroundColor: 'green',
        textAlign: 'right'
    },
    nav: {
        backgroundColor: 'yellow',
    },
    imgSlide : {
        width:'800px',
        borderWidth: '1',
        borderStyle: 'solid',
        borderColor: 'red'
    }

}

export default Home;