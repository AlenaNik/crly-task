<template>
  <div class="navbar">
      <nav>
          <img :src="image" alt=""/>
          <p>transactions list.</p>
          <p>address list.</p>
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
              padding: $padding;
              width: 130px;
              margin-left: auto;
              margin-right: auto;
              text-align: center;

            }
            p:hover {
              border-bottom: 5px solid #92e361;
              transition: all 0.3s ease 0s;
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

