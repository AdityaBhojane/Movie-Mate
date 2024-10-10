
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

interface Movie {
    Title:string;
    Poster:string;
    Type:string;
    Year:string;
  }
  

export default function MovieCard({Title,Poster,Year,Type}:Movie) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Poster}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <span className="flex justify-between">
                <span>{Type}</span>
                <span>{Year}</span>
            </span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
