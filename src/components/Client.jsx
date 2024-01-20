import React from "react";
import { clients } from "../contants";
import style from '../style'
import {Button} from '../components/index'

function Client() {
  return (
    <section className="md:px-16">
      <div className="flex flex-wrap justify-between items-center gap-10 xs:gap-0 px-20 sm:flex-row">
        {clients.map((client, index) => (
          <img
            className="text-white sm:w-[170px] w-[180px] p-5 xs:py-4 xs:px-6  xs:my-5 hover:bg-dimBlue rounded-3xl "
            src={client.logo}
            alt={client.clientname}
          />
        ))}
      </div>
      <div className="gradient-card w-full mt-6 xs:p-20 p-8 rounded-3xl md:flex md:justify-between">
         <div className="sm:pl-10 sm:gap-10">
         <h2 className={` text-[30px] xs:text-[40px] text-white font-poppins font-semibold  md:pl-16`}>
         Let's try our service now!
         </h2>
         <p className="text-dimWhite font-poppins md:pl-16 sm:max-w-[470px]">
         Everything you need to accept card payments and grow your business
          anywhere on the planet.
         </p>
         </div>
         <Button className={'bg-blue-gradient mr-10  h-12 sm:ml-10'}/>
      </div>
    </section>
  );
}

export default Client;
