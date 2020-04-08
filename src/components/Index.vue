<template>
  <div class="index">
      <div class="card" v-for="user in users" :key="user.id">
          <div class="card-content">
            <p>{{ user.name }}</p>
            <ul class="data">
              <li v-for="transaction in user.transactions" :key="user.id"> 💳 {{ transaction }} </li>
            </ul>
          </div>
      </div>
  </div>
</template>

<script>
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
    }
  }


</script>

<style lang="scss">
@import "../assets/scss/variables";
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
              padding: $padding * 2;
          }

    }
  @include desktop {
    flex-direction: row;
    flex-wrap: wrap;
  }


}

</style>
