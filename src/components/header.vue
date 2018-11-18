<template>
  <header :class="{login: isLogin, 'no-login': !isLogin}">
    <template v-if="!isLogin">
      <h1>
        <router-link to="/">Let's share</router-link>
      </h1>
      <p>精品博客汇聚</p>
      <div class="btns">
        <router-link to="/login">
          <el-button>立即登录</el-button>
        </router-link>
        <router-link to="/register">
          <el-button>注册账号</el-button>
        </router-link>
      </div>
    </template>
    <template v-if="isLogin">
      <h1>
        <router-link to="/">Let's share</router-link>
      </h1>
      <el-dropdown trigger="click">
        <div class="el-dropdown-link">
          <span>{{user.username}}<i class="el-icon-arrow-down el-icon--right"></i></span>
          <div class="menu"></div>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link to="/my">我的博客</router-link>
          </el-dropdown-item>
          <el-dropdown-item divided=true>
            <router-link to="/create">新建博客</router-link>
          </el-dropdown-item>
          <el-dropdown-item divided=true>
            <a href="#" @click="onLogout">退出登录</a>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </template>
  </header>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'isLogin',
        'user'
      ])
    },
    created() {
      this.checkLogin()
    },
    methods: {
      ...mapActions([
        'checkLogin',
        'logout'
      ]),
      onLogout() {
        this.logout()
      }
    }
  }

</script>

<style lang="less">
  @import "../assets/base.less";

  header.no-login {
    padding: 0 12% 30px 12%;
    background: @bgColor;
    display: grid;
    justify-items: center;

    h1 {
      color: #fff;
      font-size: 40px;
      margin: 60px 0 0 0;
      text-transform: uppercase;
    }

    p {
      margin: 15px 0 0 0;
      color: #fff;
    }

    .btns {
      margin-top: 20px;
    }

    button {
      margin: 20px 5px 0;
    }
  }

  header.login {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: @bgColor;

    h1 {
      margin: 0;
      padding: 0;
      color: #fff;
      font-size: 40px;
      text-transform: uppercase;
    }

    span {
      color: #fff;
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
    }

    .a {
      opacity: 0;
      visibility: hidden;
    }
  }

  @media (max-width: 768px) {
    header.login {
      .el-dropdown-link {
        position: relative;
        width: 30px;
        height: 24px;
        padding-top: 10px;
        padding-right: 10px;
        cursor: pointer;
        span {
          display: none;
        }
        .menu,
        .menu::before,
        .menu::after {
          width: 30px;
          height: 3px;
          background-color: #fff;
          border-radius: 3px;
          position: absolute;
        }
        .menu::before,
        .menu::after {
          content: "";
          display: block;
        }
        .menu::before {
          top: -8px;
        }
        .menu::after {
          bottom: -8px;
        }
      }
    }
  }

</style>
