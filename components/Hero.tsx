import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[url('/images/maya-hero.jpg')] bg-cover bg-center">

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 px-6 min-h-screen text-white">

        <h1 className="text-4xl md:text-5xl font-semibold max-w-6xl">
          Anxiety, Trauma & Burnout Therapy
        </h1>

        <p className="max-w-xl text-lg">
          Compassionate therapy for adults in Santa Monica, California.
        </p>

        <Image
          src="/maya-profile.jpeg"
          alt="Dr Maya Reynolds"
          width={250}
          height={250}
          className="rounded-full object-cover shadow-lg mt-4"
        />

        <p className="font-semibold">
          Dr. Maya Reynolds, PsyD<br />
          <span className="font-normal text-sm">
            Licensed Clinical Psychologist
          </span>
        </p>

        <button className="mt-4 bg-[var(--accent)] px-8 py-3 rounded-full hover:opacity-90 transition cursor-pointer">
          Schedule Free Consultation
        </button>

      </div>

    </section>
  );
};

export default Hero;
