<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="page-wrap">
        <div class="from">
            <form @submit.prevent="handleSubmit">
                <span id="form-title">Register</span>
                <div class="wrap-input">
                    <label for="name">Username</label>
                    <input v-model="username" class="input" type="text" placeholder="Type your username" required>
                </div>
                <div class="wrap-input">
                    <label for="name">Email</label>
                    <input v-model="email" class="input" type="email" placeholder="Type your email" required>
                </div>
                <div class="wrap-input">
                    <label for="name">Password</label>
                    <input v-model="password" class="input" type="password" placeholder="Type your password" required>
                </div>
                <div class="wrap-input">
                    <label for="password">Region</label>
                    <input v-model="region" class="input" type="text" placeholder="Type your password" required>
                </div>
                <div class="wrap-input">
                    <label for="number">Phone</label>
                    <input v-model="phone" class="input" type="number" placeholder="Type your password" required>
                </div>
                <!-- <div id="text-right">Forgot Password?</div> -->
                <button> Register </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Register',
    data() {
        return {
            username: '',
            email: '',
            password: '',
            region: '',
            phone: ''
        }
    },
    methods: {
        async handleSubmit() {
            try {
                const data = {
                    name: this.username,
                    email: this.email,
                    password: this.password,
                    region: this.region,
                    phone: this.phone
                };
           
                const response = await fetch('https://ecoms.zeabur.app/api/v1/auth/register', {
                    method: 'POST',
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