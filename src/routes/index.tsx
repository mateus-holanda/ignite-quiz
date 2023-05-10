import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';

import { THEME } from '../styles/theme';

export function Routes() {
  return (
    <View style={{ flex: 1, backgroundColor: THEME.COLORS.GREY_800 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}