'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
	const cursorSize = 320;

	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};

	const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

	const smoothMouse = {
		x: useSpring(mouse.x, smoothOptions),
		y: useSpring(mouse.y, smoothOptions),
	};

	useEffect(() => {
		const manageMouseMove = (event: MouseEvent) => {
			const { clientX, clientY } = event;
			mouse.x.set(clientX - cursorSize / 2);
			mouse.y.set(clientY - cursorSize / 2);
		};

		window.addEventListener('mousemove', manageMouseMove);

		return () => {
			window.removeEventListener('mousemove', manageMouseMove);
		};
	}, [mouse.x, mouse.y]);

	return (
		<motion.div
			className='cursordiv bg-blue-900'
			style={{
				top: smoothMouse.y,
				left: smoothMouse.x,
			}}
		/>
	);
}
