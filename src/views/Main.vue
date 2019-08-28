<template>
  <div class="main-view">
    <header class="header-welcome">
      <router-link to="/" class="logo-welcome">
        <img alt="Vue&D3" src="../assets/images/logo-2px.png" />
      </router-link>

      <p class="intro">Welcome to example of composing D3 and VueJS</p>

      <nav class="menu-block">
        <router-link to="/pie">Pie example</router-link>
        <router-link to="/bar">Bar example</router-link>
      </nav>
    </header>
  </div>
</template>

<style lang="scss">
.main-view {
  height: 100%;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      to bottom,
      rgba(22, 22, 22, 0.3) 0,
      rgba(22, 22, 22, 0.7) 75%,
      #161616 100%
    ),
    url('../assets/images/bg-2.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  color: #fff;
  text-align: center;
  overflow-y: auto;
}

.header-welcome {
  padding: 30px 30px 10%;
}

.logo-welcome {
  display: inline-block;
  margin-bottom: 50px;

  img {
    max-width: 220px;
    width: 100%;
  }
}

.intro {
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 5%;
}

.menu-block {
  display: flex;
  justify-content: center;

  a {
    display: inline-block;
    padding: 10px 35px;
    margin: 0 15px;
    background: none;
    color: #fff;
    font-weight: 300;
    border-radius: 25px;
    border: 1px solid #fff;
    transition: background 0.2s ease-in-out;

    &:hover,
    &:focus,
    &:active {
      color: #fff;
      border-color: #fff;
      background: rgba(21, 17, 21, 0.5);
    }
  }
}

@media (max-width: 576px) {
  .menu-block {
    flex-wrap: wrap;

    a {
      margin: 10px;
    }
  }
}
</style>
