import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogList, getBlogListId } from "../../store/homeAction";
import { FacebookShareButton, LinkedinShareButton } from "react-share";
import { FacebookIcon, LinkedinIcon } from "react-share";
import Helmet from "react-helmet";

const BlogsHome = ({ match }) => {
  const dispatch = useDispatch();
  const getBlogsId = useSelector((state) => state.home.getBlogsId);
  const getBlogs = useSelector((state) => state.home.getBlogs);
  const shareUrl =
    "https://landdepotcapital.ca/#/blog/time-share-vs-fractional-ownership-which-one-is-best-for-youo97s548zoe";

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
          Share With{" "}
          <FacebookShareButton
            url={shareUrl}
            quote={getBlogsId && getBlogsId.blog.blog_name}
          >
            <i className="fab fa-facebook-f Space_a_tag"></i>
          </FacebookShareButton>
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

{
  /* <a
            href={`https://www.linkedin.com/shareArticle/?url=${
              getBlogsId && getBlogsId.blog.image
            }`}
            target="_blank"
            title="Share on LinkedIn"
          >
            <i className="fab fa-linkedin-in Space_a_tag"></i>
          </a>
          <a
            href={`https://www.facebook.com/sharer.php?t=${
              getBlogsId && getBlogsId.blog.blog_name
            }&u=https://landdepotcapital.ca/#/blog/${
              getBlogsId && getBlogsId.blog.blog_name
            }`}
            target="_blank"
            title={getBlogsId && getBlogsId.blog.blog_name}
          >
            <i className="fab fa-facebook-f Space_a_tag"></i>
          </a> */
}

{
  /* <FacebookShareButton
url={shareUrl}
quote={getBlogsId && getBlogsId.blog.blog_name}
>
<FacebookIcon size={32} round={true} />
</FacebookShareButton> */
}

{
  /* <LinkedinShareButton
url={shareUrl}
quote={getBlogsId && getBlogsId.blog.blog_name}
>
<LinkedinIcon size={32} round={true} />
</LinkedinShareButton> */
}
