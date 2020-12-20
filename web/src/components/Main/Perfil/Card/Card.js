import React from "react";
import Card from '@material-ui/core/Card';
import "./card.css";

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

export default function PerfilCard({user}) {

  const classes = useStyles();
  
  return (
    <div className="card-container-perfil">
      <Card className="card-content">
        <Avatar alt="Remy Sharp" className={classes.large} >
          <img alt={user.name} src={user.picture} />
        </Avatar>
        <div className="texto-perfil">
          <Typography variant="h4" component="h2">
            {user.name}
          </Typography>
          <Typography variant="h6" component="h2">
            <b>Trabalho: </b>{user.job}
          </Typography>
          <Typography variant="h6" component="h2">
          <b>Data conta: </b>{user.joinedAt}
          </Typography>
        </div>
      </Card>
    </div>
  );
}
