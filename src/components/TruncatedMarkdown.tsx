import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Card, Space } from "antd";
import { MarkdownEditor } from "../../components/MDEditor";

export const BlogPostEdit = () => {
  const { formProps, saveButtonProps, queryResult, formLoading } = useForm({
    meta: {
      select: "*, categories(id,title)",
    },
  });

  const blogPostsData = queryResult?.data?.data;

  const { selectProps: categorySelectProps } = useSelect({
    resource: "categories",
    defaultValue: blogPostsData?.categories,
    queryOptions: {
      enabled: !!blogPostsData?.categories,
    },
  });

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Form {...formProps} layout="vertical">
        <Card>
          <Form.Item
            label="Título"
            name={["title"]}
            rules={[{ required: true, message: "O título é obrigatório" }]}
          >
            <Input />
          </Form.Item>

          <Space size="large" style={{ display: 'flex', marginBottom: 24 }}>
            <Form.Item
              label="Categoria"
              name="categoryId"
              style={{ marginBottom: 0, minWidth: 200 }}
              rules={[{ required: true, message: "A categoria é obrigatória" }]}
            >
              <Select {...categorySelectProps} />
            </Form.Item>

            <Form.Item
              label="Status"
              name={["status"]}
              style={{ marginBottom: 0 }}
              rules={[{ required: true, message: "O status é obrigatório" }]}
            >
              <Select
                options={[
                  { value: "draft", label: "Rascunho" },
                  { value: "published", label: "Publicado" },
                  { value: "rejected", label: "Rejeitado" },
                ]}
                style={{ width: 120 }}
              />
            </Form.Item>
          </Space>

          <Form.Item
            label="Conteúdo"
            name="content"
            rules={[{ required: true, message: "O conteúdo é obrigatório" }]}
          >
            <MarkdownEditor style={{ height: 400 }} />
          </Form.Item>
        </Card>
      </Form>
    </Edit>
  );
};
