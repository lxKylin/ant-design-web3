// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';

import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/cvt-circle-colorful.svg';

/**![CvtCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1jdnQtY2lyY2xlLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAwIDEwMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjxnPgoJPGc+CgkJPGc+CgkJCTxnPgoJCQkJPHBhdGggaWQ9ImFudC13ZWIzLWljb24tY3Z0LWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8xXyIgZD0iTTUwMCwwYzI3Ni4xLDAsNTAwLDIyMy45LDUwMCw1MDBzLTIyMy45LDUwMC01MDAsNTAwUzAsNzc2LjEsMCw1MDBTMjIzLjksMCw1MDAsMEw1MDAsMHoiIHN0eWxlPSJmaWxsOiAjMUUwQjQ5OyIvPgoJCQk8L2c+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJhbnQtd2ViMy1pY29uLWN2dC1jaXJjbGUtY29sb3JmdWwtTGF5ZXJfMl8xXyI+Cgk8ZyBpZD0iYW50LXdlYjMtaWNvbi1jdnQtY2lyY2xlLWNvbG9yZnVsLUxheWVyXzEtMiI+CgkJPHBhdGggZD0iTTMyNC42LDQwMGMyMi4xLTM3LjYsNTcuNS01OS45LDg4LjYtNTkuM2wxMi42LTIxLjNjMjEuNy0zNi45LDE0LjItODEuOS0xNi44LTEwMC4xcy03My45LTIuOC05NS43LDMzLjkKCQkJbC0xMi41LDIxLjNjMTUuNiwyNi45LDEzLjIsNjguNS04LjksMTA2LjNzLTU3LjUsNTkuOS04OC42LDU5LjNsLTEyLjYsMjEuM2MtMjEuNywzNi45LTE0LjIsODEuOSwxNi44LDEwMC4xCgkJCWMzMC45LDE4LjIsNzMuOSwyLjksOTUuNy0zMy45bDEyLjUtMjEuM0MzMDAuMSw0NzkuNCwzMDIuNSw0MzcuNiwzMjQuNiw0MDB6IiBzdHlsZT0iZmlsbDogIzFFOTBGRjsiLz4KCQkKCQkJPGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLWN2dC1jaXJjbGUtY29sb3JmdWwtU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjgxLjI0MzQiIHkxPSI0NDAuMDgzNSIgeDI9IjMzNi44NjIiIHkyPSIzNDQuOTExNSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDEwMDApIj4KCQkJPHN0b3Agb2Zmc2V0PSIwLjIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMUU5MEZGIi8+CgkJCTxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzRCMDA4MiIvPgoJCTwvbGluZWFyR3JhZGllbnQ+CgkJPHBhdGggZD0iTTI5Miw2MTUuOWMtMjIuMS0zNy42LTU3LjUtNTkuOS04OC42LTU5LjNsLTEyLjYtMjEuM2MtMjEuNy0zNi45LTE0LjItODEuOSwxNi44LTEwMC4xczczLjktMyw5NS43LDMzLjkKCQkJbDEyLjUsMjEuM2MtMTUuNiwyNi45LTEzLjIsNjguNSw4LjksMTA2LjNjMjIuMiwzNy44LDU3LjUsNTkuOSw4OC42LDU5LjNsMTIuNiwyMS4zYzIxLjcsMzYuOSwxNC4yLDgxLjktMTYuOCwxMDAuMQoJCQljLTMwLjksMTguMi03My45LDMtOTUuNy0zMy45bC0xMi41LTIxLjNDMzE2LjQsNjk1LjMsMzE0LDY1My41LDI5Miw2MTUuOXoiIHN0eWxlPSJmaWxsOiB1cmwoI2FudC13ZWIzLWljb24tY3Z0LWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8yXyk7Ii8+CgkJCgkJCTxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1jdnQtY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzNfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9Ii04OC40MDQiIHkxPSIzNzMuNTcyMiIgeDI9Ii04OC4zMjc4IiB5Mj0iMjgwLjQ1NTgiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTAuOCAwLjQ3IC0wLjU2IC0wLjk2IDY3MS40ODAxIDk2MC4wMzk5KSI+CgkJCTxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzhCMDA4QiIvPgoJCQk8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM0QjAwODIiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxwYXRoIGQ9Ik01NDMuNyw2MTUuOWMtMjIuMS0zNy42LTU3LjUtNTkuOS04OC42LTU5LjNsLTEyLjYtMjEuM2MtMjEuNy0zNi45LTE0LjItODEuOSwxNi44LTEwMC4xczczLjktMyw5NS42LDMzLjkKCQkJbDEyLjYsMjEuM2MtMTUuNiwyNi45LTEzLjIsNjguNSw4LjksMTA2LjNjMjIuMiwzNy44LDU3LjUsNTkuOSw4OC42LDU5LjNsMTIuNiwyMS4zYzIxLjcsMzYuOSwxNC4yLDgxLjktMTYuOCwxMDAuMQoJCQljLTMwLjksMTguMi03My45LDMtOTUuNy0zMy45bC0xMi41LTIxLjNDNTY4LjMsNjk1LjMsNTY2LDY1My41LDU0My43LDYxNS45eiIgc3R5bGU9ImZpbGw6IHVybCgjYW50LXdlYjMtaWNvbi1jdnQtY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzNfKTsiLz4KCQkKCQkJPGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLWN2dC1jaXJjbGUtY29sb3JmdWwtU1ZHSURfNF8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iODQ3LjY0NzgiIHkxPSI4MjMuMTU5NSIgeDI9IjgzOC43Mzk3IiB5Mj0iNzMwLjk5NSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjggMC40NyAwLjU2IC0wLjk2IC00MjUuMjEgOTYwLjAzOTkpIj4KCQkJPHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojOEIwMDhCIi8+CgkJCTxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzRCMDA4MiIvPgoJCTwvbGluZWFyR3JhZGllbnQ+CgkJPHBhdGggZD0iTTcwMS4xLDYxOS42YzIyLjEtMzcuNSw1Ny41LTU5LjksODguNi01OS4zbDEyLjYtMjEuM2MyMS43LTM2LjksMTQuMi04MS45LTE2LjgtMTAwLjFzLTczLjktMi45LTk1LjcsMzMuOQoJCQlsLTEyLjUsMjEuM2MxNS42LDI2LjksMTMuMiw2OC41LTguOSwxMDYuM2MtMjIuMiwzNy44LTU3LjUsNTkuOS04OC42LDU5LjNMNTY3LjIsNjgxYy0yMS43LDM2LjktMTQuMiw4MS45LDE2LjgsMTAwLjEKCQkJczczLjksMi45LDk1LjctMzMuOWwxMi41LTIxLjNDNjc2LjQsNjk4LjksNjc5LDY1Ny4xLDcwMS4xLDYxOS42eiIgc3R5bGU9ImZpbGw6IHVybCgjYW50LXdlYjMtaWNvbi1jdnQtY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzRfKTsiLz4KCQk8cGF0aCBkPSJNMzcxLjksMjA1Yy00MS45LDAtNzUuOCwzNC41LTc0LjgsNzYuNmMwLjksMzkuNywzMy4zLDcyLDczLDczYzQyLjEsMSw3Ni42LTMyLjksNzYuNi03NC44bDAsMAoJCQlDNDQ2LjcsMjM4LjUsNDEzLjIsMjA1LDM3MS45LDIwNXoiIHN0eWxlPSJmaWxsOiAjMUU5MEZGOyIvPgoJCTxwYXRoIGQ9Ik0zNzEuOSw2NDRjLTQxLjksMC03NS43LDM0LjUtNzQuNyw3Ni43YzEsNDAuNSwzNC42LDczLjEsNzUuMSw3Mi45YzQxLjEtMC4yLDc0LjQtMzMuNSw3NC41LTc0LjcKCQkJQzQ0Ni44LDY3Ny42LDQxMy4zLDY0NCwzNzEuOSw2NDR6IiBzdHlsZT0iZmlsbDogIzRCMDA4MjsiLz4KCQk8cGF0aCBkPSJNNjIyLjYsMjA1Yy00MS45LDAtNzUuOCwzNC41LTc0LjgsNzYuNmMwLjksMzkuNywzMy4zLDcyLDczLDczYzQyLjEsMSw3Ni42LTMyLjksNzYuNi03NC44bDAsMAoJCQlDNjk3LjQsMjM4LjUsNjYzLjksMjA1LDYyMi42LDIwNXoiIHN0eWxlPSJmaWxsOiAjMUU5MEZGOyIvPgoJCTxwYXRoIGQ9Ik02MjIuNiw2NDRjLTQxLjksMC03NS44LDM0LjUtNzQuOCw3Ni42YzAuOSw0MC41LDM0LjYsNzMuMiw3NS4xLDczYzQxLjEtMC4yLDc0LjQtMzMuNSw3NC41LTc0LjcKCQkJQzY5Ny40LDY3Ny42LDY2NCw2NDQuMSw2MjIuNiw2NDR6IiBzdHlsZT0iZmlsbDogIzRCMDA4MjsiLz4KCQk8cGF0aCBkPSJNNDk1LjUsNDI0LjVjLTQxLjksMC03NS44LDM0LjUtNzQuOCw3Ni42YzAuOSwzOS43LDMzLjMsNzIsNzMsNzNjNDIuMSwxLDc2LjYtMzIuOSw3Ni42LTc0LjhsMCwwCgkJCUM1NzAuMyw0NTgsNTM2LjgsNDI0LjUsNDk1LjUsNDI0LjV6IiBzdHlsZT0iZmlsbDogIzhCMDA4QjsiLz4KCQk8cGF0aCBkPSJNNzQ5LDQyNC41Yy00MS45LDAtNzUuOCwzNC40LTc0LjgsNzYuNmMwLjksMzkuNywzMy4zLDcyLjEsNzIuOSw3M2M0Mi4xLDEsNzYuNi0zMi44LDc2LjYtNzQuN2wwLDAKCQkJQzgyMy43LDQ1OCw3OTAuMyw0MjQuNiw3NDksNDI0LjV6IiBzdHlsZT0iZmlsbDogIzhCMDA4QjsiLz4KCQk8cGF0aCBkPSJNMjQyLDQyNC41Yy00MS45LDAtNzUuOCwzNC41LTc0LjgsNzYuNmMwLjksMzkuNywzMy4zLDcyLDczLDczYzQyLjEsMSw3Ni42LTMyLjksNzYuNi03NC44bDAsMAoJCQlDMzE2LjgsNDU4LDI4My4zLDQyNC41LDI0Miw0MjQuNXoiIHN0eWxlPSJmaWxsOiAjMUU5MEZGOyIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=) */
export const CvtCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-cvt-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

CvtCircleColorful.displayName = 'CvtCircleColorful';
