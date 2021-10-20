import React from "react";
import { Col4LgCol12SmStyle } from "./styles/Col4LgCol12Sm";
import { Col6LgCol12SmStyle } from "./styles/Col6LgCol12Sm";
import { FlexColumnStyle } from "./styles/FlexColumn";
import { FlexLgColumSmStyle } from "./styles/FlexLgColumnSm";
import { FlexLgColumReverseSmStyle } from "./styles/FlexLgColumnReverseSm";
import { GridLgColumnStyle } from "./styles/GridLgColumn";
import { ShowLgHideSmStyle } from "./styles/ShowLgHideSm";
import { HideLgShowSmStyle } from "./styles/HideLgShowSm";

export function Col4LgCol12Sm(props) {
	return <Col4LgCol12SmStyle {...props}>{props.children}</Col4LgCol12SmStyle>;
}
export function FlexColumn(props) {
	return <FlexColumnStyle {...props}>{props.children}</FlexColumnStyle>;
}
export function FlexLgColumSm(props) {
	return <FlexLgColumSmStyle {...props}>{props.children}</FlexLgColumSmStyle>;
}
export function FlexLgColumReverseSm(props) {
	return (
		<FlexLgColumReverseSmStyle {...props}>
			{props.children}
		</FlexLgColumReverseSmStyle>
	);
}
export function GridLgColumn(props) {
	return <GridLgColumnStyle {...props}>{props.children}</GridLgColumnStyle>;
}

export function ShowLgHideSm(props) {
	return <ShowLgHideSmStyle {...props}>{props.children}</ShowLgHideSmStyle>;
}
export function HideLgShowSm(props) {
	return <HideLgShowSmStyle {...props}>{props.children}</HideLgShowSmStyle>;
}

export function Col6LgCol12Sm(props) {
	return <Col6LgCol12SmStyle {...props}>{props.children}</Col6LgCol12SmStyle>;
}
