import React, {useState, useEffect} from 'react';

function Description() {

    const [item, setItem] = useState([]);


    useEffect(()=>{
    async function fetchData(){
        setItem(
            await fetch('https://quote-garden.herokuapp.com/api/v2/quotes/random')
            .then(res=> res.json())
            // .then(res=>console.log(res.quote))
            .then(res=>res.quote)
            .catch(err => console.log(err, "Fetching error"))
        )
    }
    fetchData();
  }
,[])


return (
    <div>
        <h3>My favorite quote is:</h3>
        <p>{item.quoteText} by {item.quoteAuthor}</p>
    </div>
)
}
export default Description