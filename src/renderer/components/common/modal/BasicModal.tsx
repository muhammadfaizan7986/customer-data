import { Dialog, Transition } from '@headlessui/react';

import { Fragment } from 'react';

interface Iprops {
  className?: string;
  children: any;
  show: any;
  hide: any;
}
export default function BasicModal({
  show,
  hide,
  children,
  className,
}: Iprops) {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        open={show}
        className="text-black fixed z-50 inset-0 "
        onClose={hide}
      >
        <div className=" flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 relative -z-10">
          {/* <Transition.Child>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25 0transition-opacity" />
          </Transition.Child> */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen "
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className={`${className} w-[30%] inline-block align-top
            rounded-3xl py-8 xl:px-8 sm:px-14 px-8 text-left overflow-hidden 
            transform transition-all sm:align-middle`}
          >
            <div className=" absolute top-14 right-14 ">
              <button
                type="button"
                className=" text-primary text-xl hover:text-gray-500 focus:outline-none "
                onClick={() => {
                  hide(false);
                }}
              >
                <p className="font-bold p-2">X</p>
                <span className="sr-only">Close</span>
              </button>
            </div>
            {children}
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
