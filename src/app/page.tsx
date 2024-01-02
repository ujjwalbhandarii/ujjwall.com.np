import { About, Experience, Herosection, NeedAWebDev, Works } from '@/layout';

export default function Home() {
	return (
		<>
			<Herosection />
			<About />
			<Experience />
			<Works />
			<NeedAWebDev />
		</>
	);
}
