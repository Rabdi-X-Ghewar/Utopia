import { AppSidebar } from "./components/sidebar/sidebar";
import { MainNav } from "../src/components/navbar/navbar";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-background">
        <AppSidebar />
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        <header className="bg-background border-b px-6 py-4">
          <MainNav />
        </header>

        {/* Content Area */}
        
      </div>
    </div>
  );
}

// Default export
export default App;
