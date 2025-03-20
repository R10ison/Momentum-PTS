import { writable } from 'svelte/store';

const apiKey: string = import.meta.env.VITE_API_KEY;
const ROOT_URL: string = 'https://momentum.redberryinternship.ge/api';

export interface Status {
	id: number;
	name: string;
}

export interface Priority {
	id: number;
	name: string;
	icon: string;
}

export interface Department {
	id: number;
	name: string;
}
export interface Employee {
	id: number;
	name: string;
	surname: string;
	avatar: string;
	department_id: number;
}
export interface Task {
	id: number;
	name: string;
	description: string;
	due_date: string;
	status: Status;
	priority: Priority;
	department: Department;
	employee: Employee;
}
export const tasks = writable<Task[]>([]);
export const statuses = writable<Set<string>>(new Set());

export async function fetchTasks() {
	try {
		const res = await fetch(`${ROOT_URL}/tasks`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${apiKey}`,
				Accept: 'application/json'
			}
		});

		if (!res.ok) {
			console.log(res);
			console.log('here');
			return [];
		}
		//const uniqueStatuses = new Set(data.map((task) => task.status.name));
		//statuses.set(uniqueStatuses);
		const tasks: Task[] = await res.json();
		console.log(tasks);
		return [
			{
				id: 1,
				name: 'შესარჩევი დავალება',
				description: 'შექმენით ვებ გვერდი დიზაინის მიხედვით',
				due_date: '2025-12-31',
				status: {
					id: 1,
					name: 'Todo'
				},
				priority: {
					id: 1,
					name: 'High',
					icon: '…'
				},
				department: {
					id: 1,
					name: 'IT'
				},
				employee: {
					id: 1,
					name: 'ლადო',
					surname: 'გაგა',
					avatar: '…',
					department_id: 1
				}
			}
		];
	} catch (error) {
		console.error(error);
	}
	return [];
}
