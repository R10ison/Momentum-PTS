<script lang="ts">
  import Header from "../../components/header.svelte";
  import {
    createTask,
    getDepartmentList,
    getEmployeeList,
    getPriorityList,
    getStatusList,
    getTaskList
  } from "../../stores/store";

  $:priorities = getPriorityList();
  $:statuses = getStatusList();
  $:departments = getDepartmentList();
  $:employees = getEmployeeList();

</script>
<Header></Header>
<section class="page-section">
  <h1>შექმენი ახალი დავალება</h1>
  <form class="task-creation-main-container" method="POST" on:submit={(ev) => {
    ev.preventDefault();
    const form = new FormData(ev.currentTarget);
    console.log("statuses");
    createTask(form);

  }}>
    <div class="task-creation-seperation-containers">
      <div class="task-button-and-label-container">
        <label for="title">სათაური*</label>
        <input class="task-form" type="text" id="title" name="name"/>
      </div>
      <div class="task-button-and-label-container">
        <label for="description">აღწერა</label>
        <textarea class="task-form task-description" id="description" name="description"></textarea>
      </div>
      <div class="task-creation-double-button-container">
        <div class="task-button-and-label-container">
          <label for="priority">პრიორიტეტი*</label>
          <select class="task-form task-double-button" id="priority" name="priority_id">
            <option value="" disabled selected hidden></option>
            {#await priorities then prioritiesList}
              {#each prioritiesList as priority}
                <option value={priority.id}>{priority.name}</option>
              {/each}
            {/await}
          </select>
        </div>
        <div class="task-button-and-label-container">
          <label for="status">სტატუსი</label>
          <select class="task-form task-double-button" id="status" name="status_id">
            <option value="" disabled selected hidden></option>
            {#await statuses then statusList}
              {#each statusList as status}
                <option value={status.id}>{status.name}</option>
              {/each}
            {/await}

          </select>
        </div>
      </div>
    </div>
    <div class="task-creation-seperation-containers">
      <div class="task-button-and-label-container">
        <label for="department">დეპარტამენტი*</label>
        <select class="task-form" id="department" name="department_id">
          <option value="" disabled selected hidden></option>
          {#await departments then departmentList}
            {#each departmentList as department}
              <option value={department.id}>{department.name}</option>
            {/each}
          {/await}

        </select>
      </div>
      <div class="task-button-and-label-container">
        <label for="responsible-employee">პასუხისმგებელი თანამშრომელი</label>
        <select class="task-form" id="responsible-employee" name="employee_id">
          <option value="" disabled selected hidden></option>
          {#await employees then employeeList}
            {#each employeeList as employee}
              <option value={employee.id}>{employee.name}</option>
            {/each}
          {/await}

        </select>
      </div>
      <div class="task-button-and-label-container task-deadline">
        <label for="deadline">დედლაინი</label>
        <input class="task-form task-double-button" type="date" id="deadline" name="due_date">
      </div>
      <div class="task-button-and-label-container task-deadline">
        <button class="button">submit</button>
      </div>
    </div>
  </form>
</section>
<style>
    .page-section{
        margin-inline: 40px;
    }
    .task-creation-main-container{
        display: flex;
        padding: 40px;
        flex-wrap: wrap;
        gap: 10%;
    }
    .task-creation-seperation-containers{
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .task-creation-double-button-container{
        display: flex;
        gap: 40px;
    }
    .task-button-and-label-container{
        display: flex;
        flex-direction: column;
    }
    .task-form{
        width: 600px;
        max-width: 100%;
        height: 50px;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.199);
        padding: 10px;
        box-sizing: border-box;
        &.task-description{
            min-height: 150px;
            resize: none;
        }
        &.task-double-button{
            width: 250px;
        }
    }
    .task-deadline{
        margin-top: auto;
    }
</style>