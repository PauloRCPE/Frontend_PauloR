import { BotaoP } from "./Styles";

function BotaoPadrao(props) {
  return (
    <div>
      <BotaoP onClick={props.onClick}> {props.children}</BotaoP>
    </div>
  );
}

export default BotaoPadrao;
