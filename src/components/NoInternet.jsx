import React from 'react';
export default function NoInternet() {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className='h-screen flex flex-wrap content-center justify-center bg-gray-600 '>
            <div classNames="bg-gray-600">
                <p className=" text-sm font-semibold text-white text-xl">You are not connected to internet!</p>
            </div>
        </div>
    )
}