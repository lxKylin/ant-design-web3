// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';

import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/arbitrum-circle-colorful.svg';

/**![ArbitrumCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiByeD0iMjgiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzA3LCAtNTcyOCkiIGlkPSJhcmJjaXJjbGUiPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzA3LCA1NzI4KSIgaWQ9IlByb3RvY29sPUFyYml0cnVtLU9uZSwtRWZmZWN0PU5vbmUtQ2xpcHBlZCI+CiAgICAgICAgICAgICAgICA8ZyBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgZmlsbD0iIzAwMDAwMCIgY3g9IjUxMiIgY3k9IjUxMiIgcj0iNTEyIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMTkuNDI4NiwgMTgyLjg1NzEpIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTM2Ni41OTg1NDYsMjkzLjI0NTE4OSBMNDE0Ljg0MzYwNiwyMTMuNDkxMDMyIEw1NDQuODg1NjM3LDQxMC44MDg3OTQgTDU0NC45NDY4NTMsNDQ4LjY3NjQxOCBMNTQ0LjUyMjgyNSwxODguMDk3NTg0IEM1NDQuMjE1MjU2LDE4MS43MjY2NzcgNTQwLjc0MjQxMywxNzUuODk4MzE1IDUzNS4yMDQ2NzQsMTcyLjQ1OTc3IEwzMDEuMDgwMzQ0LDQxLjI2NzA4MDYgQzI5NS42MDY4MDgsMzguNjQ0NTM1OCAyODguNjU4MTM0LDM4LjY3NTA4MTMgMjgzLjE5MzU1Niw0MS4zNDk5ODk3IEMyODIuNDU0NDkzLDQxLjcxMjE3MTMgMjgxLjc2MzIwOSw0Mi4xMDE5ODk1IDI4MS4xMDAyOTMsNDIuNTMxMDgwMiBMMjgwLjI4MzU5Myw0My4wMzE0NDM3IEw1My4wMjczMTE3LDE3MS4zMjUyMjUgTDUyLjE0NjQwOTcsMTcxLjcxOTQwNyBDNTEuMDEwMTk1NiwxNzIuMjI0MTM0IDQ5Ljg2NjUxNTksMTcyLjg3NDMxNiA0OC43ODcwMzc4LDE3My42MjE5NTIgQzQ0LjQ3ODA4MzUsMTc2LjYyOTk1MSA0MS42MTU4OTg3LDE4MS4wODM3NjggNDAuNjkwMjA1MSwxODYuMDc0MzExIEM0MC41NTI4NDQxLDE4Ni44MzA2NzYgNDAuNDQ2ODM3MiwxODcuNjAxNTg0IDQwLjQwMzUzODcsMTg4LjM4MTIyMSBMNDAuNzU4ODg1Nyw0MDAuNzI3MzQyIEwxNjEuODg3Mzg0LDIxNy44MzEzOTMgQzE3Ny4xMzQ0NTMsMTkzLjU3OTc2NSAyMTAuMzYyMzczLDE4NS43NjMwMzkgMjQxLjIxMDM2NiwxODYuMTkyMTMgTDI3Ny40MDk0NjMsMTg3LjEyMTU4NCBMNjQuMTA3MjY2Niw1MjAuMzczODUzIEw4OS4yNTAyOTg3LDUzNC40NzU2NjYgTDMwNS4xMDcxMTIsMTg3LjQ2MDQ5MyBMNDAwLjUxNzc1MSwxODcuMTIxNTg0IEwxODUuMjE5MzQxLDU0Mi44OTQ1NzQgTDI3NC45Mzg0NTksNTkzLjE3MjM3OCBMMjg1LjY2MDA4MSw1OTkuMTczODI5IEMyOTAuMTk0NDg3LDYwMC45NzAxOTIgMjk1LjUzODEyNyw2MDEuMDYwMzc0IDMwMC4xMTEzNTMsNTk5LjQ1MDE5NCBMNTM3LjUyNDg4LDQ2NS40MTM4NjggTDQ5Mi4xMzMwNDksNDkxLjAzODU4OCBMMzY2LjU5ODU0NiwyOTMuMjQ1MTg5IFogTTM4NS4wMDM0MjUsNTUxLjUyMjkzNSBMMjk0LjM4Njk4Miw0MTIuOTYyOTczIEwzNDkuNzA2MTMyLDMyMS41MTI4MTkgTDQ2OC43MTU5ODYsNTA0LjI1ODk0OCBMMzg1LjAwMzQyNSw1NTEuNTIyOTM1IFoiIGZpbGw9IiMyRDM3NEIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzI4QTBGMCIgcG9pbnRzPSIyOTQuMzYwMTA4IDQxMi45NjczMzggMzg0Ljk4MTAzIDU1MS41MjQzODkgNDY4LjY5MDYwNCA1MDQuMjYzMzEyIDM0OS42NzkyNTggMzIxLjUxNTcyOCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTQ0LjkzMzQxNiw0NDguNjc5MzI3IEw1NDQuODcyMjAxLDQxMC44MTE3MDMgTDQxNC44MzAxNywyMTMuNDkzOTQxIEwzNjYuNTg1MTEsMjkzLjI0ODA5OSBMNDkyLjEyNDA5MSw0OTEuMDQxNDk4IEw1MzcuNTE1OTIyLDQ2NS40MTY3NzcgQzU0MS45NjY3MTYsNDYxLjg5Njc3OSA1NDQuNjYzMTczLDQ1Ni43MjU4NzIgNTQ0Ljk0NTM2LDQ1MS4xNDkxNDYgTDU0NC45MzM0MTYsNDQ4LjY3OTMyNyBaIiBmaWxsPSIjMjhBMEYwIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDQ4NC4zODk4NjIgTDY0LjA5OTgwMTQsNTIwLjM3MjM5OCBMMjc3LjQwMDUwNSwxODcuMTIxNTg0IEwyNDEuMjAxNDA2LDE4Ni4xOTIxMyBDMjEwLjM1OTM4NywxODUuNzY1OTQ4IDE3Ny4xMzE0NjcsMTkzLjU3OTc2NSAxNjEuODc4NDI1LDIxNy44Mjk5MzkgTDQwLjc1MTQyMDMsNDAwLjcyNTg4NiBMMCw0NjEuNzIyMjMzIEwwLDQ4NC4zODk4NjIgWiIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjQwMC41MDg3OTMgMTg3LjEyMTU4NCAzMDUuMDk2NjYgMTg3LjQ2MDQ5MyA4OS4yNDEzNDAzIDUzNC40NzU2NjYgMTY0LjY5MTM0IDU3Ni43OTQyIDE4NS4yMDU5MDQgNTQyLjg5NDU3NCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTg1LjE0Mjg1NywxODYuNjQxNTg0IEM1ODQuMzQ3MDU5LDE2Ny4yMDMwNDUgNTczLjU0MTgyNiwxNDkuNDExMDUgNTU2LjYyMTA0MywxMzkuMDQ4ODcxIEwzMTkuNDI4NDg3LDYuMTYzMDkwNiBDMzAyLjY4OTg1NiwtMi4wNDc4MTYxNCAyODEuNzc4MTM5LC0yLjA1OTQ1MjQ5IDI2NS4wMDY2NjMsNi4xNTg3MjY5NyBDMjYzLjAyNjg3Myw3LjEzMTgxNzYgMzQuMzQzMjMxOCwxMzYuMzQwNTA4IDM0LjM0MzIzMTgsMTM2LjM0MDUwOCBDMzEuMTc3OTU3MSwxMzcuODE2ODcxIDI4LjEzMDYzMzUsMTM5LjU3Njg3MSAyNS4yNjM5Njk1LDE0MS41NzgzMjQgQzEwLjE1ODc0MDUsMTUyLjEyODE0IDAuOTQ5NTgyNDQ4LDE2OC41MTc5NTMgMCwxODYuNTIzNzY3IEwwLDQ2MS43MjgwNTEgTDQwLjc1MTQyMDMsNDAwLjczMDI1MSBMNDAuMzk0NTgwMywxODguMzgxMjIxIEM0MC40NDM4NTEyLDE4Ny42MDU5NDggNDAuNTQzODg1NywxODYuODM3OTQ4IDQwLjY4MjczOTksMTg2LjA4NTk0OCBDNDEuNjAzOTU0MywxODEuMDg4MTMxIDQ0LjQ2OTEyNTEsMTc2LjYzNDMxNCA0OC43NzgwNzk1LDE3My42MjE5NTIgQzQ5Ljg1NzU1NzgsMTcyLjg3NDMxNiAyODIuNDQxMDU3LDQxLjcxMjE3MTMgMjgzLjE4MTYxLDQxLjM0OTk4OTcgQzI4OC42NTA2NjgsMzguNjc2NTM1OCAyOTUuNTk0ODY0LDM4LjY0NDUzNTggMzAxLjA2ODQsNDEuMjY3MDgwNiBMNTM1LjE5MjczLDE3Mi40NTk3NyBDNTQwLjczMDQ2OSwxNzUuODk4MzE1IDU0NC4yMDMzMTIsMTgxLjcyNjY3NyA1NDQuNTA5Mzg5LDE4OC4wOTc1ODQgTDU0NC41MDkzODksNDUxLjE0MTg3MiBDNTQ0LjIyNzIsNDU2LjcxODU5NyA1NDEuOTYzNzMsNDYxLjg4OTUwNSA1MzcuNTEyOTM2LDQ2NS40MDk1MDUgTDQ5Mi4xMjExMDQsNDkxLjAzNDIyNSBMNDY4LjY5OTU2Miw1MDQuMjU4OTQ4IEwzODQuOTkxNDgxLDU1MS41MjAwMjYgTDMwMC4wOTc5MTUsNTk5LjQ0NTgyOSBDMjk1LjUyNjE4Miw2MDEuMDU2MDExIDI5MC4xNzgwNjMsNjAwLjk2NTgyOSAyODUuNjQ2NjQzLDU5OS4xNjk0NjcgTDE4NS4yMDczOTcsNTQyLjg5MTY2NCBMMTY0LjY4ODM1Myw1NzYuNzg5ODM3IEwyNTQuOTUzOTI5LDYyNy40MTgxODUgQzI1Ny45MzcwNTEsNjI5LjA3MjAwNCAyNjAuNTk2MTgsNjMwLjUzNjczIDI2Mi43NzkwMjYsNjMxLjczMzgyIEMyNjYuMTU5Myw2MzMuNTgxMDkzIDI2OC40NjMwODQsNjM0LjgxMzA5MyAyNjkuMjc1MzA0LDYzNS4yMDAwMDIgQzI3NS42OTA5NTksNjM4LjIzNTYzNyAyODQuOTE5NTI2LDY0MCAyOTMuMjM4ODI0LDY0MCBDMzAwLjg2MjM1OCw2NDAgMzA4LjMwMDc1NCw2MzguNjM3MDkxIDMxNS4zMzc1MTgsNjM1Ljk1MjAwMiBMNTYxLjkxNjkwNiw0OTYuODM5MzE0IEM1NzYuMDY4MDc0LDQ4Ni4xNTU2ODEgNTg0LjM5NjMzLDQ3MC4wNDUxNCA1ODUuMTQyODU3LDQ1Mi41OTQ5NjIgTDU4NS4xNDI4NTcsMTg2LjY0MTU4NCBaIiBmaWxsPSIjOTZCRURDIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K) */
export const ArbitrumCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-arbitrum-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

ArbitrumCircleColorful.displayName = 'ArbitrumCircleColorful';
