"use client";
import { useState, useEffect } from "react";
import { getCotacaoMoedas } from "@/api/finance_cotacao"; // Importando a função para pegar as cotações das moedas
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const CurrentTable = () => {
  const [cotacoes, setCotacoes] = useState([]);

  {/* Função para buscar as cotações */}
  const fetchCotacoes = async () => {
    try {
      const data = await getCotacaoMoedas();
      if (data && data.length > 1) {
        setCotacoes(data.slice(1)); // Remove a primeira linha que não é uma moeda
      }
    } catch (error) {
      console.error("Erro ao buscar cotações:", error);
      setCotacoes([]);
    }
  };

  useEffect(() => {
    fetchCotacoes();
  }, []);

  {/* Mensagem de carregamento se não conseguir buscar as cotações */}
  if (!cotacoes.length) {
    return (
      <Box textAlign="center" mt={4}>
        <Button
          sx={{ 
            backgroundColor: "#1f337b", 
            color: "white", 
            fontSize: "17px", 
            marginTop: "2vh",
        }}
          onClick={fetchCotacoes}
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
    <>
      <Box 
        sx={{ 
          width: "100%", 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          marginTop: 4,
        }}
      >
        {/* Título da pagina*/}
        <Box
          sx={{
            fontSize: "18px",
            width: "55%",
          }}
        >
          Verifique as ultimas atualizações das cotações das moedas
        </Box>

        {/* Tabela com as cotações */}
        <TableContainer
          component={Paper}
          sx={{ width: "95%", maxWidth: "1200px", overflowX: "auto", mt: 2 }}
        >
          <Table>
            {/* Nome das colunas */}
            <TableHead>
              <TableRow 
                sx={{ 
                  backgroundColor: "#ede108" 
                }}
              >
                <TableCell>Nome</TableCell>
                <TableCell>Compra</TableCell>
                <TableCell>Venda</TableCell>
                <TableCell>Variação</TableCell>
              </TableRow>
            </TableHead>
            {/* Dados das taxas para cada coluna */}
            <TableBody>
              {cotacoes.map((moeda, index) => (
                <TableRow key={index}>
                  <TableCell>{moeda.name}</TableCell>
                  <TableCell>{moeda.buy ?? "N/A"}</TableCell>
                  <TableCell>{moeda.sell ?? "N/A"}</TableCell>
                  {/* Cor verde para variação positiva ou 0, cor vermelha para variação negativa */}
                  <TableCell
                    sx={{
                      color:
                        moeda.variation >= 0
                          ? "green"
                          : "red",
                    }}
                  >
                    {moeda.variation ?? "N/A"}
                  </TableCell>
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
              xl: "1600px",
              lg: "1200px",
              md: "900px",
              sm: "100%", 
              xs: "100%", 
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
            onClick={fetchCotacoes} 
          >
            Atualizar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CurrentTable;
