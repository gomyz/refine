import { Button, Card, Col, Row, Typography, Layout, List, Avatar, Tag } from "antd";
import { CarOutlined, ToolOutlined, UserOutlined, RocketOutlined, ReadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useList } from "@refinedev/core";
import { VeiculoStatus } from "../../components/VeiculoStatus";
import { EquipamentoStatus } from "../../components/EquipamentoStatus";
import "./landpage.css";

const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

export const LandPage = () => {
  const navigate = useNavigate();

  const { data: posts } = useList({
    resource: "blog_posts",
    meta: {
      select: `
        id,
        title,
        content,
        created_at,
        categoria:categorias(id,nome)
      `
    },
    pagination: {
      pageSize: 3
    },
    sorters: [
      {
        field: "created_at",
        order: "desc"
      }
    ]
  });

  return (
    <Layout className="landing-layout">
      <div className="landing-background" />
      <Header className="landing-header">
        <Row justify="space-between" align="middle">
          <Col>
            <div className="logo-container">
              <RocketOutlined className="logo-icon" />
              <Title level={3} className="logo-title">
                Sistema de Gestão de Frotas
              </Title>
            </div>
          </Col>
          <Col>
            <Button type="primary" size="large" className="access-button" onClick={() => navigate("/login")}>
              Começar Agora
            </Button>
          </Col>
        </Row>
      </Header>

      <Content className="landing-content">
        <div className="hero-section">
          <Title className="main-title">
            Transforme sua Gestão de Frotas
            <span className="highlight"> em Resultados</span>
          </Title>
          <Paragraph className="main-subtitle">
            Simplifique o controle da sua frota com nossa plataforma integrada.
            Monitore veículos, equipamentos e equipe em tempo real.
          </Paragraph>
          <Button type="primary" size="large" className="cta-button" onClick={() => navigate("/login")}>
            Experimente Gratuitamente
            <RocketOutlined className="cta-icon" />
          </Button>
        </div>

        <Row gutter={[32, 32]} className="features-section">
          <Col xs={24} sm={12} md={8}>
            <Card className="feature-card vehicles-card">
              <div className="card-content">
                <CarOutlined className="feature-icon" />
                <Title level={4}>Gestão de Veículos</Title>
                <div className="status-list">
                  <VeiculoStatus status="DISPONIVEL" /> Disponíveis
                  <VeiculoStatus status="EM_USO" /> Em Uso
                  <VeiculoStatus status="MANUTENCAO" /> Manutenção
                </div>
              </div>
            </Card>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Card className="feature-card equipment-card">
              <div className="card-content">
                <ToolOutlined className="feature-icon" />
                <Title level={4}>Controle de Equipamentos</Title>
                <div className="status-list">
                  <EquipamentoStatus status="ATIVO" /> Ativos
                  <EquipamentoStatus status="MANUTENCAO" /> Manutenção
                  <EquipamentoStatus status="DEFEITO" /> Defeito
                </div>
              </div>
            </Card>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Card className="feature-card users-card">
              <div className="card-content">
                <UserOutlined className="feature-icon" />
                <Title level={4}>Gestão de Usuários</Title>
                <ul className="feature-list">
                  <li>Controle de Permissões</li>
                  <li>Histórico de Atividades</li>
                  <li>Gestão de Responsabilidades</li>
                </ul>
              </div>
            </Card>
          </Col>
        </Row>

        <div className="posts-section">
          <Title level={2} className="section-title">
            Blog e Novidades
            <ReadOutlined className="section-icon" />
          </Title>

          <Row gutter={[24, 24]}>
            {posts?.data?.map((post) => (
              <Col xs={24} sm={24} md={8} key={post.id}>
                <Card 
                  hoverable
                  className="post-card"
                  onClick={() => navigate(`/blog-posts/show/${post.id}`)}
                >
                  <Card.Meta
                    title={
                      <div className="post-header">
                        <Title level={4} className="post-title">{post.title}</Title>
                        <span className="post-date">
                          {new Date(post.created_at).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    }
                    description={
                      <>
                        {post.categoria?.nome && (
                          <Tag color="blue" className="post-category">
                            {post.categoria.nome}
                          </Tag>
                        )}
                        <Paragraph ellipsis={{ rows: 3 }} className="post-excerpt">
                          {post.content?.replace(/[#*]/g, '')}
                        </Paragraph>
                      </>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>

          <div className="posts-cta">
            <Button 
              type="primary" 
              size="large" 
              ghost
              onClick={() => navigate("/blog-posts")}
              className="view-all-button"
            >
              Ver Todas as Publicações
            </Button>
          </div>
        </div>
      </Content>

      <Footer className="landing-footer">
        <div className="footer-content">
          <Title level={5} className="footer-title">Sistema de Gestão de Frotas</Title>
          <Paragraph className="footer-copyright">
            © {new Date().getFullYear()} Todos os direitos reservados
          </Paragraph>
        </div>
      </Footer>
    </Layout>
  );
};
