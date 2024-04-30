// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';

import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/stake-circle-colorful.svg';

/**![StakeCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1zdGFrZS1jaXJjbGUtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyNTYgMjU1LjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1NiAyNTUuODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKPHRpdGxlPkdyb3VwIDY8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KPGcgaWQ9ImFudC13ZWIzLWljb24tc3Rha2UtY2lyY2xlLWNvbG9yZnVsLVBhZ2UtMSI+Cgk8ZyBpZD0iYW50LXdlYjMtaWNvbi1zdGFrZS1jaXJjbGUtY29sb3JmdWwtQXJ0Ym9hcmQiPgoJCTxnIGlkPSJhbnQtd2ViMy1pY29uLXN0YWtlLWNpcmNsZS1jb2xvcmZ1bC1Hcm91cC02Ij4KCQkJPHBhdGggaWQ9ImFudC13ZWIzLWljb24tc3Rha2UtY2lyY2xlLWNvbG9yZnVsLUZpbGwtMSIgZD0iTTEyOCwwYzcwLjYsMCwxMjgsNTcuMywxMjgsMTI3LjlzLTU3LjQsMTI3LjktMTI4LDEyNy45UzAsMTk4LjUsMCwxMjcuOVM1Ny40LDAsMTI4LDB6IiBzdHlsZT0iZmlsbC1ydWxlOiBldmVub2RkOyBjbGlwLXJ1bGU6IGV2ZW5vZGQ7IGZpbGw6ICM0OEE5QTY7Ii8+CgkJCTxwb2x5Z29uIGlkPSJhbnQtd2ViMy1pY29uLXN0YWtlLWNpcmNsZS1jb2xvcmZ1bC1GaWxsLTIiIHBvaW50cz0iNjIuMyw4OC42IDExNC45LDg4LjYgMTE0LjksNjIuMyA2Mi4zLDYyLjMgCQkJIiBzdHlsZT0iZmlsbC1ydWxlOiBldmVub2RkOyBjbGlwLXJ1bGU6IGV2ZW5vZGQ7IGZpbGw6ICNGRkZGRkY7Ii8+CgkJCTxwb2x5Z29uIGlkPSJhbnQtd2ViMy1pY29uLXN0YWtlLWNpcmNsZS1jb2xvcmZ1bC1GaWxsLTMiIHBvaW50cz0iMTQxLjEsODguNiAxOTMuNyw4OC42IDE5My43LDYyLjMgMTQxLjEsNjIuMyAJCQkiIHN0eWxlPSJmaWxsLXJ1bGU6IGV2ZW5vZGQ7IGNsaXAtcnVsZTogZXZlbm9kZDsgZmlsbDogI0ZGRkZGRjsiLz4KCQkJPHBvbHlnb24gaWQ9ImFudC13ZWIzLWljb24tc3Rha2UtY2lyY2xlLWNvbG9yZnVsLUZpbGwtNCIgcG9pbnRzPSIxOTMuNywxNDEuMSAxNjcuNCwxNDEuMSAxNjcuNCwxNjcuNCAxNDEuMSwxNjcuNCAxNDEuMSwxOTMuNyAxOTMuNywxOTMuNyAJCQkiIHN0eWxlPSJmaWxsLXJ1bGU6IGV2ZW5vZGQ7IGNsaXAtcnVsZTogZXZlbm9kZDsgZmlsbDogI0ZGRkZGRjsiLz4KCQkJPHBvbHlnb24gaWQ9ImFudC13ZWIzLWljb24tc3Rha2UtY2lyY2xlLWNvbG9yZnVsLUZpbGwtNSIgcG9pbnRzPSIxMTQuOSwxOTMuNyAxMTQuOSwxNjcuNCA4OC42LDE2Ny40IDg4LjYsMTQxLjEgNjIuMywxNDEuMSA2Mi4zLDE5My43IAkJCSIgc3R5bGU9ImZpbGwtcnVsZTogZXZlbm9kZDsgY2xpcC1ydWxlOiBldmVub2RkOyBmaWxsOiAjRkZGRkZGOyIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8L3N2Zz4K) */
export const StakeCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-stake-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

StakeCircleColorful.displayName = 'StakeCircleColorful';
