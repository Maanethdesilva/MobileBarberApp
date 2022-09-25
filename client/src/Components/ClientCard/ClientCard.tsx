import React, { useState } from 'react'
import Axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface IProps {
  barber?: any;
}
interface IState {
  height?: string;
  barberName?: string;
  barberBio?: string;
  images?: any[];
}

class ClientCard extends React.Component<IProps, IState> {

  defaultImage = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E'

  constructor(props: any) {
    super(props)

    const barber = props.barber

    this.state = {
      height: '230',
      barberName: barber.DisplayName ? barber.DisplayName: 'Barber',
      barberBio: barber.Bio ? barber.Bio: 'Provides haircuts for men',
      images: [],
    }
  }

  componentDidMount(): void {
    this.getImages(this.props.barber.ClientId);
  }

  getImages(ClientId: number){
    Axios.get('http://localhost:3002/api/getImages', {
      params: { clientId: ClientId },
    }).then(
      (response) => {
        this.setState((state, props) => {return {images: response.data}})
      }
    )
  } 

  render() {
    return (
      <Card sx={{ width: 270 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={this.state.height}
            image={this.state.images && this.state.images.length > 0 ? this.state.images[0].ImageURL: this.defaultImage}
            alt="barber photo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {this.state.barberName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {this.state.barberBio}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

export default ClientCard
