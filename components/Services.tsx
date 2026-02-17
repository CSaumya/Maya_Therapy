const services = [
  {
    title: "Individual Therapy",
    desc: "One-on-one sessions focused on personal growth and emotional healing."
  },
  {
    title: "Couples Counseling",
    desc: "Strengthen communication and rebuild connection together."
  },
  {
    title: "Stress Management",
    desc: "Learn practical tools to reduce anxiety and regain balance."
  }
];

const Services = () => {
  return (
    <section className="py-24 px-6 bg-neutral-50">

      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-semibold mb-4">My Services</h2>
        <p className="text-gray-600">
          Thoughtfully designed therapy services to support your mental wellbeing.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>

            <p className="text-gray-600 mb-6">
              {service.desc}
            </p>

            <button className="text-sm px-3 py-2 rounded-r-3xl cursor-pointer">
              Learn more
            </button>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Services;
