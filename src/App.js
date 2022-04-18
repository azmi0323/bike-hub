import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import CheckOut from "./Components/CheckOut/CheckOut";
import RequireAuth from "./Components/RequirAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="body-component">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/services' element={
          <RequireAuth>
            <Services></Services>
          </RequireAuth>
        }></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/logIn" element={<LogIn></LogIn>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/checkOut/:id" element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
