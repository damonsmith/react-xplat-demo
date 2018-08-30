import * as React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Device } from '../state/DevicesState'
import { observer } from 'mobx-react'
import { Txt } from '../../styleguide/tsx_native/Txt'
import { Colors } from '../../styleguide/colors'

interface IconSet {
	[key: string]: any
}

const icons: IconSet = {
	stereo: require("../images/stereo.jpg"),
	tv: require("../images/tv.jpg"),
	blender: require("../images/blender.jpg")
}

const style = StyleSheet.create({
	item: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 10,
		marginBottom: 10,
		backgroundColor: "white",
		height: 50,
		paddingLeft: 10,
		paddingRight: 10

	},
	icon: {
		width: 25,
		height: 25
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
				<Image style={style.icon} source={icons[this.props.item.type]} />
				<Text>{this.props.item.nickname}</Text>
				{this.props.item.poweredOn ? <Text>On</Text> : <Text>Off</Text>}
			</View>)
	}
}
