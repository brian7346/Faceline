import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ProfileContext } from "../../context/ProfileContext";
import { ErrorContext } from "../../context/ErrorContext";

import { CustomButton } from "../";
import { deleteExperienceAction } from "../../actions/profileActions";
import Moment from "react-moment";

const Experience = props => {
  const { changeProfile } = useContext(ProfileContext);
  const { changeErrors } = useContext(ErrorContext);

  const onDelete = id => {
    deleteExperienceAction(id, changeProfile, changeErrors);
  };
  const experience = props.experience.map(exp => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>
        <Moment format="DD.MM.YYYY">{exp.from}</Moment> -
        {exp.to === null ? (
          " Текущее место"
        ) : (
          <Moment format="DD.MM.YYYY">{exp.to}</Moment>
        )}
      </td>
      <td>
        <CustomButton
          type="button"
          btnDanger
          value="Удалить"
          onClick={() => onDelete(exp._id)}
        />
      </td>
    </tr>
  ));
  return (
    <>
      <h4 className="mt-4 mb-4">Опыт работы</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Компания</th>
            <th>Должность</th>
            <th>Период</th>
            <th />
          </tr>
        </thead>
        <tbody>{experience}</tbody>
      </table>
    </>
  );
};

Experience.propTypes = {
  experience: PropTypes.array
};

export default Experience;
