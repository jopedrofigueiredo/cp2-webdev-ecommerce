import Navbar from "./components/Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 text-red-500">
      <Navbar className="text-red-500"/>
      <main>
        <p> Conteúdo principal</p>
      </main>
    </div>
  );
}
