import React from 'react'
import './OojsxClass.css'

/**
 *	Class组件常用生命周期：
 *	1、constructor();
 *	2、render();
 *	3、componentDidMount();
 *	4、componentDidUpdate();
 *	5、componentWillUnmount();
 ******************************
 *	Class组件不常用生命周期：
 *	6、shouldComponentUpdate(nextProps, nextState);
 *	7、static getDerivedStateFromProps(props, state);
 *	8、getSnapshotBeforeUpdate(prevProps, prevState);
 *	9、static getDerivedStateFromError(error);
 *	10、componentDidCatch(error, info)
 */

/**
 * 有状态组件（class组件）
 * @state：	组件自身产生的数据 	
 * @props： 
 */
export default class OojsxClass extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			currentBlock: 1
		}
	}

	handleClick = () => {
		/**
		 * 此方式可能会无法更新计数，因为 this.props 和 this.state 可能会异步更新，所以不要依赖他们的值来更新下一个状态
		 *
		this.setState({
			count: this.state.count + this.props.outCount
		})
		 */

		/**
		 * 要解决这个问题，可以让 setState() 接收一个函数而不是一个对象;
		   这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：
		   this.setState(function(state, props)) {
	   		return {
				counter: state.count +props.outCount
	   		}
		   }
		 */
		this.setState((state, props) => ({
			count: state.count + props.outCount
		}))
	}

	/**
	 *	向事件处理程序传递参数
	 *	两种方式：
	 	<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
		<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
	 */
	handleNextA(arg, e) {
		console.log('handleNextA:', arg)
		console.log('handleNextA-DOM:', e)
	}
	handleNextB(arg0, arg1, dom) {
		console.log('handleNextB-arg0:', arg0)
		console.log('handleNextB-arg1:', arg1)
		console.log('handleNextB-dom:', dom)
	}

	componentDidMount() { console.log('Did Mount') }
	componentDidUpdate() { console.log('Did Update') }
	componentWillUnmount() { console.log('Will Unmount') } 

	/**
	 *	条件渲染：
	 *	
	 *	原理：使用 if 或者条件运算符去创建元素来表现当前的状态，然后让 React 根据它们来更新 UI
	 */
	// let currentBlock = Math.floor((Math.random()*4)+1)
	changeRandom = () => {
		this.setState({
			currentBlock: Math.floor((Math.random()*4)+1)
		})
	}
	judgeBlock() {
		const redBlock = <div><span style={{display: 'block', fontSize: '50px', color: 'red', width: '10vw', height: '3vw'}}>♦</span></div>
		const blackBlock = <div><span style={{display: 'block', fontSize: '50px', color: 'black', width: '10vw', height: '3vw'}}>♦</span></div>
		const redHeart = <div><span style={{display: 'block', fontSize: '50px', color: 'red', width: '10vw', height: '3vw'}}>♠</span></div>
		const blackHeart = <div><span style={{display: 'block', fontSize: '50px', color: 'black', width: '10vw', height: '3vw'}}>♠</span></div>
		switch(this.state.currentBlock) {
			case 1:
				return redBlock
				break
			case 2: 
				return blackBlock
				break
			case 3:
				return redHeart
				break
			case 4:
				return blackHeart
				break
			default:
				return redBlock
				break
		}
	}

	render() {
		let tempExpress = (this.state.count % 2 === 0)
		return (
			<div className="jsx-base">
				<span style={{display: 'flex', width: '100%', color: '#F84B4D'}}>类组件（有状态组件）：</span>
				<p style={{ width: '20vw', cursor: 'pointer', border: '2px solid #000' }} onClick={(e) => this.handleNextA('arg0000000', e)}>onClick()事件实现方式①：外来数据（{this.props.outCount}）</p>
				<p style={{ width: '20vw', cursor: 'pointer', border: '2px solid #000' }} onClick={this.handleNextB.bind(this, 'arg11111111', 'arg222')}>事件实现方式②：外来数据（{this.props.outCount}）</p>
				<br/>

				<span>当前计数：{this.state.count}</span>
				<button onClick={this.handleClick}>╋</button>
				<br/>

				<br/>

				<button onClick={this.changeRandom}>条件渲染示例😁</button>
				{this.judgeBlock()}
				
				{/*
				  *	通过花括号包裹代码，可以在 JSX 中嵌入任何表达式：
				  */}
				<span style={{display: 'flex', width: '100%', color: '#F84B4D'}}>通过花括号包裹代码，可以在 JSX 中嵌入任何表达式，(点击‘条件渲染示例😁’按钮查看效果)：</span>
				<div className="jsx-express">
					{
						tempExpress ? (<h2>三目运算结果为-true时~~</h2>) : (<h2>三目运算结果为-false时~~</h2>)
					}
				</div>
			</div>
		)
	}

}