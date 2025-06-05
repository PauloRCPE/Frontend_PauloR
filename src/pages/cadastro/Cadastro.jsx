import { StyInput } from "../../components/commons/inputs/InputPadrao";
import { StySenha } from "../../components/commons/inputs/InputSenha";
import { Button, Image } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { StyForm } from "./Styles";
import { useForm } from "react-hook-form";
import { useCreateUser } from "../../../hooks/usuarios";
import { HomeFilled } from "@ant-design/icons";

function Cadastro() {
  const navigate = useNavigate();
  const { mutate: postUser, isPending } = useCreateUser({});
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({});
  function response(data) {
    postUser(data);
  }

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
        <Button
          type="primary"
          onClick={() => navigate("/")}
          icon={<HomeFilled />}
          style={{ backgroundColor: "transparent", color: "Black" }}
        ></Button>
      </div>
      <StyForm onSubmit={handleSubmit(response)}>
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
        <StyInput {...register("nome")} placeholder="Nome" />
        <StyInput {...register("email")} placeholder="Email" />
        <StyInput {...register("cargo")} placeholder="Cargo" />
        <StySenha {...register("senha")} placeholder="Senha" />
        <StySenha placeholder="Repita a senha" />
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
        <button>
          <text
            style={{
              fontSize: "3vh",
              color: "black",
              fontFamily: "'Roboto', sans-serif",
              fontStyle: "normal",
              marginBottom: "2vh",
              width: "27vh",
              height: "7vh",
              borderRadius: "20px",
            }}
          >
            CRIAR CONTA{" "}
          </text>
        </button>
      </StyForm>
    </div>
  );
}
export default Cadastro;
