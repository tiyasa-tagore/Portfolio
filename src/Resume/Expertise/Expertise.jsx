import img1 from '../../assets/professionalSkills/bootstrap.png'
import img2 from '../../assets/professionalSkills/c.png'
import img3 from '../../assets/professionalSkills/cplus.png'
import img4 from '../../assets/professionalSkills/css-3.png'
import img5 from '../../assets/professionalSkills/express.png'
import img6 from '../../assets/professionalSkills/firebase.png'
import img7 from '../../assets/professionalSkills/html-5.png'
import img8 from '../../assets/professionalSkills/java.png'
import img9 from '../../assets/professionalSkills/js.png'
import img10 from '../../assets/professionalSkills/mongodb.png'
import img11 from '../../assets/professionalSkills/nodejs.png'
import img12 from '../../assets/professionalSkills/react.png'

import img13 from '../../assets/tools/chrome.png'
import img14 from '../../assets/tools/codeblock.png'
import img15 from '../../assets/tools/figma.png'
import img16 from '../../assets/tools/vscode.png'
import img17 from '../../assets/tools/git.png'

const Expertise = () => {
    return (
        <div className="text-white text-center 
        text-2xl font-bold  my-5 gap-5 ">
            <div className='align-middle'>
               <div className='text-center m-7 text-3xl'>Expertise</div>
               <hr />
              <div className='grid grid-cols-5 gap-3 '>
               
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img9} alt="" />
                <img src={img10} alt="" />
                <img src={img11} alt="" />
                <img src={img12} alt="" />
             
                

               </div>
               <br />
               <br />
            </div>
             
            <div>
                <div  className='text-center m-7 text-3xl' >Tools</div>
                <hr />
                <div className='grid grid-cols-5 gap-3'>
                    
                <img src={img13} alt="" />
                <img src={img14} alt="" />
                <img src={img15} alt="" />
                <img src={img16} alt="" />
                <img src={img17} alt="" />
                    </div>

            </div>
        </div>
    );
};

export default Expertise;