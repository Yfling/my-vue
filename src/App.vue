<template lang="html">
  <div class="">
    <a @click="setToken()" class="button">session token</a>
    <!-- <login></login> -->
    <administrator-home-page></administrator-home-page>
    <!-- <teacher-home-page></teacher-home-page> -->
    <!-- <student-home-page></student-home-page> -->
  </div>
</template>

<script>
import Login from './components/Login.vue'
import TeacherHomePage from './components/TeacherHomePage/HomePage.vue'
import StudentHomePage from './components/StudentHomePage/HomePage.vue'
import AdministratorHomePage from './components/AdministratorHomePage/HomePage.vue'
export default {
  data() {
    return {
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFmMzRjYzgzNzY2MTFjNjE2OTAxMmM1ODA0MWJkZGM4ZGY1OTM4ZTVlZjY0M2JiZTA3ZDE1NWQ3NzRiMDI0NmJmZTI0ZWUxNWQ3NWJjZjU3In0.eyJhdWQiOiIxMTUiLCJqdGkiOiJhZjM0Y2M4Mzc2NjExYzYxNjkwMTJjNTgwNDFiZGRjOGRmNTkzOGU1ZWY2NDNiYmUwN2QxNTVkNzc0YjAyNDZiZmUyNGVlMTVkNzViY2Y1NyIsImlhdCI6MTUxODA4MTU4NiwibmJmIjoxNTE4MDgxNTg2LCJleHAiOjE1NDk2MTc1ODYsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.mnAs7qwvi4EWNRYo2xIhgTiW2wQdLpNrSOxYD_E_s0CMhg2c_7A7kv9tbs5yd_3oK_GustZQ5cOTjInKwYatOCcsMy8gjOIrX0Ujd8q9PDl-vRjSs2IlkZAYAYWt1NaP5OX02FFg7kaYJHVF1KvIwepiCbhWV53zM0K8sSWEUKQMhG8FezFSsy5Vysm6W5mEka-NvAcRA7WoD6obUDraqKV3tg3uppgrEl6ebOqeC2tAVnKqRMSb6QORXRlojDMfpd6tBxUIvjRbENkWrb1h07xLabTOS6b206U5owAgAfX5vAKcnHMckhutH4YHHt2ePKUOxlFGTIkuptVMe60TywD0VItfGb9ioAH5WB7BQc-no0u6jtVLuVwCYUEXr3eXGMonYSr8Vh9Q2a4VunDhiUY5hdsndk831FIOwixfKitW8-xWtTdX0tQ0S6TFNHcuvF71KLCnnyDeuM0ek7MCwfgdd8eyBoa_FKOjan6X4QAq2n4sbnnBoBbWFFHAZx5ieNUmuulE9UZ8-r7IJKL9J6KJhNL8VadAfVigO8OuLMBNT3cP0w_7sEGFEVgGgTeJCWeQHE6btuujpFWqCBiHyIal45Ld0beNu9eWsmCyXwXlWMwIpTpCSy6az4ePN7LgfTWfLcInfJ14goV7CwEBqR9XojuGiCVtrXDb0GY02dY'
    };
  },
  components: {
    Login,
    TeacherHomePage,
    StudentHomePage,
    AdministratorHomePage,
  },
  methods: {
    setToken: function () {
      const that = this;
      sessionStorage.setItem('token', that.token);
      // sessionStorage.getItem('token');
    }
  },
  created() {
  },
  watch: {
  }
}
</script>

<style lang="css">
nav {
  margin-bottom: 30px;
}
</style>
