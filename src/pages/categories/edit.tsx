import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, Card } from "antd";

export const CategoryEdit = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
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
    </Edit>
  );
};
