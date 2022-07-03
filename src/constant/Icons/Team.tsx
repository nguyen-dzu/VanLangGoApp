import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M14.324 9.857a1.607 1.607 0 011.607 1.607v4.464a3.93 3.93 0 01-7.858 0v-4.464A1.607 1.607 0 019.68 9.857h4.644zm0 1.072H9.68a.536.536 0 00-.536.535v4.464a2.858 2.858 0 005.716 0v-4.464a.535.535 0 00-.536-.536zM5.036 9.857h2.968a2.316 2.316 0 00-.583 1.072H5.036a.536.536 0 00-.536.535v3.75a2.143 2.143 0 003.027 1.953c.095.35.232.683.403.994a3.215 3.215 0 01-4.501-2.948v-3.749a1.607 1.607 0 011.607-1.607zm13.928 0a1.607 1.607 0 011.607 1.607v3.75a3.214 3.214 0 01-4.498 2.948l.04-.073c.153-.29.276-.598.365-.92a2.144 2.144 0 003.022-1.955v-3.75a.536.536 0 00-.535-.536h-2.38A2.316 2.316 0 0016 9.857h2.965zM12 4.143a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm5.716.714a2.143 2.143 0 110 4.286 2.143 2.143 0 010-4.286zm-11.432 0a2.143 2.143 0 110 4.286 2.143 2.143 0 010-4.286zM12 5.214a1.429 1.429 0 100 2.857 1.429 1.429 0 000-2.857zm5.716.715a1.071 1.071 0 100 2.142 1.071 1.071 0 000-2.142zm-11.432 0a1.072 1.072 0 100 2.143 1.072 1.072 0 000-2.143z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.34 9.714l-.232.242c-.27.28-.458.627-.548 1.005l-.026.11H5.036a.393.393 0 00-.393.393v3.75a2 2 0 002.826 1.823l.152-.07.044.163c.092.338.224.66.39.962l.076.138-.143.062a3.358 3.358 0 01-4.702-3.079v-3.749a1.75 1.75 0 011.75-1.75H8.34zm-4.911 5.5A3.215 3.215 0 007.93 18.16a4.512 4.512 0 01-.403-.994A2.145 2.145 0 014.5 15.213v-3.749a.536.536 0 01.536-.536h2.385a2.316 2.316 0 01.584-1.07H5.036a1.607 1.607 0 00-1.607 1.606v3.75zm12.444 3.016l.114-.207v-.002a4.43 4.43 0 00.353-.89l.044-.161.153.068a1.999 1.999 0 002.82-1.824v-3.75a.393.393 0 00-.392-.393h-2.493l-.027-.11a2.173 2.173 0 00-.548-1.005l-.232-.242h3.3a1.751 1.751 0 011.75 1.75v3.75a3.358 3.358 0 01-4.699 3.079l-.143-.063zm4.699-3.016v-3.75a1.607 1.607 0 00-1.607-1.607H16a2.315 2.315 0 01.584 1.071h2.381a.536.536 0 01.535.536v3.75a2.144 2.144 0 01-3.022 1.954 4.57 4.57 0 01-.337.867l-.028.054-.04.073c.044.02.088.037.133.055a3.214 3.214 0 004.366-3.003zm-6.247-5.5a1.75 1.75 0 011.75 1.75v4.464a4.072 4.072 0 01-8.145 0v-4.464a1.75 1.75 0 011.75-1.75h4.645zm0 1.357H9.68a.393.393 0 00-.393.393v4.464a2.715 2.715 0 105.43 0v-4.464a.393.393 0 00-.392-.393zM12 4a2.643 2.643 0 110 5.286A2.643 2.643 0 0112 4zm5.717.714a2.286 2.286 0 110 4.572 2.286 2.286 0 010-4.572zm-11.433 0a2.286 2.286 0 110 4.572 2.286 2.286 0 010-4.572zM12 5.357a1.286 1.286 0 100 2.571 1.286 1.286 0 000-2.57zm5.717.714a.929.929 0 100 1.858.929.929 0 000-1.858zm-11.433 0a.928.928 0 100 1.857.928.928 0 000-1.857zm9.177 4.257a1.607 1.607 0 00-1.136-.47H9.68a1.607 1.607 0 00-1.607 1.606v4.464a3.93 3.93 0 007.859 0v-4.464c0-.426-.17-.835-.471-1.136zm-5.78.6h4.644a.536.536 0 01.535.536v4.464a2.858 2.858 0 11-5.715 0v-4.464a.536.536 0 01.535-.536zm3.276-6.595a2.5 2.5 0 10-1.913 4.62 2.5 2.5 0 001.913-4.62zm5.58.687a2.143 2.143 0 10-1.64 3.96 2.143 2.143 0 001.64-3.96zm-11.433 0a2.143 2.143 0 10-1.64 3.96 2.143 2.143 0 001.64-3.96zm3.886.613a1.428 1.428 0 112.02 2.02 1.428 1.428 0 01-2.02-2.02zm6.317.377a1.071 1.071 0 11.82 1.98 1.071 1.071 0 01-.82-1.98zm-11.433 0a1.071 1.071 0 11.82 1.98 1.071 1.071 0 01-.82-1.98z"
        fill={color}
      />
    </Svg>
  )
}

export default SvgComponent
