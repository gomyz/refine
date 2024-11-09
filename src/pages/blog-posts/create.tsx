import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { MarkdownEditor } from "../../components/MDEditor";

export const BlogPostCreate = () => {
  const { formProps, saveButtonProps } = useForm({
    meta: {
      select: "*, categoria:categorias!blog_posts_categoria_id_fkey(id,nome)",
    },
  });

  const { selectProps: categorySelectProps } = useSelect({
    resource: "categorias",
    optionLabel: "nome",
    optionValue: "id",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Título"
          name="title"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Categoria"
          name="categoria_id"
          rules={[{ required: true }]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true }]}
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
          rules={[{ required: true }]}
        >
          <MarkdownEditor />
        </Form.Item>
      </Form>
    </Create>
  );
};
