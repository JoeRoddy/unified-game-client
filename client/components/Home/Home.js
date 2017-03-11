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
              <a href="">Library</a>
              <a href="">Store</a>
              <a href="">Community</a>
          </ul>
        </div>
      </div>
    )
  }
}