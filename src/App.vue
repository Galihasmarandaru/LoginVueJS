<template>
  <div id="app">
    <router-view sectionSignin="Login Form"></router-view>
  </div>
</template>

<style lang="scss">
body {
  background: -webkit-linear-gradient(bottom, #144959, #07333c);
  background-repeat: no-repeat;
}

.submit-btn {
  background: -webkit-linear-gradient(right, #144959, #07333c);
  border: none;
  border-radius: 10px;
  box-shadow: 0px 1px 1px #144959;
  cursor: pointer;
  color: white;
  font-family: "Raleway SemiBold", sans-serif;
  height: 42.3px;
  margin: 0 auto;
  margin-top: 50px;
  transition: 0.25s;
  width: 153px;

  &:hover {
    box-shadow: 0px 1px 5px #144959;
  }
}
</style>
