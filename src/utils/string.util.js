// may want to use lodash library package

export const StringUtil = {
	reverse(str) {
		return str.split('').reverse().join('');
	},
	capitalize(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	},
	titleCase(str) {
		return str.replace(/\w\S*/g, s => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase());
	},
	pascalCase(str) {
		return str.replace(/\w\S*/g, s => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase()).replaceAll(' ', '');
	},
	camelCase(str) {
		return str.toLowerCase().split(' ').reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));
	},
	kebabCase(str) {
		return str.toLowerCase().replaceAll(' ', '-');
	},
	snakeCase(str, upper = false) {
		if(!upper) return str.toLowerCase().replaceAll(' ', '_');
		return str.toUpperCase().replaceAll(' ', '_');
	}
}