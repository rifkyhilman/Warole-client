<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="page-wrap">
        <div class="from">
            <form class="row g-3">
                <span id="form-title">Register</span>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4">
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4">
                </div>
                <div class="col-md-6">
                    <label for="inputName" class="form-label">Username</label>
                    <input type="text" class="form-control" id="inputName">
                </div>
                <div class="col-md-6">
                    <label for="inputPhone" class="form-label">PhoneNumber</label>
                    <input type="text" class="form-control" id="inputPhone">
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">FullAddress</label>
                    <input type="text" class="form-control" id="inputAddress">
                </div>
                <div class="col-md-6">
                    <label for="inputProvinci" class="form-label"> Province </label>
                    <input type="text" class="form-control" id="inputProvince">
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity">
                </div>
                <div class="col-md-6">
                    <label for="inputSubdistrict" class="form-label"> Subdistrict </label>
                    <input type="text" class="form-control" id="inputSubdistrict">
                </div> 
                <div class="col-md-6">
                    <label for="inputWard" class="form-label"> Ward </label>
                    <input type="text" class="form-control" id="inputWard">
                </div>
                <div class="col-12">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Register</button>
                </div>
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
            username: null,
            email: null,
            password: null,
            region: null,
            phone: null
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
                    phone: this.phone.toString()
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