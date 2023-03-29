import { View, StyleSheet } from 'react-native';
import { Select, SelectProvider } from '@mobile-reality/react-native-select-pro';

const data = [
  {
    label: 'Option 1',
    value: 'option1',
  },
  {
    label: 'Option 2',
    value: 'option2',
  },
  {
    label: 'Option 3',
    value: 'option3',
  },
  {
    label: 'Option 4',
    value: 'option4',
  },
];

const MyView = () => {
  return (
      <View style={styles.container}>
        <Select options={data} multiple={true} />
      </View>
  );
};

export default function App() {
  return (
      <SelectProvider>
        <MyView />
      </SelectProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
