import { createAction } from 'redux-actions'
import _ from 'lodash'

export const types = {
  BAR_CHART_DATA_UPDATED: 'BAR_CHART_DATA_UPDATED'
}

export const barChartDataUpdated = createAction(types.BAR_CHART_DATA_UPDATED)

const PEOPLE = ['Arthur', 'Bob', 'Charlie', 'Dave', 'Elsie', 'Fred', 'Grant']

export function updateBarChartData () {
  return dispatch =>
    new Promise(resolve => {
      const people = _.take(_.shuffle(PEOPLE), 5).map(name => ({
        key: name,
        value: _.random(50) === 0 ? 0 : _.random(100)
      }))

      //   console.log('people', JSON.stringify(people))

      dispatch(barChartDataUpdated({ data: people }))
    })
}
