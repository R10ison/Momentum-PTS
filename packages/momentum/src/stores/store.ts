import { fetchData, postData } from './fetchData';
import type {
	Task,
	Status,
	Priority,
	Department,
	Employee,
	Comment,
	TaskCreate,
	EmployeeCreate
} from './store.types';

export async function getStatusList() {
	return fetchData<Status[]>('/statuses');
}

export async function getPriorityList() {
	return fetchData<Priority[]>('/priorities');
}

export async function getDepartmentList() {
	return fetchData<Department[]>('/departments');
}

export async function getEmployeeList() {
	return fetchData<Employee[]>('/employees');
}

export async function createEmployee(employee: EmployeeCreate[]) {
	return postData<EmployeeCreate[]>('/employees', employee);
}

export async function getComments() {
	return fetchData<Comment[]>('/comments');
}

export async function createComment(comment: Comment[]) {
	return postData<Comment[]>('/comments', comment);
}

export async function getTaskList() {
	return fetchData<Task[]>('/tasks');
}

export async function createTask(task: TaskCreate[]) {
	return postData<TaskCreate[]>('/tasks', task);
}
