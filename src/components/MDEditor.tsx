import MDEditor from "@uiw/react-md-editor";
import { useMemo } from "react";

type Props = {
  value?: string;
  onChange?: (value?: string) => void;
};

export const MarkdownEditor = ({ value, onChange }: Props) => {
  const commands = useMemo(
    () => [
      "title",
      "bold",
      "italic",
      "quote",
      "code",
      "link",
      "image",
      "unordered-list",
      "ordered-list",
    ],
    []
  );

  return (
    <MDEditor
      value={value}
      onChange={onChange}
      preview="edit"
      height={500}
      data-color-mode="light"
      commands={commands}
      extraCommands={[]}
    />
  );
};