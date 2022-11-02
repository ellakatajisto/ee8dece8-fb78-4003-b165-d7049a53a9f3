import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./Cart.css";

export function Cart(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,

  };

  const { cartItems, handleCloseModal, modalIsOpen } = props;
  return (
    <>
      <Modal
        open={modalIsOpen}
        onClose={handleCloseModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="parent-modal-title">Events in the shopping cart:</h2>
          {cartItems.length === 0 && <p>cart is empty</p>}
          {cartItems.length > 0 &&
            cartItems.map((item, index) => {
              return <li>{item.title}</li>;
            })}
        </Box>
      </Modal>
    </>
  );
}
