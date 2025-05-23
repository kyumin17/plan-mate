import TimeInput from './TimeInput';
import LocationInput from './LocationInput';
import { View, Text, StyleSheet } from 'react-native';
import { TimeManageProps } from '../../types/types';

const DayTimeInput = ({ day, timeManage, location, setLocation }
  : { day: number, timeManage: TimeManageProps, location: string, setLocation: any }) => {
  const dayList = ['월', '화', '수', '목', '금', '토', '일'];

  return (
    <View>
      <Text style={styles.header}>
        {`${dayList[day]}요일`}
      </Text>
      <TimeInput timeManage={timeManage} />
      <LocationInput location={location} setLocation={setLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    paddingBottom: 15,
    marginBottom: 20,
  },
});

export default DayTimeInput;