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

export interface EmployeeCreate {
	name: string;
	surname: string;
	avatar: string | number;
	department_id: number;
}

export interface Comment {
	id: number;
	text: string;
	task_id: number;
	parent_id: number | null;
	author_avatar: string;
	author_nickname: string;
	sub_comments: Comment[];
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

export interface TaskCreate {
	name: string;
	description: string;
	due_date: string;
	status_id: Status['id'];
	priority_id: Priority['id'];
	department_id: Department['id'];
	employee_id: Employee['id'];
}
