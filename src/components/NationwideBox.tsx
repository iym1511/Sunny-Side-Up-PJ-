import { useParams } from "react-router";

const NationwideBox = () => {

  const { day } = useParams();

  return (  
    <div style={{border:"1px solid red"}}>
      {day}
    </div>
  );
}

export default NationwideBox;