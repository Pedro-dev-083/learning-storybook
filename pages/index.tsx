import Button from "../src/components/Button/Button";
import Text from "../src/components/Text/Text";
import ThemeProvider from "../src/theme/ThemeProvider";

export default function HomeScreen() {
  return (
    <ThemeProvider>
      <div>
        <Text Component="h1">Home Page</Text>
        <Button variant="primary">Simples</Button>
      </div>
    </ThemeProvider>
  );
}
