<template>
  <v-container>
    <v-row>
      <v-col v-for="item in classes" :key="item.index">
        <v-card
          @click="getClass(item.url)"
          elevation="2"
          class="mx-auto my-6"
          width="374"
        >
          <v-card-title>
            {{ item.name }}
          </v-card-title>
          <v-card-text>
            <v-row> </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-btn @click="get">Get</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "ClassesList",

  data: () => ({
    resp: {},
    classes: [],
  }),
  computed: {},
  methods: {
    get() {
      axios({
        method: "get",
        url: "https://www.dnd5eapi.co/api/classes ",
      }).then((response) => {
        console.log("response result: " + response.data.results);
        this.classes = response.data.results;
        // this.classes = response.data.results.map((e) => e);
      });
    },
    getClass(suffix) {
      let url = "https://www.dnd5eapi.co" + suffix;
      console.log("url: " + url);
      axios({
        method: "get",
        url: url,
      }).then((response) => {
        console.log("response result: " + response.data);
        this.resp = response.data;
      });
    },
  },
  mounted() {},
};
</script>
