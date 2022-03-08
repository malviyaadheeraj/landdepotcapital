import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getBlogList } from "../../store/homeAction";
import Helmet from "react-helmet";

const Blogs = () => {
  const dispatch = useDispatch();
  const getBlogs = useSelector((state) => state.home.getBlogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);
  const pageNumbers = [];

  useEffect(() => {
    dispatch(getBlogList());
  }, [dispatch]);

  for (
    let i = 1;
    i <= Math.ceil(getBlogs && getBlogs.length / postsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogs =
    getBlogs && getBlogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <div className="container-fluid pages-bg">
        <div className="container">
          <h2 className="page-title">Blogs</h2>
          <h6 className="text-center ">
            <Link to="/" className="Link-color">
              Home
            </Link>
            <i className="fas fa-chevron-right centarow" /> Blogs
          </h6>
        </div>
      </div>

      <section className="container-fluid blogs-section-wrap">
        <div className="container">
          <div className="row pt-5 pb-5">
            {currentBlogs &&
              currentBlogs.map((blogs, key) => (
                <div
                  className="col-md-6 col-lg-4 col-sm-6 blog-text-wrap mt-4 mb-4 pe-2"
                  key={key}
                >
                  <img src={blogs.image} alt="#" className="blogSlideImage" />
                  <br />
                  <label className="blog-date">{blogs && blogs.date}</label>
                  <p className="Blogsbdy-text">{blogs.blog_name} </p>
                  <Link to={`/blog/${blogs.blog_slug}`}>
                    <button className=" get-btnsec"> view More</button>
                  </Link>
                </div>
              ))}
          </div>
          <div className="row d-flex align-items-center justify-content-center w-100">
            <div className="col d-flex align-items-center justify-content-center">
              <ul className="mb-4">
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className="prevButton"
                  >
                    {number}
                  </button>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
