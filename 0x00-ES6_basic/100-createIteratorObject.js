export default function* createIteratorObject(report) {
	for (const department in report) {
		const employees = report[department];
		for (const employee of employees) {
			yield employee;
		}
	}
}
