import { StyInput } from "../../components/commons/inputs/InputPadrao";
import { StySenha } from "../../components/commons/inputs/InputSenha";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Image } from "antd";

function Cadastro() {
  return (
    <div>
      <div>
        <Image src="" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <StyInput variant="Outlined" placeholder="Nome" />
        <StyInput variant="Outlined" placeholder="Email" />
        <StyInput variant="Outlined" placeholder="Cargo" />
        <StySenha
          placeholder="Senha"
          visibilityToggle="True"
          iconRender={(visible) =>
            visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
          }
        />
        <StySenha
          placeholder="Repita a senha"
          visibilityToggle="True"
          iconRender={(visible) =>
            visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
          }
        />
      </div>
    </div>
  );
}

export default Cadastro;
