// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';

import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/pearl-colorful.svg';

/**![PearlColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1wZWFybC1jb2xvcmZ1bC1MYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjxnPgoJPGc+CgkJPHBhdGggZD0iTTI1NiwyMTFjLTI0LjgsMC00NSwyMC4yLTQ1LDQ1YzAsOC4zLDYuNywxNSwxNSwxNXMxNS02LjcsMTUtMTVjMC04LjMsNi43LTE1LDE1LTE1YzguMywwLDE1LTYuNywxNS0xNQoJCQlTMjY0LjMsMjExLDI1NiwyMTF6Ii8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDc1LjgsMjgyLjZjMjIuMy0xNi43LDM2LjItNDMsMzYuMi03MS42YzAtMzguNi0yNS4yLTcyLjYtNjEuNS04NWMtNS01My44LTUwLTk2LTEwNC41LTk2Yy01LjEsMC0xMC4zLDAuNC0xNS43LDEuNAoJCQlDMzEwLjUsMTEuMywyODMuOSwwLDI1Niwwcy01NC41LDExLjMtNzQuMywzMS40Yy01LjUtMC45LTEwLjctMS40LTE1LjctMS40Yy01NSwwLTEwMC41LDQyLjktMTA1LjUsOTZDMjQuOCwxMzguNCwwLDE3Mi40LDAsMjExCgkJCWMwLDI4LjgsMTMuOCw1NS4yLDM1LjgsNzEuOEMxMiwyOTYuNiwwLDMxMi44LDAsMzMxYzAsMC40LDAsMC44LDAsMS4zQzEsNDMxLjUsMTE1LjQsNTEyLDI1Niw1MTJzMjU1LTgwLjUsMjU2LTE3OS44CgkJCWMwLTAuNCwwLTAuOCwwLTEuM0M1MTIsMzEyLjcsNDk5LjgsMjk2LjQsNDc1LjgsMjgyLjZ6IE00ODIsMjExYzAsMjUuMS0xNi40LDQ3LjctNDAuMyw1Ni40Yy0yMi43LTgtNTAuMi0xNC41LTgwLjktMTkKCQkJYy0wLjgtMTEuMS0zLjQtMjEuNy03LjQtMzEuNmw4NC40LTYzLjNDNDYzLjcsMTYwLjgsNDgyLDE4NC4zLDQ4MiwyMTF6IE0zMzAuNSw2MS44YzUuNi0xLjIsMTAuNy0xLjgsMTUuNS0xLjgKCQkJYzM5LDAsNzEsMzAuMiw3NC42LDY4LjhsLTgyLjUsNjEuOWMtMTAuOC0xMy41LTI0LjgtMjQuMy00MC45LTMxLjJMMzMwLjUsNjEuOHogTTMzMSwyNTZjMCw0MS40LTMzLjYsNzUtNzUsNzVzLTc1LTMzLjYtNzUtNzUKCQkJczMzLjYtNzUsNzUtNzVTMzMxLDIxNC42LDMzMSwyNTZ6IE0yNTYsMzBjMTcuNSwwLDM0LjMsNi4zLDQ3LjcsMTcuNmwtMzUuNiwxMDQuMWMtNC0wLjUtOC0wLjctMTIuMS0wLjdjLTQuMSwwLTguMSwwLjItMTIuMSwwLjcKCQkJTDIwOC4zLDQ3LjZDMjIxLjcsMzYuMywyMzguNSwzMCwyNTYsMzB6IE0xNjYsNjBjNC44LDAsOS44LDAuNiwxNS41LDEuOGwzMy4zLDk3LjZjLTE2LjEsNi45LTMwLjIsMTcuNy00MSwzMS4zbC04My40LTYyCgkJCUM5NC4yLDkwLjgsMTI3LjMsNjAsMTY2LDYweiBNMzAsMjExYzAtMjYuOCwxNy45LTUwLjMsNDMuMy01Ny42bDg1LjMsNjMuNGMtNCw5LjktNi41LDIwLjUtNy4zLDMxLjZjLTMxLDQuNi01OC42LDExLjEtODEuNCwxOS4yCgkJCUM0Ni4yLDI1OS4xLDMwLDIzNi40LDMwLDIxMXogTTI1Niw0ODJjLTk2LjUsMC0xNzkuMS00MS41LTIxMS40LTk4YzU2LjgsMjguNCwxNDcsMzcsMjExLjQsMzdjNjQuNCwwLDE1NC42LTguNywyMTEuNC0zNwoJCQlDNDM0LjMsNDQxLjksMzUwLjUsNDgyLDI1Niw0ODJ6IE0yNTYsMzkxYy0xNDAuMiwwLTIyNi0zNi44LTIyNi02MGMwLTYuNSw4LjktMTcuNSwzMy43LTI4LjhjMjIuNC0xMC4xLDUzLjgtMTguNCw4OS43LTIzLjkKCQkJYzEuMSw1LjIsMi42LDEwLjIsNC41LDE1LjFjLTE5LjksMTIuOS0zMi41LDI2LjktMzMuMSwyNy42Yy01LjUsNi4yLTUsMTUuNiwxLjIsMjEuMnMxNS43LDUsMjEuMi0xLjJjMC4xLTAuMSw5LjktMTAuOSwyNS40LTIxLjMKCQkJQzE5MS44LDM0NC44LDIyMiwzNjEsMjU2LDM2MXM2NC4yLTE2LjIsODMuNC00MS4zYzE1LjQsMTAuNCwyNS4zLDIxLjIsMjUuNCwyMS4zYzUuNSw2LjIsMTUsNi43LDIxLjIsMS4yCgkJCWM2LjItNS41LDYuNy0xNSwxLjItMjEuMmMtMC42LTAuNy0xMy4yLTE0LjYtMzMuMS0yNy42YzEuOS00LjksMy40LTkuOSw0LjUtMTUuMWM4NCwxMi44LDEyMy40LDM3LjgsMTIzLjQsNTIuNgoJCQlDNDgyLDM1My45LDM5Ny40LDM5MSwyNTYsMzkxeiIvPgoJPC9nPgo8L2c+CjxwYXRoIGQ9Ik00ODIsMjExYzAsMjUuMS0xNi40LDQ3LjctNDAuMyw1Ni40Yy0yMi43LTgtNTAuMi0xNC41LTgwLjktMTljLTAuOC0xMS4xLTMuNC0yMS43LTcuNC0zMS42bDg0LjQtNjMuMwoJQzQ2My43LDE2MC44LDQ4MiwxODQuMyw0ODIsMjExeiIgc3R5bGU9ImZpbGw6ICM4QTY3QUM7Ii8+CjxwYXRoIGQ9Ik0zMzAuNSw2MS44YzUuNi0xLjIsMTAuNy0xLjgsMTUuNS0xLjhjMzksMCw3MSwzMC4yLDc0LjYsNjguOGwtODIuNSw2MS45Yy0xMC44LTEzLjUtMjQuOC0yNC4zLTQwLjktMzEuMgoJTDMzMC41LDYxLjh6IiBzdHlsZT0iZmlsbDogIzhBNjdBQzsiLz4KPGNpcmNsZSBjeD0iMjU2IiBjeT0iMjU2IiByPSI3NSIvPgo8cGF0aCBkPSJNMjU2LDMwYzE3LjUsMCwzNC4zLDYuMyw0Ny43LDE3LjZsLTM1LjYsMTA0LjFjLTQtMC41LTgtMC43LTEyLjEtMC43Yy00LjEsMC04LjEsMC4yLTEyLjEsMC43TDIwOC4zLDQ3LjYKCUMyMjEuNywzNi4zLDIzOC41LDMwLDI1NiwzMHoiIHN0eWxlPSJmaWxsOiAjOEE2N0FDOyIvPgo8cGF0aCBkPSJNMTY2LDYwYzQuOCwwLDkuOCwwLjYsMTUuNSwxLjhsMzMuMyw5Ny42Yy0xNi4xLDYuOS0zMC4yLDE3LjctNDEsMzEuM2wtODMuNC02MkM5NC4yLDkwLjgsMTI3LjMsNjAsMTY2LDYweiIgc3R5bGU9ImZpbGw6ICM4QTY3QUM7Ii8+CjxwYXRoIGQ9Ik0zMCwyMTFjMC0yNi44LDE3LjktNTAuMyw0My4zLTU3LjZsODUuMyw2My40Yy00LDkuOS02LjUsMjAuNS03LjMsMzEuNmMtMzEsNC42LTU4LjYsMTEuMS04MS40LDE5LjIKCUM0Ni4yLDI1OS4xLDMwLDIzNi40LDMwLDIxMXoiIHN0eWxlPSJmaWxsOiAjOEE2N0FDOyIvPgo8cGF0aCBkPSJNMjU2LDQ4MmMtOTYuNSwwLTE3OS4xLTQxLjUtMjExLjQtOThjNTYuOCwyOC40LDE0NywzNywyMTEuNCwzN2M2NC40LDAsMTU0LjYtOC43LDIxMS40LTM3CglDNDM0LjMsNDQxLjksMzUwLjUsNDgyLDI1Niw0ODJ6IiBzdHlsZT0iZmlsbDogIzhDNjlBRjsiLz4KPHBhdGggZD0iTTI1NiwzOTFjLTE0MC4yLDAtMjI2LTM2LjgtMjI2LTYwYzAtNi41LDguOS0xNy41LDMzLjctMjguOGMyMi40LTEwLjEsNTMuOC0xOC40LDg5LjctMjMuOQoJYzEuMSw1LjIsMi42LDEwLjIsNC41LDE1LjFjLTE5LjksMTIuOS0zMi41LDI2LjktMzMuMSwyNy42Yy01LjUsNi4yLTUsMTUuNiwxLjIsMjEuMnMxNS43LDUsMjEuMi0xLjJjMC4xLTAuMSw5LjktMTAuOSwyNS40LTIxLjMKCUMxOTEuOCwzNDQuOCwyMjIsMzYxLDI1NiwzNjFzNjQuMi0xNi4yLDgzLjQtNDEuM2MxNS40LDEwLjQsMjUuMywyMS4yLDI1LjQsMjEuM2M1LjUsNi4yLDE1LDYuNywyMS4yLDEuMmM2LjItNS41LDYuNy0xNSwxLjItMjEuMgoJYy0wLjYtMC43LTEzLjItMTQuNi0zMy4xLTI3LjZjMS45LTQuOSwzLjQtOS45LDQuNS0xNS4xYzg0LDEyLjgsMTIzLjQsMzcuOCwxMjMuNCw1Mi42QzQ4MiwzNTMuOSwzOTcuNCwzOTEsMjU2LDM5MXoiIHN0eWxlPSJmaWxsOiAjQjQ5QUM5OyIvPgo8Y2lyY2xlIGN4PSIyNTUuOSIgY3k9IjI1Ni4xIiByPSI3NSIgc3R5bGU9ImZpbGw6ICNFNUU1RTU7Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1wZWFybC1jb2xvcmZ1bC1TVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMDAuNDciIHkxPSIyNzYuOTEiIHgyPSIyNzMuNDciIHkyPSIyNzYuOTEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1MTQpIj4KCTxzdG9wIG9mZnNldD0iNS41ODY1OTJlLTAzIiBzdHlsZT0ic3RvcC1jb2xvcjojRjJGMkYyIi8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNpcmNsZSBjeD0iMjM3IiBjeT0iMjM3LjEiIHI9IjM2LjUiIHN0eWxlPSJmaWxsOiB1cmwoI2FudC13ZWIzLWljb24tcGVhcmwtY29sb3JmdWwtU1ZHSURfMV8pOyIvPgo8L3N2Zz4K) */
export const PearlColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-pearl-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

PearlColorful.displayName = 'PearlColorful';
