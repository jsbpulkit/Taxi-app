import Form from "@/src/components/Form";
import LoginForm from "@/src/components/LoginForm";
import History from "@/src/screens/History";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
       {/* <History/> */}
       {/* <Form/> */}
       <LoginForm/>
    
    </View>
  );
}
