import React from "react";
import { Link } from "react-router-dom";
import "./card-details.css";
import ModalPerfil from "../../../Main/Perfil/Modal/Modal";
import Comments from "../TreeComments/Comments";

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function PostCardDetails({modalPerfil, 
                                        abrirFecharModalPerfil, 
                                        filterPost,
                                        users,
                                        categories,
                                        comments}) {
    
    //filtrando os usuários por detalhes do post
    const filterUsers = users.filter(user => user.id === filterPost.userId);

    //filtrando as categorias por detalhes do post
    const filterCategories = categories.filter(category => category.id === filterPost.categoryId);

    //filtrando os likes por detalhes do post
    const filterCommentsLike = comments.filter(comment => comment.postId === filterPost.id && comment.like === true);
    const likeComment = filterCommentsLike.map(comment => comment.like);

    //filtrando os comentarios por detalhes do post
    const filterComments = comments.filter(comment => comment.postId === filterPost.id);
    const comment = filterComments.map(comment => comment.id);

    return (
        <div className="card-container-details">
        <Card>
            {filterUsers.map((filterUser) => (
                <CardHeader
                key={filterUser.id}
                avatar={
                    <Avatar alt="Remy Sharp" ><img alt={filterPost.title} src={filterUser.picture} /></Avatar>
                }
                action={
                    <Tooltip title="Perfil Autor(a)">
                    <IconButton aria-label="settings" onClick={abrirFecharModalPerfil}>
                        <MoreVertIcon />
                    </IconButton>
                    </Tooltip>
                    
                }
                
                title={filterUser.name}
                subheader={filterPost.postedAt}
                />
            ))}
            <CardContent className="card-content">
                <Typography variant="h5" component="h2">
                    {filterPost.title}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                    {filterPost.body}
                </Typography>
            </CardContent>
            <CardActions className="card-actions">
            <div>
                <span className="item-actions">
                    {likeComment.length}{' '}
                    {likeComment.length > 1 ? 'Curtidas' : 'Curtida'}
                </span>
                <span className="item-actions">
                    {comment.length}{' '}
                    {comment.length > 1 ? 'Comentários' : 'Comentário'}
                </span>
            </div>
            <div>
                <span className="item-actions" >Categoria: </span>
                {filterCategories.map((filterCategory) => (
                    <Chip key={filterCategory.id} label={filterCategory.name} className="item-actions" 
                            style={{backgroundColor: `${filterCategory.color}` , color: '#fff',}} />
                ))}
            </div>
            </CardActions>

            {filterComments.map((filterComment) => (
                <Comments key={filterComment.id} filterComment={filterComment} users={users} />
            ))}

            <div className="botao">
                <Button variant="outlined" size="small" >
                    <Link to="/" key="/">Voltar</Link>
                </Button>
            </div>
        </Card>

        {filterUsers.map((filterUser) => (
            <ModalPerfil modalPerfil={modalPerfil} 
                abrirFecharModalPerfil={abrirFecharModalPerfil}
                filterUser={filterUser} key={filterUser.id} />
        ))}
        </div>
  );
}
