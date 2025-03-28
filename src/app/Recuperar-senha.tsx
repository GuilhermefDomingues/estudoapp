import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

import Button from "../components/Button";
import Input from "../components/Input";


function RecuperarSenha() {
  const [email, setEmail] = useState("");

  // Função handleSubmit para o botão
  const handleSubmit = () => {
    console.log("Botão Enviar pressionado");
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/Logo.png")}
          style={styles.logo}
        />
      </View>

      {/* Titulo e descricao */}
      <Text style={styles.title}>Recuperar senha</Text>
      <Text style={styles.description}>
        Coloque seu endereço de e-mail para receber o link de alteração de
        senha.
      </Text>

      {/* Campo de Email */}
      <Input
        label="Seu endereço de Email:"
        placeholder="email@example.com"
        value={email}
        onChange={setEmail}
      />

      {/* Botao Enviar */}
      <Button label={"Enviar"} onPress={handleSubmit} />

      {/* ISSO VAI SAIR DAQUI */}
      <View style={styles.ContainerRecPass}>
        <Link href="/alterarSenha" style={styles.link}>
          ir para alterar senha para olhar
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDD5E9",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  logo: {
    width: 130,
    height: 90,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#D6005D",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  // ISSO VAI SAIR DAQUI 
  ContainerRecPass: {
    marginBottom: 10,
  },
  link: {
    color: "#FF3366",
    textDecorationLine: "underline",
  },
});

export default RecuperarSenha;
