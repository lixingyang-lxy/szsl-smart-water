<template>
  <div>login{{msg}}</div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      msg:'msg'
    }
  },
  mounted() {
    this.$axios({
      method:'POST',
      url:'https://open.ys7.com/api/lapp/token/get',
      data: {
        AppID: '',
        AppSecret: ''
      }
    })
      .then(function(response) {
      debugger
    })
  }
}
</script>
