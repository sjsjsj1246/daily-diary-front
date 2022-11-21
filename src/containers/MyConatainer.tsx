import My from "@components/My";
import React from "react";
import { useParams } from "react-router";

const MyConatainer: React.FC = () => {
  const { id } = useParams();

  return <My />;
};

export default MyConatainer;
