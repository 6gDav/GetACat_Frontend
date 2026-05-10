function CaroselUI({res}) {
  return (
    <div>
        <div className="carousel w-full">
        {res.map((item, index) => (
          <div key={index} id={`slide${index}`} className="carousel-item relative w-full flex justify-center">
            <img src={item} className="max-h-125 object-contain" style={{ width: "700px" }} alt={`Slide ${index}`} />

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={`#slide${index === 0 ? res.length - 1 : index - 1}`} className="btn btn-circle">❮</a>
              <a href={`#slide${index === res.length - 1 ? 0 : index + 1}`} className="btn btn-circle">❯</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CaroselUI
