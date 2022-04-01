import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogList, getBlogListId } from "../../store/homeAction";
import Helmet from "react-helmet";

const BlogsHome = ({ match }) => {
  const dispatch = useDispatch();
  const getBlogsId = useSelector((state) => state.home.getBlogsId);
  const getBlogs = useSelector((state) => state.home.getBlogs);

  useEffect(() => {
    dispatch(getBlogList());
  }, [dispatch]);

  useEffect(() => {
    if (getBlogs) {
      for (let i = 0; i < getBlogs.length; i++) {
        if (getBlogs[i].blog_slug === match.params.blog_id) {
          getBlogDetaills(getBlogs[i].id);
        }
      }
    }
  }, [getBlogs]);

  const getBlogDetaills = (id) => {
    const data = {
      id: id,
    };
    dispatch(getBlogListId(data));
  };

  return (
    <>
      <Helmet>
        <title>{getBlogsId && getBlogsId.blog.blog_seo}</title>
        <meta
          name="description"
          content={getBlogsId && getBlogsId.blog.seo_description}
        />
        <meta name="keyword" content={getBlogsId && getBlogsId.blog.keyword} />
        <link
          rel="canonical"
          href={`/blog/${getBlogsId && getBlogsId.blog.blog_seo}`}
        ></link>
      </Helmet>
      <div
        className="container-fluid pages-bg"
        style={{
          backgroundImage: `url("${getBlogsId && getBlogsId.blog.image}")`,
        }}
        id="Blog-page"
      ></div>
      <div className="container-fluid terms-bgpage">
        <div className="container blogspage-wrapeer">
          <p className="blog-date">{getBlogsId && getBlogsId.date}</p>
          <h1>{getBlogsId && getBlogsId.blog.blog_name}</h1>
          <label
            dangerouslySetInnerHTML={{
              __html: getBlogsId && getBlogsId.blog.description,
            }}
          ></label>
        </div>
      </div>
    </>
  );
};

export default BlogsHome;
