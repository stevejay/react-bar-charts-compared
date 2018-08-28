import HighchartsExample from "./components/examples/highcharts";
import D3KitExample from "./components/examples/d3kit";
import D3KitHybridExample from "./components/examples/d3kit-hybrid";
import RechartsExample from "./components/examples/recharts";
import ReactVisExample from "./components/examples/react-vis";
import VictoryExample from "./components/examples/victory";
import BillboardExample from "./components/examples/billboard";
import ChartistExample from "./components/examples/chartist";
import NivoExample from "./components/examples/nivo";

const EXAMPLES = [
  {
    title: "Highcharts",
    url: "https://www.highcharts.com/",
    description:
      "A mature JavaScript charting solution that has various React.js adaptors; the one used here is react-jsx-highcharts. Not free for commercial use. Makes great use of the available screen space.",
    component: HighchartsExample
  },
  {
    title: "D3Kit",
    url: "https://github.com/twitter/d3kit",
    description:
      "A lightweight wrapper from Twitter for d3 v4, used with a React.js adaptor package. Reduces the boilerplate code needed to create a chart using d3. Notice that the bars move to track category position changes.",
    component: D3KitExample
  },
  {
    title: "D3Kit Hybrid",
    url: "https://github.com/twitter/d3kit",
    description:
      "A example of using D3Kit to create a chart that renders the bars to a canvas element and the rest of the chart to an SVG element.",
    component: D3KitHybridExample
  },
  {
    title: "Billboard",
    url: "https://naver.github.io/billboard.js/",
    description:
      "A lightweight wrapper for d3 v4, used with the react-billboardjs adaptor. An alternative to D3Kit.",
    component: BillboardExample
  },
  {
    title: "Recharts",
    url: "http://recharts.org/",
    description: "Built using React.",
    component: RechartsExample
  },
  {
    title: "React Vis",
    url: "https://uber.github.io/react-vis/",
    description: "Build using React by Uber.",
    component: ReactVisExample
  },
  {
    title: "Victory",
    url: "http://formidable.com/open-source/victory/",
    description: "Build using React.",
    component: VictoryExample
  },
  {
    title: "Chartist",
    url: "https://gionkunz.github.io/chartist-js/",
    description: "Has a React adaptor. Uses SMIL for animations.",
    component: ChartistExample
  },
  {
    title: "Nivo",
    url: "http://nivo.rocks/#/",
    description: "Built using React and d3.",
    component: NivoExample
  }
];

export default EXAMPLES;
