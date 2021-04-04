import React from "react";
import { FileMarkdown } from "components/FileMarkdown";
import privacy from "./views/privacy.md";

export const Privacy = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <FileMarkdown file={privacy} />
    </div>
  );
};
