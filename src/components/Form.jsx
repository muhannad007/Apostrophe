import { useState } from "react";

const Form = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [conf, setConf] = useState(null);

  const [buttonColor, setButtonColor] = useState("black");
  const [emailBorderColor, setEmailBorderColor] = useState("black-border");
  const [login, setLogin] = useState("Login");
  const [confBorderColor, setConfBorderColor] = useState("black-border");

  const validateEmail = (email) => {
    // A common regex pattern for basic email format validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailBorderColor("red-border");
      alert("Email is required.");
      return "Email is required";
    }
    if (!regex.test(email)) {
      setEmailBorderColor("red-border");
      alert("Invalid Email.");
      return "Invalid email format";
    }
    return null;
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailBorderColor("black-border");
      if (conf != password) {
        setConfBorderColor("red-border");
        alert("Passwords don't match.");
      } else {
        setConfBorderColor("black-border");
        setButtonColor("green");
        setLogin("Successful loign");
      }
    }
  };
  return (
    <>
      <form className="">
        <h3 className="roboto-medium">Full Name</h3>
        <input
          className=""
          type="text"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <h3 className="roboto-medium">Email</h3>
        <input
          className={emailBorderColor}
          type="email"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <h3 className="roboto-medium">Password</h3>
        <input
          type="password"
          placeholder="*****"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <h3 className="roboto-medium">Confirm Password</h3>
        <input
          className={confBorderColor}
          type="password"
          placeholder="*****"
          onChange={(e) => setConf(e.target.value)}
          required
        />
        <button onClick={(e) => handleClick(e)} className={buttonColor}>
          {login}
        </button>
        <br />
      </form>
    </>
  );
};

export default Form;
