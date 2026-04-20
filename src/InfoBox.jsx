import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){
 
  const initUrl = "https://media.istockphoto.com/id/1598584750/photo/howrah-bridge-postcard.jpg?s=1024x1024&w=is&k=20&c=IjD2x7cZ0j_kWteeC4DhSPbnh20UVBrr2FHb6pQfo3U="

  const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
  const COLD_URL = "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const RAINY_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=1024x1024&w=is&k=20&c=JmmkAKBNVz2QC2YaXGl8lLvYQYrn6SYXt_FPtN-8JUc="

    return(        
        <div className='infocards'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAINY_URL : info.humidity<15 ? COLD_URL : HOT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>Temp: {info.temp}</div>
          <div>Humidity: {info.humidity}</div>
          <div>Feelslike: {info.feelsLike}</div>
           <div>MinTemp: {info.tempMin}</div>
            <div>MaxTemp: {info.tempMax}</div>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    
    )
}