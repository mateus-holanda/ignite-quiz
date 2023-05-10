import { TouchableOpacity, TouchableOpacityProps, Text, View } from 'react-native';

import { THEME } from '../../styles/theme';

import { styles } from './styles';

const TYPE_COLORS = {
  EASY: THEME.COLORS.BRAND_LIGHT,
  HARD: THEME.COLORS.DANGER_LIGHT,
  MEDIUM: THEME.COLORS.WARNING_LIGHT,
}

interface LevelProps extends TouchableOpacityProps {
  title: string;
  isChecked?: boolean;
  type?: keyof typeof TYPE_COLORS;
}

export function Level({ title, type = 'EASY', isChecked = false, ...rest }: LevelProps) {

  const COLOR = TYPE_COLORS[type];

  return (
    <TouchableOpacity {...rest}>
      <View style={
        [
          styles.container,
          { borderColor: COLOR, backgroundColor: isChecked ? COLOR : 'transparent' }
        ]
      }>
        <Text style={
          [
            styles.title,
            { color: isChecked ? THEME.COLORS.GREY_700 : COLOR }
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}