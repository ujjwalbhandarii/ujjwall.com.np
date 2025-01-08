import Image from 'next/image';
import { TbArrowUpRight } from 'react-icons/tb';

type ProjectCardProps = {
  id: string;
  imageUrl: string;
  alt: string;
  websiteName: string;
  liveLink: string;
  stackUsed: string[];
  description: string;
  isFeatured: boolean;
};

export function ProjectsCard({
  alt,
  imageUrl,
  stackUsed,
  liveLink,
  description,
  websiteName,
}: ProjectCardProps) {
  return (
    <div className='workcard'>
      <div className='workcard__wrapper'>
        <div className='workcard__imagediv'>
          <figure>
            <Image
              src={imageUrl}
              alt={alt}
              width={600}
              height={600}
              loading='lazy'
              quality={100}
              className='workcard--img'
              title={`Ujjwal Bhandari, project ${websiteName}`}
            />
          </figure>
        </div>
        <main className='workcard__main'>
          <p className='workcard__main--heading'>{websiteName}</p>
          <div className='workcard__infos'>
            <span>Tech Stack</span>
            <div className='workcard__stackgroup'>
              {stackUsed.map((tool) => (
                <p key={tool}>{tool}</p>
              ))}
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
