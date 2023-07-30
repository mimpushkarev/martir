import {memo} from 'react';
import {Link} from 'react-router-dom';

import {cn} from '_utils/cn';

import {VerticalNavPropsType} from './types';

const VerticalNav = memo<VerticalNavPropsType>(function VerticalNav({groups, className}) {
  return (
    <div
      className={cn('flex flex-col gap-8 overflow-auto', {
        [className]: !!className
      })}
    >
      {groups.map(group => (
        <div className="flex flex-col gap-5" key={group.name}>
          <div className="hidden text-bold text-common-gray lg:block">{group.name}</div>
          <div className="flex flex-col gap-4">
            {group.links.map(link => (
              <Link
                to={link.to}
                key={link.to}
                className="flex min-h-[32px] gap-4 text-paragraph text-common-gray duration-200 ease-in-out hover:text-common-white"
              >
                <div className="h-8 w-8">{link.icon}</div>
                <div className="hidden items-center lg:flex">{link.label}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});

export {VerticalNav};
