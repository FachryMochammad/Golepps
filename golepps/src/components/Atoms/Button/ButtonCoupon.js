import React from "react";
import { H5Klob } from "components/Atoms/Typography/Typography";

import { Coupon, Icon } from "./styles";

function ButtonCoupon({ children, ...props }) {
  return (
    <Coupon
      className="w-100 bg-blueSelect d-flex align-items-center"
      {...props}
    >
      <Icon className="d-flex me-2">
        <img
          src="https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/ic_kupon.svg"
          alt="kupon"
          width="100%"
          height="100%"
        />
      </Icon>
      <H5Klob className="primary fw-bold">{children}</H5Klob>
    </Coupon>
  );
}

export default ButtonCoupon;
