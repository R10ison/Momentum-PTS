<script lang="ts">
    import Card from "./card.svelte";
	import { fetchTasks, type Task } from "../stores/tasksstore";

    const apiKey: string = import.meta.env.VITE_API_KEY;
    const ROOT_URL: string = "https://momentum.redberryinternship.ge/api";
    
    $:tasks = fetchTasks();
	let statuses = new Set();
    let selectedWorker = "";
//for each card return card with status matching the container divs status div text


</script>
<section class = "page-section">
	<h1>დავალებების გვერდი</h1>
</section>
<section class = "page-section">
	<nav class="dropdown-button-container">
	<li class="dropdown-parent">
		<input type="checkbox" id="departmentCheckbox" class="dropdown-checkbox" />
		<label class="dropdown-button" for="departmentCheckbox"> დეპარტამენტი 
			<span class="dropdown-arrow"></span>
		</label>
		<div class="dropdown-content">
			<div>
				<div class = "dropdown-content-parent">
					<input type="checkbox" id="" class="dropdown-content-checkbox" />
					<p>მარკეტინგის დეპარტამენტი</p>
				</div>
				<div class = "dropdown-content-parent">
					<input type="checkbox" id="" class="dropdown-content-checkbox" />
					<p>დიზაინის დეპარტამენტი</p>
				</div>
				<div class = "dropdown-content-parent">
					<input type="checkbox" id="" class="dropdown-content-checkbox" />
					<p>ლოჯისტიკის დეპარტამენტი</p>
				</div>
				<div class = "dropdown-content-parent">
					<input type="checkbox" id="" class="dropdown-content-checkbox" />
					<p>IT დეპარტამენტი</p>
				</div>
			</div>
			<div class = "dropdown-button-wrapper">
				<button class = "dropdown-content-button">არჩევა</button>
			</div>
		</div>
	</li>
	<li class="dropdown-parent">
		<input type="checkbox" id="priorityCheckbox" class="dropdown-checkbox" />
		<label class="dropdown-button" for="priorityCheckbox"> პრიორიტეტი </label>
		<div class="dropdown-content">
			<div>
				<div class = "dropdown-content-parent">
					<input type="checkbox" id="" class="dropdown-content-checkbox" />
					<p>დაბალი</p>
				</div>
				<div class = "dropdown-content-parent">
					<input type="checkbox" id="" class="dropdown-content-checkbox" />
					<p>საშუალო</p>
				</div>
				<div class = "dropdown-content-parent">
					<input type="checkbox" id="" class="dropdown-content-checkbox" />
					<p>მაღალი</p>
				</div>
			</div>
			<div class = "dropdown-button-wrapper">
				<button class = "dropdown-content-button">არჩევა</button>
			</div>
		</div>
	</li>
	<li class="dropdown-parent">
	<input type="checkbox" id="staffCheckbox" class="dropdown-checkbox" />
	<label class="dropdown-button" for="staffCheckbox"> თანამშრომელი </label>
	<div class="dropdown-content">
		<div>
  <label>
    <input type="radio" bind:group={selectedWorker} value="worker1" class="dropdown-content-checkbox"/>
    <img src="worker1.jpg" alt="Worker 1" />
    <p>Worker 1</p>
  </label>
  
  <label>
    <input type="radio" bind:group={selectedWorker} value="worker2" class="dropdown-content-checkbox"/>
    <img src="worker2.jpg" alt="Worker 2" />
    <p>Worker 2</p>
  </label>
  
  <label>
    <input type="radio" bind:group={selectedWorker} value="worker3" class="dropdown-content-checkbox"/>
    <img src="worker3.jpg" alt="Worker 3" />
    <p>Worker 3</p>
  </label>
</div>
	</div>
</li>
	</nav>
</section>
<section class ="page-section">
	<div class="task-status-wrapper">
		{#await tasks}
			<p>...waiting</p>
		{:then resolved_list}
		{#each ["Todo", "In Progress", "მზად ტესტირებისთვის", "დასრულებული"] as status}
			{#each resolved_list as task}
			{#if task.status.name === status}
			<div>
				<div class="task-status">{status}</div>
				<div class="task-item-wrapper">
						<Card {task} />
				</div>
			</div>
			{/if}
			{/each}
		{/each}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
		</div>
</section>

<style>
	.page-section{
		margin-inline: 40px;
	}
	.dropdown-button-container {
		display: flex;
		flex-direction: row;
		max-width: 500px;
		justify-content: space-evenly;
		list-style: none;
		border: 1px solid rgba(128, 128, 128, 0.5);
		border-radius: 5px;
	}
	.dropdown-button {
		&:hover {
			cursor: pointer;
		}
	}
	.dropdown-parent {
		position: relative;
		padding: 5px;
	}
	.dropdown-checkbox {
		display: none;
	}
	.dropdown-button {
		display: block;
		padding: 5px;
		cursor: pointer;
		text-align: center;
	}
	.dropdown-content {
		display: none;
		position: absolute;
		top: 100%;
		left: -38px;
		background-color: #f9f9f9;
		min-width: 160px;
		z-index: 1;
		padding: 12px 25px;
	}
	.dropdown-checkbox:checked ~ .dropdown-content {

		margin-top: 10px;
		display: flex;
		border: 1px solid purple;
		width: 600px;
		min-block-size: 250px;
		border-radius: 10px;
	}
	.dropdown-content-parent{
		display: flex;
		flex-direction: row;
		gap: 20px;
		align-items: center;
	}
	.dropdown-content-button{
		height: 30px;
		width: auto;
		min-width: 50px;
		align-items: center;
		text-align: center;
		background-color: purple;
		color: white;
		width: 170px;
		height: 40px;
		font-size: large;
		border-radius: 20px;
	}
	.dropdown-button-wrapper{
		display: flex;
		justify-content: end;
		align-items: end;
		margin-left: auto;
	}
	h1{
		margin-bottom: 40px;
		font-size:xx-large
	}
	.task-status-wrapper{
		display: flex;
		margin-top: 60px;
		display: flex;
		gap: 20px;
	}
	.task-status{
		color: white;
		display: block;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		font-size: larger;
		width: 542px;
		height: 40px;
		margin-bottom: 20px;
		&.task-to-start{
			background-color: orange;
		}
		&.task-in-progress{
			background-color: orangered;
		}
		&.task-ready-for-testing{
			background-color: violet;
		}
		&.task-finished{
			background-color: skyblue;
		}
	}
	.task-item-wrapper{
		gap: 10px;
		display: flex;
		flex-direction: column;
		overflow-y: hidden;
		max-height: 800px;
	}
	
	.dropdown-content-checkbox{
		 appearance: none;
		width: 22px;
		height: 22px;
		border: 2px solid purple;
		border-radius: 6px; 
		background-color: white; 
		display: inline-block;
		position: relative;
		cursor: pointer;
		&::before{
			content: "✓"; /* Checkmark */
			font-size: 18px;
			color: purple; /* Purple checkmark */
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			opacity: 0; /* Hidden by default */
		}
		&:checked::before {
    	opacity: 1;
  }
	}
</style>
