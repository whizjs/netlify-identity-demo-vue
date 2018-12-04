<template>
  <h1>Bravo! You made it! Protected Page</h1>
</template>

<script>
  import swal from "sweetalert2";
  export default {
    name: "Protected",
    beforeRouteEnter: (to, from, next) => {
      next(vm => {
        if (vm.$store.state.user.user) {
          return next();
        } else {
          swal({
            title: "Error!",
            text: "Please log in or sign up!",
            type: "error",
            allowOutsideClick: false,
            confirmButtonText: "All Right"
          });
          return next({ name: "Home" });
        }
      });
    }
  };
</script>