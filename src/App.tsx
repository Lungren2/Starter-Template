import "./App.scss";
import { ThemeProvider } from "@/components/ui/theme-provider";
// import { useTheme } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      </>
    </ThemeProvider>
  );
}

export default App;
