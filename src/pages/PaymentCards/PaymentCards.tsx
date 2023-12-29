import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { restaurantData } from '../../mocks/common';
import { CiCreditCard1 } from "react-icons/ci";
import '../Cart/Cart'
import '../Checkout/checkout.css'
import { usePaymentCard, useGetPaymentCard, useDeletePaymentCard, useSetDefaultPaymentCard } from '../../network/Common/common'
import { toast, ToastContainer } from 'react-toastify';
import { RiDeleteBin6Line } from 'react-icons/ri';
import InputMask from 'react-input-mask';

export default function PaymentCards() {
  const [address, setAddress] = useState('home')
  // const [todaySlot, setTodaySlot] = useState('home')
  const [restaurant_id, setRestaurantId] = useState(restaurantData?.restaurant_id)
  const [paymentCards, setPaymentCards] = useState([])
  const [defaultPayment, setDefaultPayment] = useState<number>()
  const history = useHistory();
  let [formData, setFormData] = useState({
    card_no: '',
    exp_month: '',
    exp_year: '',
    cvc: '',
    card_holder_name: '',
  });
  const [loading, setLoading] = useState(false)
  const paymentCard = usePaymentCard()
  const GetPaymentCard = useGetPaymentCard()
  const deletePaymentCard = useDeletePaymentCard()
  const defaultPaymentCard = useSetDefaultPaymentCard()

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log("======= formData ======", formData);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await paymentCard.mutateAsync(
        formData,
      );
      if (response.status === 200) {
        fetchData()
        toast("Card Added Successfully.")

      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.response?.data?.message)
      console.log('error', error?.response?.data?.message);
    }
  };
  const fetchData = async () => {
    try {
      setLoading(true);
      let data = formData;

      const response = await GetPaymentCard.mutateAsync(formData);

      if (response.status === 200) {
        // console.log("=============== payment cards ==============",response?.data[response?.data.length - 1]?.id);

        setPaymentCards(response?.data);

      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.response?.data?.message);
      console.log('error', error?.response?.data?.message);
    }
  };
  useEffect(() => {
    fetchData();
    // If you have any dependencies, add them to the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);


  const deleteCard = async (payment_id: any) => {
    try {
      setLoading(true);
      console.log("-----------", payment_id);

      const response = await deletePaymentCard.mutateAsync({ payment_id: payment_id });

      if (response.status === 200) {
        setPaymentCards(response?.data);

      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.response?.data?.message?.payment_id[0]);
      console.log('error', error?.response?.data?.message?.payment_id);
    }
  };

  const setDefaultPaymentCard = async () => {
    try {
      setLoading(true);
      console.log("-----------", defaultPaymentCard);

      const response = await defaultPaymentCard.mutateAsync({ payment_id: defaultPayment });

      if (response.status === 200) {
        fetchData();
        toast("Card set as default successfully")
      }
    } catch (error: any) {
      setLoading(false);
      toast.error("Error while setting default payment card");
    }
  };
  console.log("============ paysdfs =========", defaultPayment);

  return (
    <>
      <ToastContainer />

      <div className='bg-black'>
        <div className="container bg-black mx-auto">
          <div className="shadow-md py-5">
            <div className='row'>
              <div className='col-lg-6 col-md-12 col-sm-12 bg-black mb-5 flex-none bg-black h-[100%] border-2 border-green-500 rounded-lg'>
                <div className='p-5 row'>
                  {
                    paymentCards?.map((value: any, index) => (
                      <div className='col-lg-6 col-md-12 col-sm-12 mb-3'>
                        <div className={`flex items-center bg-black p-2 w-[250px] h-[70px] border-2 border-green-500 rounded-lg cursor-pointer`} onClick={() => setDefaultPayment(value.payment_id)}>
                          <CiCreditCard1 className={`${value.default_card === "1" ? 'text-green-500 text-4xl' : 'text-green-500 text-xl'}  cursor-pointer`} />
                          <div className='ml-10'>
                            <span className={`${value.default_card === "1" ? 'text-2xl text-bold text-green-500' : 'text-lg text-gray-600'}`}>
                              {value.customer_account}
                              <br />
                              {value.card_no}
                            </span>
                          </div>
                          <RiDeleteBin6Line onClick={() => deleteCard(value.payment_id)} className="ml-10 font-semibold hover:text-red-800 text-gray-500 text-2xl cursor-pointer text-red-500" />
                        </div>

                      </div>
                    ))
                  }
                </div>
                <div className='row p-5'>
                  <div className='col-6'>
                    <button className='home-btn' onClick={() => history.push(`/checkout`)}> Move to checkout</button>
                  </div>
                  <div className='col-6'>
                    <button className='home-btn' onClick={setDefaultPaymentCard}> Select Default Card</button>
                  </div>
                </div>

              </div>
              <div className='col-lg-1'>

              </div>
              <div className='col-lg-5 bg-black col-sm-12 flex-none bg-black h-[100%] pb-5 border-2 border-green-500 rounded-lg'>

                <div className='flex justify-between p-3'>
                  <h1 className="text-xl text-bold text-white ">Add Card</h1>

                </div>
                <form className='grid mb-3' onSubmit={onSubmit}>
                  <span className='text-white text-lg mb-1'>Card Number</span>
                  <InputMask
                    mask="9999 9999 9999 9999"
                    maskChar={null}
                    className='coupon-input p-3 text-white mb-3'
                    placeholder='4242 4242 4242 4242'
                    type="text"
                    name="card_no"
                    onChange={handleChange}
                  />
                  <span className='text-white text-lg mb-1'>Expiry Month</span>
                  <InputMask
                    mask="99"
                    maskChar={null}
                    className='coupon-input p-3 text-white mb-3'
                    placeholder='12'
                    type="text"
                    name="exp_month"
                    onChange={handleChange}
                  />
                  <span className='text-white text-lg mb-1'>Expiry Year</span>
                  <InputMask
                    mask="99"
                    maskChar={null}
                    className='coupon-input p-3 text-white mb-3'
                    placeholder='24'
                    type="text"
                    name="exp_year"
                    onChange={handleChange}
                  />
                  <span className='text-white text-lg mb-1'>CVC</span>
                  <InputMask
                    mask="999"
                    maskChar={null}
                    className='coupon-input p-3 text-white mb-3'
                    placeholder='214'
                    type="text"
                    name="cvc"
                    onChange={handleChange}
                  />
                  <span className='text-white text-lg mb-1'>Card Holder Name</span>
                  <input
                    className='coupon-input p-3 text-white mb-3'
                    placeholder='John'
                    type="text"
                    name="card_holder_name"
                    onChange={handleChange}
                  />
                  <button className='save-btn mt-5' type='submit'>Save</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
