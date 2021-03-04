<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3" v-for="anime in dataList.results" :key="anime">
        <animeComponent
          :image="anime.image_url"
          :title="anime.title"
          :rate="anime.rated"
          :synopsis="anime.synopsis"
          :url="anime.url"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import animeComponent from "@/components/AnimeAPIComponent.vue";
import { mapState } from "vuex";
export default {
  components: {
    animeComponent
  },
  mounted() {
    this.$store.dispatch("getApi");
  },
  computed: {
    ...mapState(["dataList"])
  }
};
</script>

<style></style>
