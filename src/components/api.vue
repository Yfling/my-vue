<template lang="html">
  <div class="">
    <button class="button" type="button" name="button" >GET</button>
    <button class="button" type="button" name="button" >POST</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: null,
    };
  },
  components: {
  },
  methods: {
    checkPermissions: function () {
      const that = this;
      axios({
        method: 'get',
        url: `${this.GLOBAL.localDomain}/api/v1/users/1/roles/`,
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    get: function () {
      const that = this;
      console.log('登录')
      axios({
        method: 'get',
        url: `${this.GLOBAL.localDomain}/api/login`,
        data: {

        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    post: function () {
      const that = this;
      console.log('登录')
      axios({
        method: 'post',
        url: `${this.GLOBAL.localDomain}/api/login`,
        data: {
          'email': 'admin@email.com',
          'password': 'admin',
          'type': 'mobile',
          'captcha': 'ilhup',
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
  },
  created() {
    this.token = sessionStorage.getItem('token');
  },
  watch: {
  }
}
</script>

<style scoped>

</style>
