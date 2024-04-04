<template>
    <div id="nav-bar">   
        <div id="nav-bar-button">
            <router-link :to="{ name : 'register'}">
                <button> Register </button>
            </router-link>  
        </div>
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container-fluid">
                <router-link :to="{ name : 'home' }" id="products-link" class="logo text-decoration-none me-5 ms-5"> 
                    <h1> Warole </h1>
                </router-link> 
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Warole</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div class="input-group">
                            <span class="input-group-text bg-transparent" id="basic-addon1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </span>
                            <input class="form-control me-2 border-start-0" type="search" placeholder="Search Product" aria-label="Search">
                        </div>
                        <button class="btn bg-transparent btn-lg ms-3 me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <router-link :to="{ name : 'login' }"> 
                                <button class="btn btn-outline-success me-md-2 mt-2" type="button"> Login </button>
                            </router-link>    
                            <router-link :to="{ name : 'register'}">
                                <button class="btn btn-success mt-2" type="button"> Register </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>

    .logo h1{
        color: #41B883;
        font-weight: bold;
    }

    .navbar {
        background-color: #ffff;
        border-bottom: 1px solid #ddd;
    }
</style>