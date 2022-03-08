import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHomeBlogList } from "../../store/homeAction";
import "./Slides.css";

const BlogsSlide = () => {
  const dispatch = useDispatch();
  const getHomeBlogs = useSelector((state) => state.home.getHomeBlogs);

  useEffect(() => {
    dispatch(getHomeBlogList());
  }, [dispatch]);

  return (
    <>
      <section className="container-fluid ten-bg">
        <div className="container">
          <h3 className="ten-text">Latest from Our Blog</h3>
          <div className="review-wrapper">
            <div className="row">
              {getHomeBlogs &&
                getHomeBlogs.map((blogs, key) => (
                  <div
                    className="col-md-6 col-lg-4  col-sm-6 mt-2 mb-2  blog-text-wrap"
                    key={key}
                  >
                    <img src={blogs.image} alt="#" className="blogSlideImage" />
                    <br />
                    <label className="blog-date">{blogs && blogs.date}</label>
                    <p className="Blogsbdy-text">{blogs.blog_name} </p>{" "}
                    <Link to={`/blog/${blogs.blog_slug}`}>
                      <button className="get-btnsec"> view More</button>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsSlide;
