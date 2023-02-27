<template>
  <v-flex xs12 sm12 md12 lg9>
    <v-card>
      <v-toolbar :color="this.$store.getters.getColor(this.$route.params.id)" dark>
        <v-toolbar-title>
          {{ this.$store.getters.getCriterio(this.$route.params.id) }}
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        {{ this.$store.getters.getContent(this.$route.params.id) }}
        <v-img :src="this.$store.getters.getContent(this.$route.params.id)" contain max-height="800px" />
        <v-btn
          block
          color="#D84465"
          dark
          :href="this.$store.getters.getFile(this.$route.params.id)"
          target="_blank"
        >
          <i class="fas fa-download mr-2" /> Descarga
        </v-btn>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  head() {
    return {
      title: `Nayarit | Presupuesto Ciudadano 2019 | Criterios de Evaluación IMCO 2019 | ${this.$store.getters.getCriterio(this.$route.params.id)}`
    }
  }
}
</script>
