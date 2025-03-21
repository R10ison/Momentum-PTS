const apiKey: string = import.meta.env.VITE_API_KEY;
const ROOT_URL: string = 'https://momentum.redberryinternship.ge/api';

export async function fetchData<T>(url: string): Promise<T> {
	const res = await fetch(`${ROOT_URL}${url}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${apiKey}`,
			Accept: 'application/json'
		}
	});
	return await res.json();
}

export async function postData<T>(url: string, data: T): Promise<T> {
	const res = await fetch(`${ROOT_URL}${url}`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${apiKey}`,
			Accept: 'application/json'
			/*'Content-Type': 'multipart/form-data'*/
		},
		body: data
	});
	return await res.json();
}
