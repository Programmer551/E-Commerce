// import { Link } from "react-router-dom";
import "./cards.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
const Cards = ({ name, price, src, detail, id, remove }) => {
  const [none, setNone] = useState("");
  const deleteItem = async () => {
    try {
      const name = sessionStorage.getItem("name");
      const password = sessionStorage.getItem("password");
      const response = await fetch("http://localhost:3000/delete/single/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          user: {
            name: name,
            password: password,
          },
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data) {
        toast("Item is removed from the cart Successfully", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      setNone("none");
    } catch (error) {
      console.log(error);
    }
  };
  const show = () => {
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("price", price);
    sessionStorage.setItem("item", name);
    sessionStorage.setItem("src", src);
    sessionStorage.setItem("detail", detail);
  };

  if (!detail && !src) {
    return (
      <div
        className='card items'
        style={{ width: "18rem" }}>
        <img
          src=''
          className='card-img-top'
          alt='Image is not available'
          height='250px'
        />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>

          <h4>Price:{price}</h4>
          <button
            className='card-text btn btn-primary'
            onClick={show}>
            Show More
          </button>
        </div>
      </div>
    );
  }
  if (!detail) {
    return (
      <div
        className='card items'
        style={{ width: "18rem" }}>
        <img
          src={src}
          height='250px'
          className='card-img-top'
          alt='Image'
        />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>

          <h4>Price:{price}</h4>
          {/* <Link to='/details'> */}
          <button
            className='card-text btn btn-primary'
            onClick={show}>
            Show More
          </button>

          {/* </Link> */}
        </div>
      </div>
    );
  }
  if (!src) {
    return (
      <div
        className='card items'
        style={{ width: "18rem" }}>
        <img
          src=''
          className='card-img-top'
          height='250px'
          alt='Image is not available'
        />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>

          <h4>Price:{price}</h4>
          <button
            className='card-text btn btn-primary'
            onClick={show}>
            Show More
          </button>
          {/* <Link to='/details'> */}

          {/* </Link> */}
        </div>
      </div>
    );
  }
  if (remove) {
    return (
      <div
        className='card items'
        id={none}
        style={{ width: "18rem" }}>
        <img
          src={src}
          height='250px'
          className='card-img-top'
          alt='Image'
        />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>

          <h4>Price:${price}</h4>
          <Link to='/details'>
            <button
              className='card-text btn btn-primary'
              onClick={show}>
              Show More
            </button>
          </Link>
          <button
            className='btn btn-danger'
            onClick={deleteItem}>
            Remove
          </button>
        </div>
      </div>
    );
  }
  return (
    <div
      className='card items'
      style={{ width: "18rem" }}>
      <img
        src={src}
        height='250px'
        className='card-img-top'
        alt='Image'
      />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>

        <h4>Price:${price}</h4>
        <Link to='/details'>
          <button
            className='card-text btn btn-primary'
            onClick={show}>
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Cards;
