import { Text, StyleSheet, TextInput, View } from "react-native";

type Props = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "numeric" | "email-address";
};

function Input({ label, placeholder, value, onChangeText, secureTextEntry, keyboardType = "default" }: Props) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>} 
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor="#999"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%", // Garante que o container ocupe toda a largura
    paddingHorizontal: 10, // Adicionado paddingHorizontal no container para não cortar as bordas
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#D6005D",
  },
  input: {
    width: "100%", // Garante que o TextInput ocupe 100% da largura
    height: 50, // Altura fixa
    backgroundColor: "#FFF",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default Input;
