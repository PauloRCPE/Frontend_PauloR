import BotaoPadrao from "../../components/commons/botaoPadrao";
import { useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        Home:
        <BotaoPadrao onClick={() => navigate("/")}>
          <HomeOutlined style={{ fontSize: "270%" }} />
        </BotaoPadrao>
      </div>
    </div>
  );
}

export default Login;
