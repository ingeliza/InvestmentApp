import useSWR from "swr";
import React, { useState } from 'react';




export default function Home(){

  const [value, setValue] = useState("b");

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR('/api/stocks', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  

  return (
    <div>
      <p>Create a stock:</p><br/>
      <form action="/api/stocks/" method="post">
        <input type="text" id="company"name="company" placeholder="Company name"></input><br/>
        <input type="text" id="unitPrice" name="unitPrice" placeholder="Unit price"></input><br/>
        <button type="submit" value="Submit">Submit</button><br/>
      </form>

      <p>Create a client:</p><br/>
      <form action='/api/clients/' method="post">
        <input type="text" id="username"name="username" placeholder="Username"></input><br/>
        <button type="submit" value="Submit">Submit</button><br/>
      </form>

      <p>Update a stock:</p><br/>
      <form action={'/api/stocks/update/'+ value} method="post">
        <select type="text" id="company"name="company" placeholder="Company name" value={value} 
          onChange={(e) => {
            setValue(e.target.value);
          }}>
          {data.map(o => 
            <option value={o.id}>
              {o.company}
            </option>)}
        </select><br/>
        <input type="text" id="currentPrice" name="currentPrice" placeholder="Unit price"></input><br/>
        <button type="submit" value="Submit">Submit</button><br/>
      </form>


      
    </div>

    
  )
}

