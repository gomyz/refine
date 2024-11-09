import { Tag } from "antd";

type StatusProps = {
  status: "ATIVO" | "INATIVO" | "MANUTENCAO" | "DEFEITO";
};

export const EquipamentoStatus = ({ status }: StatusProps) => {
  const statusMap = {
    ATIVO: { color: "success", label: "Ativo" },
    INATIVO: { color: "default", label: "Inativo" },
    MANUTENCAO: { color: "processing", label: "Em Manutenção" },
    DEFEITO: { color: "error", label: "Com Defeito" },
  };

  const { color, label } = statusMap[status] || { color: "default", label: status };

  return <Tag color={color}>{label}</Tag>;
};
