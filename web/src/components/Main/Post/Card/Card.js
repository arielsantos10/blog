import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Chip from '@material-ui/core/Chip';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ModeCommentIcon from '@material-ui/icons/ModeComment';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 34,
    top: 5,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

export default function PostCard({ filteredPost, users, categories, comments }) {

  //filtrando os usuários de cada post
  const filterUsers = users.filter(user => user.id === filteredPost.userId);
  
  //filtrando as categorias de cada post
  const filterCategories = categories.filter(category => category.id === filteredPost.categoryId);

  //filtrando os likes por posts e os que são true
  const filterCommentsLike = comments.filter(comment => comment.postId === filteredPost.id && comment.like === true);
  const likeComment = filterCommentsLike.map(comment => comment.like);

  //filtrando os comentários por post
  const filterComments = comments.filter(comment => comment.postId === filteredPost.id);
  const comment = filterComments.map(comment => comment.id);
  
  return (
    <div className="container-card">
      <Card>
        {filterUsers.map((filterUser) => (
          <CardHeader
            key={filterUser.id}
            avatar={
              <Avatar alt="Remy Sharp" ><img alt={filteredPost.title} src={filterUser.picture} /></Avatar>
            }
            
            title={filterUser.name}
            subheader={filteredPost.postedAt}
          />
        ))}
        <CardContent className="card-content">
          <Typography variant="h5" component="h2">
            {filteredPost.title}
          </Typography>
        </CardContent>
        <CardActions className="card-actions">
          <div>
            <StyledBadge badgeContent={likeComment.length} color="secondary">
              <ThumbUpAltIcon className="item-actions" />
            </StyledBadge>
            <StyledBadge badgeContent={comment.length} color="secondary">
              <ModeCommentIcon className="item-actions" />
            </StyledBadge>
            {filterCategories.map((filterCategory) => (
              <Chip key={filterCategory.id} label={filterCategory.name} className="item-actions" style={{backgroundColor: `${filterCategory.color}` , color: '#fff',}} />
            ))}
          </div>
          <Button variant="outlined" size="small" >
            <Link to={`/detalhes/${filteredPost.id}`} key="/detalhes">Detalhes</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
