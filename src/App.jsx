import "./App.css";
import Form from "./components/Form";
import logo from "/curved.png";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillSkype,
} from "react-icons/ai";

function App() {
  return (
    <>
      <div className="container">
        <div className="head">
          <h1 className="roboto-bold">Apostrophe</h1>
          <img src={logo} alt="logo" width={150} />
          <h2 className="roboto-medium">Contact us</h2>
          <div className="contact">
            <AiFillFacebook className="icon" />
            <AiFillGithub className="icon" />
            <AiFillLinkedin className="icon" />
            <AiFillSkype className="icon" />
          </div>
        </div>
        <div className="form-container">
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
