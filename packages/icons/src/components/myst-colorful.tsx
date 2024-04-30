// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';

import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/myst-colorful.svg';

/**![MystColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLW15c3QtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTQ0IDI3NS42Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTggMjU0Ljg5NSkiPjxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1teXN0LWNvbG9yZnVsLXBhdGgwX2ZpbGxfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLTEwNjAuNDQ1IiB5MT0iLTI0My4wMjUiIHgyPSItMTA0My40NTIiIHkyPSItMjQzLjAyNSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgzMzY5MC43NTggNzY2My4wMjgpIHNjYWxlKDMyLjAxMzcpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNjNTFmNWQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyZjIzNjEiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGlkPSJhbnQtd2ViMy1pY29uLW15c3QtY29sb3JmdWwtcGF0aDBfZmlsbCIgZD0iTTI4NC40LTc2LjlMMTA4LTI1My4zYy0yLjEtMi4xLTYuMS0yLjEtOC4yIDBMMTMuMi0xNjdsLTg0LjktODQuOWMtMi4zLTIuMy01LjktMi4zLTguMiAwbC0yNi41IDI2LTk3LjQgOTUuNS0yMS4zIDIwLjktMzEuMyAzMC41Yy0xLjIgMS4yLTEuNiAyLjYtMS42IDQuMnMuNyAzIDEuNiA0LjJsODggODhjMi4zIDIuMyA2LjEgMi4zIDguMiAwTC03NS43LTY3IDkuOSAxOC42YzIuMyAyLjMgNi4xIDIuMyA4LjIgMGw4NC43LTg0LjdMMTg4IDE5LjFjMS4yIDEuMiAyLjYgMS42IDQuMiAxLjZzMy0uNSA0LjItMS42bDg4LTg4YzEuMi0xLjIgMS42LTIuNiAxLjYtNC4yIDAtMS43LS41LTIuOS0xLjYtMy44em0tMTUuOCA3LjNMMjE4LTg4LjJsLTIzLjItNTAgMTMuNCAxLjkgNjMuNiA2My42LTMuMiAzLjF6TTI0MC00MWwtMTUtMzIuMSAzNC41IDEyLjdMMjQwLTQxem0tMzQ4LjMtMTE1LjdsLTcxLjMgMTkuMiA3MS4zLTcwLjF2NTAuOXptLTg4LjUgMzUuOWw1MC0xMy40LTMuMyA1Ni4zLTYwLjgtMjguOSAxNC4xLTE0em02Mi0xNi42bDguOS0yLjMgMjMuNyAzNi40LTM3LjEgNDEuMSA0LjUtNzUuMnptNDAuNSAyNC44bC0xOS45LTMwLjUgMTEuMy0zIDI4LjQgMTEuNy0xOS44IDIxLjh6bS0yLjMtNDMuNnYtMjEuM2w2Ny42IDUuNiAxNi45IDUwLjctODQuNS0zNXptNTcuMiA2NS45bDI0LjIgMTQuOCA0IDU2LjUtMzQuMi0zNCA2LTM3LjN6bTMyLjkgNi40bC0zMC43LTE5IDIuMy0xNC44IDI4LjkgMTJjLjcuNSAxLjQuOSAyLjMuOWwyOS4xIDEyLjIgMTIuMiAzNi4xLTQ0LjEtMjcuNHptNDMuOC0xMC40TDY5LTExMC43IDQ1LjgtNjkuNGwtOC41LTI0Ljl6bTQzLjktMzUuNmwtMjkuMyAxNS4yIDctNDkuNyA0MC44IDI0LjktMTguNSA5LjZ6bTMwLjctMTZsLTU0LjctMzMuMy05LjYtNS45TDYyLTE5OS40bDYyLjIgMjAuMiA1LjkgMjMuOS0xOC4yIDkuNHptMjkuOC0xMS41bC0xNC41LTYwLjMgNjcuNiA2Ny42LTUzLjEtNy4zem0uNSAxMS44bDEyLjQgMS42TDE2OC0xNy44bC0zNS43LTM1LjcgOS45LTkyLjF6bTI0LjIgMy41bDE0LjggMi4xIDIxLjEgNDUuNS0yNS44IDQ3LjktMTAuMS05NS41em0tNjIuNy05OC44bDcuMyA3LjMgOS45IDQxLjEtNDkuNS0xNiAzMi4zLTMyLjR6bS04Ni41IDg2LjZsMjIuMS0yMi4xTDQ4LTE3MWwtOC45IDYyLjktOS4xIDQuNy0yOC4xLTExLjUtMjMtNjkuMiAzMCAzMGMyLjQgMS45IDUuOSAxLjkgOC4zLS4yek0tNzYtMjM5LjJsMzYuNCAzNi4zIDYuMyAxOS02My4zLTUuNHYtMjkuOGwyMC42LTIwLjF6TS0yMjAtOThsNjkgMzIuNi0xLjkgMzEtNjEuNy0xMC44LTI5LjMtMjkuM0wtMjIwLTk4em01NS42IDEwMy4ybC0zNS45LTM1LjkgNDYuNCA4LjItMS4yIDE4LjEtOS4zIDkuNnpNLTgwLTc5LjNsLTYyLjQgNjIuNCAxLjYtMjYuNy4yLS4yIDc3LjQtODUuNiAxNy4xIDctMy41IDIxLjYtNi4xIDM3LjUtMTYtMTZjLTIuMi0yLjMtNS45LTIuMy04LjMgMHpNMTQuMSA2LjRMMS40LTYuMy0yLjgtNjhsNDYuNCAyOC42IDQuMiAxMi4yTDE0LjEgNi40ek0xMDMtODBjLTEuNCAwLTMgLjUtNC4yIDEuNmwtNDIgNDItNi4xLTE4LjFMODgtMTIwLjdsNDItMjEuNi04LjQgNzguMS0xNC4zLTE0LjNjLTEuMi0xLTIuOS0xLjUtNC4zLTEuNXptODkuMiA4Ni44TDE4MC45LTQuNWwtMi4zLTIxLjYgMjkuOC01NS40IDIyLjggNDkuMy0zOSAzOXoiIGZpbGw9IiB1cmwoI2FudC13ZWIzLWljb24tbXlzdC1jb2xvcmZ1bC1wYXRoMF9maWxsXzFfKSIvPjwvZz48L3N2Zz4=) */
export const MystColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-myst-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

MystColorful.displayName = 'MystColorful';
