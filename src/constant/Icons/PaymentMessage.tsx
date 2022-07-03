import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.success, ...props }: SvgProps) {
  return (
    <Svg width={19} height={14} fill="none" {...props}>
      <Path
        d="M0 0V12H10.32C10.1075 11.3546 9.99949 10.6795 10 10H4C4 9.46957 3.78929 8.96086 3.41421 8.58579C3.03914 8.21071 2.53043 8 2 8V4C3.11 4 4 3.11 4 2H14C14 2.53043 14.2107 3.03914 14.5858 3.41421C14.9609 3.78929 15.4696 4 16 4V4.06C16.67 4.06 17.34 4.18 18 4.4V0H0ZM9 3C7.3 3.03 6 4.3 6 6C6 7.7 7.3 8.94 9 9C9.38 9 9.77 8.92 10.14 8.77C10.41 7.67 10.86 6.63 11.97 5.61C11.85 4.28 10.59 2.97 9 3ZM18.63 6.27L14.76 10.17L13.41 8.8L12 10.22L14.75 13L20.03 7.68L18.63 6.27Z"
        fill={color}
        stroke={color}
        strokeWidth={0.3}
      />
    </Svg>
  )
}

export default SvgComponent
