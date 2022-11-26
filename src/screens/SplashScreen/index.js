import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import splash from "../../../assets/splash.png";
import { TouchableOpacity } from "react-native";

import { Container, Splash} from "./styles";

export default function SplashScreen() {
  

  function screenLogin() {
    navigation.navigate("Login");
  }


 
  
  return (
    <Container onPress={screenLogin} >
    
   
      <Splash source={splash}/>

      
      <StatusBar style="auto" />
    </Container>
  );
}




