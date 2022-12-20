import './App.css'
import Content from './components/index'
const userList = [
  {
    id: 1 ,
    titleName: 'some text about content 1',
    body: 'lorem lorem lorem lorem'
  } ,
  {
    id: 2 ,
    titleName: 'some text about content 2',
    body: 'lorem lorem lorem lorem'
  },
  {
    id: 3 ,
    titleName: 'some text about content 3',
    body: 'lorem lorem lorem lorem'
  },
  {
    id: 4 ,
    titleName: 'some text about content 4',
    body: 'lorem lorem lorem lorem'
  },
  {
    id: 5 ,
    titleName: 'some text about content 5',
    body: 'lorem lorem lorem lorem'
  }
  
]

function App() {
  return (
    <div>
      {userList.map((item, idx) => (
        <Content
          key={item.id}
          id={item.id}
          titleName={item.titleName}
          body={item.body}
        />
      ))}
    </div>
  );
}

export default App;
