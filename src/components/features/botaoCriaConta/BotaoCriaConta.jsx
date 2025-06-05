import { BotaoCC } from "./Styles";

function BotaoCriaConta(props) {
  return (
    <div>
      <BotaoCC onClick={props.onClick}> {props.children}</BotaoCC>
    </div>
  );
}

export default BotaoCriaConta;
