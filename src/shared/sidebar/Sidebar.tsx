import {Dialog, Transition} from '@headlessui/react';
import {Fragment, memo} from 'react';

import {SidebarType} from './types';

const Sidebar = memo<SidebarType>(function Modal({isOpen, onClose, children}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed bg-black bg-opacity-25" />
        </Transition.Child>
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed bg-black/30" aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div className="fixed overflow-y-scroll">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="fixed inset-y-0 right-0 mx-auto min-w-[30%] max-w-sm overflow-auto bg-common-bg">
            {children}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
});

export {Sidebar};
