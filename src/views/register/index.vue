<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="page-wrap">
        <div class="from">
            <form class="row g-3" @submit.prevent="handleSubmit">
                <span id="form-title">Register</span>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input v-model="inputEmail" type="email" class="form-control" id="inputEmail4" required>
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input v-model="inputPassword" type="password" class="form-control" id="inputPassword4" required>
                </div>
                <div class="col-md-6">
                    <label for="inputName" class="form-label">Username</label>
                    <input v-model="inputName" type="text" class="form-control" id="inputName" required>
                </div>
                <div class="col-md-6">
                    <label for="inputPhone" class="form-label">PhoneNumber</label>
                    <input v-model="inputPhone" type="number" class="form-control" id="inputPhone" required>
                </div>
                <div class="col-md-6">
                    <label for="inputProvinci" class="form-label"> Province </label>
                    <input v-model="inputProvince" type="text" class="form-control" id="inputProvince" required>
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input v-model="inputCity" type="text" class="form-control" id="inputCity" required>
                </div>
                <div class="col-md-6">
                    <label for="inputSubdistrict" class="form-label"> Subdistrict </label>
                    <input v-model="inputSubdistrict" type="text" class="form-control" id="inputSubdistrict" required>
                </div> 
                <div class="col-md-6">
                    <label for="inputWard" class="form-label"> Ward </label>
                    <input v-model="inputWard" type="text" class="form-control" id="inputWard" required>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">FullAddress</label>
                    <input v-model="inputFulladress" type="text" class="form-control" id="inputAddress" required>
                </div>
                <!-- <div class="col-12">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div> -->
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Register</button>
                </div>
                </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputName: null,
            inputEmail: null,
            inputPassword: null,
            inputPhone: null,
            inputFulladress: null,
            inputProvince: null,
            inputCity: null,
            inputSubdistrict: null,
            inputWard: null
        }
    },
    methods: {
        async handleSubmit() {
            try {
                const data = {
                    name: this.inputName,
                    email: this.inputEmail,
                    password: this.inputPassword,
                    phoneNumber: this.inputPhone.toString(),
                    fullAddress: this.inputFulladress,
                    provinsi: this.inputProvince,
                    kota: this.inputCity,
                    kecamatan: this.inputSubdistrict,
                    kelurahan: this.inputWard
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