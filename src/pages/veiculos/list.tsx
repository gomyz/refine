import { DeleteButton, EditButton, List, ShowButton, useTable } from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Space, Table, Card, Form, Button, Input } from "antd";
import { veiculosResource } from "../../resources/veiculos";
import { VeiculoStatus } from "../../components/VeiculoStatus";

export const VeiculoList = () => {
  const { tableProps, searchFormProps } = useTable({
    syncWithLocation: true,
    meta: veiculosResource.meta,
    filters: {
      initial: [
        {
          field: "placa",
          operator: "contains",
          value: undefined,
        },
      ],
    },
  });

  return (
    <List>
      <Card style={{ marginBottom: 20 }}>
        <Form {...searchFormProps} layout="vertical">
          <Form.Item label="Buscar" name={["filters", "0", "value"]}>
            <Input placeholder="Buscar por placa" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Filtrar
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Table {...tableProps} rowKey="id">
        <Table.Column 
          dataIndex="placa" 
          title="Placa"
          sorter
        />
        <Table.Column 
          dataIndex="modelo" 
          title="Modelo"
          sorter
        />
        <Table.Column
          dataIndex="status"
          title="Status"
          render={(value) => <VeiculoStatus status={value} />}
          filters={[
            { text: 'Disponível', value: 'DISPONIVEL' },
            { text: 'Em Uso', value: 'EM_USO' },
            { text: 'Manutenção', value: 'MANUTENCAO' },
          ]}
        />
        <Table.Column
          dataIndex={["responsavel", "nome"]}
          title="Responsável"
          sorter
        />
        <Table.Column
          title="Ações"
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}; 