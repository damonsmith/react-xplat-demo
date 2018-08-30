import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Device } from '../state/DevicesState'
import { observer } from 'mobx-react'

const icons = {
	stereo: require("../images/stereo.jpg"),
	tv: require("../images/tv.jpg"),
	blender: require("../images/blender.jpg")
}

const style = StyleSheet.create({
	item: {
		padding: '1rem',
		margin: '0 0 2rem 0',
		display: 'flex',
		backgroundColor: 'white',
		color: 'black',
		justifyContent: 'space-between'
	},
	icon: {
		width: '1.75rem',
		height: '1.75rem'
	}
})

interface DeviceListItemProps {
	item: Device
}

@observer
export class DeviceListItem extends React.Component<DeviceListItemProps, {}> {
	render() {
		return (
			<View style={style.item}>
				<Text>{this.props.item.nickname}</Text>
				{this.props.item.poweredOn ? <div>On</div> : <div>Off</div>}
				<img src={icons[this.props.item.type]} style={style.icon} />
			</View>)
	}
}
