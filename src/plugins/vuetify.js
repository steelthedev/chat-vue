// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
   theme:{
    themes:{
      light:{
        dark:false,
        colors:{
          primary: '#7269EF',
          secondary: '#F5F7FB',
          word: '#495057',
          mygrey:'#E6EBF5',
        
        },
      },
    },
 
   },
  },
)
