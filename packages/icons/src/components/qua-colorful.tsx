// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';

import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/qua-colorful.svg';

/**![QuaColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1xdWEtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMzUuOSAxNTciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEzNS45IDE1NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTE4LjcsMzIuNWMxLjcsMC4zLDMsMC41LDQuMywwLjhzMi42LDAuNSw0LjMsMC45YzEuNywxLjYsMywyLjcsNC4zLDMuOWMxLjMsMS4xLDIuNiwyLjIsNC4zLDMuNwoJCQljMCwyLjEsMCwzLjEsMCw1LjJjLTEuNy0wLjMtMy0wLjUtNC4zLTAuNmMtMS4zLTAuMi0yLjYtMC4zLTQuMy0wLjVjLTEuNy0xLjMtMy0yLjMtNC4zLTMuNGMtMS4zLTEtMi42LTIuMS00LjMtMy41CgkJCWMwLTEuMywwLTIuMywwLTMuMkMxMTguNywzNC44LDExOC43LDMzLjgsMTE4LjcsMzIuNXoiIHN0eWxlPSJmaWxsOiAjNkUzMThDOyIvPgoJCTxwYXRoIGQ9Ik05OC45LDIxLjljMS43LDAuMSwzLDAuMyw0LjMsMC40czIuNiwwLjMsNC4zLDAuNmMxLjcsMS43LDMsMyw0LjMsNC4yYzEuMywxLjIsMi42LDIuNSw0LjMsNC4xCgkJCWMwLDEuMywwLDIuMywwLDMuM3MwLDIsMCwzLjNjLTEuNy0wLjEtMy0wLjItNC4zLTAuMnMtMi42LTAuMS00LjMtMC4xYy0xLjctMS41LTMtMi42LTQuMy0zLjdjLTEuMy0xLjEtMi42LTIuMy00LjMtMy45CgkJCWMwLTEuNiwwLTIuOCwwLTRDOTguOSwyNC42LDk4LjksMjMuNSw5OC45LDIxLjl6IiBzdHlsZT0iZmlsbDogIzZFMzE4QzsiLz4KCQk8cGF0aCBkPSJNNzkuMSwxMS4yYzEuNywwLDMsMCw0LjMsMHMyLjYsMC4xLDQuMywwLjJjMS43LDEuOSwzLDMuMiw0LjMsNC42czIuNiwyLjcsNC4zLDQuNGMwLDEuNiwwLDIuOSwwLDQuMQoJCQlzMCwyLjUsMCw0LjFjLTEuNywwLTMsMC4xLTQuMywwLjFjLTEuMywwLjEtMi42LDAuMS00LjMsMC4zYy0xLjctMS42LTMtMi45LTQuMy00LjFjLTEuMy0xLjMtMi42LTIuNS00LjMtNC4zYzAtMS45LDAtMy4zLDAtNC43CgkJCUM3OS4xLDE0LjUsNzkuMSwxMy4xLDc5LjEsMTEuMnoiIHN0eWxlPSJmaWxsOiAjODkyOThDOyIvPgoJCTxwYXRoIGQ9Ik0zOS42LDIwLjVjMS43LTEuNywzLTMuMSw0LjMtNC40YzEuMy0xLjQsMi42LTIuNyw0LjMtNC42YzEuNy0wLjEsMy0wLjIsNC4zLTAuMnMyLjYtMC4xLDQuMywwCgkJCWMwLDEuOSwwLDMuMywwLDQuN3MwLDIuOCwwLDQuN2MtMS43LDEuNy0zLDMtNC4zLDQuM3MtMi42LDIuNS00LjMsNC4xYy0xLjctMC4xLTMtMC4yLTQuMy0wLjNjLTEuMy0wLjEtMi42LTAuMS00LjMtMC4xCgkJCWMwLTEuNiwwLTIuOSwwLTQuMUMzOS42LDIzLjMsMzkuNiwyMi4xLDM5LjYsMjAuNXoiIHN0eWxlPSJmaWxsOiAjODkyOThDOyIvPgoJCTxwYXRoIGQ9Ik0xOS44LDMxLjFjMS43LTEuNiwzLTIuOCw0LjMtNC4xYzEuMy0xLjIsMi42LTIuNSw0LjMtNC4yYzEuNy0wLjMsMy0wLjQsNC4zLTAuNmMxLjMtMC4xLDIuNi0wLjMsNC4zLTAuNAoJCQljMCwxLjYsMCwyLjgsMCw0czAsMi40LDAsNGMtMS43LDEuNi0zLDIuOC00LjMsMy45Yy0xLjMsMS4yLTIuNiwyLjMtNC4zLDMuN2MtMS43LDAtMywwLTQuMywwLjFjLTEuMywwLTIuNiwwLjEtNC4zLDAuMgoJCQljMC0xLjMsMC0yLjMsMC0zLjNDMTkuOCwzMy41LDE5LjgsMzIuNSwxOS44LDMxLjF6IiBzdHlsZT0iZmlsbDogI0FEMjY4NjsiLz4KCQk8cGF0aCBkPSJNMCw0MS44YzEuNy0xLjQsMy0yLjYsNC4zLTMuN2MxLjMtMS4xLDIuNi0yLjMsNC4zLTMuOWMxLjctMC40LDMtMC43LDQuMy0wLjljMS4zLTAuMywyLjYtMC41LDQuMy0wLjgKCQkJYzAsMS4zLDAsMi4zLDAsMy4yYzAsMSwwLDEuOSwwLDMuMmMtMS43LDEuNC0zLDIuNS00LjMsMy41cy0yLjYsMi4xLTQuMywzLjRjLTEuNywwLjEtMywwLjMtNC4zLDAuNVMxLjcsNDYuNiwwLDQ2LjkKCQkJQzAsNDQuOSwwLDQzLjksMCw0MS44eiIgc3R5bGU9ImZpbGw6ICNBRDI2ODY7Ii8+CgkJPHBhdGggZD0iTTExOC43LDQ2LjhjMS43LDAsMywwLDQuMywwLjFjMS4zLDAsMi42LDAuMSw0LjMsMC4yYzEuNywxLjMsMywyLjIsNC4zLDMuMWMxLjMsMC45LDIuNiwxLjgsNC4zLDMKCQkJYzAsMi4xLDAsMy4xLDAsNS4yYy0xLjcsMC0zLDAtNC4zLDAuMXMtMi42LDAuMS00LjMsMC4zYy0xLjctMS0zLTEuOC00LjMtMi43Yy0xLjMtMC44LTIuNi0xLjYtNC4zLTIuOGMwLTEuMywwLTIuMywwLTMuMgoJCQlTMTE4LjcsNDguMSwxMTguNyw0Ni44eiIgc3R5bGU9ImZpbGw6ICM2RTMxOEM7Ii8+CgkJPHBhdGggZD0iTTk4LjksMzkuNGMxLjctMC4yLDMtMC4yLDQuMy0wLjNzMi42LTAuMSw0LjMtMC4yYzEuNywxLjQsMywyLjUsNC4zLDMuNXMyLjYsMiw0LjMsMy40YzAsMS4zLDAsMi4zLDAsMy4zCgkJCXMwLDIsMCwzLjNjLTEuNywwLjItMywwLjMtNC4zLDAuNXMtMi42LDAuNC00LjMsMC42Yy0xLjctMS4yLTMtMi4xLTQuMy0zcy0yLjYtMS45LTQuMy0zLjJjMC0xLjYsMC0yLjgsMC00Uzk4LjksNDEsOTguOSwzOS40eiIgc3R5bGU9ImZpbGw6ICM2RTMxOEM7Ii8+CgkJPHBhdGggZD0iTTc5LjEsMzJjMS43LTAuMywzLTAuNSw0LjMtMC43czIuNi0wLjMsNC4zLTAuNWMxLjcsMS42LDMsMi44LDQuMywzLjljMS4zLDEuMSwyLjYsMi4zLDQuMywzLjcKCQkJYzAsMS42LDAsMi45LDAsNC4xYzAsMS4yLDAsMi41LDAsNC4xYy0xLjcsMC4zLTMsMC42LTQuMywwLjljLTEuMywwLjMtMi42LDAuNi00LjMsMWMtMS43LTEuMy0zLTIuNC00LjMtMy40cy0yLjYtMi4xLTQuMy0zLjYKCQkJYzAtMS45LDAtMy4zLDAtNC43Qzc5LjEsMzUuMyw3OS4xLDMzLjksNzkuMSwzMnoiIHN0eWxlPSJmaWxsOiAjODkyOThDOyIvPgoJCTxwYXRoIGQ9Ik0zOS42LDM4LjRjMS43LTEuNSwzLTIuNiw0LjMtMy43YzEuMy0xLjEsMi42LTIuMyw0LjMtMy45YzEuNywwLjIsMywwLjMsNC4zLDAuNXMyLjYsMC40LDQuMywwLjcKCQkJYzAsMS45LDAsMy4zLDAsNC43czAsMi44LDAsNC43Yy0xLjcsMS41LTMsMi41LTQuMywzLjZjLTEuMywxLTIuNiwyLjEtNC4zLDMuNGMtMS43LTAuNC0zLTAuNy00LjMtMWMtMS4zLTAuMy0yLjYtMC41LTQuMy0wLjgKCQkJYzAtMS42LDAtMi45LDAtNC4xQzM5LjUsNDEuMywzOS42LDQwLjEsMzkuNiwzOC40eiIgc3R5bGU9ImZpbGw6ICM4OTI5OEM7Ii8+CgkJPHBhdGggZD0iTTE5LjgsNDUuOGMxLjctMS4zLDMtMi4zLDQuMy0zLjNzMi42LTIuMSw0LjMtMy41YzEuNywwLDMsMC4xLDQuMywwLjJjMS4zLDAuMSwyLjYsMC4xLDQuMywwLjMKCQkJYzAsMS42LDAsMi44LDAsNHMwLDIuNCwwLDRjLTEuNywxLjMtMywyLjMtNC4zLDMuMmMtMS4zLDAuOS0yLjYsMS44LTQuMywzYy0xLjctMC4zLTMtMC41LTQuMy0wLjZjLTEuMy0wLjItMi42LTAuMy00LjMtMC41CgkJCWMwLTEuMywwLTIuMywwLTMuM0MxOS44LDQ4LjEsMTkuOCw0Ny4xLDE5LjgsNDUuOHoiIHN0eWxlPSJmaWxsOiAjQUQyNjg2OyIvPgoJCTxwYXRoIGQ9Ik0wLDUzLjJjMS43LTEuMiwzLTIuMSw0LjMtM2MxLjMtMC45LDIuNi0xLjksNC4zLTMuMWMxLjctMC4xLDMtMC4yLDQuMy0wLjJzMi42LTAuMSw0LjMtMC4xCgkJCWMwLDEuMywwLDIuMywwLDMuMnMwLDEuOSwwLDMuMmMtMS43LDEuMi0zLDItNC4zLDIuOHMtMi42LDEuNi00LjMsMi43Yy0xLjctMC4xLTMtMC4yLTQuMy0wLjNTMS43LDU4LjMsMCw1OC4zCgkJCUMwLDU2LjMsMCw1NS4yLDAsNTMuMnoiIHN0eWxlPSJmaWxsOiAjQUQyNjg2OyIvPgoJCTxwYXRoIGQ9Ik0xMTguNyw2MWMxLjctMC4zLDMtMC41LDQuMy0wLjZjMS4zLTAuMiwyLjYtMC4zLDQuMy0wLjVjMS43LDEsMywxLjcsNC4zLDIuNGMxLjMsMC43LDIuNiwxLjQsNC4zLDIuMwoJCQljMCwyLjEsMCwzLjEsMCw1LjJjLTEuNywwLjMtMywwLjUtNC4zLDAuOHMtMi42LDAuNi00LjMsMWMtMS43LTAuNy0zLTEuMy00LjMtMS45cy0yLjYtMS4yLTQuMy0yLjFjMC0xLjMsMC0yLjMsMC0zLjIKCQkJQzExOC43LDYzLjMsMTE4LjcsNjIuMywxMTguNyw2MXoiIHN0eWxlPSJmaWxsOiAjNkUzMThDOyIvPgoJCTxwYXRoIGQ9Ik05OC45LDU2LjljMS43LTAuNCwzLTAuNyw0LjMtMXMyLjYtMC42LDQuMy0wLjljMS43LDEuMiwzLDIsNC4zLDIuOHMyLjYsMS42LDQuMywyLjZjMCwxLjMsMCwyLjMsMCwzLjMKCQkJczAsMiwwLDMuM2MtMS43LDAuNC0zLDAuOC00LjMsMS4yYy0xLjMsMC40LTIuNiwwLjgtNC4zLDEuNGMtMS43LTAuOS0zLTEuNi00LjMtMi4zYy0xLjMtMC43LTIuNi0xLjQtNC4zLTIuNWMwLTEuNiwwLTIuOCwwLTQKCQkJQzk4LjksNTkuNyw5OC45LDU4LjUsOTguOSw1Ni45eiIgc3R5bGU9ImZpbGw6ICM2RTMxOEM7Ii8+CgkJPHBhdGggZD0iTTc5LjEsNTIuOWMxLjctMC42LDMtMSw0LjMtMS40czIuNi0wLjgsNC4zLTEuMmMxLjcsMS4zLDMsMi4yLDQuMywzLjJjMS4zLDAuOSwyLjYsMS44LDQuMywzCgkJCWMwLDEuNiwwLDIuOSwwLDQuMXMwLDIuNSwwLDQuMWMtMS43LDAuNi0zLDEuMS00LjMsMS42cy0yLjYsMS00LjMsMS43Yy0xLjctMS0zLTEuOS00LjMtMi43Yy0xLjMtMC44LTIuNi0xLjctNC4zLTIuOAoJCQljMC0xLjksMC0zLjMsMC00LjdDNzkuMSw1Ni4yLDc5LjEsNTQuOCw3OS4xLDUyLjl6IiBzdHlsZT0iZmlsbDogIzg5Mjk4QzsiLz4KCQk8cGF0aCBkPSJNMzkuNiw1Ni40YzEuNy0xLjIsMy0yLjEsNC4zLTNjMS4zLTAuOSwyLjYtMS45LDQuMy0zLjJjMS43LDAuNSwzLDAuOCw0LjMsMS4yczIuNiwwLjgsNC4zLDEuNAoJCQljMCwxLjksMCwzLjMsMCw0LjdzMCwyLjgsMCw0LjdjLTEuNywxLjItMywyLTQuMywyLjhzLTIuNiwxLjYtNC4zLDIuN2MtMS43LTAuNy0zLTEuMi00LjMtMS43Yy0xLjMtMC41LTIuNi0xLTQuMy0xLjYKCQkJYzAtMS42LDAtMi45LDAtNC4xQzM5LjYsNTkuMywzOS42LDU4LDM5LjYsNTYuNHoiIHN0eWxlPSJmaWxsOiAjODkyOThDOyIvPgoJCTxwYXRoIGQ9Ik0xOS44LDYwLjVjMS43LTEsMy0xLjgsNC4zLTIuNnMyLjYtMS42LDQuMy0yLjhjMS43LDAuMywzLDAuNiw0LjMsMC45YzEuMywwLjMsMi42LDAuNiw0LjMsMQoJCQljMCwxLjYsMCwyLjgsMCw0czAsMi40LDAsNGMtMS43LDEtMywxLjgtNC4zLDIuNWMtMS4zLDAuNy0yLjYsMS40LTQuMywyLjNjLTEuNy0wLjYtMy0xLTQuMy0xLjRzLTIuNi0wLjctNC4zLTEuMgoJCQljMC0xLjMsMC0yLjMsMC0zLjNDMTkuOCw2Mi44LDE5LjgsNjEuOCwxOS44LDYwLjV6IiBzdHlsZT0iZmlsbDogI0FEMjY4NjsiLz4KCQk8cGF0aCBkPSJNMCw2NC41YzEuNy0wLjksMy0xLjYsNC4zLTIuM2MxLjMtMC43LDIuNi0xLjQsNC4zLTIuNGMxLjcsMC4yLDMsMC4zLDQuMywwLjVzMi42LDAuNCw0LjMsMC42CgkJCWMwLDEuMywwLDIuMywwLDMuMmMwLDEsMCwxLjksMCwzLjJjLTEuNywwLjktMywxLjUtNC4zLDIuMXMtMi42LDEuMi00LjMsMS45Yy0xLjctMC40LTMtMC43LTQuMy0xUzEuNyw2OS44LDAsNjkuNQoJCQlDMCw2Ny42LDAsNjYuNiwwLDY0LjV6IiBzdHlsZT0iZmlsbDogI0FEMjY4NjsiLz4KCQk8cGF0aCBkPSJNMTE4LjcsNzUuMmMxLjctMC42LDMtMSw0LjMtMS40czIuNi0wLjgsNC4zLTEuMmMxLjcsMC43LDMsMS4yLDQuMywxLjdzMi42LDEsNC4zLDEuNWMwLDIuMSwwLDMuMSwwLDUuMgoJCQljLTEuNywwLjYtMywxLjEtNC4zLDEuNWMtMS4zLDAuNS0yLjYsMS00LjMsMS43Yy0xLjctMC41LTMtMC44LTQuMy0xLjJjLTEuMy0wLjQtMi42LTAuOC00LjMtMS40YzAtMS4zLDAtMi4zLDAtMy4yCgkJCVMxMTguNyw3Ni41LDExOC43LDc1LjJ6IiBzdHlsZT0iZmlsbDogIzZFMzE4QzsiLz4KCQk8cGF0aCBkPSJNOTguOSw3NC41YzEuNy0wLjcsMy0xLjMsNC4zLTEuN2MxLjMtMC41LDIuNi0xLDQuMy0xLjZjMS43LDAuOSwzLDEuNSw0LjMsMi4xczIuNiwxLjIsNC4zLDEuOQoJCQljMCwxLjMsMCwyLjMsMCwzLjNzMCwyLDAsMy4zYy0xLjcsMC43LTMsMS4zLTQuMywxLjlzLTIuNiwxLjItNC4zLDIuMWMtMS43LTAuNi0zLTEuMS00LjMtMS42cy0yLjYtMS00LjMtMS43YzAtMS42LDAtMi44LDAtNAoJCQlDOTguOSw3Ny4zLDk4LjksNzYuMSw5OC45LDc0LjV6IiBzdHlsZT0iZmlsbDogIzZFMzE4QzsiLz4KCQk8cGF0aCBkPSJNNzkuMSw3My43YzEuNy0wLjksMy0xLjUsNC4zLTIuMXMyLjYtMS4yLDQuMy0yYzEuNywxLDMsMS43LDQuMywyLjVjMS4zLDAuNywyLjYsMS40LDQuMywyLjMKCQkJYzAsMS42LDAsMi45LDAsNC4xczAsMi40LDAsNC4xYy0xLjcsMC45LTMsMS42LTQuMywyLjNjLTEuMywwLjctMi42LDEuNC00LjMsMi40Yy0xLjctMC43LTMtMS4zLTQuMy0yYy0xLjMtMC42LTIuNi0xLjItNC4zLTIuMQoJCQljMC0xLjksMC0zLjMsMC00LjdDNzkuMSw3Nyw3OS4xLDc1LjYsNzkuMSw3My43eiIgc3R5bGU9ImZpbGw6ICM4OTI5OEM7Ii8+CgkJPHBhdGggZD0iTTM5LjYsNzQuNGMxLjctMC45LDMtMS42LDQuMy0yLjNjMS4zLTAuNywyLjYtMS40LDQuMy0yLjVjMS43LDAuOCwzLDEuMyw0LjMsMmMxLjMsMC42LDIuNiwxLjIsNC4zLDIuMQoJCQljMCwxLjksMCwzLjMsMCw0LjdjMCwxLjQsMCwyLjgsMCw0LjdjLTEuNywwLjktMywxLjUtNC4zLDIuMXMtMi42LDEuMi00LjMsMmMtMS43LTEtMy0xLjctNC4zLTIuNGMtMS4zLTAuNy0yLjYtMS40LTQuMy0yLjMKCQkJYzAtMS42LDAtMi45LDAtNC4xQzM5LjYsNzcuMiwzOS42LDc2LDM5LjYsNzQuNHoiIHN0eWxlPSJmaWxsOiAjODkyOThDOyIvPgoJCTxwYXRoIGQ9Ik0xOS44LDc1LjFjMS43LTAuNywzLTEuMyw0LjMtMS45czIuNi0xLjIsNC4zLTIuMWMxLjcsMC42LDMsMS4xLDQuMywxLjZjMS4zLDAuNSwyLjYsMSw0LjMsMS43CgkJCWMwLDEuNiwwLDIuOCwwLDRzMCwyLjQsMCw0Yy0xLjcsMC43LTMsMS4zLTQuMywxLjdjLTEuMywwLjUtMi42LDEtNC4zLDEuNmMtMS43LTAuOS0zLTEuNS00LjMtMi4xcy0yLjYtMS4yLTQuMy0xLjkKCQkJYzAtMS4zLDAtMi4zLDAtMy4zQzE5LjgsNzcuNSwxOS44LDc2LjUsMTkuOCw3NS4xeiIgc3R5bGU9ImZpbGw6ICNBRDI2ODY7Ii8+CgkJPHBhdGggZD0iTTAsNzUuOWMxLjctMC42LDMtMS4xLDQuMy0xLjVjMS4zLTAuNSwyLjYtMSw0LjMtMS43YzEuNywwLjUsMywwLjgsNC4zLDEuMmMxLjMsMC40LDIuNiwwLjgsNC4zLDEuNAoJCQljMCwxLjMsMCwyLjMsMCwzLjJzMCwxLjksMCwzLjJjLTEuNywwLjYtMywxLTQuMywxLjRzLTIuNiwwLjgtNC4zLDEuMmMtMS43LTAuNy0zLTEuMi00LjMtMS43cy0yLjYtMS00LjMtMS41QzAsNzksMCw3OCwwLDc1Ljl6IiBzdHlsZT0iZmlsbDogI0FEMjY4NjsiLz4KCQk8cGF0aCBkPSJNMTE4LjcsODkuNWMxLjctMC45LDMtMS41LDQuMy0yLjFzMi42LTEuMiw0LjMtMS45YzEuNywwLjQsMywwLjcsNC4zLDFzMi42LDAuNSw0LjMsMC44YzAsMi4xLDAsMy4xLDAsNS4yCgkJCWMtMS43LDAuOS0zLDEuNS00LjMsMi4zYy0xLjMsMC43LTIuNiwxLjQtNC4zLDIuNGMtMS43LTAuMi0zLTAuMy00LjMtMC41cy0yLjYtMC40LTQuMy0wLjdjMC0xLjMsMC0yLjMsMC0zLjIKCQkJQzExOC43LDkxLjcsMTE4LjcsOTAuOCwxMTguNyw4OS41eiIgc3R5bGU9ImZpbGw6ICM2RTMxOEM7Ii8+CgkJPHBhdGggZD0iTTk4LjksOTJjMS43LTEsMy0xLjcsNC4zLTIuNWMxLjMtMC43LDIuNi0xLjQsNC4zLTIuM2MxLjcsMC42LDMsMSw0LjMsMS4zYzEuMywwLjQsMi42LDAuOCw0LjMsMS4yCgkJCWMwLDEuMywwLDIuMywwLDMuM3MwLDIsMCwzLjNjLTEuNywxLTMsMS44LTQuMywyLjZjLTEuMywwLjgtMi42LDEuNi00LjMsMi44Yy0xLjctMC4zLTMtMC42LTQuMy0wLjlzLTIuNi0wLjYtNC4zLTEKCQkJYzAtMS42LDAtMi44LDAtNEM5OC45LDk0LjgsOTguOSw5My42LDk4LjksOTJ6IiBzdHlsZT0iZmlsbDogIzZFMzE4QzsiLz4KCQk8cGF0aCBkPSJNNzkuMSw5NC42YzEuNy0xLjIsMy0yLDQuMy0yLjhzMi42LTEuNiw0LjMtMi43YzEuNywwLjcsMywxLjIsNC4zLDEuN3MyLjYsMSw0LjMsMS42YzAsMS42LDAsMi45LDAsNC4xCgkJCXMwLDIuNCwwLDQuMWMtMS43LDEuMi0zLDIuMS00LjMsM3MtMi42LDEuOS00LjMsMy4yYy0xLjctMC41LTMtMC44LTQuMy0xLjJjLTEuMy0wLjQtMi42LTAuOC00LjMtMS40YzAtMS45LDAtMy4zLDAtNC43CgkJCUM3OS4xLDk3LjksNzkuMSw5Ni41LDc5LjEsOTQuNnoiIHN0eWxlPSJmaWxsOiAjODkyOThDOyIvPgoJCTxwYXRoIGQ9Ik0zOS42LDkyLjRjMS43LTAuNiwzLTEuMSw0LjMtMS42YzEuMy0wLjUsMi42LTEsNC4zLTEuN2MxLjcsMSwzLDEuOSw0LjMsMi43YzEuMywwLjgsMi42LDEuNyw0LjMsMi44CgkJCWMwLDEuOSwwLDMuMywwLDQuN2MwLDEuNCwwLDIuOCwwLDQuN2MtMS43LDAuNi0zLDEtNC4zLDEuNHMtMi42LDAuOC00LjMsMS4yYy0xLjctMS4zLTMtMi4yLTQuMy0zLjJjLTEuMy0wLjktMi42LTEuOC00LjMtMwoJCQljMC0xLjYsMC0yLjksMC00LjFDMzkuNiw5NS4yLDM5LjYsOTQsMzkuNiw5Mi40eiIgc3R5bGU9ImZpbGw6ICM4OTI5OEM7Ii8+CgkJPHBhdGggZD0iTTE5LjgsODkuOGMxLjctMC40LDMtMC44LDQuMy0xLjJjMS4zLTAuNCwyLjYtMC44LDQuMy0xLjNjMS43LDAuOSwzLDEuNiw0LjMsMi4zYzEuMywwLjcsMi42LDEuNSw0LjMsMi41CgkJCWMwLDEuNiwwLDIuOCwwLDRzMCwyLjQsMCw0Yy0xLjcsMC40LTMsMC43LTQuMywxYy0xLjMsMC4zLTIuNiwwLjUtNC4zLDAuOWMtMS43LTEuMS0zLTItNC4zLTIuOHMtMi42LTEuNi00LjMtMi42CgkJCWMwLTEuMywwLTIuMywwLTMuM1MxOS44LDkxLjEsMTkuOCw4OS44eiIgc3R5bGU9ImZpbGw6ICNBRDI2ODY7Ii8+CgkJPHBhdGggZD0iTTAsODcuMmMxLjctMC4zLDMtMC41LDQuMy0wLjhjMS4zLTAuMywyLjYtMC42LDQuMy0xYzEuNywwLjcsMywxLjMsNC4zLDEuOXMyLjYsMS4yLDQuMywyLjEKCQkJYzAsMS4zLDAsMi4zLDAsMy4yYzAsMSwwLDEuOSwwLDMuMmMtMS43LDAuMy0zLDAuNS00LjMsMC43cy0yLjYsMC4zLTQuMywwLjVjLTEuNy0xLTMtMS43LTQuMy0yLjRDMyw5My45LDEuNyw5My4yLDAsOTIuMwoJCQlDMCw5MC4zLDAsODkuMywwLDg3LjJ6IiBzdHlsZT0iZmlsbDogI0FEMjY4NjsiLz4KCQk8cGF0aCBkPSJNMTE4LjcsMTAzLjdjMS43LTEuMiwzLTIsNC4zLTIuOHMyLjYtMS42LDQuMy0yLjdjMS43LDAuMSwzLDAuMiw0LjMsMC4zYzEuMywwLjEsMi42LDAuMSw0LjMsMC4xCgkJCWMwLDIuMSwwLDMuMSwwLDUuMmMtMS43LDEuMi0zLDIuMS00LjMsM3MtMi42LDEuOS00LjMsMy4xYy0xLjcsMC4xLTMsMC4yLTQuMywwLjJzLTIuNiwwLjEtNC4zLDAuMWMwLTEuMywwLTIuMywwLTMuMgoJCQlDMTE4LjcsMTA2LDExOC43LDEwNSwxMTguNywxMDMuN3oiIHN0eWxlPSJmaWxsOiAjNkUzMThDOyIvPgoJCTxwYXRoIGQ9Ik05OC45LDEwOS42YzEuNy0xLjMsMy0yLjMsNC4zLTMuMmMxLjMtMC45LDIuNi0xLjgsNC4zLTNjMS43LDAuMywzLDAuNSw0LjMsMC42YzEuMywwLjIsMi42LDAuMyw0LjMsMC41CgkJCWMwLDEuMywwLDIuMywwLDMuM3MwLDIsMCwzLjNjLTEuNywxLjMtMywyLjMtNC4zLDMuNGMtMS4zLDEtMi42LDIuMS00LjMsMy41Yy0xLjcsMC0zLTAuMS00LjMtMC4xYy0xLjMtMC4xLTIuNi0wLjEtNC4zLTAuMwoJCQljMC0xLjYsMC0yLjgsMC00Qzk4LjksMTEyLjQsOTguOSwxMTEuMiw5OC45LDEwOS42eiIgc3R5bGU9ImZpbGw6ICM2RTMxOEM7Ii8+CgkJPHBhdGggZD0iTTc5LjEsMTE1LjRjMS43LTEuNSwzLTIuNSw0LjMtMy42YzEuMy0xLDIuNi0yLjEsNC4zLTMuNGMxLjcsMC40LDMsMC43LDQuMywxczIuNiwwLjUsNC4zLDAuOAoJCQljMCwxLjYsMCwyLjksMCw0LjFzMCwyLjUsMCw0LjFjLTEuNywxLjUtMywyLjYtNC4zLDMuN3MtMi42LDIuMy00LjMsMy45Yy0xLjctMC4yLTMtMC4zLTQuMy0wLjVzLTIuNi0wLjQtNC4zLTAuNwoJCQljMC0xLjksMC0zLjMsMC00LjdDNzkuMSwxMTguNyw3OS4xLDExNy4zLDc5LjEsMTE1LjR6IiBzdHlsZT0iZmlsbDogIzg5Mjk4QzsiLz4KCQk8cGF0aCBkPSJNMzkuNiwxMTAuM2MxLjctMC4zLDMtMC42LDQuMy0wLjljMS4zLTAuMywyLjYtMC42LDQuMy0xYzEuNywxLjMsMywyLjQsNC4zLDMuNHMyLjYsMi4xLDQuMywzLjYKCQkJYzAsMS45LDAsMy4zLDAsNC43YzAsMS40LDAsMi44LDAsNC43Yy0xLjcsMC4zLTMsMC41LTQuMywwLjdjLTEuMywwLjItMi42LDAuNC00LjMsMC41Yy0xLjctMS42LTMtMi44LTQuMy0zLjkKCQkJYy0xLjMtMS4xLTIuNi0yLjMtNC4zLTMuN2MwLTEuNiwwLTIuOSwwLTQuMVMzOS42LDExMiwzOS42LDExMC4zeiIgc3R5bGU9ImZpbGw6ICM4OTI5OEM7Ii8+CgkJPHBhdGggZD0iTTE5LjgsMTA0LjVjMS43LTAuMiwzLTAuMyw0LjMtMC41czIuNi0wLjMsNC4zLTAuNmMxLjcsMS4yLDMsMi4xLDQuMywzYzEuMywwLjksMi42LDEuOSw0LjMsMy4yCgkJCWMwLDEuNiwwLDIuOCwwLDRzMCwyLjQsMCw0Yy0xLjcsMC4yLTMsMC4yLTQuMywwLjNjLTEuMywwLjEtMi42LDAuMS00LjMsMC4xYy0xLjctMS40LTMtMi41LTQuMy0zLjVzLTIuNi0yLTQuMy0zLjQKCQkJYzAtMS4zLDAtMi4zLDAtMy4zQzE5LjgsMTA2LjgsMTkuOCwxMDUuOCwxOS44LDEwNC41eiIgc3R5bGU9ImZpbGw6ICNBRDI2ODY7Ii8+CgkJPHBhdGggZD0iTTAsOTguNmMxLjcsMCwzLDAsNC4zLTAuMWMxLjMtMC4xLDIuNi0wLjEsNC4zLTAuM2MxLjcsMSwzLDEuOCw0LjMsMi43YzEuMywwLjgsMi42LDEuNyw0LjMsMi44CgkJCWMwLDEuMywwLDIuMywwLDMuMmMwLDEsMCwxLjksMCwzLjJjLTEuNywwLTMsMC00LjMtMC4xYy0xLjMsMC0yLjYtMC4xLTQuMy0wLjJjLTEuNy0xLjMtMy0yLjItNC4zLTMuMXMtMi42LTEuOC00LjMtMwoJCQlDMCwxMDEuNywwLDEwMC43LDAsOTguNnoiIHN0eWxlPSJmaWxsOiAjQUQyNjg2OyIvPgoJCTxwYXRoIGQ9Ik0xMTguNywxMTcuOWMxLjctMS40LDMtMi41LDQuMy0zLjVzMi42LTIuMSw0LjMtMy40YzEuNy0wLjEsMy0wLjMsNC4zLTAuNGMxLjMtMC4yLDIuNi0wLjMsNC4zLTAuNgoJCQljMCwyLjEsMCwzLjEsMCw1LjJjLTEuNywxLjQtMywyLjYtNC4zLDMuN3MtMi42LDIuMy00LjMsMy45Yy0xLjcsMC40LTMsMC43LTQuMywxcy0yLjYsMC41LTQuMywwLjhjMC0xLjMsMC0yLjMsMC0zLjIKCQkJQzExOC43LDEyMC4yLDExOC43LDExOS4yLDExOC43LDExNy45eiIgc3R5bGU9ImZpbGw6ICM2RTMxOEM7Ii8+CgkJPHBhdGggZD0iTTk4LjksMTI3LjFjMS43LTEuNiwzLTIuOCw0LjMtMy45czIuNi0yLjMsNC4zLTMuN2MxLjcsMCwzLDAsNC4zLTAuMWMxLjMsMCwyLjYtMC4xLDQuMy0wLjIKCQkJYzAsMS4zLDAsMi4zLDAsMy4zczAsMiwwLDMuM2MtMS43LDEuNi0zLDIuOC00LjMsNC4xYy0xLjMsMS4yLTIuNiwyLjUtNC4zLDQuMmMtMS43LDAuMy0zLDAuNC00LjMsMC42Yy0xLjMsMC4yLTIuNiwwLjMtNC4zLDAuNAoJCQljMC0xLjYsMC0yLjgsMC00Qzk4LjksMTI5LjksOTguOSwxMjguNyw5OC45LDEyNy4xeiIgc3R5bGU9ImZpbGw6ICM2RTMxOEM7Ii8+CgkJPHBhdGggZD0iTTc5LjEsMTM2LjNjMS43LTEuNywzLTMsNC4zLTQuM3MyLjYtMi41LDQuMy00LjFjMS43LDAuMSwzLDAuMiw0LjMsMC4zczIuNiwwLjEsNC4zLDAuMWMwLDEuNiwwLDIuOSwwLDQuMQoJCQljMCwxLjIsMCwyLjUsMCw0LjFjLTEuNywxLjctMywzLjEtNC4zLDQuNGMtMS4zLDEuNC0yLjYsMi43LTQuMyw0LjZjLTEuNywwLjEtMywwLjItNC4zLDAuMnMtMi42LDAuMS00LjMsMGMwLTEuOSwwLTMuMywwLTQuNwoJCQlDNzkuMSwxMzkuNiw3OS4xLDEzOC4yLDc5LjEsMTM2LjN6IiBzdHlsZT0iZmlsbDogIzg5Mjk4QzsiLz4KCQk8Zz4KCQkJPHBvbHlnb24gcG9pbnRzPSI1OS4zLDkuOCA2Ny45LDAgNzYuNSw5LjggNzYuNSwxOS41IDY3LjksMjAuNiA1OS4zLDE5LjUgCQkJIiBzdHlsZT0iZmlsbDogIzg5Mjk4QzsiLz4KCQkJPHBvbHlnb24gcG9pbnRzPSI1OS4zLDMxLjEgNjcuOSwyMi43IDc2LjUsMzEuMSA3Ni41LDQwLjcgNjcuOSw0My40IDU5LjMsNDAuNyAJCQkiIHN0eWxlPSJmaWxsOiAjODkyOThDOyIvPgoJCQk8cG9seWdvbiBwb2ludHM9IjU5LjMsNTIuNCA2Ny45LDQ1LjQgNzYuNSw1Mi40IDc2LjUsNjIgNjcuOSw2Ni4xIDU5LjMsNjIgCQkJIiBzdHlsZT0iZmlsbDogIzg5Mjk4QzsiLz4KCQkJPHBvbHlnb24gcG9pbnRzPSI1OS4zLDczLjYgNjcuOSw2OC4xIDc2LjUsNzMuNiA3Ni41LDgzLjMgNjcuOSw4OC44IDU5LjMsODMuMyAJCQkiIHN0eWxlPSJmaWxsOiAjODkyOThDOyIvPgoJCQk8cG9seWdvbiBwb2ludHM9IjU5LjMsOTQuOSA2Ny45LDkwLjkgNzYuNSw5NC45IDc2LjUsMTA0LjYgNjcuOSwxMTEuNSA1OS4zLDEwNC42IAkJCSIgc3R5bGU9ImZpbGw6ICM4OTI5OEM7Ii8+CgkJCTxwb2x5Z29uIHBvaW50cz0iNTkuMywxMTYuMiA2Ny45LDExMy42IDc2LjUsMTE2LjIgNzYuNSwxMjUuOSA2Ny45LDEzNC4yIDU5LjMsMTI1LjkgCQkJIiBzdHlsZT0iZmlsbDogIzg5Mjk4QzsiLz4KCQkJPHBhdGggZD0iTTU5LjMsMTM3LjVsOC42LTEuMmw4LjYsMS4ydjkuN2wtOC42LDkuOGMwLDAtNy41LTguNS04LjYtOS44QzU5LjMsMTQ1LjIsNTkuMywxMzcuNSw1OS4zLDEzNy41eiIgc3R5bGU9ImZpbGw6ICM4OTI5OEM7Ii8+CgkJPC9nPgoJCTxwYXRoIGQ9Ik0zOS42LDEyOC4zYzEuNywwLDMtMC4xLDQuMy0wLjFjMS4zLTAuMSwyLjYtMC4xLDQuMy0wLjNjMS43LDEuNiwzLDIuOSw0LjMsNC4xYzEuMywxLjMsMi42LDIuNSw0LjMsNC4zCgkJCWMwLDEuOSwwLDMuMywwLDQuN3MwLDIuOCwwLDQuN2MtMS43LDAtMywwLTQuMywwcy0yLjYtMC4xLTQuMy0wLjJjLTEuNy0xLjktMy0zLjMtNC4zLTQuNmMtMS4zLTEuNC0yLjYtMi43LTQuMy00LjQKCQkJYzAtMS42LDAtMi45LDAtNC4xQzM5LjYsMTMxLjIsMzkuNiwxMjkuOSwzOS42LDEyOC4zeiIgc3R5bGU9ImZpbGw6ICM4OTI5OEM7Ii8+CgkJPHBhdGggZD0iTTE5LjgsMTE5LjFjMS43LDAuMSwzLDAuMiw0LjMsMC4yczIuNiwwLjEsNC4zLDAuMWMxLjcsMS41LDMsMi42LDQuMywzLjdjMS4zLDEuMSwyLjYsMi4zLDQuMywzLjkKCQkJYzAsMS42LDAsMi44LDAsNHMwLDIuNCwwLDRjLTEuNy0wLjEtMy0wLjMtNC4zLTAuNGMtMS4zLTAuMS0yLjYtMC4zLTQuMy0wLjZjLTEuNy0xLjctMy0zLTQuMy00LjJzLTIuNi0yLjUtNC4zLTQuMQoJCQljMC0xLjMsMC0yLjMsMC0zLjNDMTkuOCwxMjEuNSwxOS44LDEyMC41LDE5LjgsMTE5LjF6IiBzdHlsZT0iZmlsbDogI0FEMjY4NjsiLz4KCQk8cGF0aCBkPSJNMCwxMTBjMS43LDAuMywzLDAuNSw0LjMsMC42YzEuMywwLjIsMi42LDAuMyw0LjMsMC40YzEuNywxLjMsMywyLjMsNC4zLDMuNGMxLjMsMSwyLjYsMi4xLDQuMywzLjUKCQkJYzAsMS4zLDAsMi4zLDAsMy4yYzAsMSwwLDEuOSwwLDMuMmMtMS43LTAuMy0zLTAuNS00LjMtMC44cy0yLjYtMC41LTQuMy0xYy0xLjctMS42LTMtMi43LTQuMy0zLjljLTEuMy0xLjEtMi42LTIuMy00LjMtMy43CgkJCUMwLDExMy4xLDAsMTEyLDAsMTEweiIgc3R5bGU9ImZpbGw6ICNBRDI2ODY7Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==) */
export const QuaColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-qua-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

QuaColorful.displayName = 'QuaColorful';
