import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
  const { users, error, isLoading, setUsers, setError } = useUsers();

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

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Mash" };
    setUsers([newUser, ...users]);

    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id == user.id ? updatedUser : u)));
    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div className="">
              <button
                key={user.id}
                className="btn btn-sm btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
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
