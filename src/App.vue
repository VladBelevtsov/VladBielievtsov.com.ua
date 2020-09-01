<template>
  <div id="app">
    <div id="nav">

      <div class="menu">
        <router-link 
          v-for="link in links"
          :key="link.url" 
          active-class="active" 
          :to="link.url"
          :exact="link.exact"
        >
          {{ link.title }}
        </router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {title: 'Home', url: '/', exact: true},
      {title: '🎨 Portfolio', url: '/portfolio'}
    ]
  })
}
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Mulish', sans-serif;
}

body {
  background: #1B1B1B;
  padding: 24px;
  overflow-x: hidden;
}

#app {
  background: #111111;
  position: relative;

  &::before, &::after {
    width: 100%;
    height: 24px;
    background: #1B1B1B;
    content: '';
    z-index: 1;
  }

  &::before {
    position: fixed;
    top: 0px;
    left: 0px;
  }

  &::after {
    position: fixed;
    bottom: 0px;
    left: 0px;
  }

  #nav {
    position: fixed;
    top: 48px;
    right: 24px;
    padding-right: 24px;
    

    a {
      color: #7a7a7a;
      font-size: 20px;
      text-decoration: none;
      padding: 20px;
    }

    .active {
      color: #fff;
    }
  }
}

@media screen and (max-width: 500px) {
  body {
    padding: 0;
  }

  #app #nav {
    right: unset;
    width: 100%;
    text-align: center;
    padding-right: 0;
  }

  #app::before, #app::after {
    display: none;
  }
}
</style>
