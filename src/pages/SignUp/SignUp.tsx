import React, { useState, useEffect } from 'react';
import { useSignUp } from '@/network/auth/auth';
import { useCheckPhone, useVerifyPhone } from '@/network/verify/verify';
import { useAuth } from '@/hooks/AuthContext';
import { useHistory } from 'react-router-dom';
import { restaurantData } from '@/mocks/common';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';

type SignUpProps = {
  changePath: () => void;
};

const Singup: React.FC<SignUpProps> = ({ changePath }) => {
  const [moveotp, setMoveopt] = useState(false);
  const [verify, setVerify] = useState(false);
  const [info, setInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState({ token: '' });
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    f_name: '',
    l_name: '',
    password: '',
    referral_code: '',
  });
  const [phone, setPhone] = useState('');
  const [timer, setTimer] = useState(0); // Initial timer value in seconds
  const navigate = useHistory();
  const { login } = useAuth();
  const signUpMutation = useSignUp();
  const checkPhoneMutation = useCheckPhone();
  const verifyPhone = useVerifyPhone();

  const handleOtp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, '');
    setToken((prevData) => ({ ...prevData, token: numericValue }));
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/[\s()-]/g, '');
    setPhone(sanitizedValue);
  };

  const startCountdown = (start: boolean) => {
    if (start) {
      setTimer(60); // Set the timer to 60 seconds
      const countdownInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      // Clear the interval when the timer reaches 0
      setTimeout(() => {
        clearInterval(countdownInterval);
        setTimer(0); // Reset the timer to 0 seconds
      }, 60000);
    }
  };

  const getotp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (phone) {
        const response = await checkPhoneMutation.mutateAsync({
          phone,
          restaurant_id: restaurantData.restaurant_id,
        });
        if (response.status === 200) {
          setMoveopt(!moveotp);
          setVerify(!verify);
        } else {
          setLoading(false);
        }
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.response?.data?.errors[0]?.message);
      console.log('error', error?.response?.data?.errors[0]?.message);
    }
  };

  const getinfo = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (token.token) {
        startCountdown(true); // Pass true to start the countdown
        const response = await verifyPhone.mutateAsync({
          phone,
          token: token.token,
        });
        if (response.status === 200) {
          setVerify(!verify);
          setInfo(!info);
        } else {
          setLoading(false);
        }
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.response?.data?.errors[0]?.message);
      console.log('error', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await signUpMutation.mutateAsync({
        ...formData,
        restaurant_id: restaurantData.restaurant_id,
      });
      if (response.status === 200) {
        login(response);
        // navigate.push('/');
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log('error', error);
    }
  };

  return (
    <>
      {!moveotp && (
        <form className="offcanvas-body bg-black" onSubmit={getotp}>
          <div className="canvas-h1-div-signup ">
            <h1 className="canvas-h1-signup">Join {restaurantData.name} Rewards, Win $500!</h1>
          </div>
          <div className="canvas-phone-div-signup ">
            <h1 className="canvas-phone-h1-signup">Phone</h1>
            <InputMask
              className="canvas-phone-input"
              mask="+1(999) 999-9999"
              placeholder="+1 (555) 555-5555"
              type="text"
              name="phone"
              onChange={handlePhone}
            />
          </div>
          <button className="canvas-footer-btn-signup" type="submit">
            Continue
          </button>
        </form>
      )}

      {verify && (
        <form className="offcanvas-body bg-black" onSubmit={getinfo}>
          <div className="canvas-h1-div-signup ">
            <h1 className="canvas-h1-signup">Join {restaurantData.name} Rewards, Win $500!</h1>
          </div>
          <div className="canvas-phone-div-signup-otp">
            <h1 className="canvas-phone-h1-signup-opt p-4">OTP code</h1>
            <div className="container">
              <div className="row w-65">
                <div className="col-lg-12">
                  <InputMask
                    mask="9 9 9 9"
                    maskChar={null}
                    value={token.token}
                    className="canvas-phone-input-signup-opt p-2 rounded rounded-md text-center"
                    placeholder=""
                    type="text"
                    name="token"
                    onChange={handleOtp}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <p>{timer}</p> */}
          <button className="canvas-footer-btn-signup" type="submit" disabled={timer > 0}>
            {timer > 0 ? `${timer}` : "Verify"}
          </button>
        </form>
      )}

      {info && (
        <form className="offcanvas-body bg-black" onSubmit={onSubmit}>
          <div className="canvas-h1-div-signup">
            <h1 className="canvas-h1-signup">Join {restaurantData.name} Rewards, Win $500!</h1>
          </div>
          <div className="canvas-phone-div-signup">
            <h1 className="canvas-phone-h1-signup">Phone</h1>
            <input
              className="canvas-phone-input-signup"
              placeholder="+1 (555) 555-5555"
              type="text"
              name="phone"
              onChange={handleChange}
            />
          </div>
          <div className="canvas-phone-div2-signup">
            <h1 className="canvas-phone-h12-signup">Password</h1>
            <input
              className="canvas-phone-input2-signup"
              placeholder="0000000"
              type="text"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="canvas-phone-div2-signup-email">
            <h1 className="canvas-phone-h12-signup-email">Email</h1>
            <input
              className="canvas-phone-input2-signup-email"
              placeholder="Your Email"
              type="text"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="canvas-phone-fl-name">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h1 className="canvas-phone-fl-name-h1">First Name</h1>
                  <input
                    className="canvas-phone-fl-name-first"
                    placeholder="First"
                    type="text"
                    name="f_name"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-6">
                  <h1 className="canvas-phone-fl-name-h1">Last Name</h1>
                  <input
                    className="canvas-phone-fl-name-first"
                    placeholder="Last"
                    type="text"
                    name="l_name"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="canvas-footer-btn-signup" type="submit">
            Continue
          </button>
        </form>
      )}
    </>
  );
};

export default Singup;
