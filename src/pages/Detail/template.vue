<template>
  <div id="detail">
    <section class="user-info"> 
      <router-link :to="`/${routerTo}`" class="avatar">
        <img :src="otherUser.avatar" :alt="otherUser.username" :title="otherUser.username" class="avatar">
      </router-link>  
      <h3>{{title}}</h3>
      <p>
        <router-link :to="`/${routerTo}`">{{otherUser.username}}</router-link>  发布于{{friendlyDate(createdAt)}}
      </p>
    </section>
    <section class="article" v-html="markdown"></section>
  </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>
