import React, { Component } from 'react'
import classes from './Notice.scss'
import { Link } from 'react-router'

export default class extends Component {

  componentDidMount(){
    document.title = '征税公告'
  }

  render() {
    return (
      <div className={classes.con}>
        <div className={classes.title}>Hai360平台征税公告</div>
        <div>
          尊敬的用户：<br />
          <div className={classes.content}>
            根据海关总署规定，Hai360平台将于6月19日00:00起对商品征收相应税费，征收规则请参看帮助中心<Link to="/help/custom">《清关&税费》</Link>。<br />
            6月19日前在Hai360平台购物的用户，仍享有税费补贴优惠，请尽情购买，感谢您的支持与理解！<br />
          </div>
          <div className={classes.footer}>
            Hai360全平台<br />
            2016年6月1日
          </div>
        </div>
      </div>
    )
  }
}