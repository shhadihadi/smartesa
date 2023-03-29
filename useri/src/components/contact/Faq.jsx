import React, { useState } from "react";
import Heading from "../common/heading/Heading";
import useFetch from "../useFetch";

const Faq = () => {
  const [click, setClick] = useState(null);
  const { data: faq, isPending, error } = useFetch("http://localhost:8000/faq");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;
  const totalPages = faq ? Math.ceil(faq.length / itemsPerPage) : 0;

  const toggle = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
    setCurrentPage(Math.ceil((index + 1) / itemsPerPage));
  };

  const renderItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, faq.length);

    return faq.slice(startIndex, endIndex).map((val, index) => (
      <div className="box" key={startIndex + index}>
        <button
          className="accordion"
          onClick={() => toggle(startIndex + index)}
          key={startIndex + index}
        >
          <h2>{val.title}</h2>
          <span>
            {click === startIndex + index ? (
              <i className="fa fa-chevron-down"></i>
            ) : (
              <i className="fa fa-chevron-right"></i>
            )}
          </span>
        </button>
        {click === startIndex + index ? (
          <div className="text">
            <p>{val.desc.split("\n").map((line, index) => (
            <React.Fragment key={index}>
            {line}
           <br />
          </React.Fragment>
            ))}
            </p>
          </div>
        ) : null}
      </div>
    ));
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <>
      <Heading subtitle="FAQS" title="Frequently Asked Questions" />
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {faq && faq.length > 0 && (
        <section className="faq">
          <div className="containerF">{renderItems()}</div>
          {totalPages > 1 && (
            <div className="pagination">
              <button onClick={handlePrevClick} disabled={currentPage === 1}>
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? "active" : ""}
                  >
                    {page}
                  </button>
                )
              )}
              <button
                onClick={handleNextClick}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Faq;
