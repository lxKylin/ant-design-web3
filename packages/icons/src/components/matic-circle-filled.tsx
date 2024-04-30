// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';

import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/matic-circle-filled.svg';

/**![MaticCircleFilled](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+cG9seWdvbi1tYXRpYy1sb2dvPC90aXRsZT4KICAgIDxnIGlkPSJwb2x5Z29uLW1hdGljLWxvZ28iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnvJbnu4QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMiwgMTEyKSIgZmlsbD0iIzU1NTU1NSI+CiAgICAgICAgICAgIDxjaXJjbGUgaWQ9IuakreWchuW9oiIgY3g9IjQwMCIgY3k9IjQwMCIgcj0iNDAwIj48L2NpcmNsZT4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjM3LCAyNzApIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGlkPSLot6/lvoQiPgogICAgICAgICAgICA8cGF0aCBkPSJNNDE2LjQ0OTA4NiwxNDcuOTI4NzgzIEM0MDYuMzk2ODY3LDE0Mi4xODM5NzYgMzkzLjQ3MjU4NSwxNDIuMTgzOTc2IDM4MS45ODQzMzQsMTQ3LjkyODc4MyBMMzAxLjU2NjU4LDE5NS4zMjM0NDIgTDI0Ni45OTczODksMjI1LjQ4MzY4IEwxNjguMDE1NjY2LDI3Mi44NzgzMzggQzE1Ny45NjM0NDYsMjc4LjYyMzE0NSAxNDUuMDM5MTY0LDI3OC42MjMxNDUgMTMzLjU1MDkxNCwyNzIuODc4MzM4IEw3MS44MDE1NjY2LDIzNS41MzcwOTIgQzYxLjc0OTM0NzMsMjI5Ljc5MjI4NSA1NC41NjkxOTA2LDIxOC4zMDI2NzEgNTQuNTY5MTkwNiwyMDUuMzc2ODU1IEw1NC41NjkxOTA2LDEzMy41NjY3NjYgQzU0LjU2OTE5MDYsMTIyLjA3NzE1MSA2MC4zMTMzMTU5LDExMC41ODc1MzcgNzEuODAxNTY2NiwxMDMuNDA2NTI4IEwxMzMuNTUwOTE0LDY3LjUwMTQ4MzcgQzE0My42MDMxMzMsNjEuNzU2Njc2NiAxNTYuNTI3NDE1LDYxLjc1NjY3NjYgMTY4LjAxNTY2Niw2Ny41MDE0ODM3IEwyMjkuNzY1MDEzLDEwNC44NDI3MyBDMjM5LjgxNzIzMiwxMTAuNTg3NTM3IDI0Ni45OTczODksMTIyLjA3NzE1MSAyNDYuOTk3Mzg5LDEzNS4wMDI5NjcgTDI0Ni45OTczODksMTgyLjM5NzYyNiBMMzAxLjU2NjU4LDE1MC44MDExODcgTDMwMS41NjY1OCwxMDEuOTcwMzI2IEMzMDEuNTY2NTgsOTAuNDgwNzEyMiAyOTUuODIyNDU0LDc4Ljk5MTA5NzkgMjg0LjMzNDIwNCw3MS44MTAwODkgTDE2OS40NTE2OTcsNC4zMDg2MDUzNCBDMTU5LjM5OTQ3OCwtMS40MzYyMDE3OCAxNDYuNDc1MTk2LC0xLjQzNjIwMTc4IDEzNC45ODY5NDUsNC4zMDg2MDUzNCBMMTcuMjMyMzc2LDczLjI0NjI5MDggQzUuNzQ0MTI1MzMsNzguOTkxMDk3OSAwLDkwLjQ4MDcxMjIgMCwxMDEuOTcwMzI2IEwwLDIzNi45NzMyOTQgQzAsMjQ4LjQ2MjkwOCA1Ljc0NDEyNTMzLDI1OS45NTI1MjIgMTcuMjMyMzc2LDI2Ny4xMzM1MzEgTDEzMy41NTA5MTQsMzM0LjYzNTAxNSBDMTQzLjYwMzEzMywzNDAuMzc5ODIyIDE1Ni41Mjc0MTUsMzQwLjM3OTgyMiAxNjguMDE1NjY2LDMzNC42MzUwMTUgTDI0Ni45OTczODksMjg4LjY3NjU1OCBMMzAxLjU2NjU4LDI1Ny4wODAxMTkgTDM4MC41NDgzMDMsMjExLjEyMTY2MiBDMzkwLjYwMDUyMiwyMDUuMzc2ODU1IDQwMy41MjQ4MDQsMjA1LjM3Njg1NSA0MTUuMDEzMDU1LDIxMS4xMjE2NjIgTDQ3Ni43NjI0MDIsMjQ3LjAyNjcwNiBDNDg2LjgxNDYyMSwyNTIuNzcxNTEzIDQ5My45OTQ3NzgsMjY0LjI2MTEyOCA0OTMuOTk0Nzc4LDI3Ny4xODY5NDQgTDQ5My45OTQ3NzgsMzQ4Ljk5NzAzMyBDNDkzLjk5NDc3OCwzNjAuNDg2NjQ3IDQ4OC4yNTA2NTMsMzcxLjk3NjI2MSA0NzYuNzYyNDAyLDM3OS4xNTcyNyBMNDE2LjQ0OTA4Niw0MTUuMDYyMzE1IEM0MDYuMzk2ODY3LDQyMC44MDcxMjIgMzkzLjQ3MjU4NSw0MjAuODA3MTIyIDM4MS45ODQzMzQsNDE1LjA2MjMxNSBMMzIwLjIzNDk4NywzNzkuMTU3MjcgQzMxMC4xODI3NjgsMzczLjQxMjQ2MyAzMDMuMDAyNjExLDM2MS45MjI4NDkgMzAzLjAwMjYxMSwzNDguOTk3MDMzIEwzMDMuMDAyNjExLDMwMy4wMzg1NzYgTDI0OC40MzM0MiwzMzQuNjM1MDE1IEwyNDguNDMzNDIsMzgyLjAyOTY3NCBDMjQ4LjQzMzQyLDM5My41MTkyODggMjU0LjE3NzU0Niw0MDUuMDA4OTAyIDI2NS42NjU3OTYsNDEyLjE4OTkxMSBMMzgxLjk4NDMzNCw0NzkuNjkxMzk1IEMzOTIuMDM2NTU0LDQ4NS40MzYyMDIgNDA0Ljk2MDgzNiw0ODUuNDM2MjAyIDQxNi40NDkwODYsNDc5LjY5MTM5NSBMNTMyLjc2NzYyNCw0MTIuMTg5OTExIEM1NDIuODE5ODQzLDQwNi40NDUxMDQgNTUwLDM5NC45NTU0OSA1NTAsMzgyLjAyOTY3NCBMNTUwLDI0NS41OTA1MDQgQzU1MCwyMzQuMTAwODkgNTQ0LjI1NTg3NSwyMjIuNjExMjc2IDUzMi43Njc2MjQsMjE1LjQzMDI2NyBMNDE2LjQ0OTA4NiwxNDcuOTI4NzgzIFoiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=) */
export const MaticCircleFilled = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-matic-circle-filled');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

MaticCircleFilled.displayName = 'MaticCircleFilled';
