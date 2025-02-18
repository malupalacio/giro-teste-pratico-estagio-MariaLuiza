"use client" 
import Header from "./Components/header";
import Footer from "./Components/footer";
import Page1 from "./Components/page1";
import { useState, useEffect } from "react";
import { IconButton } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function Home() {
  
  const pages = [<Page1 />, <Page1 />, <Page1 />];
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % pages.length);
    }, 5000); // 5 segundo de espera na pagina

    return () => clearInterval(interval);
  }, [pages.length]);

  const handlePages = (newIndex) => {
    setIndex(newIndex);
  }
  
  return (
    <>
      <Header/>

      {/* Mudança das paginas automaticas */}
      <div className="flex items-center justify-center h-screen text-2xl font-bold">
        {pages[index]}
      </div>

      {/* Mudança das paginas por usuario */}
      <div 
        style={{ 
          position: "absolute",
          bottom: "10%",
          right: "5%"
        }}
      >
        {/* percorre a array deixando um valor aleatorio ate q o usuario click */}
        {pages.map((_, i) =>
          <IconButton
            key={i}
            onClick={() => handlePages(i)}
            sx={{
              width: "2vh",
              height: "1vh",
              padding: "0",
              margin: "1vh",
              color: index === i ? "#ede108" : "gray",
            }}
          >
            {/* Barrinha de opção */}
            <FiberManualRecordIcon fontSize="small" /> 
          </IconButton>
        )}
      </div>
      <Footer/>
    </>
  );
}