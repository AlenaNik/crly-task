<template>
  <div>
    <h2>User info</h2>
      <button @click="editTheAddress">Get users info ℹ️ </button>
          <div class="index" v-for="user in users" :key="user.id">
              <ul v-for="address in user.addresses" class="card">
                <li class="card-content">
                  {{ address.firstName }}
                </li>
                <li class="card-content">
                  {{ address.lastName }}
                </li>
                <li class="card-content">
                  {{ address.countryName }} 🇩🇪
                </li>
              </ul>
          </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Index',
    data: function () {
      return {
        users: []
      }
    },
    methods: {
      editTheAddress() {
        axios.get('http://localhost:3001/api/addresses')
          .then(res => {
            this.users = res.data
          })
      }
    }
  }


</script>

<style lang="scss">
@import "../assets/scss/variables";
h2 {
  text-align: center;
}
button {
  display: block;
  margin: 20px auto;
  background-image: $primary-gradient;
  border-radius: 20px;
  border: $border;
  color: $base-white-color;
  cursor: pointer;
  font-family: "Sofia Pro Semi Bold",sans-serif;
  font-size: inherit;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
}

.index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;


    .card {
      height: 200px;
      width: 200px;
      border: $border;
      box-shadow: $box-shadow;
      background-color: $base-white-color;
      border-radius: 15px;
      margin: 10px;
      li {
        list-style: none;
      }

          .card-content {
            text-align: center;
            font-size: 12px;
            font-weight: bold;
            padding: $padding * 2;
          }

    }
  @include desktop {
    flex-direction: row;
    flex-wrap: wrap;
  }


}

</style>
