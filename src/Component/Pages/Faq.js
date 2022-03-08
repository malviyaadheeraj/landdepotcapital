import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onFaqData } from "../../store/homeAction";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import Helmet from "react-helmet";

const Faq = () => {
  const dispatch = useDispatch();
  const getFaqList = useSelector((state) => state.home.getFaqList);

  useEffect(() => {
    dispatch(onFaqData());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Faq</title>
      </Helmet>
      <div className="container-fluid pages-bg">
        <div className="container">
          <h2 className="Termspage-title">FAQs</h2>
        </div>
      </div>
      <div className="container-fluid terms-bgpage">
        <div className="container">
          <Accordion>
            {getFaqList &&
              getFaqList.map((faqList, key) => (
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>{faqList.name}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: faqList.description,
                      }}
                    ></p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Faq;
