import React, { useEffect, useState } from 'react'
import { Button } from "../../Button";
import { Img } from "../../Img";
import { Line } from "../../Line"
import { Text } from "../../Text"
import { CheckBox } from "../../CheckBox";
import axios from 'axios';

const Footer = () => {
    const apiUrl = `https://in-n-out-admin.cafescale.site/api/v1/config?restaurant_id=1`;


    const [data, setData] = useState<any>([]);


    console.log(data);

    useEffect(() => {
        axios.get(apiUrl).then(res => {
            setData(res?.data?.promotion_campaign)
            // console.log(res?.data?.promotion_campaign);
        })
            .catch(error => {
                console.log("Error:", error);

            })
    }, [])
    return (
        <div className="flex flex-col items-center justify-start max-w-[1629px]  mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
                <Img
                    className="h-[60px]"
                    src="images/img_divflex.svg"
                    alt="divflex"
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
                            <div className="bg-blue_gray-100 bottom-[0] flex flex-row inset-x-[0] items-center justify-between mx-auto p-[9px] rounded-lg w-full">
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
                                <a href="javascript:" className="text-base text-gray-300">
                                    <Text size="txtManropeBold16Gray300">Contact Us</Text>
                                </a>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                                <a
                                    href="javascript:"
                                    className="mt-0.5 text-base text-gray-300"
                                >
                                    <Text size="txtManropeBold16Gray300">Privacy Policy</Text>
                                </a>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                                <a href="javascript:" className="text-base text-gray-300">
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
                                <a href="javascript:" className="text-base text-gray-300">
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
    )
}

export default Footer