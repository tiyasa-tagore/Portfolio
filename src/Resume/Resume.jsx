
import Education from "./Education/Education";
import Expertise from "./Expertise/Expertise";



const Resume = () => {
    return (
        <div className="px-4 lg:px-32 bg-blue-950">
            <div className="flex justify-center py-2 mb-12 pt-32" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <div>
                    <a href="https://drive.google.com/u/0/uc?id=14G1LmXG92dDeL3i_6RMIrYGUcjSGSr-u&export=download" className="btn btn-outline btn-warning">Download Resume</a></div>
            </div>
            
            <hr />
            {/* Educational Details and Skills */}
            <div>
                
                    {/* For Skills */}
                    <div >
                        <Expertise />
                        <br />
                        <br />

                    </div>
                    {/* For Education */}
                    <div >
                        <Education />
                        <br />
                    </div>
             
            </div>
        </div>
    );
}

export default Resume;
