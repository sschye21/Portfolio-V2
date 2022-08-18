import React from 'react'
import '../App.css'

export default function FadeInSection ({props}) {
	const domRef = React.useRef();

	const [isVisible, setVisible] = React.useState(false);

	React.useEffect(() => {
		const observer = new IntersectionObserver(entries => {  
		if (entries[0].isIntersecting) {
			setVisible(true);
			observer.unobserve(domRef.current);
		}
		});
		
		observer.observe(domRef.current);
		
		return () => observer.disconnect();
	}, []);

	return (
		// <div ref={domRef} className={`fade-in-section ${isVisible ? "is-visible" : ""}`} style={{ transitionDelay: `${props.delay}` }}>
		//     {props.children}    
		// </div>
		<div ref={ domRef } className={ isVisible ? ' is-visible' : '' }>{ props.children }</div>
	);
};