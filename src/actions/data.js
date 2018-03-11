import { createAction } from 'redux-actions'
import _ from 'lodash'

export const types = {
  BAR_CHART_DATA_UPDATED: 'BAR_CHART_DATA_UPDATED'
}

export const barChartDataUpdated = createAction(types.BAR_CHART_DATA_UPDATED)

const PEOPLE = ['Arthur', 'Bob', 'Charlie', 'Dave', 'Elsie', 'Fred', 'Grant']

export const updateBarChartData = updateType => (dispatch, getState) =>
  new Promise(resolve => {
    const barChartData = getState().data.barChart
    const maxRandomValue = _.random(1) === 0 ? 50 : 100

    let people = null

    if (updateType === 'values' && !_.isEmpty(barChartData)) {
      people = barChartData.map(datum => ({
        ...datum,
        value: _.random(maxRandomValue)
      }))
    } else {
      people = _.take(_.shuffle(PEOPLE), 5).map(name => ({
        key: name,
        value: _.random(maxRandomValue)
      }))
    }

    dispatch(barChartDataUpdated({ data: people }))
    resolve()
  })
