import dayjs from 'dayjs';

function getDate(hours) {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const currentMonth = currentDate.getMonth();
	const currentDay = currentDate.getDate();
	const timeStamp = new Date(currentYear, currentMonth, currentDay, 0, 0, 0).getTime();
	return new Date(timeStamp + hours * 60 * 60 * 1000).getTime();
}

const stages = [
	'Одобрение или отказ Правлением АО «СПК Астана» в рассмотрении заявки и анкеты на 1-й этапе рассмотрения инвест. проектов',
	'Корректировка плана детальной планировки;( В случае необходимости корректировки)',
	'Заявка от АО «СПК Астана» в ЦОН по предоставлению участка',
	'Заявление от АО «СПК Астана» в ЦОН (2-ой этап) о предоставления права на земельный участок для целей строительства объект',
	'Заявление от АО «СПК Астана» в Акимат г. Нур-Султан о предоставлении права на земельный участок для целей строительства объектав долгосрочную аренду сроком на 5 лет',
	'Заявление от АО «СПК Астана»:- получение Акта установления границ, - присвоение адреса, - получение оценки - определение кадастровой стоимости земельного участка',
	'Заявление от АО «СПК Астана» на разработку землеустроительного проекта',
	'Заявление от АО «СПК Астана» на утверждение землеустроительного проекта',
	'Получение договора выкупа права',
	'Заявление от АО «СПК Астана» в ЦОН о получении идентификационного документа',
	'Регистрация прав на земельный участок',
];

export const ganttConfig = {
	tasks: [
		{
			id: 1,
			label: stages[0],
			user: '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
			start: getDate(-24 * 5),
			duration: 3 * 24 * 60 * 60 * 1000,
			percent: 85,
			type: 'task',
			//collapsed: true,
		},
		{
			id: 2,
			label: stages[1],
			user:
				'<a href="https://www.google.com/search?q=Peter+Parker" target="_blank" style="color:#0077c0;">Peter Parker</a>',
			start: getDate(-24 * 4),
			duration: 4 * 24 * 60 * 60 * 1000,
			percent: 50,
			type: 'milestone',
			style: {
				base: {
					fill: '#1EBC61',
					stroke: '#0EAC51',
				},
			},
		},
		{
			id: 3,
			label: stages[2],
			user:
				'<a href="https://www.google.com/search?q=John+Wayne" target="_blank" style="color:#0077c0;">John Wayne</a>',
			start: getDate(-24 * 3),
			duration: 2 * 24 * 60 * 60 * 1000,
			percent: 100,
			type: 'task',
		},
		{
			id: 4,
			label: stages[3],
			user:
				'<a href="https://www.google.com/search?q=Clark+Kent" target="_blank" style="color:#0077c0;">Clark Kent</a>',
			start: getDate(-24 * 2),
			duration: 2 * 24 * 60 * 60 * 1000,
			percent: 50,
			type: 'task',
		},
		{
			id: 5,
			label: stages[4],
			user:
				'<a href="https://www.google.com/search?q=Austin+Powers" target="_blank" style="color:#0077c0;">Austin Powers</a>',
			start: getDate(0),
			duration: 2 * 24 * 60 * 60 * 1000,
			percent: 10,
			type: 'milestone',
			style: {
				base: {
					fill: '#0287D0',
					stroke: '#0077C0',
				},
			},
		},
		{
			id: 6,
			label: stages[5],
			user:
				'<a href="https://www.google.com/search?q=Mario+Bros" target="_blank" style="color:#0077c0;">Mario Bros</a>',
			start: getDate(24),
			duration: 1 * 24 * 60 * 60 * 1000,
			percent: 50,
			type: 'task',
			style: {
				base: {
					fill: '#8E44AD',
					stroke: '#7E349D',
				},
			},
		},
		{
			id: 7,
			label: stages[6],
			user:
				'<a href="https://www.google.com/search?q=Knight+Rider" target="_blank" style="color:#0077c0;">Knight Rider</a>',
			start: getDate(24 * 2),
			duration: 4 * 60 * 60 * 1000,
			percent: 20,
			type: 'task',
		},
		{
			id: 8,
			label: stages[7],
			user:
				'<a href="https://www.google.com/search?q=Johhny+Bravo" target="_blank" style="color:#0077c0;">Johhny Bravo</a>',
			start: getDate(24 * 3),
			duration: 1 * 24 * 60 * 60 * 1000,
			percent: 0,
			type: 'task',
		},
		{
			id: 9,
			label: stages[8],
			user:
				'<a href="https://www.google.com/search?q=Dexter\'s+Laboratory" target="_blank" style="color:#0077c0;">Dexter\'s Laboratory</a>',
			start: getDate(24 * 4),
			duration: 4 * 60 * 60 * 1000,
			percent: 20,
			type: 'task',
			style: {
				base: {
					fill: '#8E44AD',
					stroke: '#7E349D',
				},
			},
		},
		{
			id: 10,
			label: stages[9],
			user:
				'<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
			start: getDate(24 * 5),
			duration: 24 * 60 * 60 * 1000,
			percent: 0,
			type: 'task',
		},
		{
			id: 11,
			label: stages[10],
			user:
				'<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
			start: getDate(24 * 6),
			duration: 24 * 60 * 60 * 1000,
			percent: 0,
			type: 'task',
		},
	],
	options: {
		taskMapping: {
			progress: 'percent',
		},
		maxRows: 100,
		maxHeight: 1000,
		title: {
			label: 'Your project title as html (link or whatever...)',
			html: false,
		},
		row: {
			height: 40,
		},
		calendar: {
			hour: {
				display: false,
			},
		},
		chart: {
			progress: {
				bar: false,
			},
			expander: {
				display: true,
			},
			time: {
				zoom: 22,
			},
		},
		taskList: {
			expander: {
				straight: false,
			},
			columns: [
				{
					id: 2,
					label: 'Description',
					value: 'label',
					width: 200,
					expander: true,
					html: true,
				},
				{
					id: 3,
					label: 'Assigned to',
					value: 'user',
					width: 130,
					html: true,
				},
				{
					id: 3,
					label: 'Start',
					value: task => dayjs(task.start).format('YYYY-MM-DD'),
					width: 78,
				},
				{
					id: 4,
					label: 'Type',
					value: 'type',
					width: 68,
				},
				{
					id: 5,
					label: '%',
					value: 'progress',
					width: 35,
					style: {
						'task-list-header-label': {
							'text-align': 'center',
							width: '100%',
						},
						'task-list-item-value-container': {
							'text-align': 'center',
							width: '100%',
						},
					},
				},
			],
		},
		locale: {
			name: 'en',
			Now: 'Now',
			weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
			months: [
				'Январь',
				'Февраль',
				'Март',
				'Апрель',
				'Май',
				'Июнь',
				'Июль',
				'Август',
				'Сентябрь',
				'Октябрь',
				'Ноябрь',
				'Декабрь',
			],
			'X-Scale': 'Zoom-X',
			'Y-Scale': 'Zoom-Y',
			'Task list width': 'Task list',
			'Before/After': 'Expand',
			'Display task list': 'Task list',
		},
	},
};
