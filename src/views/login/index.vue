<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="page-wrap">
        <div class="from">
            <form class="row g-3" method="post" @submit.prevent="validationForm">
                <span id="form-title"> Login </span>
                <div class="alert alert-danger" :class="{'d-none' : LoginSucces}" role="alert">
                    <i class="bi bi-exclamation-triangle-fill"></i>  
                     Your email or password is incorrect, <b> please try again  </b>
                </div>
                <div class="col-12 mb-5" >
                    <div class="form-floating" :class="{'is-invalid' : emailError}">
                        <input id="floatingInputEmail" v-model="inputEmail" type="email" class="form-control" :class="{'is-invalid' : emailError}"  placeholder="Email">
                        <label for="floatingInputEmail">Email</label>
                    </div>
                    <div class="invalid-feedback">
                        {{ msgEmail }}
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="input-group">
                        <div class="form-floating" :class="{'is-invalid' : passwordError}">
                            <input v-if="hideMode" id="floatingInputPassword" v-model="inputPassword" type="password" class="form-control  border-end-0" :class="{'is-invalid' : passwordError}" placeholder="Password">    
                            <input v-else id="floatingInputPassword" v-model="inputPassword" type="text" class="form-control  border-end-0" :class="{'is-invalid' : passwordError}" placeholder="Password">    
                            <label for="floatingInputPassword">Password</label>
                        </div>
                        <span class="input-group-text bg-transparent" :class="{'eye-error' : passwordError}"> 
                            <button class="btn-eye" type="button"  @click="toggleShow">
                                <i class="bi" :class="{'bi-eye-slash' : hideMode, 'bi-eye' : !hideMode}"  style="font-size: 1.5rem;"></i>
                            </button>
                        </span>
                        <div class="invalid-feedback">
                            {{ msgPassword }}
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn-submit">Login</button>
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
            inputPassword: null,
            emailError: false,
            msgEmail: null,
            passwordError: false,
            msgPassword: null,
            hideMode: true,
            LoginSucces : true
        }
    },
    methods: {
        validationForm() {

            const data = {
                    email: this.inputEmail,
                    password: this.inputPassword
                }
            
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            
            if(!data.email) {
                this.emailError = true
                this.msgEmail = "This field is required"
            } else if(!regex.test(data.email)) {
                this.emailError = true
                this.msgEmail = "This field must be a valid email"
            } else if(!data.password) {
                this.emailError = false
                this.passwordError = true
                this.msgPassword = "This field is required"
            } else {   
                this.emailError = false
                this.passwordError = false
                // this.handleSubmitLogin(data)
                alert("Kena Hit brow !")
            }

        },
        async handleSubmitLogin(data) {
            try {

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
                this.LoginSucces = !this.LoginSucces;
                console.error("Error:", error);
            }
        },
        toggleShow() {
            this.hideMode = !this.hideMode;
        }
    },
};
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
        margin-bottom: 80px;
    }

    .btn-submit {
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

    .btn-eye {
        background: transparent;
        border: 0;
    }

    .eye-error {
        border: red 1px solid;
    }
</style>