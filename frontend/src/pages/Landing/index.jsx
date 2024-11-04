import React, { useState, useEffect, useCallback } from "react"; // Mantenha apenas esta linha
import "./index.scss";
import MenuUsuario from "../../components/MenuUsuario/index.jsx";
import Cabe from "../../components/cabecalho/index.jsx";
import Rodape from "../../components/rodape/index.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../../components/CardProduto/index.jsx";

export default function App() {
  const [produto, setProduto] = useState([]);

  const buscarProdutos = useCallback(async () => {
    const url = `http://localhost:5031/select/produto`;
    const resp = await axios.get(url);
    const produtos = Array.isArray(resp.data) ? resp.data : [];
    setProduto(produtos);
  }, []);

  useEffect(() => {
    buscarProdutos();
  }, [buscarProdutos]);

  const slides = [
    {
      image: "/assets/images/landing/wavely.svg",
      title: "Wavely",
      description:
        "Definição e leveza! Formulada especialmente para valorizar a beleza natural dos seus fios, Wavely oferece a hidratação e o controle que você precisa para ondas e cachos incríveis, sem pesar.",
    },
    {
      image: "/assets/images/landing/carbon.svg",
      title: "Carbon",
      description:
        "Renovação profunda com tecnologia avançada e ingredientes selecionados para quem busca uma limpeza intensa e uma restauração completa do cabelo.",
    },
    {
      image: "/assets/images/landing/blueSky.svg",
      title: "Blue Sky",
      description:
        "Experimente Blue Sky, a linha de cosméticos capilares que leva a leveza e frescor do céu diretamente para os seus cabelos!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageChange = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="pagina-landing">
      <header>
        <MenuUsuario />
        <Cabe />
      </header>
      <div className="secao-landing0">
        <div className="secao-landing">
          <div className="land">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === currentIndex ? "active" : ""}`}
              >
                <img
                  className="banner"
                  src={slide.image}
                  alt={`Banner ${index + 1}`}
                />
                {index === currentIndex && (
                  <div
                    className={`banner-content ${
                      slide.title === "Carbon" ? "right" : "left"
                    }`}
                  >
                    <h1
                      style={{
                        color: slide.title === "Carbon" ? "#fff" : "#000",
                      }}
                    >
                      {slide.title}
                    </h1>
                    <p>{slide.description}</p>
                    <Link to={"/produtos/"} className="veja-mais">
                      Veja mais
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="dots-container">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => handleImageChange(index)}
              ></button>
            ))}
          </div>
        </div>

        <div className="ashei">
          <h1>So na Ashey</h1>

          <div className="images">
            <img src="/assets/images/landing/oboticario.png" alt="" />
            <img src="/assets/images/landing/loreal.png" alt="" />
            <img src="/assets/images/landing/natura.png" alt="" />
            <img src="/assets/images/landing/truss.webp" alt="" />
            <img src="/assets/images/landing/pantene.png" alt="" />
          </div>
        </div>

        <div className="listaProdutos">
          <h1>Resultados Principais</h1>
          <div className="produtos">
            {produto.length > 0 ? (
              produto.map((item) => (
                <Card
                  imagem={item.img}
                  alt={item.img}
                  preco={item.valor}
                  nome={item.nome}
                  link={item.id}
                />
              ))
            ) : (
              <p>Nenhum produto encontrado</p>
            )}
          </div>
        </div>

      </div>
      <div className="rodape">
        <footer>
          <Rodape />
        </footer>
      </div>
    </div>
  );
}
