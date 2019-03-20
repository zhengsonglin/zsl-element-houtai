import Time from './lt/Time.js';
const components=[
Time
];
const install=function (Vue) {
	// body...
	components.forEach((component)=>{
		// alert(JSON.stringify(component))
		// Vue.component(component);
		Vue.use(component)
	})
	Vue.prototype.$Time=Time.install;
}

export default install