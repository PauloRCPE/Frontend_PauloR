import { BotaoP } from "./Styles";
import { HomeOutlined } from "@ant-design/icons";
import { LoginOutlined } from "@ant-design/icons";

function BotaoPadrao(props) {
  return (
    <div>
      <BotaoP onClick={props.onClick}> {props.children}</BotaoP>
    </div>
  );
}

export default BotaoPadrao;
