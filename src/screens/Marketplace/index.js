import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { TouchableOpacity } from "react-native";
import logo from "../../../assets/logo.png";
import nextbutton from "../../../assets/nextbutton.png"
import { Gradient } from "../../components/Gradient";
import { Container, Logo, Title, IntroText, Categorias,Criadores,Subtitulo,Nextbutton} from "./styles";
import categorias from "../../../assets/categorias.png"
import criadores from "../../../assets/criadores.png"



export default function Marketplace() {
  
  
  const navigation = useNavigation();
  
  function screenProdutos() {
    navigation.navigate("Produtos");
  }

  return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      
      
      <Title>Marketplace</Title>
        
        <TouchableOpacity onPress={screenProdutos}>
        <Nextbutton source={nextbutton}/>
        </TouchableOpacity>
      
      <Subtitulo>Sobre nós...</Subtitulo>
         
          <IntroText>   
          Contrary to popular belief, Lorem Ipsum is not simply random text.
           It has roots in a piece of classical Latin literature from 45 BC, 
           making it over 2000 years old. Richard McClintock,
            a Latin professor at Hampden-Sydney College in Virginia, 
           looked up one of the more obscure Latin words, consectetur, 
          </IntroText>
     
 
      <Subtitulo>Categorias</Subtitulo>
      
          <Categorias source={categorias}/>
      
      <Subtitulo>Criadores</Subtitulo>
      
            <Criadores source={criadores}/>
      
      
     
      <StatusBar style="auto" />
    </Container>
  );
}


       
