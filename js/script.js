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

// console.log(app.name);