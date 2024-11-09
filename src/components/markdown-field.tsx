import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownFieldProps {
  value: string;
}

export const MarkdownField: React.FC<MarkdownFieldProps> = ({ value }) => {
  if (!value) return null;

  return (
    <div className="markdown-preview">
      <ReactMarkdown>{value}</ReactMarkdown>
    </div>
  );
}; 