import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-yellow-400 text-black px-6 py-4 flex justify-between items-center">
      <Link to="/">
      <h1 className="font-bold text-xl">Fiap Commerce</h1>
      </Link>
      <div className="flex gap-4">
         <Link to="/Home" className="hover:underline">Home</Link>
         <Link to="/Perfil" className="hover:underline">Perfil</Link>
         <Link to="/Carrinho" className="hover:underline">Carrinho</Link>
      </div>
    </nav>
  );
}
