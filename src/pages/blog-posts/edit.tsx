import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Card } from "antd";
import { MarkdownEditor } from "../../components/MDEditor";
import { postsResource } from "../../resources/posts";

export const BlogPostEdit = () => {
  const { formProps, saveButtonProps } = useForm({
    meta: postsResource.meta,
  });

  const { selectProps: categorySelectProps } = useSelect({
    resource: "categorias",
    optionLabel: "nome",
    optionValue: "id",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Card>
          <Form.Item
            label="Título"
            name="title"
            rules={[
              { required: true, message: "O título é obrigatório" },
              { min: 3, message: "O título deve ter no mínimo 3 caracteres" }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Categoria"
            name="categoria_id"
            rules={[{ required: true, message: "A categoria é obrigatória" }]}
          >
            <Select {...categorySelectProps} />
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "O status é obrigatório" }]}
          >
            <Select
              options={[
                { label: "Rascunho", value: "draft" },
                { label: "Publicado", value: "published" },
                { label: "Rejeitado", value: "rejected" },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="Conteúdo"
            name="content"
            rules={[{ required: true, message: "O conteúdo é obrigatório" }]}
          >
            <MarkdownEditor />
          </Form.Item>
        </Card>
      </Form>
    </Edit>
  );
};
