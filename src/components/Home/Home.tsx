import React from 'react';
import "../Home/home.css";
import Navbar from '../NavBar/Navbar';
import { restaurantData } from '../../mocks/common';
import ProductSlider from '../ProductSlider/ProductSlider';
import Footer from '../Footer/Footer';
import { getAllProducts } from '../../network/products/products';
import { useConfig } from '../../network/Common/common';
import { toast, ToastContainer } from 'react-toastify';
import { Button, Img, Input, Line, Text } from "../../fonts";
const Home = () => {

  return (
    <>
      <ToastContainer />
      <div className='flex flex-column'>
        <div >
          <Navbar />
        </div>
        <div>
          <div className="pt-[114px] bg-[#161616]">
            <div className="h-line p-1 h-[30px] overflow-hidden">
              <div className="container">
                <div className="row">
                  <h1 className='h-line-h1 px-2 sm:text-[13px]' >
                    Join {"restaurantData.name"} Rewards to get free items when you order here →
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start pb-[2418px] w-full">
              <div className="md:h-[956px] sm:h-[958px] h-[960px] md:px-5 relative w-full">
                <div className="absolute h-[956px] inset-[0] justify-center m-auto w-full">
                  <Img
                    className="m-auto object-cover w-full"
                    src={BG1}
                    alt="aa309c030e524"
                  />
                  <div className="absolute bg-gray-900_80 h-[956px] inset-[0] justify-center m-auto w-full" style={{
                    opacity: "0.42",
                    background: "#161616",
                  }}></div>
                </div>
                <div className="absolute flex-col h-full inset-[0] items-start justify-center m-auto  w-[67%]">
                  <div className="flex flex-col items-start justify-start w-[57%] md:w-full">
                    <div style={{ width: "5.25rem", height: "0.1875rem", background: "#FFF" }}></div>
                    <div className="flex flex-col items-center justify-start mt-[22px]">
                      <Text
                        className="leading-[80.00px] md:text-5xl text-7xl text-white-A700"
                        size="txtManropeBold72"
                        style={{ color: "white" }}
                      >
                        <>
                          Unforgettable Taco
                          <br />
                          Bliss
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[23px]">
                      <Text
                        className="text-lg text-white-A700"
                        size="txtManropeBold18"
                        style={{ color: "white" }}
                      >
                        Best Tacos in America
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-start mt-[31px] md:pr-10 sm:pr-5 pr-[385px] w-[96%] md:w-full">
                      <Button
                        className="cursor-pointer font-bold min-w-[139px] text-base text-center"
                        shape="round"
                        color="green_A700"
                        size="lg"
                        variant="outline"
                        style={{ color: "white" }}
                      >
                        Our Story
                      </Button>
                      <Button
                        className="border border-green-A700 border-solid cursor-pointer font-bold min-w-[147px] text-base text-center"
                        shape="round"
                        color="green_A700"
                        size="lg"
                        variant="fill"
                        style={{ color: "white" }}
                      >
                        Order Now
                      </Button>
                    </div>
                  </div>
                  <Img
                    className="h-6"
                    src="images/img_divflex_white_a700.svg"
                    alt="divflex"
                  />
                </div>
              </div>
              <div className="bg-gray-900_01 flex flex-col items-center justify-start p-[99px] md:px-10 sm:px-5 w-full">
                <Text
                  className="leading-[80.00px] mb-[559px] md:text-5xl text-7xl text-center text-white-A700 w-[79%] sm:w-full"
                  size="txtManropeBold72"
                >
                  Florida, Atlanta, Washington D.C, New York, North Carolina, and
                  growing!
                </Text>
              </div>
              <div className="md:h-[134px] h-[708px] pb-[574px] md:px-5 relative w-full">
                <Img
                  className="h-[134px] mx-auto object-cover w-full"
                  src="images/img_2a8f8afe48bc4.png"
                  alt="2a8f8afe48bcFour"
                />
                <div className="absolute bg-gray-900_80 h-[134px] inset-x-[0] mx-auto top-[0] w-full"></div>
              </div>
              <div className="sm:h-[1195px] md:h-[1433px] h-[632px] mt-[563px] md:px-5 relative w-[84%] md:w-full">
                <Text
                  className="ml-auto mr-[170px] mt-[83px] md:text-5xl text-7xl text-center text-white-A700"
                  size="txtManropeBold72"
                >
                  <>Less Talkin&#39; More Tacos!</>
                </Text>
                <div className="absolute flex md:flex-col flex-row md:gap-10 gap-[79px] h-full inset-[0] items-start justify-center m-auto md:pr-10 pr-12 sm:pr-5 py-12 w-full">
                  <div className="bg-gray-900_01 flex md:flex-1 flex-col items-center justify-start mb-4 pl-[7px] rounded-lg w-[35%] md:w-full">
                    <Img
                      className="h-[520px] sm:h-auto object-cover w-[521px] md:w-full"
                      src="images/img_h18v9lanjaywqsg.png"
                      alt="h18v9lanjaywqsg"
                    />
                  </div>
                  <Text
                    className="sm:flex-1 leading-[33.00px] md:mt-0 mt-[148px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-1/2 sm:w-full"
                    size="txtManropeRegular24"
                  >
                    Starting your own restaurant from scratch is quite a
                    challenging feat and the restaurant industry has one of the
                    highest failure rates for doing so. With a Talkin’ Tacos
                    franchise we have already laid the groundwork, have best of
                    class technology and systems in place, a proven concept and
                    track record of success, and all the support you will need
                    from our team with many years of experience in the industry.
                  </Text>
                </div>
              </div>
              <div className="md:h-[630px] h-[632px] md:px-5 relative w-3/4 md:w-full">
                <div className="absolute flex flex-col gap-[13px] h-full inset-y-[0] justify-start left-[0] my-auto md:pr-10 sm:pr-5 pr-[110px] py-[110px]">
                  <Text
                    className="mr-[339px] md:text-5xl text-7xl text-center text-white-A700"
                    size="txtManropeBold72"
                  >
                    <>Less Talkin&#39; More Tacos!</>
                  </Text>
                  <Text
                    className="leading-[33.00px] mb-[100px] md:ml-[0] ml-[7px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[66%] sm:w-full"
                    size="txtManropeRegular24"
                  >
                    Starting your own restaurant from scratch is quite a
                    challenging feat and the restaurant industry has one of the
                    highest failure rates for doing so. With a Talkin’ Tacos
                    franchise we have already laid the groundwork, have best of
                    class technology and systems in place, a proven concept and
                    track record of success, and all the support you will need
                    from our team with many years of experience in the industry.
                  </Text>
                </div>
                <div className="absolute bg-gray-900_01 flex flex-col sm:h-auto h-max inset-y-[0] items-center justify-start my-auto right-[0] rounded-lg w-[520px]">
                  <Img
                    className="h-[520px] md:h-auto object-cover rounded-lg w-[520px] sm:w-full"
                    src="images/img_cwlrr1sjbjbvpng_520x520.png"
                    alt="cwlrr1sjbjbvpng"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start pr-[35px] md:px-5 py-[35px] w-[77%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[29px] mt-[13px] w-full">
                  <div className="bg-gray-900_01 flex sm:flex-1 flex-col h-[520px] sm:h-auto items-center justify-start rounded-lg w-[520px] sm:w-full">
                    <Img
                      className="h-[520px] md:h-auto object-cover rounded-lg w-[520px] sm:w-full"
                      src="images/img_lqoy7sc7ypq4ygc_520x520.png"
                      alt="lqoy7sc7ypq4ygc"
                    />
                  </div>
                  <div className="flex flex-col gap-[13px] justify-start">
                    <Text
                      className="md:text-5xl text-7xl text-center text-white-A700"
                      size="txtManropeBold72"
                    >
                      <>Less Talkin&#39; More Tacos!</>
                    </Text>
                    <Text
                      className="leading-[33.00px] md:ml-[0] ml-[7px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[93%] sm:w-full"
                      size="txtManropeRegular24"
                    >
                      Starting your own restaurant from scratch is quite a
                      challenging feat and the restaurant industry has one of the
                      highest failure rates for doing so. With a Talkin’ Tacos
                      franchise we have already laid the groundwork, have best of
                      class technology and systems in place, a proven concept and
                      track record of success, and all the support you will need
                      from our team with many years of experience in the industry.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start pl-[7px] md:px-5 py-[7px] w-3/4 md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[25px] mt-[73px] w-full">
                  <div className="flex flex-col gap-[13px] items-start justify-start">
                    <Text
                      className="md:text-5xl text-7xl text-center text-white-A700"
                      size="txtManropeBold72"
                    >
                      <>Less Talkin&#39; More Tacos!</>
                    </Text>
                    <Text
                      className="leading-[33.00px] text-2xl md:text-[22px] text-white-A700 sm:text-xl w-[93%] sm:w-full"
                      size="txtManropeRegular24"
                    >
                      Starting your own restaurant from scratch is quite a
                      challenging feat and the restaurant industry has one of the
                      highest failure rates for doing so. With a Talkin’ Tacos
                      franchise we have already laid the groundwork, have best of
                      class technology and systems in place, a proven concept and
                      track record of success, and all the support you will need
                      from our team with many years of experience in the industry.
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 flex sm:flex-1 flex-col h-[520px] sm:h-auto items-start justify-start pb-[45px] md:pr-10 sm:pr-5 pr-[45px] rounded-lg w-[520px] sm:w-full">
                    <Img
                      className="h-[475px] md:h-auto object-cover w-[475px] sm:w-full"
                      src="images/img_cgrfekq95a6jpng.png"
                      alt="cgrfekq95a6jpng"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-900_01 flex flex-col items-center justify-start mt-[151px] md:px-10 sm:px-5 px-80 w-full">
                <div className="flex flex-col gap-12 items-center justify-end max-w-7xl mx-auto py-32 w-full">
                  <div className="bg-black-900_01 h-[360px] mt-[155px] rounded-lg w-full"></div>
                  <div className="flex flex-col items-center justify-start pt-14 w-full">
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-2 items-start justify-between w-full">
                        <Input
                          name="divflex_One"
                          placeholder="Search Locations..."
                          className="!placeholder:text-gray-500 !text-gray-500 leading-[normal] p-0 text-base text-left w-full"
                          wrapClassName="border border-gray-700 border-solid md:flex-1 mb-2 rounded-lg md:w-full"
                        ></Input>
                        <div className="bg-black-900 border border-gray-900_01 border-solid flex flex-col items-center justify-start p-[13px] rounded-lg">
                          <Img
                            className="h-6 w-6"
                            src="images/img_save.svg"
                            alt="save"
                          />
                        </div>
                      </div>
                      <div className="gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                        <div className="flex flex-1 flex-col items-center justify-start p-[22px] sm:px-5 rounded-lg shadow-bs2 w-full">
                          <div className="flex flex-col items-start justify-start mb-[23px] w-[99%] md:w-full">
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtManropeBold20"
                            >
                              Brickell
                            </Text>
                            <div className="flex flex-row gap-[13px] items-center justify-start mt-[21px] w-[39%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_call.svg"
                                alt="call"
                              />
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                (305) 381-0211
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-start mt-3 w-[53%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_lock_gray_300.svg"
                                alt="lock"
                              />
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                Info@TalkinTacos.net
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-start mt-3 w-[41%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_linkedin.svg"
                                alt="linkedin"
                              />
                              <Text
                                className="leading-[24.00px] text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                <>
                                  97 SW 8th St
                                  <br />
                                  Miami, FL 33130
                                </>
                              </Text>
                            </div>
                            <div className="h-[200px] md:h-[209px] mt-[11px] relative w-full">
                              <Img
                                className="absolute h-6 left-[0] top-[0] w-6"
                                src="images/img_clock_gray_300.svg"
                                alt="clock"
                              />
                              <Text
                                className="ml-9 text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                Closed
                              </Text>
                              <div className="absolute flex flex-col gap-10 h-max inset-[0] items-end justify-center m-auto w-full">
                                <div className="flex flex-row items-center justify-end w-[26%] md:w-full">
                                  <Text
                                    className="text-base text-center text-green-A700"
                                    size="txtManropeRegular16GreenA700"
                                  >
                                    See Hours
                                  </Text>
                                  <Img
                                    className="h-4 ml-[3px] w-4"
                                    src="images/img_arrowright.svg"
                                    alt="arrowright"
                                  />
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                                    <Button
                                      className="border border-green-A700 border-solid cursor-pointer font-bold min-w-[368px] text-base text-center"
                                      shape="round"
                                      color="green_A700"
                                      size="lg"
                                      variant="fill"
                                    >
                                      Order Now
                                    </Button>
                                    <Button
                                      className="cursor-pointer font-bold min-w-[368px] text-base text-center"
                                      shape="round"
                                      color="green_A700"
                                      size="lg"
                                      variant="outline"
                                    >
                                      Make this your location
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start p-[22px] sm:px-5 rounded-lg shadow-bs2 w-full">
                          <div className="flex flex-col items-start justify-start mb-[23px] w-[99%] md:w-full">
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtManropeBold20"
                            >
                              Miramar
                            </Text>
                            <div className="flex flex-row gap-[13px] items-center justify-start mt-[21px] w-[42%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_call.svg"
                                alt="call"
                              />
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                (954) 995-3255
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-start mt-3 w-[53%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_lock_gray_300.svg"
                                alt="lock"
                              />
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                Info@TalkinTacos.net
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-start mt-3 w-[46%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_linkedin.svg"
                                alt="linkedin"
                              />
                              <Text
                                className="leading-[24.00px] text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                <>
                                  3456 Red Rd
                                  <br />
                                  Miramar, FL 33025
                                </>
                              </Text>
                            </div>
                            <div className="h-[200px] md:h-[209px] mt-[11px] relative w-full">
                              <Img
                                className="absolute h-6 left-[0] top-[0] w-6"
                                src="images/img_clock_gray_300.svg"
                                alt="clock"
                              />
                              <Text
                                className="ml-9 mt-[3px] text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                Open until 2:00 AM
                              </Text>
                              <div className="absolute flex flex-col gap-10 h-max inset-[0] items-end justify-center m-auto w-full">
                                <div className="flex flex-row items-center justify-end w-[26%] md:w-full">
                                  <Text
                                    className="text-base text-center text-green-A700"
                                    size="txtManropeRegular16GreenA700"
                                  >
                                    See Hours
                                  </Text>
                                  <Img
                                    className="h-4 ml-[3px] w-4"
                                    src="images/img_arrowright.svg"
                                    alt="arrowright"
                                  />
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                                    <Button
                                      className="border border-green-A700 border-solid cursor-pointer font-bold min-w-[368px] text-base text-center"
                                      shape="round"
                                      color="green_A700"
                                      size="lg"
                                      variant="fill"
                                    >
                                      Order Now
                                    </Button>
                                    <Button
                                      className="cursor-pointer font-bold min-w-[368px] text-base text-center"
                                      shape="round"
                                      color="green_A700"
                                      size="lg"
                                      variant="outline"
                                    >
                                      Make this your location
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs2 w-full">
                          <div className="flex flex-col items-start justify-start mb-[22px] w-full">
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtManropeBold20"
                            >
                              Wynwood
                            </Text>
                            <div className="flex flex-row gap-[13px] items-center justify-start mt-[18px] w-[41%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_call.svg"
                                alt="call"
                              />
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                (786) 779-3885
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-start mt-3 w-[53%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_lock_gray_300.svg"
                                alt="lock"
                              />
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                Info@TalkinTacos.net
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-start mt-3 w-[54%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_linkedin.svg"
                                alt="linkedin"
                              />
                              <Text
                                className="leading-[24.00px] text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                <>
                                  172 Northwest 24th St
                                  <br />
                                  Miami, FL 33127
                                </>
                              </Text>
                            </div>
                            <div className="h-[200px] md:h-[209px] mt-[11px] relative w-full">
                              <Img
                                className="absolute h-6 left-[0] top-[0] w-6"
                                src="images/img_clock_gray_300.svg"
                                alt="clock"
                              />
                              <Text
                                className="ml-9 mt-[3px] text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                Open until 10:00 PM
                              </Text>
                              <div className="absolute flex flex-col gap-10 h-max inset-[0] items-end justify-center m-auto w-full">
                                <div className="flex flex-row items-center justify-end w-[26%] md:w-full">
                                  <Text
                                    className="text-base text-center text-green-A700"
                                    size="txtManropeRegular16GreenA700"
                                  >
                                    See Hours
                                  </Text>
                                  <Img
                                    className="h-4 ml-[3px] w-4"
                                    src="images/img_arrowright.svg"
                                    alt="arrowright"
                                  />
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                                    <Button
                                      className="border border-green-A700 border-solid cursor-pointer font-bold min-w-[368px] text-base text-center"
                                      shape="round"
                                      color="green_A700"
                                      size="lg"
                                      variant="fill"
                                    >
                                      Order Now
                                    </Button>
                                    <Button
                                      className="cursor-pointer font-bold min-w-[368px] text-base text-center"
                                      shape="round"
                                      color="green_A700"
                                      size="lg"
                                      variant="outline"
                                    >
                                      Make this your location
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs2 w-full">
                          <div className="flex flex-col items-start justify-start mb-[22px] w-full">
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtManropeBold20"
                            >
                              Wellington
                            </Text>
                            <div className="flex flex-row gap-[13px] items-center justify-start mt-[18px] w-[41%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_call.svg"
                                alt="call"
                              />
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                (954) 838-1853
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-start mt-3 w-[53%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_lock_gray_300.svg"
                                alt="lock"
                              />
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                Info@TalkinTacos.net
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-start mt-3 w-[64%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_linkedin.svg"
                                alt="linkedin"
                              />
                              <Text
                                className="leading-[24.00px] text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                <>
                                  10140 Forest Hill Blvd, #170
                                  <br />
                                  Wellington, FL 33414
                                </>
                              </Text>
                            </div>
                            <div className="h-[200px] md:h-[209px] mt-[11px] relative w-full">
                              <Img
                                className="absolute h-6 left-[0] top-[0] w-6"
                                src="images/img_clock_gray_300.svg"
                                alt="clock"
                              />
                              <Text
                                className="ml-9 mt-[3px] text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                Open until 2:00 AM
                              </Text>
                              <div className="absolute flex flex-col gap-10 h-max inset-[0] items-end justify-center m-auto w-full">
                                <div className="flex flex-row items-center justify-end w-[26%] md:w-full">
                                  <Text
                                    className="text-base text-center text-green-A700"
                                    size="txtManropeRegular16GreenA700"
                                  >
                                    See Hours
                                  </Text>
                                  <Img
                                    className="h-4 ml-[3px] w-4"
                                    src="images/img_arrowright.svg"
                                    alt="arrowright"
                                  />
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                                    <Button
                                      className="border border-green-A700 border-solid cursor-pointer font-bold min-w-[368px] text-base text-center"
                                      shape="round"
                                      color="green_A700"
                                      size="lg"
                                      variant="fill"
                                    >
                                      Order Now
                                    </Button>
                                    <Button
                                      className="cursor-pointer font-bold min-w-[368px] text-base text-center"
                                      shape="round"
                                      color="green_A700"
                                      size="lg"
                                      variant="outline"
                                    >
                                      Make this your location
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs2 w-full">
                          <div className="flex flex-col items-start justify-start mb-[22px] w-full">
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtManropeBold20"
                            >
                              Coral Springs
                            </Text>
                            <div className="flex flex-row gap-[13px] items-center justify-start mt-[18px] w-[41%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_call.svg"
                                alt="call"
                              />
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                (954) 290-0941
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-start mt-3 w-[53%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_lock_gray_300.svg"
                                alt="lock"
                              />
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                Info@TalkinTacos.net
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-start mt-3 w-[57%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_linkedin.svg"
                                alt="linkedin"
                              />
                              <Text
                                className="leading-[24.00px] text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                <>
                                  2866 N University Dr
                                  <br />
                                  Coral Springs, FL 33065
                                </>
                              </Text>
                            </div>
                            <div className="h-[200px] md:h-[209px] mt-[11px] relative w-full">
                              <Img
                                className="absolute h-6 left-[0] top-[0] w-6"
                                src="images/img_clock_gray_300.svg"
                                alt="clock"
                              />
                              <Text
                                className="ml-9 mt-[3px] text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                Open until 2:00 AM
                              </Text>
                              <div className="absolute flex flex-col gap-10 h-max inset-[0] items-end justify-center m-auto w-full">
                                <div className="flex flex-row items-center justify-end w-[26%] md:w-full">
                                  <Text
                                    className="text-base text-center text-green-A700"
                                    size="txtManropeRegular16GreenA700"
                                  >
                                    See Hours
                                  </Text>
                                  <Img
                                    className="h-4 ml-[3px] w-4"
                                    src="images/img_arrowright.svg"
                                    alt="arrowright"
                                  />
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                                    <Button
                                      className="border border-green-A700 border-solid cursor-pointer font-bold min-w-[368px] text-base text-center"
                                      shape="round"
                                      color="green_A700"
                                      size="lg"
                                      variant="fill"
                                    >
                                      Order Now
                                    </Button>
                                    <Button
                                      className="cursor-pointer font-bold min-w-[368px] text-base text-center"
                                      shape="round"
                                      color="green_A700"
                                      size="lg"
                                      variant="outline"
                                    >
                                      Make this your location
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start p-[22px] sm:px-5 rounded-lg shadow-bs2 w-full">
                          <div className="flex flex-col items-start justify-start mb-[23px] w-[99%] md:w-full">
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtManropeBold20"
                            >
                              Jacksonville
                            </Text>
                            <div className="flex flex-row gap-[13px] items-center justify-start mt-[21px] w-[41%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_call.svg"
                                alt="call"
                              />
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                (904) 853-5140
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-start mt-3 w-[53%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_lock_gray_300.svg"
                                alt="lock"
                              />
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                Info@TalkinTacos.net
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-start mt-3 w-[67%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_linkedin.svg"
                                alt="linkedin"
                              />
                              <Text
                                className="leading-[24.00px] text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                <>
                                  1300 Beach Blvd
                                  <br />
                                  Jacksonville Beach, FL 32250
                                </>
                              </Text>
                            </div>
                            <div className="h-[200px] md:h-[209px] mt-[11px] relative w-full">
                              <Img
                                className="absolute h-6 left-[0] top-[0] w-6"
                                src="images/img_clock_gray_300.svg"
                                alt="clock"
                              />
                              <Text
                                className="ml-9 mt-[3px] text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                Open until 10:00 PM
                              </Text>
                              <div className="absolute flex flex-col gap-10 h-max inset-[0] items-end justify-center m-auto w-full">
                                <div className="flex flex-row items-center justify-end w-[26%] md:w-full">
                                  <Text
                                    className="text-base text-center text-green-A700"
                                    size="txtManropeRegular16GreenA700"
                                  >
                                    See Hours
                                  </Text>
                                  <Img
                                    className="h-4 ml-[3px] w-4"
                                    src="images/img_arrowright.svg"
                                    alt="arrowright"
                                  />
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                                    <Button
                                      className="border border-green-A700 border-solid cursor-pointer font-bold min-w-[368px] text-base text-center"
                                      shape="round"
                                      color="green_A700"
                                      size="lg"
                                      variant="fill"
                                    >
                                      Order Now
                                    </Button>
                                    <Button
                                      className="cursor-pointer font-bold min-w-[368px] text-base text-center"
                                      shape="round"
                                      color="green_A700"
                                      size="lg"
                                      variant="outline"
                                    >
                                      Make this your location
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start p-[22px] sm:px-5 rounded-lg shadow-bs2 w-full">
                          <div className="flex flex-col items-start justify-start mb-[23px] w-[99%] md:w-full">
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtManropeBold20"
                            >
                              Atlanta
                            </Text>
                            <div className="flex flex-row gap-[13px] items-center justify-start mt-[21px] w-[41%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_call.svg"
                                alt="call"
                              />
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                (321) 333-2984
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-start mt-3 w-[53%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_lock_gray_300.svg"
                                alt="lock"
                              />
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                Info@TalkinTacos.net
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-start mt-3 w-[67%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_linkedin.svg"
                                alt="linkedin"
                              />
                              <Text
                                className="leading-[24.00px] text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                <>
                                  2625 Piedmont Rd NE, #34A
                                  <br />
                                  Atlanta, GA 30324
                                </>
                              </Text>
                            </div>
                            <div className="h-[200px] md:h-[209px] mt-[11px] relative w-full">
                              <Img
                                className="absolute h-6 left-[0] top-[0] w-6"
                                src="images/img_clock_gray_300.svg"
                                alt="clock"
                              />
                              <Text
                                className="ml-9 mt-[3px] text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                Open until 10:00 PM
                              </Text>
                              <div className="absolute flex flex-col gap-10 h-max inset-[0] items-end justify-center m-auto w-full">
                                <div className="flex flex-row items-center justify-end w-[26%] md:w-full">
                                  <Text
                                    className="text-base text-center text-green-A700"
                                    size="txtManropeRegular16GreenA700"
                                  >
                                    See Hours
                                  </Text>
                                  <Img
                                    className="h-4 ml-[3px] w-4"
                                    src="images/img_arrowright.svg"
                                    alt="arrowright"
                                  />
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                                    <Button
                                      className="border border-green-A700 border-solid cursor-pointer font-bold min-w-[368px] text-base text-center"
                                      shape="round"
                                      color="green_A700"
                                      size="lg"
                                      variant="fill"
                                    >
                                      Order Now
                                    </Button>
                                    <Button
                                      className="cursor-pointer font-bold min-w-[368px] text-base text-center"
                                      shape="round"
                                      color="green_A700"
                                      size="lg"
                                      variant="outline"
                                    >
                                      Make this your location
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-lg shadow-bs2 w-full">
                          <div className="flex flex-col items-start justify-start mb-[22px] w-full">
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtManropeBold20"
                            >
                              Doral - Opening Dec 9!
                            </Text>
                            <div className="flex flex-row gap-[13px] items-center justify-start mt-[18px] w-[42%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_call.svg"
                                alt="call"
                              />
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                (786) 918-2908
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-start mt-3 w-[53%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_lock_gray_300.svg"
                                alt="lock"
                              />
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                Info@TalkinTacos.net
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-start mt-3 w-[64%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_linkedin.svg"
                                alt="linkedin"
                              />
                              <Text
                                className="leading-[24.00px] text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                <>
                                  7586 NW 104th Ave, #G103
                                  <br />
                                  Doral, FL 33178
                                </>
                              </Text>
                            </div>
                            <div className="h-[200px] md:h-[209px] mt-[11px] relative w-full">
                              <Img
                                className="absolute h-6 left-[0] top-[0] w-6"
                                src="images/img_clock_gray_300.svg"
                                alt="clock"
                              />
                              <Text
                                className="ml-9 mt-[3px] text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                Open until 10:00 PM
                              </Text>
                              <div className="absolute flex flex-col gap-10 h-max inset-[0] items-end justify-center m-auto w-full">
                                <div className="flex flex-row items-center justify-end w-[26%] md:w-full">
                                  <Text
                                    className="text-base text-center text-green-A700"
                                    size="txtManropeRegular16GreenA700"
                                  >
                                    See Hours
                                  </Text>
                                  <Img
                                    className="h-4 ml-[3px] w-4"
                                    src="images/img_arrowright.svg"
                                    alt="arrowright"
                                  />
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                                    <Button
                                      className="border border-green-A700 border-solid cursor-pointer font-bold min-w-[368px] text-base text-center"
                                      shape="round"
                                      color="green_A700"
                                      size="lg"
                                      variant="fill"
                                    >
                                      Order Now
                                    </Button>
                                    <Button
                                      className="cursor-pointer font-bold min-w-[368px] text-base text-center"
                                      shape="round"
                                      color="green_A700"
                                      size="lg"
                                      variant="outline"
                                    >
                                      Make this your location
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start p-[22px] sm:px-5 rounded-lg shadow-bs2 w-full">
                          <div className="flex flex-col items-start justify-start mb-[23px] w-[99%] md:w-full">
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtManropeBold20"
                            >
                              Orlando
                            </Text>
                            <div className="flex flex-row gap-[13px] items-center justify-start mt-[21px] w-[42%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_call.svg"
                                alt="call"
                              />
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                (407) 704-4480
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-start mt-3 w-[53%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_lock_gray_300.svg"
                                alt="lock"
                              />
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                Info@TalkinTacos.net
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-start mt-3 w-[46%] md:w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_linkedin.svg"
                                alt="linkedin"
                              />
                              <Text
                                className="leading-[24.00px] text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                <>
                                  3123 S Orange Ave
                                  <br />
                                  Orlando, FL 32806
                                </>
                              </Text>
                            </div>
                            <div className="h-[200px] md:h-[209px] mt-[11px] relative w-full">
                              <Img
                                className="absolute h-6 left-[0] top-[0] w-6"
                                src="images/img_clock_gray_300.svg"
                                alt="clock"
                              />
                              <Text
                                className="ml-9 mt-[3px] text-base text-gray-300"
                                size="txtManropeRegular16"
                              >
                                Open until 10:00 PM
                              </Text>
                              <div className="absolute flex flex-col gap-10 h-max inset-[0] items-end justify-center m-auto w-full">
                                <div className="flex flex-row items-center justify-end w-[26%] md:w-full">
                                  <Text
                                    className="text-base text-center text-green-A700"
                                    size="txtManropeRegular16GreenA700"
                                  >
                                    See Hours
                                  </Text>
                                  <Img
                                    className="h-4 ml-[3px] w-4"
                                    src="images/img_arrowright.svg"
                                    alt="arrowright"
                                  />
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                                    <Button
                                      className="border border-green-A700 border-solid cursor-pointer font-bold min-w-[368px] text-base text-center"
                                      shape="round"
                                      color="green_A700"
                                      size="lg"
                                      variant="fill"
                                    >
                                      Order Now
                                    </Button>
                                    <Button
                                      className="cursor-pointer font-bold min-w-[368px] text-base text-center"
                                      shape="round"
                                      color="green_A700"
                                      size="lg"
                                      variant="outline"
                                    >
                                      Make this your location
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start max-w-[1629px] mx-auto md:px-5 w-full">
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <Img
                    className="h-[60px]"
                    src="images/img_divflex.svg"
                    alt="divflex_Two"
                  />
                  <Line className="bg-gray-700 h-px w-full" />
                  <div className="flex md:flex-col flex-row gap-[23px] items-start justify-between w-[97%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between pb-[178px] w-[83%] md:w-full">
                      <div className="md:h-[173px] h-[222px] relative w-[34%] md:w-full">
                        <div className="absolute flex flex-col items-start justify-start left-[0] pb-[22px] top-[0] w-[87%]">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-lg text-white-A700"
                              size="txtManropeBold18"
                            >
                              Social
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-center justify-start mt-[23px] md:pr-10 sm:pr-5 pr-[124px] w-[49%] md:w-full">
                            <Img
                              className="h-6 w-6"
                              src="images/img_facebook.svg"
                              alt="facebook"
                            />
                            <Img
                              className="h-6 w-6"
                              src="images/img_linkviewinstagram.svg"
                              alt="linkviewinstagr"
                            />
                          </div>
                          <Text
                            className="mt-3.5 text-white-A700 text-xl"
                            size="txtManropeBold20"
                          >
                            Newsletter
                          </Text>
                          <Text
                            className="mt-4 text-base text-white-A700"
                            size="txtManropeMedium16"
                          >
                            Subscribe to our news letter to get latest updates
                          </Text>
                        </div>
                        <div className="absolute bg-blue_gray-100 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-auto p-[9px] rounded-lg w-full">
                          <Text
                            className="ml-3 text-base text-gray-600"
                            size="txtManropeMedium16Gray600"
                          >
                            Your Email address
                          </Text>
                          <Button
                            className="cursor-pointer font-semibold min-w-[129px] text-base text-center"
                            shape="round"
                            color="green_A700"
                            size="xs"
                            variant="fill"
                          >
                            Subscribe
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col relative w-1/5 md:w-full">
                        <div className="flex flex-col gap-[15px] items-center justify-start mx-auto pb-4 w-full">
                          <div className="flex flex-col items-start justify-start pr-0.5 pt-0.5 w-full">
                            <Text
                              className="text-lg text-white-A700"
                              size="txtManropeBold18"
                            >
                              My Account
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2 items-center justify-start w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeBold16Gray300"
                              >
                                Profile
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeBold16Gray300"
                              >
                                Address
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="mt-0.5 text-base text-gray-300"
                                size="txtManropeBold16Gray300"
                              >
                                Coupons
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-base text-gray-300"
                                size="txtManropeBold16Gray300"
                              >
                                Wallet
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="mt-[-10.76px] text-base text-gray-300 z-[1]"
                          size="txtManropeBold16Gray300"
                        >
                          Orders
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[15px] items-center justify-start pb-4 w-[16%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-lg text-white-A700"
                          size="txtManropeBold18"
                        >
                          Quick Links
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <a
                            href="javascript:"
                            className="text-base text-gray-300"
                          >
                            <Text size="txtManropeBold16Gray300">Contact Us</Text>
                          </a>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <a
                            href="javascript:"
                            className="mt-0.5 text-base text-gray-300"
                          >
                            <Text size="txtManropeBold16Gray300">
                              Privacy Policy
                            </Text>
                          </a>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <a
                            href="javascript:"
                            className="text-base text-gray-300"
                          >
                            <Text size="txtManropeBold16Gray300">
                              Terms and Conditions
                            </Text>
                          </a>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-base text-gray-300"
                            size="txtManropeBold16Gray300"
                          >
                            About Us
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray-700 h-px w-full" />
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[33%] md:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-base text-gray-300"
                            size="txtManropeRegular16"
                          >
                            Terms of Use
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[23px] pt-[3px]">
                          <a
                            href="javascript:"
                            className="text-base text-gray-300"
                          >
                            <Text size="txtManropeRegular16">Privacy Policy</Text>
                          </a>
                        </div>
                        <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[23px] pt-[3px]">
                          <Text
                            className="text-base text-gray-300"
                            size="txtManropeRegular16"
                          >
                            Accessibility Statement
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="text-base text-green-A700"
                      size="txtManropeBold16GreenA700"
                    >
                      Made with Owner.com
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
