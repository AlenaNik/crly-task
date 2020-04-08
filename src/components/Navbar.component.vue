<template>
  <div class="navbar">
      <nav>
        <router-link :to="{ name: 'Index' }">
          <img :src="image" alt=""/>
        </router-link>
        <router-link :to="{ name: 'CustomerTransactions' }">
            <p>transactions list.</p>
        </router-link>

      </nav>
  </div>

</template>

<script>
import logo from '../assets/img/logo.png'


export default {
  name: 'Navbar',
  data() {
      return {
        image: logo
      }
  }
}



</script>

<style lang="scss">
@import "../assets/scss/variables";
a {
  text-decoration: none;
}
  .navbar {
    background-color: $base-white-color;
    font-size: $paragraph;
    font-weight: $bold;
      nav {
          img {
            width: 20%;
            padding: $padding;
            cursor: pointer;
            margin-right: auto;

            @include desktop {
              max-width: 15%;
              padding: $padding $padding * 4;
              }
          }
            p {
              color: $text-primary;
              padding: $padding;
              width: 130px;
              margin-left: auto;
              margin-right: auto;
              text-align: center;
              border-bottom: 5px solid #92e361;
            }

        @include desktop {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: $padding $padding * 4;
        }

      }
  }

</style>

