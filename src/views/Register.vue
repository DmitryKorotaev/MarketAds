<template>
  <form class="form1">
    <div class="d-flex justify-content-center mb-3 pb-1">
      <i class="fas fa-cubes fa-2x me-3"></i>
      <span class="h1 text-center mb-0">Market ads</span>
    </div>

    <h5
      class="d-flex justify-content-center mb-3 pb-3"
      style="letter-spacing: 1px"
    >
      Регистрация аккаунта
    </h5>

    <div class="form-outline mb-2">
      <input
        type="phone number"
        id="form2Example17"
        placeholder="Введите номер телефона"
        class="form-control form-control-md"
      />
      <label class="form-label" for="form2Example17"></label>
    </div>

    <div class="form-outline mb-2">
      <input
        type="name"
        id="form2Example17"
        placeholder="Введите Имя"
        class="form-control form-control-md"
      />
      <label class="form-label" for="form2Example17"></label>
    </div>

    <div class="form-outline mb-2">
      <input
        type="email"
        id="form2Example17"
        placeholder="Введите Email"
        class="form-control form-control-md"
      />
      <label class="form-label" for="form2Example17"></label>
    </div>

    <div class="form-outline mb-4">
      <input
        type="password"
        id="form2Example27"
        placeholder="Введите пароль"
        class="form-control form-control-md"
      />
      <label class="form-label" for="form2Example27"></label>
    </div>

    <div class="pt-2 mb-4 d-flex justify-content-center">
      <button class="mb-3 pb-3 btn btn-dark btn-lg" type="button">
        Зарегистрироваться
      </button>
    </div>
    <div class="text-center">
      <a class="small text-muted" href="#!">забыли пароль?</a>
      <p class="mb-5 pb-lg-2">
        У вас уже есть учетная запись?
        <a href="#!" style="color: #393f81">Войти</a>
      </p>
      <a href="#!" class="small text-muted">Terms of use.</a>
      <a href="#!" class="small text-muted">Privacy policy</a>
    </div>
  </form>
</template>

<style>
.form1 {
  width: 400px;
  margin: 0 auto;
}

.fas-fa-cubes-fa-2x-me-3 {
  color: #ff6219;
}

.small-text-muted {
  color: #393f81;
}
</style>
