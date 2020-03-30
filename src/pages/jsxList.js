import { render } from 'react-dom'
import React from 'react'

/**
 *  ▌如果父组件传递给子组件的props改变了，子组件渲染的列表会跟随父组件更新吗？
    【答案】：子组件会执行rerender，但是渲染出来的列表数据不变。
    【原因】：父组件更新导致子组件更新时，子组件的生命周期执行顺序如下：
    - componentWillReceiveProps()
    - shouldComponentUpdate()
    - componentWillUpdate()
    - 子组件render()
    - componentDidUpdate()

    也就是说子组件刷新的时候，不再执行constructor，当然也就不会对state重新赋值，所以子组件虽然执行了render，但是渲染数据不变。
    ▌父组件用props赋值给子组件的state时，需要注意：
    - 要在生命周期componentWillReceiveProps中重新赋值
 *
 */
class Child extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: props.list
    }
  }

  // componentWillReceiveProps(props) {
  //   this.setState({
  //     list: props.list
  //   })
  // }

  handleCilck = () => {
    this.setState({
      list: this.state.list.concat({ name: 'sarah' })
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleCilck}>点击添加数组元素</button>
        {/*
          * for循环, map()函数:
          - Array.map() 方法返回一个新数组；
          - 数组中的元素为原始数组元素调用函数处理后的值；
          - 同时不会改变原来的数组。
          */}
        {this.state.list.map((item, index) => {
          {/*可以附加其他限制条件，如if/switch等等...*/}
          return <h1 key={index}>Hello, {item.name}</h1>
        })}
      </div>
    )
  }
}

export default class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [{ name: 'lily' }, { name: 'bob' }]
    }
  }

  handleCilck = () => {
    this.setState({
      list: this.state.list.concat([{ name: 'parent' }])
    })
  }

  render() {
    return (
      <div style={{backgroundColor: '#efefef'}}>
        <button onClick={this.handleCilck}>父组件更新state</button>
        <Child list={this.state.list} />
      </div>
    )
  }
}
