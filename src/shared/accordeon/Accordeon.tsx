import {memo} from 'react';

import {Disclosure} from '@headlessui/react';
import {ChevronUpIcon} from '@heroicons/react/20/solid';
import {cn} from '@utils/cn';

import {AccordeonPropsType} from './types';

const Accordeon = memo<AccordeonPropsType>(function Accordeon({title, children}) {
  return (
    <div className="rounded-2x mx-auto w-full max-w-md p-2">
      <Disclosure>
        {({open}) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between border-y-2 border-y-white py-4 text-left text-paragraph text-white focus-visible:ring-opacity-75">
              <div>{title}</div>
              <ChevronUpIcon
                className={cn('h-8 w-8 text-white', {
                  ['rotate-180 transform']: open
                })}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-2 pt-4 text-paragraph text-common-light-gray">
              {children}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
});

export {Accordeon};
