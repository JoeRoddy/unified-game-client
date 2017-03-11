import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './styles.scss'

export default class Home extends Component {
  render () {
    return (
      <div className={styles.home}>
        <div className={styles.container}>
          <h2>VAPR</h2>
          <ul>
              <Link to="/library">Library</Link>
              <Link to="/store">Store</Link>
              <Link to="/community">Community</Link>
          </ul>
        </div>
      </div>
    )
  }
}