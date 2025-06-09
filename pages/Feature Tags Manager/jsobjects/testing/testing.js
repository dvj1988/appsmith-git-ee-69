export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		const labels = Pod_Mappings_Experiments.data.labels;
		const arrA = Object.keys(labels).map(k => labels[k].name);
		const arrB = DB_Feature_Tags.data.map(tg => tg.name);
		// let difference = arrA
		// .filter(x => !arrB.includes(x))
		// .concat(arrB.filter(x => !arrA.includes(x)));
		let newTags = arrA.filter(x => !arrB.includes(x));
		// return newTags;
		let removeTags = arrB.filter(x => !arrA.includes(x));
		// return {
			// removeTags,
			// newTags
		// };
		return arrA.length;
		// let differenceC = arrC.filter(x => !arrA.includes(x));
		// return differenceC;
		// return Object.keys(Pod_Mappings_Experiments.data.labels);
		// return arrC;
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}