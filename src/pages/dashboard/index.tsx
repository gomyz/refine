import { useList } from "@refinedev/core";
import { Row, Col, Card, Typography, Statistic, Progress } from "antd";
import { CarOutlined, CarFilled, ToolOutlined } from "@ant-design/icons";
import "./dashboard.css";

const { Title } = Typography;

export const DashboardPage = () => {
  const { data: veiculos } = useList({
    resource: "veiculos",
    meta: { 
      select: `
        id,
        status,
        modelo,
        placa,
        responsavel:pessoas!veiculos_responsavel_id_fkey(id,nome)
      `
    }
  });

  const { data: equipamentos } = useList({
    resource: "equipamentos",
    meta: { 
      select: `
        id,
        status,
        nome,
        responsavel:pessoas!equipamentos_responsavel_id_fkey(id,nome)
      `
    }
  });

  const calcularPorcentagem = (status, data) => {
    if (!data?.length) return 0;
    return Math.round((data.filter(item => item.status === status).length / data.length) * 100);
  };

  return (
    <div className="dashboard-container">
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Title level={2}>
            Dashboard de Gestão de Frotas
          </Title>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card className="stat-card">
            <Statistic 
              title="Veículos Disponíveis"
              value={veiculos?.data?.filter(v => v.status === "DISPONIVEL").length || 0}
              prefix={<CarOutlined style={{ color: '#52c41a' }} />}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card className="stat-card">
            <Statistic
              title="Veículos em Uso"
              value={veiculos?.data?.filter(v => v.status === "EM_USO").length || 0}
              prefix={<CarFilled style={{ color: '#1890ff' }} />}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card className="stat-card">
            <Statistic
              title="Em Manutenção"
              value={veiculos?.data?.filter(v => v.status === "MANUTENCAO").length || 0}
              prefix={<ToolOutlined style={{ color: '#faad14' }} />}
            />
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="Status dos Veículos" className="chart-card">
            <div style={{ padding: "20px" }}>
              <Progress 
                percent={calcularPorcentagem("DISPONIVEL", veiculos?.data)} 
                status="success"
                format={percent => `Disponíveis ${percent}%`}
              />
              <Progress 
                percent={calcularPorcentagem("EM_USO", veiculos?.data)}
                status="active"
                format={percent => `Em Uso ${percent}%`}
              />
              <Progress 
                percent={calcularPorcentagem("MANUTENCAO", veiculos?.data)}
                status="exception"
                format={percent => `Manutenção ${percent}%`}
              />
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="Status dos Equipamentos" className="chart-card">
            <div style={{ padding: "20px" }}>
              <Progress 
                percent={calcularPorcentagem("ATIVO", equipamentos?.data)}
                status="success"
                format={percent => `Ativos ${percent}%`}
              />
              <Progress 
                percent={calcularPorcentagem("MANUTENCAO", equipamentos?.data)}
                status="active"
                format={percent => `Manutenção ${percent}%`}
              />
              <Progress 
                percent={calcularPorcentagem("DEFEITO", equipamentos?.data)}
                status="exception"
                format={percent => `Defeito ${percent}%`}
              />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}; 