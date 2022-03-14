import axios from "axios";
import { useEffect, useState } from "react";



export const AddHouse = () => {





const [form,setform]=useState({
  
})
const [db,setdb]=useState([])


useEffect(()=>{
  getFormdata()
},[])



const handleSubmit =(e)=>{
  e.preventDefault()
  axios.post("http://localhost:8080/houses",form).then(()=>{
   return getFormdata()
  })
}

const getFormdata =(e)=>{
 
  axios.get("http://localhost:8080/houses").then((r)=>{
    console.log(r)
 setdb([...r.data,db])
  })
}


const handleChange =(e)=>{
const {className,value} = e.target
setform({
  ...form,
  [className]:value
})
}










  return (

    <> <div className="addHouseContainer">
    <form onSubmit={handleSubmit}>
      <label>name</label>
      <input type="text" className="name" value={form.username} onChange={handleChange} id="username" required />
      <br />
      <label>ownerName</label>
      <input value={form.ownerName} type="text" className="ownerName" onChange={handleChange}   required />
      <br />
      <label>address</label>
      <input value={form.address} type="text" className="address" onChange={handleChange} required />
      <br />
      <label>areaCode</label>
      <input value={form.areaCode} type="text" className="areaCode" onChange={handleChange} required />
      <br />
      <label>rent</label>
      <input value={form.rent} type="text=" className="rent"  onChange={handleChange} required />
      <br />
      <label>preferredTenant</label>
      <br />
      <label>bachelor</label>
      <input checked={form.bachelor} type="checkbox" className="bachelor" onChange={handleChange} />
      <br />
      <label>married</label>
      <input checked={form.married} type="checkbox" className="married" onChange={handleChange} />
      <br />
      <label>image</label>
      <input value={form.image} type="text" className="image" onChange={handleChange} required />
      <br />
      <input className="submitBtn" type="submit" />
    </form>
  </div>
  

<div>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>ownerName</th>
      <th>add</th>
      <th>areaCode</th>
      <th>rent</th>
      <th>bachelor</th>
      <th>married</th>
      <th>img</th>
    </tr>
  </thead>
  
{db.map((e)=>{

return (

  <tbody>

<tr key={e.id}>
  <td>{e.name}</td>
  <td>{e.ownerName}</td>
  <td>{e.address}</td>
  <td>{e.areaCode}</td>
  <td>{e.rent}</td>
  <td>{e.bachelor}</td>
  <td>{e.married}</td>
  <td>{e.image}</td>


</tr>

    </tbody>
)

})}
   
    
</table>

</div>



</>
   
  )};
