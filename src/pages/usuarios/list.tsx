import { DeleteButton, EditButton, List, ShowButton, useTable } from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";
import { usuariosResource } from "../../resources/usuarios";

export const UsuarioList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: usuariosResource.meta,
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
          dataIndex="email" 
          title="Email"
          sorter
        />
        <Table.Column 
          dataIndex="role" 
          title="Cargo"
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