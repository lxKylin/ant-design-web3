// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';

import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/etp-colorful.svg';

/**![EtpColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLWV0cC1jb2xvcmZ1bC1zdmc0ODUyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NTEuOCA1MTUiPjxnIGlkPSJhbnQtd2ViMy1pY29uLWV0cC1jb2xvcmZ1bC1sYXllcjEiPjxnIGlkPSJhbnQtd2ViMy1pY29uLWV0cC1jb2xvcmZ1bC1nNTQ3NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMuMTYzIC0yODEuMzgyKSBzY2FsZSgxLjYwNzQyKSI+PGVsbGlwc2UgaWQ9ImFudC13ZWIzLWljb24tZXRwLWNvbG9yZnVsLXBhdGg1NDExIiB0cmFuc2Zvcm09InJvdGF0ZSgtMS4xNDYgNTYuNjI2IDQyOC43ODMpIiBjeD0iNTYuNiIgY3k9IjQyOC44IiByeD0iMzQuOSIgcnk9IjM0LjkiIHN0eWxlPSJmaWxsOiAjZGUyODEzOyIvPjxjaXJjbGUgaWQ9ImFudC13ZWIzLWljb24tZXRwLWNvbG9yZnVsLWNpcmNsZTU0MTMiIGN4PSIyNS43IiBjeT0iMzU4LjIiIHI9IjIzLjciIHN0eWxlPSJmaWxsOiAjZTcxNjE5OyIvPjxjaXJjbGUgaWQ9ImFudC13ZWIzLWljb24tZXRwLWNvbG9yZnVsLWNpcmNsZTU0MTUiIGN4PSIzOS4zIiBjeT0iMjgxLjciIHI9IjIwLjkiIHN0eWxlPSJmaWxsOiAjZWI2NjE3OyBmaWxsLW9wYWNpdHk6IDA7Ii8+PGNpcmNsZSBpZD0iYW50LXdlYjMtaWNvbi1ldHAtY29sb3JmdWwtY2lyY2xlNTQxNyIgY3g9IjgzLjIiIGN5PSIyMTguNSIgcj0iMTgiIHN0eWxlPSJmaWxsOiAjZWM2ODE2OyIvPjxjaXJjbGUgaWQ9ImFudC13ZWIzLWljb24tZXRwLWNvbG9yZnVsLWNpcmNsZTU0MTkiIGN4PSIxNTciIGN5PSIxODguOCIgcj0iMTMuNyIgc3R5bGU9ImZpbGw6ICNmMjk2MWI7Ii8+PGNpcmNsZSBpZD0iYW50LXdlYjMtaWNvbi1ldHAtY29sb3JmdWwtY2lyY2xlNTQyMSIgY3g9IjIzMy44IiBjeT0iMTk5LjYiIHI9IjExLjQiIHN0eWxlPSJmaWxsOiAjZjFjNjIxOyIvPjxjaXJjbGUgaWQ9ImFudC13ZWIzLWljb24tZXRwLWNvbG9yZnVsLWNpcmNsZTU0MjMiIGN4PSIyOTUuOCIgY3k9IjI0OC45IiByPSI4LjUiIHN0eWxlPSJmaWxsOiAjZjNjNjIwOyIvPjxjaXJjbGUgaWQ9ImFudC13ZWIzLWljb24tZXRwLWNvbG9yZnVsLWNpcmNsZTU0MjUiIGN4PSIzMjUuNCIgY3k9IjMyMS4yIiByPSIxOS44IiBzdHlsZT0iZmlsbDogIzE1NjE5MjsiLz48Y2lyY2xlIGlkPSJhbnQtd2ViMy1pY29uLWV0cC1jb2xvcmZ1bC1jaXJjbGU1NDI3IiBjeD0iMzE0LjciIGN5PSIzOTcuNSIgcj0iMTcuNyIgc3R5bGU9ImZpbGw6ICMyMDkwYzA7Ii8+PGNpcmNsZSBpZD0iYW50LXdlYjMtaWNvbi1ldHAtY29sb3JmdWwtY2lyY2xlNTQyOSIgY3g9IjI2Ny42IiBjeT0iNDU4LjMiIHI9IjEzLjgiIHN0eWxlPSJmaWxsOiAjMzM4ZGNjOyIvPjxjaXJjbGUgaWQ9ImFudC13ZWIzLWljb24tZXRwLWNvbG9yZnVsLWNpcmNsZTU0MzEiIGN4PSIxOTQiIGN5PSI0ODYuMyIgcj0iOS4xIiBzdHlsZT0iZmlsbDogIzM4YmFlODsiLz48Y2lyY2xlIGlkPSJhbnQtd2ViMy1pY29uLWV0cC1jb2xvcmZ1bC1jaXJjbGU1NDMzIiBjeD0iMTIwLjciIGN5PSI0NzUuNiIgcj0iNi4zIiBzdHlsZT0iZmlsbDogIzM2YmJlNjsiLz48ZWxsaXBzZSBpZD0iYW50LXdlYjMtaWNvbi1ldHAtY29sb3JmdWwtY2lyY2xlNTQzNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTMuMTcgMzkuNDg0IDI4MS41ODUpIHNjYWxlKDEuMDAwMDMpIiBjeD0iMzkuNSIgY3k9IjI4MS42IiByeD0iMzMuNiIgcnk9IjMzLjYiIHN0eWxlPSJmaWxsOiAjZWI2NjE3OyIvPjxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLWV0cC1jb2xvcmZ1bC1yZWN0NTQzNyIgZD0iTTExNS41IDMxMC4ybDI3LjktMTUuOS0uMSA5Mi41LTI3LjggMTUuN3YtOTIuM3oiIHN0eWxlPSJmaWxsOiAjM2YzZjNmOyIvPjxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLWV0cC1jb2xvcmZ1bC1wYXRoNTQ0NCIgZD0iTTIyNi43IDMxMC4ybDI3LjktMTUuOS0uMSA5Mi41LTI3LjggMTUuN3YtOTIuM3oiIHN0eWxlPSJmaWxsOiAjM2YzZjNmOyIvPjxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLWV0cC1jb2xvcmZ1bC1wYXRoNTQ0NiIgZD0iTTE3MSAzMTAuMmwyNy45LTE1LjktLjEgOTIuNS0yNy44IDE1Ljd2LTkyLjN6IiBzdHlsZT0iZmlsbDogIzNmM2YzZjsiLz48cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1ldHAtY29sb3JmdWwtcmVjdDU0NDgiIGQ9Ik04OC41IDI5My43bDI3LjMtMTYuMSAyNy42IDE2LjctMjcuOSAxNS45LTI3LTE2LjV6IiBzdHlsZT0iZmlsbDogIzY4NmE2OTsiLz48cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1ldHAtY29sb3JmdWwtcGF0aDU0NTEiIGQ9Ik0xNDMuOSAyOTMuN2wyNy4zLTE2LjEgMjcuNiAxNi43LTI3LjggMTUuOS0yNy4xLTE2LjV6IiBzdHlsZT0iZmlsbDogIzY4NmE2OTsiLz48cGF0aCBpZD0iYW50LXdlYjMtaWNvbi1ldHAtY29sb3JmdWwtcGF0aDU0NTMiIGQ9Ik0xOTkuNyAyOTMuOGwyNy4zLTE2LjEgMjcuNiAxNi43LTI3LjkgMTUuOS0yNy0xNi41eiIgc3R5bGU9ImZpbGw6ICM2ODZhNjk7Ii8+PC9nPjwvZz48L3N2Zz4K) */
export const EtpColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-etp-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

EtpColorful.displayName = 'EtpColorful';
