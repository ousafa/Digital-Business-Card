import profileImage from './profileImage.jpeg'
import './Info.css'

function Info(){
    return(
        <div className='info'>
            <img  className="info--image" src={profileImage} alt='profileImage' />
            <h3 className='info--title'>Ouammou Safa</h3>
            <span className='info--desc'>Front-End developer</span>
            <div className='buttons'>
                <button><i className="fa-solid fa-envelope"></i>Email</button>
                <button className='active'><i className="fa-brands fa-linkedin"></i>Linkedin</button>
            </div>
        </div>
    )
}

export default Info