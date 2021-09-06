// import { Menu } from 'antd';
import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu} from "antd";
import logoImage from "../../assets/Logo.png";
import { SIDER_MENU_LIST } from "./menu";

function Sidebar({ routes, collapsed }) {
  const { SubMenu } = Menu;
  const { Sider } = Layout;
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("");
  const [openKeys, setOpenKeys] = useState([]);

  const handleOpenChange = (openKeys) => {
    setOpenKeys(openKeys);
  };
  useEffect(() => {
    const pathname = location.pathname;
    const fragment = pathname.split("/").slice(0, 3);
    const prefixPath = fragment.join("/");
    if (fragment.length === 3) {
      for (let i = 0; i < SIDER_MENU_LIST.length; i++) {
        const menu = SIDER_MENU_LIST[i];
        if (Array.isArray(menu.children)) {
          const findIdx = menu.children.findIndex(
            (menu) => pathname === menu.path
          );
          if (findIdx !== -1) {
            setSelectedKeys(menu.children[findIdx].path);
            setOpenKeys([menu.name]);
            break;
          }
        }
        if (menu.path.indexOf(prefixPath) !== -1) {
          setSelectedKeys(menu.path);
          break;
        }
      }
    }
  }, [location.pathname]);

  const menuItems = useMemo(() => {
    return SIDER_MENU_LIST.map((menu) => {
      if (Array.isArray(menu.children)) {
        return (
          <SubMenu
            key={menu.name}
            title={
              <>
                {menu.icon}
                <span>{menu.name}</span>
              </>
            }
          >
            {menu.children.map((subItem) => (
              <Menu.Item key={subItem.path}>
                <Link to={subItem.path}>{subItem.name}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        );
      }

      return (
        <Menu.Item key={menu.path}>
          <Link to={menu.path}>
            {menu.icon}
            <span>{menu.name}</span>
          </Link>
        </Menu.Item>
      );
    });
  }, []);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={220}
      className='sidebar'
    >
        <img id="logo" src={logoImage} alt='imPACT' />
      {/* <div>
        {collapsed ? (
          <img id="logo" src={logoImage} alt='imPACT' />
        ) : (
          "imPACT"
        )}
      </div> */}

      <Menu
        selectedKeys={[selectedKeys]}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        mode='inline'
        theme='dark'
      >
        {menuItems}
      </Menu>
    </Sider>
  );
}

export default Sidebar;
