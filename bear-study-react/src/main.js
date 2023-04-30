import { Link } from "react-router-dom"
import "./styles/main.css"
import doeIcon from './assets/doe_icon.png';
import gladeIcon from './assets/glade_icon.png';
import moffittIcon from './assets/moffit_icon.png';


export default function Main() {
   return (
       <div>
       <div className="bear">
           bear study
       </div>

               <div className="doe">
                   <Link to="./">
                   <img src={doeIcon} alt="Icon of Doe" />
                   <div class="doetext">Doe</div>
                   </Link>
             </div>


               <div className="glade">
                    <Link to="./">
                    <img src={gladeIcon} alt="Icon of Glade"/>
                    <div class="gladetext">Memorial Glade</div>
                    </Link>
               </div>


                <div className="moffitt">
                   <Link to="./pages/moffit">
                       <img src={moffittIcon} alt="Icon of Moffitt"/>
                       <div class="moffitttext">Moffitt</div>
                   </Link>
                </div>
    </div>
   )
}
