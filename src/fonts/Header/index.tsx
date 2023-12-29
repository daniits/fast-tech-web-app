import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <Img
          className="common-pointer h-[63px] mb-[31px] md:ml-[0] ml-[127px] md:mt-0 mt-[18px]"
          src="images/img_close_green_a700_63x52.svg"
          alt="close"
          onClick={() => navigate(-1)}
        />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[194px] items-center justify-center md:ml-[0] ml-[101px] mr-80 md:mt-0 my-4 w-[69%] md:w-full">
          <div className="flex flex-col items-center justify-start py-4 w-[43%] md:w-full">
            <div className="flex pb-0.5 pr-0.5 relative w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[71%]">
                <div className="flex flex-col items-center justify-end p-[9px]">
                  <Text
                    className="mt-1.5 text-sm text-white-A700"
                    size="txtManropeBold14"
                  >
                    Home
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end p-[7px]">
                  <Text
                    className="mb-0.5 mt-2 text-sm text-white-A700"
                    size="txtManropeBold14"
                  >
                    Menu
                  </Text>
                </div>
                <div className="flex flex-row gap-6 items-start justify-center pr-2.5 py-2.5 w-[42%] sm:w-full">
                  <Text
                    className="mt-[5px] text-green-A700 text-sm"
                    size="txtManropeBold14GreenA700"
                  >
                    Orders
                  </Text>
                  <Text
                    className="mr-[11px] mt-[5px] text-sm text-white-A700"
                    size="txtManropeBold14"
                  >
                    Favourites
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end ml-0.5 sm:ml-[0] pr-[9px] py-[9px]">
                  <Text
                    className="mt-1.5 text-sm text-white-A700"
                    size="txtManropeBold14"
                  >
                    Rewards
                  </Text>
                </div>
              </div>
              <Text
                className="mb-2.5 ml-[-5.17px] mr-[87px] mt-auto text-center text-sm text-white-A700 z-[1]"
                size="txtManropeBold14"
              >
                Refer & Earn
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start py-[15px] w-[43%] md:w-full">
            <div className="flex flex-row items-center justify-end md:pl-10 sm:pl-5 pl-[229px] w-full">
              <div className="flex flex-row items-center justify-center p-[13px] w-[39%]">
                <Img
                  className="h-6 ml-1 w-6"
                  src="images/img_clock.svg"
                  alt="clock"
                />
                <Text
                  className="ml-1 text-center text-sm text-white-A700"
                  size="txtManropeBold14"
                >
                  Closed
                </Text>
                <Img
                  className="h-4 mx-[3px] w-4"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-2 items-center justify-center p-[13px] w-[31%]">
                <Img
                  className="h-6 ml-1 w-6"
                  src="images/img_lock.svg"
                  alt="lock"
                />
                <Text
                  className="mr-[3px] text-center text-sm text-white-A700"
                  size="txtManropeBold14"
                >
                  Login
                </Text>
              </div>
              <Button
                className="border border-green-A700 border-solid cursor-pointer flex items-center justify-center min-w-[100px]"
                leftIcon={
                  <Img
                    className="h-6 mr-3"
                    src="images/img_svg.svg"
                    alt="SVG"
                  />
                }
                shape="round"
                color="green_A700"
                size="md"
                variant="fill"
              >
                <div className="font-bold font-manrope text-center text-sm">
                  Cart
                </div>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
