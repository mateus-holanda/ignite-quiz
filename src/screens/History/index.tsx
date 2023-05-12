import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { HouseLine } from 'phosphor-react-native';
import Animated, {
  Layout,
  SlideInRight,
  SlideOutRight
} from 'react-native-reanimated';

import { Loading } from '../../components/Loading';
import { Header } from '../../components/Header';
import { HistoryCard, HistoryProps } from '../../components/HistoryCard';

import { historyGetAll, historyRemove } from '../../storage/quizHistoryStorage';

import { styles } from './styles';

export function History() {
  const [isLoading, setIsLoading] = useState(true);
  const [history, setHistory] = useState<HistoryProps[]>([]);

  const { goBack } = useNavigation();

  async function fetchHistory() {
    const response = await historyGetAll();
    setHistory(response);
    setIsLoading(false);
  }

  async function remove(id: string) {
    await historyRemove(id);

    fetchHistory();
  }

  function handleRemove(id: string) {
    Alert.alert(
      'Remove',
      'Do you like to remove the results of this quiz?',
      [
        {
          text: 'Yes', onPress: () => remove(id)
        },
        { text: 'No', style: 'cancel' }
      ]
    );

  }

  useEffect(() => {
    fetchHistory();
  }, []);

  if (isLoading) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <Header
        title="History"
        subtitle={`Your history of completed${'\n'}quizzes`}
        icon={HouseLine}
        onPress={goBack}
      />

      <ScrollView
        contentContainerStyle={styles.history}
        showsVerticalScrollIndicator={false}
      >
        {
          history.map((item) => (
            <Animated.View
              key={item.id}
              entering={SlideInRight}
              exiting={SlideOutRight}
              layout={Layout.springify()}
            >
              <TouchableOpacity
                onPress={() => handleRemove(item.id)}
              >
                <HistoryCard data={item} />
              </TouchableOpacity>
            </Animated.View>
            
          ))
        }
      </ScrollView>
    </View>
  );
}