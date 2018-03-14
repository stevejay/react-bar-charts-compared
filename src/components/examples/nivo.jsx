import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ResponsiveBar } from '@nivo/bar'

import ExampleContainer from '../example-container'

const defaultTheme = {
  axis: {
    textColor: '#CFD2DA',
    fontSize: '12px',
    tickColor: '#CFD2DA',
    legendColor: '#000',
    legendFontSize: '11px'
  },
  grid: {
    stroke: '#6f7890',
    strokeWidth: 1,
    strokeDasharray: ''
  },
  markers: {
    lineColor: '#000',
    lineStrokeWidth: 1,
    textColor: '#000',
    fontSize: '11px'
  },
  dots: {
    textColor: '#000',
    fontSize: '11px'
  },
  tooltip: {
    container: {
      background: 'white',
      color: 'black',
      fontSize: 'inherit',
      borderRadius: '2px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
      padding: '5px 9px'
    },
    basic: {
      whiteSpace: 'pre',
      display: 'flex',
      alignItems: 'center'
    },
    table: {},
    tableCell: {
      padding: '3px 5px'
    }
  },
  labels: {
    textColor: '#CFD2DA'
  },
  sankey: {
    label: {}
  }
}

const NivoExample = ({ data }) => (
  <ExampleContainer title='Nivo' className='nivo'>
    <ResponsiveBar
      data={data}
      indexBy='key'
      theme={defaultTheme}
      margin={{
        top: 20,
        right: 40,
        bottom: 40,
        left: 60
      }}
      colors='#CFD2DA'
      padding={0.3}
      axisBottom={{
        orient: 'bottom',
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0
      }}
      enableLabel={false}
      animate
      motionStiffness={300}
      motionDamping={40}
      isInteractive
      borderColor='inherit:darker(1.6)'
    />
  </ExampleContainer>
)

NivoExample.propTypes = {
  data: PropTypes.array.isRequired
}

export default connect(state => ({ data: state.data.barChart }))(NivoExample)
