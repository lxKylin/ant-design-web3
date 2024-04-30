// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';

import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/uni-circle-filled.svg';

/**![UniCircleFilled](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+dW5pc3dhcC11bmktbG9nbzwvdGl0bGU+CiAgICA8ZyBpZD0idW5pc3dhcC11bmktbG9nbyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Iue8lue7hCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyLCAxMTIpIiBmaWxsPSIjNTU1NTU1Ij4KICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBjeD0iNDAwIiBjeT0iNDAwIiByPSI0MDAiPjwvY2lyY2xlPgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTIsIDIxMikiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjA0LjI2ODE1NCwxMzYuNDYyMDk0IEMxOTcuNzY5MTUsMTM1LjUzMzc4IDE5Ny40NTk2NzQsMTM1LjIyNDM0MiAyMDAuNTU0NDM3LDEzNC45MTQ5MDUgQzIwNi40MzQ0ODgsMTMzLjk4NjU5MSAyMjAuMDUxNDQ3LDEzNS4yMjQzNDIgMjI5LjY0NTIxNCwxMzcuMzkwNDA3IEMyNTEuOTI3NTExLDE0Mi42NTA4NTEgMjcyLjA0MzQ3MywxNTYuMjY2MTE3IDI5My4zOTczNDEsMTgwLjA5MjgzMSBMMjk4Ljk2NzkxNSwxODYuNTkxMDI2IEwzMDcuMDE0MywxODUuMzUzMjc1IEMzNDEuMzY2MTc1LDE3OS43ODMzOTQgMzc2LjY0NjQ3OCwxODQuMTE1NTIzIDQwNi4wNDY3MzEsMTk3LjczMDc4OSBDNDE0LjA5MzExNiwyMDEuNDQ0MDQzIDQyNi43ODE2NDYsMjA4Ljg3MDU1MiA0MjguMzI5MDI4LDIxMC43MjcxNzkgQzQyOC45NDc5OCwyMTEuMzQ2MDU1IDQyOS44NzY0MDksMjE1LjM2ODc0NyA0MzAuNDk1MzYyLDIxOS4zOTE0MzkgQzQzMi42NjE2OTcsMjMzLjkzNTAxOCA0MzEuNzMzMjY3LDI0NC43NjUzNDMgNDI3LjA5MTEyMiwyNTMuMTIwMTY1IEM0MjQuNjE1MzEyLDI1Ny43NjE3MzMgNDI0LjYxNTMxMiwyNTguOTk5NDg0IDQyNi4xNjI2OTMsMjYzLjAyMjE3NiBDNDI3LjQwMDU5OSwyNjYuMTE2NTU1IDQzMS4xMTQzMTUsMjY4LjI4MjYyIDQzNC41MTg1NTUsMjY4LjI4MjYyIEM0NDEuOTQ1OTg3LDI2OC4yODI2MiA0NDkuNjgyODk2LDI1Ni41MjM5ODEgNDUzLjM5NjYxMiwyNDAuMTIzNzc1IEw0NTQuOTQzOTkzLDIzMy42MjU1OCBMNDU3LjcyOTI4LDIzNi43MTk5NTkgQzQ3My41MTI1NzQsMjU0LjM1NzkxNiA0ODUuODkxNjI4LDI3OC44MDM1MDcgNDg3Ljc0ODQ4NiwyOTYuMTMyMDI3IEw0ODguMzY3NDM5LDMwMC43NzM1OTUgTDQ4NS41ODIxNTIsMjk2Ljc1MDkwMyBDNDgwLjk0MDAwNiwyODkuNjMzODMyIDQ3Ni42MDczMzgsMjg0Ljk5MjI2NCA0NzAuNzI3Mjg3LDI4MC45Njk1NzIgQzQ2MC4yMDUwOTEsMjczLjg1MjUwMSA0NDkuMDYzOTQzLDI3MS42ODY0MzYgNDE5LjY2MzY5LDI3MC4xMzkyNDcgQzM5My4wNDg3MjQsMjY4LjU5MjA1OCAzNzcuODg0MzgzLDI2Ni40MjU5OTMgMzYzLjAyOTUxOSwyNjEuNDc0OTg3IEMzMzcuNjUyNDU4LDI1My4xMjAxNjUgMzI0LjY1NDQ1MiwyNDIuMjg5ODQgMjk0LjYzNTI0NiwyMDIuMzcyMzU3IEMyODEuMzI3NzY0LDE4NC43MzQzOTkgMjcyLjk3MTkwMiwxNzUuMTQxODI2IDI2NC42MTYwNDEsMTY3LjA5NjQ0MSBDMjQ2LjM1NjkzNywxNDkuNDU4NDg0IDIyOC4wOTc4MzIsMTQwLjE3NTM0OCAyMDQuMjY4MTU0LDEzNi40NjIwOTQgWiIgaWQ9Iui3r+W+hCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik00MzQuODI4MDMxLDE3NS43NjA3MDEgQzQzNS40NDY5ODQsMTY0LjAwMjA2MyA0MzYuOTk0MzY1LDE1Ni4yNjYxMTcgNDQwLjM5ODYwNSwxNDkuMTQ5MDQ2IEM0NDEuNjM2NTExLDE0Ni4zNjQxMDUgNDQyLjg3NDQxNiwxNDMuODg4NjAyIDQ0My4xODM4OTIsMTQzLjg4ODYwMiBDNDQzLjQ5MzM2OSwxNDMuODg4NjAyIDQ0Mi44NzQ0MTYsMTQ2LjA1NDY2NyA0NDEuOTQ1OTg3LDE0OC41MzAxNyBDNDM5LjQ3MDE3NiwxNTUuMzM3ODAzIDQzOS4xNjA3LDE2NC45MzAzNzYgNDQwLjcwODA4MSwxNzUuNzYwNzAxIEM0NDIuODc0NDE2LDE4OS42ODU0MDUgNDQzLjgwMjg0NSwxOTEuNTQyMDMyIDQ1OC42NTc3MSwyMDYuNzA0NDg3IEM0NjUuNDY2MTg5LDIxMy44MjE1NTggNDczLjUxMjU3NCwyMjIuNzk1MjU1IDQ3Ni42MDczMzgsMjI2LjUwODUxIEw0ODEuODY4NDM1LDIzMy4zMTYxNDIgTDQ3Ni42MDczMzgsMjI4LjM2NTEzNyBDNDcwLjEwODMzNCwyMjIuMTc2MzggNDU1LjI1MzQ3LDIxMC40MTc3NDEgNDUxLjg0OTIzLDIwOC44NzA1NTIgQzQ0OS42ODI4OTYsMjA3LjYzMjggNDQ5LjM3MzQxOSwyMDcuNjMyOCA0NDcuODI2MDM3LDIwOS4xNzk5OSBDNDQ2LjU4ODEzMiwyMTAuNDE3NzQxIDQ0Ni4yNzg2NTYsMjEyLjI3NDM2OCA0NDYuMjc4NjU2LDIyMS4yNDgwNjYgQzQ0NS45NjkxNzksMjM1LjE3Mjc2OSA0NDQuMTEyMzIxLDI0My44MzcwMjkgNDM5LjQ3MDE3NiwyNTIuODEwNzI3IEM0MzYuOTk0MzY1LDI1Ny40NTIyOTUgNDM2LjY4NDg4OSwyNTYuNTIzOTgxIDQzOC44NTEyMjMsMjUxLjI2MzUzOCBDNDQwLjM5ODYwNSwyNDcuMjQwODQ2IDQ0MC43MDgwODEsMjQ1LjM4NDIxOSA0NDAuNzA4MDgxLDIzMi4wNzgzOTEgQzQ0MC43MDgwODEsMjA1LjE1NzI5OCA0MzcuNjEzMzE4LDE5OC42NTkxMDMgNDE4LjczNTI2MSwxODcuODI4Nzc4IEM0MTQuMDkzMTE2LDE4NS4wNDM4MzcgNDA2LjA0NjczMSwxODEuMDIxMTQ1IDQwMS40MDQ1ODYsMTc4Ljg1NTA4IEMzOTYuNDUyOTY0LDE3Ni42ODkwMTUgMzkyLjczOTI0OCwxNzQuODMyMzg4IDM5My4wNDg3MjQsMTc0LjgzMjM4OCBDMzkzLjY2NzY3NywxNzQuMjEzNTEyIDQxMS45MjY3ODEsMTc5LjQ3Mzk1NiA0MTkuMDQ0NzM3LDE4Mi41NjgzMzQgQzQyOS44NzY0MDksMTg2LjkwMDQ2NCA0MzEuNzMzMjY3LDE4Ny4yMDk5MDIgNDMyLjk3MTE3MywxODYuOTAwNDY0IEM0MzMuODk5NjAyLDE4NS45NzIxNTEgNDM0LjUxODU1NSwxODMuNDk2NjQ4IDQzNC44MjgwMzEsMTc1Ljc2MDcwMSBaIiBpZD0i6Lev5b6EIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTIxNi45NTY2ODQsMjIxLjg2Njk0MiBDMjAzLjk1ODY3NywyMDMuOTE5NTQ2IDE5NS42MDI4MTYsMTc2LjA3MDEzOSAxOTcuNDU5Njc0LDE1NS4zMzc4MDMgTDE5OC4wNzg2MjcsMTQ4LjgzOTYwOCBMMjAxLjE3MzM5LDE0OS40NTg0ODQgQzIwNi43NDM5NjQsMTUwLjM4Njc5NyAyMTYuMzM3NzMxLDE1NC4xMDAwNTIgMjIwLjk3OTg3NiwxNTYuODg0OTkyIEMyMzMuMzU4OTMsMTY0LjMxMTUwMSAyMzguOTI5NTA0LDE3NC41MjI5NSAyNDQuMTkwNjAyLDE5OS44OTY4NTQgQzI0NS43Mzc5ODQsMjA3LjMyMzM2MyAyNDcuOTA0MzE4LDIxNS45ODc2MjIgMjQ4LjgzMjc0NywyMTguNzcyNTYzIEMyNTAuMzgwMTI5LDIyMy40MTQxMzEgMjU2LjI2MDE4LDIzNC4yNDQ0NTYgMjYxLjIxMTgwMSwyNDEuMDUyMDg5IEMyNjQuNjE2MDQxLDI0Ni4wMDMwOTQgMjYyLjQ0OTcwNywyNDguNDc4NTk3IDI1NC43MTI3OTgsMjQ3Ljg1OTcyMiBDMjQyLjk1MjY5NywyNDYuNjIxOTcgMjI3LjE2OTQwMywyMzUuNzkxNjQ1IDIxNi45NTY2ODQsMjIxLjg2Njk0MiBaIiBpZD0i6Lev5b6EIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTQxOS4wNDQ3MzcsMzU2LjQ3MjQwOCBDMzU3Ljc2ODQyMSwzMzEuNzE3MzggMzM2LjEwNTA3NywzMTAuMzY2MTY4IDMzNi4xMDUwNzcsMjc0LjE2MTkzOSBDMzM2LjEwNTA3NywyNjguOTAxNDk2IDMzNi40MTQ1NTMsMjY0LjU2OTM2NiAzMzYuNDE0NTUzLDI2NC41NjkzNjYgQzMzNi43MjQwMjksMjY0LjU2OTM2NiAzMzguODkwMzY0LDI2Ni40MjU5OTMgMzQxLjY3NTY1MSwyNjguNTkyMDU4IEMzNTQuMDU0NzA1LDI3OC40OTQwNjkgMzY3Ljk4MTE0LDI4Mi44MjYxOTkgNDA2LjY2NTY4NCwyODguMzk2MDggQzQyOS4yNTc0NTcsMjkxLjc5OTg5NyA0NDIuMjU1NDYzLDI5NC4yNzU0IDQ1NC4wMTU1NjQsMjk4LjI5ODA5MiBDNDkxLjQ2MjIwMiwzMTAuNjc1NjA2IDUxNC42NzI5MjgsMzM2LjA0OTUxIDUyMC4yNDM1MDIsMzcwLjM5NzExMiBDNTIxLjc5MDg4NCwzODAuMjk5MTIzIDUyMC44NjI0NTUsMzk5LjE3NDgzMiA1MTguMzg2NjQ0LDQwOS4wNzY4NDQgQzUxNi4yMjAzMSw0MTYuODEyNzkgNTEwLjAzMDc4Myw0MzEuMDQ2OTMxIDUwOC40ODM0MDEsNDMxLjM1NjM2OSBDNTA4LjE3MzkyNSw0MzEuMzU2MzY5IDUwNy41NTQ5NzIsNDI5LjgwOTE4IDUwNy41NTQ5NzIsNDI3LjMzMzY3NyBDNTA2LjkzNjAxOSw0MTQuMzM3Mjg3IDUwMC40MzcwMTYsNDAxLjk1OTc3MyA0ODkuNjA1MzQ0LDM5Mi4zNjcyIEM0NzYuNjA3MzM4LDM4MS4yMjc0MzcgNDU5Ljg5NTYxNSwzNzIuODcyNjE1IDQxOS4wNDQ3MzcsMzU2LjQ3MjQwOCBaIiBpZD0i6Lev5b6EIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTM3NS43MTgwNDksMzY2LjY4Mzg1OCBDMzc1LjA5OTA5NiwzNjIuMDQyMjkgMzczLjU1MTcxNSwzNTYuMTYyOTcxIDM3Mi42MjMyODYsMzUzLjY4NzQ2OCBMMzcxLjA3NTkwNCwzNDkuMDQ1OSBMMzczLjg2MTE5MSwzNTIuNDQ5NzE2IEMzNzcuODg0MzgzLDM1Ny4wOTEyODQgMzgwLjk3OTE0NywzNjIuNjYxMTY2IDM4My43NjQ0MzQsMzcwLjM5NzExMiBDMzg1LjkzMDc2OCwzNzYuMjc2NDMxIDM4NS45MzA3NjgsMzc4LjEzMzA1OCAzODUuOTMwNzY4LDM4Ny43MjU2MzIgQzM4NS45MzA3NjgsMzk3LjAwODc2NyAzODUuNjIxMjkyLDM5OS4xNzQ4MzIgMzgzLjc2NDQzNCw0MDQuNDM1Mjc2IEMzODAuNjY5NjcsNDEyLjc5MDA5OCAzNzYuOTU1OTU0LDQxOC42Njk0MTcgMzcwLjc2NjQyNyw0MjUuMTY3NjEyIEMzNTkuNjI1Mjc5LDQzNi42MTY4MTMgMzQ1LjA3OTg5MSw0NDIuODA1NTcgMzI0LjM0NDk3Niw0NDUuNTkwNTExIEMzMjAuNjMxMjU5LDQ0NS44OTk5NDggMzEwLjEwOTA2NCw0NDYuODI4MjYyIDMwMC44MjQ3NzMsNDQ3LjQ0NzEzOCBDMjc3LjYxNDA0Nyw0NDguNjg0ODg5IDI2Mi4xNDAyMyw0NTEuMTYwMzkyIDI0OC4yMTM3OTUsNDU2LjExMTM5OCBDMjQ2LjM1NjkzNyw0NTYuNzMwMjczIDI0NC41MDAwNzksNDU3LjM0OTE0OSAyNDQuMTkwNjAyLDQ1Ny4wMzk3MTEgQzI0My41NzE2NDksNDU2LjQyMDgzNSAyNTMuMTY1NDE2LDQ1MC44NTA5NTQgMjYwLjkwMjMyNSw0NDcuMTM3NyBDMjcxLjczMzk5Nyw0NDEuODc3MjU2IDI4Mi44NzUxNDUsNDM5LjA5MjMxNiAzMDcuMzIzNzc3LDQzNC43NjAxODYgQzMxOS4zOTMzNTQsNDMyLjkwMzU1OSAzMzEuNzcyNDA4LDQzMC40MjgwNTYgMzM0Ljg2NzE3MSw0MjkuMTkwMzA0IEMzNjUuNTA1MzMsNDE5LjU5NzczMSAzODAuNjY5NjcsMzk1Ljc3MTAxNiAzNzUuNzE4MDQ5LDM2Ni42ODM4NTggWiIgaWQ9Iui3r+W+hCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik00MDMuODgwMzk2LDQxNi41MDMzNTIgQzM5NS44MzQwMTEsMzk4Ljg2NTM5NSAzOTMuOTc3MTUzLDM4Mi4xNTU3NSAzOTguMzA5ODIyLDM2Ni4zNzQ0MiBDMzk4LjkyODc3NSwzNjQuODI3MjMxIDM5OS41NDc3MjgsMzYzLjI4MDA0MSA0MDAuMTY2NjgsMzYzLjI4MDA0MSBDNDAwLjc4NTYzMywzNjMuMjgwMDQxIDQwMi42NDI0OTEsMzY0LjIwODM1NSA0MDQuNDk5MzQ5LDM2NS40NDYxMDYgQzQwOC4yMTMwNjUsMzY3LjkyMTYwOSA0MTUuOTQ5OTc0LDM3Mi4yNTM3MzkgNDM1Ljc1NjQ2LDM4My4wODQwNjQgQzQ2MC44MjQwNDQsMzk2LjY5OTMzIDQ3NS4wNTk5NTYsNDA3LjIyMDIxNyA0ODQuOTYzMTk5LDQxOS4yODgyOTMgQzQ5My42Mjg1MzcsNDI5LjgwOTE4IDQ5OC44ODk2MzQsNDQxLjg3NzI1NiA1MDEuMzY1NDQ1LDQ1Ni43MzAyNzMgQzUwMi45MTI4MjcsNDY1LjA4NTA5NSA1MDEuOTg0Mzk4LDQ4NS4xOTg1NTYgNDk5LjgxODA2Myw0OTMuNTUzMzc4IEM0OTMuMDA5NTg0LDUxOS44NTU1OTYgNDc3LjUzNTc2Nyw1NDAuODk3MzcgNDU0Ljk0Mzk5Myw1NTIuOTY1NDQ2IEM0NTEuNTM5NzU0LDU1NC44MjIwNzMgNDQ4Ljc1NDQ2Niw1NTYuMDU5ODI1IDQ0OC40NDQ5OSw1NTYuMDU5ODI1IEM0NDguMTM1NTE0LDU1Ni4wNTk4MjUgNDQ5LjM3MzQxOSw1NTIuOTY1NDQ2IDQ1MS4yMzAyNzcsNTQ5LjI1MjE5MiBDNDU4LjY1NzcxLDUzMy40NzA4NjEgNDU5LjU4NjEzOSw1MTguMzA4NDA2IDQ1NC4wMTU1NjQsNTAxLjI4OTMyNCBDNDUwLjYxMTMyNSw0OTAuNzY4NDM3IDQ0My40OTMzNjksNDc4LjA4MTQ4NSA0MjkuMjU3NDU3LDQ1Ni43MzAyNzMgQzQxMi4yMzYyNTgsNDMxLjk3NTI0NSA0MDguMjEzMDY1LDQyNS40NzcwNSA0MDMuODgwMzk2LDQxNi41MDMzNTIgWiIgaWQ9Iui3r+W+hCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNzMuMzIwNTE5LDUxMS4xOTEzMzYgQzE5Ni4yMjE3NjksNDkyLjAwNjE4OSAyMjQuMzg0MTE2LDQ3OC4zOTA5MjMgMjUwLjM4MDEyOSw0NzQuMDU4NzkzIEMyNjEuNTIxMjc4LDQ3Mi4yMDIxNjYgMjgwLjA4OTg1OCw0NzIuODIxMDQyIDI5MC4zMDI1NzgsNDc1LjYwNTk4MiBDMzA2LjcwNDgyNCw0NzkuOTM4MTEyIDMyMS41NTk2ODksNDg5LjIyMTI0OCAzMjkuMjk2NTk3LDUwMC42NzA0NDkgQzMzNi43MjQwMjksNTExLjgxMDIxMSAzNDAuMTI4MjY5LDUyMS40MDI3ODUgMzQzLjUzMjUwOSw1NDIuNzUzOTk3IEMzNDQuNzcwNDE0LDU1MS4xMDg4MTkgMzQ2LjMxNzc5Niw1NTkuNzczMDc5IDM0Ni42MjcyNzIsNTYxLjYyOTcwNiBDMzQ5LjEwMzA4Myw1NzIuNzY5NDY5IDM1NC4wNTQ3MDUsNTgxLjQzMzcyOSAzNjAuMjQ0MjMyLDU4Ni4wNzUyOTcgQzM2OS44Mzc5OTgsNTkzLjE5MjM2NyAzODYuNTQ5NzIxLDU5My41MDE4MDUgNDAyLjk1MTk2Nyw1ODcuMzEzMDQ4IEM0MDUuNzM3MjU0LDU4Ni4zODQ3MzQgNDA4LjIxMzA2NSw1ODUuNDU2NDIxIDQwOC4yMTMwNjUsNTg1Ljc2NTg1OSBDNDA4LjgzMjAxOCw1ODYuMzg0NzM0IDQwMC40NzYxNTcsNTkxLjk1NDYxNiAzOTQuOTA1NTgyLDU5NC43Mzk1NTYgQzM4Ny4xNjg2NzQsNTk4Ljc2MjI0OSAzODAuOTc5MTQ3LDYwMCAzNzIuNjIzMjg2LDYwMCBDMzU3Ljc2ODQyMSw2MDAgMzQ1LjA3OTg5MSw1OTIuMjY0MDU0IDMzNC44NjcxNzEsNTc2Ljc5MjE2MSBDMzMyLjcwMDgzNyw1NzMuNjk3NzgyIDMyOC4zNjgxNjgsNTY0LjcyNDA4NSAzMjQuNjU0NDUyLDU1Ni4zNjkyNjMgQzMxMy44MjI3OCw1MzEuMzA0Nzk2IDMwOC4yNTIyMDYsNTIzLjg3ODI4OCAyOTUuNTYzNjc2LDUxNS41MjM0NjYgQzI4NC40MjI1MjcsNTA4LjQwNjM5NSAyNzAuMTg2NjE1LDUwNi44NTkyMDYgMjU5LjM1NDk0Myw1MTIuMTE5NjQ5IEMyNDUuMTE5MDMxLDUxOC45MjcyODIgMjQxLjQwNTMxNSw1MzcuMTg0MTE2IDI1MS4zMDg1NTgsNTQ4LjMyMzg3OCBDMjU1LjMzMTc1MSw1NTIuOTY1NDQ2IDI2Mi43NTkxODMsNTU2LjY3ODcgMjY4Ljk0ODcxLDU1Ny42MDcwMTQgQzI4MC4zOTkzMzUsNTU5LjE1NDIwMyAyOTAuMzAyNTc4LDU1MC4xODA1MDUgMjkwLjMwMjU3OCw1MzguNzMxMzA1IEMyOTAuMzAyNTc4LDUzMS4zMDQ3OTYgMjg3LjUxNzI5MSw1MjYuOTcyNjY2IDI4MC4wODk4NTgsNTIzLjU2ODg1IEMyNzAuMTg2NjE1LDUxOS4yMzY3MiAyNTkuMzU0OTQzLDUyNC4xODc3MjYgMjU5LjY2NDQxOSw1MzMuNzgwMjk5IEMyNTkuNjY0NDE5LDUzNy44MDI5OTEgMjYxLjUyMTI3OCw1NDAuMjc4NDk0IDI2NS41NDQ0Nyw1NDIuMTM1MTIxIEMyNjguMDIwMjgxLDU0My4zNzI4NzMgMjY4LjAyMDI4MSw1NDMuMzcyODczIDI2Ni4xNjM0MjMsNTQzLjA2MzQzNSBDMjU3LjE4ODYwOSw1NDEuMjA2ODA4IDI1NS4wMjIyNzQsNTMwLjA2NzA0NSAyNjIuMTQwMjMsNTIyLjk0OTk3NCBDMjcwLjgwNTU2OCw1MTQuMjg1NzE0IDI4OS4wNjQ2NzIsNTE3Ljk5ODk2OSAyOTUuMjU0MTk5LDUzMC4wNjcwNDUgQzI5Ny43MzAwMSw1MzUuMDE4MDUxIDI5OC4wMzk0ODYsNTQ0LjkyMDA2MiAyOTUuODczMTUyLDU1MS4xMDg4MTkgQzI5MC42MTIwNTQsNTY0LjcyNDA4NSAyNzUuNzU3MTg5LDU3MS44NDExNTUgMjYwLjU5Mjg0OCw1NjcuODE4NDYzIEMyNTAuMzgwMTI5LDU2NS4wMzM1MjIgMjQ2LjA0NzQ2LDU2Mi4yNDg1ODIgMjMzLjY2ODQwNiw1NDkuNTYxNjMgQzIxMi4wMDUwNjIsNTI3LjI4MjEwNCAyMDMuNjQ5MjAxLDUyMi45NDk5NzQgMTcyLjcwMTU2Niw1MTguMzA4NDA2IEwxNjYuODIxNTE2LDUxNy4zODAwOTMgTDE3My4zMjA1MTksNTExLjE5MTMzNiBaIiBpZD0i6Lev5b6EIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTEwLjUzNTk2MTQsMTMuMzA1ODI3NyBDODIuNjQzOTQ5OSwxMDAuODc2NzQxIDE5My43NDU5NTgsMjM3LjAyOTM5NyAxOTkuMzE2NTMyLDI0NC40NTU5MDUgQzIwMy45NTg2NzcsMjUwLjY0NDY2MiAyMDIuMTAxODE5LDI1Ni41MjM5ODEgMTk0LjM2NDkxMSwyNjAuODU2MTExIEMxOTAuMDMyMjQyLDI2My4zMzE2MTQgMTgxLjA1NzQyOCwyNjUuODA3MTE3IDE3Ni43MjQ3NTksMjY1LjgwNzExNyBDMTcxLjc3MzEzNywyNjUuODA3MTE3IDE2NS44OTMwODcsMjYzLjMzMTYxNCAxNjEuODY5ODk0LDI1OS4zMDg5MjIgQzE1OS4wODQ2MDcsMjU2LjUyMzk4MSAxNDcuMDE1MDMsMjM4Ljg4NjAyNCAxMTkuNzgxMTExLDE5Ni40OTMwMzggQzk5LjA0NjE5NjIsMTY0LjAwMjA2MyA4MS40MDYwNDQ1LDEzNy4wODA5NyA4MS4wOTY1NjgxLDEzNi43NzE1MzIgQzc5Ljg1ODY2MjgsMTM2LjE1MjY1NiA3OS44NTg2NjI4LDEzNi4xNTI2NTYgMTE3LjYxNDc3NywyMDMuNjEwMTA4IEMxNDEuNDQ0NDU2LDI0Ni4wMDMwOTQgMTQ5LjE4MTM2NCwyNjEuMTY1NTQ5IDE0OS4xODEzNjQsMjYzLjAyMjE3NiBDMTQ5LjE4MTM2NCwyNjcuMDQ0ODY4IDE0Ny45NDM0NTksMjY5LjIxMDkzMyAxNDIuOTkxODM3LDI3NC43ODA4MTUgQzEzNC42MzU5NzYsMjg0LjA2Mzk1IDEzMC45MjIyNiwyOTQuNTg0ODM4IDEyOC4xMzY5NzMsMzE2LjU1NDkyNSBDMTI1LjA0MjIwOSwzNDEuMDAwNTE2IDExNi42ODYzNDgsMzU4LjMyOTAzNiA5Mi44NTY2NjkzLDM4Ny43MjU2MzIgQzc4LjkzMDIzMzcsNDA1LjA1NDE1MiA3Ni43NjM4OTkzLDQwOC4xNDg1MyA3My4zNTk2NTk1LDQxNS4yNjU2MDEgQzY5LjAyNjk5MDcsNDIzLjkyOTg2MSA2Ny43ODkwODUzLDQyOC44ODA4NjYgNjcuMTcwMTMyNiw0NDAuMDIwNjI5IEM2Ni41NTExNzk5LDQ1MS43NzkyNjggNjcuNzg5MDg1Myw0NTkuMjA1Nzc2IDcxLjE5MzMyNTEsNDcwLjM0NTUzOSBDNzQuMjg4MDg4Niw0ODAuMjQ3NTUgNzcuNjkyMzI4Myw0ODYuNzQ1NzQ1IDg2LjA0ODE4OTcsNDk5LjQzMjY5NyBDOTMuMTY2MTQ1Niw1MTAuNTcyNDYgOTcuNDk4ODE0NSw1MTguOTI3MjgyIDk3LjQ5ODgxNDUsNTIyLjAyMTY2MSBDOTcuNDk4ODE0NSw1MjQuNDk3MTYzIDk4LjExNzc2NzEsNTI0LjQ5NzE2MyAxMDkuMjU4OTE2LDUyMi4wMjE2NjEgQzEzNS44NzM4ODEsNTE1LjgzMjkwNCAxNTcuODQ2NzAyLDUwNS4zMTIwMTcgMTY5LjkxNjI3OSw0OTIuMzE1NjI3IEMxNzcuMzQzNzEyLDQ4NC4yNzAyNDIgMTc5LjIwMDU3LDQ3OS45MzgxMTIgMTc5LjIwMDU3LDQ2OC43OTgzNSBDMTc5LjIwMDU3LDQ2MS42ODEyNzkgMTc4Ljg5MTA5Myw0NjAuMTM0MDkgMTc3LjAzNDIzNSw0NTUuODAxOTYgQzE3My45Mzk0NzIsNDQ4Ljk5NDMyNyAxNjguMDU5NDIxLDQ0My40MjQ0NDYgMTU1LjM3MDg5MSw0MzQuNzYwMTg2IEMxMzguNjU5MTY4LDQyMy4zMTA5ODUgMTMxLjU0MTIxMiw0MTQuMDI3ODQ5IDEyOS42ODQzNTQsNDAxLjY1MDMzNSBDMTI4LjEzNjk3MywzOTEuMTI5NDQ4IDEyOS45OTM4MzEsMzg0LjAxMjM3OCAxMzkuMjc4MTIxLDM2NC41MTc3OTMgQzE0OC44NzE4ODgsMzQ0LjQwNDMzMiAxNTEuMzQ3Njk5LDMzNi4wNDk1MSAxNTIuODk1MDgsMzE1LjYyNjYxMiBDMTUzLjgyMzUwOSwzMDIuNjMwMjIyIDE1NS4zNzA4OTEsMjk3LjM2OTc3OCAxNTkuMDg0NjA3LDI5My4zNDcwODYgQzE2My4xMDc4LDI4OS4wMTQ5NTYgMTY2LjUxMjAzOSwyODcuNDY3NzY3IDE3Ni4xMDU4MDYsMjg2LjIzMDAxNSBDMTkxLjg4OTEsMjg0LjA2Mzk1IDIwMi4xMDE4MTksMjgwLjA0MTI1OCAyMTAuMTQ4MjA0LDI3Mi4zMDUzMTIgQzIxNy4yNjYxNiwyNjUuODA3MTE3IDIyMC4zNjA5MjQsMjU5LjMwODkyMiAyMjAuNjcwNCwyNDkuNzE2MzQ5IEwyMjAuOTc5ODc2LDI0Mi41OTkyNzggTDIxNi45NTY2ODQsMjM4LjI2NzE0OCBDMjAyLjQxMTI5NiwyMjEuNTU3NTA0IDAuOTQyMTk0NjkyLDAgMC4wMTM3NjU2NTU0LDAgQy0wLjI5NTcxMDY5LDAgNC42NTU5MTA4NCw1Ljg3OTMxOTI0IDEwLjUzNTk2MTQsMTMuMzA1ODI3NyBaIE0xMDUuNTQ1MTk5LDQ1My4zMjY0NTcgQzEwOC45NDk0MzksNDQ3LjQ0NzEzOCAxMDcuMDkyNTgxLDQ0MC4wMjA2MjkgMTAxLjUyMjAwNyw0MzYuMzA3Mzc1IEM5Ni4yNjA5MDkxLDQzMi45MDM1NTkgODguMjE0NTI0MSw0MzQuNDUwNzQ4IDg4LjIxNDUyNDEsNDM5LjA5MjMxNiBDODguMjE0NTI0MSw0NDAuMzMwMDY3IDg4LjgzMzQ3NjgsNDQxLjU2NzgxOCA5MC42OTAzMzQ5LDQ0Mi4xODY2OTQgQzkzLjQ3NTYyMiw0NDMuNzMzODgzIDkzLjc4NTA5ODMsNDQ1LjI4MTA3MyA5MS42MTg3NjM5LDQ0OC42ODQ4ODkgQzg5LjQ1MjQyOTUsNDUyLjA4ODcwNiA4OS40NTI0Mjk1LDQ1NS4xODMwODQgOTIuMjM3NzE2Niw0NTcuMzQ5MTQ5IEM5Ni41NzAzODU0LDQ2MC43NTI5NjUgMTAyLjQ1MDQzNiw0NTguODk2MzM4IDEwNS41NDUxOTksNDUzLjMyNjQ1NyBaIiBpZD0i5b2i54q2Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMzAuODgzMTE5LDI5MC41NjIxNDUgQzIyMy40NTU2ODcsMjkyLjcyODIxIDIxNi4zMzc3MzEsMzAwLjc3MzU5NSAyMTQuMTcxMzk3LDMwOC44MTg5NzkgQzIxMi45MzM0OTEsMzEzLjc2OTk4NSAyMTMuNTUyNDQ0LDMyMi43NDM2ODIgMjE1LjcxODc3OCwzMjUuNTI4NjIzIEMyMTkuMTIzMDE4LDMyOS44NjA3NTMgMjIyLjIxNzc4MiwzMzEuMDk4NTA0IDIzMC44ODMxMTksMzMxLjA5ODUwNCBDMjQ3LjkwNDMxOCwzMzEuMDk4NTA0IDI2Mi40NDk3MDcsMzIzLjY3MTk5NiAyNjMuOTk3MDg4LDMxNC42OTgyOTggQzI2NS41NDQ0NywzMDcuMjcxNzkgMjU5LjA0NTQ2NywyOTcuMDYwMzQgMjUwLjA3MDY1MywyOTIuNDE4NzczIEMyNDUuNDI4NTA4LDI4OS45NDMyNyAyMzUuODM0NzQxLDI4OS4wMTQ5NTYgMjMwLjg4MzExOSwyOTAuNTYyMTQ1IFogTTI1MC42ODk2MDUsMzA2LjAzNDAzOCBDMjUzLjE2NTQxNiwzMDIuMzIwNzg0IDI1Mi4yMzY5ODcsMjk4LjI5ODA5MiAyNDcuNTk0ODQyLDI5NS41MTMxNTEgQzIzOS4yMzg5ODEsMjkwLjI1MjcwOCAyMjYuNTUwNDUsMjk0LjU4NDgzOCAyMjYuNTUwNDUsMzAyLjYzMDIyMiBDMjI2LjU1MDQ1LDMwNi42NTI5MTQgMjMzLjA0OTQ1NCwzMTAuOTg1MDQ0IDIzOS4yMzg5ODEsMzEwLjk4NTA0NCBDMjQzLjI2MjE3MywzMTAuOTg1MDQ0IDI0OC44MzI3NDcsMzA4LjUwOTU0MSAyNTAuNjg5NjA1LDMwNi4wMzQwMzggWiIgaWQ9IuW9oueKtiI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==) */
export const UniCircleFilled = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-uni-circle-filled');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

UniCircleFilled.displayName = 'UniCircleFilled';
