
import { toast } from "react-toastify";
const Details = () => {
  const id = sessionStorage.getItem("id");
  const price = sessionStorage.getItem("price");
  const name = sessionStorage.getItem("item");
  const src = sessionStorage.getItem("src");
  const detail = sessionStorage.getItem("detail");
  const fire = async () => {
    const userName = sessionStorage.getItem("name");
    const UserPassword = sessionStorage.getItem("password");
    try {
      const response = await fetch("http://localhost:3000/add/in/purchase", {
        method: "POST",
        body: JSON.stringify({
          user: {
            name: userName,
            password: UserPassword,
          },
          id: id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        toast("Item is Purchased Successfully", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast("Item is already Purchased", {
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
    } catch (error) {
      console.log(error);
    }
  };
  const cart = async () => {
    const userName = sessionStorage.getItem("name");
    const UserPassword = sessionStorage.getItem("password");
    const response = await fetch("http://localhost:3000/add/in/cart", {
      method: "POST",
      body: JSON.stringify({
        user: {
          name: userName,
          password: UserPassword,
        },
        id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.success) {
      toast("Item is added to cart Successfully", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast("Item is already in the cart", {
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
  };

  return (
    <section className='text-gray-600 body-font overflow-hidden'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='lg:w-4/5 mx-auto flex flex-wrap'>
          <img
            alt='item image'
            className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
            src={src}
          />
          <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
            <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
              {name}
            </h1>
            {/* ... other elements */}
            <p className='leading-relaxed'> {detail}</p>
            <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5 text-2xl text-gray-950'>
              Price: ${price}
            </div>
            <button
              className='btn btn-primary'
              onClick={fire}>
              Buy Now
            </button>
            <button
              className='btn btn-primary'
              onClick={cart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Details;
