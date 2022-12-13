import React  from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import useStyles from 'isomorphic-style-loader/useStyles'

const Menus = (props) => {
  useStyles(styles);

  const {menus} = props;

  return (
    <ul className={styles.ulbox}>
      {menus.map(item => (
        <li key={item.path}>
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Menus;
