<script lang="ts">
</script>

<h1 class="main-title">დავალებების გვერდი</h1>
<nav class = "dropdown-button-container">
    <li class = "dropdown-parent">
        <input type = "checkbox" id = "departmentCheckbox" class = "dropdown-checkbox">
        <label class = "dropdown-button" for = "departmentCheckbox"> დეპარტამენტი </label>
        <div class = dropdown-content>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </li>
    <li class = "dropdown-parent">
        <input type = "checkbox" id = "priorityCheckbox" class = "dropdown-checkbox">
        <label class = "dropdown-button" for = "priorityCheckbox"> პრიორიტეტი </label> 
        <div class = dropdown-content> </div>
    </li>
    <li class = "dropdown-parent">
        <input type = "checkbox" id = "staffCheckbox" class = "dropdown-checkbox">
        <label class = "dropdown-button" for = "staffCheckbox"> თანამშრომელი </label> 
        <div class = dropdown-content></div>
    </li>
</nav>
<style>
    .main-title{
        margin-left: 40px;
    }
    .dropdown-button-container{
        display: flex;
        flex-direction: row;
        max-width: 500px;
        justify-content: space-evenly;
        list-style: none;
        border: 1px solid rgba(128, 128, 128, 0.5);
        border-radius: 5px;
    }
    .dropdown-button{
        &:hover{
            cursor: pointer;
        }
    }
    .dropdown-content{
        display: none;
    }
    .dropdown-parent{
        position: relative;
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
        left: 0;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
    .dropdown-checkbox:checked ~ .dropdown-content {
        display: flex;
        border: 3px solid pink;
    }
</style>