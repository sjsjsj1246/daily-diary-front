import React from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import styled from "@emotion/styled";

const Write: React.FC = () => {
  return (
    <Wrapper>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </Wrapper>
  );
};

export default Write;

const Wrapper = styled.div`
  flex: 1;
`;
