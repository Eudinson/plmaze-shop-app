import plmazeLogo from '../assets/plmaze_logo.png'

const Logo = (props: { height: number}) => {
    return ( 
        <div>
            <img src={plmazeLogo} height={props.height} alt="plmaze logo" />
        </div>
     );
}
 
export default Logo;