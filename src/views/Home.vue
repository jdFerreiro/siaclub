<template>
  <Header></Header>
  <Content></Content>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Home/Header.vue';
import Content from '../components/Home/Content.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    Header,
    Content,
  }
}
</script>
