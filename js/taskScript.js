Vue.component('tasklist',{
	props: ['t','task','index'],

	methods: {
		delTask(index){
			this.task.splice(index,1);
			localStorage.setItem("task", JSON.stringify(this.task))
		}
	},
		// <div class="d-flex justify-content-center">

	template: `
		<div>
			<ul class="list-group ">
				<li class="list-group-item list-group-item-info list-group-item-action d-flex justify-content-between align-items-center">
					&#10004; {{ t.title }} &#9553; {{ t.time }} hrs
					&nbsp;<span @click="delTask(index)" class="badge badge-danger badge-pill">&times;</span>
				</li>
			</ul>	
		</div>
	`
})

let app = new Vue({

	el: '#app',

	data: {
		name: 'Carlos Quiroz',
		task: [],
		newTask: {
			title: '',
			time: '',
		},


	},
	created () {
	    this.task = JSON.parse(localStorage.getItem('task')) || []
	},

	methods: {
		addTask(){
			this.task.push({
				title: this.newTask.title,
				time: this.newTask.time,
			})

			localStorage.setItem("task", JSON.stringify(this.task))

		},
		delTask(t){
			this.task.splice(t,1);
			localStorage.setItem("task", JSON.stringify(this.task))
		},
	},
	computed: {
		duration(){

			if(!this.task.length) {return 0;}

			let dur = 0;

			this.task.forEach( t => {
				dur += parseInt(t.time);
			});

			return dur;
		}
	}



});