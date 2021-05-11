import React, {useState} from 'react'
import Navbar from '../../components/molekul/NavBar/Navbar'

const About = () => {
    const [welcome, setWelcome] = useState("Informasi Pertandingan")
    return (
        <div>
            <Navbar />
            <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
            <div className="col-10 col-md-8 col-lg-6">
             <h2 style={{color: "black",marginTop: 25,}}>{welcome}</h2>
               <br/>
                <div className="form-group"> 
                  <label for="Info pertama">1. Kegiatan akan dilaksanakan tepat pukul 5 pagi dengan mengambil tempat start didepan kantor walikota</label>
                </div>
<br/>
                <div className="form-group"> 
                  <label for="Info kedua : ">2. Pertandingan akan dilaksanakan pada tanggal 5 oktober 2021</label>
                </div>
<br/>
                <div className="form-group"> 
                  <label for="Info ketiga : ">3. Pendaftaran secara offline akan dibuka pada tanggal 10 september dan tempat pendaftaran berlokasi di Dinas pemuda dan olahraga kota bitung</label>
                </div>
<br/>
                <div className="form-group"> 
                  <label for="Info keempat : ">4. Juara 1 akan mendapat hadiah Rp 10 juta dengan diikuti juara 2 mendapat Rp 7 juta dan juara 3 mendapat Rp 5 juta</label>
                </div>
<br/>
                <div className="form-group"> 
                  <label for="Info kelima : ">5. Setiap peserta yang finish di urutan 20 besar maka akan mendapatkan medali</label>
<br/>
<br/>
                <div className="form-group"> 
                  <h3 for="Info keenam : ">Kategori pertandingan :</h3>
                  <h5>10Km Atlet Putra</h5>
                  <h5>10Km Atlet Putri</h5>
                  <h5>10Km Umum Putra</h5>
                  <h5>10Km Umum Putri</h5>
                  <h5>5Km Atlet Putra</h5>
                  <h5>5Km Atlet Putri</h5>
                  <h5>5Km Umum Putra</h5>
                  <h5>5Km Umum Putri</h5>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default About