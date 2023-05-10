import { View } from 'react-native';

import { THEME } from '../../styles/theme';

import { styles } from './styles';

const LEVEL_COLORS = [
  THEME.COLORS.BRAND_LIGHT,
  THEME.COLORS.WARNING_LIGHT,
  THEME.COLORS.DANGER_LIGHT
];

type LevelBarsProps = {
  level: number;
}

export function LevelBars({ level }: LevelBarsProps) {
  const backgroundColor = LEVEL_COLORS[level - 1];

  return (
    <View style={styles.bars}>
      <View style={[styles.level, styles.level1, { backgroundColor }]} />
      <View style={[styles.level, styles.level2, level > 1 && { backgroundColor }]} />
      <View style={[styles.level, styles.level3, level > 2 && { backgroundColor }]} />
    </View>
  );
}