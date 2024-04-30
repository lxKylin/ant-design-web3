// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';

import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/tem-circle-colorful.svg';

/**![TemCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zOnhvZG09Imh0dHA6Ly93d3cuY29yZWwuY29tL2NvcmVsZHJhdy9vZG0vMjAwMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi10ZW0tY2lyY2xlLWNvbG9yZnVsLUxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjUwMCAyNTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAwIDI1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjxnIGlkPSJhbnQtd2ViMy1pY29uLXRlbS1jaXJjbGUtY29sb3JmdWwtTGF5ZXJfeDAwMjBfMSI+Cgk8cGF0aCBkPSJNMTI1MiwxNDk3YzM4NCwzMTgsNzg2LDQzNSwxMDE2LDQ3NmMtMjI2LDMxOS01OTYsNTI3LTEwMTcsNTI3cy03OTEtMjA5LTEwMTctNTI3YzIzMy00MSw2MzQtMTU4LDEwMTctNDc2ICAgbDAsMGgybDAsMEgxMjUyeiBNMTI1MCwxMzg0TDEyNTAsMTM4NGMwLDAtMjQzLDIwMi03MDUsMjkxYy0xODUsMzQtMzQyLDMxLTQ2NiwxMGMtNTEtMTQwLTc5LTI4OC03OS00MzVDMCw1NzksNTMxLDI3LDExOTUsMCAgIGwtNjksMjk1bDEyMy05MmwxMjMsOTJMMTMwMywwYzY2NCwyNywxMTk1LDU3OSwxMTk1LDEyNTBjMCwxNTQtMjcsMzAxLTc5LDQzNWMtMTIzLDIxLTI4MSwyNC00NjYtMTBjLTQ2Mi04OS03MDUtMjkxLTcwNS0yOTFsMCwwICAgbDAsMEgxMjUweiBNNzE2LDEyMzBjLTM1Myw0NS02MzQtNzktNjM0LTc5bDMwOCwyNzdsMCwwbDIwOSwxODhjMCwwLTM4LTEyMywyNy0xODhjMTY0LTE3LDM5Ny04Miw2MjMtMjU3YzIyOSwxNzQsNDU5LDIzNiw2MjQsMjUzICAgYzY1LDY1LDI3LDE4OCwyNywxODhsMjA5LTE4NWwzMDgtMjc3YzAsMC0yODQsMTIzLTYzNCw3OWMtMzIxLTQwLTUyMS0xNzgtNTM0LTE4OHYtMWMwLDAsMCwwLTEsMGwwLDBsMCwwYy0xMyw3LTIxMCwxNDUtNTM0LDE4OCAgIEw3MTYsMTIzMHogTTE1MjEsNzU3YzY1LDIxLDc5LDE0NCw3OSwxNDRsMzEyLTI3MWMwLDAtMTk1LDM0LTM4MCwxMGMtMTcyLTI0LTI3Ny0xMzYtMjgxLTE0MGwwLDBsMCwwbDAsMGwwLDAgICBjLTQsNC0xMDYsMTIwLTI3NywxNDBjLTE4NSwyNC0zODAtMTAtMzgwLTEwbDMxMiwyNzFjMCwzLDE0LTEyMCw3NS0xNDBjODktMjQsMTg4LTY4LDI3MC0xNDdjNzksNzksMTg1LDEyMCwyNzEsMTQ0TDE1MjEsNzU3eiAgICBNMTY3NSwxMDYyYzEwMywyNywxMTMsMTQwLDExMywxNDBsMTMwLTEyMGwyMTItMTk1YzAsMC0yNDcsNzItNTAwLDM4Yy0yMzUtMzAtMzc1LTE3Mi0zODAtMTc4bDAsMGwwLDBsMCwwbDAsMCAgIGMtNSw1LTE0NSwxNDgtMzgwLDE3OGMtMjUzLDM0LTUwMC0zOC01MDAtMzhsMjEyLDE5NWwwLDBsMTMwLDEyMGMwLDAsMTAtMTEzLDExMy0xNDBjMTIzLTI3LDI4MS04Miw0MjQtMTk4bDAsMCAgIGMxNDcsMTE2LDMwMiwxNzEsNDI1LDE5OEgxNjc1eiBNMTM5MSw0OTdjNTgsMzQsMTIzLDExMCwxMjMsMTEwbDIyNi0yMDVjMCwwLTE3OCwyMS0yOTEtMjdjLTEzMS01NC0xOTYtMTI3LTE5OS0xMzBsMCwwbDAsMGwwLDAgICBsMCwwYy0zLDMtNjgsODMtMTk5LDEzN2MtMTEzLDQ1LTI5MSwyNy0yOTEsMjdsMjI2LDIwMmMwLTMsNjUtNzUsMTIzLTExM2M0OC0yNCw5OS02NSwxNDAtMTIwYzQxLDYyLDkzLDk2LDE0MCwxMjBMMTM5MSw0OTd6ICAgIE0xMTIwLDE3NjhjLTcyLDcyLTcyLDE4OCwwLDI2MGMxNywxNyw0MSwzMSw2Miw0MXYyODFoMTM3di0yODFjMjQtMTAsNDUtMjQsNjItNDFjNzItNzIsNzItMTg4LDAtMjYwYy02OS03Mi0xODgtNzItMjYwLDBIMTEyMHoiIHN0eWxlPSJmaWxsOiAjQTQwQjVEOyIvPgo8L2c+Cjwvc3ZnPgo=) */
export const TemCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-tem-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

TemCircleColorful.displayName = 'TemCircleColorful';
