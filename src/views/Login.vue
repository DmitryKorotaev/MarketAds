<template>
  <div>
    <form class="form2">
      <div class="d-flex justify-content-center mb-3 mt-2 pb-1">
        <i class="fas fa-cubes fa-2x me-3 "></i>
        <span class="h1 fw-bold mb-0"><img src="img/8UEdOr9L78U.jpg" alt="Market Ads" width="150" height="100"></span>
      </div>

      <h5 class="fw-normal mb-3 pb-3 text-center" style="letter-spacing: 1px">
        Войдите в учетную запись
      </h5>

      <div class="form-outline mb-4 mt-4">
        <label class="form-label mb-1" for="form2Example17">Введите Email</label>
        <input
          type="email"
          id="form2Example17"
          placeholder=""
          class="form-control form-control-md"
        />
      </div>

      <div class="form-outline mb-4 mt-4">
        <label class="form-label mb-1" for="form2Example27">Введите пароль</label>
        <input
          type="password"
          id="form2Example27"
          class="form-control form-control-md"
        />
      </div>

      <div class="pt-1 mb-4 mt-5 d-flex justify-content-center">
        <button class="btn btn-dark btn-lg btn-block" type="button">
          Войти
        </button>
      </div>
      <div class="text-center">
        <a class="small text-muted" href="#!">забыли пароль?</a>
        <p class="mb-5 pb-lg-2">
          У вас уже есть аккаунт ?
          <router-link to="/Register">Зарегистрируйтесь тут</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
.form2 {
  width: 400px;
  margin: 0 auto;
}

.mb-5.pb-lg-2 {
  color: #393f81;
}
</style>
