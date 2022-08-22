import { useNavigation } from '@react-navigation/core'
import * as ImagePicker from 'expo-image-picker'
import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import ModalSelector, { IOption, ModalSelectorProps } from 'react-native-modal-selector'
import { toast } from '../../helpers'
import { INavigation } from '../../types'

const opitons: IOption[] = [
  { key: 'camera', label: 'Chụp ảnh' },
  { key: 'library', label: 'Chọn ảnh từ thư viện' },
]

export default function ({
  children,
  onConfirm,
  imagePickerProps,
  multiple,
  ...others
}: Partial<ModalSelectorProps> & {
  children: any
  onConfirm: (images: string[]) => void
  imagePickerProps?: ImagePicker.ImagePickerOptions
  multiple?: boolean
}) {
  const navigation: INavigation = useNavigation()

  const pickImageFromLibrary = async () => {
    try {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          toast.goToSetting('media')
        } else {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            ...imagePickerProps,
          })
          if (!result.cancelled) {
            onConfirm([result.uri])
          }
        }
      }
    } catch (error) {}
  }

  return (
    <ModalSelector
      data={opitons}
      onModalClose={async(option: any) => {
        if (option.key === 'library') {
          if (multiple) {
            navigation.navigate('ImagesPicker', {
              onConfirm,
            })
          } else {
            if (Platform.OS === 'ios') {
              setTimeout(() => {
                pickImageFromLibrary()
              }, 1000)
            } else {
              pickImageFromLibrary()
            }
          }
        } else if (option.key === 'camera') {
          const { status } = await ImagePicker.requestCameraPermissionsAsync()
          if (status !== 'granted') {
            toast.goToSetting(
              'camera',
              () => navigation.goBack(),
              () => navigation.goBack()
            )
          } else {
            const result = await ImagePicker.launchCameraAsync()
            !result.cancelled && onConfirm([result.uri])
          }
        }
      }}
      backdropPressToClose
      {...(others as any)}
    >
      {children}
    </ModalSelector>
  )
}

const styles = StyleSheet.create({})
