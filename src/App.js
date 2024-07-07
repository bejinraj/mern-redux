import CustomerAdd from "./CustomerAdd";
import "./App.css";
import store from "./store";
import CustomerView from "./CustomerView";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>React Redux Example</h2>
        <CustomerAdd />
        <CustomerView />
      </div>
    </Provider>
  );
}

export default App;
