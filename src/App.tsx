import { Header } from "./components/Header";
import { PersonalCalories } from "./components/PersonalCalories";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <PersonalCalories />
      <GlobalStyle />
    </>
  );
}