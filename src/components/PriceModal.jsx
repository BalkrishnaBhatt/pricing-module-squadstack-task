import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import _ from 'lodash'
export default function PriceModal(props) {

    const [open, setOpen] = useState(props.modelState)
    const [formData, setFormData] = useState("")

    const cancelButtonRef = useRef(null)

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    function changeModel() {
        setOpen(false)
        props.changeState(!open)
    }

    function showData(e) {
        e.preventDefault()
        alert(`User Name = ${formData}` );
        changeModel()
        console.log(e, "data", formData)
    }

    function changeForm(e){
        setFormData(e.target.value)
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
                    onClose={() => changeModel()}
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
                            <div className="inline-block align-bottom bg-white text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                                <div className="bg-white px-2 pt-5 pb-4 sm:p-6 sm:pb-4 text-gray-600 ">
                                    <div className=''>
                                        <div className='px-4'>
                                            <h3 className="border-b-2 border-gray-300 text-gray-600 text-xl font-extrabold text-center"> Get Started with SuqadVoice </h3>
                                        </div>
                                    </div>
                                    <div className='flex px-5 pt-2'>
                                        <h2 className="text-gray-600  font-extrabold ">Plan Selected: &nbsp;</h2>
                                        <h2>{props.data[props.currentPos].name}</h2>
                                    </div>
                                    <form method="get" action="/">
                                        <div className=" overflow-hidden sm:rounded-md">
                                            <div className="px-4 py-5 bg-white sm:p-6">
                                                <div className="grid grid-cols-6 gap-6">

                                                    <div className="col-span-6">
                                                        <label for="email-address" className="block text-xs font-bold text-gray-600">Name</label>
                                                        <input onChange={(e)=> changeForm(e, "name")} type="text" name="email-address" id="email-address" className="mt-1 focus:ring-indigo-500 py-1 px-3 border border-gray-300 focus:border-gray-200 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md" />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label for="first-name" className="block text-xs font-bold text-gray-600">E-mail Address</label>
                                                        <input  type="text" name="first-name" id="first-name" className="mt-1 focus:ring-indigo-500 py-1 px-3 border border-gray-300 focus:border-gray-200 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md" />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label for="last-name" className="block text-xs font-bold text-gray-600">Phone No.</label>
                                                        <input type="text" name="last-name" id="last-name" className="mt-1 focus:ring-indigo-500 py-1 px-3 border border-gray-300 focus:border-gray-200 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md" />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label for="country" className="block text-xs font-bold text-gray-600">Number of leads you generate in month</label>
                                                        <select id="country" name="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs">
                                                            <option>Zoho</option>
                                                            <option>Salesforce</option>
                                                            <option>SAP</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label for="country" className="block text-xs font-bold text-gray-600">Total leads in your CRM</label>
                                                        <select id="country" name="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs">
                                                            <option>United States</option>
                                                            <option>Canada</option>
                                                            <option>Mexico</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label for="country" className="block text-xs font-bold text-gray-600">Which CRM do you use?</label>
                                                        <select id="country" name="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs">
                                                            <option>Zoho</option>
                                                            <option>Salesforce</option>
                                                            <option>SAP</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label for="country" className="block text-xs font-bold text-gray-600">No of Agents</label>
                                                        <select id="country" name="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs">
                                                            <option>United States</option>
                                                            <option>Canada</option>
                                                            <option>Mexico</option>
                                                        </select>
                                                    </div>


                                                    <div className="col-span-6">
                                                        <label for="city" className="block text-sm font-bold text-gray-600 m-2">What are your biggest lead Source?</label>
                                                        <input type="checkbox" className="form-checkbox mx-4" />Zillow
                                                        <input type="checkbox" className="form-checkbox mx-4" />Realtor
                                                        <input type="checkbox" className="form-checkbox mx-4" />Ylopo
                                                        <input type="checkbox" className="form-checkbox mx-4" />Other
                                                    </div>

                                                    {/* <div className="col-span-6 sm:col-span-6 lg:col-span-2">
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
                                                    </div> */}

                                                    <div className="col-span-6">
                                                        <label for="city" className="block text-sm font-medium text-gray-700 m-2">How did you hear about us?</label>
                                                        <input type="checkbox" className="form-checkbox mx-2" />Google
                                                        <input type="checkbox" className="form-checkbox mx-2" />Facebook
                                                        <input type="checkbox" className="form-checkbox mx-2" />Email
                                                        <input type="checkbox" className="form-checkbox mx-2" />Friends
                                                        <input type="checkbox" className="form-checkbox mx-2" />Real Closers
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-3 float-left text-right sm:px-6">
                                                <button onClick={(e) => showData(e)} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-sm text-white bg-orange-400 hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                                                    Submit
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