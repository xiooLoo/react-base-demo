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
			{element}
		</>
	)
}
