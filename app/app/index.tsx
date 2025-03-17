import { Redirect } from "expo-router";
import threecards from "./(tabs)/threecards";

export default function Index() {
  // Leite einfach zu threecards um, wenn jemand zur Root-Route navigiert
  return <Redirect href="/(tabs)/threecards" />;
}
