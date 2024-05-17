import React, { Fragment } from 'react';
import Input from '../components/common/input/Input';
import Button from '../components/common/button/Button';
import { Link } from 'react-router-dom';

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <Fragment>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <Input label="UserName" placeholder="Enter UserName..." />
        </div>
        <div className="mb-5">
          <Input
            type="password"
            label="Password"
            placeholder="Enter Password"
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Remember me
          </label>
        </div>
        <Link to={'/'}>
          <Button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </Button>
        </Link>
      </form>
    </Fragment>
  );
};

export default LoginPage;