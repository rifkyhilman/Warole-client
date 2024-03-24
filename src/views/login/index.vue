<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="page-wrap">
        <div class="from">
            <form action="">
                <span id="form-title">Login</span>
                <div class="wrap-input">
                    <label for="name">Username</label>
                    <input class="input" type="text" placeholder="Type your username" required>
                </div>
                <div class="wrap-input">
                    <label for="name">Password</label>
                    <input class="input" type="password" placeholder="Type your password" required>
                </div>
                <!-- <div id="text-right">Forgot Password?</div> -->
                <button> Login </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .from {
        padding: 55px;
        border: 1px solid black;
        border-radius: 10px;
    }

    #form-title {
        display: block;
        font-size: 39px;
        color: #333;
        line-height: 1.2;
        text-align: center;
        padding-bottom: 40px
    }
    
    .input {
        font-size: 16px;
        color: #333;
        line-height: 1.2;
        display: block;
        width: 100%;
        height: 55px;
        background: transparent;
        border-radius: 3px;
        padding: 7px;
        border: none;
    }

    .wrap-input {
        border-bottom: 2px solid #d9d9d9;
        margin-bottom: 23px;
    }

    label {
        display: block;
        margin-top: 30px;
        font-size: 16px;
        font-weight: 500;
    }

    button {
        margin-top: 50px;
        width: 100%;
        background-color: #41B883;
        color: white;
        padding: 15px 0;
        font-size: 18px;
        font-weight: 600;
        border-radius: 50px;
        cursor: pointer;
        border: none;
    }
</style>