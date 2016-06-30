import React, { Component } from 'react'
import classes from './helpDetail.scss'
import step1 from '../assert/step-01.jpg'
import step2 from '../assert/step-02.jpg'
import step3 from '../assert/step-03.jpg'
import step4 from '../assert/step-04.jpg'
import step5 from '../assert/step-05.jpg'

export default class extends Component{

  componentDidMount(){
    document.title = '购物流程'
  }

  render(){
    return (
      <div className={classes.con}>
        <h3>购物流程</h3>
        <p>
          <img src={step1}/>
          <img src={step2}/>
          <img src={step3}/>
          <img src={step4}/>
          <img src={step5}/>
        </p>
      </div>
    )
  }
}