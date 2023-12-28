import React,{useState} from 'react'
import "./orderhistory.css"
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import hsecproduct2 from "../Home/hProdouces4.png"
import hpsecroduct3 from "../Home/hProdouces5.png"
import { Link } from 'react-router-dom'
import axios from 'axios';





const OrderHistory = () => {
  const [orders, setOrders]=useState([])
const fetchOrders = async () => {
  try {
    // Get access_token from localStorage
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
      // Handle the case where access_token is not available
      console.error('Access token not found.');
      return;
    }

    // Set up headers with the access_token
    // Make the API request using Axios
    const response = await axios.get('https://cafescale.com/api/v1/customer/order/list',     {
      headers: {
        authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });

    // Handle the response
    setOrders(response?.data)
    console.log('Response:', response.data);
    // Handle the orders data from response.data as needed

  } catch (error) {
    // Handle errors
    console.error('Error fetching orders:', error);
  }
};

// Call the function to fetch orders
fetchOrders();
    return (
        <>
            <Navbar />


            <div className="oderss">
                <div className="container">

                    <div className="row ml-4">
                      {
                        orders?.map((value:any,index:number)=>(

                        <div className="col-lg-6">
                            <div className=" oderHis-div w-11/12 mt-[5rem] rounded-md bg-black pt-3 pb-3">
                                <div className="flex lg:pl-7">

                                    <img src={hsecproduct2} className='img ml-2 mt-2 rounded w-24 h-24 border ' alt="" />
                                    <div className="data ">
                                        <h1 className='mt-3 ml-3 text-xs text-white'>Oder ID:{value.id}</h1>
                                        <p className='mt-1 ml-3 text-s text-gray-400'>Amount {value.order_amount}</p>
                                        <h1 className='mt-2 ml-3 text-xs text-lime-500'>{value.order_status}</h1>
                                    </div>
                                </div>
                                <Link to={`/orders-history/${value.id}`}>
                                <button
                                    className='oderHis-addcart-btn p-2 '
                                    >Details</button>
                                    </Link>
                            </div>
                        </div>
                        ))
                      }

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OrderHistory
