import CustomerHistory from "@/src/components/CustomerHistory";
import Form from "@/src/components/Form";
import LoginForm from "@/src/components/LoginForm";
import History from "@/src/screens/History";
import Profile from "@/src/screens/Profile";
import RideDetail from "@/src/screens/RideDetail";
import Rider from "@/src/screens/Rider";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  const router = useRouter();
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
       {/* <History/> */}
       {/* <Form/> */}
       {/* <LoginForm/> */}
       {/* <Profile/> */}
       {/* <Rider/> */}
       {/* <CustomerHistory/> */}
       <RideDetail/>
    
    </GestureHandlerRootView>
  );
}
