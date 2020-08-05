import React from 'react';
import Description from "./Description";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto",
  },
  media: {
    height: 100,
    width: 100,
    borderRadius: 50,
    margin: "auto",
  },
});

export default function PplCard({phone, city, state, age, email, firstname, lastname, picture}) {
  const classes = useStyles();

  const [showMore, setShowMore] = React.useState(false)
  const onClick = () => setShowMore(true)

  return (
    <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={picture}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {firstname +" "+ lastname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {city}, {state}
          </Typography>
          <div id="learnMore">
        <Typography variant="body2" color="textSecondary" component="p">
            Age: {age}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Email: {email}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Phone: {phone}
          </Typography>
        </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onClick}>
          { showMore ? <Description /> : "Learn More" }
        </Button>
        
      </CardActions>
    </Card>
    </div>
  );
}
