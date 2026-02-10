import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function Imageslider({ url, limit = 5, page = 1 }) {
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleClickRight() {
    setCurrentSlide((prev) =>
      prev === image.length - 1 ? 0 : prev + 1
    );
  }

  function handleClickLeft() {
    setCurrentSlide((prev) =>
      prev === 0 ? image.length - 1 : prev - 1
    );
  }

  async function fetchImage(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(
        `${getUrl}?page=${page}&limit=${limit}`
      );

      const data = await response.json();

      if (data) {
        setImage(data);
      }

      setLoading(false);
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url) {
      fetchImage(url);
    }
  }, [url, page, limit]);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (errorMsg) {
    return <div>Error occurred: {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handleClickLeft}
        className="arrow arrow-left"
      />

      {image && image.length > 0 ? (
        image.map((imageItem, index) => (
          <img
            key={imageItem.id}
            src={imageItem.download_url}
            alt="slider"
            className={
              currentSlide === index
                ? "current-img"
                : "current-img hide-current-img"
            }
          />
        ))
      ) : (
        <div>No data found</div>
      )}

      <BsArrowRightCircleFill
        onClick={handleClickRight}
        className="arrow arrow-right"
      />

      <span className="circle-indicator">
        {image.length > 0 &&
          image.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={
                currentSlide === index
                  ? "current-indicator"
                  : "current-indicator hide-current-indicator"
              }
            />
          ))}
      </span>
    </div>
  );
}
