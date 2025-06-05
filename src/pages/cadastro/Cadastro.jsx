import { StyInput } from "../../components/commons/inputs/InputPadrao";
import { StySenha } from "../../components/commons/inputs/InputSenha";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { Button, Image } from "antd";
import BotaoCriaConta from "../../components/features/botaoCriaConta/BotaoCriaConta";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          display: "flex",
          paddingLeft: "10vh",
          backgroundColor: "#FFE712",
          height: "16vh",
          alignItems: "center",
        }}
      >
        <Image
          preview={false}
          src="https://media.discordapp.net/attachments/674342271147311107/1379917188474863749/4fd3f3931b40ec2bf56833299097665c7347434c.png?ex=6841fb87&is=6840aa07&hm=227dcb8ae98495432cedccce7eea62008aaab99e5c72c2f1ea202001ec893ad1&=&format=webp&quality=lossless&width=829&height=829"
          height={"33vh"}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <text
          style={{
            fontSize: "6vh",
            color: "#FFE712",
            fontFamily: "'Roboto', sans-serif",
            marginBottom: "2vh",
          }}
        >
          CADASTRO
        </text>
        <StyInput variant="Outlined" placeholder="Nome" />
        <StyInput variant="Outlined" placeholder="Email" />
        <StyInput variant="Outlined" placeholder="Cargo" />
        <StySenha
          placeholder="Senha"
          visibilityToggle={true}
          iconRender={(visible) =>
            visible ? <EyeFilled /> : <EyeInvisibleFilled />
          }
        />
        <StySenha
          placeholder="Repita a senha"
          visibilityToggle="True"
          iconRender={(visible) =>
            visible ? <EyeFilled s /> : <EyeInvisibleFilled />
          }
        />
        <text
          style={{
            fontSize: "2vh",
            color: "white",
            fontFamily: "'Roboto', sans-serif",
            marginBottom: "2vh",
          }}
        >
          Já tem uma conta? Faça o login
          {
            <Button
              onClick={() => navigate("/login")}
              size="small"
              type="Text"
              style={{ color: "#FFE712" }}
            >
              aqui
            </Button>
          }
        </text>
        <BotaoCriaConta>
          <text
            style={{
              fontSize: "3vh",
              color: "black",
              fontFamily: "'Roboto', sans-serif",
              fontStyle: "normal",
              marginBottom: "2vh",
            }}
          >
            CRIAR CONTA{" "}
          </text>
        </BotaoCriaConta>
      </div>
    </div>
  );
}

export default Cadastro;
