<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="page-wrap">
        <div class="from">
            <form class="row g-3" @submit.prevent="handleSubmitLogin">
                <span id="form-title"> Login </span>
                <div class="col-12" >
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input v-model="inputEmail" type="email" class="form-control" id="inputEmail4" required>
                    <div class="invalid-feedback">
                        Please choose a Email.
                    </div>
                </div>
                <div class="col-12">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input v-model="inputPassword" type="password" class="form-control" id="inputPassword4" minlength="8" maxlength="14" required>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputEmail: null,
            inputPassword: null
        }
    },
    methods: {
        async handleSubmitLogin() {
            try {
                const data = {
                    email: this.inputEmail,
                    password: this.inputPassword
                }
                const response = await fetch('https://ecoms.zeabur.app/api/v1/auth/login', {
                         method: 'POST',
                         credentials: "include",
                         headers: {
                             'Content-Type': 'application/json',
                         },
                         body: JSON.stringify(data),
                     });

                const result = await response.json();
                console.log("Success:", result);
            } catch (error) {
                console.error("Error:", error);
            }
        }
    }
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