import React from 'react'

import Tab from 'component_lib/Tab'

const tabDataSrc = [
  {
    tab: 'tab1',
    content: 'content 1'
  },
  {
    tab: 'tab2',
    content: 'content 2'
  }
]

export default function TestCompLib() {
  const onTabClick = key => {
    console.log(`onTabClick: key=${key}`) // eslint-disable-line
  }

  const onChange = key => {
    console.log(`onChange: key=${key}`) // eslint-disable-line
  }

  return (
    <div>
      <h3>{'-----------------------------测试组件库----------------------'}</h3>
      <h4>{'---------------简易Tab组件----------'}</h4>
      <Tab onTabClick={onTabClick} onChange={onChange}>
        {tabDataSrc.map((child, idx) => (
          <Tab.TabPane key={child.tab} tab={child.tab}>
            <div>{child.content}</div>
            <div>{`panel: ${idx + 1}`}</div>
          </Tab.TabPane>
        ))}
      </Tab>
    </div>
  )
}
