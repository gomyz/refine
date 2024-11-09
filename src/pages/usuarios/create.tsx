import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Select, Card } from "antd";
import { usuariosResource } from "../../resources/usuarios";

export const UsuarioCreate = () => {
  const [form] = Form.useForm();

  const { formProps, saveButtonProps } = useForm({
    meta: usuariosResource.meta,
    form
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} form={form} layout="vertical">
        <Card>
          <Form.Item
            label="Nome"
            name="name"
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
            name="role"
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

          <Form.Item
            label="Senha"
            name="password"
            rules={[{ required: true, message: "A senha é obrigatória" }]}
          >
            <Input.Password />
          </Form.Item>
        </Card>
      </Form>
    </Create>
  );
}; 