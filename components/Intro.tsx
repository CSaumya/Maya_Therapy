const Intro = () => {
  return (
    <section className="mt-24 grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">

      <div className="relative h-[50vh] md:h-auto">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/intro_Bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="flex items-center px-6 md:px-16 bg-[var(--foreground)]">
        <div className="max-w-xl">

          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[var(--primary)]">
            Feeling “Okay” on the Outside — But Struggling Inside?
          </h2>

          <p className="text-white text-lg leading-relaxed">
            You may be high-achieving, thoughtful, and self-aware, yet feel internally exhausted by constant worry, physical tension, difficulty sleeping, or a sense that you’re always bracing for something to go wrong.
            <br /><br />
            Dr. Maya Reynolds works with adults who feel overwhelmed by anxiety, stress, trauma, and burnout.
            Therapy becomes a space to slow down, reconnect with yourself, and develop healthier ways of coping — both emotionally and physically.
          </p>

        </div>
      </div>

    </section>
  );
};

export default Intro;
