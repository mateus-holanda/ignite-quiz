import { Text, View } from 'react-native';

import { LevelBars } from '../LevelBars';

import { styles } from './styles';

export interface HistoryProps {
  id: string;
  title: string;
  points: number;
  questions: number;
  level: number;
}

interface HistoryCardProps {
  data: HistoryProps;
}

export function HistoryCard({ data }: HistoryCardProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {data.title}
        </Text>

        <Text style={styles.subtitle}>
          You got {data.points} out of {data.questions} correct
        </Text>
      </View>

      <LevelBars level={data.level} />
    </View>
  );
}