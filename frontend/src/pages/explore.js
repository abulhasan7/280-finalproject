// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dataList from "../components/data.json"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import config from '../config';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import getProfile from '../utils';
import { refreshProfile } from '../redux/userSlice';

function Explore() {
  // TODO FIX THE DESCRIPTION SIZE, SO THAT DISPLAY IS PREDICTABLE
  const [spaces, setSpaces] = useState([]);
  const dispatch = useDispatch();
  const profile = useSelector(state => {
    if (state.userSlice.profile) {
      console.log('state is ', state.userSlice)
      return state.userSlice.profile
    } return undefined
  });
  useEffect(() => {
    axios.get(config.BASE_URL + '/spaces', {
      headers: {
        'Authorization': profile.token
      }
    }).then(response => {
      if (response.status == 200 && response.data.statusCode == 200) {
        console.log(response.data);
        setSpaces(response.data.data.spaces);
      } else {
        console.log('some exception occurred', response)
      }
    }).catch(error => console.log('some exception occurred', error));
  }, [])
  function followSpace(e) {
    console.log(e.target.id);
    axios.post(config.BASE_URL + '/follow-space', { space: e.target.id }, {
      headers: {
        'Authorization': profile.token
      }
    }).then(response => {
      if (response.status == 200 && response.data.statusCode == 200) {
        console.log(response.data);
        getProfile(profile.token).then(response => dispatch(refreshProfile(response)))
        // setSpaces(response.data.data);
      } else {
        console.log('some exception occurred', response)
      }
    }).catch(error => console.log('some exception occurred', error));
  }

  function unfollowSpace(e) {
    console.log(e.target.id);
    axios.post(config.BASE_URL + '/unfollow-space', { space: e.target.id }, {
      headers: {
        'Authorization': profile.token
      }
    }).then(response => {
      if (response.status == 200 && response.data.statusCode == 200) {
        console.log(response.data);
        getProfile(profile.token).then(response => dispatch(refreshProfile(response)))
        // setSpaces(response.data.data);
      } else {
        console.log('some exception occurred', response)
      }
    }).catch(error => console.log('some exception occurred', error));
  }

  return (
    <div style={{ maxWidth: "100%", marginLeft: "130px", display: "flex", flexWrap: "wrap" }}>
      {/* TODO ADD EXPLORE SPACES HEADING HERE */}
      {spaces.map((space) => (
        <Card style={{ marginLeft: 40, marginTop: 50, width: 350, boxShadow: "10px 5px 5px gray" }} sx={{ maxWidth: 500 }}>
          <>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={space.headerImageUrl} />
            <CardContent style={{height:150}}>
              <Typography gutterBottom variant="h5" component="div">
                {space.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {space.description}
              </Typography>
            </CardContent>
            <CardActions style={{}}>
             <Link style={{textDecoration:"none"}} to='../space' state={space.name}><OpenInNewIcon style={{ fontSize: 20,color:"black" }} /> <Button size="small" style={{color:"black"}}>Go to space</Button></Link>
              {profile.followedSpaces.includes(space.name)?<><FavoriteIcon/><Button size="small" id={space.name} style={{color:"black"}} onClick={unfollowSpace}>Following</Button></>:<><FavoriteBorderIcon/><Button size="small" id={space.name} onClick={followSpace} style={{color:"black"}}>Follow</Button></>}
            </CardActions></>

        </Card>
      ))}
    </div>);
}
export default Explore;