import React, {useState} from 'react'
import Navbar from '../../components/molekul/NavBar/Navbar'
import firebase from '../../Firebase'

const Daftar = () => {
    const [welcome, setWelcome] = useState("Pendaftaran Lomba")
    const [namaDepan, setNamaDepan] = useState("")
    const [namaBelakang, setNamaBelakang] = useState("")
    const [alamat, setAlamat] = useState("")
    const [ttl, setTtl] = useState("")
    const [kategori, setKategori] = useState("")

    const resetForm = () => {
        setNamaDepan("")
        setNamaBelakang("")
        setAlamat("")
        setTtl("")
        setKategori("")
    }

    const handle = () => {
        const data = {
            namaDepan: namaDepan,
            namaBelakang: namaBelakang,
            alamat: alamat,
            ttl: ttl,
            kategori: kategori,
        }
        firebase.database().ref("peserta").push(data)
        resetForm()
    }
    return (
        <div>
            <Navbar />
            <div
        className="bg_image pb-5"
        style={{
          backgroundImage: `url("https://wallpapercave.com/wp/huDiDyr.jpg")`,
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",
        }}> 
            <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
            <div className="col-10 col-md-8 col-lg-6">
             <h2 style={{color: "white",marginTop: 25,}}>{welcome}</h2>
               <br/>
                <div className="form-group"> 
                  <label for="First name : ">Nama depan :</label>
                  <input placeholder="Masukkan nama depan anda" className="form-control email" value={namaDepan} onChange={(e) => setNamaDepan(e.target.value)}/>
                </div>
<br/>
                <div className="form-group"> 
                  <label for="Last name : ">Nama belakang :</label>
                  <input placeholder="Masukkan nama belakang anda" className="form-control email" value={namaBelakang} onChange={(e) => setNamaBelakang(e.target.value)}/>
                </div>
<br/>
                <div className="form-group"> 
                  <label for="Alamat : ">Alamat :</label>
                  <input placeholder="Masukkan alamat anda" className="form-control email" value={alamat} onChange={(e) => setAlamat(e.target.value)}/>
                </div>
<br/>
                <div className="form-group"> 
                  <label for="Tempat/TanggalLahir : ">Tempat/TanggalLahir :</label>
                  <input placeholder="contoh : Bitung 23 Desember 1999" className="form-control email" value={ttl} onChange={(e) => setTtl(e.target.value)}/>
                </div>
<br/>
                <div className="form-group"> 
                  <label for="Kategori Lomba : ">Kategori lomba :</label>
                  <input placeholder="contoh : 10km Atlet Putra" className="form-control email" value={kategori} onChange={(e) => setKategori(e.target.value)}/>
                </div>
<br/>
            <button type="button" onClick={handle} className="btn btn-primary btn-customized">SUBMIT</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Daftar