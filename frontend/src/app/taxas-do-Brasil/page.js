"use client";
import Header from "../Components/header";
import Footer from "../Components/footer";
import TaxeTable from "./Components/taxe_table";
import BreadCrumbs from "./Components/bread_crumbs";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function TaxasDoBrasil() {
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
          p: 6,
        }}
      >
        {/* Breadcrumbs apenas aparece se não for mobile */}
        {!useMediaQuery("(max-width:600px)") && (
          <Box
            sx={{
              marginRight: "auto",
              marginTop: {xl: "-2vh", lg: "6vh", md: "8vh", sm: "8vh", xs: "8vh"},
              marginLeft: "22vh",
            }}
          >
            <BreadCrumbs />
          </Box>
        )}
        
        {/* Título da pagina*/}
        <Box
          sx={{
            fontSize: {xs:"30px", lg:"40px"},
            fontWeight: "bold",
            marginTop: "7vh",
          }}
        >
          Taxas do Brasil
        </Box>
        <TaxeTable />
      </Box>
      <Footer />
    </>
  );
}