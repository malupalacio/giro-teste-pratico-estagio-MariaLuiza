import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Page2() {

  const router = useRouter(); // Para redirecionar para a página desejada

  const handleCotacao = () => {
    // Função para redirecionar para a página inicial
    router.push("/cotacao-das-moedas");
  };

  return (
    <>
      {/* Flex para telas pequenas */}
      <div className="flex flex-col items-center justify-center h-screen text-center sm:hidden lg:hidden">
        
        {/* Imagem da tela */}
        <Box 
          sx={{
            marginBottom: "-5vh",
          }}
        >
          <Image
            src="/cotacao_de_moedas_2.png"
            alt="cotação2"
            width={380}
            height={0}
          />
        </Box>

        <Box
          sx={{
            color: "#1f337b",
            fontWeight: "600",
            fontSize: "32px",
            marginBottom: "50px",
            lineHeight: "1.3",
          }}
        >
          Acompanhe a Cotacao das Moedas em Tempo Real 
        </Box>
        
        {/* Botão que leva para a pagina de cotação das moedas*/}
        <Button 
          variant="contained"
          style={{
            marginBottom: "1vh",
            width: "130px",
            height: "45px",
            color: "black",
            backgroundColor: "#ede108",
            "&:hover": {
              backgroundColor: "#cfc200",
            }
          }}
          onClick={handleCotacao}
        >
          Verificar
        </Button>
      </div>

      {/* Ajustar para tela grande */}
      <div className="hidden sm:grid lg:grid grid-cols-2 items-center justify-center text-center w-full h-screen px-14 ">
        
        {/* Conteudo do lado esquerdo */}
        <div
          style={{
            marginTop: "8vh",
            marginLeft: "-12vh",
          }}
          className="w-[139%] h-[84%] relative"
        >
          <Image
            src="/cotacao_de_moedas.png"
            alt="taxasdejuros2"
            layout="fill"
            objectFit="cover"
            className="fixed left-0 top-0"
          />
        </div>

        {/* Conteudo do lado direito */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginLeft: { xl: "14vh", lg: "22vh", md: "18vh", sm: "8vh" },
          }}
        >
          {/* Imagem da tela */}
          <Box 
            sx={{ 
              marginBottom: { xl: "-6vh", lg: "-7vh", md: "-5vh", sm: "-4vh" } 
            }}
          >
            <Image
              src="/cotacao_de_moedas_2.png"
              alt="taxasdejuros"
              width={200}
              height={0}
            />
          </Box>
          {/* Texto */}
          <Box
            sx={{
              color: "#1f337b",
              fontWeight: "600",
              fontSize: { xl: "32px", lg: "28px", md: "24px", sm: "20px" },
              lineHeight: "1.3",
              width: "60%",
              textAlign: "center",
              marginBottom: "5vh",
            }}
          >
            Acompanhe a Cotacao das Moedas em Tempo Real 
          </Box>
          {/* Botão que redirecionada para a pagina de cotação das moedas */}
          <Button 
            variant="contained"
            sx={{
              width: { xl: "150px", lg: "140px", md: "130px", sm: "110px" },
              height: { xl: "50px", lg: "45px", md: "40px", sm: "35px" },
              color: "black",
              backgroundColor: "#ede108",
              "&:hover": {
                backgroundColor: "#cfc200",
              }
            }}
            onClick={handleCotacao}
          >
            Verificar
          </Button>
        </Box>
      </div>
    </>
  );
}