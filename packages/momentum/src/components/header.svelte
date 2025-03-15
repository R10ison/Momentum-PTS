<script lang="ts">
</script>

<header class="header-container">
	Momentum
	<div class="button-container">
		<button class="button-design">თანამშრომლის შექმნა</button>
		<button class="button-design purple-button"
			><img src="../lib../assets" alt="A" />შექმენი ახალი დავალება</button
		>
	</div>
</header>

<style>
	.header-container {
		display: flex;
		padding-left: 40px;
		margin-top: 20px;
	}
	.button-design {
		width: 200px;
		margin-right: 20px;
		border-radius: 5px;
		border-color: purple;
		height: 30px;
		&:hover {
			cursor: pointer;
		}
	}
	.button-container {
		width: fit-content;
		margin-left: auto;
		gap: 20px;
		.purple-button {
			background-color: purple;
			color: white;
		}
	}
</style>
