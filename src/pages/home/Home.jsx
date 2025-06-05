import { Button, Image, List } from "antd";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
//import { Sessoes } from "../../components/features/sessaoLista/SessõesTable";

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <div
        style={{
          display: "flex",
          paddingLeft: "10vh",
          backgroundColor: "#FFE712",
          height: "12vh",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "100px",
        }}
      >
        <Image
          preview={false}
          src="https://media.discordapp.net/attachments/674342271147311107/1379917188474863749/4fd3f3931b40ec2bf56833299097665c7347434c.png?ex=6841fb87&is=6840aa07&hm=227dcb8ae98495432cedccce7eea62008aaab99e5c72c2f1ea202001ec893ad1&=&format=webp&quality=lossless&width=829&height=829"
          height={"24vh"}
        />
        <Button type="Text">
          <text style={{ fontSize: "4vh" }}>HOME</text>
        </Button>
        <Button type="Text">
          <text style={{ fontSize: "4vh" }}>PERFIL</text>
        </Button>
        <Button type="Text">
          <text style={{ marginRight: "200px", fontSize: "4vh" }}>
            USUÁRIOS
          </text>
        </Button>
      </div>
      <div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={5000}
          style={{
            height: "50%",
            objectFit: "scale-down",
            innerWidth: "10%",
            alignItems: "center",
          }}
          showArrows={true}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <button
              onClick={clickHandler}
              disabled={!hasPrev}
              style={{
                position: "absolute",
                bottom: "40%",
                left: "30%",
                zIndex: 1,
                background: "#FFE712",
                borderRadius: "50%",
                width: 40,
                height: 40,
                border: "none",
                cursor: "pointer",
              }}
            >
              <LeftOutlined style={{ color: "#000", fontSize: 20 }} />
            </button>
          )}
          renderArrowNext={(clickHandler, hasNext) => (
            <button
              onClick={clickHandler}
              disabled={!hasNext}
              style={{
                position: "absolute",
                right: "30%",
                top: "50%",
                zIndex: 1,
                background: "#FFE712",
                borderRadius: "50%",
                width: 40,
                height: 40,
                border: "none",
                cursor: "pointer",
              }}
            >
              <RightOutlined style={{ color: "#000", fontSize: 20 }} />
            </button>
          )}
        >
          <div>
            <img
              src="https://media.discordapp.net/attachments/674342271147311107/1379956574755225671/CarroselAviso.jpg?ex=68422035&is=6840ceb5&hm=ea2c99810ba84b13ecc759578c7cd5fd08289cba740c572eb9eeecac7aaa8db1&=&format=webp&width=1241&height=699"
              style={{ height: "50vh  ", objectFit: "contain" }}
            />
          </div>
          <div>
            <img
              src="https://media.discordapp.net/attachments/674342271147311107/1379956575153819648/CarroselEng.png?ex=68422035&is=6840ceb5&hm=457473fc2ae6b0476480e1efc9ab53d443900bc5f9d9c91d35485e80c2752528&=&format=webp&quality=lossless&width=1000&height=668"
              style={{ height: "50vh", objectFit: "contain" }}
            />
          </div>
          <div>
            <img
              src="https://media.discordapp.net/attachments/674342271147311107/1379956575883497483/CarrosselZe.jpeg?ex=68422036&is=6840ceb6&hm=12cdc9ebc18820fd355ac7b86ede6e9f3acca797010e74739ece9363a51efaeb&=&format=webp&width=699&height=699"
              style={{ height: "50vh", objectFit: "contain" }}
            />
          </div>
          <div>
            <img
              src="https://media.discordapp.net/attachments/674342271147311107/1379956576286281824/CarrosselLamps.png?ex=68422036&is=6840ceb6&hm=ffa598df2e97b0ae7e2c537c8423ae61caee8766278e420f6620865284b9c9b3&=&format=webp&quality=lossless&width=750&height=563"
              style={{ height: "50vh", objectFit: "contain" }}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
