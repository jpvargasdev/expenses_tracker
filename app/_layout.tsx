import { useEffect } from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";
import { setStatusBarStyle } from "expo-status-bar";

export default function RootLayout() {
  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("light");
    }, 0);
  }, []);

  return (
    <GluestackUIProvider mode="light"><Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack></GluestackUIProvider>
  );
}
