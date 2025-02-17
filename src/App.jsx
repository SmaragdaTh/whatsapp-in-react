import Device from "./components/Device";
import Screen from "./components/Screen";

export default function App() {
  return (
    <div className="page">
      <div className="marvel-device nexus5">
        <Device />
        <Screen />
      </div>
    </div>
  );
}
