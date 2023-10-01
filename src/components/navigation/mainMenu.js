import { Button, Drawer, FloatButton, Grid, Menu } from "antd";
import { useState } from "react";

import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
export const MainMenu = () => {
  const { useBreakpoint } = Grid;
  const { md } = useBreakpoint();
  const [current, setCurrent] = useState("retreat");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const items = [
    {
      label: (
        <a
          href="https://movementcollection.co.uk/"
          target="_blank"
          rel="noreferrer"
          className="mainFont"
          style={{ textDecoration: "none" }}
          onClick={onClose}
        >
          {"MC"}
        </a>
      ),
      key: "link1",
    },
  ];
  const itemsMobile = [
    {
      label: (
        <Link onClick={onClose} to={"/"}>
          <Button size="large">{"Beginner Rings"}</Button>
        </Link>
      ),
      key: "beginner-rings",
    },
    {
      label: (
        <Link onClick={onClose} to={"/"} style={{ textDecoration: "none" }}>
          {`Mobility`} - <small>Coming Soon!</small>
        </Link>
      ),
      key: "eo-mobility",
    },
    // {
    //   label: (
    //     <Link onClick={onClose} to={"/"} style={{ textDecoration: "none" }}>
    //       {`Movement`} - <small>Coming Soon!</small>
    //     </Link>
    //   ),

    //   key: "movement",
    // },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      {md ? (
        <div>
          <Menu
            onClick={onClick}
            disabledOverflow={true}
            style={{ justifyContent: "right", borderBottom: "0px" }}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </div>
      ) : (
        <div>
          <Button
            type="primary"
            onClick={showDrawer}
            style={{ backgroundColor: "black" }}
          >
            <MenuOutlined style={{ verticalAlign: "middle" }} />
          </Button>
          <Drawer
            zIndex={1030}
            placement={"right"}
            title="Programmes"
            // closable={false}
            width={300}
            onClose={onClose}
            open={open}
            key={"right"}
          >
            <Menu
              onClick={onClick}
              style={{ justifyContent: "right", borderBottom: "0px" }}
              selectedKeys={[current]}
              mode="inline"
              items={itemsMobile}
            />
          </Drawer>
          <FloatButton.BackTop />
        </div>
      )}
    </div>
  );
};
