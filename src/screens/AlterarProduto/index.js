
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import logo from "../../../assets/logo.png";
import { Gradient } from "../../components/Gradient";
import { Container, Logo, Title } from "./styles";

export default function AlterarProduto() {
  

  return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      <Title>Alterar Produto</Title>
      
      <StatusBar style="auto" />
    </Container>
  );}