import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  DialogActions,
  DialogTitle,
  CardMedia,
} from "@mui/material";
import { PostsActionsCreator } from "../../redux/actions";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { dispatchStore } from "../../redux/store";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import "./Post.scss";

type Props = {
  post: Post;
};

export const Post: React.FC<Props> = ({ post }) => {
  const [dialogModal, setDialogModal] = useState<boolean>(false);
  const [limitWordsBody, setLimitWordsBody] = useState<number>(60);

  const onDeletePost = (id: number | string) => {
    dispatchStore(PostsActionsCreator.deletePost(id));
    setDialogModal(false);
  };

  const cutTextBody = (text: string, limitWordsBody: number) => {
    if (text && text.split(" ").length > limitWordsBody) {
      return `${text.split(" ").slice(0, limitWordsBody).join(" ")}...`;
    } else {
      return text;
    }
  };

  return (
    <>
      {dialogModal && (
        <Dialog
          open={dialogModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>
            Do you really want to delete <span>{post.title}</span> post?
          </DialogTitle>
          <DialogActions>
            <Button onClick={() => setDialogModal(false)}>Disagree</Button>
            <Button
              color="warning"
              onClick={() => onDeletePost(post.id)}
              autoFocus
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      )}

      <Card
        sx={{ minWidth: 275, paddingBottom: "10px" }}
        variant="outlined"
        className="post-card"
      >
        {post.image && (
          <CardMedia
            component="img"
            height="194"
            image={post.image}
            alt="Paella dish"
          />
        )}
        <CardContent>
          <Typography variant="h5" component="div" className="post-card-title">
            {post.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: 0.5 }}
          >
            {post.timestamp && `${post.timestamp}`}
          </Typography>

          <Typography variant="body1" sx={{ marginTop: 2 }}>
            {cutTextBody(post.body, limitWordsBody)}
          </Typography>
        </CardContent>

        <CardActions
          className="card-actions"
          sx={{ marginTop: 2, marginLeft: 1 }}
        >
          <Link to={`/post/${post.id}`} className="card-view-post">
            <Button size="medium" variant="outlined">
              View post
            </Button>
          </Link>

          <div>
            <Link to={`/edit/${post.id}`}>
              <Button size="medium">
                <ModeEditOutlinedIcon sx={{ fontSize: 25 }} color="primary" />
              </Button>
            </Link>

            <Button color="warning" onClick={() => setDialogModal(true)}>
              <DeleteOutlinedIcon sx={{ fontSize: 25 }} />
            </Button>
          </div>
        </CardActions>
      </Card>
    </>
  );
};
