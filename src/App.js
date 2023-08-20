import React from "react";
import Card from "./components/card";

const CardData = [
  {
    imgSrc: 'https://wallpapers.com/images/featured/fortnite-pictures-b5kfcchwazwiz3cs.jpg',
    title: 'Fortnite, The game for full sweats',
    category: 'Fortnite, by Epic Games',
    timeToRead: '5 mins',
  },

  {
    imgSrc: 'https://images.alphacoders.com/923/923734.png',
    title: 'Battlefield 5, the all precision game',
    category: 'Battlefield 5, by Ubisoft',
    timeToRead: '10 min'
  },

  {
    imgSrc: 'https://images7.alphacoders.com/556/556730.jpg',
    title: 'Minecraft, the OGest of OGs',
    category: 'Minecraft, by Mojang',
    timeToRead: '6 mins',
  },

  {
    imgSrc: 'https://wallpapers.com/images/featured/uncharted-y5wt54otbfmw8wxy.jpg',
    title: 'Uncharted, The best story game ever made',
    category:'Uncharted, by sony',
    timeToRead : '1 hour',
  },

  {
    imgSrc: 'https://wallpaperaccess.com/full/825336.jpg',
    title: 'PUBG, from where it all started',
    category: 'PUBG, by Krafton',
    timeToRead: '8 mins'
  },

  {
    imgSrc: 'https://cdn.wallpapersafari.com/3/95/758pzv.jpg',
    title: 'Apex Legends, very fast paced game',
    category: 'Apex Legends, by EA',
    timeToRead: '9 mins'
  }
]

function App() {
  return (
    <div className="bg-black p-[20px] min-h-screen">
    <div className="container flex flex-wrap justify-around w-[100%]">
        {CardData.map((card, index) => (
          <Card
          key={index}
          imgSrc={card.imgSrc}
          title ={card.title}
          category={card.category}
          timetoread= {card.timetoread}
          />
        ))}
      </div>
      </div>
      )
}

export default App;
