import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        position: "fixed",
        height: "12vh",
        width: "100%",
        backgroundColor: "#1f337b"
      }}
      className="text-white flex items-center"
    >
      {/* Conteudo do Header */}
      <div className="container mx-auto flex justify-between items-center p-8">
        {/* Logo */}
        <Image
          src="/logo_horizonta.png"
          alt="Logo"
          width={120}
          height={0}
          style={{
            marginLeft: "2vh",
          }}
        />
        {/* Menu de navegação */}
        <nav>
          {/* Sobre o projeto feito*/}
          <p>
            <a 
              style={{
                color: "black",
                fontSize:"20px"
              }}
              href="#" 
              className="hover:underline"
            >
              Sobre
            </a>  
          </p>
        </nav>
      </div>
    </header>
  );
}
  