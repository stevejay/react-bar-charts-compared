import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ExampleContainer from '../example-container'
import AutosizeContainer from '../autosize-container'

class D3FCChart extends React.Component {
  constructor (props) {
    super(props)
    this.handleMounted = this.handleMounted.bind(this)
  }
  componentDidMount () {
    this._update(this.props)
  }
  componentWillReceiveProps (nextProps) {
    if (
      nextProps.data !== this.props.data ||
      nextProps.width !== this.props.width ||
      nextProps.height !== this.props.height
    ) {
      this._update(nextProps)
    }
  }
  handleMounted (ref) {
    this._chart = ref
  }
  shouldComponentUpdate () {
    return false
  }
  _update (props) {
    const { width, height, data } = props

    // const chart = d3.select(this._chart)
  }
  render () {
    return <div ref={this.handleMounted} />
  }
}

D3FCChart.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired
}

const D3FCExample = ({ data }) => (
  <ExampleContainer title='D3FC'>
    <AutosizeContainer>
      <D3FCChart data={data} />
    </AutosizeContainer>
  </ExampleContainer>
)

D3FCExample.propTypes = {
  data: PropTypes.array.isRequired
}

export default connect(state => ({ data: state.data.barChart }))(D3FCExample)
