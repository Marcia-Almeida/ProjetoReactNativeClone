import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import logo from "../../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import { Gradient } from "../../components/Gradient";
import { TouchableOpacity } from "react-native";
import { Container, Title,Logo,InputLogin,InputConfirmLogin,LoginButton,LoginText } from "./styles";

export default function AlterarSenha() {
    const [user, setUser] = useState({
      login: '',
      confirm:'',
    
    });

  const navigation = useNavigation();
  
  function screenConfirmacaoSenhaAlterada() {
    navigation.navigate("ConfirmacaoSenhaAlterada");
  }

    return (
      <Container >
        <Gradient />
        <Logo source={logo}/>
        <Title>Recuperar Senha</Title>
  
        <InputLogin
          value={user.login}
          onChangeText={setUser}
          placeholder={'Digite sua nova senha'}
          placeholderTextColor={'gray'}
        />

        <InputConfirmLogin
          value={user.confirm}
          onChangeText={setUser}
          placeholder={'Repita sua nova senha'}
          placeholderTextColor={'gray'}
        />
  
        <LoginButton onPress={screenConfirmacaoSenhaAlterada}>
          <LoginText >ALTERAR</LoginText>
        </LoginButton>
  
        <StatusBar style="auto" />
      </Container>
    );
  }
  
