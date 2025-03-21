<script lang="ts">
    import { goto } from '$app/navigation';
	import type { Task } from "../stores/tasksstore";

    export let task:Task
    function goToCardInfo() {
	    goto('/card-info').then(() => {
		location.reload();
	});
	}
</script>
    <button class = "card-wrapper" on:click={goToCardInfo}>
        <div class = "card-info-wrapper">
            <div class ="card-importance">{task.priority.name}</div>
            <div class ="card-department">{task.department.name}</div>
            <div class="card-date">{task.due_date}</div>
        </div>
        <div class = "card-text-wrapper">
            <h2> {task.name}</h2>
            <p>{task.description}</p>
        </div>
        <div class="card-footer-wrapper">
            <img src={task.employee.avatar} alt={task.employee.name} />
            <div class = "task-comment">
                <img src="../lib../assets" alt="comment picture" />
                <p>comment number</p>
            </div>
        </div>
    </button>

<style>
    .card-wrapper{
        border: 1px solid orange;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        width: fit-content;
        padding: 20px;
        background-color: white;
        &:hover{
            cursor: pointer;
        }
    }

    .card-info-wrapper{
        display: flex;
        gap: 20px;
        margin-right: 20px;
    }
    .card-date{
        margin-left: auto;
    }
    .card-footer-wrapper{
        display: flex;
        align-items: center;
    }
    .task-comment{
        margin-left: auto;
        gap: 20px;
        display: flex;
        align-items: center;
    }
    .card-text-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .card-importance{
        padding: 10px 30px;
        border: 1px solid orangered;
        border-radius: 5px;
    }
    .card-department{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        background-color: pink;
        color: white;
        padding: 10px 30px;
    }
</style>