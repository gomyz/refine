import { DateField, Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";
import { EquipamentoStatus } from "../../components/EquipamentoStatus";

const { Title } = Typography;

export const EquipamentoShow = () => {
  const { queryResult } = useShow({
    meta: {
      select: "*, responsavel:pessoas!equipamentos_responsavel_id_fkey(id,nome)",
    },
  });
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <TextField value={record?.id} />

      <Title level={5}>Nome</Title>
      <TextField value={record?.nome} />

      <Title level={5}>Código</Title>
      <TextField value={record?.codigo} />

      <Title level={5}>Status</Title>
      <EquipamentoStatus status={record?.status} />

      <Title level={5}>Localização</Title>
      <TextField value={record?.localizacao} />

      <Title level={5}>Especificações Técnicas</Title>
      <TextField value={record?.especificacoes_tecnicas} />

      <Title level={5}>Última Manutenção</Title>
      <DateField value={record?.ultima_manutencao} format="DD/MM/YYYY" />

      <Title level={5}>Próxima Manutenção</Title>
      <DateField value={record?.proxima_manutencao} format="DD/MM/YYYY" />

      <Title level={5}>Observações</Title>
      <TextField value={record?.observacoes} />

      <Title level={5}>Criado em</Title>
      <DateField value={record?.created_at} />

      <Title level={5}>Atualizado em</Title>
      <DateField value={record?.updated_at} />

      <Title level={5}>Responsável</Title>
      <TextField value={record?.pessoas?.nome} />
    </Show>
  );
}; 