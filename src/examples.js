import HighchartsExample from './components/examples/highcharts'
import D3KitExample from './components/examples/d3kit'

// import D3KitHybridExample from './components/examples/d3kit-hybrid'
import RechartsExample from './components/examples/recharts'
import ReactVisExample from './components/examples/react-vis'
import VictoryExample from './components/examples/victory'
import BillboardExample from './components/examples/billboard'
// import ChartistExample from './components/examples/chartist'
// import NivoExample from './components/examples/nivo'

export default [
  {
    title: 'Highcharts',
    url: 'https://www.highcharts.com/',
    description: 'A mature JS charting solution with a React adaptor. Not free for commercial use. Makes great use of the available screen space.',
    component: HighchartsExample
  },
  {
    title: 'D3Kit',
    url: 'https://github.com/twitter/d3kit',
    description: 'A lightweight wrapper for D3 v4 with a React adaptor. Reduces the boilerplate code needed to create a chart using D3. The bars animate to track category position changes.',
    component: D3KitExample
  },
  {
    title: 'Billboard',
    url: 'https://naver.github.io/billboard.js/',
    description: 'A lightweight wrapper for D3 v4 with a React adaptor. An alternative to D3Kit.',
    component: BillboardExample
  },
  // {
  //   title: 'D3Kit Hybrid',
  //   url: '',
  //   description: 'A example of using D3Kit to create a chart that combines SVG and canvas rendering.',
  //   component: D3KitHybridExample
  // },
  {
    title: 'Recharts',
    url: 'http://recharts.org/',
    description: 'Built using React.',
    component: RechartsExample
  },
  {
    title: 'React Vis',
    url: 'https://uber.github.io/react-vis/',
    description: 'Build using React by Uber.',
    component: ReactVisExample
  },
  {
    title: 'Victory',
    url: 'http://formidable.com/open-source/victory/',
    description: 'Build using React.',
    component: VictoryExample
  }
  // {
  //   title: 'Chartist',
  //   url: '',
  //   description: 'Description to follow.',
  //   component: ChartistExample
  // },
  // {
  //   title: 'Nivo',
  //   url: '',
  //   description: 'Description to follow.',
  //   component: NivoExample
  // }
]
