import "./main.css";
import backgroundImage from "../Images/background.jpg";
import cart_logo from "../Images/cart_logo.png";
import cart_image from "../Images/cart_image.jpg";
import cart_image2 from "../Images/cart_image2.jpg";
import orders_image from "../Images/orders.webp";
import Cards from "../Cards/cards";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/get/all");
      const data = await response.json();
      setData(data);
      setData2(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    // width:"200vw",

    backgroundRepeat: "no-repeat",
  };
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();

    let updated = data2.map((obj) => {
      const isVisible = obj.name.toLowerCase().includes(value);

      if (isVisible) {
        return obj;
      }
      return null;
    });
    console.log(updated);
    updated = updated.filter(
      (item) => item !== null && typeof item === "object",
    );

    setData(updated);
  };
  return (
    <div
      className='main full-height'
      style={divStyle}>
      <Navbar></Navbar>
      <div className='search center'>
        <Link to='/'>
          <button className='btn btn-primary'>Sign</button>
        </Link>
        <Link to='/login'>
          <button className='btn btn-primary'>Login</button>
        </Link>
        <form className='search-form center'>
          <input
            type='search'
            id='inputPassword5'
            className='form-control'
            placeholder='Search Here'
            onChange={handleSearch}
            aria-describedby='passwordHelpBlock'
          />

          {/* <input
            type='submit'
            className='btn btn-secondary'
            value='Search'
          /> */}
        </form>
        <Link to='/cart'>
          <img
            src={cart_logo}
            alt='Cart Logo'
            width='45px'
            className='cart'
          />
        </Link>
        <Link to='/orders'>
          <img
            src={orders_image}
            alt='Orders Logo'
            width='45px'
            style={{ "marginLeft": "10px" }}
            // className='orders'
          />
        </Link>
      </div>
      <div className='card text-bg-dark'>
        <img
          src={cart_image}
          className='card-img'
          alt='Cart Image'
        />

        <div className='card-img-overlay'>
          <h5 className='card-title black'>
            Welcome to the world best E-Commerce Website
          </h5>
          <p className='card-text black'>
            You can get here the world best item at reasonable price.
          </p>
          <p className='card-text black'>
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className='card text-bg-dark'>
        <img
          src={cart_image2}
          className='card-img'
          alt='Cart Image'
        />
        <div className='card-img-overlay'>
          <h5 className='card-title black'>Best Security</h5>
          <p className='card-text black'>
            This E-Commerce website provide full privacy your data is impossible
            to leak from here.
          </p>
          <p className='card-text black'>
            <small>Last updated 2 mins ago</small>
          </p>
        </div>
      </div>
      <div className='collection center'>
        {isLoading ? (
          <div
            className='spinner-border text-primary'
            role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        ) : (
          data.map((item) => {
            const { _id, name, src, detail, price } = item;
            return (
              <Cards
                key={_id}
                name={name}
                src={src}
                detail={detail}
                price={price}
                id={_id}
              />
            );
          })
        )}
      </div>
      {isLoading ? null : <Footer />}
    </div>
  );
};
export default Main;
