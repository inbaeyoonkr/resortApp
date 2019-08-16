import React, { Component } from 'react';
import Title from './Title.js';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free Coctails',
        info: 'Free Coctails'
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info: 'Endless Hiking'
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle Van',
        info: 'Free Shuttle Van'
      },
      {
        icon: <FaBeer />,
        title: 'Free Beers',
        info: 'Free Beers'
      }
    ]
  };

  render() {
    return (
      <div className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}
