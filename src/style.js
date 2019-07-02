import {html} from 'hybrids';

export default html`
	<style>

		svg rect {
			fill: #353839;
		}

		svg rect.c1 {
			fill: var(--c1, purple);
		}

		svg rect.c2 {
			fill: var(--c2, blue);
		}

		svg rect.c3 {
			fill: var(--c3, gold);
		}

		svg rect.c4 {
			fill: var(--c4, gold);
		}

		svg rect.c5 {
			fill: var(--c5, gold);
		}

		svg rect.c6 {
			fill: var(--c6, gold);
		}

		svg rect.c7 {
			fill: var(--c7, gold);
		}

		svg rect.c8 {
			fill: var(--c8, gold);
		}

		svg rect.c9 {
			fill: var(--c9, gold);
		}

		svg rect.c10 {
			fill: var(--c10, gold);
		}

		svg text {
			font-family: var(--font-family, sans-serif);
			font-size: var(--font-size, 12px);
			font-weight: bold;
			fill: #353839;
		}

		svg text.week {
			font-weight: normal;
			font-size: calc(var(--font-size, 12px) - 2px);
			text-anchor: end;
			fill-opacity: 0.7;
		}

		svg .tasks text {
			alignment-baseline: central;
		}

		svg .tasks .ticks line {
			visibility: var(--visibility-ticks, visible);
			stroke-width: 1px;
			stroke: var(--background-color, white);
			stroke-opacity: 1;
		}

		svg g.milestones line {
			stroke: #353839;
			stroke-width: 2;
		}

		svg g.milestones text {
			font-size: calc(var(--font-size, 12px) + 4px);
			text-anchor: end;
			alignment-baseline: auto;
		}

		svg g.milestones text.date {
			font-weight: normal;
			font-size: var(--font-size, 12px);
			fill-opacity: 0.7;
		}

	</style>
`;
