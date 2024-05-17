import React, { Fragment } from 'react';

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
];
const ServicesTablePage = (props: Props) => {
  return (
    <Fragment>
      <div className="p-4 sm:ml-64">
        <div className="relative overflow-x-auto shadow-md rounded-lg scroll-hidden ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>

                <th scope="col" className="px-6 py-3">
                  Available
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Weight
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => {
                return (
                  <>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
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
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                        >
                          Remove
                        </a>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ServicesTablePage;
