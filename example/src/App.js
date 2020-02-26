import React, { Component } from 'react'

import RNFormator from 'react-number-formator'

export default class App extends Component {
  render () {
    return (<div>
      <div>
        Original Number : 100900000000000080
        <br/>
        Converted: {JSON.stringify(RNFormator(100900000000000080))}
      </div>
      <br/><hr/><br/>

      <div>
        Original Number : 100900000000000080
        <br/>
        Converted: {JSON.stringify(RNFormator(100900000000000080))}
      </div>
      <br/><hr/><br/>

      <div>
        Original Number : 100900000000000080
        <br/>
        Converted: {JSON.stringify(RNFormator(100900000000000080))}
      </div>
      <br/><hr/><br/>

      <div>
        Original Number : 100900000000000080
        <br/>
        Converted: {JSON.stringify(RNFormator(100900000000000080))}
      </div>
      <br/><hr/><br/>

      <div>
        Original Number : 100900000000000080
        <br/>
        Converted: {JSON.stringify(RNFormator(100900000000000080))}
      </div>
      <br/><hr/><br/>

      <div>
        Original Number : 100900000000000080
        <br/>
        Converted: {JSON.stringify(RNFormator(100900000000000080))}
      </div>
      </div>
    )
  }
}
