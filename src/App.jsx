import "../src/App.css";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { DivTeste2 } from "./AppStyles";
import { useState, useEffect, use } from "react";

function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    alert("abriu");
  }, [contador == 100]);

  return (
    <div>
      <Button
        onClick={() => setContador(contador + 1)}
        type="primary"
        size="large"
        icon={<DownloadOutlined />}
      >
        {contador}
      </Button>
      <DivTeste2>ola essa porra tá aq?</DivTeste2>
    </div>
  );
}

export default App;
