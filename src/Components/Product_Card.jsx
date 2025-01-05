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
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/CartSlice";
const ProductCard = () => {
  const items = useSelector((state) => state.allCart.items) || []; // Directly access items array
  console.log("Items:", items);
  const dispatch = useDispatch()

  return (
    <div className="m-2">
      <MDBContainer>
        <MDBRow className="mb-3">
          {items.length > 0 ? (
            items.map((item) => (
              <MDBCol key={item.id} size="4">
                <MDBCard>
                  <MDBCardImage src={item.img} position="top" alt={item.title} />
                  <MDBCardBody>
                    <MDBCardTitle>{item.title}</MDBCardTitle>
                    <MDBCardText>${item.price}</MDBCardText>
                    <MDBBtn onClick={ () => dispatch(addToCart(item))}>
                      Add to Cart
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))
          ) : (
            <p>No items available</p>
          )}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ProductCard;
