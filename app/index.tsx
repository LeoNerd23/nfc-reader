import { Text, View } from "react-native";
import { ArrowDown, Nfc, SmartphoneNfc } from "lucide-react-native";
import { Button } from "@/components/ui/Button";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white pt-12 px-2.5">
      <View className="flex justify-center items-center mb-2.5 flex-row">
        <Text className="text-state-900 text-3xl">NFC Reader</Text>
        <Nfc size={20} color="#000" />
      </View>
      <View>
        <View className="gap-4 ">
          <View className="border-2 rounded-lg w-fit flex justify-center items-center">
            <Button variant="outline" className="text-state-900 text-2xl">
              <Nfc size={100} color="#000" />
              Ler
            </Button>
          </View>
          <View className="border-2 rounded-lg w-fit flex justify-center items-center">
            <Button variant="outline" className="text-state-900 text-2xl">
              <SmartphoneNfc size={100} color="#000" />
              Gravar
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
