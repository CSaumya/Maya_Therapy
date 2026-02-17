const Office = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Our Office</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A calm, welcoming space designed to help you feel safe, relaxed, and supported.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          <img
            src="/office1.jpeg"
            className="rounded-3xl object-cover h-[300px] w-full"
            alt="Office room"
          />

          <img
            src="/office2.jpeg"
            className="rounded-3xl object-cover h-[300px] w-full"
            alt="Waiting area"
          />

          <img
            src="/office_3.jpg"
            className="rounded-3xl object-cover h-[300px] w-full"
            alt="Therapy space"
          />

        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            In-person sessions are available in a peaceful, private setting — with secure
            online therapy options also available.
          </p>

          <button className="px-6 py-3 rounded-full hover:text-white transition cursor-pointer">
            View Location
          </button>
        </div>

      </div>
    </section>
  )
}

export default Office
