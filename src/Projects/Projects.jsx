import h1 from '../../src/assets/projects/pic1.png'
import h2 from '../../src/assets/projects/pic2.png'
import h3 from '../../src/assets/projects/pic3.png'
import './Project.css'

const Projects = () => {
    return (
        <div className=' bg-blue-950 banner-container'>
            
            {/* proj 1 */}
            <div>
            <div className="card card-compact px-4 lg:px-32 bg-blue-950 outline shadow-xl">
                <br />
                <br />
                <br />
                <br />
                <h3 className="text-3xl text-center py-12 text-white"> Projects</h3>
            <hr />  
<div>
  <figure><img src={h1} alt="Shoes" /></figure>
  <div className="card-body text-white">
    <h1 className="card-title">Hogwarts school of witchcraft and wizardry! -
    A Full Stack
Summer School Website</h1>
<div className="flex justify-center items-center py-8 text-lg leading-10 text-slate-50">
                    <div className=" px-4  md:text-left space-y-4 lg:w-2/3">
                        
                        <p> 🚩 Technology Used - <span className={`text-warning text-xl font-bold`}>React, Firebase, Axios, MongoDB, Node, Express, JWT, Git</span>. </p>
                        <h2>🚩User-responsive magic school website using React.js, Daisy UI,
Tailwind Csss.Sections are all instructors,all classes,login etc.</h2>
                        <h2>🚩User Authentication, signup, login using Firebase, JWT.Google
login , email login has been enabled in this website. User profile
can be seen after successful login.</h2>
                        <h2>🚩Server side is made using Express.js and MongoDb. The latest
and changed data are stored in MongoDb.</h2>
                        <h2>🚩Users can toggle the theme, header and footer are available in
every page, error is shown specifically and the user can be
directed to the home page.  </h2>
                        <br />
                        
                        
                    </div>
                </div>
    
    <div className="card-actions justify-end">
      <button className="btn btn-outline btn-warning"><a href="https://summer-school-bf477.web.app/">Live Site</a></button>

      <button className="btn btn-outline btn-warning"><a href="https://github.com/tiyasa-tagore/Hogwarts-summer-client">Github Client</a></button>

      <button className="btn btn-outline btn-warning"><a href="https://github.com/tiyasa-tagore/Hogwarts-summer-server">Github Server</a></button>
    </div>
  </div>
  </div>


  <br />
  <br />
  <br /> <hr />
  <br /><br />
<div>
  <figure><img src={h2} alt="Shoes" /></figure>
  <div className="card-body text-white">
    <h2 className="card-title">La Taste — A Chef Recipe Based Website <br /></h2>
<div className="flex justify-center items-center py-8 text-lg leading-10 text-slate-50">
                    <div className=" px-4  md:text-left space-y-4 lg:w-2/3">
                        
                        <p> 🚩 Technology Used - <span className={`text-warning text-xl font-bold`}>React, Firebase, Daisy UI, MongoDB, Node, Express, Git</span>. </p>
                        <h2>🚩 User-responsive food recipe focused website having various
pages using React.js, Tailwind Csss. Server side is made using
Express.js </h2>
                        <h2>🚩User Authentication, signup, login using
Firebase.React-toastify, react-helmet has been used for SEO
optimization. Users can view various pages after a successful
login. These include chef information, individual chef details.</h2>
                        <h2>🚩Attractive home page consist of encouraging banners, special
sections , header & footer are in every page.Blog, about the
website are notified features as well.</h2>
                        <br />
                        
                        
                    </div>
                </div>
    
                <div className="card-actions justify-end">
      <button className="btn btn-outline btn-warning"><a href="https://chef-recipe-hunter-48003.web.app/">Live Site</a></button>

      <button className="btn btn-outline btn-warning"><a href="https://github.com/tiyasa-tagore/La-Taste-client">Github Client</a></button>

      <button className="btn btn-outline btn-warning"><a href="https://github.com/tiyasa-tagore/La-Taste-server">Github Server</a></button>
    </div>
  </div>
  </div>
 <br /> <hr />
  <br /><br />


<br />

<div>
  <figure><img src={h3} alt="Shoes" /></figure>
  <div className="card-body text-white">
    <h2 className="card-title">Wonder Toys — A Toy Car Marketplace Website
</h2><br />
<div className="flex justify-center items-center py-8 text-lg leading-10 text-slate-50">
                    <div className=" px-4  md:text-left space-y-4 lg:w-2/3">
                       
                        <p> 🚩 Technology Used - <span className={`text-warning text-xl font-bold`}>React, Firebase, Daisyui, MongoDB, Node, Express, Git</span>. </p>
                        <h2>🚩Fully User-responsive car purchasing website providing a
comprehensive platform for users to browse and manage toy
listings. Users can view all available toys, add new toys for sale,
and easily manage their own toy inventory.It has been made
using React.js, Daisy UI, Tailwind Csss  </h2>
                        <h2>🚩User Authentication, signup, login using Firebase.After
successfully signing up one can encounter certain pages.</h2>
                        <h2>🚩Server side is made using Express.js</h2>
                        <br />
                        
                        
                    </div>
                </div>
    
                <div className="card-actions justify-end">
      <button className="btn btn-outline btn-warning"><a href="https://toy-store-fc0c7.web.app/">Live Site</a></button>

      <button className="btn btn-outline btn-warning"><a href="https://github.com/tiyasa-tagore/Wonder-Toy-Client">Github Client</a></button>

      <button className="btn btn-outline btn-warning"><a href="https://github.com/tiyasa-tagore/Wonder-Toy-server">Github Server</a></button>
    </div>
  </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Projects;


