<template>
  <v-app style="background-color: white;">
    <div style="background-image: url(images/main.jpg); width: 100%; height: auto; background-size: cover; background-position: center; border-bottom: solid #FF674D 5px;">
      <v-container>
        <v-layout class="text-xs-center">
          <v-flex>
            <span :style="{'fontSize': fontSize}" style="color: white;">PRESUPUESTO CIUDADANO <br> 2019</span>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-content>
      <nuxt />
    </v-content>
    <v-img src="images/sol.png" contain max-height="100px" />
    <div style="background: linear-gradient(90deg, rgba(14,92,173,1) 0%, rgba(121,241,164,1) 48%, rgba(14,92,173,1) 100%);min-height: 10px;" />
    <v-footer height="auto">
      <v-container class="pa-4">
        <v-layout row wrap>
          <v-flex xs12 class="text-xs-center">
            <v-img src="images/nayarit-enamora.png" contain max-height="70px" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
  </v-app>
</template>

<style scoped>
  * {
    font-family: 'Rubik', sans-serif !important;
  }
</style>
<script>
export default {
  computed: {
    fontSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '1.6em'
        case 'sm': return '1.6em'
        case 'md': return '2.5em'
        case 'lg': return '2.5em'
        case 'xl': return '2.5em'
        default: return '3.5em'
      }
    }
  }
}
</script>
