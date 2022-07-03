import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.gray6, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M12 3a7.285 7.285 0 017.286 7.286c0 3.016-2.3 6.176-6.8 9.552a.81.81 0 01-.972 0c-4.5-3.376-6.8-6.536-6.8-9.552A7.286 7.286 0 0112 3zm0 1.619a5.667 5.667 0 00-5.667 5.667c0 2.194 1.715 4.724 5.22 7.533l.447.353.447-.353c3.505-2.809 5.22-5.34 5.22-7.533A5.667 5.667 0 0012 4.619zm0 4.048a1.619 1.619 0 110 3.237 1.619 1.619 0 010-3.237z"
        fill={color}
      />
    </Svg>
  )
}

export default SvgComponent
