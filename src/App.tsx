import About from "./components/About/About";
import Alert from "./components/Alert";
import Home from "./components/Home";
import Practise from "./components/Pract";
import Bookstore from "./components/Bookstore/home/Bookstore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookdetails from "./components/Bookstore/detail/Bookdetails";

function App() {
  let list = ["data1", "data2", "data3", "data4", "data5"];
  let heading = "Hello Home Header";
  let children = "Hello Alert Children"

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bookstore />} />
          <Route path="/home" element={<Home list={list} heading={heading} />} />
          <Route path="/alert" element={<Alert children={children} />} />
          <Route path="/about" element={<About />} />
          <Route path="/practise" element={<Practise />} />
          <Route path="/bookstore" element={<Bookstore />} />
          <Route path="/bookstore/detail" element={<Bookdetails />} />
        </Routes>
      </BrowserRouter>

      {/* <Home list={list} heading={heading} />
      <Alert children={children} /> */}
    </>
  )
}

export default App;