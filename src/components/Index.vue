<template>
  <div>
    <h2>User info</h2>
      <div class="index">
          <div class="card" v-for="user in users" :key="user.id">
              <div class="card-content">
                <p>{{ user.name }}</p>
                <ul class="data">
                  <li v-for="transaction in user.transactions" :key="user.id"> 💳 {{ transaction }} </li>
                </ul>
                <button @click="editTheAddress">Edit</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Index',
    data: function () {
      return {
        users: [
          {
            name: 'Username',
            surname: 'Surname',
            slug: 'info1',
            transactions: [
              'today',
              'tomorrow'
            ],
            id: 1
          },
          {
            name: 'Username2',
            surname: 'Surname2',
            slug: 'info2',
            transactions: [
              'today2',
              'tomorrow2'
            ],
            id: 2
          },
          {
            name: 'Username3',
            surname: 'Surname3',
            slug: 'info3',
            transactions: [
              'today3',
              'tomorrow3'
            ],
            id: 3
          },

        ]
      }
    },
    methods: {
      editTheAddress() {
        axios.get('https://crly-test-project.firebaseio.com/paymentMethods/0/googleTransactionId')
          .then(res => {
            console.log(res.data)
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
.index {
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

    .card {
      height: 200px;
      width: 200px;
      border: $border;
      box-shadow: $box-shadow;
      background-color: $base-white-color;
      border-radius: 15px;
      margin: 10px;

          .card-content {
            text-align: center;
            font-size: 12px;
            font-weight: bold;
            padding: $padding * 2;
            li {
              list-style: none;
            }
            button {
              background-image: $primary-gradient;
              border-radius: 20px;
              border: $border;
              color: $base-white-color;
              cursor: pointer;
              display: inline-block;
              font-family: "Sofia Pro Semi Bold",sans-serif;
              margin-top: 20px;
              font-size: inherit;
              min-width: 100px;
              padding: 6px 10px;
              text-align: center;
              text-decoration: none;
            }
          }

    }
  @include desktop {
    flex-direction: row;
    flex-wrap: wrap;
  }


}

</style>
