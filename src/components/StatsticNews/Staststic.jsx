import './Staststic.css'
import light from './../../assets/img/Staststic-light.png'
import dark from './../../assets/img/Staststic-dark.png'
const Staststic = ({ darkLight }) => {
    return (
        <div className='staststic text-center '>
            <p>أهم الإحصائيات</p>
            <img src={(darkLight) ? light : dark} alt="" />
        </div>
    );
}

export default Staststic;
