import {memo} from 'react';

type AvatarPropsType = {
  src: string;
  alt: string;
};

const Avatar = memo<AvatarPropsType>(function Avatar({src, alt}) {
  return (
    <div>
      <img src={src} alt={alt} className="w-12 h-12 rounded-full bg-common-light-gray" />
    </div>
  );
});

export {Avatar};
