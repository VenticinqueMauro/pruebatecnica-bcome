import MainContent from "./components/main-content/MainContent";
import Sidebar from "./components/sidebar/Sidebar";

export default function App() {
  return (
    <div className="flex h-[900px] w-full mx-auto text-[#1c1c30] text-sm">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <MainContent />
    </div>
  );
}