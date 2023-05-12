import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Trophy } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

import { Level } from '../../components/Level';
import { Header } from '../../components/Header';
import { QuizCard } from '../../components/QuizCard';

import { QUIZZES } from '../../data/quizzes';

import { styles } from './styles';

export function Home() {
  const [quizzes, setQuizzes] = useState(QUIZZES);
  const [levels, setLevels] = useState([1, 2, 3]);

  const { navigate } = useNavigation();

  function handleLevelFilter(level: number) {
    const levelAlreadySelected = levels.includes(level);

    if (levelAlreadySelected) {
      if (levels.length > 1) {
        setLevels(prevState => prevState.filter(item => item !== level));
      }
    } else {
      setLevels(prevState => [...prevState, level]);
    }
  }

  useEffect(() => {
    setQuizzes(QUIZZES.filter(quiz => levels.includes(quiz.level)));
  }, [levels]);

  return (
    <View style={styles.container}>
      <Header
        icon={Trophy}
        title="Let's study"
        subtitle="Test your knowledge"
        onPress={() => navigate('history')}
      />

      <View style={styles.levels}>
        <Level title="Easy" type="EASY" onPress={() => handleLevelFilter(1)} isChecked={levels.includes(1)} />
        <Level title="Intermediate" type="MEDIUM" onPress={() => handleLevelFilter(2)} isChecked={levels.includes(2)} />
        <Level title="Difficult" type="HARD" onPress={() => handleLevelFilter(3)} isChecked={levels.includes(3)} />
      </View>

      <FlatList
        data={quizzes}
        keyExtractor={item => item.id}
        renderItem={({ index, item }) => (
          <QuizCard
            index={index}
            data={item}
            onPress={() => navigate('quiz', { id: item.id })}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.cards}
      />
    </View>
  );
}