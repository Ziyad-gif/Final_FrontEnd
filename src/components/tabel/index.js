import "./tabel.css"
import provis from "../../utils/constants/provinces";
const pro = provis.provinces
function Tabel(){

    return(
        
        pro.map((s)=>{
            return(

                <>
                <table>
                        <th>No</th>
                        <th>Provinsi</th>
                        <th>Positif</th>
                        <th>Dirawat</th>
                        <th>sembuh</th>
                        <th>Meninggal</th>
                        <tr>
                            <td>{s.no}</td>
                            <td>{s.kota}</td>
                            <td>{s.kasus}</td>
                            <td>{s.dirawat}</td>
                            <td>{s.sembuh}</td>
                            <td>{s.meninggal}</td>
                        </tr>
                    </table>


                    <div class=""></div>
                    </>
            )
        })
        





)   
}
export default Tabel;