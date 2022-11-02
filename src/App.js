import "./App.css";
import { Cart } from "./Cart.js";
import { EventCard } from "./EventCard.js";
import { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";

function App() {
  const [items, setItems] = useState([]);
  // const [dataIsloaded, setDataIsLoaded] = useState(false);
  // the cards which are going to be shown based on user input
  const [filteredCards, setFilteredCards] = useState([]);
  const [userInput, setUserInput] = useState("");

  // the items in the basked
  const [cartItems, setCartItems] = useState([]);

  // filtered cards without the elements added to the cart
  const [filteredWithoutCartItems, setFilteredWithoutCartItems] = useState([]);

  // whether the cart is open or not
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetch("https://tlv-events-app.herokuapp.com/events/uk/london")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        // setDataIsLoaded(true);
        // show all events
        setFilteredCards(json);
      });
  }, []);

  // fires when user changes the input value
  const onChange = (e) => {
    const input = e.target.value;
    setUserInput(input);
    console.log("user input", userInput);

    // filters through the suggestion list and returns suggestions that contain the user input
    const filteredCards = items.filter(
      (item) => item.title.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
    console.log("filteredCards: ", filteredCards);
    setFilteredCards(filteredCards);

    // if there is no user input, set filteredCards to all items
    if (userInput === "" && cartItems.length === 0) {
      setFilteredCards(items);
    } else if (userInput === "" && cartItems.length > 0) {
      setFilteredCards(filteredWithoutCartItems);
    }

    console.log("filtered cards: ", filteredCards);
  };

  const onAdd = (item) => {
    setCartItems([...cartItems, item]);
    // exclude the items from filteredCards that have been added into the cart
    const filteredWithoutCartItems = filteredCards.filter((i) => i !== item);
    setFilteredWithoutCartItems(filteredWithoutCartItems);
    setFilteredCards(filteredWithoutCartItems);

    console.log("element added: ", item);
    console.log("cartItems: ", cartItems);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div id="input-container">
          <OutlinedInput
            onChange={onChange}
            id="search-input"
            placeholder="Search for an event..."
          ></OutlinedInput>
        </div>
        <div id="shopping-cart-container">
          <Button onClick={handleOpenModal}>
            <ShoppingCartOutlinedIcon />
            {cartItems.length}
          </Button>
        </div>
      </header>
      <Cart
        cartItems={cartItems}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        modalIsOpen={modalIsOpen}
      ></Cart>
      {items && filteredCards && (
        <body className="App-body">
          {filteredCards.map((item, index) => {
            return <EventCard item={item} onAdd={onAdd}></EventCard>;
          })}
        </body>
      )}
    </div>
  );
}

export default App;
