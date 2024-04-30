// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';

import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/fxs-circle-colorful.svg';

/**![FxsCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1meHMtY2lyY2xlLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjgzLjQ2IDI4My40NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjgzLjQ2IDI4My40NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTQxLjczLDI4My40NmMtMTkuMTMsMC0zNy42OS0zLjc1LTU1LjE3LTExLjE0Yy0xNi44OC03LjE0LTMyLjAzLTE3LjM2LTQ1LjA1LTMwLjM3CgkJCWMtMTMuMDEtMTMuMDEtMjMuMjMtMjguMTctMzAuMzctNDUuMDVDMy43NSwxNzkuNDIsMCwxNjAuODYsMCwxNDEuNzNzMy43NS0zNy42OSwxMS4xNC01NS4xN2M3LjE0LTE2Ljg4LDE3LjM2LTMyLjAzLDMwLjM3LTQ1LjA1CgkJCUM1NC41MywyOC41LDY5LjY4LDE4LjI4LDg2LjU2LDExLjE0QzEwNC4wNCwzLjc1LDEyMi42LDAsMTQxLjczLDBzMzcuNjksMy43NSw1NS4xNywxMS4xNGMxNi44OCw3LjE0LDMyLjAzLDE3LjM2LDQ1LjA1LDMwLjM3CgkJCWMxMy4wMSwxMy4wMSwyMy4yMywyOC4xNywzMC4zNyw0NS4wNWM3LjM5LDE3LjQ4LDExLjE0LDM2LjA0LDExLjE0LDU1LjE3cy0zLjc1LDM3LjY5LTExLjE0LDU1LjE3CgkJCWMtNy4xNCwxNi44OC0xNy4zNiwzMi4wMy0zMC4zNyw0NS4wNWMtMTMuMDEsMTMuMDEtMjguMTcsMjMuMjMtNDUuMDUsMzAuMzdDMTc5LjQyLDI3OS43MiwxNjAuODYsMjgzLjQ2LDE0MS43MywyODMuNDZ6IiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsiLz4KCTwvZz4KCTxnPgoJCTxjaXJjbGUgY3g9IjE0MS43MyIgY3k9IjE0MS43MyIgcj0iMTM0LjIyIi8+Cgk8L2c+Cgk8cGF0aCBkPSJNMTk2LjI0LDE3NC4zYzAtMTIuNDEtNS4xNi0yMi42LTE1LjMzLTMwLjMxYy03LjUyLTUuNy0xOC4wMy0xMC4zNy0zNS4wOC0xNS42MWwwLDAKCQljLTMwLjY5LTkuNDMtMzAuNjktMTQuODYtMzAuNjktMTkuMjNjMC02LjA0LDguOTQtMTQuNDEsMjUuNzEtMTQuNDFjOS45MywwLDI2LjU5LDIuNSwyNi41OSwxOS4yNmgyNy45MgoJCWMwLTcuOS0xLjc3LTE1LjI3LTUuMTItMjEuN2wyMi40LTIyLjRsLTE5Ljc0LTE5Ljc0TDE3MC4wNyw3M2MtOC4yOC00LjA2LTE4LjE5LTYuMTctMjkuMjEtNi4xN2MtMTAuMjcsMC0xOS43MSwxLjk4LTI3Ljg1LDUuNzkKCQlMOTAuNTYsNTAuMTdMNzAuODIsNjkuOTFsMjEuMywyMS4zYy0zLjE4LDUuNTYtNC44OSwxMS43LTQuODksMTcuOTVjMCwxMi40MSw1LjE2LDIyLjYsMTUuMzMsMzAuMzFjNy41Miw1LjcsMTgsMTAuMzYsMzUuMDUsMTUuNgoJCWwwLDBjMzAuNjksOS40MiwzMC43MSwxNC44NywzMC43MSwxOS4yNGMwLDYuMDQtOC45NCwxNC40MS0yNS43MSwxNC40MWMtOS45MywwLTI2LjU5LTIuNS0yNi41OS0xOS4yNkg4OC4xCgkJYzAsNy45MywxLjc4LDE1LjMyLDUuMTUsMjEuNzdsLTIyLjQ0LDIyLjQ0bDE5Ljc0LDE5Ljc0bDIyLjkxLTIyLjkxYzguMjcsNC4wNCwxOC4xNSw2LjE0LDI5LjE0LDYuMTQKCQljMTAuMjQsMCwxOS42NS0xLjk3LDI3Ljc3LTUuNzVsMjIuNTMsMjIuNTNsMTkuNzQtMTkuNzRsLTIxLjM0LTIxLjM0QzE5NC41MSwxODYuNzQsMTk2LjI0LDE4MC41OSwxOTYuMjQsMTc0LjN6IiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsiLz4KPC9nPgo8L3N2Zz4K) */
export const FxsCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-fxs-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

FxsCircleColorful.displayName = 'FxsCircleColorful';
