import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { PostsActionsCreator } from "../../redux/actions";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { dispatchStore } from "../../redux/store";
import { Link } from "react-router-dom";
import { FC, useState } from "react";
import "./PostCard.scss";
import Dialog from "@mui/material/Dialog";

type Props = {
  post: Post;
};

export const PostCard: FC<Props> = ({ post }) => {
  const [dialogModal, setDialogModal] = useState(false);

  const handleOpenDialog = () => {
    setDialogModal(true);
  };

  const handleCloseDialog = () => {
    setDialogModal(false);
  };

  const onDeletePost = (id: number | string) => {
    dispatchStore(PostsActionsCreator.deletePost(id));
    handleCloseDialog();
  };

  return (
    <>
      {dialogModal && (
        <Dialog
          open={dialogModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {`Do you really want to delete ${post.title} post?`}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Disagree</Button>
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

      <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {post.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {post.body}
          </Typography>
        </CardContent>

        <CardActions className="card-actions" >
          <Link to={`/post/${post.id}`} className="card-view-post">
            <Button size="medium" variant="outlined">View post</Button>
          </Link>

          <Link to={`/edit/${post.id}`}>
            <Button size="medium">
              <ModeEditOutlinedIcon sx={{ fontSize: 25 }}  color="primary"/>
            </Button>
          </Link>

          <Button color="warning" onClick={handleOpenDialog}>
            <DeleteOutlinedIcon sx={{ fontSize: 25 }} />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
