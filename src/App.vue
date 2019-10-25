<template>
  <div id="app">
    <keep-alive>
      <router-view>
        <!-- 这里是会被缓存的视图组件 -->
      </router-view>
    </keep-alive>
    <!-- <router-view v-if="!$route.meta.keepAlive"> -->
        <!-- 这里是不会被缓存的视图组件 -->
      <!-- </router-view> -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
</style>
