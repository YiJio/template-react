export const UtilHelpers = {
	range(start, end) {
		if (start === end) return [start];
		return [start, ...this.range(start + 1, end)];
	},
	normalize(value, min, max) {
		return (value - min) / (max - min);
	},
	removeDuplicates(array) {
		return [...new Set(array)];
	},
	getFromIndex(array, fieldCheck, value, returnField = null) {
		const index = array.findIndex((a) => a[fieldCheck] == value);
		if (returnField) return array[index][returnField];
		return array[index];
	},
	parsePlainTextList(punct, content) {
		const lines = content.trim().split('\n');
		const list = lines.filter(line => line.trim().startsWith(punct)).map(line => line.trim().substring(1).trim());
		return list;
	}
}