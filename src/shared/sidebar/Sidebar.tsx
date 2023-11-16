import {Dialog} from '@headlessui/react';
import {memo} from 'react';

import {SidebarType} from './types';

const Sidebar = memo<SidebarType>(function Modal({isOpen, onClose, children}) {
  return (
    <Dialog as="div" onClose={onClose} open={isOpen} className="fixed inset-0 flex bg-common-darkest-gray/50" static>
      <Dialog.Panel className="ml-auto flex h-full w-[620px] flex-col bg-common-bg">{children}</Dialog.Panel>
    </Dialog>
  );
});

export {Sidebar};
