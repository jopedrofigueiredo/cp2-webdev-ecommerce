import { useEffect, useState } from "react";
import RepoCard from "../components/RepoCard";
import SectionContainer from "../components/SectionContainer";


export default function Home() {

  const [mensClothing, setMensClothing] = useState([])
  const [electronics, setElectronics] = useState([])
  const [jewelery, setJewelery] = useState([])

  const API = import.meta.env.VITE_API_URL;
  
  useEffect(() => {
    fetch(`${API}men's clothing`, {
    })
      .then(res => res.json())
      .then(data => { setMensClothing(data) })
      .catch(err => console.error(err));

      fetch(`${API}electronics`, {
    })
      .then(res => res.json())
      .then(data => { setElectronics(data) })
      .catch(err => console.error(err));

      fetch(`${API}jewelery`, {
    })
      .then(res => res.json())
      .then(data => { setJewelery(data) })
      .catch(err => console.error(err));
}, [API])


  return (
    <>
    <div>
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Fiap Commerce!</h2>
    </div>

    <SectionContainer title="Seção de roupas masculinas">
        <>
        {mensClothing.map(repo => (
          <RepoCard
            key={repo.id} // Identificador único de cada card para o React
            {...repo}
          />
        ))}
        </>
      </SectionContainer>

      <SectionContainer title="Seção de Eletronicos">
        <>
        {electronics.map(repo => (
          <RepoCard
            key={repo.id} // Identificador único de cada card para o React
            {...repo}
          />
        ))}
        </>
      </SectionContainer>

    <SectionContainer title="Seção de joias">
        <>
        {jewelery.map(repo => (
          <RepoCard
            key={repo.id} // Identificador único de cada card para o React
            {...repo}
          />
        ))}
        </>
      </SectionContainer>
    </>
  );
}
