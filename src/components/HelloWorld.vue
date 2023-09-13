<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
        {{ $store.state.counter }}
      </v-col>
      <v-btn @click="addOne">Add One</v-btn>
      <v-btn @click="vueAction">Add One</v-btn>
      <v-btn @click="inc({ value: 11 })">Add One</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",

  data: () => ({}),
  computed: {
    ...mapGetters(["finalCounter", "normalizedCOunter"]),
  },
  methods: {
    // ...mapActions(["increment"]),
    ...mapActions({
      inc: "increment",
      increase: "increase",
    }),
    addOne() {
      //opt 1
      // this.$store.commit("incrementPayload", { value: 10 });

      //opt 2
      this.$store.commit({
        type: "incrementPayload",
        value: 15,
      });
    },
    vueAction() {
      this.$store.dispatch("increment", { value: 5 });
    },
  },
};
</script>
