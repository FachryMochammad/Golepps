import React from 'react';
import { ItemFoot, FooterKlob } from './styles';
import golepps from '../../assets/images/golepps-horizontal-2.png';
import appstore from '../../assets/images/appstore-footer.png';
import googlestore from '../../assets/images/googlestore-footer.png';
import { P2Klob } from '../Atoms/Typography/Typography';

const Footer = function ({ style }) {
	return (
		<React.Fragment>
			<FooterKlob
				style={{
					zIndex: 3,
					...style,
				}}
				className="container-fluid"
			>
				<div className="klob-max m-auto footer__link">
					<div className="row m-0">
						<div className="col-lg-3 col-md-12 text-center ">
							<img src={golepps} alt="klob" className="img-logo-klob-footer" />
							<P2Klob white bold className="mt-2">
								Cari Lapangan
							</P2Klob>
						</div>
						<div className="col-lg-9 col-md-12">
							<div className="row">
								<ItemFoot
									top={true}
									className="col-lg-3 col-md-6 col-sm-6 col-xs-6"
								/>
								<ItemFoot className="col-lg-3 col-md-6 col-sm-6 col-xs-6" />
								<ItemFoot className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
									<div
										style={{
											display: 'flex',
											height: '100px',
											alignItems: 'end',
											marginLeft: '100px',
										}}
									>
										<img
											src={appstore}
											alt="appstore"
											className="appstore-footer me-2"
										/>
										<img
											src={googlestore}
											alt="googlestore"
											className="googlestore-footer"
										/>
									</div>
								</ItemFoot>
							</div>
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							marginTop: '10px',
						}}
					>
						<div style={{ textAlign: 'center' }}>
							<P2Klob white className="mb-2">
								© 2021. All rights reserved.
							</P2Klob>
							<P2Klob white>Site developed by Jeinger</P2Klob>
						</div>
					</div>
				</div>
			</FooterKlob>
		</React.Fragment>
	);
};

export default Footer;
