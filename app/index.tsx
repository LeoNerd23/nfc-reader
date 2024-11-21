import { Text, View } from "react-native";
import { FileX2, Nfc, Settings, SmartphoneNfc } from "lucide-react-native";
import { Button } from "@/components/ui/Button";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white pt-12 px-2.5 w-svw">
      <View className="flex justify-center items-center mb-5 flex-row">
        <Text className="text-state-900 text-3xl">NFC Reader</Text>
        <Nfc size={20} color="#000" />
      </View>
      <View className="flex flex-wrap flex-row justify-between gap-3.5">
        <Button
          variant="outline"
          className="h-32 w-[48%]"
          textClassName="text-state-900 text-2xl color-black"
        >
          <Nfc color="#000" />
          Ler Tag
        </Button>
        <Button
          variant="outline"
          className="h-32 w-[48%]"
          textClassName="text-state-900 text-2xl color-black"
        >
          <SmartphoneNfc color="#000" />
          Gravar Tag
        </Button>
        <Button
          variant="outline"
          className="h-32 w-[48%]"
          textClassName="text-state-900 text-2xl color-black"
        >
          <Settings color="#000" />
          Configurações
        </Button>
        <Button
          variant="outline"
          className="h-32 w-[48%]"
          textClassName="text-state-900 text-2xl color-black"
        >
          <FileX2 color="#000" />
          Apagar Tag
        </Button>
      </View>
    </View>
  );
}
