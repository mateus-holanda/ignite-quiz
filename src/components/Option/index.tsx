import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface OptionProps extends TouchableOpacityProps {
  checked: boolean;
  title: string;
}

export function Option({ checked, title, ...rest }: OptionProps) {
  return (
    <TouchableOpacity
      style={
        [
          styles.container,
          checked && styles.checked
        ]
      }
      {...rest}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}