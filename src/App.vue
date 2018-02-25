<template lang="html">
  <div class="">
    <!-- <a @click="setToken()" class="button">session token</a> -->
    <login v-if="isShowLogin" v-model="loginStatus"></login>
    <administrator-home-page v-else></administrator-home-page>
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
      isShowLogin: false,
      loginStatus: null,
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
      // sessionStorage.setItem('token', that.token);
      // sessionStorage.getItem('token');
    }
  },
  created() {
  },
  watch: {
    'isShowLogin': function (value, oldValue) {
      const that = this;
    },
    loginStatus: function (value, oldValue) {
      const that = this;
      that.isShowLogin = value;
    }
  }
}
</script>

<style lang="css">
nav {
  margin-bottom: 30px;
}
</style>
