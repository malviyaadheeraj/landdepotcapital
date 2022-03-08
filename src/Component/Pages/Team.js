import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onTeamData } from "../../store/homeAction";
import MyTeam from "./MyTeam";
import Helmet from "react-helmet";

const Team = () => {
  const dispatch = useDispatch();
  const getTeamData = useSelector((state) => state.home.getTeamData);

  useEffect(() => {
    dispatch(onTeamData());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Team</title>
      </Helmet>
      <div className="container-fluid pages-bg">
        <div className="container">
          <h2 className="Termspage-title">Team</h2>
        </div>
      </div>
      <div className="container-fluid terms-bgpage">
        <div className="container">
          <div
            className="Terms-Wrapper"
            dangerouslySetInnerHTML={{
              __html: getTeamData && getTeamData.section_1,
            }}
          ></div>
          <MyTeam />
        </div>
      </div>
    </>
  );
};

export default Team;
