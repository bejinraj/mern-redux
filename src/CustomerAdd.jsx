import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomer as addCustomerAction } from "./slices/customerSlice";

const CustomerAdd = () => {
  const [input, setInput] = useState("");
  // const [customer, setCustomer] = useState([]);
  const dispatch = useDispatch();

  const addCustomer = () => {
    if (input) {
      //setCustomer((preState) => [...preState, input]);
      dispatch(addCustomerAction(input))
      setInput("");
    }
  };

  return (
    <div>
      <div>
        <h3>Add new Customer</h3>
        <input
          type="text"
          placeholder="Enter..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addCustomer}>Add</button>
      </div>
    </div>
  );
};

export default CustomerAdd;
