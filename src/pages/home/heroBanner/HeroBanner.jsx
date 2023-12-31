import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Spinner from "../../../components/spinner/Spinner";
const HeroBanner = () => {
  const navigate = useNavigate();
  const {url} = useSelector((state) =>state.home)
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    // console.log(setBackground(bg))
    setBackground(bg)
  }, [data]);

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {
        loading ? <Spinner /> : <div className="backdrop-img">
          <Img src={background} />
        </div>
      }
      <div className="opacity-layer"></div>
      <ContentWrapper>
      <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millons of movies,TV Shows and people to discover. Explore Now
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or TV Show.."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
