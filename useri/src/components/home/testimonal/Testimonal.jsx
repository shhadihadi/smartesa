import React , { useState } from "react"
import Heading from "../../common/heading/Heading"
import useFetch from "../../useFetch"
import "./style.css"

const Testimonal = () => {
  const { data: testimonal, isPending, error } = useFetch("http://localhost:8000/testimonal");
  const [visibleCount, setVisibleCount] = useState(3);
  if (error) {
    return <div>{error}</div>;
  }
  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 3);
  };
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle='TESTIMONIAL' title='Our Winners' />

          <div className='content grid2'>
            {isPending && <div>Loading...</div>}
            {testimonal &&
              testimonal.slice(0, visibleCount).map((val) => (
                <div key={val.id} className='items shadow'>
                  <div className='box flex'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                      <i className='fa fa-quote-left icon'></i>
                    </div>
                    <div className='name'>
                      <h2>{val.name}</h2>
                      <span>{val.post}</span>
                    </div>
                  </div>
                  <p>{val.desc}</p>
                </div>
              ))}
          </div>
          {testimonal && testimonal.length > visibleCount && (
            
            <div className="text-center">
            <button className="load-more primary-btn" onClick={handleLoadMore}>
              Load more
            </button>
          </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Testimonal
