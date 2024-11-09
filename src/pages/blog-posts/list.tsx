import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useTable,
  useSelect,
} from "@refinedev/antd";
import { type BaseRecord } from "@refinedev/core";
import { Space, Table, Input, Select, Form, Button, Card } from "antd";
import { BlogPostStatus } from "../../components/BlogPostStatus";
import { postsResource } from "../../resources/posts";

const { Search } = Input;

export const BlogPostList = () => {
  const { tableProps, searchFormProps } = useTable({
    syncWithLocation: true,
    resource: "blog_posts",
    meta: {
      ...postsResource.meta,
    },
    filters: {
      mode: "server",
      initial: [
        {
          field: "title",
          operator: "contains",
          value: undefined,
        },
      ],
    },
    pagination: {
      mode: "server",
    },
  });

  const { selectProps: categorySelectProps } = useSelect({
    resource: "categorias",
    optionLabel: "nome",
    optionValue: "id",
    meta: {
      select: "id,nome"
    }
  });

  return (
    <List>
      <Card style={{ marginBottom: 20 }}>
        <Form {...searchFormProps} layout="vertical">
          <Form.Item label="Buscar" name={["filters", "0", "value"]}>
            <Search placeholder="Buscar por título" />
          </Form.Item>
          <Form.Item label="Categoria" name="categoria_id">
            <Select
              {...categorySelectProps}
              allowClear
              placeholder="Selecione uma categoria"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Filtrar
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="title" title="Título" sorter />
        <Table.Column
          dataIndex="content"
          title="Conteúdo"
          render={(value: string) => (
            <MarkdownField value={value?.slice(0, 80) + "..."} />
          )}
        />
        <Table.Column
          dataIndex={["categoria", "nome"]}
          title="Categoria"
        />
        <Table.Column
          dataIndex="status"
          title="Status"
          render={(value) => <BlogPostStatus status={value} />}
        />
        <Table.Column
          dataIndex="created_at"
          title="Data de Criação"
          render={(value) => <DateField value={value} format="DD/MM/YYYY" />}
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
