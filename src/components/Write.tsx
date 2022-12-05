import React, { useRef } from "react";
import styled from "@emotion/styled";
import { Editor } from "@toast-ui/react-editor";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  ImageListTypeMap,
  Switch,
  TextField,
} from "@mui/material";
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

  return (
    <Wrapper>
      <CustomForm fullWidth>
        <FormControlLabel
          control={
            <TextField
              placeholder="제목을 입력해주세요"
              value={writeDiary.title}
              onChange={(e) => onChange("title", e.target.value)}
              variant="outlined"
              size="small"
              autoFocus
              sx={{ flex: 1 }}
            />
          }
          label="제목"
          labelPlacement="start"
        />
        <FormControlLabel
          control={
            <>
              {writeDiary.image ? (
                <img
                  className="preview"
                  src={URL.createObjectURL(writeDiary.image)}
                  alt="이미지"
                />
              ) : (
                <label className="uploadImage" htmlFor="image-upload">
                  이미지를 등록해주세요
                </label>
              )}
              <input
                type="file"
                id="image-upload"
                accept="image/jpg,image/png,image/jpeg,image/gif"
                name="profile_img"
                onChange={(e) => onChange("image", e.target.files![0])}
                style={{ display: "none" }}
              />
            </>
          }
          label="대표 이미지"
          labelPlacement="start"
        />

        <FormControlLabel
          control={
            <Switch
              checked={writeDiary.isPublic}
              onClick={() => onChange("isPublic", !writeDiary.isPublic)}
            />
          }
          label="전체 공개"
          labelPlacement="start"
        />
        <FormControlLabel
          control={
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
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
            </Box>
          }
          label="태그 입력"
          labelPlacement="start"
        />
      </CustomForm>

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

      <Button className="submit" variant="contained" onClick={onSubmit}>
        저장
        <DoneIcon />
      </Button>
    </Wrapper>
  );
};

export default Write;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  .Mui-focused {
    color: black;
  }

  .MuiInput-underline:after {
    border-bottom-color: black;
  }

  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: #9d9d9d;
    }
    &.Mui-focused fieldset {
      border-color: #636363;
    }
  }

  .submit {
    width: 100%;
    color: white;
    background-color: #444444;
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

const CustomForm = styled(FormControl)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .MuiFormControlLabel-root {
    width: 100%;
    margin-left: 0;
    justify-content: flex-end;
    padding: 1rem 0;

    .MuiTypography-root {
      width: 6rem;
    }
  }

  .MuiFormControlLabel-root + .MuiFormControlLabel-root {
    border-top: 1px solid #e0e0e0;
  }

  .preview {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    object-position: center;
  }

  .uploadImage {
  }
`;
