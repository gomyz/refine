import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, Select, Card } from "antd";
import { usuariosResource } from "../../resources/usuarios";

export const UsuarioEdit = () => {
  const [form] = Form.useForm();

  const { formProps, saveButtonProps } = useForm({
    meta: usuariosResource.meta,
    form
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} form={form} layout="vertical">
        <Card>
          <Form.Item
            label="Nome"
            name="nome"
            rules={[{ required: true, message: "O nome é obrigatório" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "O email é obrigatório" },
              { type: "email", message: "Email inválido" }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Cargo"
            name="cargo"
            rules={[{ required: true, message: "O cargo é obrigatório" }]}
          >
            <Select
              options={[
                { value: "ADMIN", label: "Administrador" },
                { value: "GESTOR", label: "Gestor" },
                { value: "USUARIO", label: "Usuário" },
              ]}
            />
          </Form.Item>
        </Card>
      </Form>
    </Edit>
  );
}; 