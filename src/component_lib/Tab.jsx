/**
 * Tab功能点：
 * 1. 点击切换Tab 实现左滑右滑
 * 2. Todo...
 */

import React from 'react'
import PropTypes from 'prop-types'
import styles from './Tab.module.scss'

const TabPaneComp = props => <div>{props.children}</div>

class BaseTab extends React.Component {
  static TabPane = TabPaneComp
  constructor(props) {
    super(props)
    let activeKey
    if ('activeKey' in props) {
      activeKey = props.activeKey
    } else if ('defaultActiveKey' in props) {
      activeKey = props.defaultActiveKey
    } else {
      activeKey = getDefaultActiveKey(props)
    }
    this.state = {
      activeKey
    }
  }

  setActiveKey = activeKey => {
    if (this.state.activeKey !== activeKey && !('activeKey' in this.props)) {
      this.setState({ activeKey })
    }
    this.props.onChange(activeKey)
  }

  onTabClick = activeKey => {
    this.props.onTabClick(activeKey)
    this.setActiveKey(activeKey)
  }

  renderTabBar = () => {
    const panels = this.props.children
    const { activeKey } = this.state
    const tabBarListCont = []
    React.Children.forEach(panels, panel => {
      if (!panel) {
        return
      }

      const key = panel.key
      const cls = `${styles['tab-title']} ${
        activeKey === key ? styles['tab-title-active'] : ''
      }`
      const events = {
        onClick: this.onTabClick.bind(this, key)
      }
      if (!panel.props.tab) {
        console.error('There must be `tab` property on children of Tabs.') // eslint-disable-line
      }

      let node = (
        <div className={cls} {...events} key={key}>
          <span>{panel.props.tab}</span>
        </div>
      )
      tabBarListCont.push(node)
    })
    return <div>{tabBarListCont}</div>
  }

  renderTabContent = () => {
    const panels = this.props.children
    const { activeKey } = this.state
    const tabContentList = []
    React.Children.forEach(panels, panel => {
      if (!panel) {
        return
      }

      const key = panel.key
      const cls = `${styles['tab-content']} ${
        activeKey === key ? styles['tab-content-active'] : ''
      }`
      let node = (
        <div className={cls} key={key}>
          {panel.props.children}
        </div>
      )
      tabContentList.push(node)
    })
    const activeIndex = getActiveIndex(panels, activeKey)
    const style =
      activeIndex === -1
        ? { display: 'none' }
        : { marginLeft: `-${100 * activeIndex}%` }
    return (
      <div className={styles['tabs-content-list']} style={style}>
        {tabContentList}
      </div>
    )
  }
  render() {
    return (
      <div className={styles['w-tabs']}>
        <div className={styles['tabs-header']}>{this.renderTabBar()}</div>
        <div className={styles['tabs-content']}>{this.renderTabContent()}</div>
      </div>
    )
  }
}

BaseTab.propTypes = {
  dataSrc: PropTypes.arrayOf(
    PropTypes.shape({
      tab: PropTypes.node
    })
  ),
  onTabClick: PropTypes.func,
  onChange: PropTypes.func
}

BaseTab.defaultProps = {
  onTabClick: () => {},
  onChange: () => {}
}

export default BaseTab

/**
 * ---------------  分隔线， 工具类函数 -----------------------
 */
const getDefaultActiveKey = props => {
  let activeKey
  React.Children.forEach(props.children, child => {
    if (child && !activeKey) {
      activeKey = child.key
    }
  })

  return activeKey
}

const getActiveIndex = (children, activeKey) => {
  const c = Array.from(children)
  return c.findIndex(child => child.key === activeKey)
}
