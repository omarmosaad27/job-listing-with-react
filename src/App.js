import Header from "./components/Header";
import { useGlobalContext } from "./context";
import Job from './components/Job'
import Filter from './components/Filter'
function App() {
  const { list ,setSearch} = useGlobalContext();

  return (
    <div className="App">
      <Header />
      <Filter/>
      <div className="list-container">
        {
          list.map((item) => {
            return (
              <Job key={item.id} item={item}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
