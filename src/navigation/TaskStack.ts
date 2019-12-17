import { createStackNavigator } from 'react-navigation-stack';
import { TaskScreen, SearchTaskScreen, EditTaskScreen, NewTaskScreen } from 'src/screens';

const TaskNavigator = createStackNavigator(
  {
    Task: {
      screen: TaskScreen,
      navigationOptions: {
        header: null
      }
    },
    NewTask: {
      screen: NewTaskScreen,
      navigationOptions: {
        header: null
      }
    },
    EditTask: {
      screen: EditTaskScreen,
      navigationOptions: {
        header: null
      }
    },
    SearchTask: {
      screen: SearchTaskScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Task'
  }
);

export default TaskNavigator;
