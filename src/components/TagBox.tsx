import { css } from "@emotion/react";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, Grid, Typography } from "@mui/material";

type TagBoxProps = {
  tags: string[];
  onRemove: (index: number) => void;
};

const TagBox: React.FC<TagBoxProps> = ({ tags, onRemove, ...props }) => {
  return (
    <Grid container spacing={1} css={talentWrapper} {...props}>
      {tags.map((tag, index) => (
        <Grid item key={index}>
          <Box onClick={() => onRemove(index)}>
            <Typography>{tag}</Typography>
            <ClearIcon className="cancelIcon" />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

const talentWrapper = css`
  width: 30rem;
  margin: 1rem 0;
  flex-wrap: wrap;

  .MuiBox-root {
    display: flex;
    align-items: center;
    height: 1.625rem;

    background: #7b7b7b;
    border: 1px solid #7b7b7b;
    border-radius: 20px;
    padding: 0.3125rem 0.625rem;

    .MuiTypography-root {
      color: white;
      font-family: "Barlow", "Noto Sans KR";
      font-size: 0.75rem;
      text-align: center;
    }
    .cancelIcon {
      width: 0.8rem;
      height: 0.8rem;
      color: #7b7b7b;
      margin-left: 0.4375rem;
      display: none;
    }

    &:hover {
      cursor: pointer;
      background: rgba(130, 130, 130, 0.3);
      border: 1px solid #7b7b7b;
      .cancelIcon {
        display: block;
      }
      .MuiTypography-root {
        color: black;
      }
    }
  }
`;

export default TagBox;
