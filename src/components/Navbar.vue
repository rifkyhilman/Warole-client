<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="nav-bar">
        <router-link :to="{ name : 'home' }" id="products-link"> 
            <h1> Warole </h1>
        </router-link> 
        <div id="nav-bar-button">
            <router-link :to="{ name : 'login' }" id="login-link"> 
                <button> Login </button>
            </router-link> 
            <router-link :to="{ name : 'register'}">
                <button> Register </button>
            </router-link>  
        </div>
    </div>
</template>


<style scoped>
    #nav-bar {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
        padding: 0 30px 0 30px;
        margin-bottom: 50px
    }
    #products-link {
        color: #41B883;
        text-decoration: none;
    }
    #nav-bar-button {
        margin: 10px 0 15px 0;
    }

    #login-link {
        margin-right: 10px;
    }

    button {
        background-color: #41B883;
        border: none;
        border-radius: 8px;
        color: white;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        outline: 0;
        padding: 16px;
    }
  
</style>