<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<style lang="scss">
@import "assets/reset.css";
@import "assets/genStyle.css";

#nav {
}

</style>
<script>
import DefaultLayout from './layouts/DefaultLayout';
import userLayout from './layouts/userLayout';

export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout';
    }
  },
  components: {
    userLayout,
    DefaultLayout
  }
};
</script>
