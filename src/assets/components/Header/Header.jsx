
import cricket from '../../image/assets/logo.png'
const Header = () => {
    return (
        <div className=' flex items-center justify-between p-5'>

            <h1 className='text-4xl '>Cricket company</h1>
            <img src={cricket} alt="" />
        </div>

    );
};

export default Header;