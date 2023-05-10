import { Check } from 'phosphor-react-native';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { THEME } from '../../styles/theme';

import { styles } from './styles';

export function ConfirmButton({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      {...rest}
    >
      <Text style={styles.title}>
        Confirm
      </Text>

      <Check
        color={THEME.COLORS.WHITE}
        weight="bold"
        size={24}
      />
    </TouchableOpacity>
  );
}