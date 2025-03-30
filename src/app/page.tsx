import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center">
          Xochikua
        </h1>

        <Image
          src="/images/xochi.png"
          alt="SKL Logo"
          width={400}
          height={400}
          className="w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[500px] h-auto mt-8"
        />
      </div>

      <div className="grid grid-rows-2 grid-cols-2 gap-4 mb-40 mx-auto w-full max-w-screen-xl px-4">
        {/* First row */}
        <div className="flex items-center justify-center">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Visión:
        <span className="block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2">
          Ser la plataforma líder en integración de pagos digitales para el acceso a servicios culturales y recreativos en zonas metropolitanas, aprovechando la tecnología blockchain para ofrecer una experiencia fluida, segura y accesible a locales y turistas de toda la zona metropolitana de Guadalajara.
        </span>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
        src="/images/xochi.png"
        alt="Imagen en la primera fila, segunda columna"
        width={200}
        height={200}
        className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-auto"
          />
        </div>

        {/* Second row */}
        <div className="flex items-center justify-center">
          <Image
        src="/images/xochi.png"
        alt="Imagen en la segunda fila, primera columna"
        width={200}
        height={200}
        className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-auto"
          />
        </div>
        <div className="flex items-center justify-center">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Misión:
        <span className="block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2">
          Facilitar el acceso a actividades culturales y recreativas mediante la implementación de tecnología innovadora, utilizando la infraestructura del transporte metropolitano para digitalizar pagos y mejorar la experiencia del usuario. Buscamos impulsar el turismo, fomentar el desarrollo cultural y brindar soluciones eficientes que eliminen las barreras económicas y logísticas en el consumo de entretenimiento.
        </span>
          </p>
        </div>
      </div>
    </div>
  );
}