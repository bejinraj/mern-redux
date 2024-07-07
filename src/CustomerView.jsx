import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer } from "./slices/customerSlice";

const CustomerView = () => {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  const deleteHandler = (index) => {
    dispatch(deleteCustomer(index));
  };
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {customers.map((customer, index) => (
          <li key={index}>
            {customer}{" "}
            <button onClick={() => deleteHandler(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerView;
