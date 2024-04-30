// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';

import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/zlw-circle-colorful.svg';

/**![ZlwCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi16bHctY2lyY2xlLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjcuOSAyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjcuOSAyODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKPGVsbGlwc2UgY3g9IjEzLjkiIGN5PSIxNCIgcng9IjEzLjkiIHJ5PSIxNCIgc3R5bGU9ImZpbGw6ICNGRkZGRkY7Ii8+CjxnPgoJPGRlZnM+CgkJPHJlY3QgaWQ9ImFudC13ZWIzLWljb24temx3LWNpcmNsZS1jb2xvcmZ1bC1TVkdJRF8xXyIgd2lkdGg9IjI3LjkiIGhlaWdodD0iMjgiLz4KCTwvZGVmcz4KCTxjbGlwUGF0aCBpZD0iYW50LXdlYjMtaWNvbi16bHctY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzJfIj4KCQk8dXNlIHhsaW5rOmhyZWY9IiNhbnQtd2ViMy1pY29uLXpsdy1jaXJjbGUtY29sb3JmdWwtU1ZHSURfMV8iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgoJPC9jbGlwUGF0aD4KCTxnIHN0eWxlPSJjbGlwLXBhdGg6IHVybCgjYW50LXdlYjMtaWNvbi16bHctY2lyY2xlLWNvbG9yZnVsLVNWR0lEXzJfKTsiPgoJCTxwYXRoIGQ9Ik0yNy45LDE0YzAsNy43LTYuMywxNC0xMy45LDE0QzYuMywyOCwwLDIxLjcsMCwxNEMwLDYuMiw2LjMsMCwxMy45LDBDMjEuNiwwLDI3LjksNi4zLDI3LjksMTR6IE0xMy45LDEuNgoJCQlDNy4yLDEuNiwxLjYsNy4zLDEuNiwxNGMwLDYuNyw1LjYsMTIuMywxMi4zLDEyLjNjNi43LDAsMTIuMy01LjYsMTIuMy0xMi4zQzI2LjMsNy4yLDIwLjYsMS42LDEzLjksMS42eiIgc3R5bGU9ImZpbGw6ICNGOUM5MTA7Ii8+CgkJPHBhdGggZD0iTTUsMTljLTEuOC0zLjEtMS44LTcuNSwwLjMtMTAuN2wzLjUsMy41YzAsMC0wLjYsMS40LTAuMywyLjlsLTEuMiwxLjRjLTAuNy0xLjktMC4yLTQtMC4yLTRMNS44LDExCgkJCWMtMS4zLDMuNywwLjMsNi43LDAuMyw2LjdMNSwxOXoiIHN0eWxlPSJmaWxsOiAjRjlDOTEwOyIvPgoJCTxwYXRoIGQ9Ik0yMi45LDguOGMxLjgsMy4xLDEuOCw3LjUtMC4zLDEwLjdMMTkuMSwxNmMwLDAsMC42LTEuNCwwLjMtMi45bDEuMi0xLjRjMC43LDEuOSwwLjIsNCwwLjIsNGwxLjMsMS4zCgkJCWMxLjMtMy43LTAuMy02LjctMC4zLTYuN0wyMi45LDguOHoiIHN0eWxlPSJmaWxsOiAjRjlDOTEwOyIvPgoJCTxwYXRoIGQ9Ik0yMi4xLDcuNWwtOS42LDExLjhjMCwwLDMuMywxLjIsNS45LTJsMy4zLDMuM2MtMyw0LTExLDUuNi0xNS45LTAuM2w5LjYtMTEuOGMwLDAtMy41LTEuMi01LjksMkw2LjIsNy4xCgkJCUMxMCwyLjMsMTguNCwyLjUsMjIuMSw3LjV6IE04LjQsNy4ybDEuMSwxLjFDMTMuOCw1LjEsMTcuOCw4LDE3LjgsOEw3LjksMjAuMmMzLjUsMy4zLDguNiwzLjEsMTEuNiwwLjRsLTEuMS0xLjEKCQkJYy00LjYsMy4zLTguNCwwLjQtOC40LDAuNEwyMCw3LjdDMTcuNCw1LDEyLjMsNCw4LjQsNy4yeiIgc3R5bGU9ImZpbGw6ICNFRDFDMjQ7Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==) */
export const ZlwCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-zlw-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

ZlwCircleColorful.displayName = 'ZlwCircleColorful';
