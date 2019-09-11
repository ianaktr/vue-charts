<template>
  <header class="header">
    <div class="row align-items-center">
      <div class="col-md-5">
        <router-link to="/" class="logo">
          <img alt="Vue&D3" src="../assets/images/logo-4px-dark.png" />
          <span>Vue <i class="icon-heart"></i> D3</span>
        </router-link>
      </div>
      <nav class="col-md-7 menu">
        <router-link to="/pie">Pie example</router-link>
        <router-link to="/bar">Bar example</router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding: 30px 0px;
  margin-bottom: 40px;
}

.logo {
  display: inline-flex;
  align-items: center;
  color: #222;
  font-size: 24px;
  font-weight: 300;

  img {
    max-height: 90px;
    margin-right: 25px;
  }
}

.menu {
  text-align: right;

  a {
    display: inline-block;
    margin-left: 15px;
    padding: 10px 25px;
    color: #222;
    border: 1px solid transparent;
    border-radius: 25px;
    transition: border-color 0.2s ease-in-out;

    &:hover,
    &.active {
      border-color: #222;
    }
  }
}

@media (max-width: 768px) {
  .header {
    padding: 15px 0px;
    margin-bottom: 20px;
    text-align: center;
  }

  .logo {
    margin-bottom: 20px;

    img {
      max-height: 70px;
    }
  }

  .menu {
    text-align: center;

    a {
      padding: 7px 15px;
    }
  }
}
</style>
