import {html, define, property} from 'hybrids';
import style from './style';
import {
	margin,
	trimWidth,
	trimHeight,
	globalTransform,
	taskHeight,
	taskVerticalPosition,
	latestEnd,
	unitWidth,
	taskHorizontalPosition,
	taskWidth
} from './layout';
import {tasks} from './tasks';
import {milestones} from './milestones';

function render({
	width,
	height,
	tasks,
	milestones,
	globalTransform
}) {
	return html`
		${style}
		<svg width=${width} height=${height}>
			<g transform="${globalTransform}">
				<g class="tasks">${tasks}</g>
				<g class="milestones">${milestones}</g>
			</g>
		</svg>
	`;
}

export const GanttChart = {
	data: property({
		tasks: []
	}),
	width: 800,
	height: 600,
	marginRight: 20,
	marginBottom: 20,
	marginLeft: 20,
	marginTop: 20,
	margin,
	trimWidth,
	trimHeight,
	globalTransform,
	taskHeight,
	taskVerticalPosition,
	latestEnd,
	unitWidth,
	taskHorizontalPosition,
	taskWidth,
	tasks,
	milestones,
	render
};

define('gantt-chart', GanttChart);
