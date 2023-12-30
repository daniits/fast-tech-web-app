import React, { useEffect, useState } from 'react'
import Singup from '../../pages/SignUp/SignUp'
import './navbar.css'
import { useSignIn } from '../../network/auth/auth'
import { useForgetPassword, useVerifyToken, useResetPassword } from '../../network/verify/verify'
import { useAuth } from '../../hooks/AuthContext'
import { Link, useHistory } from 'react-router-dom';
import { restaurantData } from '../../mocks/common'
import Restpassword from '../Rest Password/Restpassword'
import { CgProfile } from "react-icons/cg";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import navlogo from "./navLogo.png"
import { toast } from 'react-toastify'
import InputMask from 'react-input-mask';
import { useForm } from "react-hook-form";
// import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = ({ localSomething }: any) => {
  const [token, setToken] = useState('');
  let Links = [
    { name: "Home", link: "/" },
    { name: "Menu", link: "/menu" },

  ];

  // Add the "Orders" link only if there is a token
  if (token) {
    Links.push({ name: "Orders", link: "/orders-history" });
  }

  Links.push(
    { name: "Rewards", link: "/" },
    { name: "Refer & Earn", link: "/" },
  );

  let [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showrestpassword, setShowrestpassword] = useState(false);
  const [local, setLocalSomething] = useState<any>(localSomething || localStorage.getItem('cart_items'));
  const history = useHistory();
  const { isAuthenticated, login, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email_or_phone: '',
    password: '',
  });

  const changePath = () => {
    setIsLogin(!isLogin);
  };
  

  const signInMutation = useSignIn();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    console.log({ name, value })

    // Remove spaces, '-', and '()' for the input with name 'email_or_phone'
    const sanitizedValue = name === 'email_or_phone' ? value.replace(/[\s()-]/g, '') : value;

    setFormData((prevData: any) => ({
      ...prevData,
      [name]: sanitizedValue,
    }));
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await signInMutation.mutateAsync({
        ...formData,
        restaurant_id: restaurantData.restaurant_id,
      });

      if (response.status === 200) {
        toast.success('Logged In Successfully.');
        login(response);
        window.location.reload()
      } else {
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      const { response } = error;
      const { data } = response;
      const { errors } = data;

      toast.error(`${errors[0]?.message}`);
    }
  };

  const openrestpass = () => {
    setShowrestpassword(!showrestpassword);
  };

  useEffect(() => {
    const storedToken: any = localStorage.getItem('access_token');
    setToken(storedToken);
  }, [token, logout, login]);

  const logOut = () => {
    logout();
  };

  const goToCheckout = () => {
    if (localSomething && JSON.parse(localSomething)?.cart?.length) {
      history.push('/cart');
    }
  };




  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const { register, handleSubmit } = useForm();
  const onSubmitt = (e: any) => {
    console.log(e);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='bg-black dark:bg-gray-900 fixed w-full z-[1000] lg-h-[23%] top-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='flex items-center bg-black justify-between py-4 md:px-10 px-7'>
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer text-white flex items-center gap-1'>
          <Link to="/home" className="flex items-center">
            <img src={navlogo} className="h-16 text-white" alt="Flowbite Logo" />
          </Link>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
            {Links.map((link) => (
              <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                <Link to={link.link} className='text-green hover:text-lime-500 duration-500'>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Menu icon */}
        <div className='flex items-center '> {/* Updated this line */}
          {token ? (
            <>
              <div className='flex mr-1'>
                <div>
                  <FaShoppingCart className='text-white text-4xl cursor-pointer' onClick={goToCheckout} />
                </div>
                <span className="bg-red-500 text-white text-xs rounded-full h-[19px] w-[10px] flex justify-center items-center px-2">{localSomething && JSON.parse(localSomething)?.cart?.length || 0}</span>
              </div>
              <FaHeart className='text-red-500 text-4xl cursor-pointer mr-3 ml-3' onClick={() => history.push('/wishlist')} />
              <CgProfile
                id="avatarButton"
                data-dropdown-toggle="userDropdown"
                data-dropdown-placement="bottom-start"
                className="w-10 h-10 rounded-full cursor-pointer text-white"
                onClick={handleProfileClick}
              />

              {isDropdownOpen && (
                <div id="userDropdown" className="cursor-pointer bg-black opacity-90 divide-y absolute -ml-[50px] mt-[210px]  divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <div className="px-4 py-3 text-sm text-white dark:text-white">
                    <div>{restaurantData.name}</div>
                    {/* <div >name@flowbite.com</div> */}
                  </div>

                  <div className="py-1">
                    <a className="block px-4 py-2 text-sm text-white hover:bg-lime-500 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={openrestpass}>Reset Password</a>
                  </div>
                  <div className="py-1">
                    <a className="block px-4 py-2 text-sm text-white hover:bg-lime-500 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={logOut}>Sign out</a>
                  </div>
                </div>
              )}


            </>) : (<>

              <nav className="navbar border-radius-1 cursor-pointer navbar-dark text-center rounded-md bg-lime-500 sidebar-nav login-btn">
                <div className="container-fluid">
                  <h1
                    className="navbar-toggler text-white font-semibold"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasDarkNavbar"
                    aria-controls="offcanvasDarkNavbar"
                    aria-label="Toggle navigation"
                  >Login
                  </h1>
                  <div
                    className="offcanvas offcanvas-end text-bg-#0D0D0D sidebar "
                    tabIndex={-1}
                    id="offcanvasDarkNavbar"
                    aria-labelledby="offcanvasDarkNavbarLabel"
                  >
                    <div className="offcanvas-header bg-black text-white ">
                      <button
                        type="button"
                        className="btn-close btn-close-green bg-White text-white border-10 z-50  text-4xl font-bold "
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >x</button>
                    </div>
                    {isLogin ? (
                      <form onSubmit={onSubmit} className='bg-black h-[100%] p-3'>
                        <div className="canvas-h1-div">
                          <h1 className="canvas-h1">Join {restaurantData.name} Rewards, Win $500!</h1>
                        </div>
                        <div className="canvas-phone-div">
                          <h1 className='canvas-phone-h1'>Email or Phone</h1>
                          <InputMask
                            className='canvas-phone-input'
                            mask="+1(999) 999-9999"
                            placeholder='+1 (555) 555-5555'
                            type="text"
                            name="email_or_phone"
                            onChange={handleChange}
                          />
                          <div className="mt-3 mb-5">
                            <h1 className='canvas-phone-h12'>Password</h1>
                            <input
                              className='canvas-phone-input'
                              placeholder='********'
                              type={passwordShown ? "text" : "password"}
                              name="password"
                              onChange={handleChange}

                            />
                            <i className='eye-icon text-lime-600 absolute mt-4' onClick={togglePasswordVisiblity}>{eye}</i>{" "}

                          </div>
                          <p className='canvas-phone-p1 ml-3 mb-10'>Don't have an account yet?<button className='canvas-phone-span' onClick={() => changePath()}>Sign up</button></p>
                        </div>
                        <div className='flex items-center justify-center'>
                          <button className='canvas-footer-btn' type='submit'>Continue</button>
                        </div>

                        {/* <div className="w-[100%] bg-black opacity-80">
                            <div className="container">
                              <div className="row" >
                                <div className="col-lg-4 canvas-footer-h1">
                                  <h1>Earn points with every order</h1>
                                </div>
                                <div className="col-lg-4 canvas-footer-h1" >
                                  <h1>Redeem points for free food</h1>
                                </div>
                                <div className="col-lg-4 canvas-footer-h1" >
                                  <h1>Receive exclusive discounts</h1>
                                </div>
                              </div>
                            </div>
                            <button className='canvas-footer-btn' type='submit'>Continue</button>
                            <h1 className='canvas-footer-heading'>By signing up, you agree to receive email and SMS marketing communications from {restaurantData.name} and our technology partner Owner.com and consent to our Platform Terms and Privacy Policy.</h1>
                          </div> */}
                      </form>
                    ) : (
                      <Singup changePath={changePath} />
                    )}
                  </div>
                </div>
              </nav>

            </>)}


        </div>
        <div onClick={() => setOpen(!open)} className=' cursor-pointer md:hidden w-7 h-7'>
          {open ? <XMarkIcon color='white' /> : <Bars3BottomRightIcon color='white' />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
