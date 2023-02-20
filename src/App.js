import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Time from './components/Time';

function App() {

  const teams = [
    {
      nome: 'Desenvolvimento',
      corPrimaria: '#ff4d4d',
      corSecundaria: '#222222'
    },
    {
      nome: 'Gerência',
      corPrimaria: '#6b7db3',
      corSecundaria: '#FFF'
    },
    {
      nome: 'Agile Process',
      corPrimaria: '#99ff99',
      corSecundaria: '#222222'
    },
    {
      nome: 'Design',
      corPrimaria: '#361d32',
      corSecundaria: '#FFF'
    },
    {
      nome: 'SysAdmin',
      corPrimaria: '#D86EBF',
      corSecundaria: '#222222'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF'
    },
    {
      nome: 'QA',
      corPrimaria: '#FF8A29',
      corSecundaria: '#222222'
    }
  ];

  const [users, setUsers] = useState([]);

  const newUser = (user) => {
    setUsers([...users, user]);
  }

  return (
    <div className="App">
      <Banner/>
      <Form  teams={teams.map(time => time.nome)} inRegister={user => newUser(user)}/>

      {teams.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} collaborators={users.filter(collaborator => collaborator.time === time.nome)}/>)}
      <Footer/>
    </div>
  );
}

export default App;
