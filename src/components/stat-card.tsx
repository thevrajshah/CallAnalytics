import {StyleSheet, Text, View, ViewProps} from 'react-native';
import {ROUNDED} from '../constants/theme';
import useTheme from '../hooks/useTheme';

interface IStatCardProps extends ViewProps {
  value: number | string;
  label: string;
}

const StatCard: React.FC<IStatCardProps> = ({value, label, style, ...rest}) => {
  const {Foreground, Background} = useTheme();

  return (
    <View
      style={[
        style,
        {
          backgroundColor: Background[200],
          borderRadius: ROUNDED.LG,
          padding: 16,
        },
      ]}>
      <Text style={{color: Foreground[100], fontSize: 32, fontWeight: '700'}}>
        {value}
      </Text>
      <Text>{label}</Text>
    </View>
  );
};

export default StatCard;
