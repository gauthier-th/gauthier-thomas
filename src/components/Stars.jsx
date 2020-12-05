import React, { useEffect, useRef } from 'react';
import { Random, mobileCheck } from '../../utils';

const Stars = () => {
	const starsEl = useRef(null);
	useEffect(() => {
		if (starsEl.current) {
			loadStars(starsEl.current);
			loadStars(starsEl.current);
			if (!mobileCheck())
				loadStars(starsEl.current);
		}
	}, [starsEl]);

	return <div ref={starsEl}></div>;
}


/**
 * @param {HTMLElement} container 
 */
function genShootingStar(container) {
	container.classList.add("stars-animation-container");
	var starContainer = document.createElement("div");
	starContainer.classList.add("shooting-star-container");
	var star = document.createElement("div");
	star.classList.add("shooting-star");
	starContainer.appendChild(star);
	var showTime = (Random(2, 12) + Random(2, 20)) / 4;
	starContainer.style.animationDuration = showTime + "s";
	starContainer.style.transform = "translateX(" + Random(-window.innerHeight, window.innerWidth) + "px)";
	container.appendChild(starContainer);
	setTimeout(function() {
		container.removeChild(starContainer);
	}, showTime * 1000);
}
/**
 * @param {HTMLElement} container 
 */
function loadStars(container) {
	genShootingStar(container);
	setTimeout(loadStars, (Random(250, 1500) + Random(250, 750)), container);
}

export default Stars;