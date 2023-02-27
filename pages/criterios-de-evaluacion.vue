<template>
  <v-container grid-list-md>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      hidden
      class="hidden-lg-and-up"
    >
      <v-toolbar flat color="#c89d10" light>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Apartados
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider />

      <v-list two-line dense>
        <v-list-tile
          v-for="(criterio,index) in this.$store.getters.getCriterios"
          :key="criterio.id"
          :to="{name: 'criterios-de-evaluacion-id', params:{id: criterio.link}}"
        >
          <v-list-tile-content>
            <v-list-tile-title style="font-size: small;">
              {{ index+1 }}.- {{ criterio.nombre }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <span class="headline">CRITERIOS DE EVALUACIÓN IMCO 2019</span>
      </v-flex>
      <v-flex x12 class="hidden-lg-and-up">
        <v-toolbar>
          <v-toolbar-side-icon @click.stop="drawer = !drawer" />
          <v-toolbar-title>Apartados</v-toolbar-title>
          <v-spacer />
          <v-btn flat icon to="/">
            <v-icon>fas fa-home</v-icon>
          </v-btn>
        </v-toolbar>
      </v-flex>

      <v-flex xs2 class="hidden-md-and-down">
        <v-card>
          <v-toolbar color="#c89d10">
            <v-toolbar-title>Apartados</v-toolbar-title>
            <v-spacer />
            <v-btn flat icon to="/">
              <v-icon>fas fa-home</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list two-line dense>
            <v-list-tile
              v-for="(criterio,index) in this.$store.getters.getCriterios"
              :key="criterio.id"
              :to="{name: 'criterios-de-evaluacion-id', params:{id: criterio.link}}"
            >
              <v-list-tile-content>
                <v-list-tile-title style="font-size: small;">
                  <strong>{{ index+1 }}.- {{ criterio.nombre }}</strong>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <nuxt-child />
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  })
}
</script>
