<template>
  <div class="container">
    <div class="row height d-flex justify-content-center align-items-center">
      <div class="col-md-8">
        <div class="search">
          <i class="fa fa-search"></i>
          <input
            type="text"
            class="form-control"
            placeholder="Найти объявление"
          />
          <button class="btn btn-primary">Поиск</button>
        </div>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Profile</button>
      <div class="dropdown-options">
        <a href="#">Dashboard</a>
        <a href="#">Setting</a>
        <a href="#">Logout</a>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.container {
  margin: 40px;
}
body {
  background-color: #eee;
  font-family: "Poppins", sans-serif;
}

.height {
  height: 0vh;
}

.search {
  position: relative;
  box-shadow: 0 0 40px rgba(51, 51, 51, 0.1);
}

.search input {
  height: 60px;
  text-indent: 25px;
  border: 2px solid #d6d4d4;
}

.search input:focus {
  box-shadow: none;
  border: 2px solid blue;
}

.search .fa-search {
  position: absolute;
  top: 20px;
  left: 16px;
}

.search button {
  position: absolute;
  top: 5px;
  right: 5px;
  height: 50px;
  width: 110px;
  background: blue;
}

/* DROPDOWN */

.dropdown {
  display: inline-block;
  position: relative;
}

.dropbtn {
  border: none;
  border-radius: 5px;
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
}

.dropdown-options {
  display: none;
  position: absolute;
  overflow: auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.4);
}

.dropdown-options a {
  display: block;
  color: #000000;
  padding: 5px;
  text-decoration: none;
  padding: 20px 40px;
}

.dropdown-options a:hover {
  color: #0a0a23;
  background-color: #ddd;
  border-radius: 5px;
}
.show-menu .dropdown-options {
  display: block;
}
</style>
