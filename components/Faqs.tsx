"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you take insurance?",
    a: "Yes. I accept most major insurance plans. Please contact the office to confirm your coverage."
  },
  {
    q: "What are your rates?",
    a: "Session rates vary depending on treatment type. Feel free to reach out for detailed pricing."
  },
  {
    q: "Do you have any openings?",
    a: "Availability changes weekly. You can request a consultation to check current openings."
  }
];

const Faq = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 px-6">

      <div className="max-w-3xl mx-auto">

        <h2 className="text-4xl font-semibold mb-12 text-center">
          Frequently Asked Questions
        </h2>

        {faqs.map((item, i) => (
          <div key={i} className="border-t">

            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center py-6 text-lg font-medium"
            >

              {item.q}

              <span
                className={`text-2xl transition-transform ${
                  open === i ? "rotate-45" : ""
                }`}
              >
                +
              </span>

            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                open === i ? "max-h-40 pb-6" : "max-h-0"
              }`}
            >
              <p className="opacity-70 leading-relaxed text-left">
                {item.a}
              </p>
            </div>

          </div>
        ))}

        <div className="border-t" />

      </div>

    </section>
  );
};

export default Faq;
