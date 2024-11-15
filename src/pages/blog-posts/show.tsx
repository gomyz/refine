import { DateField, MarkdownField, Show, TextField } from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography } from "antd";
import { BlogPostStatus } from "../../components/BlogPostStatus";

const { Title } = Typography;

export const BlogPostShow = () => {
  const { queryResult } = useShow({
    meta: {
      select: "*, categories(id,title)",
    },
  });
  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: categoryData, isLoading: categoryIsLoading } = useOne({
    resource: "categories",
    id: record?.categories?.id || "",
    queryOptions: {
      enabled: !!record,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{"Title"}</Title>
      <TextField value={record?.title} />
      <Title level={5}>{"Content"}</Title>
      <MarkdownField value={record?.content} />
      <Title level={5}>{"Category"}</Title>
      <TextField
        value={
          categoryIsLoading ? <>Loading...</> : <>{categoryData?.data?.title}</>
        }
      />
      <Title level={5}>{"Status"}</Title>
      <BlogPostStatus status={record?.status} />
      <Title level={5}>{"CreatedAt"}</Title>
      <DateField value={record?.createdAt} />
    </Show>
  );
};
