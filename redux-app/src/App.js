import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import AddTask from "./AddTask/AddTask";
import Header from "./Header/Header";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Header />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/AddTask" element={<AddTask />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
