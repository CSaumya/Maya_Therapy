const KnowMe = () => {
  return (
    <section className="py-24 px-6 bg-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="/maya-profile.jpeg"
            alt="About"
            className="w-full h-[450px] object-cover rounded-3xl"
          />
        </div>

        <div>
          <h2 className="text-4xl font-semibold mb-6">
            Get To Know Me
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            I’m a licensed clinical psychologist dedicated to helping individuals
            navigate life’s challenges with compassion and clarity.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            My approach focuses on creating a safe, supportive environment where
            you can grow emotionally and rediscover balance in your life.
          </p>
        </div>

      </div>

    </section>
  )
}

export default KnowMe
