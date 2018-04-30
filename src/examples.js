import HighchartsExample from './components/examples/highcharts'
import D3KitExample from './components/examples/d3kit'

// import D3KitHybridExample from './components/examples/d3kit-hybrid'
// import RechartsExample from './components/examples/recharts'
// import ReactVisExample from './components/examples/react-vis'
// import VictoryExample from './components/examples/victory'
// import BillboardExample from './components/examples/billboard'
// import ChartistExample from './components/examples/chartist'
// import NivoExample from './components/examples/nivo'

export default [
  {
    title: 'Highcharts',
    url: 'https://www.highcharts.com/',
    description: 'A mature charting solution with a React adaptor. Not free for commercial use. Makes great use of the available screen space.',
    component: HighchartsExample
  },
  {
    title: 'D3Kit',
    url: 'https://github.com/twitter/d3kit',
    description: 'A light wrapper to make creating charts with D3 easier.',
    component: D3KitExample
  }
  // {
  //   title: 'D3Kit Hybrid',
  //   description: 'A example of using D3Kit to create a chart that combines SVG and canvas rendering.',
  //   component: D3KitHybridExample
  // },
  // {
  //   title: 'Recharts',
  //   description: 'Description to follow.',
  //   component: RechartsExample
  // },
  // {
  //   title: 'React Vis',
  //   description: 'Description to follow.',
  //   component: ReactVisExample
  // },
  // {
  //   title: 'Victory',
  //   description: 'Description to follow.',
  //   component: VictoryExample
  // },
  // {
  //   title: 'Billboard',
  //   description: 'Description to follow.',
  //   component: BillboardExample
  // },
  // {
  //   title: 'Chartist',
  //   description: 'Description to follow.',
  //   component: ChartistExample
  // },
  // {
  //   title: 'Nivo',
  //   description: 'Description to follow.',
  //   component: NivoExample
  // }
]
