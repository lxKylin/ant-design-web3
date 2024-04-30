// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';

import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/solana-colorful.svg';

/**![SolanaColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iOC40NDExNjE5JSIgeTE9Ijg5Ljc2NjI2MTElIiB4Mj0iODguMTEyMTExMiUiIHkyPSI5LjQ0MTAyMzU2JSIgaWQ9ImFudC13ZWIzLWljb24tc29sYW5hLWNvbG9yZnVsLWxpbmVhciI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM5OTQ1RkYiIG9mZnNldD0iOCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzg3NTJGMyIgb2Zmc2V0PSIzMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzU0OTdENSIgb2Zmc2V0PSI1MCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzQzQjRDQSIgb2Zmc2V0PSI2MCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzI4RTBCOSIgb2Zmc2V0PSI3MiUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE5RkI5QiIgb2Zmc2V0PSI5NyUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgNjYpIiBmaWxsPSJ1cmwoI2FudC13ZWIzLWljb24tc29sYW5hLWNvbG9yZnVsLWxpbmVhcikiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDE4LjcyNzE1LDcwMy40MzM3MzEgTDg0OS42ODQxMzgsODgwLjA0NjIyMiBDODQ2LjAwOTkwNyw4ODMuODgyNjcxIDg0MS41NjMxMTUsODg2Ljk0MTQ4OCA4MzYuNjIyNTcyLDg4OS4wMzIwNjkgQzgzMS42ODIwMjksODkxLjEyMjY0OSA4MjYuMzUyMTY0LDg5Mi4yMDAzODMgODIwLjk2NjUzNiw4OTIuMTk3MzQ4IEwxOS42MjQ1OTAyLDg5Mi4xOTczNDggQzE1LjgwMDkxNjMsODkyLjE5NzM0OCAxMi4wNjA1ODE3LDg5MS4xMDg0NTUgOC44NjMxODk3Niw4ODkuMDY2NTQgQzUuNjY1NzQ3MTIsODg3LjAyMzYxMSAzLjE1MDQ3MDQ2LDg4NC4xMTU4NTkgMS42MjYzOTQ2Myw4ODAuNjk5MTQ4IEMwLjEwMjMyMTgzNyw4NzcuMjgzNDUyIC0wLjM2NDE1OTQ4Nyw4NzMuNTA3ODM1IDAuMjg0MjY4MjUsODY5LjgzNjY0NiBDMC45MzI2OTQ5NzMsODY2LjE2NTQ1NiAyLjY2Nzc4MTU2LDg2Mi43NTg4ODUgNS4yNzYzNTM2Nyw4NjAuMDM1NjU1IEwxNzQuNDQ1ODcxLDY4My40MjMxNjQgQzE3OC4xMTA5NzcsNjc5LjU5Njg1NCAxODIuNTQyNTYyLDY3Ni41NDQxMTkgMTg3LjQ2Njg4Myw2NzQuNDU0NTUzIEMxOTIuMzkyMjE4LDY3Mi4zNjM5NzIgMTk3LjcwNDg0OCw2NzEuMjgxMTY5IDIwMy4wNzcyOTUsNjcxLjI3MjA0NCBMMTAwNC4zNzQ5NCw2NzEuMjcyMDQ0IEMxMDA4LjE5ODIsNjcxLjI3MjA0NCAxMDExLjkzODM0LDY3Mi4zNjA5MzEgMTAxNS4xMzgwOCw2NzQuNDAyODQ2IEMxMDE4LjMzMTc0LDY3Ni40NDU3NzUgMTAyMC44NDYxMiw2NzkuMzU0NTQxIDEwMjIuMzc3MDQsNjgyLjc3MDIzNyBDMTAyMy44OTc4NCw2ODYuMTg2OTQ4IDEwMjQuMzY0MjEsNjg5Ljk2MTU1MSAxMDIzLjcxNTM0LDY5My42MzI3NCBDMTAyMy4wNjY0Nyw2OTcuMzAzOTI5IDEwMjEuMzMyNzcsNzAwLjcxMDUwMSAxMDE4LjcyNzE1LDcwMy40MzM3MzEgWiBNODQ5LjY4NDEzOCwzNDcuNzg2NjM1IEM4NDYuMDA5OTA3LDM0My45NTAxODYgODQxLjU2MzExNSwzNDAuODkxMzY5IDgzNi42MjI1NzIsMzM4LjgwMDc4OCBDODMxLjY4MjAyOSwzMzYuNzExMjIxIDgyNi4zNTIxNjQsMzM1LjYzMzQ4NyA4MjAuOTY2NTM2LDMzNS42MzY1MjMgTDE5LjYyNDU5MDIsMzM1LjYzNjUyMyBDMTUuODAwOTE2MywzMzUuNjM2NTIzIDEyLjA2MDU4MTcsMzM2LjcyNDQwMSA4Ljg2MzE4OTc2LDMzOC43NjczMzEgQzUuNjY1NzQ3MTIsMzQwLjgxMDI2IDMuMTUwNDcwNDYsMzQzLjcxODAxMiAxLjYyNjM5NDYzLDM0Ny4xMzM3MDggQzAuMTAyMzIxODM3LDM1MC41NTA0MTkgLTAuMzY0MTU5NDg3LDM1NC4zMjYwMzYgMC4yODQyNjgyNSwzNTcuOTk3MjI1IEMwLjkzMjY5NDk3MywzNjEuNjY3NCAyLjY2Nzc4MTU2LDM2NS4wNzM5NzIgNS4yNzYzNTM2NywzNjcuNzk4MjE1IEwxNzQuNDQ1ODcxLDU0NC40MTA3MDcgQzE3OC4xMTA5NzcsNTQ4LjIzNzAxNyAxODIuNTQyNTYyLDU1MS4yODg3MzcgMTg3LjQ2Njg4Myw1NTMuMzc5MzE4IEMxOTIuMzkyMjE4LDU1NS40Njg4ODUgMTk3LjcwNDg0OCw1NTYuNTUyNzAyIDIwMy4wNzcyOTUsNTU2LjU2MDgxMyBMMTAwNC4zNzQ5NCw1NTYuNTYwODEzIEMxMDA4LjE5ODIsNTU2LjU2MDgxMyAxMDExLjkzODM0LDU1NS40NzI5NCAxMDE1LjEzODA4LDU1My40MzAwMTEgQzEwMTguMzMxNzQsNTUxLjM4NzA4MiAxMDIwLjg0NjEyLDU0OC40NzkzMyAxMDIyLjM3NzA0LDU0NS4wNjM2MzMgQzEwMjMuODk3ODQsNTQxLjY0NjkyMyAxMDI0LjM2NDIxLDUzNy44NzEzMDYgMTAyMy43MTUzNCw1MzQuMjAwMTE3IEMxMDIzLjA2NjQ3LDUzMC41Mjk5NDEgMTAyMS4zMzI3Nyw1MjcuMTIzMzcgMTAxOC43MjcxNSw1MjQuMzk5MTI2IEw4NDkuNjg0MTM4LDM0Ny43ODY2MzUgWiBNMTkuNjI0NTkwMiwyMjAuOTI1MyBMODIwLjk2NjUzNiwyMjAuOTI1MyBDODI2LjM1MjE2NCwyMjAuOTI1MyA4MzEuNjgyMDI5LDIxOS44NTA2MDUgODM2LjYyMjU3MiwyMTcuNzYwMDI1IEM4NDEuNTYzMTE1LDIxNS42Njk0NDQgODQ2LjAwOTkwNywyMTIuNjEwNjI3IDg0OS42ODQxMzgsMjA4Ljc3NDE3OCBMMTAxOC43MjcxNSwzMi4xNjE1ODUxIEMxMDIxLjMzMjc3LDI5LjQzODE1MjcgMTAyMy4wNjY0NywyNi4wMzE2ODI0IDEwMjMuNzE1MzQsMjIuMzYwNjk1OSBDMTAyNC4zNjQyMSwxOC42ODk3MDk0IDEwMjMuODk3ODQsMTQuOTE0MTkzOCAxMDIyLjM3NzA0LDExLjQ5Nzk5MDUgQzEwMjAuODQ2MTIsOC4wODE3ODcxMiAxMDE4LjMzMTc0LDUuMTczNjkwMTcgMTAxNS4xMzgwOCwzLjEzMTAzNDc3IEMxMDExLjkzODM0LDEuMDg4MzY5MjMgMTAwOC4xOTgyLDAgMTAwNC4zNzQ5NCwwIEwyMDMuMDc3Mjk1LDAgQzE5Ny43MDQ4NDgsMC4wMDg5MDU3MjEyMyAxOTIuMzkyMjE4LDEuMDkxOTE3NzQgMTg3LjQ2Njg4MywzLjE4MTk4MTI2IEMxODIuNTQyNTYyLDUuMjcyMDU0OTIgMTc4LjExMDk3Nyw4LjMyNDY3NzcxIDE3NC40NDU4NzEsMTIuMTUwOTE2NyBMNS4zMTk5NTk4MiwxODguNzYzNjExIEMyLjcxMzkxMjIyLDE5MS40ODM3OTkgMC45Nzk1OTAwODEsMTk0Ljg4NzMyOSAwLjMyOTY5MjI0NywxOTguNTUzNDQ5IEMtMC4zMjAyMDY2MDIsMjAyLjIyMDU4MyAwLjE0MjU3MzExOCwyMDUuOTkzMTU4IDEuNjYxMjcxNDMsMjA5LjQwNzg0MSBDMy4xNzk5NzM4LDIxMi44MjI1MjMgNS42ODg1NzkyNiwyMTUuNzMwMjc2IDguODc5NDMxODEsMjE3Ljc3NjI0NiBDMTIuMDcwMzE0OCwyMTkuODIyMjE3IDE1LjgwNDY2NzYsMjIwLjkxNjE3MyAxOS42MjQ1OTAyLDIyMC45MjUzIFoiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=) */
export const SolanaColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-solana-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

SolanaColorful.displayName = 'SolanaColorful';
