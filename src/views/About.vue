<template>
  <div class="about">
    <div>
      <p> Welcome, {{ $route.params.userName }}</p>  
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
.about {
  background: -webkit-linear-gradient(bottom, #144959, #07333c);
  color: white;
  text-align: center;
  p {
    font-size: 18px;
  }
}
</style>