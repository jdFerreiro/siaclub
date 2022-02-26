<template>
  <div></div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "ResumeContent",
  data() {
    return {};
  },
  mounted() {
    if (!this.$store.state.userName) {
      this.$router.push("/login");
    }
  },
};
</script>

<style></style>
