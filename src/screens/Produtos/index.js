//import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
//import { TouchableOpacity } from "react-native";
import telaproduto from "../../../assets/telaproduto.png";
import { Gradient } from "../../components/Gradient";
import { Container,TelaProduto } from "./styles";

export default function Produtos() {
  

  /*const navigation = useNavigation();
  
  function screenEsqueciMinhaSenha() {
    navigation.navigate("EsqueciMinhaSenha");
  }*/

  return (
    <Container>
      <Gradient />
      <TelaProduto source={telaproduto}/>
      
           
        
      <StatusBar style="auto" />
    </Container>
  );
}




