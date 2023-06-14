import {memo} from 'react';
import {Link} from 'react-router-dom';

import {cn} from '@utils/cn';

import {VerticalNavPropsType} from './types';

const VerticalNav = memo<VerticalNavPropsType>(function VerticalNav({label, links, className}) {
  return (
    <div
      className={cn('flex flex-col gap-7 overflow-auto', {
        [className]: !!className
      })}
    >
      <div className="text-bold text-common-gray">{label}</div>
      <div className="flex flex-col gap-4">
        {links.map(link => (
          <Link
            to={link.to}
            key={link.to}
            className="min-h-[32px] text-paragraph text-common-gray hover:text-common-white flex gap-4 ease-in-out duration-200"
          >
            <div className="w-8 h-8">{link.icon}</div>
            <div className="flex items-center">{link.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
});

export {VerticalNav};
