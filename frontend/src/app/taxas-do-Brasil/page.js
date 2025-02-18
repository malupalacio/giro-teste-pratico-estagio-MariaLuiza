"use client";
import Header from "../Components/header";
import Footer from "../Components/footer";
import TaxeTable from "./Components/taxe_table";
import Box from "@mui/material/Box";

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
        <TaxeTable />
      </Box>
      <Footer />
    </>
  );
}
