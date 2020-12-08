export const pageStyle = {
	position: "absolute"
};

export const pageVariants = {
	initial: {
		opacity: 0,
		translateY: "50px",
		scale: 0.8
	},
	in: {
		opacity: 1,
		translateY: "0px",
		scale: 1
	},
	out: {
		opacity: 0,
		translateY: "-50px",
		scale: 1.2
	}
};

export const pageTransition = {
	type: "tween",
	ease: "anticipate",
	duration: 0.5
};