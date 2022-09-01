import useSWR from "swr";
import React, { useState } from 'react';




export default function Purchase(){

  const [valueCompany, setValueCompany] = useState("b");
  const [valueClient, setValueClient] = useState("b");

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data: stockData, error: errorStock } = useSWR('/api/stocks', fetcher)
  const { data: clientData, error: errorClient } = useSWR('/api/clients', fetcher)

  if (errorClient) return <div>Failed to load</div>
  if (errorStock) return <div>Failed to load</div>
  if (!stockData) return <div>Loading...</div>
  if (!clientData) return <div>Loading...</div>

  return (
    <div>
      <p>Purchase a stock:</p><br/>
      <form action={'/api/stocks/update/'+ valueCompany} method="post">
        <select type="text" id="company"name="company" placeholder="Choose stock" value={valueCompany} 
          onChange={(e) => {
            setValueCompany(e.target.value);
          }}>
          {stockData.map(o => 
            <option value={o.id}>
              {o.company}
            </option>)}
        </select><br/>
        <select type="text" id="client"name="client" placeholder="Choose client" value={valueClient} 
          onChange={(e) => {
            setValueClient(e.target.value);
          }}>
          {clientData.map(o => 
            <option value={o.id}>
              {o.username}
            </option>)}
        </select><br/>
        <input type="text" id="volume" name="volume" placeholder="Volume"></input><br/>
        <button type="submit" value="Submit">Submit</button><br/>
      </form>
    </div>

    
  )
}

