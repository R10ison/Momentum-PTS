<script lang="ts">
    import {goto} from '$app/navigation';
    import CommentIcon from "../lib/assets/commenticon.png"
    import type {Task} from "../stores/tasksstore";

  export let task: Task

  function goToCardInfo() {
    goto('/card-info').then(() => {
      location.reload();
    });
  }
</script>
<button class="card-wrapper" on:click={goToCardInfo}>
  <div class="card-info-wrapper">
    <div class="card-importance">{task.priority.name}</div>
    <div class="card-department">{task.department.name}</div>
    <div class="card-date">{task.due_date}</div>
  </div>
  <div class="card-text-wrapper">
    <b> {task.name}</b>
    <p>{task.description}</p>
  </div>
  <div class="card-footer-wrapper">
    <img src={task.employee.avatar} alt="employee picture" class="card-employee-image"/>
    <div class="task-comment">
      <img src={CommentIcon} alt="Comment Icon"/>
      <p>1</p>
    </div>
  </div>
</button>
<style>
    .card-wrapper{
        border: 1px solid orange;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        width: 400px;
        height: auto;
        padding: 20px;
        background-color: white;
        overflow: hidden;
        gap: 1em;
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
        width: 100%;
    }
    .task-comment{
        margin-left: auto;
        gap: px;
        display: flex;
        align-items: center;
    }
    .card-text-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .card-importance{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 10px;
        font-size: small;
        height: fit-content;
        border: 1px solid orangered;
        border-radius: 5px;
    }
    .card-department{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        background-color: pink;
        color: white;
        font-size: small;
        padding: 5px 10px;
    }
    .card-employee-image{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
</style>