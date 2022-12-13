import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPersonalData } from '../../store/actions/personal'
import { Helmet } from 'react-helmet';
import useStyles from 'isomorphic-style-loader/useStyles'
import s from './index.module.scss';

const Personal = () => {
  useStyles(s);
  const dispatch = useDispatch();
  const personalData = useSelector(state => state.personal);

  useEffect(() => {
    dispatch(fetchPersonalData);
  }, [])

  return (
    <div>
      <Helmet>
        <title >个人中心</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Helmet>
      <h1 className={s.col}>个人中心页</h1>
      <p>名称：{personalData?.userInfo?.userName}</p>
      <p>职业：{personalData?.userInfo?.job}</p>
    </div>
  );
}

Personal.getInitialData = async (store) => {
  return store.dispatch(fetchPersonalData);
}

export default Personal;