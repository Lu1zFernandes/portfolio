import svg from '../assets/profile.jpg'
import { FaLinkedin,FaGithub, FaInstagram  } from "react-icons/fa";

function Home() {
    return (
      <div className="container mt-5 ">
        <div className = "row align-items-center justify-content-between "> 
       <div className="col-md-6 text-md-start text-center">
        <h2>Olá, prazer em te conhecer, eu sou o:</h2>
        <h1 className='fw-bold'>Luiz Fernandes</h1>
        <h2>Estudante de Engenharia da Computação e desenvolvedor Full Stack</h2>
       </div>

       <div className="col-md-4 text-center">
      <div className="card" style={{width: "18rem"}} >
  <img src={svg} className="card-img-top" alt="..."/>
  <div className="card-body">
    <div className='d-flex justify-content-around'>
    <a href="https://github.com/Lu1zFernandes" target='_blank' className="btn btn-primary "><FaGithub /></a>
    <a href="https://www.linkedin.com/in/luiz-fernandes-matos-neves/" target='_blank' className="btn btn-primary"><FaLinkedin /></a>
    <a href="https://www.instagram.com/luiznevesnorden/" target='_blank' className="btn btn-primary"><FaInstagram /></a>
 </div>
     </div>
</div>

       </div>
       </div>
      </div>
    );
  }
  
  export default Home;
  