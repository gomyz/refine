import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Card } from "antd";

export const CategoryCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Card>
          <Form.Item
            label="Nome"
            name="nome"
            rules={[
              { required: true, message: "O nome é obrigatório" }
            ]}
          >
            <Input />
          </Form.Item>
        </Card>
      </Form>
    </Create>
  );
};
