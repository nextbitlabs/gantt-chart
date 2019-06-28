export const margin = {
	get: ({marginRight, marginBottom, marginLeft, marginTop}) => ({
		top: marginTop,
		right: marginRight,
		bottom: marginBottom,
		left: marginLeft
	})
};

export const trimWidth = {
	get: ({width, margin}) => width - margin.left - margin.right
};

export const trimHeight = {
	get: ({height, margin}) => height - margin.top - margin.bottom
};

export const globalTransform = {
	get: ({margin}) => `translate(${margin.left}, ${margin.top})`
};

export const taskHeight = {
	get: ({trimHeight, data}) => trimHeight / Math.max(10, data.tasks.length)
};

export const taskVerticalPosition = {
	get: ({taskHeight}) => index => taskHeight * index
};

export const latestEnd = {
	get: ({data}) => data.tasks.length > 0 ?
		data.tasks
			.map(el => el.start + el.duration)
			.reduce((p, c) => c > p ? c : p, 0) :
		1
};

export const unitWidth = {
	get: ({trimWidth, latestEnd}) => trimWidth / latestEnd
};

export const taskHorizontalPosition = {
	get: ({unitWidth}) => start => unitWidth * start
};

export const taskWidth = {
	get: ({unitWidth}) => duration => unitWidth * duration
};
