"use client";
import { useState, useEffect } from "react";
import { getTaxasBrasil } from "@/api/finance_taxes"; // Caminho para importar a API
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const TaxeTable = () => {
  const [taxas, setTaxas] = useState([]);

  {/* Função para buscar as taxas */}
  const fetchTaxas = async () => {
    try {
      const data = await getTaxasBrasil();
      setTaxas(Array.isArray(data) ? data : [data]); // Garante que seja um array
    } catch (error) {
      console.error("Erro ao buscar taxas:", error);
      setTaxas([]);
    }
  };

  useEffect(() => {
    fetchTaxas();
  }, []);

  {/* Mensagem de erro se não conseguir buscar as taxas */}
  if (!Array.isArray(taxas)) {
    return (
      <Box textAlign="center" mt={4}>
        <Box 
          sx={{
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          Taxas do Brasil
        </Box>
        {/* Botão para atualizar as taxas */}
        <Button 
          sx={{
            backgroundColor: "#1f337b",
            color: "white",
            fontSize: "17px",
            marginTop: "2vh",
          }}
          onClick={fetchTaxas} 
        >
          Atualizar
        </Button>
        <Box 
          sx={{ 
            mt: 2,
            fontSize: "18px",
          }}
        >
          Clique no botão para atualizar
        </Box>
      </Box>
    );
  }

  return (
    <Box 
      sx={{
        width:"100%", 
        display:"flex", 
        flexDirection:"column",
        alignItems:"center",
        marginTop: 4,
      }}
    >

      {/* Título da pagina*/}
      <Box
        sx={{
          fontSize: "18px",
          width: "22%",
          marginTop: "4vh",
          marginBottom: "2vh",
          textAlign: "center",
        }}
      >
        Verifique as ultimas atualizações das taxas de CDI, SELIC e seus fatores diários.
      </Box>

      {/* Tabela com as taxas */}
      <TableContainer
        component={Paper}
        sx={{
          width: "150%",
          maxWidth: {
            xl: "75vh",
            lg: "85vh",
            md: "70vh",
            sm: "70vh", 
            xs: "40vh", 
          },
          overflowX: "auto",
          marginTop: "2vh",
        }}
      >
        <Table>
          {/* Nome das colunas */}
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#ede108",
              }}
            >
              <TableCell>Data</TableCell>
              <TableCell>CDI</TableCell>
              <TableCell>SELIC</TableCell>
              <TableCell>Fator Diário</TableCell>
              <TableCell>CDI Diário</TableCell>
              <TableCell>SELIC Diário</TableCell>
            </TableRow>
          </TableHead>
          {/* Dados das taxas para cada coluna */}
          <TableBody>
            {taxas.map((taxa, index) => (
              <TableRow key={index}>
                <TableCell>{taxa.date}</TableCell>
                <TableCell>{taxa.cdi}</TableCell>
                <TableCell>{taxa.selic}</TableCell>
                <TableCell>{taxa.daily_factor}</TableCell>
                <TableCell>{taxa.cdi_daily}</TableCell>
                <TableCell>{taxa.selic_daily}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Botão para atualizar as taxas */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "95%",
          maxWidth: {
            xl: "75vh",
            lg: "85vh",
            md: "70vh",
            sm: "70vh", 
            xs: "40vh",
          },
          marginTop: "1vh",
        }}
      >
        <Button 
          sx={{
            backgroundColor: "#1f337b",
            color: "white",
            fontSize: "12px",
          }}
          onClick={fetchTaxas} 
        >
          Atualizar
        </Button>
      </Box>
    </Box>
  );
};

export default TaxeTable;
