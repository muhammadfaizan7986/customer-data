import React, { Fragment, useState } from 'react';
import Input from '../components/common/input/Input';
import Button from '../components/common/button/Button';
import { Link } from 'react-router-dom';

const LoginPage = (setPopup: any) => {
  return (
    <>
      <Fragment>
        <div className="flex justify-between  pb-5">
          <button>hdjg</button>
          <h1 className=" font-bold text-xl">Static modal</h1>
          <div className="">
            <span
              onClick={() => setPopup(false)}
              className="hover:bg-slate-400 text-black hover:text-white px-4 py-4 justify-center rounded-lg"
            >
              X
            </span>
          </div>
        </div>
        <div className="text-left  pb-5 py-5  border-t border-gray-200 rounded-b dark:border-gray-600">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.)
            goes into effect on May 25 and is meant to ensure a common set of
            data rights in the European Union. It requires organizations to
            notify users as soon as possible of high-risk data breaches that
            could personally affect them.
          </p>
        </div>
        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button
            data-modal-hide="static-modal"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            I accept
          </button>
          <button
            data-modal-hide="static-modal"
            type="button"
            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Decline
          </button>
        </div>
      </Fragment>
    </>
  );
};

export default LoginPage;
