import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.scss";

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <img
        className="not-found-image"
        src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?t=st=1654682411~exp=1654683011~hmac=a3158054b86752f4d34ec12eb50d770e6271672d2570dbeca4eb4c203d61d549"
        alt="not-found"
      />
      <Button
        sx={{ margin: "auto" }}
        variant="outlined"
        color="success"
        onClick={() => navigate("/")}
      >
        Go home
      </Button>
    </div>
  );
};
