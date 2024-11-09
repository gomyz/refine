import { DeleteButton, EditButton, List, ShowButton, useTable } from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";
import { equipamentosResource } from "../../resources/equipamentos";
import { EquipamentoStatus } from "../../components/EquipamentoStatus";

export const EquipamentoList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: equipamentosResource.meta,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column 
          dataIndex="nome" 
          title="Nome"
          sorter
        />
        <Table.Column
          dataIndex="status"
          title="Status"
          render={(value) => <EquipamentoStatus status={value} />}
        />
        <Table.Column
          dataIndex={["responsavel", "nome"]}
          title="Responsável"
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