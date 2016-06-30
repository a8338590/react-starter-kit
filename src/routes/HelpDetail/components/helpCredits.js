import React, { Component } from 'react'
import classes from './helpDetail.scss'

export default class extends Component{

  componentDidMount(){
    document.title = '积分说明'
  }

  render(){
    return (
      <div className={classes.con}>
        <h1 className={classes.maintitle}>积分说明</h1>
        <div className={classes.info}>
          <h3>1.积分获取：</h3>
          <p>购物送积分：您在Hai360成功下单，在订单完成（订单状态为“已完成”）的7天后，系统根据您的订单的实付金额1:1计算出相应的积分，并发放至您的账户。<br/><br/>      签到送积分：根据当天签到情况，赠送相应积分至您的账户。</p>
          <h3>2.积分查询</h3>
          <p>您登录后，在“我的Hai360”-“我的积分”-“积分明细”中查看当前积分以及积分历史记录。</p>
          <h3>3.积分使用</h3>
          <p>您登陆后，在“我的Hai360”-“我的积分”-“兑换区”中，可使用积分兑换出优惠券待用。</p>
        </div>
      </div>
    )
  }
}