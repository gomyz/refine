import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, DatePicker, Card } from "antd";

export const VeiculoCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  const { selectProps: responsavelSelectProps } = useSelect({
    resource: "pessoas",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
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
            initialValue="DISPONIVEL"
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
    </Create>
  );
}; 