import React, { Component } from 'react'
import classes from './Help.scss'
import { Link } from 'react-router'

class Title extends Component {

  toggleSubset(event) {
    const ele = event.currentTarget
    this.props.titleToggleActive(ele.textContent)
  }

  render() {
    return (
      <div onClick={this.toggleSubset.bind(this)} className={classes.title}>{this.props.text}<i className={classes.active}></i></div>
    )
  }
}

class Menu extends Component {

  checkActive(text){
    if (this.props.help.indexOf(text) !== -1) {
      return classes.subActive
    }
    return ''
  }

  render() {
    return (
      <li>
        <Title {...this.props} />
        <ul className={classes.sub + ' ' + this.checkActive(this.props.text)}>
          {this.props.children}
        </ul>
      </li>
    )
  }
}

export default class HelpView extends Component {

  componentDidMount() {
    document.title = '帮助中心'
  }

  render() {
    return (
      <div>
        <ul className={classes.menu}>
          <Menu {...this.props} text='新手指南'>
            <li><Link to="/help/step">购物流程<i></i></Link></li>
            <li><Link to="/help/pay">支付方式<i></i></Link></li>
            <li><Link to="/help/express">配送方式<i></i></Link></li>
            <li><Link to="/help/issue">常见问题<i></i></Link></li>
          </Menu>
          <Menu {...this.props} text='用户中心'>
            <li><Link to="/help/credits">积分说明<i></i></Link></li>
            <li><Link to="/help/coupon">优惠券指引<i></i></Link></li>
            <li><Link to="/help/identity">身份证说明<i></i></Link></li>
          </Menu>
          <Menu {...this.props} text='购物保障'>
            <li><Link to="/help/real">正品保障<i></i></Link></li>
            <li><Link to="/help/custom">清关&税费<i></i></Link></li>
            <li><Link to="/help/service">服务声明<i></i></Link></li>
            <li><Link to="/help/feature">特色服务<i></i></Link></li>
          </Menu>
          <Menu {...this.props} text='售后服务'>
            <li><Link to="/help/return">退货服务政策<i></i></Link></li>
            <li><Link to="/help/transport">物流说明<i></i></Link></li>
          </Menu>
          <li><Link to="/help/size" className={classes.title} style={{'borderBottom': 0}}>尺码助手<i></i></Link></li>
        </ul>
      </div>
    )
  }
}