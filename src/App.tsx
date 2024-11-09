import { Authenticated, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { BrowserRouter } from "react-router-dom";

import {
  AuthPage,
  ErrorComponent,
  ThemedLayoutV2,
  useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { dataProvider } from "@refinedev/supabase";
import { App as AntdApp } from "antd";
import { createBrowserRouter, RouterProvider, Outlet, Route, Routes } from "react-router-dom";
import authProvider from "./authProvider";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import {
  BlogPostCreate,
  BlogPostEdit,
  BlogPostList,
  BlogPostShow,
} from "./pages/blog-posts";
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from "./pages/categories";
import { supabaseClient } from "./utility";
import { CustomSider } from "./components/sider";
import { EquipamentoList, EquipamentoCreate, EquipamentoEdit, EquipamentoShow } from "./pages/equipamentos";
import { equipamentosResource } from "./resources/equipamentos";
import { veiculosResource } from "./resources/veiculos";
import { usuariosResource } from "./resources/usuarios";
import { DashboardOutlined } from "@ant-design/icons";
import { DashboardPage } from "./pages/dashboard";
import { UsuarioList, UsuarioCreate, UsuarioEdit, UsuarioShow } from "./pages/usuarios";
import { VeiculoList, VeiculoCreate, VeiculoEdit, VeiculoShow } from "./pages/veiculos";
import { postsResource } from "./resources/posts";
import { categoriasResource } from "./resources/categorias";
import { LandPage } from "./pages/landpage";
import { ThemedSiderV2 } from "@refinedev/antd";
import { ToolOutlined } from "@ant-design/icons";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider(supabaseClient)}
                authProvider={authProvider}
                routerProvider={routerBindings}
                notificationProvider={useNotificationProvider}
                resources={[
                  {
                    name: "dashboard",
                    list: "/dashboard",
                    meta: {
                      label: "Dashboard",
                      icon: <DashboardOutlined />,
                    },
                  },
                  {
                    name: "blog-posts",
                    list: "/blog-posts",
                    create: "/blog-posts/create",
                    edit: "/blog-posts/edit/:id",
                    show: "/blog-posts/show/:id",
                    meta: {
                      ...postsResource.meta,
                      canDelete: true,
                    },
                  },
                  {
                    name: "categories",
                    list: "/categories",
                    create: "/categories/create",
                    edit: "/categories/edit/:id",
                    show: "/categories/show/:id",
                    meta: {
                      ...categoriasResource.meta,
                      canDelete: true,
                    },
                  },
                  {
                    name: "equipamentos",
                    list: "/equipamentos",
                    create: "/equipamentos/create",
                    edit: "/equipamentos/edit/:id",
                    show: "/equipamentos/show/:id",
                    meta: {
                      ...equipamentosResource.meta,
                      canDelete: true,
                    },
                  },
                  {
                    name: "veiculos",
                    list: "/veiculos",
                    create: "/veiculos/create",
                    edit: "/veiculos/edit/:id",
                    show: "/veiculos/show/:id",
                    meta: {
                      ...veiculosResource.meta,
                      canDelete: true,
                    },
                  },
                  {
                    name: "usuarios",
                    list: "/usuarios",
                    create: "/usuarios/create",
                    edit: "/usuarios/edit/:id",
                    show: "/usuarios/show/:id",
                    meta: {
                      ...usuariosResource.meta,
                      canDelete: true,
                    },
                  }
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                }}
                components={{
                  sider: ThemedSiderV2
                }}
              >
                <Routes>
                  <Route path="/" element={<LandPage />} />
                  <Route
                    element={
                      <Authenticated fallback={<CatchAllNavigate to="/login" />}>
                        <ThemedLayoutV2>
                          <Outlet />
                        </ThemedLayoutV2>
                      </Authenticated>
                    }
                  >
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/blog-posts">
                      <Route index element={<BlogPostList />} />
                      <Route path="create" element={<BlogPostCreate />} />
                      <Route path="edit/:id" element={<BlogPostEdit />} />
                      <Route path="show/:id" element={<BlogPostShow />} />
                    </Route>
                    <Route path="/categories">
                      <Route index element={<CategoryList />} />
                      <Route path="create" element={<CategoryCreate />} />
                      <Route path="edit/:id" element={<CategoryEdit />} />
                      <Route path="show/:id" element={<CategoryShow />} />
                    </Route>
                    <Route path="/equipamentos">
                      <Route index element={<EquipamentoList />} />
                      <Route path="create" element={<EquipamentoCreate />} />
                      <Route path="edit/:id" element={<EquipamentoEdit />} />
                      <Route path="show/:id" element={<EquipamentoShow />} />
                    </Route>
                    <Route path="/veiculos">
                      <Route index element={<VeiculoList />} />
                      <Route path="create" element={<VeiculoCreate />} />
                      <Route path="edit/:id" element={<VeiculoEdit />} />
                      <Route path="show/:id" element={<VeiculoShow />} />
                    </Route>
                    <Route path="/usuarios">
                      <Route index element={<UsuarioList />} />
                      <Route path="create" element={<UsuarioCreate />} />
                      <Route path="edit/:id" element={<UsuarioEdit />} />
                      <Route path="show/:id" element={<UsuarioShow />} />
                    </Route>
                  </Route>
                  <Route
                    element={
                      <Authenticated fallback={<Outlet />}>
                        <NavigateToResource resource="dashboard" />
                      </Authenticated>
                    }
                  >
                    <Route path="/login" element={<AuthPage type="login" />} />
                  </Route>
                </Routes>
              </Refine>
            </DevtoolsProvider>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
