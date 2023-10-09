<template>
  <div>
    <form class="form2">
      <div class="d-flex justify-content-center mb-3 pb-1">
        <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219"></i>
        <span class="h1 fw-bold mb-0">Logo</span>
      </div>

      <h5 class="fw-normal mb-3 pb-3 text-center" style="letter-spacing: 1px">
        Войдите в учетную запись
      </h5>

      <div class="form-outline mb-4">
        <input
          type="email"
          id="form2Example17"
          placeholder=""
          class="form-control form-control-md"
        />
        <label class="form-label" for="form2Example17">Введите Email</label>
      </div>

      <div class="form-outline mb-4">
        <input
          type="password"
          id="form2Example27"
          class="form-control form-control-md"
        />
        <label class="form-label" for="form2Example27">Введите пароль</label>
      </div>

      <div class="pt-1 mb-4 d-flex justify-content-center">
        <button class="btn btn-dark btn-lg btn-block" type="button">
          Войти
        </button>
      </div>
      <div class="text-center">
        <a class="small text-muted" href="#!">забыли пароль?</a>
        <p class="mb-5 pb-lg-2" style="color: #393f81">
          У вас уже есть аккаунт ?
          <a href="#!" style="color: #393f81">Зарегистрируйтесь тут</a>
        </p>
        <a href="#!" class="small text-muted">Terms of use.</a>
        <a href="#!" class="small text-muted">Privacy policy</a>
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
  margin: 0 auto;}

</style>