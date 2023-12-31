import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react';

function MyDialog(props) {

  return (
    <Transition appear show={props.open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.onClose}>
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-rose-200 p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                        as="h3"
                        className="text-lg font-semibold font-mono leading-6 text-gray-900"
                    >
                        My Work:
                    </Dialog.Title>
                <div className="mt-2">
                    <p className="text-md font-mono font-medium text-slate-800">
                    {props.experience}
                    </p>
                </div>
                </Dialog.Panel>
            </Transition.Child>
            </div>
        </div>
        </Dialog>
        </Transition>
  );
};

export {MyDialog};