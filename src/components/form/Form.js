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
      <div class="col-25">
        <label for="kota">Kota</label>
      </div>
      <div class="col-75">
        <input type="text" id="kota" name="kota" placeholder=""/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="sembuh">Sembuh</label>
      </div>
      <div class="col-75">
        <input type="text" id="sembuh" name="Sembuh" placeholder=""/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="sakit">Sakit</label>
      </div>
      <div class="col-75">
        <input type="text" id="sakit" name="sakit" placeholder=""/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="Meninggal">Meninggal</label>
      </div>
      <div class="col-75">
        <input type="text" id="sembuh" name="Sembuh" placeholder=""/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="jumlah">Jumlah</label>
      </div>
      <div class="col-75">
        <input type="text" id="jumlah" name="jumlah" placeholder=""/>
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