import "./styles.css";
import List from "./wrappedListComponent";

export default function App() {
  const items = [
    { text: "udit" },
    { text: "rahul" },
    { text: "sooraj" },
    { text: "ravi" }
  ];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <List items={items} />
    </div>
  );
}
