import "./index.scss";
import { Link } from "react-router-dom";

export default function SidebarItem({ icon, text, link }) {
    return (
        <div className="componente-sidebarItem">
            <Link to={link}>
                <div className="item">
                    {icon && (
                        <img
                            src={icon}
                            style={{ width: 30 }}
                            alt="==> /assets"
                        />
                    )}
                    <p> {text} </p>
                </div>
            </Link>
        </div>
    );
}
