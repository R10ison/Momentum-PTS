<script lang="ts">
    import Header from "../../components/header.svelte";
</script>
<Header></Header>
<section class="page-section">
    <h1>შექმენი ახალი დავალება</h1>
    <div class = "task-creation-main-container">
        <div class = "task-creation-seperation-containers">
            <div class ="task-button-and-label-container">
                <label for = "title">სათაური*</label>
                <input class = "task-form" type="text" id="title"/>
            </div>
            <div class ="task-button-and-label-container">
                <label for = "description">აღწერა</label>
                <textarea class="task-form task-description" id="description"></textarea>
            </div>
            <div class="task-creation-double-button-container">
                <div class="task-button-and-label-container">
                    <label for ="priority">პრიორიტეტი*</label>
                    <select class = "task-form task-double-button" id="priority">
                        <option value="" disabled selected hidden></option>
                        <option>დაბალი</option>
                        <option>საშუალო</option>
                        <option>მაღალი</option>
                    </select>
                </div>
                <div class="task-button-and-label-container">
                    <label for="status">სტატუსი</label>
                    <select class = "task-form task-double-button" id="status">
                        <option value="" disabled selected hidden></option>
                        <option>დასაწყები</option>
                        <option>პროგრესში</option>
                        <option>მზად ტესტირებისთვის</option>
                        <option>დასრულებული</option>
                    </select>
                </div>
            </div>
            
        
        </div>
        <div class="task-creation-seperation-containers">
            <div class="task-button-and-label-container">
                <label for ="department">დეპარტამენტი*</label>
                    <select class = "task-form" id="department">
                        <option value="" disabled selected hidden></option>
                        <option>მარკეტინგის დეპარტამენტი</option>
                        <option>დიზაინის დეპარტამენტი</option>
                        <option>ლოჯისტიკის დეპარტამენტი</option>
                        <option>IT დეპარტამენტი</option>
                    </select>
            </div>
            <div class="task-button-and-label-container">
                 <label for ="responsible-employee">პასუხისმგებელი თანამშრომელი</label>
                    <select class = "task-form" id="responsible-employee">
                        <option value="" disabled selected hidden></option>
                        <!--for each worker filtered by the above selected department generate options-->
                    </select>
            </div>
                <div class="task-button-and-label-container task-deadline">
                <label for="deadline">დედლაინი</label>
                <input class = "task-form task-double-button" type="date" id="deadline">
            </div>
        </div>
    </div>
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