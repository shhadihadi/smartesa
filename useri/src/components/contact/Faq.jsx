import React, { useState } from "react";
import Heading from "../common/heading/Heading";
import useFetch from "../useFetch";

const Faq = () => {
  const [click, setClick] = useState(false);
  const { data: faq, isPending, error } = useFetch("http://localhost:8000/faq");

  const toggle = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };

  return (
    <>
      <Heading subtitle="FAQS" title="Frequesntly Ask Question" />
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {faq && (
        <section className="faq">
          <div className="container">
            {faq.map((val, index) => (
              <div className="box" key={index}>
                <button
                  className="accordion"
                  onClick={() => toggle(index)}
                  key={index}
                >
                  <h2>{val.title}</h2>
                  <span>
                    {click === index ? (
                      <i className="fa fa-chevron-down"></i>
                    ) : (
                      <i className="fa fa-chevron-right"></i>
                    )}
                  </span>
                </button>
                {click === index ? (
                  <div className="text">
                    <p>{val.desc}</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Faq;

