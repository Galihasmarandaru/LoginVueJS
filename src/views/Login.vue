<template>
  <div class="section">
    <div class="section-login">
      <h3 class="section-login__title">{{ section }}</h3>
      <div class="section-login__title--underline"></div>
      <form @submit.prevent="signin" class="form">
        <label for="email" style="padding-top:13px">&nbsp;Email</label>
        <input
          v-model="form.email"
          id="email"
          class="section-login__input"
          type="email"
          name="email"
          autocomplete="on"
          required
        />
        <div class="section-login__input--underline"></div>

        <label for="password" style="padding-top:22px">&nbsp;Password</label>
        <input
          v-model="form.password"
          id="password"
          class="section-login__input"
          type="password"
          name="password"
          required
        />
        <div class="section-login__input--underline"></div>

        <a href="#">
          <legend id="forgot-pass" class="section-login__forgot">Forgot password?</legend>
        </a>

        <input class="submit-btn" type="submit" name="submit" value="LOGIN" />
        <a href="#" id="signup" class="section-login__signup">Don't have account yet?</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "login",
  props: {
    section: String
  },
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async signin() {
      try {
        const response = await axios
          .post("https://dev.api.hoonian.com/api/login", this.form)
          .then(response => (this.info = response));
        this.email = "";
        this.password = "";

        console.log(response.data);
        this.$router.push({name: 'About', params: { userName: response.data.message}})
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section {
  background: #fbfbfb;
  border-radius: 8px;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65);
  height: 450px;
  margin: 13.5rem auto 10rem auto;
  width: 329px;
  &-login {
    padding: 12px 44px;

    a {
      text-decoration: none;
    }
    label {
      font-family: "Raleway", sans-serif;
      font-size: 11pt;
    }

    &__title {
      font-family: "Raleway Thin", sans-serif;
      letter-spacing: 4px;
      padding-bottom: 23px;
      padding-top: 13px;
      text-align: center;

      &--underline {
        background: -webkit-linear-gradient(right, #144959, #07333c);
        height: 2px;
        margin: -1.1rem auto 0 auto;
        width: 89px;
      }
    }
    &__input {
      background: #fbfbfb;
      border: none;
      outline: none;
      padding-top: 14px;
      &--underline {
        background: -webkit-linear-gradient(right, #144959, #07333c);
        height: 1px;
        width: 100%;
      }
    }

    &__forgot {
      color: #3c829e;
      font-family: "Raleway", sans-serif;
      font-size: 10pt;
      margin-top: 16px;
      text-align: right;
      transition: ease-in 0.2s;

      &:hover {
        color: #57a3c2;
      }
    }

    &__signup {
      color: #3c829e;
      font-family: "Raleway", sans-serif;
      font-size: 10pt;
      margin-top: 16px;
      text-align: center;
      transition: ease-in 0.15s;

      &:hover {
        color: #57a3c2;
      }
    }
  }
}

.form {
  align-items: left;
  display: flex;
  flex-direction: column;
}
</style>
