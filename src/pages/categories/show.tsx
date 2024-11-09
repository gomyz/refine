import { DateField, Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography, Card } from "antd";
import { categoriasResource } from "../../resources/categorias";

const { Title } = Typography;

export const CategoryShow = () => {
  const { queryResult } = useShow({
    meta: categoriasResource.meta
  });

  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Card>
        <Title level={5}>Nome</Title>
        <TextField value={record?.nome} />

        <Title level={5}>Criado em</Title>
        <DateField value={record?.created_at} format="DD/MM/YYYY HH:mm" />

        <Title level={5}>Atualizado em</Title>
        <DateField value={record?.updated_at} format="DD/MM/YYYY HH:mm" />
      </Card>
    </Show>
  );
};
