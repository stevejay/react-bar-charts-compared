// @flow

import type { ComponentType } from 'react'

// Domain:

export type Person = {|
  +key: string,
  +value: number,
|}

export type People = Array<Person>

export type DataReducerState = {|
  +people: People,
|}

export type State = {|
  +data: DataReducerState,
|}

export type UpdateType = 'values' | 'categories'

// Actions:

export type ActionType = 'DATA_UPDATED'

export type Action<T> = {|
  +type: ActionType,
  +payload: T,
|}

export type Dispatch = (
  action: Action<any> | ThunkAction | PromiseAction | Array<Action<any>>
) => any

export type GetState = () => State

export type ThunkAction = (
  dispatch: Dispatch,
  getState: GetState
) => Promise<any>

export type PromiseAction = Promise<Action<any>>

export type Example = {|
  +title: string,
  +url: string,
  +description: string,
  +component: ComponentType<any>,
|}

export type Theme = {|
  timing: any,
  color: any,
  font: any,
|}
