import { Herosection, About, NeedAWebDev, Works, Footer } from '@/layout';

export default function Home() {
	return (
		<>
			<Herosection />
			<About />
			<Works />
			<NeedAWebDev />
		</>
	);
}
