import { About, Experience, Herosection, NeedAWebDev, Works } from '@/layout';
import Tools from '@/layout/tools';

export default function Home() {
	return (
		<>
			<Herosection />
			<About />
			<Experience />
			<Tools />
			<Works />
			<NeedAWebDev />
		</>
	);
}
