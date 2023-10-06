<template>
  <nav
    class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light"
  >
    <a class="navbar-brand" href="#">MarketAdss</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Home(active)</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Рекомендации</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link 3</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Link(disabled)</a>
        </li>
      </ul>
    </div>
    <div class="create-an-ad">
      <button type="button" class="btn btn-light">Разместить объявление</button>
    </div>
  </nav>

  <div class="container">
    <div class="dropdown1">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <li><button class="dropdown-item" type="button">Action</button></li>
        <li>
          <button class="dropdown-item" type="button">Another action</button>
        </li>
        <li>
          <button class="dropdown-item" type="button">
            Something else here
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.navbar-brand {
  margin-right: 35px;
  margin-left: 25px;
}

.nav-link {
  margin-left: 10px;
}
.create-an-ad {
  margin-right: 35px;
}
.dropdown1 {
  margin-top: 40px;
}
</style>
