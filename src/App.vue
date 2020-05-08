<template>
  <div id="app">
    <div class="container">
      <div class="nav">
        <div class="nav-item">
          <router-link to="/" class="nav-item">Home</router-link>
          <router-link to="/about" class="nav-item">About</router-link>
          <router-link to="/work" class="nav-item">Work</router-link>
          <router-link to="/contact" class="nav-item">Contact</router-link>
        </div>
      </div>
      <!-- navとfuuterは固定する -->
      <router-view/><!-- ここに表示させるやつを必死こいて書いています -->
      <div class="footer">
        <strong>Kono Portfolio</strong> by <span>Kono</span>
      </div>
    </div>
  </div>
</template>

<script>
import 'normalize.css'
// import VeeValidate, { Validator } from 'vee-validate'
export default {
  name: 'App'
}
</script>

<style lang="scss">
@media screen and (max-width:479px) { //sp

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

.container{
  background-color: #f5f2ed;
}

.nav {
  // width: 50%;
  display: flex;
  justify-content: center;
  height: 20px;
  padding: 24px 60px;

  a {
    font-weight: bold;
    font-size: 22px;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.nav-item{
  display: flex;
  justify-content: center;
  padding: 0 12px;
}

.footer{
    position: absolute;
    bottom: 0;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    height: 50px;
    background-color: beige;
    line-height: 50px;

    span{
        font-weight: bold;
    }
  }
}


@media screen and (min-width:480px) { //pc
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

.container{
  background-color: #f5f2ed;
}

.nav {
  // width: 50%;
  display: flex;
  justify-content: flex-end;
  height: 70px;
  padding: 24px 60px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.nav-item{
  display: flex;
  justify-content: flex-end;
  padding: 0 12px;
}

.footer{
    position: absolute;
    bottom: 0;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    height: 50px;
    background-color: beige;
    line-height: 50px;

    span{
        font-weight: bold;
    }
  }
}
</style>
