// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';

import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/husd-circle-colorful.svg';

/**![HusdCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1odXNkLWNpcmNsZS1jb2xvcmZ1bC1MYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIwMDAgMjAwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwMCAyMDAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8cGF0aCBkPSJNMjgwLjgsOTIzLjVsMzA3LjQtNzMwLjdsODczLjIsMTAwLjZsMTc4LjgsNTM5LjNsLTg5LjQsNzQ2Yy0xMjguNSwxMzcuOS0yMTAuNSwyMDYuOC0yNDUuOSwyMDYuOAoJYy0zNS40LDAtMzAzLjYtNDguOS04MDQuNy0xNDYuN2wtMjE5LjMtNTQyLjFMMjgwLjgsOTIzLjV6IiBzdHlsZT0iZmlsbC1ydWxlOiBldmVub2RkOyBjbGlwLXJ1bGU6IGV2ZW5vZGQ7IGZpbGw6ICNGOUY5Rjk7Ii8+CjxkZWZzPgoJPGZpbHRlciBpZD0iYW50LXdlYjMtaWNvbi1odXNkLWNpcmNsZS1jb2xvcmZ1bC1BZG9iZV9PcGFjaXR5TWFza0ZpbHRlciIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAwMCIgaGVpZ2h0PSIyMDAwIj4KCQk8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMSAwIDAgMCAwICAwIDEgMCAwIDAgIDAgMCAxIDAgMCAgMCAwIDAgMSAwIi8+Cgk8L2ZpbHRlcj4KPC9kZWZzPgo8bWFzayBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAwMCIgaGVpZ2h0PSIyMDAwIiBpZD0iYW50LXdlYjMtaWNvbi1odXNkLWNpcmNsZS1jb2xvcmZ1bC1hXzFfIj4KCTxwYXRoIGQ9Ik0wLDBoMjAwMHYyMDAwSDBWMHoiIHN0eWxlPSJmaWxsLXJ1bGU6IGV2ZW5vZGQ7IGNsaXAtcnVsZTogZXZlbm9kZDsgZmlsbDogI0ZGRkZGRjsgZmlsdGVyOiB1cmwoI2FudC13ZWIzLWljb24taHVzZC1jaXJjbGUtY29sb3JmdWwtQWRvYmVfT3BhY2l0eU1hc2tGaWx0ZXIpOyIvPgo8L21hc2s+CjxnIHN0eWxlPSJtYXNrOiB1cmwoI2FudC13ZWIzLWljb24taHVzZC1jaXJjbGUtY29sb3JmdWwtYV8xXyk7Ij4KCTxwYXRoIGQ9Ik0xNDE5LDE1NzkuNGgtMjEyLjl2LTM2Ni41YzAtNTguNy00Ny41LTEwNi40LTEwNi4yLTEwNi40YzAsMC0wLjEsMC0wLjEsMGgtMzA2CgkJYy0xMTcuNSwwLTIxMi44LTk1LjMtMjEyLjgtMjEyLjh2LTQ3M2gyMTIuOHYzNjYuNmMwLDU4LjcsNDcuNiwxMDYuNCwxMDYuMywxMDYuNGMwLDAsMCwwLDAsMGgzMDYKCQljMTE3LjUsMC4xLDIxMi43LDk1LjMsMjEyLjgsMjEyLjhMMTQxOSwxNTc5LjR6IE04MDEuMiwxNTc5LjRINTg4LjN2LTM1Ny40YzExNy41LDAsMjEyLjgsOTUuMiwyMTIuOCwyMTIuOEw4MDEuMiwxNTc5LjR6CgkJIE0xMTk4LjgsNDIwLjZoMjEyLjh2MzU3LjZjLTExNy42LDAtMjEyLjgtOTUuMy0yMTIuOC0yMTIuOFY0MjAuNnogTTEwMDAsMEM0NDcuNywwLDAsNDQ3LjgsMCwxMDAwczQ0Ny43LDEwMDAsMTAwMCwxMDAwCgkJczEwMDAtNDQ3LjcsMTAwMC0xMDAwUzE1NTIuMywwLDEwMDAsMEwxMDAwLDB6IiBzdHlsZT0iZmlsbC1ydWxlOiBldmVub2RkOyBjbGlwLXJ1bGU6IGV2ZW5vZGQ7IGZpbGw6ICMwMDVGRkE7Ii8+CjwvZz4KPC9zdmc+Cg==) */
export const HusdCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-husd-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

HusdCircleColorful.displayName = 'HusdCircleColorful';
