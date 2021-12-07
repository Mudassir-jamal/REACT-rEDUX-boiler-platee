import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Input from "../Components/Input";
import Loader from "react-loader-spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loader,setloader] = useState(false)


  const loginFn = (e) => {
    e.preventDefault();

    let obj = {
      email,
      pass,
    };

    console.log(obj);


    setloader(true)

     
    setloader(false)

  };

  return (
    <div className="login_main">
      <h1>login</h1>
      <div>
        <form onSubmit={(e) => loginFn(e)}>
          <div>
            <Input
              placeholder="Enter email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <Input
              placeholder="Enter Password"
              type="password"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <Button
            value="Login"
            style={{ color: "white", backgroundColor: "black" }}
          />
        </form>

        <Link to="/signUp">Register</Link>

        <div></div>
      </div>


      <Loader type="ThreeDots" 
           color="#00BFFF" 
           height={80}
           width={80}
           visible={loader}
           />
    </div>
  );
};

export default Login;
