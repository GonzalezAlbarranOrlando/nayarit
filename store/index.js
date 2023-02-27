import Vuex from 'vuex'
const createStore = () => {
  return new Vuex.Store({
    state: {
      criterios: [
        {
          id: 1,
          nombre: 'ACCESO INICIAL',
          imagen: '/images/criterios-evaluacion/1-acceso-inicial.jpg',
          color: '#29588C',
          link: 'acceso-inicial',
          file: '/documents/criterios-evaluacion/1-acceso-inicial.pdf'

        },
        {
          id: 2,
          nombre: 'LEY DE INGRESOS',
          color: '#359bbb',
          imagen: '/images/criterios-evaluacion/2-ley-de-ingresos.jpg',
          link: 'ley-de-ingresos',
          file: '/documents/criterios-evaluacion/2-ley-de-ingresos.pdf'

        },
        {
          id: 3,
          nombre: 'CLASIFICACIÓN',
          color: '#329c97',
          imagen: '/images/criterios-evaluacion/3-clasificacion.jpg',
          link: 'clasificacion',
          file: '/documents/criterios-evaluacion/3-clasificacion.pdf'

        },
        {
          id: 4,
          nombre: 'PODERES, DEPENDENCIAS Y ORGANOS',
          color: '#f2972a',
          imagen: '/images/criterios-evaluacion/4-poderes-dependencias-organismos.jpg',
          link: 'poderes-dependencia-y-organos',
          file: '/documents/criterios-evaluacion/4-poderes-dependencias-organismos.pdf'

        },
        {
          id: 5,
          nombre: 'MUNICIPIOS',
          color: '#a0559b',
          imagen: '/images/criterios-evaluacion/5-municipios.jpg',
          link: 'municipios',
          file: '/documents/criterios-evaluacion/5-municipios.pdf'

        },
        {
          id: 6,
          nombre: 'TABULADORES Y PLAZAS',
          color: '#3787aa',
          imagen: '/images/criterios-evaluacion/6-tabuladores-plazas.jpg',
          link: 'tabuladores-y-plazas',
          file: '/documents/criterios-evaluacion/6-tabuladores.pdf'

        },
        {
          id: 7,
          nombre: 'DEUDA PÚBLICA',
          color: '#579c65',
          imagen: '/images/criterios-evaluacion/7-deuda-publica.jpg',
          link: 'deuda-publica',
          file: '/documents/criterios-evaluacion/7-deuda-publica.pdf'
        },
        {
          id: 8,
          nombre: 'RECURSOS FEDERALES',
          color: '#4d9ec3',
          imagen: '/images/criterios-evaluacion/8-recursos-federales.jpg',
          link: 'recursos-federales',
          file: '/documents/criterios-evaluacion/8-recursos-federales.pdf'
        },
        {
          id: 9,
          nombre: 'RUBROS ESPECIFICOS',
          color: '#d5af46',
          imagen: '/images/criterios-evaluacion/9-rubros-especificos.jpg',
          link: 'rubros-especificos',
          file: '/documents/criterios-evaluacion/9-rubros-especificos.pdf'
        },
        {
          id: 10,
          nombre: 'CRITERIOS',
          color: '#995a9e',
          imagen: '/images/criterios-evaluacion/10-criterios.jpg',
          link: 'criterios',
          file: '/documents/criterios-evaluacion/10-criterios.pdf'

        }
      ]
    },
    mutations: {

    },
    actions: {
    },
    getters: {
      getCriterio: state => (seo) => {
        const registro = state.criterios.find(criterio => criterio.link === seo)
        return registro.nombre
      },
      getContent: state => (seo) => {
        const registro = state.criterios.find(criterio => criterio.link === seo)
        return registro.imagen
      },
      getColor: state => (seo) => {
        const registro = state.criterios.find(criterio => criterio.link === seo)
        return registro.color
      },
      getCriterios: (state) => {
        return state.criterios
      },
      getFile: state => (seo) => {
        const registro = state.criterios.find(criterio => criterio.link === seo)
        return registro.file
      }
    }
  })
}
export default createStore
