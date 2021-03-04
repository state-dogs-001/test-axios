<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" :src="image">
      <v-card-title>
        <v-banner elevation="8" color="white">
          {{ title }}
        </v-banner>
      </v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"> Rate : {{ rate }} </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ synopsis }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text :href="url"> See More </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    image: String,
    rate: String,
    title: String,
    synopsis: String,
    url: String
  }
};
</script>

<style></style>
