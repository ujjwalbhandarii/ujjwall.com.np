import Image from 'next/image';
import { TbArrowUpRight } from 'react-icons/tb';

type Props = {
  imageUrl: any;
  alt: string;
  description: string;
  stackUsed: string[];
  websiteName: string;
  liveLink: string;
};

export function ProjectsCard({
  imageUrl,
  alt,
  description,
  stackUsed,
  websiteName,
  liveLink,
}: Props) {
  return (
    <div className='workcard'>
      <div className='workcard__wrapper'>
        <div className='workcard__imagediv'>
          <figure>
            <Image
              src={imageUrl}
              alt={alt}
              height={600}
              width={600}
              className='workcard--img'
              quality={100}
              title={`Ujjwal Bhandari, project ${websiteName}`}
              loading='lazy'
            />
          </figure>
        </div>
        <main className='workcard__main'>
          <p className='workcard__main--heading'>{websiteName}</p>
          <div className='workcard__infos'>
            <span>Tech Stack</span>
            <div className='workcard__stackgroup'>
              {stackUsed.map((item: any) => {
                return <p key={item}>{item}</p>;
              })}
            </div>
          </div>
          <p className='workcard--description'>{description}</p>
          <a
            href={liveLink}
            target='_blank'
            aria-label={alt}
            className='workcard--a'
          >
            website
            <TbArrowUpRight />
          </a>
        </main>
      </div>
      <hr />
    </div>
  );
}
