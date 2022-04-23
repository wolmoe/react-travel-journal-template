import './App.css';
import data from './data'
import Header from './components/Header'
import Card from './components/Card'

const App = () => {
  const cards = data.map(trip => {
    return <Card key={trip.id} details={trip} />
  })

  return (
    <div className="App">
      <Header />
      <main>
        {cards}
      </main>
    </div>
  );
}

export default App;
