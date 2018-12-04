<template>
  <h1>Bravo! You made it! Protected Page</h1>
</template>

<script>
  export default {
    name: "Protected",
    beforeRouteEnter: (to, from, next) => {
      next(vm => {
        if (vm.$store.state.user.user) {
          console.log("yes");
          return next();
        } else {
          console.log("no");
          return next({ name: "Home" });
        }
      });
    }
  };
</script>