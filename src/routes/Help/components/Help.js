import React, { Component } from 'react'
import classes from './Help.scss'
import { Link } from 'react-router'

export default class HelpView extends Component {

  toggleSubset(event) {
    event.currentTarget.nextElementSibling
      .classList.toggle(classes.subActive)
  }

  render() {
    return (
      <div>
        <ul className={classes.menu}>
          <li>
            <div onClick={this.toggleSubset} className={classes.title}>新手指南<i className={classes.active}></i></div>
            <ul className={classes.sub}>
              <li><Link to="/help/step">购物流程<i></i></Link></li>
              <li><Link to="/help/pay">支付方式<i></i></Link></li>
              <li><Link to="/help/express">配送方式<i></i></Link></li>
              <li><Link to="/help/issue">常见问题<i></i></Link></li>
            </ul>
          </li>
          <li>
            <div onClick={this.toggleSubset} className={classes.title}>用户中心<i className={classes.active}></i></div>
            <ul className={classes.sub}>
              <li><Link to="/help/credits">积分说明<i></i></Link></li>
              <li><Link to="/help/coupon">优惠券指引<i></i></Link></li>
              <li><Link to="/help/identity">身份证说明<i></i></Link></li>
            </ul>
          </li>
          <li>
            <div onClick={this.toggleSubset} className={classes.title}>购物保障<i className={classes.active}></i></div>
            <ul className={classes.sub}>
              <li><Link to="/help/real">正品保障<i></i></Link></li>
              <li><Link to="/help/custom">清关&税费<i></i></Link></li>
              <li><Link to="/help/service">服务声明<i></i></Link></li>
              <li><Link to="/help/feature">特色服务<i></i></Link></li>
            </ul>
          </li>
          <li>
            <div onClick={this.toggleSubset} className={classes.title}>售后服务<i className={classes.active}></i></div>
            <ul className={classes.sub}>
              <li><Link to="/help/return">退货服务政策<i></i></Link></li>
              <li><Link to="/help/transport">物流说明<i></i></Link></li>
            </ul>
          </li>
          <li><Link to="/help/size" className={classes.title} style={{'borderBottom': 0}}>尺码助手<i></i></Link></li>
        </ul>
      </div>
    )
  }
}