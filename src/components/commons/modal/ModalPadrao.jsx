import { StyModal } from "./Style";
import { Children, useState } from "react";
import { Button } from "antd";

function ModalP({ open, setOpen, children, foottext }) {
  return (
    <StyModal
      open={open}
      closable={true}
      centered={true}
      onCancel={() => {
        setOpen(false);
      }}
      footer={
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{
              backgroundColor: "transparent",
              color: "#615700",
              borderColor: "#5b5100",
            }}
            key="ok"
            type="primary"
            onClick={() => setOpen(false)}
          >
            {foottext}
          </Button>
        </div>
      }
      onOk={() => {
        setOpen(false);
      }}
    >
      {children}
    </StyModal>
  );
}

export default ModalP;
