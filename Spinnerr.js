import React, { useState } from "react";
import { View, Button, ActivityIndicator} from "react-native";
import { NativeBaseProvider } from "native-base";

export default () => {
 const [isLoading, setIsLoading] = useState(true);


    const YukleDurdur = () => {
        if (isLoading) setIsLoading(false);
        else setIsLoading(true);
    };

  return (
    <NativeBaseProvider>
        <View>
            {isLoading && (
                <ActivityIndicator animating={true} color="#bc2b78" size="large"/>
            )}
            <Button onPress={YukleDurdur}>YÜKLE</Button>
      </View>
    </NativeBaseProvider>
  );
};