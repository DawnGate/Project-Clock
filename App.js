import { store } from "@/store";
import { Provider } from "react-redux";
import { RootNavigator } from "@/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
