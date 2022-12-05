import { TextField } from "@mui/material";
import React, { useState } from "react";

type TagInputProps = {
  tags: string[];
  onCreate: (tag: string) => void;
};

const TagInput: React.FC<TagInputProps> = ({ tags, onCreate, ...props }) => {
  const [input, setInput] = useState("");
  const [lengthError, setLengthError] = useState(false);

  const handleChange = (e: any) => {
    if (e.target.value.length > 10) {
      setLengthError(true);
      return;
    }
    setLengthError(false);
    setInput(e.target.value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleCreate();
    }
  };

  const handleCreate = () => {
    const trimmedInput = input.trim();
    if (
      trimmedInput.length > 0 &&
      trimmedInput.length <= 10 &&
      tags.length < 6
    ) {
      onCreate(trimmedInput);
      setInput("");
      setLengthError(false);
    }
  };

  return (
    <TextField
      size="small"
      placeholder="최대 6개까지 입력해주세요"
      value={input}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      error={tags.length >= 6 || lengthError}
      helperText={
        tags.length >= 6
          ? "더이상 추가할 수 없습니다."
          : lengthError && "10자 이내로 입력해주세요"
      }
      {...props}
    />
  );
};

export default TagInput;
