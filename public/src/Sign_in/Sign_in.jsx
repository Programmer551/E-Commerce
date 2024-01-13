import { useState } from "react";
import "./Sign_in.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Sign_in = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("Already have an account");
  const [Value2, setValue2] = useState("/login");
  const [Value3, setValue3] = useState("");
  const submit = (event) => {
    console.log("Fire");
    event.preventDefault();
    fetch("http://localhost:3000/create/user", {
      method: "POST",
      body: JSON.stringify({
        name,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        if (!response.success) {
          toast("Invalid username or password", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast("Account created successfully", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/main");
          sessionStorage.setItem("name", name);
          sessionStorage.setItem("password", password);
          // setValue3("Incorrect username or password");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(name, password);
  };

  return (
    <div className='center column '>
      <form
        className='container center column'
        onSubmit={submit}>
        <h1 className='headings'>Create User</h1>
        <div className='mb-3 '>
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

        <button
          // type='submit'
          className='btn btn-secondary custom'>
          Create new User
        </button>
      </form>
      <Link to={Value2}>
        <button className='btn btn-secondary custom'>{value}</button>
      </Link>

      <div className='custom'>{Value3}</div>
    </div>
  );
};
export default Sign_in;
