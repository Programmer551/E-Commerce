import backgroundImage from "../Images/background.jpg";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const divStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const value = "Don't have an account";
  const Value2 = "/";
  const [Value3, setValue3] = useState("");
  const navigate = useNavigate();
  const submit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/check/user", {
      method: "POST",
      body: JSON.stringify({
        user: {
          name,
          password,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (!response.success) {
          toast("This account don't exists", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          return;
        }

        navigate("/main");
        toast("Logged in Successfully", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("password", password);
        // setValue3("This account not exists");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(name, password);
  };
  return (
    <div
      className='center column full-height custom'
      style={divStyle}>
      <form
        className='container center column'
        onSubmit={submit}>
        <h1 className='headings'>Login</h1>
        <div className='mb-3'>
          <label
            htmlFor='exampleInputEmail1'
            className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='input form-control'
            id='exampleInputEmail1'
            name='Name'
            aria-describedby='emailHelp'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='exampleInputPassword1'
            className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='input form-control'
            id='exampleInputPassword1'
            name='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className='btn btn-secondary custom'>Login</button>

        <Link to={Value2}>
          <button className='btn btn-secondary custom'>{value}</button>
        </Link>
      </form>
      <div className='custom'>{Value3}</div>
    </div>
  );
};
export default Login;
