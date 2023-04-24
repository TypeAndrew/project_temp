import { useParams } from "react-router-dom"

 const ChooseMonth =()=>{
    const data= useParams()
    console.log(data)
return(
    <div>{data.years}.{data.month}</div>
)
}


export default ChooseMonth