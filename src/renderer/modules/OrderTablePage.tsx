import React, { Fragment, useState } from 'react';
import Input from '../components/common/input/Input';
import Button from '../components/common/button/Button';
import { Link } from 'react-router-dom';
import BasicModal from '../components/common/modal/BasicModal';
import Popups from '../components/common/popup';
import OrderModal from './components/ordermodal';
import ServicesModal from './components/servicesmodal';

type Props = {};

const tableData = [
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
  {
    name: 'Numan Raaj',
    Phone: '+92-313-1111007',
    email: 'MuhammadNumangmail.com',
    available: 'No',
    price: '1000$',
    weight: '45kg',
  },
];

const OrderTablePage = (props: Props) => {
  const [services, setServices] = useState(false);
  const [orderedit, setorderEdit] = useState(false);
  const [popup, setPopup] = useState(false);
  const [remove, setRemove] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <Fragment>
      <div className="p-4 sm:ml-64 bg-[#f8fafb] px-10  ">
        <h1 className="self-center !text-4xl font-semibold sm:text-2xl whitespace-nowrap text-black py-2">
          Orders
        </h1>
        <div className="flex flex-col md:flex-row justify-center md:gap-32 items-center">
          <div className="basis-full md:basis-1/2 w-full md:w-auto mb-4 md:mb-0">
            <Input placeholder="search customers...." />
          </div>
          <div className="flex justify-end basis-full md:basis-1/2 w-full md:w-auto">
            <div>
              <Button onClick={() => setServices(true)}>Add Service</Button>
              <BasicModal show={services} hide={setServices}>
                <OrderModal />
              </BasicModal>
            </div>
          </div>
        </div>
        <div className="relative shadow-lg rounded-lg top-0 max-h-[800px]">
          <div className="overflow-x-auto">
            <div className="max-h-[750px]">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400 sticky top-0 z-10">
                  <tr>
                    <th scope="col" className="px-6 py-5">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-5">
                      Phone Number
                    </th>
                    <th scope="col" className="px-6 py-5">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-5">
                      Available
                    </th>
                    <th scope="col" className="px-6 py-5">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-5">
                      Weight
                    </th>
                    <th scope="col" className="px-6 py-5">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="overflow-y-auto">
                  {tableData.map((item, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.name}
                      </th>
                      <td className="px-6 py-4">{item.Phone}</td>
                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4">{item.available}</td>
                      <td className="px-6 py-4">{item.price}</td>
                      <td className="px-6 py-4">{item.weight}</td>
                      <td className="flex items-center px-6 py-4">
                        <button
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          onClick={() => setServices(true)}
                        >
                          Edit
                        </button>
                        {orderedit && (
                          <BasicModal show={orderedit} hide={setorderEdit}>
                            <ServicesModal />
                          </BasicModal>
                        )}
                        <button
                          onClick={() => setRemove(true)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline ml-3"
                        >
                          Remove
                        </button>
                        <BasicModal show={remove} hide={setRemove}>
                          <div className="bg-white shadow-sm rounded-xl p-10 py-10 text-center ">
                            <p className="pb-6  text-xl">
                              Are you sure you want to delete this customer?
                            </p>

                            <div className="flex   justify-center gap-4">
                              <button className=" border-blue-500  border-2 text-blue-600 p-2 px-3 rounded-lg font-semibold">
                                Cancel
                              </button>
                              <button className="bg-red-600 text-white p-2 px-3 rounded-lg font-semibold">
                                Remove
                              </button>
                            </div>
                          </div>
                        </BasicModal>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OrderTablePage;
