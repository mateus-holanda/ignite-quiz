import { Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '../../components/Button';

import { styles } from './styles';

interface RouteParams {
  total: string;
  points: string;
}

export function Finish() {
  const route = useRoute();
  const { points, total } = route.params as RouteParams;

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={styles.title}>
          Congratulations!
        </Text>

        <Text style={styles.subtitle}>
          You got {points} out of {total} questions right
        </Text>
      </View>

      <Button
        title="Go to the homepage"
        onPress={() => navigate('home')}
      />
    </View>
  );
}