<template>
  <div v-if="userinfo" class="edit-address-container">
    <h2>
      edit address info for {{ userinfo.firstName }} {{ userinfo.lastName }}
    </h2>
    <form @submit.prevent="EditAddress">
        <div>
          <label for=""> {{ userinfo.countryName }}</label>
          <input type="text" name="country" v-model="countryName">
        </div>
      <div>
        <label for=""> locality: {{ userinfo.locality }} </label>
        <input type="text" name="country" v-model="country">
      </div>
      <div>
        <label for=""> postal code: {{ userinfo.postalCode }} </label>
        <input type="text" name="country" v-model="country">
      </div>
      <div>
        <label for=""> street: {{ userinfo.streetAddress }} </label>
        <input type="text" name="country" v-model="country">
      </div>
      <button> Update Info </button>
    </form>
    <div class="test-json">
        <h2> sample json of the user  </h2>
        {{ userinfo }}
    </div>
  </div>
  <div v-else>
      <h2> someting probably went wrong 🐛 </h2>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UpdateInfo',
  data() {
    return {
        userinfo: null
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
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/variables";
  .edit-address-container {
    text-align: center;
  }
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
