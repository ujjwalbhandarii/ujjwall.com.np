'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type MouseMoveProps = {
	x: number;
	y: number;
};

export default function Cursor() {
	const [mousePosition, setMousePosition] = useState<MouseMoveProps>({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const mouseMoveEvent = (event: MouseEvent) => {
			const { clientX, clientY } = event;

			setMousePosition({
				x: clientX,
				y: clientY,
			});
		};

		window.addEventListener('mousemove', mouseMoveEvent);

		return () => {
			window.removeEventListener('mousemove', mouseMoveEvent);
		};
	}, []);

	const varients = {
		default: {
			x: mousePosition.x - 160,
			y: mousePosition.y - 160,
		},
	};

	return (
		<motion.div
			className='cursordiv bg-blue-400 dark:bg-blue-900'
			variants={varients}
			animate='default'
		/>
	);
}
