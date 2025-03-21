<script lang="ts">
	
	import MainLogo from "../lib/assets/mainlogo.png"
  	import {createEmployee, getDepartmentList} from "../stores/store";
	import CancelLogo from "../lib/assets/cancel.png"
	let popoverVisibility: boolean=false;

		function togglePopoverVisibility() {
			popoverVisibility=!popoverVisibility;
		}

		import { goto } from '$app/navigation';

		function goToTaskCreation() {
			goto('/task-creation').then(() => {
				location.reload();
			});
		}
		function goToCardInfo() {
    		goto("/").then(() => {
      	location.reload();
    	});
  		}

	$:departments = getDepartmentList();
	
	
</script>
<section class="header-section">
	<header class="header-container">
	<button class="header-button" on:click={() => goToCardInfo()}>
		<img src = {MainLogo} alt="Main Hourglass Logo">
	</button>
		<div class="button-container">
			<button class="button-design" on:click={togglePopoverVisibility}>თანამშრომლის შექმნა</button>
			<button class="button-design purple-button" on:click={goToTaskCreation}>
				<p class="button-plus">+</p> 
				შექმენი ახალი დავალება
			</button>
		</div>
		{#if popoverVisibility}
			<div class="popover">
		<form id="popover-content" class="popover-container" method="POST"  on:submit={(event) => {event
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      createEmployee(form).then(console.log);

    }}>
			<h1>თანამშრომლის დამატება</h1>
			<button class="header-button" on:click={togglePopoverVisibility}>
				<img src={CancelLogo} class="popover-cancel" alt="closebutton">
			</button>
			<div class="popover-content-container">
				<div class="popover-form-wrapper">
					<b>სახელი*</b>
					<input class = "popover-input" type="text" id="name" name="name">
				</div>
				<div class="popover-form-wrapper">
					<b>გვარი*</b>
					<input class = "popover-input" type="text" id="surname" name="surname">
				</div>
			</div>
			<label for="avatar" class="popover-avatar-wrapper">
				<div class="avatar-circle">+</div>
			</label>
			<input type="file" accept="image/*" id="avatar" name="avatar" class="popover-avatar-input" />
			<div class ="popover-department-selection">
				<b>დეპარტამენტი</b>
				<select class="popover-department-input" id="department" name="department_id">
          {#await departments then departmentList}
            {#each departmentList as department}
              <option value={department.id}>{department.name}</option>
            {/each}
          {/await}
        </select>
			</div>
			<div class="popover-content-container popover-submit-container">
				<button class="button-design" on:click={togglePopoverVisibility} > გაუქმება</button>
				<button class="button-design purple-button">დაამატე თანამშრომელი</button>
			</div>
		</form>
	</div>
		{/if}
	</header>
</section>


<style>
	.header-section{
		margin-inline: 40px;
	}
	.header-container {
		display: flex;
		margin-top: 20px;
	}
	.button-design {
		gap: 5px;
		padding-inline: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 250px;
		border-radius: 5px;
		border-color: purple;
		height: 30px;
		&:hover {
			cursor: pointer;
		}
		&.purple-button {
			background-color: purple;
			color: white;
		}
	}
	.popover {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		width: auto;
		height: fit-content;
	}

	.popover-container {
		display: flex;
		position:relative;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: white;
		gap: 20px;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1),
		0 1px 3px rgba(0, 0, 0, 0.08);
	}

	.button-container {
		display: flex;
		margin-left: auto;
		gap: 20px;
	}
	#popover-content::backdrop {
		backdrop-filter: blur(5px);
	}
	.popover-form-wrapper{
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 5px;
	}
	.popover-content-container{
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 1.5em;
		width: 100%;

		&.popover-submit-container{
			align-items: flex-end;
		}
	}
	.popover-department-selection{
		display: flex;
		flex-direction: column;
		justify-content: start;
		gap: 5px;
		width: 100%;
	}

	.popover-department-input{
		width: 50%;
		height: 30px;
		border-radius: 5px;
		border: 1px solid rgba(0, 0, 0, 0.199);
		box-sizing: border-box;
	}

	.popover-input{
		width: 100%;
		height: 30px;
		border-radius: 5px;
		border: 1px solid rgba(0, 0, 0, 0.199);
		padding: 10px;
		box-sizing: border-box;
	}
	.button-plus{
		font-size: 30px;
	}
	.header-button{
		all: unset;
		display: inline-block;
		cursor: pointer;
	}

	.popover-avatar-wrapper {
		width: 100%;
		height: 60px;
		border: 2px dashed #ccc;
		border-radius: 0.5rem;
		padding: 8px;
		position: relative;
		cursor: pointer;
		transition: border-color 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.popover-avatar-wrapper:hover {
		border-color: #888;
	}

	.popover-avatar-wrapper .avatar-circle {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: #f3f3f3;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		font-weight: bold;
		color: #666;
		transition: background-color 0.2s ease;
	}

	.popover-avatar-wrapper:hover .avatar-circle {
		background-color: #e0e0e0;
	}

	.popover-avatar-input {
		display: none;
	}
	.popover-cancel{
		position: absolute;
		inset-inline-end: 10px;
		inset-block-start: 10px;
		&:hover{
			cursor: pointer;
		}
	}
</style>