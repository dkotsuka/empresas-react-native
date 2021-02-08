import { Navigation } from "react-native-navigation";
import { PageNames, registerPages } from "./src/pages";

registerPages()

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: PageNames.MAIN
              }
            }
          ]
        }
      }
   });
 });