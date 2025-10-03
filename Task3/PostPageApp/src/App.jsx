import { Routes, Route } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-600">🌐 Post Explorer</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </main>

      <footer className="bg-white border-t mt-10">
        <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-500">
          © 2025 Post Explorer. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
