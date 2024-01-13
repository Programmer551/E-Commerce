import { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";
import Cards from "../Cards/cards";

const Cart = () => {
  const name = sessionStorage.getItem("name");
  const password = sessionStorage.getItem("password");
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);
  const fetchCartIds = async () => {
    try {
      const res = await fetch(`http://localhost:3000/get/all/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            name: name,
            password: password,
          },
        }),
      });

      const data = await res.json();

      return data && data.id ? data.id : [];
    } catch (error) {
      console.log("Error fetching cart IDs:", error);
      return [];
    }
  };

  const fetchItems = async (cartIds) => {
    try {
      const items = [];
      for (const id of cartIds) {
        const response = await axios.get(
          `http://localhost:3000/get/single/${id}`,
        );
        items.push(response.data);
      }
      setisLoading(false);
      return items;
    } catch (error) {
      console.log("Error fetching items:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (name && password) {
          const cartIds = await fetchCartIds();
          const items = await fetchItems(cartIds);
          setData(items);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className='cart-heading'>Cart Items</h1>
      <div className='center wrap'>
        {isLoading ? (
          <div
            className='spinner-border text-primary'
            role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        ) : data.length > 0 ? (
          data.map((item) => {
            const { _id, name, src, detail, price } = item.data[0];
            return (
              <div>
                <Cards
                  key={_id}
                  name={name}
                  src={src}
                  detail={detail}
                  price={price}
                  id={_id}
                  remove={true}
                />
              </div>
            );
          })
        ) : (
          <h1 className='heading font-serif'>No Items in the Cart</h1>
        )}
      </div>
    </>
  );
};

export default Cart;
