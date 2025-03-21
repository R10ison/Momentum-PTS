<script lang="ts">
	
	import MainLogo from "../lib/assets/mainlogo.png"
  	import {createEmployee, getDepartmentList} from "../stores/store";

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
		<form id="popover-content" class="popover-container" method="POST"  on:submit={(event) => {event
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      createEmployee(form).then(console.log);

    }}>
			<h1>თანამშრომლის დამატება</h1>
			<div class="popover-content-container">
				<div class="popover-form-wrapper">
					<label for="name">სახელი*</label>
					<input class = "popover-input" type="text" id="name" name="name">
				</div>
				<div class="popover-form-wrapper">
					<label for="surname">გვარი*</label>
					<input class = "popover-input" type="text" id="surname" name="surname">
				</div>
			</div>
			<label for ="avatar">ავატარი</label>
			<input type="file" accept="image/*" id="avatar" name="avatar" />
			<div class ="popover-department-selection">
				<label for="department">დეპარტამენტი</label>
				<select class="popover-department-selection" id="department" name="department_id">
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
	.popover-title{
		align-self: center;
	}
	.button-container {
		display: flex;
		margin-left: auto;
		gap: 20px;
	}
	.popover-container{
		position: fixed;
		border: 1px solid;
		left: 50%;
		top: 30%;
		transform: translate(-50%,-50%);
		display: flex;
		flex-direction: column;
		background-color: white;
		border-radius: 10px;
		gap: 20px;
		width: 42%;
		height: 48%;
	}
	#popover-content::backdrop {
		backdrop-filter: blur(5px);
	}
	.popover-form-wrapper{
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.popover-content-container{
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 10%;
		&.popover-submit-container{
			align-items: flex-end;
		}
	}
	.popover-department-selection{
		width: 50%;
		height: 10%;
		display: flex;
		flex-direction: column;
		align-items: baseline;
	}
	.popover-input{
		width: 80%;
		height: 100%;
		border-radius: 10px;
	}
	.button-plus{
		font-size: 30px;
	}
	.header-button{
		all: unset;
		display: inline-block;
		cursor: pointer;
	}
</style>
