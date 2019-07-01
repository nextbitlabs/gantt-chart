import {svg} from 'hybrids';

const taskVerticalPadding = 2;

const ticks = (numberOfTicks, taskWidth, taskHeight) =>
	[...new Array(numberOfTicks).keys()].map(index => svg`
		<line
			x1=${taskWidth / (numberOfTicks + 1) * (index + 1)}
			x2=${taskWidth / (numberOfTicks + 1) * (index + 1)}
			y1=${taskVerticalPadding}
			y2=${taskHeight - taskVerticalPadding}
		></line>
	`);

export const tasks = {
	get: ({
		data,
		taskVerticalPosition,
		taskHorizontalPosition,
		taskWidth,
		taskHeight
	}) => {
		const sortedTasks = data.tasks
			.map(el => el)
			.sort((a, b) =>
				(a.start < b.start) ||
				((a.start === b.start) && (a.duration < b.duration)) ?
					-1 :
					1
			);
		return sortedTasks.map((task, index) => svg`
			<g
				transform="translate(
					${taskHorizontalPosition(task.start)},
					${taskVerticalPosition(index)}
				)"
			>
				<rect
					y="${taskVerticalPadding}"
					width="${taskWidth(task.duration)}"
					height="${taskHeight - (2 * taskVerticalPadding)}"
					rx="0"
					class="${task.class}"
				></rect>
				<g class="ticks">
					${ticks(task.duration - 1, taskWidth(task.duration), taskHeight)}
				</g>
				<text
					dx="${taskWidth(task.duration) + 5}"
					dy="${taskHeight / 2}"
				>${task.title}</text>
				<text
					class="week"
					dx="-5"
					dy="${taskHeight / 2}"
				>w${task.start}</text>
			</g>
		`);
	}
};
