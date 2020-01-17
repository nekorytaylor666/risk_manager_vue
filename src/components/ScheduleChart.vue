<template>
	<div>
		<GanttElastic
			:options="options"
			:tasks="tasks"
			@tasks-changed="tasksUpdate"
			@options-changed="optionsUpdate"
			@dynamic-style-changed="styleUpdate"
		></GanttElastic>
	</div>
</template>

<script>
import GanttElastic from 'gantt-elastic';
import { ganttConfig } from '../config/GanttChart.config';
export default {
	name: 'Gantt',
	components: {
		GanttElastic,
	},
	data() {
		return {
			tasks: ganttConfig.tasks,
			options: ganttConfig.options,
			dynamicStyle: {},
			lastId: 16,
		};
	},
	methods: {
		tasksUpdate(tasks) {
			this.tasks = tasks;
		},
		optionsUpdate(options) {
			this.options = options;
		},
		styleUpdate(style) {
			this.dynamicStyle = style;
		},
	},
};
</script>

<style lang="scss">
[class^='gantt-elastic'] {
	box-sizing: border-box;
	font-family: 'Roboto' !important;
}

.gantt-elastic__task-list-item-value-wrapper:hover {
	.gantt-elastic__task-list-item-value {
		padding: 1rem 0 !important;
		white-space: initial !important;
	}
}
.gantt-elastic__task-list-header-label {
	font-weight: bold;
}
</style>
