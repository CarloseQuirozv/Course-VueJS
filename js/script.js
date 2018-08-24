Vue.component('languages',{

	props: ['lang'],

	methods: {
		onchange(ev){
			this.$emit('checked', this.lang.value, ev.target.checked);
		}
	},

	template: `
		<div>
			<input type ="checkbox" id="lang.value" value="lang.value" @change="onchange">
			<label for="lang.value">{{ lang.nameL }}</label>
		</div>
	`


})


let DATE = new Date();
let day = DATE.getDate();
let month = DATE.getMonth() + 1;
let year = DATE.getFullYear();

var date = String(year) + "-" + String(month) + "-" + String(day);

 let app = new Vue({
	el: '#app',

	data: {
		name: 'World!',
		url: 'https://www.google.com',
		page: 'Go to Google',
		showText: true,
		title: 'Lorem ipsum dolor sit amet.',
		subt: 'LOREM IOPSUJAGSFD AHJSFD ashgd asjkgd ayusgfu auysfd aytusd uyatsd akjsbhd Kasydg',
		count: 0,
		nameInput: '',
		langFav: [],
		languagesV: [
			{nameL: 'PHP', value: 'php'},
			{nameL: 'NodeJS', value: 'nodejs'},
			{nameL: 'Python', value: 'python'},
			{nameL: 'Asp', value: 'asp'},
			{nameL: 'Jsp', value: 'jsp'},
		],
		selectLang: [],
		age: '',

	},

	filters: {
		uppercase(str){
			return str.toUpperCase();
		},

		lowercase(str){
			return str.toLowerCase();
		},

		capitalize(str){
			var split = str.split(' ');
			var word = '';
			for (var i = 0; i < split.length; i++)
				word += split[i].charAt(0).toUpperCase() + split[i].slice(1).toLowerCase() + ' ';	
			return word;
		}
	},

	computed: {
		ageCalculated(){

			var splitAge = this.age.split('-');

			if(!(splitAge.length == 1 && splitAge[0] == '')){

				if(splitAge[1] < month)
					return parseInt(year, 10) - parseInt(splitAge[0], 10);
				else if(splitAge[1] == month && splitAge[2] < day)
					return parseInt(year, 10) - parseInt(splitAge[0], 10);
				else
					return (parseInt(year, 10) - parseInt(splitAge[0], 10))-1;
			}
			else return 0;

		},
	},

	methods: {
		add(){
			this.count++;
		},
		less(){
			this.count--;
		},
		selLang(lang,checked){
			if(checked)
			{
				this.selectLang.push(lang);
			}else{
				let i = this.selectLang.indexOf(lang);
				this.selectLang.splice(i,1);
			}
		},
		submit(){
			console.log(this.selectLang);
		}
	}

});