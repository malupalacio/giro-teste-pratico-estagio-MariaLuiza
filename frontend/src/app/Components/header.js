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
      <div className="container flex justify-between items-center p-8">
        {/* Logo */}
        <Image
          src="/logo_horizontal.png"
          alt="Logo"
          width={260}
          height={0}
        />
      </div>
    </header>
  );
}
  