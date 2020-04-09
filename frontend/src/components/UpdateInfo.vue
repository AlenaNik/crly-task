<template>
  <div v-if="userinfo" class="edit-address-container">
    <h2>
      edit address info for {{ userinfo.firstName }} {{ userinfo.lastName }}
    </h2>
    <form @submit.prevent="UpdateData(userinfo.id)">
        <div>
          <label for=""> country:  </label>
          <input type="text" name="country" v-model="userinfo.countryName">
        </div>
      <div>
        <label for=""> locality:  </label>
        <input type="text" name="locality" v-model="userinfo.locality">
      </div>
      <div>
        <label for=""> postal:  </label>
        <input type="text" name="postalCode" v-model="userinfo.postalCode">
      </div>
      <div>
        <label for=""> street: </label>
        <input type="text" name="street" v-model="userinfo.streetAddress">
      </div>
      <p v-if="feedback"> {{ feedback }}</p>
      <button> submit the change </button>
    </form>
    <div class="test-json">
      <h2> sample new json of the user  </h2>
      {{ newjson }}
    </div>
    <div class="test-json">
      <h2> sample json of the user before update  </h2>
      {{ userinfo }}
    </div>
  </div>
  <div v-else>
      <h2> Loading...  Please, wait 🐛 </h2>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UpdateInfo',
  data() {
    return {
        userinfo: null,
        feedback: null,
        newjson: 'please, update any field to see the result'
    }
  },
  created() {
    let ref = this.$route.params.id
    this.getData(ref)
  },
  methods: {
    async getData(id) {
      let res = await axios.get("http://localhost:3000/api/addresses/" + id);
      this.userinfo = res.data
    },
    async UpdateData(id) {
      const data = {
        country: this.userinfo.countryName,
        locality: this.userinfo.locality,
        postalCode: this.userinfo.postalCode,
        streetAddress: this.userinfo.streetAddress
      }

      if (data.country && data.locality && data.postalCode && data.streetAddress) {
        axios.put("http://localhost:3000/api/addresses/" + id, data).then(() => {
          this.newjson = data
          this.feedback = null
        }).catch(function (error) {
          console.log(error);
          this.feedback = 'you must provide a valid address for each field'
        });
      }
      else {
        this.feedback = 'you cannot leave a field empty 🤭'
      }
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
    border-radius: 15px;
    box-shadow: $box-shadow;
    margin: 20px;
  }
  button {
    display: block;
    margin: 20px auto;
    font-weight: bold;
    background-image: $primary-gradient;
    opacity: 0.5;
    border-radius: 20px;
    border: $border;
    color: $base-white-color;
    font-size: 12px;
    cursor: pointer;
    font-family: "Sofia Pro Semi Bold",sans-serif;
    padding: 8px 14px;
    text-align: center;
    text-decoration: none;
  }
  button:hover {
    opacity: 1;
    transition: 0.3s ease-in-out;
    box-shadow: $box-shadow;
  }

  form {
    font-family: $font-family;
    font-size: $medium;
    font-weight: $bold;
    text-align: center;

      input[type=text] {
        min-width: 30%;
        padding: 12px $padding * 2;
        margin: 10px;
        border-radius: 15px;
        border: $border;
        background-color: $base-grey-color;
        font-size: 12px;
        font-weight: $bold;
      }
  }

</style>
