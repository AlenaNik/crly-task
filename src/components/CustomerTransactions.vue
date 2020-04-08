<template>
  <div>
    <h2>payment info ℹ️ </h2>
    <div class="index" v-for="data in list">
      <p>payment methods: </p>
      <div v-for="transactionDetail in data.paymentMethods">
         <p>{{ transactionDetail.cardType }}</p>
         <p>{{ transactionDetail.googleTransactionId }}</p>
         <p>{{ transactionDetail.expirationMonth }}</p>
         <p>{{ transactionDetail.expirationYear }}</p>
         <img :src="transactionDetail.imageUrl" alt="">
          <div v-for="detail in transactionDetail.subscriptions">
           <div v-for="transactionItem in detail.transactions" class="bottom-section">
              <h2>transaction details ℹ️ </h2>
              <p>amount: {{ transactionItem.amount }}</p>
              <p>globa id: {{ transactionItem.androidPayCard.globalId }}</p>
              <p>google transaction id: {{ transactionItem.androidPayCard.googleTransactionId }}</p>
             <img :src="transactionItem.androidPayCard.imageUrl" alt="">
           </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'CustomerTransactions',
    data: function () {
      return {
        list: []
      }
    },
    created() {
      axios.get('http://localhost:3001/api/transactions')
        .then(res => {
          this.list = res.data
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
  .index {
    padding: $padding * 4;
     p {
       font-weight: bold;
       font-size: 14px;
       margin-bottom: 20px;
       margin-top: 0;
     }
    .bottom-section {
      background-image: $primary-gradient;
      min-width: 40%;
      box-sizing: border-box;
      padding-bottom: $padding * 2;
      padding-top: 60px;
      text-align: center;
      border-radius: 10px;
      line-break: auto;
      box-shadow: $box-shadow;
    }
  }

</style>
