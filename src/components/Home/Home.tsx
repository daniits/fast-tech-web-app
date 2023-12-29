import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import "../Home/home.css";
import Navbar from '../NavBar/Navbar';
import { restaurantData } from '../../mocks/common';
import ProductSlider from '../ProductSlider/ProductSlider';
import Footer from '../Footer/Footer';
import { getAllProducts } from '../../network/products/products';
import { useConfig } from '../../network/Common/common';
import { toast, ToastContainer } from 'react-toastify';

const Home = () => {
  const history = useHistory();
  const [products, setProducts] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [config, setConfig] = useState<any>({});
  const [localSomething, setLocalSomething] = useState<any>(localStorage.getItem('cart_items'));
  const productsSectionRef = useRef<HTMLDivElement>(null);

  getAllProducts(
    {
      queryKey: `getAllProducrs`,
      onSuccess: (response: any) => {
        console.log('sanbdsibhkdsbh: ', response);
        setProducts(response?.data);
        const categories = response?.data?.map((item: any) => {
          return {
            id: item?.id,
            name: item?.name,
            banner_image: item?.banner_image,
            status: item?.status,
          };
        });

        setCategories(categories);
      },
    },
    restaurantData.restaurant_id
  );

  useConfig(
    {
      queryKey: `config_${restaurantData.restaurant_id}`,
      onSuccess: (response: any) => {
        setConfig(response?.data);
      },
    },
    restaurantData.restaurant_id
  );

  const addProductToCart = (item: any) => {
    if (!localStorage.getItem('access_token')) {
      return toast.error('You are not logged in.');
    }
    const cartExists = localSomething ? JSON.parse(localSomething) : false;

    const cartItems = cartExists ? [...cartExists?.cart] : [];

    cartItems.push(item);

    localStorage.setItem('cart_items', JSON.stringify({ user_id: localStorage.getItem('user_id'), cart: cartItems }));
    const latestLocalStorage = localStorage.getItem('cart_items');
    setLocalSomething(latestLocalStorage);
  };

  const mapData = (products: any) => {
    return products?.map((product: any, index: number) => (
      <div className="col-lg-6 col-sm-12 col-xs-12 p-4 cursor-pointer" key={index}>
        <div className="h-full border rounded-xl flex items-center justify-center text-left sm:text-left">
          <div className="flex-grow ml-2" >
            <h2
              className="text-2xl text-left title-font font-bold text-green-500 text-lg text-white-900"
              onClick={() => history.push(`/product/${product?.id}`)} >
              {product?.name}
            </h2>
            <p className="mb-5 w-[90%] h-[50px]" onClick={() => history.push(`/product/${product?.id}`)}>{product?.description}</p>
            <div className='flex justify-between lg:mt-[17%] mr-5 items-center'>
              <button
                className='add-cart-btn-home-lastsec'
                onClick={(e) => addProductToCart(product)}
              >
                Add to Cart
              </button>
              <p className="" style={{ color: '#86bd57' }}>
                <span className='text-bold text-xl'>$ {product?.price}</span>
              </p>
            </div>
          </div>
          <img
            onClick={() => history.push(`/product/${product?.id}`)}
            alt="team"
            className="flex-shrink-0 rounded-lg w-1/3 h-52 object-cover object-center sm:mb-0 "
            src={`${config?.base_urls?.product_image_url}/${product?.image}`}
          />
        </div>
      </div>
    ));
  };

  const scrollToProducts = (categoryId: number) => {
    if (productsSectionRef.current) {
      const categorySection = productsSectionRef.current.querySelector(`[data-category-id="${categoryId}"]`);
      if (categorySection) {
        categorySection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className='flex flex-column'>
        <div >
          <Navbar localSomething={localSomething} />
        </div>
        <div className=''>
          <div className="pt-[114px] bg-[#161616]">
            <div className="h-line p-1 h-[30px] overflow-hidden">
              <div className="container">
                <div className="row">

                  <h1 className='h-line-h1 px-2 sm:text-[13px]' onClick={() => scrollToProducts(-1)}>
                    Join {restaurantData.name} Rewards to get free items when you order here →
                  </h1>
                </div>
              </div>
            </div>
            <div className="sec3-bar">
              <>
                <nav className="bg-gray-200 border-t-[1px] mb-8 border-b-[1px]  border-gray-500 bg-black py-3">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex overflow-x-auto">
                      <ol className="items-center   flex text-gray-700">
                        {categories?.map((item: any, index: number) => (
                          <li key={index} className="w-[136px]">
                            <a href="#" className="hover:text-lime-500" onClick={() => scrollToProducts(item.id)}>
                              {item?.name}
                            </a>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                </nav>
              </>
            </div>
            <ProductSlider addProductToCart={addProductToCart} />
          </div>
          <div className="h-main-sec3 bg-gray-900 pt-5" ref={productsSectionRef}>
            <section className="text-white body-font">
              <div className="lg:px-5 mx-auto">
                {products?.map((item: any, index: number) => (
                  <div key={index} className="mb-10" data-category-id={item.id}>
                    <h1 className="text-2xl font-medium title-font text-white  lg:ml-[4rem] mb-3">
                      {item?.name}
                    </h1>
                    <div className="row lg:p-[3rem]">{mapData(item?.products)}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
