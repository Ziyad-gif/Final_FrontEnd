import "./form.css";
import dataa from "../../utils/constants/provinces";
import data from "./image.png";
import {useState} from "react";
const dida = dataa.provinces;
function Form(){

    return(
        <>
       <img src={data} alt="" class="img"/> 

       <div class="container">
  <form action="action_page.php">
    <h2>Form Covid</h2>
    <div class="row">
      
    <div class="col-75">
        <select id="Provinsi" name="Provinsi">
          <option value="Jakarta">Jakarta</option>
          <option value="Bali">Bali</option>
          <option value="JawaBarat">Jawa Barat</option>
        </select>
      </div>
    </div>
    <div class="row">
    <div class="col-75">
        <select id="Status" name="Status">
          <option value="Sembuh">Sembuh</option>
          <option value="Sakit">Sakit</option>
          <option value="Meninggal"></option>
        </select>
      </div>
     
    </div>
    <div class="row">
      <div class="col-25">
        <label for="jumlah"></label>
      </div>
      <div class="col-75">
        <input type="text" id="jumlah" name="jumlah" placeholder="Jumlah"/>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Submit"/>
    </div>
  </form>
</div>
       <div class="ww"></div>
       
  
      </> 

           
       
    )


}
export default Form;