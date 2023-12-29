import "./orderDetails.css"
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useConfig } from '../../network/Common/common';
import { restaurantData } from '../../mocks/common';

const OrderDetails = () => {
  const [order, setOrders] = useState<any>()
  const [ config, setConfig ] = useState<any>({})

  useConfig(
    {
      queryKey: `config_${restaurantData.restaurant_id}`,
      onSuccess: (response: any) => {
        setConfig(response?.data)
      },
    },
    restaurantData.restaurant_id
  )
  const { id }: any = useParams();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const apiUrl = `https://cafescale.com/api/v1/customer/order/details?order_id=${id}`;
        const response = await axios.get(apiUrl,  {
          headers: {
            authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        setOrders(response?.data)
        console.log('Order Details:', response.data);
        // Handle the order details data from response.data as needed

      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrderDetails();
  }, [id]);
  console.log("================",order);

  return (
    <>

      <Navbar />

      <div className="oderid-div">
    <div className="container flex justify-around ">

          <ul role="list" className="divide-y py-[5rem] ml-15 lg:w-6/12  border-lime-600 divide-lime-600">
            {order?.map((value: any) => (
              <li key={value.email} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <img className="h-20 w-22 flex-none rounded-lg bg-gray-50" src={`${config?.base_urls?.product_image_url}/${value?.product_details?.image}`}
 alt="" />
                  <div className="min-w-0 mt-2 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-white">{value.product_details.name}</p>
                    <p className="mt-1 truncate text-md font-semibold leading-5 text-white">${value.price}</p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  {/* <p className="text-sm leading-6 text-gray-900">{value.product_details.description}</p> */}

                  <div className="mt-1 flex items-center gap-x-1.5">

                    <p className="text-md leading-5 text-white">Ouantity : <span className='text-lime-500 font-semibold mr-2'>{value.quantity}</span> </p>
                  </div>

                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default OrderDetails
