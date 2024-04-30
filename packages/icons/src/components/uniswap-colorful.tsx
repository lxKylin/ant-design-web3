// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';

import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/uniswap-colorful.svg';

/**![UniswapColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2OC4zIDE5My44Ij4KPHBhdGggZmlsbD0iI0ZGMDA3QSIgZD0iTTY2LDQ0LjFjLTIuMS0wLjMtMi4yLTAuNC0xLjItMC41YzEuOS0wLjMsNi4zLDAuMSw5LjQsMC44YzcuMiwxLjcsMTMuNyw2LjEsMjAuNiwxMy44bDEuOCwyLjFsMi42LTAuNAoJYzExLjEtMS44LDIyLjUtMC40LDMyLDRjMi42LDEuMiw2LjcsMy42LDcuMiw0LjJjMC4yLDAuMiwwLjUsMS41LDAuNywyLjhjMC43LDQuNywwLjQsOC4yLTEuMSwxMC45Yy0wLjgsMS41LTAuOCwxLjktMC4zLDMuMgoJYzAuNCwxLDEuNiwxLjcsMi43LDEuN2MyLjQsMCw0LjktMy44LDYuMS05LjFsMC41LTIuMWwwLjksMWM1LjEsNS43LDkuMSwxMy42LDkuNywxOS4ybDAuMiwxLjVsLTAuOS0xLjNjLTEuNS0yLjMtMi45LTMuOC00LjgtNS4xCgljLTMuNC0yLjMtNy0zLTE2LjUtMy41Yy04LjYtMC41LTEzLjUtMS4yLTE4LjMtMi44Yy04LjItMi43LTEyLjQtNi4yLTIyLjEtMTkuMWMtNC4zLTUuNy03LTguOC05LjctMTEuNAoJQzc5LjYsNDguMyw3My43LDQ1LjMsNjYsNDQuMXoiLz4KPHBhdGggZmlsbD0iI0ZGMDA3QSIgZD0iTTE0MC41LDU2LjhjMC4yLTMuOCwwLjctNi4zLDEuOC04LjZjMC40LTAuOSwwLjgtMS43LDAuOS0xLjdjMC4xLDAtMC4xLDAuNy0wLjQsMS41Yy0wLjgsMi4yLTAuOSw1LjMtMC40LDguOAoJYzAuNyw0LjUsMSw1LjEsNS44LDEwYzIuMiwyLjMsNC44LDUuMiw1LjgsNi40bDEuNywyLjJsLTEuNy0xLjZjLTIuMS0yLTYuOS01LjgtOC02LjNjLTAuNy0wLjQtMC44LTAuNC0xLjMsMC4xCgljLTAuNCwwLjQtMC41LDEtMC41LDMuOWMtMC4xLDQuNS0wLjcsNy4zLTIuMiwxMC4yYy0wLjgsMS41LTAuOSwxLjItMC4yLTAuNWMwLjUtMS4zLDAuNi0xLjksMC42LTYuMmMwLTguNy0xLTEwLjgtNy4xLTE0LjMKCWMtMS41LTAuOS00LjEtMi4yLTUuNi0yLjljLTEuNi0wLjctMi44LTEuMy0yLjctMS4zYzAuMi0wLjIsNi4xLDEuNSw4LjQsMi41YzMuNSwxLjQsNC4xLDEuNSw0LjUsMS40CglDMTQwLjIsNjAuMSwxNDAuNCw1OS4zLDE0MC41LDU2Ljh6Ii8+CjxwYXRoIGZpbGw9IiNGRjAwN0EiIGQ9Ik03MC4xLDcxLjdjLTQuMi01LjgtNi45LTE0LjgtNi4zLTIxLjVsMC4yLTIuMWwxLDAuMmMxLjgsMC4zLDQuOSwxLjUsNi40LDIuNGM0LDIuNCw1LjgsNS43LDcuNSwxMy45CgljMC41LDIuNCwxLjIsNS4yLDEuNSw2LjFjMC41LDEuNSwyLjQsNSw0LDcuMmMxLjEsMS42LDAuNCwyLjQtMi4xLDIuMkM3OC41LDc5LjcsNzMuNCw3Ni4yLDcwLjEsNzEuN3oiLz4KPHBhdGggZmlsbD0iI0ZGMDA3QSIgZD0iTTEzNS40LDExNS4yYy0xOS44LTgtMjYuOC0xNC45LTI2LjgtMjYuNmMwLTEuNywwLjEtMy4xLDAuMS0zLjFjMC4xLDAsMC44LDAuNiwxLjcsMS4zYzQsMy4yLDguNSw0LjYsMjEsNi40CgljNy4zLDEuMSwxMS41LDEuOSwxNS4zLDMuMmMxMi4xLDQsMTkuNiwxMi4yLDIxLjQsMjMuM2MwLjUsMy4yLDAuMiw5LjMtMC42LDEyLjVjLTAuNywyLjUtMi43LDcuMS0zLjIsNy4yYy0wLjEsMC0wLjMtMC41LTAuMy0xLjMKCWMtMC4yLTQuMi0yLjMtOC4yLTUuOC0xMS4zQzE1NCwxMjMuMiwxNDguNiwxMjAuNSwxMzUuNCwxMTUuMnoiLz4KPHBhdGggZmlsbD0iI0ZGMDA3QSIgZD0iTTEyMS40LDExOC41Yy0wLjItMS41LTAuNy0zLjQtMS00LjJsLTAuNS0xLjVsMC45LDEuMWMxLjMsMS41LDIuMywzLjMsMy4yLDUuOGMwLjcsMS45LDAuNywyLjUsMC43LDUuNgoJYzAsMy0wLjEsMy43LTAuNyw1LjRjLTEsMi43LTIuMiw0LjYtNC4yLDYuN2MtMy42LDMuNy04LjMsNS43LTE1LDYuNmMtMS4yLDAuMS00LjYsMC40LTcuNiwwLjZjLTcuNSwwLjQtMTIuNSwxLjItMTcsMi44CgljLTAuNiwwLjItMS4yLDAuNC0xLjMsMC4zYy0wLjItMC4yLDIuOS0yLDUuNC0zLjJjMy41LTEuNyw3LjEtMi42LDE1LTRjMy45LTAuNiw3LjktMS40LDguOS0xLjhDMTE4LjEsMTM1LjYsMTIzLDEyNy45LDEyMS40LDExOC41Cgl6Ii8+CjxwYXRoIGZpbGw9IiNGRjAwN0EiIGQ9Ik0xMzAuNSwxMzQuNmMtMi42LTUuNy0zLjItMTEuMS0xLjgtMTYuMmMwLjItMC41LDAuNC0xLDAuNi0xYzAuMiwwLDAuOCwwLjMsMS40LDAuN2MxLjIsMC44LDMuNywyLjIsMTAuMSw1LjcKCWM4LjEsNC40LDEyLjcsNy44LDE1LjksMTEuN2MyLjgsMy40LDQuNSw3LjMsNS4zLDEyLjFjMC41LDIuNywwLjIsOS4yLTAuNSwxMS45Yy0yLjIsOC41LTcuMiwxNS4zLTE0LjUsMTkuMmMtMS4xLDAuNi0yLDEtMi4xLDEKCWMtMC4xLDAsMC4zLTEsMC45LTIuMmMyLjQtNS4xLDIuNy0xMCwwLjktMTUuNWMtMS4xLTMuNC0zLjQtNy41LTgtMTQuNEMxMzMuMiwxMzkuNiwxMzEuOSwxMzcuNSwxMzAuNSwxMzQuNnoiLz4KPHBhdGggZmlsbD0iI0ZGMDA3QSIgZD0iTTU2LDE2NS4yYzcuNC02LjIsMTYuNS0xMC42LDI0LjktMTJjMy42LTAuNiw5LjYtMC40LDEyLjksMC41YzUuMywxLjQsMTAuMSw0LjQsMTIuNiw4LjEKCWMyLjQsMy42LDMuNSw2LjcsNC42LDEzLjZjMC40LDIuNywwLjksNS41LDEsNi4xYzAuOCwzLjYsMi40LDYuNCw0LjQsNy45YzMuMSwyLjMsOC41LDIuNCwxMy44LDAuNGMwLjktMC4zLDEuNy0wLjYsMS43LTAuNQoJYzAuMiwwLjItMi41LDItNC4zLDIuOWMtMi41LDEuMy00LjUsMS43LTcuMiwxLjdjLTQuOCwwLTguOS0yLjUtMTIuMi03LjVjLTAuNy0xLTIuMS0zLjktMy4zLTYuNmMtMy41LTguMS01LjMtMTAuNS05LjQtMTMuMgoJYy0zLjYtMi4zLTguMi0yLjgtMTEuNy0xLjFjLTQuNiwyLjItNS44LDguMS0yLjYsMTEuN2MxLjMsMS41LDMuNywyLjcsNS43LDNjMy43LDAuNSw2LjktMi40LDYuOS02LjFjMC0yLjQtMC45LTMuOC0zLjMtNC45CgljLTMuMi0xLjQtNi43LDAuMi02LjYsMy4zYzAsMS4zLDAuNiwyLjEsMS45LDIuN2MwLjgsMC40LDAuOCwwLjQsMC4yLDAuM2MtMi45LTAuNi0zLjYtNC4yLTEuMy02LjVjMi44LTIuOCw4LjctMS42LDEwLjcsMi4zCgljMC44LDEuNiwwLjksNC44LDAuMiw2LjhjLTEuNyw0LjQtNi41LDYuNy0xMS40LDUuNGMtMy4zLTAuOS00LjctMS44LTguNy01LjljLTctNy4yLTkuNy04LjYtMTkuNy0xMC4xbC0xLjktMC4zTDU2LDE2NS4yeiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZGMDA3QSIgZD0iTTMuNCw0LjNjMjMuMywyOC4zLDU5LjIsNzIuMyw2MSw3NC43YzEuNSwyLDAuOSwzLjktMS42LDUuM2MtMS40LDAuOC00LjMsMS42LTUuNywxLjZjLTEuNiwwLTMuNS0wLjgtNC44LTIuMQoJYy0wLjktMC45LTQuOC02LjYtMTMuNi0yMC4zYy02LjctMTAuNS0xMi40LTE5LjItMTIuNS0xOS4zQzI1LjgsNDQsMjUuOCw0NCwzOCw2NS44QzQ1LjcsNzkuNSw0OC4yLDg0LjQsNDguMiw4NWMwLDEuMy0wLjQsMi0yLDMuOAoJYy0yLjcsMy0zLjksNi40LTQuOCwxMy41Yy0xLDcuOS0zLjcsMTMuNS0xMS40LDIzYy00LjUsNS42LTUuMiw2LjYtNi4zLDguOWMtMS40LDIuOC0xLjgsNC40LTIsOGMtMC4yLDMuOCwwLjIsNi4yLDEuMyw5LjgKCWMxLDMuMiwyLjEsNS4zLDQuOCw5LjRjMi4zLDMuNiwzLjcsNi4zLDMuNyw3LjNjMCwwLjgsMC4yLDAuOCwzLjgsMGM4LjYtMiwxNS43LTUuNCwxOS42LTkuNmMyLjQtMi42LDMtNCwzLTcuNgoJYzAtMi4zLTAuMS0yLjgtMC43LTQuMmMtMS0yLjItMi45LTQtNy02LjhjLTUuNC0zLjctNy43LTYuNy04LjMtMTAuN2MtMC41LTMuNCwwLjEtNS43LDMuMS0xMmMzLjEtNi41LDMuOS05LjIsNC40LTE1LjgKCWMwLjMtNC4yLDAuOC01LjksMi03LjJjMS4zLTEuNCwyLjQtMS45LDUuNS0yLjNjNS4xLTAuNyw4LjQtMiwxMS00LjVjMi4zLTIuMSwzLjMtNC4yLDMuNC03LjNsMC4xLTIuM0w3MC4xLDc3QzY1LjQsNzEuNiwwLjMsMCwwLDAKCUMtMC4xLDAsMS41LDEuOSwzLjQsNC4zeiBNMzQuMSwxNDYuNWMxLjEtMS45LDAuNS00LjMtMS4zLTUuNWMtMS43LTEuMS00LjMtMC42LTQuMywwLjljMCwwLjQsMC4yLDAuOCwwLjgsMWMwLjksMC41LDEsMSwwLjMsMi4xCgljLTAuNywxLjEtMC43LDIuMSwwLjIsMi44QzMxLjIsMTQ4LjksMzMuMSwxNDguMywzNC4xLDE0Ni41eiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZGMDA3QSIgZD0iTTc0LjYsOTMuOWMtMi40LDAuNy00LjcsMy4zLTUuNCw1LjljLTAuNCwxLjYtMC4yLDQuNSwwLjUsNS40YzEuMSwxLjQsMi4xLDEuOCw0LjksMS44CgljNS41LDAsMTAuMi0yLjQsMTAuNy01LjNjMC41LTIuNC0xLjYtNS43LTQuNS03LjJDNzkuMyw5My43LDc2LjIsOTMuNCw3NC42LDkzLjl6IE04MSw5OC45YzAuOC0xLjIsMC41LTIuNS0xLTMuNAoJYy0yLjctMS43LTYuOC0wLjMtNi44LDIuM2MwLDEuMywyLjEsMi43LDQuMSwyLjdDNzguNiwxMDAuNSw4MC40LDk5LjcsODEsOTguOXoiLz4KPC9zdmc+Cg==) */
export const UniswapColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-uniswap-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

UniswapColorful.displayName = 'UniswapColorful';
