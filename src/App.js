import './App.css';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';

const items = [
  {
    name: 'Learn React',
    important: false,
    id: '3434'
  },
  {
    name: 'Build Awesome App',
    important: true,
    id: '567567'
  },
  {
    name: 'Drink Coffee',
    important: false,
    id: '78665'
  },
  {
    name: 'Learn React',
    important: false,
    id: '456764'
  },
  {
    name: 'Create Budget App',
    important: false,
    id: '75676'
  },
  {
    name: 'Call To Friends',
    important: false,
    id: '3453455'
  },
];

function App() {
  return (
    <div className="todo-app">
        <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList items={items} />
    </div>
  );
}

export default App;
