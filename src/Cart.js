import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./Cart.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export function Cart(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
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
        <Box sx={{ ...style, width: 300 }}>
          {cartItems.length === 0 && <p>cart is empty</p>}
          {cartItems.length > 0 &&
            cartItems.map((item, index) => {
              // return <li>{item.title}</li>;
              return (
              <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>E</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={item.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {item.venue.name}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
              )
            })
            }
        </Box>
      </Modal>
    </>
  );
}
