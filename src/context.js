import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url); // 가져오는건 array
      // structure니깐 { }
      // let room = { ...item.fields, images: images, id: id };
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  // slug 값을 주면 room 정보를 가지는 객체다. property는 object를 위해 데이터를 저장한다.
  getRoom = slug => {
    let tempRoom = [...this.state.rooms];
    const room = tempRoom.find(room => room.slug === slug);
    return room;
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
