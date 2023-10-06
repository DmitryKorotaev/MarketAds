<template>
  <section class="vh-100">
    
    <div class="container py-6 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-md-6">
          <div class="card">
            <div class="card-body p-3 p-lg-3 text-black">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.img-fluid {
  border-radius: 1rem;
}
.card {
  border-radius:2rem;
  height: 250px
}

.vh-100 {
  background-color: #cfd6e5;
}
</style>
