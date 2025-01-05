import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarNav className='d-flex flex-row'>
            <MDBNavbarItem className='me-3 me-lg-0'>
              
               <Link to = "/cart"> <MDBIcon fas icon='shopping-cart' /> </Link>
              
            </MDBNavbarItem>
            <MDBNavbarItem className='me-3 me-lg-0'>
              <Link to = "/">
                <MDBIcon fab icon='twitter' />
              </Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    );
  };
  
  export default Navbar;
  