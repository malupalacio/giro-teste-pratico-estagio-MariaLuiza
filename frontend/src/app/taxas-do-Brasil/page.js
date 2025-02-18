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
              marginTop: "-8vh",
              marginLeft: "auto",
              marginLeft: "5vh",
            }}
          >
            <BreadCrumbs />
          </Box>
        )}
        <TaxeTable />
      </Box>
      <Footer />
    </>
  );
}