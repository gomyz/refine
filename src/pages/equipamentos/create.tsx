import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const EquipamentoCreate = () => {
  const { formProps, saveButtonProps } = useForm({
    meta: {
      select: "*",
    },
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Nome"
          name="nome"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Marca"
          name="marca"
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
              { label: "Ativo", value: "ATIVO" },
              { label: "Manutenção", value: "MANUTENCAO" },
              { label: "Defeito", value: "DEFEITO" },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Responsável"
          name="responsavel_id"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Selecione um responsável"
          />
        </Form.Item>
      </Form>
    </Create>
  );
}; 