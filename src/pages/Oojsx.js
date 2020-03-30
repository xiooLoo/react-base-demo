/**
 *  jsx
 */
import React from 'react'

export default function Oojsx(props) {
	/**
	 * 例：
	 * 调用函数 formatName(user) 的结果，并将结果嵌入到 <h1> 元素中：
	 */
	function formatName(user) {
		return user.firstName + ' ' + user.lastName
	}
	const user = {
		firstName: '王',
		lastName: 'XX'
	}
	const element = <h1>Hello, {formatName(user)}</h1>
	return (
		<>	
			<span style={{display: 'flex', color: '#F84B4D'}}>函数组件（无状态组件）：</span>
			{element}
			<span>外部传参：{props.testName}</span>
			<span style={{display: 'block', width: '100vw', borderTop: '2px solid #494a49'}}></span>
		</>
	)
}
