import { Tag } from "antd";

type VeiculoStatusProps = {
  status?: string;
};

export const VeiculoStatus: React.FC<VeiculoStatusProps> = ({ status }) => {
  switch (status) {
    case "DISPONIVEL":
      return <Tag color="success">Disponível</Tag>;
    case "EM_USO":
      return <Tag color="processing">Em Uso</Tag>;
    case "MANUTENCAO":
      return <Tag color="warning">Em Manutenção</Tag>;
    default:
      return <Tag>-</Tag>;
  }
}; 