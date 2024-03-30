import "@repo/ui/styles.css";
import { Button } from "@repo/ui";

export type AppProps = {
  
};

const App = ({}: AppProps) => {
  return (
    <div>
        <h1 className="text-blue-500 mb-6 text-5xl font-bold">App</h1>
        <Button />
    </div>
  );
};

export default App;