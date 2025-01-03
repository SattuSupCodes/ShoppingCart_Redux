import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";


const ProductCard = () => {


  return (
    <div className="m-2">
      <MDBContainer>
        <MDBRow className="mb-3">
         
            <MDBCol  size="4">
              <MDBCard>
                <MDBCardImage src="https://www.91-img.com/gallery_images_uploads/3/d/3df5ca6a9b470f715b085991144a5b76e70da975.JPG?tr=h-550,w-0,c-at_max" position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardTitle></MDBCardTitle>
                  <MDBCardText></MDBCardText>
                  <MDBBtn >
                    Add to Cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ProductCard;
