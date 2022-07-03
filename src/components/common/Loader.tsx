import source from '../../assets/lottie/loader.json'
import LottieView from 'lottie-react-native'
import React from 'react'
import Modal from 'react-native-modal'

export default function ({ loading }: { loading: boolean }) {
  return (
    <Modal
      isVisible={loading}
      animationIn="fadeIn"
      animationOut="fadeOut"
      useNativeDriver={true}
      hideModalContentWhileAnimating
      backdropTransitionOutTiming={0}
      backdropOpacity={0.4}
    >
      <LottieView style={{ height: 100, alignSelf: 'center' }} autoPlay loop source={source} />
    </Modal>
  )
}
