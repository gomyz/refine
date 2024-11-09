import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Card, Space } from "antd";
import dayjs from "dayjs";
import { EquipamentoStatus } from "../../components/EquipamentoStatus";

const { TextArea } = Input;

export const EquipamentoEdit = () => {
  const { formProps, saveButtonProps } = useForm({
    meta: equipamentosResource.meta,
  });

  const { selectProps: responsavelSelectProps } = useSelect({
    resource: "pessoas",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Nome"
          name="nome"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Código"
          name="codigo"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Responsável"
          name="responsavel_id"
          rules={[{ required: true }]}
        >
          <Select {...responsavelSelectProps} />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true }]}
        >
          <Select
            options={[
              { value: "ATIVO", label: "Ativo" },
              { value: "INATIVO", label: "Inativo" },
              { value: "MANUTENCAO", label: "Em Manutenção" },
              { value: "DEFEITO", label: "Com Defeito" },
            ]}
          />
        </Form.Item>
      </Form>
    </Edit>
  );
};
