import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const VeiculoShow = () => {
  const { queryResult } = useShow({
    meta: {
      select: "*, responsavel:pessoas!veiculos_responsavel_id_fkey(id,nome)",
    },
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Placa</Title>
      <TextField value={record?.placa} />

      <Title level={5}>Modelo</Title>
      <TextField value={record?.modelo} />

      <Title level={5}>Status</Title>
      <TextField value={record?.status} />

      <Title level={5}>Responsável</Title>
      <TextField value={record?.responsavel?.nome} />
    </Show>
  );
}; 