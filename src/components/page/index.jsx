// @flow

import styled from 'styled-components'

import Header from './header'
import Main from './main'

const Page = styled.section`
  display: flex;
  flex-direction: column;
`

Page.Header = Header
Page.Main = Main

export default Page
