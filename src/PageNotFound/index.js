import React from 'react'
import pageNotFoundStyle from './PageNotFoundStyle'
import { Link } from 'react-router-dom';

export default function PageNotFound() {
    const classes=pageNotFoundStyle();
  return (
    <div className={classes.content} >
        <img src='/img/pagenotfound.png'/>
        <p>Trang này không tìm thấy! Vui lòng trở lại <Link to="/">Trang chủ</Link></p>
    </div>
  )
}
