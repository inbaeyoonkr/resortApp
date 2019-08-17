import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';

export default class FeturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms } = this.context;
    console.log(featuredRooms);

    return (
      <div>
        <Room />
        <Loading />
      </div>
    );
  }
}
