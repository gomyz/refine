import { Tag } from "antd";

type StatusProps = {
  status: "draft" | "published" | "rejected";
};

export const BlogPostStatus = ({ status }: StatusProps) => {
  const statusMap = {
    draft: { color: "processing", label: "Rascunho" },
    published: { color: "success", label: "Publicado" },
    rejected: { color: "error", label: "Rejeitado" },
  };

  const { color, label } = statusMap[status] || { color: "default", label: status };

  return <Tag color={color}>{label}</Tag>;
};