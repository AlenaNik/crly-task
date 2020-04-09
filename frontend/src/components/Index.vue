<template>
  <div>
    <h2>user address & info. ℹ️ </h2>
          <div class="index" v-for="user in users">
              <ul v-for="address in user.addresses" :key="address.id" class="card">
                <li class="card-content">
                 name:  {{ address.firstName }}
                </li>
                <li class="card-content">
                 surname: {{ address.lastName }}
                </li>
                <li class="card-content">
                 address: {{ address.countryName }} 🇩🇪
                  {{ address.postalCode }}
                  {{ address.region }}
                  {{ address.locality }}
                  {{ address.streetAddress }}
                </li>
                <router-link :to="{ name: 'UpdateInfo', params: {id: address.id} }">
                  <button> edit address </button>
                </router-link>
              </ul>
          </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import UpdateInfo from './UpdateInfo'

  export default {
    name: 'Index',
    data: function () {
      return {
        users: []
      }
    },
    created() {
      axios.get('http://localhost:3001/api/addresses')
        .then(res => {
          this.users = res.data
        })
        .catch(e => {
          console.error(e)
        })
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
  font-weight: bold;
  background-image: $primary-gradient;
  opacity: 0.5;
  border-radius: 20px;
  border: $border;
  color: $base-grey-color;
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
      padding: $padding;
      li {
        list-style: none;
      }
          .card-content {
            text-align: center;
            font-size: 12px;
            font-weight: bold;
            padding: $padding;
          }

    }
  @include desktop {
    flex-direction: row;
    flex-wrap: wrap;
  }


}

</style>
