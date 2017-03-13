// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';

import RoomAdder from '../RoomAdder/RoomAdder';

require('./RoomList.css');

export default class RoomList extends Component {
  static propTypes = {
    rooms: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
    }))
  }

  render() {
    const RoomLink = (props) => {
      const room = props.room;
      const roomId = room.id;
      return (
        <a className='room-link' href='#' onClick={() => this.props.onSelectRoom(roomId)}>
          {room.title}
        </a>
      );
    };

    return (
      <div className='room-list'>
        {this.props.rooms.map(room =>
          <RoomLink key={room.id} room={room} />)
        }
        <RoomAdder />
      </div>
    );
  }
}