
import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Card from './component/Card'

import { useEffect } from 'react';

function App() {

  const [details, setDetails] = useState({})

  const fetchdetails = async () => {
    const {data} = await axios.get("https://randomuser.me/api/")
    const details = data.results[0]
    setDetails(details)
  }

  useEffect(() => {
    fetchdetails()
  }, [])
  

  return (
    <>
    <h1 class="text-center">Refresh the page and find another random User!</h1>
      <Card details={details} />
      

    </>
  );
}

export default App;
