import {
  About,
  Experience,
  Herosection,
  NeedAWebDev,
  Works,
} from '@/components/section';
import Testimonials from '@/components/section/testimonials';
import Tools from '@/components/section/tools';

export default function Home() {
  return (
    <>
      <Herosection />
      <About />
      <Experience />
      <Tools />
      <Works />
      <Testimonials />
      <NeedAWebDev />
    </>
  );
}
