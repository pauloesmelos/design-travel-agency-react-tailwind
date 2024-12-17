import React from 'react';
import { FaCalendarAlt, FaHeadset } from "react-icons/fa";

const Search = () => {
  return (
    <section className="w-full bg-white py-20">
        <div className="w-full max-w-[1400px] mx-auto px-5">
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
                {/* LPGD and Services */}
                <div className="flex flex-col gap-16 col-span-2">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl text-neutral-800 font-bold">LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h1>
                        <p className="text-neutral-500 tracking-normal leading-8">
                            At BEACHES. your privacy is our priority, and we are fully committed to protecting your personal data in compliance with the General Data Protection Law (LGPD). By using our website, which showcases famous travel destinations in Brazil, you agree to the collection and processing of your data as outlined in our Privacy Policy.

                            We may collect personal information, such as your name, email address, and phone number, through forms on our site. Additionally, we use browsing data, including cookies, to enhance your experience and provide personalized content. This data helps us improve our services and ensure the information we display is relevant to your preferences.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6 lg:gap-12">
                        <div className="flex flex-col gap-4 bg-white border-2 border-blue-100 rounded-lg shadow-md px-8 py-10 hover:scale-[1.04] duration-1000">
                            <div className="p-3 bg-[#5651e5] text-neutral-100 text-3xl rounded-full w-[55px]">
                                <FaHeadset />
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-lg font-bold text-neutral-700">SUPPORT 24/7</h3>
                                <p className="text-neutral-500">
                                    We also use cookies to analyze website traffic and customize your experience.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 shadow-md px-8 py-10 bg-white border-2 border-blue-100 rounded-lg hover:scale-[1.04] duration-1000">
                            <div className="p-3 w-[55px] bg-[#5651e5] text-neutral-100 text-3xl rounded-full">
                                <FaCalendarAlt />
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-lg font-bold text-neutral-700">CHECK-IN-OUT</h3>
                                <p className="text-neutral-500">
                                    We also use cookies to analyze website traffic and customize your experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Checkin and Checkout  */}
                <div className="col-span-1 flex flex-col gap-6 mt-24 lg:mt-0">
                    <div className="p-3 flex flex-col gap-4 items-center border border-gray-200">
                        <p>
                            GET AND ADDITIONAL 10% OFF
                        </p>
                        <p>
                            12 HOURS LEFT
                        </p>
                        <button className="w-full bg-gradient-to-r from-slate-800 to-slate-800 font-light text-white px-8 py-2">
                            BOOK NOW AND SAFE
                        </button>
                    </div>
                    <div className="mt-10">
                        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-neutral-700" id="dest">
                                    Destination
                                </label>
                                <select className="w-full rounded-md px-4 py-2 border border-neutral-200">
                                    <option>
                                        Praia Grande
                                    </option>
                                    <option>
                                        Ubatuba
                                    </option>
                                    <option>
                                        Guaruja
                                    </option>
                                    <option>
                                        Itarere
                                    </option>
                                    <option>
                                        Fernando de Noronha
                                    </option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-neutral-700" id="checkin">
                                    Check-in
                                </label>
                                <input className="w-full rounded-md px-4 py-2 border border-neutral-200" type="date" id="checkin" name="checkin"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-medium text-neutral-700" id="checkout">
                                    Check-out
                                </label>
                                <input className="w-full rounded-md px-4 py-2 border border-neutral-200" type="date" id="checkout" name="checkout"/>
                            </div>
                            <button className="w-[60%] md:w-[30%] lg:w-full mt-5">
                                Save my trip
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Search;