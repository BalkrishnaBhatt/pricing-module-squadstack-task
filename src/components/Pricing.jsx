import React, { useRef, useState } from 'react';
import PriceModal from './PriceModal';
import data from  '../data.json'

let pos = localStorage.getItem("currentPosition") || 2;

const homePricePoints = [
  "100K-200K",
  "200K-300K",
  "300K-400K",
  "400K-500K",
  "500K+"
]

export default function Pricing() {

  const [currentPosition, setCurrentPosition] = useState(pos);
  const [currentModelPosition, setCurrentModelPosition] = useState(0)
  const [open, setOpen] = useState(false)

  const onPriceChange = (i) => {
    setCurrentPosition(i)
    localStorage.setItem('currentPosition', i);
    console.log(i, "currentPosition", localStorage.getItem("currentPosition"))
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  function changeModelState(op){
    parseURLParams()
    setOpen(!open)
  }

  function openModel(i) {
    console.log(i)
    setCurrentModelPosition(i)
    setOpen(!open)
  }

  function parseURLParams() {
    const url = window.location.href
    // var queryStart = url.indexOf("?") + 1,
    //     queryEnd   = url.indexOf("#") + 1 || url.length + 1,
    //     query = url.slice(queryStart, queryEnd - 1),
    //     pairs = query.replace(/\+/g, " ").split("&"),
    //     parms = {}, i, n, v, nv;

    // if (query === url || query === "") return;

    // for (i = 0; i < pairs.length; i++) {
    //     nv = pairs[i].split("=", 2);
    //     n = decodeURIComponent(nv[0]);
    //     v = decodeURIComponent(nv[1]);

    //     if (!parms.hasOwnProperty(n)) parms[n] = [];
    //     parms[n].push(nv.length === 2 ? v : null);
    // }
    
    console.log(url,"PARAM")
}

  return (
    <div className="bg-white">
      <div className="max-w-full sm:py-24 sm:px-24 ">
        <div className="sm:flex sm:flex-col sm:align-center">
          <div className="w-full relative self-center mt-6 bg-gray-100 rounded-lg flex sm:mt-8">
            {
              homePricePoints.map((price, i) => (
                <button type="button"
                  onClick={() => onPriceChange(i)}
                  className={currentPosition == i ? "w-1/5 bg-gray-600 border-gray-200 rounded-md shadow-sm py-4 text-sm font-medium text-white whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10  sm:px-8"
                    : "ml-0.5 w-1/5 border-solid border-r-2 border-light-blue-500  py-4 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10  sm:px-8"} >
                  {price}
                </button>
              ))
            }
          </div>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-5">
          {data[currentPosition].map((tier, i) => (
            <div>
              {
                i == 1 ?
                  <div className='bg-orange-500 text-center py-4'>
                    <h2 className=" text-lg leading-6 font-medium text-white">{tier.name}</h2>
                  </div>
                  :
                  <div className='text-center py-7' />
              }

              {
                i == 4 ? <div className="border-y bg-gray-200 border-gray-200 shadow-sm divide-y divide-gray-200">
                  <div className=''>
                    <div className='bg-gray-600 text-center py-4'>
                      <h2 className=" text-lg leading-6 font-medium text-white">{tier.name}</h2>
                    </div>
                    <div className="px-8 text-center pt-36 pb-32">
                      {tier.text}
                    </div>
                  </div>
                </div>
                  : <div key={tier.name} className={i == 1 ? `border-y bg-gray-200 border-gray-200 shadow-sm divide-y divide-gray-200`
                    : "border-y border-gray-200 shadow-sm divide-y divide-gray-200"}>
                    <div className=''>
                      <div className='bg-gray-600 text-center py-4'>
                        <h2 className=" text-lg leading-6 font-medium text-white">{tier.name}</h2>
                      </div>
                      <div className="px-8 text-center m-4">
                        <div className='border-dashed border-b-2 border-gray-300 '>
                          <p className=" text-4xl font-extrabold text-gray-900">${tier.pricePerTransfer}</p>
                          <p className="mb-5 text-sm text-gray-500">Per Qualified lead</p>
                        </div>
                      </div>
                      <div className="px-8 text-center m-4">
                        <div className='border-dashed border-b-2 border-gray-300 '>
                          <p className="text-sm text-gray-500">Qualified Leads Per Month</p>
                          <p className="mb-5 text-sm text-gray-500">{tier.leads}</p>
                        </div>
                      </div>
                      <div className="px-8 text-center my-4">
                        <p className="mt-2 text-sm text-gray-500">Platform Fee Per Month</p>
                        <p className="mb-2 text-sm text-gray-500">${tier.platformPrice}</p>
                      </div>
                      <div className='bg-gray-600 text-center py-4'>
                        <h2 className=" text-lg leading-6 font-medium text-white">${tier.totalPrice}/mo</h2>
                      </div>
                    </div>
                  </div>
              }


              <button
                href={tier.href}
                onClick={() => openModel(i)}
                className={i == 1 ? "mt-8 block w-full bg-orange-500 border border-orange-600 py-4 text-sm font-semibold text-white text-center hover:bg-orange-700"
                  : "mt-8 block w-full bg-wite border border-orange-400 py-4 text-sm font-semibold text-orange-400 text-center hover:bg-gray-100"}
              //className="mt-8 block w-full bg-orange-500 border border-orange-600 py-4 text-sm font-semibold text-white text-center hover:bg-orange-700"
              //className="mt-8 block w-full bg-wite border border-orange-400 py-4 text-sm font-semibold text-orange-400 text-center hover:bg-gray-100"
              >
                {
                  i == 4 ? "Get in Touch"
                    : "Start Your Trial"

                }

              </button>
            </div>
          ))}
        </div>

        {
          open && <PriceModal currentPos={currentModelPosition} data={data[currentPosition]} modelState={open} changeState={(op) => changeModelState(op)} />
        }


      </div>
    </div>
  )
};

