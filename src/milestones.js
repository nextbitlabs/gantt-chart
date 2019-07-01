import {svg} from 'hybrids';

const taskVerticalPadding = 2;

const shift = (tasks, task, index) => {
	const isInTaskInterval = (c, task) =>
		(c.start >= task.start) && (c.start <= (task.start + task.duration));
	return tasks
		.reduce(
			(p, c, i) => (i >= index) && isInTaskInterval(c, task) ? p + 1 : p,
			0
		);
};

export const milestones = {
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
		return data.milestones.map(milestone => {
			const index = sortedTasks.findIndex(task => task.id === milestone.taskId);
			const task = sortedTasks[index];
			return svg`
				<g
					transform="translate(
						${taskHorizontalPosition(task.start) + taskWidth(task.duration)},
						${taskVerticalPosition(index) + ((shift(sortedTasks, task, index) + (milestone.additionalVerticalShift || 0)) * taskHeight) + taskVerticalPadding}
					)"
				>
					<line
						y2="${70}"
					></line>
					<text
						dx="-5"
						dy="70"
					>${milestone.title}</text>
					<text
						class=date
						dx="-5"
						dy="90"
					>${milestone.date || ''}</text>
				</g>
			`;
		});
	}
};
