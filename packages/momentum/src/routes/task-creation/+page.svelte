<script lang="ts">
    import Header from "../../components/header.svelte";
</script>
<Header></Header>
<section class="page-section">
    <h1>შექმენი ახალი დავალება</h1>
    <div class="task-main-container">
        <div class="task-creation-container">
            <div class="task-form-container">
                <label for="title">სათაური*</label>
                <input class="task-form" type="text" id="title" />
            </div>
            <div class="task-form-container">
                <label class="dropdown-button" for="department">დეპარტამენტი*</label>
                <select class="task-form" id="department">
                    <option value="" disabled selected hidden></option>
                    <option value="marketing">მარკეტინგის დეპარტამენტი</option>
                    <option value="design">დიზაინის დეპარტამენტი</option>
                    <option value="logistics">ლოჯისტიკის დეპარტამენტი</option>
                    <option value="it">IT დეპარტამენტი</option>
                </select>
            </div>
        </div>
        <div class="task-creation-container">
            <div class="task-form-container">
                <label for="description">აღწერა</label>
                <input class="task-form task-description-form" type="text" id="description" />
            </div>
            <div class="task-form-container">
                <label class="dropdown-button" for="responsible-employee">პასუხისმგებელი თანამშრომელი</label>
                <select class="task-form" id="responsible-employee">
                    <option disabled selected hidden></option>
                    <!-- For each member in the API, generate more options -->
                </select>
            </div>
        </div>
        <div class="task-creation-container">
             <div class="task-form-container">
                <label class="dropdown-button" for="responsible-employee">პრიორიტეტი*</label>
                <select class="task-form task-smaller-forms" id="responsible-employee">
                    <option disabled selected hidden></option>
                    <option>დაბალი</option>
                    <option>საშუალო</option>
                    <option>მაღალი</option>
                </select>
            </div>
             <div class="task-form-container">
                <label class="dropdown-button" for="responsible-employee">სტატუსი*</label>
                <select class="task-form task-smaller-forms" id="responsible-employee">
                    <option disabled selected hidden></option>
                </select>
            </div>
             <div class="task-form-container">
                <label class="dropdown-button" for="responsible-employee">დედლაინი</label>
                <input class="task-form task-smaller-forms" type="date" />
            </div>
        </div>
    </div>
</section>
<style>
    .page-section{
        margin-inline: 40px;
    }
    .task-main-container{
        display: flex;
        flex-direction: column;
    }
    .task-creation-container {
        display: flex;
        flex-direction: row; 
        padding: 40px;
        gap: 150px;
    }

    .task-form-container {
        display: flex;
        flex-direction: column;
    }

    .task-form {
        width: 800px; 
        height: 50px; 
        padding: 10px; 
        font-size: 16px; 
        border: 1px solid #ccc; 
        border-radius: 5px; 
        box-sizing: border-box;
        &.task-description-form{
            height: 200px;
        }
        &.task-smaller-forms{
            width: 300px;
        }
    }
</style>