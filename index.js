// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// adb shell input keyevent 82


 



import { AppRegistry, Platform } from "react-native";
import Discourse from "./js/Discourse";
import bgMessaging from './js/firebase/bgMessaging';

AppRegistry.registerComponent("Discourse", () => Discourse);

// if (Platform.OS == 'android') {
//     AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging);
// }
