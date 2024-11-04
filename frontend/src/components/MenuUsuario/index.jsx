import "./index.scss";
import Menu from "../menu/index.jsx";

export default function MenuUsuario() {
    return (
        <div className="component-menuUsuario">
            <Menu
                itens={[
                    {
                        icone: "/assets/images/menu/home.svg",
                        nome: "Inicio",
                        link: "/",
                    },
                    {
                        icone: "/assets/images/menu/shop.svg",
                        nome: "Produtos",
                        link:"/produtos"
                    },
                    {
                        icone: "/assets/images/menu/sobre.svg",
                        nome: "Sobre nós",
                        link: "/sobre"
                    },
                ]}
            />
        </div>
    );
}
