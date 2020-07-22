<template>
  <div class="dashboard">
    <div>
      <!-- <div v-if="warningZone">Are you still there</div> -->
      <p>Welcome, {{ name }}</p>
      <!-- <p>Welcome</p> -->
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  computed: {
    name() {
      // return !this.$store.getters.user ? false : this.$store.getters.user.name;
      return this.$store.getters.user;
      // return this.$route.params.userName;
    }
  }
  // data() {
  //   return {
  //     name: ""
  //   };
  // },
  // created() {
  // this.$store.dispatch("fetchUser");
  // axios
  //   .get(
  //     "https://dev.api.hoonian.com/api/agent/profile?id=2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d"
  //   )
  //   .then(res => {
  //     console.log(res);
  //     const data = res.data;
  //     const users = [];
  //     for (let key in data) {
  //       const user = data[key];
  //       user.id = key;
  //       users.push(user);
  //     }
  //     console.log(users);
  //     this.name = users[0].name;
  //   })
  //   .catch(err => console.log(err));
  // }
};
// export default {
//   name: "logout",
//   data: function() {
//     return {
//       events: ["click", "mousemove", "mousedown", "scroll", "keypress", "load"],

//       warningTimer: null,
//       logoutTimer: null,
//       warningZone: false,

//       access_token: this.$route.params.access_token,
//       refresh_token: this.$route.params.refresh_token
//     };
//   },

//   mounted() {
//     // saat mouse digerakkan maka timer di reset
//     this.events.forEach(function(event) {
//       window.addEventListener(event, this.resetTimer);
//     }, this);

//     this.setTimers();
//   },

//   destroyed() {
//     this.events.forEach(function(event) {
//       window.removeEventListener(event, this.resetTimer);
//     }, this);

//     this.resetTimer();
//   },

//   methods: {
//     setTimers: function() {
//       // 1. setiap 10 detik check token_access
//       // 2. remainingTime <= 60 detik -> pop up
//       // 3. pop up klik yes -> 60 > remainingTime > 0 --> dapat token baru / refreshToken()
//       // 4. pop up klik yes -> remainingTime == 0 --> logout()
//       // 5. pop up tidak di klik -> remainingTime == 0 -> logout()

//       // jika idle lama selama 10 detik - cek apakah sudah 3 menit sebelum session expired ? ex: 5 menit, 2 menit
//       // kalau ya, maka popup. Cek setiap 10 detik apakah session expired, kalau ya langsung logout - kalau no (break lalu cek terus), bila ada klik atau request maka renewal token
//       // kalau no, break lalu cek terus
//       this.warningTimer = setTimeout(this.checkSessionExpired, 10 * 1000);

//       this.warningZone = false;
//     },

//     async checkSessionExpired() {
//       try {
//         const response = await axios
//           .post("https://dev.api.hoonian.com/api/token/remain", {
//             access_token: this.access_token,
//             refresh_token: this.refresh_token
//           })
//           .then(response => (this.info = response));
//         console.log(response.data.data.remainingTime);
//         if (
//           response.data.data.remainingTime <= 11
//         ) {
//           this.warningZone = true;

//           console.log(response.data.data.remainingTime);
//           this.logoutTimer = setTimeout(
//             this.logoutUser,
//             response.data.data.remainingTime * 1000
//           );
//         } else {
//           this.setTimers();
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     },

//     async tokenRefresh() {
//       const res = await axios
//         .post("https://dev.api.hoonian.com/api/token/refresh", {
//           access_token: this.access_token,
//           refresh_token: this.refresh_token
//         })
//         .then(res => (this.info = res));

//       console.log(res);
//     },

//     warningMessage: function() {
//       this.warningZone = true;
//     },

//     logoutUser: function() {
//       // 1. Hapus session dulu
//       localStorage.removeItem(this.access_token);
//       this.$router.push({ name: "Login" }); // 2. push kembali ke login
//     },

//     resetTimer: function() {
//       clearTimeout(this.warningTimer);
//       clearTimeout(this.logoutTimer);

//       this.tokenRefresh();
//       this.setTimers();
//     }
//   }
// };
</script>

<style scoped lang="scss">
.dashboard {
  color: white;
  text-align: center;
  p {
    font-size: 18px;
  }
}
</style>