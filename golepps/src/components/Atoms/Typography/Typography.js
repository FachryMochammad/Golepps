import React from 'react';
import H1Style from './styles/h1';
import H2Style from './styles/h2';
import H3Style from './styles/h3';
import H4Style from './styles/h4';
import H5Style from './styles/h5';
import P1Style from './styles/p1';
import P2Style from './styles/p2';
import P3Style from './styles/p3';
import P4Style from './styles/p4';
import BigTitleStyle from './styles/bigTitle';
import LogoTitleStyle from './styles/LogoTitleStyle';

export function H1Klob(props) {
	return <H1Style {...props}>{props.children}</H1Style>;
}

export function H2Klob(props) {
	return <H2Style {...props}>{props.children}</H2Style>;
}

export function H3Klob(props) {
	return <H3Style {...props}>{props.children}</H3Style>;
}

export function H4Klob(props) {
	return <H4Style {...props}>{props.children}</H4Style>;
}

export function H5Klob(props) {
	return <H5Style {...props}>{props.children}</H5Style>;
}

export function P1Klob(props) {
	return <P1Style {...props}>{props.children}</P1Style>;
}

export function P2Klob(props) {
	return <P2Style {...props}>{props.children}</P2Style>;
}

export function P3Klob(props) {
	return <P3Style {...props}>{props.children}</P3Style>;
}

export function P4Klob(props) {
	return <P4Style {...props}>{props.children}</P4Style>;
}

export function BigTitle(props) {
	return <BigTitleStyle {...props}>{props.children}</BigTitleStyle>;
}

export function LogoTitle(props) {
	return <LogoTitleStyle {...props}>{props.children}</LogoTitleStyle>;
}
