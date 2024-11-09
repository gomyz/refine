import React from "react";
import { ThemedSiderV2 } from "@refinedev/antd";
import { 
  FileOutlined, 
  AppstoreOutlined,
  ToolOutlined,
  HistoryOutlined,
  UserOutlined,
  TeamOutlined,
  ShoppingOutlined,
  UserSwitchOutlined,
  CarOutlined
} from "@ant-design/icons";
import type { ThemedSiderV2Props } from "@refinedev/antd";

export const CustomSider: React.FC<ThemedSiderV2Props> = () => {
  const menuItems = [
    {
      key: "equipamentos",
      label: "Equipamentos",
      icon: <ToolOutlined />,
    },
    {
      key: "logs-acesso",
      label: "Logs de Acesso",
      icon: <HistoryOutlined />,
    },
    {
      key: "perfis",
      label: "Perfis",
      icon: <UserOutlined />,
    },
    {
      key: "pessoas",
      label: "Pessoas",
      icon: <TeamOutlined />,
    },
    {
      key: "produtos",
      label: "Produtos",
      icon: <ShoppingOutlined />,
    },
    {
      key: "usuarios",
      label: "Usuários",
      icon: <UserSwitchOutlined />,
    },
    {
      key: "veiculos",
      label: "Veículos",
      icon: <CarOutlined />,
    }
  ];

  return <ThemedSiderV2 items={menuItems} />;
}; 