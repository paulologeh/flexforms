import React from "react";
import { FileMarkdown } from "components/FileMarkdown";
import terms from "./views/terms.md";

export const Terms = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <FileMarkdown file={terms} />
    </div>
  );
};
