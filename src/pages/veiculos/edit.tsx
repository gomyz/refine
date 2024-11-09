import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Card } from "antd";

export const VeiculoEdit = () => {
  const { formProps, saveButtonProps } = useForm({});

  const { selectProps: responsavelSelectProps } = useSelect({
    resource: "pessoas",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Card>
          <Form.Item
            label="Placa"
            name="placa"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Modelo"
            name="modelo"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true }]}
          >
            <Select
              options={[
                { value: "DISPONIVEL", label: "Disponível" },
                { value: "EM_USO", label: "Em Uso" },
                { value: "MANUTENCAO", label: "Em Manutenção" },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="Responsável"
            name="responsavel_id"
            rules={[{ required: true }]}
          >
            <Select {...responsavelSelectProps} />
          </Form.Item>
        </Card>
      </Form>
    </Edit>
  );
}; 