import React, {useState, useEffect} from 'react';
import './App.css';
import PplCard from "./PplCard";
import {Grid} from '@material-ui/core';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            setUsers(
                await fetch('https://randomuser.me/api/?results=10')
                .then(res=> res.json())
                // .then(res=>console.log(res.results))
                .then(res=>res.results)
                .catch(err => console.log(err, "Fetching error"))
            )
        }
        fetchData();
      }
    ,[])
    return (
        <div className="App">
            <h3>The True Beauty of Material-UI</h3>
            <Grid container spacing={10} styled={{padding: '24px'}}>
              {/* {users.map(user => user.email)} */}
              {users.map(user => 
                <Grid key={user.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
              <PplCard 
              key={user.id}
              email={user.email}
              firstname={user.name.first}
              lastname={user.name.last}
              picture={user.picture.medium} 
              />
            </Grid>
            )}
            </Grid>
            
        </div>
    );
}

export default App;