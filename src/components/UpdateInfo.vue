<template>
  <div class="edit-address-container">
    <h2>
      edit & add address.
      {{ this.$route.params.id }}
    </h2>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UpdateInfo',
  data() {
    return {

    }
  },
  created() {
    let ref;
    axios.get('http://localhost:3001/api/transactions')
      .then(res =>
        ref = res.data)

  }
}
</script>

<style lang="scss">
  @import "../assets/scss/variables";

</style>
