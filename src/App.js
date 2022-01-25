import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <div className="min-h-screen bg-orange-400 flex justify-center items-center flex-col text-gray-700">
      <h1 className="text-white text-5xl font-bold mb-12">WorldtimeLite</h1>
      <Container />
    </div>
  );
}

export default App;
