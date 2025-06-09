export default {
	getGithubTagValue(name) {
		return 'gh_' + name.split(' ').join('_').split('&').join('');
	},
	compareLabels(first, second) {
		let unique1 = first.filter((o1) => !second.find(o2 => o1.name === o2.name));
		let unique2 = second.filter((o2) => !first.find(o1 => o2.name === o1.name));
		
		let common = first.filter((o1) => second.find(o2 => o1.name === o2.name));
		
		const unique = unique1.concat(unique2);
		return ({
			unique,
			unique1,
			unique2,
			common,
		});
	},
	findDuplicates() {
		let array = Front_Feature_Tags.data._results.map(ft => ft.name);
		
		const duplicates = array.filter((item, index) => array.indexOf(item) !== index);
		return duplicates;
	}
}