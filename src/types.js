// @flow

import { Component } from 'react'

export type Person = {|
  +key: string,
  +value: number,
|}

export type People = Array<Person>

export type DataState = {|
  +people: People,
|}

export type State = {|
  +data: DataState,
|}

export type UpdateType = 'values' | 'categories'

export type Action = {|
  +type: 'DATA_UPDATED',
  +payload: People,
|}

export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any

export type GetState = () => State

export type ThunkAction = (
  dispatch: Dispatch,
  getState: GetState
) => Promise<any>

export type PromiseAction = Promise<Action>

export type Example = {|
  +title: string,
  +url: string,
  +description: string,
  +component: any, // TODO replace
|}

export type Theme = {|
  timing: any,
  color: any,
  font: any,
|}
