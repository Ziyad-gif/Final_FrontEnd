import "./hello.css";
import Tabel from "../tabel/index";
import data from "../../utils/constants/indonesia";
import Form from "../form/Form";
const data1 = data.indonesia;

function Hello() {
 
  return (
    <>
    <div class="ia"> </div>
    <div>
      
      <h2>Indonesia</h2>
      <p id="ss">Data Covid Berdasarkan Global</p>
    {
      data1.map((s)=>
      {
        return (
          <div class="row">
          <div class="column">
            <div class="card">
            <h2>{s.status}</h2>
            <p>{s.total}</p>
            </div>
          </div>
          
        </div>
          
        
           
        )
      })
    }

          </div>
          <div>
                    <h1 id="wwa">Indonesia</h1>
                    <p>Data Covid Berdasarkan Provinsi </p>
                </div>
          <Tabel/>
          <Form/>
        

    

    </>
  );
}

export default Hello;
