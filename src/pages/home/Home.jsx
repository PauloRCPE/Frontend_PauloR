import BotaoPadrao from "../../components/commons/botaoPadrao";
import { useNavigate } from "react-router-dom";
import { LoginOutlined } from "@ant-design/icons";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ color: "White" }}>
        Login:
        <BotaoPadrao onClick={() => navigate("/login")}>
          <LoginOutlined style={{ fontSize: "270%" }} />
        </BotaoPadrao>
      </div>
    </div>
  );
}

export default Home;
