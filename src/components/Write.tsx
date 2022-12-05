import React, { useRef } from "react";
import styled from "@emotion/styled";
import { Editor } from "@toast-ui/react-editor";
import { Box, Button, Grid, ImageListTypeMap, TextField } from "@mui/material";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import DoneIcon from "@mui/icons-material/Done";
import TagInput from "./TagInput";
import TagBox from "./TagBox";
import ImageUploading from "react-images-uploading";

type WriteProps = {
  writeDiary: WriteDiary;
  onChange: (property: keyof WriteDiary, data: any) => void;
  onSubmit: () => void;
};

const Write: React.FC<WriteProps> = ({ writeDiary, onChange, onSubmit }) => {
  const editorRef = useRef<Editor>(null);

  const onChangeEditor = () => {
    const data = editorRef.current!.getInstance().getHTML();
    console.log(data);
    onChange("contents", data);

    console.log(data.replace(/(\<.*?\>)|(\n)/g, ""));
  };

  return (
    <Wrapper>
      <Box className="header">
        <TextField
          className="titleInput"
          placeholder="제목을 입력해주세요"
          value={writeDiary.title}
          onChange={(e) => onChange("title", e.target.value)}
          variant="standard"
          autoFocus
        />
        <Button className="submit" variant="contained" onClick={onSubmit}>
          저장
          <DoneIcon />
        </Button>
      </Box>

      <Editor
        ref={editorRef}
        previewStyle="vertical"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        plugins={[colorSyntax]}
        initialValue={writeDiary.contents}
        onChange={() =>
          onChange("contents", editorRef.current!.getInstance().getHTML())
        }
        language="ko-KR"
        height="calc(100vh - 20rem)"
      />

      <TagInput
        tags={writeDiary.tags}
        onCreate={(input) => {
          onChange("tags", writeDiary.tags.concat(input));
        }}
      />
      <TagBox
        tags={writeDiary.tags}
        onRemove={(index: number) => {
          onChange(
            "tags",
            writeDiary.tags.filter((input, i) => index !== i)
          );
        }}
      />
      <input
        type="file"
        accept="image/jpg,image/png,image/jpeg,image/gif"
        name="profile_img"
        onChange={(e) => onChange("image", e.target.files![0])}
      />
      <p>전체 공개</p>
      <input
        type="checkbox"
        checked={writeDiary.isPublic}
        onChange={(e) => onChange("isPublic", e.target.checked)}
      />
    </Wrapper>
  );
};

export default Write;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  .header {
    display: flex;
    align-items: flex-end;
    margin-bottom: 1.5rem;

    .titleInput {
      padding-right: 1rem;
      flex: 1;

      .MuiInputBase-input {
        font-size: 1.5rem;
      }

      & label.Mui-focused {
        color: black;
      }

      & .MuiInput-underline:after {
        border-bottom-color: black;
      }
    }

    .submit {
      width: 5.2rem;
      height: 100%;
      color: white;
      background-color: #444444;
    }
  }

  .toastui-editor-defaultUI {
    border: none !important;
  }

  .toastui-editor-mode-switch {
    display: none !important;
  }

  .toastui-editor-contents {
    padding: 1rem 0;

    p {
      font-size: 1rem;
    }

    h1 {
      border: none;
    }

    h2 {
      border: none;
    }
  }
`;
