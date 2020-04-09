<template>
  <div class="edit-address-container">
    <h2>
      edit & add address.
      {{ this.$route.params.id }}
    </h2>
    <div class="test-json">
        <h2> sample json </h2>
        {{ userinfo }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UpdateInfo',
  data() {
    return {
        userinfo: []
    }
  },
  created() {
    let ref = this.$route.params.id
    this.getData(ref)
  },
  methods: {
    async getData(id) {
      let res = await axios.get("http://localhost:3001/api/addresses/" + id);
      this.userinfo = res.data
      console.log(this.userinfo)
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/variables";
  .test-json {
    min-width: 200px;
    background-color: $base-grey-color;
    padding: $padding * 2;
    font-weight: $bold;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
    margin-top: 0;
    text-align: left;


  }

</style>
