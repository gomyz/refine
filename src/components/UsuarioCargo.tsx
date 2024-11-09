import { Tag } from "antd";

type UsuarioCargoProps = {
  cargo?: string;
};

export const UsuarioCargo: React.FC<UsuarioCargoProps> = ({ cargo }) => {
  switch (cargo) {
    case "ADMIN":
      return <Tag color="red">Administrador</Tag>;
    case "GESTOR":
      return <Tag color="blue">Gestor</Tag>;
    case "USUARIO":
      return <Tag color="green">Usuário</Tag>;
    default:
      return <Tag>-</Tag>;
  }
}; 