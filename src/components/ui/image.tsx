import NextImage, { ImageProps as NextImageProps } from 'next/image';

export const Image = ({ src, alt, priority, ...props }: NextImageProps) => {
  return (
    <figure className='h-full w-full'>
      <NextImage
        src={src}
        alt={alt}
        width={650}
        height={650}
        className='mx-auto rounded-md'
        {...props}
      />
    </figure>
  );
};
