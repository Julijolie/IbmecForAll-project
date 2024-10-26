import { Card } from "./Style";

const ProjetoCard = (props) => (
  <Card>
    <div className="nome">{props.nome}</div>
    <figure>
      <img src={props.src}/>
    </figure>
  </Card>
)

export default ProjetoCard;