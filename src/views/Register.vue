<template>
  <form class="form1">
    <div class="d-flex justify-content-center mb-3 pb-1">
      <i class="fas fa-cubes fa-2x me-3"></i>
    </div>

    <h5
      class="d-flex justify-content-center mb-3 pb-1"
      style="letter-spacing: 1px"
    >
      Регистрация аккаунта:
    </h5>

    <div class="form-outline mb-2">
      <label class="form-label mb-1" for="form2Example17"
        >Номер телефона:</label
      >
      <input
        type="phoneNumber"
        id="form2Example17"
        v-model="phoneNumber"
        class="form-control form-control-md"
      />
    </div>

    <div class="form-outline mb-2 mt-4">
      <label class="form-label mb-1" for="form2Example17">Имя:</label>
      <input
        type="name"
        id="form2Example20"
        v-model="name"
        class="form-control form-control-md"
      />
    </div>

    <div class="form-outline mb-2 mt-4">
      <label class="form-label mb-1" for="form2Example17">E-mail:</label>
      <input
        type="email"
        v-model="email"
        id="form2Example19"
        class="form-control form-control-md"
      />
    </div>

    <div class="form-outline mb-2 mt-4">
      <label class="form-label mb-1" for="form2Example27"> Пароль:</label>
      <input
        type="password"
        v-model="password"
        id="form2Example28"
        class="form-control form-control-md"
      />
    </div>

    <div class="form-outline mb-2 mt-4">
      <label class="form-label mb-1" for="form2Example27"
        >Повторите пароль:</label
      >
      <input
        type="passwordConfirm"
        id="form2Example2"
        v-model="confirm"
        class="form-control form-control-md"
      />
    </div>

    <div class="pt-2 mb-2 d-flex justify-content-center">
      <button class="mb-2 pb-3 mt-4 btn btn-dark btn-md" type="button">
        Зарегистрироваться
      </button>
    </div>
    <div class="text-center">
      <a class="small text-muted" href="#!">забыли пароль?</a>
      <p class="mb-1 pb-md-2">
        У вас уже есть учетная запись?
        <a href="#!" style="color: #393f81">Войти</a>
      </p>
    </div>
  </form>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, password, minLenght } from "@vuelidate/validators";
import { reactive, computed } from "vue";

export default {
  setup() {
    const state = reactive({
      phoneNumber: "",
      name: "",
      password: "",
      confirm: "",
    });
    const rules = computed(() => {
      return {
        phoneNumber: { required },
        name: { required },
        password: { required },
        confirm: { required },
      };
    });
    const v$ = useVuelidate(rules, state);

    return {
      state,
      v$,
    };
  },

  methods: {},
};
</script>

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
