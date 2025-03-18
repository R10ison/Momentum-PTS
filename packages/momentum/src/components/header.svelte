<script lang="ts">
	let popoverVisibility: boolean = false;

	function togglePopoverVisibility() {
		popoverVisibility = !popoverVisibility;
	}

	import { goto } from '$app/navigation';

	function goToTaskCreation() {
		goto('/task-creation').then(() => {
			location.reload();
		});
	}
</script>
<section class="header-section">
	<header class="header-container">
	Momentum
		<div class="button-container">
			<button class="button-design" on:click={togglePopoverVisibility}>თანამშრომლის შექმნა</button>
			<button class="button-design purple-button" on:click={goToTaskCreation}><img src="../lib../assets" alt="A" />შექმენი ახალი დავალება
			</button>
		</div>
		{#if popoverVisibility}
		<div id="popover-content" class = "popover-container">
			<h1>თანამშრომლის დამატება</h1>
			<div class = "popover-content-container">
				<div class = "popover-form-wrapper">
					<label for="name">სახელი*</label>
					<input type="text" id = "name">
				</div>
				<div class = "popover-form-wrapper">
					<label for="surname">გვარი*</label>
					<input type="text" id = "surname">
				</div>
			</div>
			<label for ="avatar">ავატარი</label>
			<input type="file" accept="image/*" id = "avatar"/>
			<div class ="popover-department-selection">
				<label for="department">დეპარტამენტი</label>
				<select class ="popover-department-selection" id = "department"></select>
			</div>
			<div class = "popover-content-container popover-submit-container">
				<button class="button-design" on:click={togglePopoverVisibility} > გაუქმება</button>
				<button class="button-design purple-button">დაამატე თანამშრომელი</button>
			</div>
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
	}
	.button-container {
		display: flex;
		margin-left: auto;
		gap: 20px;
		.purple-button {
			background-color: purple;
			color: white;
		}
	}
	.popover-container{
		position: fixed;
		border: 1px solid;
		left: 50%;
		top: 20%;
		transform: translate(-50%,-50%);
		display: flex;
		align-items: center;
		flex-direction: column;
		background-color: white;
		border-radius: 10px;
		gap: 20px;
		width: 1000px;
	}
	#popover-content::backdrop {
		backdrop-filter: blur(5px);
	}
	.popover-form-wrapper{
		display: flex;
		flex-direction: column;
	}
	.popover-content-container{
		display: flex;
		flex-direction: row;
		gap: 30px;
		&.popover-submit-container{
			align-items: flex-end;
		}
	}
	.popover-department-selection{
		align-self: flex-start;
		display: flex;
		flex-direction: column;
		width: 100px;
	}
</style>
