import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import boilerroom from "./boilerroom.jpeg";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CardActions from "@mui/material/CardActions";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export function EventCard(props) {
  const { item, onAdd } = props;
  return (
    <Card sx={{ maxWidth: 345 }} className="event-card">
      <CardHeader
        id="card-header"
        avatar={<Avatar>E</Avatar>}
        title={item.title}
      />
      <CardMedia
        component="img"
        height="200"
        image={boilerroom}
        alt="Poster of a boiler room event"
      />
      <CardContent id="card-content">
        <Typography variant="body2" color="text.secondary">
          {/* <a href="https://www.google.com/maps" target="_blank"></a> */}
          <LocationOnIcon id="location-icon" />
          {item.venue.name}
        </Typography>
        {item.startTime && item.endTime && (
          <>
            <Typography
              sx={{ marginLeft: 4 }}
              variant="body2"
              color="text.secondary"
            >
              Start time: {item.startTime}
            </Typography>
            <Typography
              sx={{ marginLeft: 4 }}
              className="event-time"
              variant="body2"
              color="text.secondary"
            >
              End time: {item.endTime}
            </Typography>
          </>
        )}
        {!item.startTime && !item.endTime && item.date && (
          <>
            <Typography
              sx={{ marginLeft: 4 }}
              variant="body2"
              color="text.secondary"
            >
              Time: {item.date}
            </Typography>
          </>
        )}
      </CardContent>
      <CardActions id="action-container">
        <AddCircleIcon id="add-to-cart" onClick={() => onAdd(item)} />
      </CardActions>
    </Card>
  );
}
