'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
	const mouseRef = useRef(null);

	// console.log(mouseRef);

	return <div ref={mouseRef} className='cursordiv'></div>;
}
