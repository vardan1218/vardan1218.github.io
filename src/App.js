import './App.css';
import SignUp from './components/SignUp';
import Navbar from './components/navbar';
import Card from './components/card';
import Header from './components/header';
import Question3 from './components/question3'
import Question4 from './components/Question4'
import CommitMessage from './components/Question5';
import Question6 from './components/Question6';

//Data for the question 4 starts//

const Question4Data = [
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

//Data for the question 4 ends //

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <SignUp />
      <Navbar />
      <Header/>
      <Card />
      <Question3 />
      
      <div className="bg-black p-[20px] min-h-screen">
       <div className="container flex flex-wrap justify-around w-[100%]">
        {Question4Data.map((card, index) => (
          <Question4
          key={index}
          imgSrc={card.imgSrc}
          title ={card.title}
          category={card.category}
          timetoread= {card.timeToRead}
          />
        ))}
       </div>
      </div>
      <CommitMessage />
      <Question6 />
      
    </div>
  );
}

export default App;
