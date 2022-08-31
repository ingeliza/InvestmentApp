

export default function home(){
  return (
    <div>
      <p>Create a stock:</p><br/>
      <form action="/api/stocks/create" method="post">
        <input type="text" id="company"name="company" placeholder="Company name"></input><br/>
        <input type="text" id="unitPrice" name="unitPrice" placeholder="Unit price"></input><br/>
        <button type="submit" value="Submit">Submit</button><br/>
      </form>
      <p>Create a client:</p><br/>
      <form action="/api/clients/create" method="post">
        <input type="text" id="username"name="username" placeholder="Username"></input><br/>
        <button type="submit" value="Submit">Submit</button><br/>
      </form>
    </div>
  )
}

