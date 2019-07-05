import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ProfileContext } from "../../context/ProfileContext";
import { ErrorContext } from "../../context/ErrorContext";

import { CustomButton } from "../";
import { deleteEducationAction } from "../../actions/profileActions";
import Moment from "react-moment";

const Education = props => {
  const { changeProfile } = useContext(ProfileContext);
  const { changeErrors } = useContext(ErrorContext);

  const onDelete = id => {
    deleteEducationAction(id, changeProfile, changeErrors);
  };
  const education = props.education.map(edu => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>
        <Moment format="DD.MM.YYYY">{edu.from}</Moment> -
        {edu.to === null ? (
          " Текущее место"
        ) : (
          <Moment format="DD.MM.YYYY">{edu.to}</Moment>
        )}
      </td>
      <td>
        <CustomButton
          type="button"
          btnDanger
          value="Удалить"
          onClick={() => onDelete(edu._id)}
        />
      </td>
    </tr>
  ));
  return (
    <>
      <h4 className="mb-5">Образование</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Школа</th>
            <th>Образование</th>
            <th>Период</th>
            <th />
          </tr>
        </thead>
        <tbody>{education}</tbody>
      </table>
    </>
  );
};

Education.propTypes = {
  education: PropTypes.array
};

export default Education;
