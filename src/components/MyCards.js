import IDCard from "./IDCard";
import Data from "../Data.json";

//HOC - Higher Order component
const MyCards = () => {
    console.log(Data.data);
    return (  
        <div className='d-flex'> 
        {
          Data.data.map( (elem)=> {
             return <IDCard iname= {elem.name} idesc={elem.des} />
          }
          )
        }
      </div>
    );
}
 
export default MyCards;