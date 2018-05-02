import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ResponsiveBar } from '@nivo/bar'
import { withTheme } from 'styled-components'

// .nivo rect {
//   transition: fill .15s ease-in-out;
// }

// .nivo rect:hover {
//   fill: #1EE3A1 !important;
// }

const NivoExample = ({ data, theme }) => {
  const defaultTheme = {
    axis: {
      textColor: theme.color.foreground,
      fontSize: theme.font.chartLabelSize,
      tickColor: theme.color.darkForeground,
      legendColor: '#000',
      legendFontSize: theme.font.chartLabelSize
    },
    grid: {
      stroke: theme.color.darkForeground,
      strokeWidth: 1,
      strokeDasharray: ''
    },
    markers: {
      lineColor: '#000',
      lineStrokeWidth: 1,
      textColor: '#000',
      fontSize: theme.font.chartLabelSize
    },
    dots: {
      textColor: '#000',
      fontSize: theme.font.chartLabelSize
    },
    tooltip: {
      container: {
        background: theme.color.brightForeground,
        color: theme.color.darkBackground,
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
      textColor: theme.color.foreground
    },
    sankey: {
      label: {}
    }
  }

  return (
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
      colors={theme.color.foreground}
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
  )
}

NivoExample.propTypes = {
  data: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
}

export default connect(state => ({ data: state.data.barChart }))(
  withTheme(NivoExample)
)
