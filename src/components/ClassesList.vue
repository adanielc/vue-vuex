<template>
  <v-container>
    <v-row>
      <v-col v-for="item in classes" :key="item.index">
        <v-card
          @click="fetchDataFromApi(item.url)"
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
import { mapActions, mapState } from 'vuex';

export default {
  name: "ClassesList",

  data: () => ({
    resp: {},
    classes: [],
  }),
  computed: {
    ...mapState(['responseData']),

  },
  methods: {
    ...mapActions(['fetchData', 'postData', 'putData', 'deleteData']),
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
    async fetchDataFromApi() {
      const url = "https://www.dnd5eapi.co/api/classes";
      const params = { /* Tus parámetros GET aquí */ };
      try {
        const response = await this.fetchData({ url, params });
        this.classes = response.results;
        // Manejar la respuesta
      } catch (error) {
        // Manejar el error
      }
    },
    async postDataToApi() {
      const url = 'URL_POST_AQUI';
      const data = { /* Tus datos POST aquí */ };
      try {
        const response = await this.postData({ url, data });
        // Manejar la respuesta
      } catch (error) {
        // Manejar el error
      }
    },
    async putDataToApi() {
      const url = 'URL_PUT_AQUI';
      const data = { /* Tus datos PUT aquí */ };
      try {
        const response = await this.putData({ url, data });
        // Manejar la respuesta
      } catch (error) {
        // Manejar el error
      }
    },
    async deleteDataFromApi() {
      const url = 'URL_DELETE_AQUI';
      try {
        const response = await this.deleteData({ url });
        // Manejar la respuesta
      } catch (error) {
        // Manejar el error
      }
    },
  },
  mounted() {},
};
</script>
