import styled from 'styled-components'

const Page = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: ${props => props.theme.gutter};
  padding-bottom: 60px;
`

export default Page
