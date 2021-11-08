import Form from './Form';
import React, {useState} from 'react';
import Table from './Table';



const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
];






function MyApp() {
  const [characters, setCharacters] = useState([]);

  function updateList(person) {
  setCharacters([...characters, person]);
  }
  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeOneCharacter} />
      <Form handleSubmit={updateList} />
    </div>
  )


  function removeOneCharacter (index) {
    const updated = characters.filter((character, i) => {
      return i !== index
      });
      setCharacters(updated);  
  }
}
export default MyApp;
