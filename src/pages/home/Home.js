import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchHomeData } from '../../store/actions/home';
import { Helmet } from 'react-helmet';
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './index.module.scss';
import Test from '../../components/test/index'; 

const Home = () => {

  useStyles(styles);

  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.home)    
  console.log(homeData);
  

  useEffect(() => {  
    dispatch(fetchHomeData); 
    // if(this.props.staticContext)
  }, [])

  const renderHead = () => {
    return (
      <Helmet>
        <title>首页</title>
      </Helmet>
    )
  }

  const handleClick = () => {
    console.log(33444)
    alert('hello SSR');
  }

  return (
    <div>
      {renderHead()} 
      <div className={styles.h1} >首页</div>
      <Test />
      <ul>
        {homeData?.articles?.map(item => (
          <li key={item?.id}>
            <p>文章标题：{item.title}</p>
            <p>文章内容：{item.content}</p>
          </li>
        ))}
      </ul>
      <div><button onClick={handleClick}>点我</button></div>
    </div>
  );
}

Home.getInitialData = async (store) => {
  return store.dispatch(fetchHomeData);
}

export default Home;