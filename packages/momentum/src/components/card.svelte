<script></script>

<div class = "card-wrapper">
    <div class = "card-info-wrapper">
        <div class ="card-importance">საშუალო</div>
        <div class ="card-department">დიზაინი</div>
        <div class="card-date">თარიღი</div>
    </div>
    <div class = "card-text-wrapper">
        <h2> Redberry-ს საიტის ლენდინგის დიზაინი</h2>
        <p>შექმენი საიტის მთავარი გვერდი, რომელიც მოიცავს მთავარ სექციებს, ნავიგაციას.</p>
    </div>
    <div class="card-footer-wrapper">
        <img src="../lib../assets" alt="employee picture" />
        <div class = "task-comment">
            <img src="../lib../assets" alt="comment picture" />
            <p>comment number</p>
        </div>
    </div>
</div>

<style>
    .card-wrapper{
        border: 1px solid orange;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        width: 500px;
        padding: 20px;
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