import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default function RNFormator(props){

  return Convert(props)
}

const Convert = (number) => {
  //compose response
    let response = {
      original :number,
      result : number,
      short : number,
      easy : number
    }
    if(Math.abs(Number(number)) >= 1.0e+15){
      response.short = Math.abs(Number(number)) / 1.0e+15 + " Q"
      response.result = Math.abs(Number(number)) / 1.0e+15 + " Quadrillion"
      response.easy = parseInt(Math.abs(Number(number)) / 1.0e+15) + " Q"
    }
    else if(Math.abs(Number(number)) >= 1.0e+12){
      response.short = Math.abs(Number(number)) / 1.0e+12 + " T"
      response.result = Math.abs(Number(number)) / 1.0e+12 + " Trillion"
      response.easy = parseInt(Math.abs(Number(number)) / 1.0e+12) + " T"
    }else if(Math.abs(Number(number)) >= 1.0e+9){
      response.short = Math.abs(Number(number)) / 1.0e+9 + " B"
      response.result = Math.abs(Number(number)) / 1.0e+9 + " Billion"
      response.easy = parseInt(Math.abs(Number(number)) / 1.0e+9) + " B"
    }else if(Math.abs(Number(number)) >= 1.0e+6){
      response.short = Math.abs(Number(number)) / 1.0e+6 + " M"
      response.result = Math.abs(Number(number)) / 1.0e+6 + " Million"
      response.easy = parseInt(Math.abs(Number(number)) / 1.0e+6) + " M"
    }else if(Math.abs(Number(number)) >= 1.0e+3){
      response.short = Math.abs(Number(number)) / 1.0e+3 + " K"
      response.result = Math.abs(Number(number)) / 1.0e+3 + " Thousand"
      response.easy = parseInt(Math.abs(Number(number)) / 1.0e+3) + " K"
    }else{
      response.short = Math.abs(Number(number))
    }

    return response;
}