import { IoMdCloseCircle } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar}) => {
    function favoritar() {
        aoFavoritar(colaborador.id)
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar,
        color: 'red'
    }
    return (<div className="colaborador">
            <IoMdCloseCircle
                onClick={() => aoDeletar(colaborador.id)}
                size={25}
                className="icone-deletar"
            />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favoritar">
                {colaborador.favorito
                    ? <FaHeart {...propsfavorito}/> 
                    : <FaRegHeart {...propsfavorito} />
                }
            </div>
        </div>
    </div>)
}

export default Colaborador;