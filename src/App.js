import { DatePicker, Card } from 'antd';
import './App.scss';


function App() {
    const test = (date) => {
        console.log(date);
    }
  return (
    <div className="app">
      <h1>Web Personal - Frontend</h1>
      <h2>Proyecto</h2>

      <DatePicker  onChange={test} />

      <Card title="Default size card" extra={<a href="/#">Test</a>} style={{ width: 300 }}>
      <p>Hola Mundo</p>
      
    </Card>
    </div>
  );
}

export default App;
