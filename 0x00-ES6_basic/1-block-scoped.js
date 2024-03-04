export default function taskBlock(trueOrFalse) {
	task = false;
	task2 = true;
	
	if (trueOrFalse) {
		task = true;
		task2 = false;
	}
	return [var task, task2];
}
