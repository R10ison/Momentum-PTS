<script lang="ts">
    import {goto} from '$app/navigation';
    import CommentIcon from "../lib/assets/commenticon.png"
    
    export let task: Task

  function goToCardInfo() {
    goto('/card-info').then(() => {
      location.reload();
    });
  }

    function getStatusClass(statusId: number): string {
      const classMap: Record<number, string> = {
        1: "task-to-start",
        2: "task-in-progress",
        3: "task-ready-for-testing",
        4: "task-finished"
      };

      return classMap[statusId] || "";
    }
</script>
<button class="card-wrapper {getStatusClass(task.status.id)}" on:click={goToCardInfo}>
  <div class="card-info-wrapper">
    <div class="card-importance {getStatusClass(task.status.id)}">{task.priority.name}</div>
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
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        width: 400px;
        height: auto;
        padding: 20px;
        background-color: white;
        overflow: hidden;
        gap: 1em;

      &.task-to-start{
        border: 1px solid orange;
      }
      &.task-in-progress{
        border: 1px solid orangered;
      }
      &.task-ready-for-testing{
        border: 1px solid violet;
      }
      &.task-finished{
        border: 1px solid skyblue;
      }
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
        gap: 5px;
        display: flex;
        align-items: center;
    }
    .card-text-wrapper{
        display: flex;
        flex-direction: column;
    }
    .card-importance{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 10px;
        font-size: small;
        height: fit-content;
        border-radius: 5px;

      &.task-to-start{
        border: 1px solid orange;
      }
      &.task-in-progress{
        border: 1px solid orangered;
      }
      &.task-ready-for-testing{
        border: 1px solid violet;
      }
      &.task-finished{
        border: 1px solid skyblue;
      }
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