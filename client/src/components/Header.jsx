import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

const HeaderComponent = () => (
  <Segment clearing>
    <Header>
      <h1 style={{textAlign:"center", backgroundColor:"black", color:"red"}}>
      RECORD MANAGEMENT SITE
      </h1>
    </Header>
  </Segment>
)

export default HeaderComponent;