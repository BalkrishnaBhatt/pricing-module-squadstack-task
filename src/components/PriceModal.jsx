import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'

export default function PriceModal(props) {

    const [open, setOpen] = useState(props.modelState)

    console.log(props.data.name)
    const cancelButtonRef = useRef(null)
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    function changeModel(){
        setOpen(false)
        props.changeState(!open)
    }

    function showData(e){
       
        e.preventDefault()
        console.log(e,"data",e.target.value)
    }

    function test(d){
        console.log(d,"DDDDD")
    }

    return (
        <div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    static
                    className="fixed z-10 inset-0 overflow-y-auto"
                    initialFocus={cancelButtonRef}
                    open={open}
                    onClose={()=> changeModel()}
                >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-white text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-2 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <form method={(d) => test(d)} action='test()'>
                                        <div className=" overflow-hidden sm:rounded-md">
                                            <div className="px-4 py-5 bg-white sm:p-6">
                                                <div className="grid grid-cols-6 gap-6">
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label for="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                                                        <input type="text" name="first-name" id="first-name"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label for="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                                                        <input type="text" name="last-name" id="last-name"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-4">
                                                        <label for="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                                                        <input type="text" name="email-address" id="email-address"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label for="country" className="block text-sm font-medium text-gray-700">Country / Region</label>
                                                        <select id="country" name="country"  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                            <option>United States</option>
                                                            <option>Canada</option>
                                                            <option>Mexico</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-span-6">
                                                        <label for="street-address" className="block text-sm font-medium text-gray-700">Street address</label>
                                                        <input type="text" name="street-address" id="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                        <label for="city" className="block text-sm font-medium text-gray-700">City</label>
                                                        <input type="text" name="city" id="city" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                        <label for="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                                                        <input type="text" name="state" id="state" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                        <label for="postal-code" className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                                                        <input type="text" name="postal-code" id="postal-code"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                <button onClick={(e)=> showData(e) }  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                    Save
                                                </button>
                                            </div>
                                        </div>

                                    </form>
                                </div>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

        </div>
    )
}