import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import useStyles from 'isomorphic-style-loader/useStyles'
import s from './index.module.scss';

const About = () => {
  useStyles(s); 
 
  return (
    <div>
      <Helmet>
        <title >关于</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Helmet>
      <h1 className={s.about}>关于，测试内容<span className={s.span}>绿色</span></h1>
      
    </div>
  );
}

export default About;