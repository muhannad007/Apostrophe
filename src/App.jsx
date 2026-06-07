import "./App.css";
import Login from "./pages/Login";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillSkype,
} from "react-icons/ai";

function App() {
  return (
    <>
      <Login />
      {/* <div className="container white-background">
        <div className="head">
          <h1 className="roboto-bold">Apostrophe</h1>
          <img src={logo} alt="logo" width={150} />
          <h2 className="roboto-medium contact">Contact us</h2>
          <div className="">
            <AiFillFacebook className="icon" />
            <AiFillGithub className="icon" />
            <AiFillLinkedin className="icon" />
            <AiFillSkype className="icon" />
          </div>
        </div>
        <div className="form-container">
          <img src={logo} alt="logo" width={150} />
          <Form />
        </div>
      </div> */}
    </>
  );
}

export default App;
