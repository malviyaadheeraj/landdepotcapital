import React from "react";
import "./oldProperty.css";

const PropertyPost = ({ postsToRender }) => {
  return (
    <div className="container section-Three-wrap">
      <div className="row mt-3 mb-5">
        {postsToRender &&
          postsToRender.propertyList.map((item, key) => (
            <div className="col-md-6 col-lg-4 col-sm-6 mt-2 mb-3" key={key}>
              <div className="card card-wrap">
                <div className="proprtyimg-wraper">
                  <img
                    className="card-img-top img-fluid"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="card-body card-title-wrapper">
                  <span className="card-title-wrap">{item.address}</span>
                  <div className="list-item-wrap">
                    <ul className="list-secnd-row">
                      <li>
                        <label className="propert-detls">House Detail</label>
                        <br />
                        <b>{item.house_detail}</b>
                      </li>
                      <li>
                        <label className="propert-detls">Profit</label>
                        <br />
                        <b>$ {item.profit}</b>
                      </li>
                    </ul>
                    <hr />
                    <ul className="list-secnd-row">
                      <li>
                        <label className="propert-detls">Purchase Price</label>
                        <br />
                        <b>$ {item.purchase_price}</b>
                      </li>
                      <li>
                        <label className="propert-detls">Hold Duration</label>
                        <br />
                        <b>{item.hold_duration} Days</b>
                      </li>
                      <li>
                        <label className="propert-detls">Sold Price</label>
                        <br />
                        <b>$ {item.sold_price}</b>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {/* <div className="container">
          <div className="loadMoreButton">
            <button>Load More</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PropertyPost;
