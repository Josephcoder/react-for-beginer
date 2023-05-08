import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

function App() {
  let items = [
    "Gasabo",
    "Kicukiro",
    "Nyarugenge",
    "Burera",
    "Gakenke",
    "Gicumbi",
    "Musanze",
    "Rulindo",
    "Gisagara",
    "Huye",
    "Kamonyi",
    "Muhanga",
    "Nyamagabe",
    "Nyanza",
    "Nyaruguru",
    "Ruhango",
  ];
  const [cartItems, setCartItems] = useState(["product 1", "product 2"]);
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const [games, setGames] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  const [pizza, setPizza] = useState({
    name: 1,
    toppings: ["Mushroom"],
  });

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);
  const handleLikedItem = (status: boolean) => {
    console.log(status);
  };

  const handleClick = () => {
    // Add
    // setTags([...tags, "Hello"]);
    // Remove
    // setTags(tags.filter((tag) => tag !== "happy"));
    // Update
    // setTags(tags.map((tag) => (tag === "happy" ? "Happiness" : tag)));
    // setGames({
    //   ...games,
    //   player: { ...games.player, name: "Joseph" },
    // });
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "Pepperoni"],
    });
  };

  return (
    <div>
      <Form />
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
      {alertVisible && (
        <Alert color="success" onClose={() => setAlertVisibility(false)}>
          Well <span>done</span>
        </Alert>
      )}
      <Button
        color="secondary"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        My button
      </Button>
      <Like onClick={handleLikedItem} />
      <ListGroup
        items={items}
        heading="Districts"
        onSelectItem={handleSelectItem}
      />
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      <ExpandableText>Lorem ipsum</ExpandableText>
    </div>
  );
}
export default App;
