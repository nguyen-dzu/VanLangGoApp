import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.success, ...props }: SvgProps) {
  return (
    <Svg width={18} height={18} fill="none" viewBox="0 0 18 18" {...props}>
      <Path
        d="M9 0C4.02955 0 0 4.02955 0 9C0 13.9705 4.02955 18 9 18C13.9705 18 18 13.9705 18 9C18 4.02955 13.9705 0 9 0ZM12.9011 7.47818C12.9729 7.39607 13.0276 7.30042 13.0619 7.19687C13.0963 7.09331 13.1095 6.98393 13.1009 6.87517C13.0924 6.76641 13.0621 6.66046 13.012 6.56356C12.9619 6.46666 12.8929 6.38076 12.8091 6.31092C12.7253 6.24107 12.6283 6.1887 12.524 6.15687C12.4196 6.12504 12.31 6.11441 12.2015 6.12559C12.0929 6.13677 11.9877 6.16954 11.8921 6.22197C11.7964 6.27441 11.7122 6.34545 11.6444 6.43091L8.12618 10.6519L6.30573 8.83064C6.15142 8.6816 5.94474 8.59913 5.73022 8.60099C5.51569 8.60286 5.31048 8.68891 5.15878 8.8406C5.00709 8.9923 4.92104 9.19751 4.91918 9.41204C4.91731 9.62656 4.99978 9.83323 5.14882 9.98755L7.60336 12.4421C7.68376 12.5224 7.78 12.5851 7.88598 12.6262C7.99195 12.6673 8.10532 12.6859 8.21886 12.6807C8.3324 12.6756 8.44362 12.6468 8.54543 12.5963C8.64724 12.5458 8.7374 12.4746 8.81018 12.3873L12.9011 7.47818Z"
        fill={color}
        stroke={color}
        strokeWidth={0.3}
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default SvgComponent