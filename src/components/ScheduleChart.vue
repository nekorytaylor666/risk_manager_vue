<template>
	<div>
		<gantt-elastic
			:options="options"
			:tasks="tasks"
			@tasks-changed="tasksUpdate"
			@options-changed="optionsUpdate"
			@dynamic-style-changed="styleUpdate"
		>
		</gantt-elastic>
	</div>
</template>

<script>
import GanttElastic from 'gantt-elastic';
import { ganttConfig } from '../config/GanttChart.config';
console.log(ganttConfig.tasks);
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

<style lang="scss" scoped></style>
