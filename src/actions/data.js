import { createAction } from 'redux-actions'

export const types = {
  BAR_CHART_DATA_UPDATED: 'BAR_CHART_DATA_UPDATED'
}

export const barChartDataUpdated = createAction(types.BAR_CHART_DATA_UPDATED)

export function updateBarChartData () {
  return dispatch =>
    new Promise(resolve => {
      dispatch(barChartDataUpdated({ data: [] }))
    })
}
