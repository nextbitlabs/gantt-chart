import {svg} from 'hybrids';

const taskVerticalPadding = 2;

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
