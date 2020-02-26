# react-number-formator

> Primarily written for number formatting to be shown as human readable format. It accepts number only and converts it to three formats - original | result | short | easy
* original - return original number sent by you
* result - full conversion with unit
* short - full conversion with short unit
* easy - easy to read, no decimal places

>can be used in both react and react-native

[![NPM](https://img.shields.io/npm/v/react-number-formator.svg)](https://www.npmjs.com/package/react-number-formator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

for npm
```bash
npm install --save react-number-formator
```
for yarn
```bash
yarn add react-number-formator
```

## Usage in React

```jsx
import React, { Component } from 'react'

import RNFormator from 'react-number-formator'

class Example extends Component {
  render () {
    return (
      <div>
        Original Number : 100900000000000080
        <br/>
        Converted: {JSON.stringify(RNFormator(100900000000000080))}
      </div>
    )
  }
}
```

## Usage in React

```jsx
import React, { Component } from 'react'
import {View, Text} from 'react-native'
import RNFormator from 'react-number-formator'

export default function convert(props){

    return (
      <View>
      <Text>
        Original Number : 100900000000000080
        </Text>
        <Text>
        Converted: {JSON.stringify(RNFormator(100900000000000080))}
        </Text>
      </View>
    )

}
```

## Response
![Response image](./src/response.png?raw=true "Response")

## License

reactunlimited © [reactunlimited](https://github.com/reactunlimited)
