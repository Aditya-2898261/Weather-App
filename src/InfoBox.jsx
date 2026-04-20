import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){
 
  const initUrl = "https://media.istockphoto.com/id/1598584750/photo/howrah-bridge-postcard.jpg?s=1024x1024&w=is&k=20&c=IjD2x7cZ0j_kWteeC4DhSPbnh20UVBrr2FHb6pQfo3U="

    return(        
        <div className='infocards'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={initUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>Temp: {info.temp}</div>
          <div>Humidity: {info.humidity}</div>
          <div>Fellsike: {info.feelsLike}</div>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    
    )
}