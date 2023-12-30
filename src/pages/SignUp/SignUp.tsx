import React, { useState, useEffect } from 'react';
import { useSignUp } from '../../network/auth/auth';
import { useCheckPhone, useVerifyPhone } from '../../network/verify/verify';
import { useAuth } from '../..//hooks/AuthContext';
import { useHistory } from 'react-router-dom';
import { restaurantData } from '../../mocks/common';
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

  console.log(token)
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

  const handleOtp = (index) => (e) => {
    const newToken = [...token.token]; // Assuming token.token is an array
    newToken[index] = e.target.value;
    console.log(newToken)
    setToken({ ...token, token: newToken.join('') });
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/[\s()-]/g, '');
    setPhone(sanitizedValue);
  };
  console.log(phone)
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
            <h1 className="canvas-h1-signup">Verify Phone</h1>
          </div>
          <div className='flex justify-content-center mt-[20px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="127" viewBox="0 0 75 127" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.54416 4.50858C7.45158 1.62015 11.3919 0 15.4974 0H59.5026C63.6081 0 67.5484 1.62015 70.4558 4.50858C73.3637 7.39749 75 11.3187 75 15.4105V111.59C75 115.681 73.3637 119.603 70.4558 122.491C67.5484 125.38 63.6081 127 59.5026 127H15.4974C11.3919 127 7.45158 125.38 4.54416 122.491C1.63626 119.603 0 115.681 0 111.59V15.4105C0 11.3187 1.63626 7.39749 4.54416 4.50858ZM15.4974 4.59036C12.6005 4.59036 9.82507 5.73379 7.78095 7.76455C5.73732 9.79484 4.59184 12.5455 4.59184 15.4105V111.59C4.59184 114.455 5.73732 117.205 7.78095 119.235C9.82507 121.266 12.6005 122.41 15.4974 122.41H59.5026C62.3995 122.41 65.1749 121.266 67.219 119.235C69.2627 117.205 70.4082 114.455 70.4082 111.59V15.4105C70.4082 12.5455 69.2627 9.79484 67.219 7.76455C65.1749 5.73379 62.3995 4.59036 59.5026 4.59036H48.5969V11.0387C48.5969 12.3063 47.569 13.3339 46.301 13.3339H28.699C27.431 13.3339 26.4031 12.3063 26.4031 11.0387V4.59036H15.4974ZM30.9949 4.59036V8.74355H44.0051V4.59036H30.9949ZM26.4031 111.59C26.4031 110.322 27.431 109.294 28.699 109.294H46.301C47.569 109.294 48.5969 110.322 48.5969 111.59C48.5969 112.857 47.569 113.885 46.301 113.885H28.699C27.431 113.885 26.4031 112.857 26.4031 111.59Z" fill="#06B906" />
            </svg>
          </div>
          <div className="canvas-phone-div-signup-otp">
            <h1 className="canvas-phone-h1-signup-opt p-3">Please enter the 4 digit code send to</h1>
            <h1 className="canvas-phone-h1-signup-opt pb-4">{phone}</h1>
            <div className="container">
              <div className="row w-65">
                {/* <div className="col-lg-12">
                  <InputMask
                    mask="9 9 9 9"
                    maskChar={null}
                    value={token.token}
                    className="canvas-phone-input-signup-opt p-2 rounded rounded-md text-center"
                    placeholder=""
                    type="text"
                    name="token"
                    onChange={handleOtp}
                  /> */}

                {[0, 1, 2, 3].map((index) => (
                  <div key={index} className="col-lg-3">
                    <input
                      className="canvas-phone-input-signup-opt p-2 rounded rounded-md text-center"
                      style={{ borderRadius: "8px", background: "#D9D9D9", color: "black", border: "transparent" }}
                      type="text"
                      maxLength={1}
                      value={token.token[index] || ''}
                      onChange={handleOtp(index)}
                      autoFocus={index === 0}
                    />
                  </div>
                ))}
                {/* </div> */}
              </div>
            </div>
          </div>
          <h1 className="canvas-phone-h1-signup-opt p-3">I didn’t receive the code</h1>
            <h1 className="canvas-phone-h1-signup-opt pb-4">RESEND CODE</h1>
          <button className="canvas-footer-btn-signup" style={{width:"90%"}} type="submit" disabled={timer > 0}>
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
