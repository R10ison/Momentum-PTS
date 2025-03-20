<script lang="ts">
    import Header from "../../components/header.svelte";
</script>
<Header/>
<div class="cardinfo-main-wrapper">
    <div class="cardinfo-button-wrapper">
        <div class="card-status">საშუალო</div>
        <div class="card-status card-department">დიზაინი</div>
    </div>
    <h1>Redberry-ს საიტის ლენდინგის დიზაინი</h1>
    <p>მიზანია რომ შეიქმნას თანამედროვე, სუფთა და ფუნქციონალური დიზაინი, რომელიც უზრუნველყოფს მარტივ ნავიგაციას და მკაფიო ინფორმაციის გადაცემას. დიზაინი უნდა იყოს ადაპტირებადი (responsive), გამორჩეული ვიზუალით, მინიმალისტური სტილით და ნათელი ტიპოგრაფიით.</p>
    <div>
        <p>დავალებების დეტალები</p>
        <div class="cardinfo-info-wrapper">
            <img alt ="clock"/>
            <div>სტატუსი</div>
            <select>მზად ტესტირებისთვის</select>
        </div>
        <div class="cardinfo-info-wrapper">
            <img alt ="person"/>
            <div>თანამშრომელი</div>
            <img/>
        </div>
        <div class="cardinfo-info-wrapper">
            <img alt ="date"/>
            <div>დავალების ვადა</div>
            <p>ორშ - 02/2/2025</p>
        </div>
    </div>
    </div>
<div class="comment-section">
    <div class="comment-input-field">
        <input class="comment-input" placeholder="დაწერე კომენტარი">
        <button class="comment-button">დააკომენტარე</button>
    </div>
    <div class = "comment-amount-wrapper">
        <h2>კომენტარები</h2>
        <p class="comment-amount">3</p>
    </div>

</div>
<div class="comment-user-wrapper">
    <img alt="profilepic">
    <div class="comment-info">
        <p class="comment-username">სახელი</p>
        <p>კომენტარის ტექსტი</p>
        <div class="comment-reply-wrapper">
            <img alt="arrow">
            <p>უპასყხე</p>
        </div>
    </div>
</div>
<style>
    .cardinfo-main-wrapper{
        width: 600px;
    }
    .cardinfo-button-wrapper{
        display: flex;
        gap: 1%;
    }
    .card-status{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        padding: 10px 30px;
        border: 1px solid orange;
        background-color: white;
        color: orange;
        &.card-department{
            background-color: pink;
            color: white;
            border: none;
            border-radius: 20px;
        }
    }
    .cardinfo-info-wrapper{
        display: flex;
        align-items: center;
    }
    .comment-input-field{
        display: flex;
        padding: 20px;
        height: 100px;
        border-radius: 10px;
        border: 1px solid;
        width: 600px;
    }
    .comment-input{
        height: fit-content;
        padding: 5px;
        border: none;
    }

    .comment-button{
        margin: auto 0 0 auto;
        display: flex;
        padding: 0 20px 0 20px;
        font-size: large;
        width: fit-content;
        height: 30px;
        border-radius: 20px;
        border: none;
        background-color: purple;
        color: white;
    }
    .comment-amount-wrapper{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .comment-amount{
        background-color: purple;
        color: white;
        width: fit-content;
        height: fit-content;
        padding: 5px 12px 5px 12px;
        border-radius: 15px;
    }
    .comment-user-wrapper{
        display: flex;
    }
    .comment-info{
        height: fit-content;
        display: flex;
        flex-direction: column;
    }
    .comment-username{
        margin: 0;
        padding: 0;
    }
    .comment-reply-wrapper{
        display: flex;
        align-items: center;
        gap: 2px;
        color: purple;
    }
</style>