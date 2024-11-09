import { DateField, Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography, Card } from "antd";
import { usuariosResource } from "../../resources/usuarios";

const { Title } = Typography;

export const UsuarioShow = () => {
  const { queryResult } = useShow({
    meta: usuariosResource.meta
  });

  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Card>
        <Title level={5}>Nome</Title>
        <TextField value={record?.nome} />

        <Title level={5}>Email</Title>
        <TextField value={record?.email} />

        <Title level={5}>Cargo</Title>
        <TextField value={record?.role} />

        <Title level={5}>Criado em</Title>
        <DateField value={record?.created_at} format="DD/MM/YYYY HH:mm" />

        <Title level={5}>Atualizado em</Title>
        <DateField value={record?.updated_at} format="DD/MM/YYYY HH:mm" />
      </Card>
    </Show>
  );
}; 