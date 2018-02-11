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
    };
  },
  components: {
  },
  methods: {
    get: function () {
      const that = this;
      console.log('登录')
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/login',
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
    post: function () {
      const that = this;
      console.log('登录')
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/login',
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
  },
  watch: {
  }
}
</script>

<style scoped>

</style>
