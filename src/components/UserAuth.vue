<template>
  <v-container>
    <v-row class="text-center">
      <v-btn v-if="!isLoggedIn" @click="login">Login</v-btn>
      <v-btn v-if="isLoggedIn" @click="logout">Logout</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UserAuth",

  data: () => ({}),
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["login", "logout"]),
  },
};
</script>
