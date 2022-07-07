import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import RootNavigator from './RootNavigator'
import AuthNavigation from "./AuthNavigator"
export default function   Navigation() {
  // const { isLoading, token } : any= useAppSelector(state => state.auth)
  // const { isShowLoader } : any= useAppSelector(state => state.loader)
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   async function bootstrapAsync() {
  //     let token
  //     try {
  //       token = await storage.get('token')
  //       if (token) {
  //         // check token is valid
  //         const response = await Promise.all([
  //           userApi.get(),
  //           promotionApi.getAllPurchasedPromotions({ page: 1, per_page: 1 }),
  //         ])
  //         dispatch(actions.auth.setUser(response[0].customer))
  //         dispatch(actions.temp.setTotalVouchers(response[1].paginate.total_objects))
  //         dispatch(actions.auth.restoreToken(token))
  //         SplashScreen.hideAsync()
  //       } else {
  //         dispatch(actions.auth.restoreToken(token))
  //         SplashScreen.hideAsync()
  //       }
  //     } catch (error) {
  //       dispatch(actions.auth.logout())
  //       SplashScreen.hideAsync()
  //     }
  //   }

  //   bootstrapAsync()
  // }, [])

  // if (isLoading) return null

  return (
    <>
      <NavigationContainer >
        <RootNavigator />
        {/* <AuthNavigation /> */}
      </NavigationContainer>
      {/* <Loader loading={isShowLoader} /> */}
      <StatusBar backgroundColor={'#ffffff00'} style="dark" translucent={true} />
    </>
  )
}
