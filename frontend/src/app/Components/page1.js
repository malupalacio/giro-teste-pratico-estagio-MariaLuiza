import Box from "@mui/material/Box";
import Image from "next/image";

export default function Page1() {

  return (
    <>
      <Box
        sx={{
          display: "flex", // Conteiner principal
          justifyContent: "center", // Centralização na coluna verticalmente
          alignItems: "center", // Centraliza na coluna horizontalmente
          textAlign: "center",// Alinha os Textos no centro
          flexDirection: "column", // Alinhamento de cima para baixo
        }}
      >
        <Box
          sx={{
            marginBottom: "8vh",
          }}
        >
          <Image
            src="/giro.tech.png"
            alt="logo"
            width={200}
            height={200}
          />
        </Box>
        {/* Texto de Boas Vindas */}
        <Box
          sx={{
            color: "black",
            fontWeight: "900",
            fontSize: { xs: "26px", sm: "34px", lg: "40px", xl: "46px" },
          }}
        >
          Bem vindo(a) ao seu Painel Financeiro!
        </Box>
        
        {/* Imagem de fundo */}
        <Image
          src="/tela_de_inicio.png"
          alt="inicio"
          layout="fill" // Ocupa toda a tela
          objectFit="cover" // Ajusta a imagem para cobrir tudo sem distorcer
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1, // Mantém a imagem atrás do conteúdo
          }}
        />
        
        {/* Texto de Descrição */}
        <Box
          sx={{
            color: "black",
            fontSize: { xs: "16px", sm: "22px", lg:"24px", xl: "26px" },
            width: { xs: "35vh", sm: "60vh", lg: "79vh" },
            marginTop: { xs: "12px", lg: "30px", xl: "40px" },
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          Aqui fornecemos informações <span style={{ color: "#1f337b" }}>essenciais</span> sobre a economia brasileira de forma rápida e intuitiva.
        </Box>
      </Box>
    </>
  );
}  