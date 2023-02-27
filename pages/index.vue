<template>
  <v-container grid-list-md>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm12 md9>
        <v-layout row wrap justify-space-around>
          <v-flex xs12 style="background-color: #c0c0c0; border: solid 2px #D84465; border-radius: 5px;">
            <no-ssr>
              <carousel :autoplay="true" :margin="15" :nav="false">
                <img v-for="pagina in paginas" :key="pagina.id" :src="pagina.url" :alt="pagina.alt" @click="alert(pagina)">
              </carousel>
            </no-ssr>
          </v-flex>
          <v-flex xs8>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  small
                  block
                  color="#D84465"
                  dark
                  href="documents/Presupuesto Ciudadano 2019.pdf"
                  target="_blank"
                  v-on="on"
                >
                  <i class="fas fa-download mr-2" /> Descarga
                </v-btn>
              </template>
              <span>Descargar documento</span>
            </v-tooltip>
          </v-flex>

          <v-flex
            v-for="elemento in elementos"
            :key="elemento.id"
            class="my-3"
            xs12
            sm12
            md5
          >
            <v-card style="border: solid 3px;" :style="{borderColor: elemento.color1}">
              <v-img :src="elemento.imgUrl" max-height="150px" />
              <span class="pa-2 body-2" style="position: absolute; top: 10px; color: white;" :style="{backgroundColor: elemento.color3}">
                {{ elemento.nombre }}
              </span>
              <v-card-text :style="{backgroundColor: elemento.color2}">
                <v-layout row wrap>
                  <v-flex v-if="elemento.wordPath !== ''" class="text-xs-center">
                    <v-btn fas dark color="#2a5699" :href="elemento.wordPath" target="_blank">
                      <v-icon>fas fa-file-word</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex class="text-xs-center">
                    <v-btn
                      v-if="elemento.id === 1"
                      fas
                      dark
                      block
                      color="#00AAA1"
                      :to="{name: 'criterios-de-evaluacion'}"
                    >
                      <v-icon>fas fa-external-link-alt</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex v-if="elemento.pdfPath !== ''" class="text-xs-center">
                    <v-btn fas dark color="#d70a0a" :href="elemento.pdfPath" target="_blank">
                      <v-icon>far fa-file-pdf</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" max-width="800px;">
      <v-card>
        <v-img :src="imageSelected" />
        <v-card-text class="pa-1">
          <v-layout row wrap>
            <v-flex xs6>
              <v-btn block small @click="prevImg">
                <i class="fas fa-long-arrow-alt-left mr-2" /> Anterior
              </v-btn>
            </v-flex>
            <v-flex xs6>
              <v-btn block small @click="nextImg">
                Siguiente <i class="fas fa-long-arrow-alt-right ml-2" />
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    index: 0,
    dialog: false,
    imageSelected: '',
    elementos: [
      {
        id: 1,
        nombre: 'CRITERIOS DE EVALUACIÓN IMCO 2019',
        imgUrl: 'images/puente.jpg',
        color1: '#0078bf',
        color2: '#0078bf30',
        color3: '#0078bfcc',
        wordPath: '',
        excelPath: '',
        pdfPath: ''
      },
      {
        id: 2,
        nombre: 'PRESUPUESTO DE EGRESOS 2019',
        imgUrl: 'images/cascada.jpg',
        color1: '#56944f',
        color2: '#56944f30',
        color3: '#56944fcc',
        wordPath: 'documents/presupuesto-egresos-2019.docx',
        pdfPath: 'documents/presupuesto-egresos-2019.pdf'
      },
      {
        id: 3,
        nombre: 'LEY DE INGRESOS 2019',
        imgUrl: 'images/centro.jpg',
        color1: '#af4879',
        color2: '#af487930',
        color3: '#af4879cc',
        wordPath: 'documents/ley-ingresos-2019.docx',
        pdfPath: 'documents/ley-ingresos-2019.pdf'
      },
      {
        id: 4,
        nombre: 'PLAN ESTATAL DE DESARROLLO 2018-2021',
        imgUrl: 'images/plaza.jpg',
        color1: '#ee9d26',
        color2: '#ee9d2630',
        color3: '#ee9d26cc',
        wordPath: 'documents/plan-estatal-desarrollo-2021.docx',
        pdfPath: 'documents/plan-estatal-desarrollo-2021.pdf'
      }
      // {
      //   id: 5,
      //   nombre: 'INICIATIVA DE REFORMA AL PRESUPUESTO DE EGRESOS 2019',
      //   imgUrl: 'images/danza.jpg',
      //   color1: '#1fb2ab',
      //   color2: '#1fb2ab30',
      //   color3: '#1fb2abcc',
      //   wordPath: 'documents/Presupuesto de Egresos  2019 IMCO.docx',
      //   pdfPath: 'documents/Presupuesto Modelo IMCO 2019.pdf'
      // }
    ],
    paginas: [
      {
        id: 1,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_01.jpg',
        alt: 'Página-Home'
      },
      {
        id: 2,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_02.jpg',
        alt: 'Página-2'
      },
      {
        id: 3,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_03.jpg',
        alt: 'Página-3'
      },
      {
        id: 4,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_04.jpg',
        alt: 'Página-4'
      },
      {
        id: 5,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_05.jpg',
        alt: 'Página-5'
      },
      {
        id: 6,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_06.jpg',
        alt: 'Página-6'
      },
      {
        id: 7,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_07.jpg',
        alt: 'Página-7'
      },
      {
        id: 8,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_08.jpg',
        alt: 'Página-8'
      },
      {
        id: 9,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_09.jpg',
        alt: 'Página-9'
      },
      {
        id: 10,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_10.jpg',
        alt: 'Página-10'
      },
      {
        id: 11,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_11.jpg',
        alt: 'Página-11'
      },
      {
        id: 12,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_12.jpg',
        alt: 'Página-12'
      },
      {
        id: 13,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_13.jpg',
        alt: 'Página-13'
      },
      {
        id: 14,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_14.jpg',
        alt: 'Página-14'
      },
      {
        id: 15,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_15.jpg',
        alt: 'Página-15'
      },
      {
        id: 16,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_16.jpg',
        alt: 'Página-16'
      },
      {
        id: 17,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_17.jpg',
        alt: 'Página-17'
      },
      {
        id: 18,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_18.jpg',
        alt: 'Página-18'
      },
      {
        id: 19,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_19.jpg',
        alt: 'Página-19'
      },
      {
        id: 20,
        url: 'images/presupuesto/Presupuesto Ciudadano 2019_Page_20.jpg',
        alt: 'Página-20'
      }
    ]
  }),
  methods: {
    alert(reg) {
      this.imageSelected = reg.url
      this.index = this.paginas.indexOf(reg)
      this.dialog = true
    },
    nextImg() {
      if (this.paginas[this.index + 1]) {
        this.imageSelected = this.paginas[++this.index].url
      } else {
        this.index = 0
        this.imageSelected = this.paginas[this.index++].url
      }
    },
    prevImg() {
      if (this.paginas[this.index - 1]) {
        this.imageSelected = this.paginas[--this.index].url
      } else {
        this.index = 19
        this.imageSelected = this.paginas[this.index--].url
      }
    }
  }
}
</script>
