import React from "react";
import "./comments.css";

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


export default function Comments({filterComment, users}) {

    //filtrando os usuários por comentários
    const filterUsers = users.filter(user => user.id === filterComment.userId);
    const userName = filterUsers.map(filterUser => filterUser.name);
    const userAvatar = filterUsers.map(filterUser => filterUser.picture);
    
    return (
            <Paper variant="outlined" className="fundo-comentarios">
                    <div className="comentario" >
                        <div>
                        <Avatar alt="Remy Sharp" ><img alt={filterComment.content} src={userAvatar} /></Avatar>
                        </div>
                        <div className="texto-comentairo">
                            <div className="caixa-comentario">
                                
                                    <span><b>{userName}</b></span>
                                
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {filterComment.content}
                                </Typography>
                            </div>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {filterComment.postedAt}
                            </Typography>
                        </div>
                    </div>
            </Paper>
  );
}
