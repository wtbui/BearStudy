import { Link } from "react-router-dom"
import "./styles/main.css"
import doeIcon from './assets/doe_icon.png';
import gladeIcon from './assets/glade_icon.png';
import moffittIcon from './assets/moffit_icon.png';


export default function Main() {
   return (
       <div>
       <div className="bear">
           <div className="bstext">bear study</div>
       </div>

               <div className="doe">
                   <Link to="./">
                   <img className="icon" src={doeIcon} alt="Icon of Doe" />
                   <div class="doetext">Doe</div>
                   </Link>
                </div>


               <div className="glade">
                    <Link to="./">
                    <img className="icon" src={gladeIcon} alt="Icon of Glade"/>
                    <div class="gladetext">Memorial Glade</div>
                    </Link>
               </div>


                <div className="moffitt">
                   <Link to="./pages/moffit">
                       <img className="icon" src={moffittIcon} alt="Icon of Moffitt"/>
                       <div class="moffitttext">Moffitt</div>
                   </Link>
                </div>
    </div>
   )
}

// const handleOnMouseMove = e => {
//     const { currentTarget: target} = e;

//     const rect = target.getBoundingClientRect(),
//     x = e.clientX - rect.left,
//     y = e.clientY - rect.top;

//     target.style.setProperty("--mouse-x", '${x}px');
//     target.style.setProperty("--mouse-y", '${y}px');
// }

// for(const bear of document.querySelectorAll(".bear")){
//     bear.onmousemove = e => handleOnMouseMove(e);
// }