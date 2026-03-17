import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function Page() {
  const appUrl =
    "https://ais-pre-qv5mvnv5tnhudyzmacxhkq-7603838097.europe-west1.run.app";

  return (
    <SafeAreaView style={styles.container}>
      {/* Üstteki başlık çubuğunu gizlemek için */}
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" />

      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: appUrl }}
          style={{ flex: 1 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
