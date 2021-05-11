import React from 'react'
import Navbar from '../../components/molekul/NavBar/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
        <div
        className="bg_image pb-5"
        style={{
          backgroundImage: `url("https://image.freepik.com/free-vector/running-man-logo-symbol_31941-29.jpg")`,
          backgroundSize: "cover",
          height: "800px",
          width: "88%",
          color: "black",
          marginBottom: 25,
        }}> 
             <div className="text-center container" style={{fontSize: 24, marginTop: 25,}}>
            <h3>Ayo daftarkan dirimu sekarang juga dan raihlah kemenangan !!!</h3>
            </div>
        </div>
        </div>
    )
}

export default Home