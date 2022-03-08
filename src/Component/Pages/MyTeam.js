import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onTeamList } from "../../store/homeAction";

const MyTeam = () => {
  const dispatch = useDispatch();
  const getTeamList = useSelector((state) => state.home.getTeamList);

  useEffect(() => {
    dispatch(onTeamList());
  }, [dispatch]);

  return (
    <div
      className="container-fluid team-wrappers"
      style={{ backgroundColor: "#fbfbfb" }}
    >
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ flexDirection: "column" }}
      >
        <h2 className="Theteam-hading">Meet The Team</h2>
        <div className="myTeam-wrapper">
          {getTeamList &&
            getTeamList.map((team, key) => (
              <div className="my-team" key={key}>
                <div className="roundeImageWrapper">
                  <img src={team.image} className="rounde-img-wrapp" alt="" />
                </div>
                <h6 className="team-name">{team.name}</h6>
                <h6 className="team-postion">{team.position}</h6>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
