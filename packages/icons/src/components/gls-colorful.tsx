// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';

import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/gls-colorful.svg';

/**![GlsColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1nbHMtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxODMxLjcgMTk5OS44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxODMxLjcgMTk5OS44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8Zz4KCTxwYXRoIGQ9Ik0xMjA0LDIzOS40YzAsNTcuMi02LjUsMTEzLjEtMTYuMSwxNjEuMmMtNC45LDI0LjQtMTAuOSw0OS0xNy4yLDcxLjRsLTIxLjQsNjcuMgoJCWMtMTYuNSw0OS44LTQ2LDEwMy4yLTc2LjksMTQ0LjZjLTI1LjIsMzMuNy01MC41LDY3LjEtODEuNSw5NS44bC00OC43LDM5LjljLTM4LjMsMjguNy03OS4yLDU1LjYtMTIyLjgsNzUuOAoJCWMtMjYuNiwxMi4zLTUzLjksMTkuNi04Mi43LDI5Yy00OS42LDE2LjItOTcuNywyMS41LTE0OS4xLDI4LjJjLTU1LjMsNy4yLTExNy41LDQuNi0xNzQuMiw0LjlsLTEwMS4zLTUuMQoJCWMtNTYuOC02LjMtNTUuNi0xLjQtMTIyLTE4Yy0zNC45LTguNy03My44LTIxLjctMTAzLjQtMzYuNmMtOC42LTQuMy0xMy42LTcuNC0yMS44LTExLjhjLTE0LTcuNi00NC41LTMzLjktNTIuNS0zNi4zCgkJYy00LjUtMS40LTExLjktMy4xLTExLjksMS41YzAsNDEuMyw1Ni4zLDEzMy4xLDg4LjIsMTY4LjhsNDYuOSw0OC44YzMuOSwzLjgsNC44LDQuMSw4LjcsNy4ybDQ0LjYsMzUuMmMyNS4yLDE4LjksNTMsMzMuMiw4MCw0OS40CgkJYzcuMSw0LjIsMTMuNiw3LDIxLjEsMTAuOGwxNS42LDcuNWM4MS45LDM3LjgsMTYwLjYsNjIuNCwyNDkuMyw4MC40YzE2LjMsMy4zLDM4LjksOC44LDU1LjQsMTAuMmMwLjcsMzIuMS0zLjUsNjMuNy04LjksOTUuNwoJCWMtNy42LDQ2LTE5LjksODUuNS0zMi43LDEyOC43Yy0xNi44LDU2LjUtNTkuNCwxMzQtOTQuNywxNzguM2MtMTcuMiwyMS41LTMyLjgsMzgtNTQsNTUuOWMtNS4xLDQuMy05LjUsNy43LTE0LjksMTEuNwoJCWMtNjUuMiw0OC44LTg4LjIsNTYuMi0xNzAuNyw1Ni4yYy00MS42LDAtODUuNC05LTEyNC45LTIwLjVjLTE3LjYtNS4xLTM1LjMtMTQuNC00OS42LTIzYy0xMC44LTYuNS0zNS40LTI1LjEtNDUuMy0yNy40TDAsMTczOC42CgkJYzMsMjguMiwzMS44LDg3LjMsNDUuOSwxMTIuN2M2OC42LDEyMy4zLDIwNC41LDE0OC4zLDMzOS4xLDE0OC4zYzguNiwwLDE3LjcsMC43LDI2LjEtMC41YzIyLjgtMy4xLDUwLjUtMyw3My41LTYuMwoJCWMzMy4xLTQuOCw1OS43LTkuMSw4OS43LTE2LjZjODMuNi0yMSwxNTAuOC01Ny40LDIyNC4zLTk0LjhsMzQuMS0xOS4xYzExLjgtNywyMi4yLTEyLjMsMzMuOS0xOS4zbDY2LjktMzkuNAoJCWMxMS44LTcuMSwyMS43LTEzLDMzLjItMTkuOWwxNDguMi05Mi45YzUuOC0zLjcsMTAuMS03LDE1LjktMTAuNmwxNjMuOC0xMDMuOWMzOC41LTI0LjMsNzkuNi00Ni43LDEyMS41LTY0LjcKCQljNy4xLTMsMTEuNi01LDE4LjctNy44YzQyLjMtMTYuOCw3OC4yLTMyLjQsMTI4LjktMzIuNGM3MS44LDAsMTExLjUsMjMuNywxNDYuNCw4MC41YzIxLjcsMzUuNCwzMy45LDg1LjIsNDIuOCwxMjcuMwoJCWM1LjQsMjUuNSwzLjEsMjIuNSwyMS43LDM1bDEwLjktMjIuOGMyLjgtOC40LDYuNC0xNi45LDkuMy0yNi4yYzUuNy0xOC4yLDExLTM0LjIsMTYuMy01Mi44YzI1LjItODcuOCwzMS4zLTE5MC40LTUuOC0yNzYuMwoJCWMtMTMuMy0zMC45LTMxLjYtNTkuNi01Ny4yLTgxbC0yLjktMi40Yy0xLjQtMS4yLTEuNi0xLjQtMi44LTIuNWMtMjYtMjMuNy01Ny4xLTQwLTk0LjYtNTIuNWMtNS45LTItNy42LTItMTQuMS0zLjYKCQljLTEyNS41LTMxLjEtMjQzLjktMTAuOS0zNjIuNCwzNi4yYy0xMS44LDQuNy02Mi44LDI3LjctNzAuOSwyOC40YzEuNC01LjMsMTUtMjguNywxOC44LTM0LjRjNy40LTExLjIsMTMuNy0yMS45LDIwLjEtMzMKCQljMjguMy00OS4yLDQ4LjItOTUsNjguNS0xNDcuOGMxMC4zLTI3LDE4LjctNTIuMSwyOC04MC4xYzE4LTU0LjEsMzMuNC0xMTEsNDIuOS0xNzMuNGMyNi0xNzAuNCwzMy00MTguNy01OS44LTU3MS41CgkJYy0yNC4xLTM5LjctNDQuNy02My40LTczLjctOTYuNWMtOS45LTExLjMtMjIuNC0yMC4yLTMyLjgtMzEuMWMtNS01LjMtNC42LTcuMy0xMy44LTcuNWMtMy45LDE2LjYtNSwxNy4yLTIuNSwzNC40CgkJQzEyMDEuOSwxNTguOCwxMjA0LDE5OC4xLDEyMDQsMjM5LjRMMTIwNCwyMzkuNEwxMjA0LDIzOS40eiIgc3R5bGU9ImZpbGwtcnVsZTogZXZlbm9kZDsgY2xpcC1ydWxlOiBldmVub2RkOyBmaWxsOiAjMzY3RUM3OyIvPgoJPHBhdGggZD0iTTUwNy40LDE3OWMtNS4yLTUtMTIuOS0xOC43LTE2LjEtMjYuNWMtNS4zLTEyLjksNy41LTE1LjEsMTguNC0yMC44YzE3LjktOS40LDM4LjEtMTguMiw1OC43LTI0LjcKCQljMTAwLjgtMzEuNSwyMTUuNC0xMCwyOTQuNiw1NS4xYzI2LjQsMjEuNyw0MC43LDI4LjEsMjguNyw0My4yYy0yNC4yLDMwLjMtMTkuMywyMS01NC41LTguNWMtMTAuNC04LjctMjMuNC0xNy45LTM2LjMtMjUuNwoJCWMtNzAuMy00Mi41LTE3Ni45LTQ2LjYtMjUyLjEtMTAuOUM1MzksMTY0LjgsNTE1LjEsMTc4LjcsNTA3LjQsMTc5TDUwNy40LDE3OUw1MDcuNCwxNzl6IE0yNzMuNCw0MDIuNQoJCWMwLDgzLjEsMzMuMSwxODAuNCw4NC4xLDI0NS42YzcuNyw5LjksMTQuNSwxNi40LDIyLDI1LjhjMTcuNywyMS45LDIyLDI4LTExLjEsNTRsLTgzLjgsNTYuM2MtMTYuNyw5LjktNTguNSwzNC4xLTcxLjksNDUuMQoJCWMtNS4zLDQuNC05LjUsNi41LTEwLjIsMTQuNmMyMC4yLDEwLjcsNTkuOSw3LjEsODYuOSw3LjFjNDMuNiwwLDgxLjItMS43LDEyNC4xLTEuN2wxMjAuNS03LjFjMzMuMi0xLjYsODEuNC03LjQsMTEyLjktMTIuOQoJCWM3Mi41LTEyLjcsMTUxLjItMzMuOSwyMTQuNC03MWMyNC4zLTE0LjIsNjIuMS00MC40LDgxLTYwLjhjMy4yLTMuNCw0LjUtNSw3LjctOC4yYzUuMy01LjMsMTEuMi0xMC40LDE1LjktMTYKCQljMTQuNi0xNy40LDI4LjctMzUuMyw0MC42LTU1LjJjNjIuNy0xMDQuNyw4Mi4xLTIwNy4zLDQ5LjktMzI4LjVjLTExLjMtNDIuNi0zNi4zLTkwLjgtNjIuNi0xMjcuMWwtNjAuNi02NwoJCWMtMTUuOC0xNC4xLTU3LjMtNDEuMy03Ni43LTUxQzc2Ni0wLjcsNjc4LjMtMTEuNyw1NzguMywxMi41Yy0zNy41LDkuMS03My4zLDIzLjYtMTA2LjMsNDIuNmMtMzUuMywyMC4zLTgzLjQsNTguNy0xMDcuNSw5MQoJCUMzMDguNCwyMjEuMywyNzMuNCwzMDYuMywyNzMuNCw0MDIuNUwyNzMuNCw0MDIuNUwyNzMuNCw0MDIuNXoiIHN0eWxlPSJmaWxsLXJ1bGU6IGV2ZW5vZGQ7IGNsaXAtcnVsZTogZXZlbm9kZDsgZmlsbDogI0Y3MjIyMjsiLz4KCTxwYXRoIGQ9Ik01MDcuNCwxNzljNy43LTAuMywzMS42LTE0LjIsNDEuNC0xOC45Yzc1LjEtMzUuNywxODEuNy0zMS42LDI1Mi4xLDEwLjljMTMsNy44LDI1LjksMTcsMzYuMywyNS43CgkJYzM1LjIsMjkuNSwzMC4zLDM4LjgsNTQuNSw4LjVjMTItMTUtMi4zLTIxLjUtMjguNy00My4yQzc4My43LDk3LDY2OS4xLDc1LjUsNTY4LjMsMTA3Yy0yMC42LDYuNC00MC44LDE1LjMtNTguNywyNC43CgkJYy0xMC44LDUuNy0yMy43LDcuOC0xOC40LDIwLjhDNDk0LjUsMTYwLjMsNTAyLjIsMTc0LDUwNy40LDE3OUw1MDcuNCwxNzlMNTA3LjQsMTc5eiIgc3R5bGU9ImZpbGwtcnVsZTogZXZlbm9kZDsgY2xpcC1ydWxlOiBldmVub2RkOyBmaWxsOiAjRkZGRkZGOyIvPgo8L2c+Cjwvc3ZnPgo=) */
export const GlsColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-gls-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

GlsColorful.displayName = 'GlsColorful';
