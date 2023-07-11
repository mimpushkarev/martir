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
            className="flex min-h-[32px] gap-4 text-paragraph text-common-gray duration-200 ease-in-out hover:text-common-white"
          >
            <div className="h-8 w-8">{link.icon}</div>
            <div className="flex items-center">{link.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
});

export {VerticalNav};
