import { useState } from "react";
import ExpenseList from "./Components/ExpenseList";
import NavBar from "./Components/NavBar";
import ExpenseFilter from "./Components/ExpenseFilter";
import Form from "./Components/Form";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Shoes",
      amount: 1400,
      category: "Utilities",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;
  return (
    <div className="container-fluid">
      <NavBar />
      <div className="container">
        <h1>Expenses tracker</h1>
        <div className="mb-5">
          <Form
            onSubmit={(expense) =>
              setExpenses([
                ...expenses,
                { ...expense, id: expenses.length + 1 },
              ])
            }
          />
        </div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) =>
            setExpenses(expenses.filter((expense) => expense.id !== id))
          }
        />
      </div>
    </div>
  );
}

export default App;
