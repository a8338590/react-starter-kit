import React, { Component } from 'react'
import classes from './helpDetail.scss'

export default class extends Component{

  componentDidMount(){
    document.title = '配送方式'
  }

  render(){
    return (
      <div className={classes.con}>
        <h1 className={classes.maintitle}>配送方式</h1>
        <div className={classes.info}>
          <p>
            <img src="http://act.hai360.com/uploads/allimg/140324/2-1403241QPLZ.jpg" />
            <br/>
            <br/>
            Hai360与多家知名的国际、国内和转运快递公司合作，致力于为用户打造快捷的物流速度和的周到的服务体验，整个订单的物流配送信息可全程跟踪。
            <br/>
            <br/>
            <br/>
            <img src="http://act.hai360.com/uploads/allimg/140612/2-14061221132c36.jpg" /></p>
        </div>
      </div>
    )
  }
}