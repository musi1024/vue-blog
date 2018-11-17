<template>
  <div id="index">
    <section class="blog-posts">
      <div class="item" v-for="blog in blogs" :key="blog.id">
        <figure class="avatar">
          <img :src="blog.user.avatar" :alt="blog.user.username">
          <figcaption>{{blog.user.username}}</figcaption>
        </figure>
        <h3>
          <router-link :to="`/detail/${blog.id}`">{{blog.title}}</router-link>
          <span> 发布于{{friendlyDate(blog.createdAt)}}</span>
        </h3>
        <p>
          <router-link :to="`/detail/${blog.id}`">{{blog.description}}</router-link>
        </p>
      </div>
    </section>
    <section class="pagination">
      <el-pagination 
        background 
        layout="prev, pager, next" 
        :total="total" 
        :pager-count="5"
        :current-page.sync="page" 
        @current-change="onPageChange">
      </el-pagination>
    </section>
  </div>
</template>
<script src="./template.js"></script>
<style scoped lang='less' src="./template.less"></style>
