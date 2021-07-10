import React from 'react';

export default function NoInternet(){

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

    return(
        <div className='bg-gray-600 p-64 max-w-full'>
        <div classNames="bg-gray-600 flex justify-center text-center">
            <p className="p-64 bg-gray-600 text-sm font-semibold text-white text-center text-xl">You are not connected to internet!</p>
        </div>
        </div>
    )
}