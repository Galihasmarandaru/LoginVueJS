<template>
  <div class="about">
    <div>
      <div v-if="warningZone">Are you still there</div>
      <p> Welcome, {{ $route.params.userName }}</p>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'logout',
  data: function() {
    return {
      events: ['click', 'mousemove', 'scroll', 'keypress', 'load'],

      warningTimer: null,
      logoutTimer: null,
      warningZone: false,
    }
  },

  mounted() {
    this.events.forEach(function(event){
      window.addEventListener(event, this.resetTimer);
    }, this);

    this.setTimers();
  },

  destroyed() {
    this.events.forEach(function(event) {
      window.removeEventListener(event, this.resetTimer);
    }, this);

    this.resetTimer();
  },

   methods: {
     setTimers: function() {
       this.warningTimer = setTimeout(this.warningMessage, 4 * 1000);
       this.logoutTimer = setTimeout(this.logoutUser, 10 * 1000);

       this.warningZone = false;
     },

     warningMessage: function() {
       this.warningZone = true;
     },

     logoutUser: function() {
       this.$router.push({name: 'Login'})
     },

     resetTimer: function() {
       clearTimeout(this.warningTimer);
       clearTimeout(this.logoutTimer);

       this.setTimers();
     }
   }
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