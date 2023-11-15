import Spinner from 'react-bootstrap/Spinner';
import "./Loading.css";

function Loading() {
  return (
    <div className='loading' >
        <Spinner animation="grow" style={{ width: "4rem", height: "4rem" }} />
    </div>
  )
}

export default Loading;