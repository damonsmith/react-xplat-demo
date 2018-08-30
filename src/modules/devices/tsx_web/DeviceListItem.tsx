import * as React from 'react'
import { style } from 'typestyle'
import { Device } from '../state/DevicesState'
import { observer } from 'mobx-react'

const icons = {
	stereo: require("../images/stereo.jpg"),
	tv: require("../images/tv.jpg"),
	blender: require("../images/blender.jpg")
}

const itemStyle = style({
	padding: '1rem',
	margin: '0 0 2rem 0',
	display: 'flex',
	backgroundColor: 'white',
	color: 'black',
	justifyContent: 'space-between',
	boxShadow: '0 0 0.25rem #999',
	cursor: 'pointer',
	$nest: {
		'&:active': {
			backgroundColor: '#ddf'
		}
	}
})

const selectedStyle = style({
	border: "2px solid black"
})

const itemTextStyle = style({
	margin: 'auto 0'
})

const iconStyle = style({
	width: '1.75rem',
	height: '1.75rem'
})

interface DeviceListItemProps {
	item: Device
}

@observer
export class DeviceListItem extends React.Component<DeviceListItemProps, {}> {
	render() {
		return (
			<div className={itemStyle} onClick={() => this.props.item.poweredOn = !this.props.item.poweredOn}>
				<img src={icons[this.props.item.type]} className={iconStyle} />
				<div className={itemTextStyle}>{this.props.item.nickname}</div>
				{this.props.item.poweredOn ? <div>On</div> : <div>Off</div>}
			</div>)
	}
}
