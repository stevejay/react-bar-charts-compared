import { createAction } from 'redux-actions'
import _ from 'lodash'

export const types = {
  BAR_CHART_DATA_UPDATED: 'BAR_CHART_DATA_UPDATED'
}

export const barChartDataUpdated = createAction(types.BAR_CHART_DATA_UPDATED)

const PEOPLE = ['Arthur', 'Bob', 'Charlie', 'Dave', 'Elsie', 'Fred', 'Grant']

export function updateBarChartData (updateType) {
  return (dispatch, getState) =>
    new Promise(resolve => {
      const barChartData = getState().data.barChart
      let people = null

      if (updateType === 'values' && !_.isEmpty(barChartData)) {
        people = barChartData.map(datum => ({
          ...datum,
          value: getRandomValue()
        }))
      } else {
        people = _.take(_.shuffle(PEOPLE), 5).map(name => ({
          key: name,
          value: _.random(50) === 0 ? 0 : _.random(100)
        }))
      }

      dispatch(barChartDataUpdated({ data: people }))
    })
}

function getRandomValue () {
  return _.random(50) === 0 ? 0 : _.random(100)
}
