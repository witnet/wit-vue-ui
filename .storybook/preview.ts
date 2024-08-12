import type { Preview } from '@storybook/vue3'
import '../src/assets/main.css'
import '../src/assets/colors.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: '',
      values: [ 
        {
         name: 'white',
         value: '#fff'
        },
        {
          name: 'grey',
          value: '#707070',
        },
        {
          name: 'blue',
          value: '#00e2ed',
        },
      ],
    },
  }
  
}

export default preview
