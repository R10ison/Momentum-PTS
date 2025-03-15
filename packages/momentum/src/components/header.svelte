<script lang="ts">
</script>
<section class="header-section">
	<header class="header-container">
	Momentum
	<div class="button-container">
		<button class="button-design">თანამშრომლის შექმნა</button>
		<button class="button-design purple-button"
			><img src="../lib../assets" alt="A" />შექმენი ახალი დავალება</button
		>
	</div>
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
		width: 200px;
		border-radius: 5px;
		border-color: purple;
		height: 30px;
		&:hover {
			cursor: pointer;
		}
	}
	.button-container {
		display: flex;
		width: fit-content;
		margin-left: auto;
		gap: 20px;
		.purple-button {
			background-color: purple;
			color: white;
		}
	}
</style>
