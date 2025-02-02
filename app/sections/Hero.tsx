"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[40rem] px-6 py-24 md:px-8 md:py-32">
      <div className="w-full h-full mx-auto max-w-7xl flex flex-col justify-between gap-16 md:gap-20">
        {/* Contenido principal */}
        <div className="z-20 w-full h-full flex flex-col gap-14 justify-between md:items-center md:gap-20">
          <div className="relative w-full h-full flex flex-col gap-10">
            <div className="h-[1px] bg-white/40 w-2/5"></div>

            <h1 className="text-5xl font-extrabold text-white md:text-8xl md:w-4/5">
              Descubre la Elegancia en Cada Detalle
            </h1>

            <div className="w-full grid grid-cols-1 gap-10 md:grid-cols-3">
              <p className="w-full text-white font-light">
                Bienvenida a Vanitix, donde cada accesorio cuenta una historia
                de estilo y sofisticación.
              </p>
              <div className="h-[1px] bg-white/40 mt-3.5 w-full"></div>
              <p className="w-full text-white font-light">
                Diseños únicos que resaltan tu belleza, descubre nuestra
                colección exclusiva de aretes, pulseras y cadenas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Imagen de fondo */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full bg-black">
          <Image
            src="/images/hero.jpg"
            alt="Accesorios de moda femeninos"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-70 bg-black/10 dark:bg-white/10"
            quality={100}
          />
        </div>
      </div>

      {/* Indicador de scroll animado */}
      <div className="absolute w-full flex justify-center items-center bottom-8">
        <div className="w-4 py-2.5 flex justify-center items-center border-2 border-white rounded-full">
          <motion.div
            className="w-1 h-2.5 bg-white rounded-full"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 6 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
