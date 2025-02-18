export default function Footer() {
  return(
    <>
      <footer
        style={{
          position: "fixed",
          width: "100%",
          bottom: "0",
          backgroundColor: "#1f337b",
        }}
        className=" text-white items-center"
      >
        {/* Conteudo do Footer */}
        <div className="ml-2 mr-2 flex flex-col sm:flex-row justify-between items-center gap-4 p-1">
          <p className="text-[19px]"> 
            Maria Luiza Palacio da Silva</p>
          {/* Link que manda ao github da Giro.tech */}
          <p className="xs:text-xs text-1xl"> 
            Processo de estagio 
            <a href="https://github.com/giro-tech/giro-teste-pratico-estagio/blob/develop/desafio-front-end.md" className="text-indigo-300 ml-2 hover:underline">Giro.tech</a>
          </p>
        </div>
      </footer>
    </>
  );
}