"use client";
import Header from "../Components/header";
import Footer from "../Components/footer";
import CurrentTable from "./Components/current_table";
import CurrentConverter from "./Components/currency_converter";
import BreadCrumbs from "./Components/bread_crumbs";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function TaxasDoBrasil() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          width: "100%",
          width: "100vw", // Garante que o conteúdo ocupe toda a largura sem scroll lateral
          padding: isMobile ? "4vh" : "24vh",
          overflowX: "hidden", // Evita arrasto lateral
        }}
      >

        {/* Breadcrumbs apenas aparece se não for mobile */}
        <Box>
          {!isMobile && (
            <Box
              sx={{
                marginRight: "auto",
                marginTop: "-1vh",
                marginRight: "140vh",
              }}
            >
              <BreadCrumbs />
            </Box>
          )}
        </Box>

        {/* Título da pagina*/}
        <Box
          sx={{
            fontSize: {xs:"30px", lg:"40px"},
            fontWeight: "bold",
            marginTop: "4vh",
            marginBottom: "0vh",
          }}
        >
          Cotações das Moedas
        </Box>

        {/* Box para criar duas colunas */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row", // Ajusta para coluna em dispositivos móveis
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            padding: isMobile ? "0" : "0 5vh",
          }}
        >
          {/* Coluna da esquerda */}
          <Box 
            sx={{ 
              flex: 1, 
              padding: "2vh", 
              textAlign: "center" 
            }}
          >
            <CurrentTable />    
          </Box>

          {/* Coluna da direita com a tabela */}
          <Box 
            sx={{ 
              flex: 1, 
              textAlign: "center",
              marginTop: isMobile ? "-25vh" : "0",
            }}
          >
            <CurrentConverter />
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
