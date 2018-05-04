// @flow

import type { Person, People, UpdateType, Action, ThunkAction } from '../types'
import _ from 'lodash'

export const types = {
  DATA_UPDATED: 'DATA_UPDATED'
}

export const barChartDataUpdated = (people: People): Action => ({
  type: types.DATA_UPDATED,
  payload: people
})

const PEOPLE: Array<string> = [
  'Arthur',
  'Bob',
  'Charlie',
  'Dave',
  'Elsie',
  'Fred',
  'Grant'
]

export const updateBarChartData = (updateType: UpdateType): ThunkAction => (
  dispatch,
  getState
) =>
  new Promise(resolve => {
    const existingPeople = getState().data.people
    const maxRandomValue = _.random(1) === 0 ? 50 : 100

    let people: ?People = null

    if (updateType === 'values' && !_.isEmpty(existingPeople)) {
      people = existingPeople.map((datum: Person) => ({
        ...datum,
        value: _.random(maxRandomValue)
      }))
    } else {
      people = _.take(_.shuffle(PEOPLE), 5).map((name: string) => ({
        key: name,
        value: _.random(maxRandomValue)
      }))
    }

    dispatch(barChartDataUpdated(people))
    resolve()
  })
