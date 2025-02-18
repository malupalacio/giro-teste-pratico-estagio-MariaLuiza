"use client";
import React, { useState, useEffect } from "react";
import { getCotacaoMoedas } from "@/api/finance_cotacao";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

const CurrentConverter = () => {
  const [cotacoes, setCotacoes] = useState([]);
  const [valor, setValor] = useState("");
  const [moedaDestino, setMoedaDestino] = useState("USD");
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    async function fetchCotacoes() {
      try {
        const data = await getCotacaoMoedas();
        setCotacoes(data);
      } catch (error) {
        console.error("Erro ao buscar cotações:", error);
      }
    }

    fetchCotacoes();
  }, []);

  const converter = () => {
    const cotacaoDestino = cotacoes.find((moeda) => moeda.name === moedaDestino); // Encontra a moeda de destino

    { /* Verifica se a moeda de destino foi encontrada e se o valor de compra é maior que zero */ }
    if (cotacaoDestino && cotacaoDestino.buy > 0) {
      const valorConvertido = valor / cotacaoDestino.buy;
      setResultado(`${Number(valor).toFixed(2)} BRL → ${valorConvertido.toFixed(2)} ${moedaDestino}`);
    } else {
      alert("Taxa de câmbio indisponível.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
        padding: "20px",
      }}
    >
        {/* Título da pagina*/}
        <Box
          sx={{
            fontSize: "18px",
            width: "55%",
            marginBottom: "5vh",
          }}
        >
          Faça a conversão de moedas com base nas cotações atuais
        </Box>

      <Box 
        sx={{ 
          display: "flex",
          gap: "10px",
          marginBottom: "20px" 
        }}
    >
        {/* Campo de entrada do valor em Real*/}
        <TextField
          label="Valor em BRL"
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          sx={{ 
            width: "200px" 
          }}
        />

        {/* Campo de seleção da moeda de destino */}
        <FormControl 
          sx={{ 
            width: "200px"
          }}
        >
          <InputLabel>Destino</InputLabel>
          <Select
            value={moedaDestino}
            onChange={(e) => setMoedaDestino(e.target.value)}
            label="Destino"
          >
            {cotacoes.map((moeda, index) => (
              <MenuItem key={index} value={moeda.name}>
                {moeda.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Botão para converter */}
      <Button
        variant="contained"
        sx={{ 
          backgroundColor: "#1f337b", 
          color: "white", 
          marginBottom: "20px" 
        }}
        onClick={converter}
      >
        Converter
      </Button>

      {/* Exibe o resultado da conversão com formato montado */}
      {resultado && (
        <Box sx={{ marginTop: "20px" }}>
          <h3>Resultado: {resultado}</h3>
        </Box>
      )}
    </Box>
  );
};

export default CurrentConverter;
