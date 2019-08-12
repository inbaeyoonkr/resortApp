import React, { Component } from 'react';

export default class SingleRoom extends Component {
  render() {
    const slug = this.props.match.params.slug;
    return <>{slug}</>;
  }
}
