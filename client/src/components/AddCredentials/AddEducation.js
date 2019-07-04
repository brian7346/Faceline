import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { CustomInput, CustomTextArea, CustomLink, CustomButton } from "../";
import { ErrorContext } from "../../context/ErrorContext";
import { addEducationAction } from "../../actions/profileActions";
import { GET_ERRORS } from "../../actions/types";

const AddEducation = props => {
  const { errors, changeErrors } = useContext(ErrorContext);

  useEffect(() => {
    return () => {
      changeErrors({
        type: GET_ERRORS,
        payload: {}
      });
    };
  }, []);

  const [school, changeSchool] = useState("");
  const [degree, changeDegree] = useState("");
  const [fieldofstudy, changeFieldofstudy] = useState("");
  const [from, changeFrom] = useState("");
  const [to, changeTo] = useState("");
  const [current, changeCurrent] = useState(false);
  const [description, changeDescription] = useState("");
  const [disabled, changeDisabled] = useState(false);

  const handleSchool = event => changeSchool(event.target.value);
  const handleDegree = event => changeDegree(event.target.value);
  const handleFieldofstudy = event => changeFieldofstudy(event.target.value);
  const handleFrom = event => changeFrom(event.target.value);
  const handleTo = event => changeTo(event.target.value);
  const handleDescription = event => changeDescription(event.target.value);

  const onCheck = event => {
    changeDisabled(!disabled);
    changeCurrent(!current);
  };

  const onSubmit = event => {
    event.preventDefault();

    const eduData = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    };

    addEducationAction(eduData, props.history, changeErrors);
  };

  return (
    <div className="add-education min-height pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <CustomLink to="/dashboard" btnLight title="Назад" />
            <h1 className="display-4 text-center">Добавить Образование</h1>
            <p className="p-lead text-center">
              Добавьте вашу школу, университет и т.п. которые вы окончили
            </p>
            <small className="d-block pb-3">* = обязательные поля</small>
            <form onSubmit={onSubmit}>
              <CustomInput
                placeholder="* Школа"
                name="school"
                value={school}
                onChange={handleSchool}
                errors={errors}
              />
              <CustomInput
                placeholder="* Образование/Сертефикация"
                name="degree"
                value={degree}
                onChange={handleDegree}
                errors={errors}
              />
              <CustomInput
                placeholder="* Специализация"
                name="fieldofstudy"
                value={fieldofstudy}
                onChange={handleFieldofstudy}
                errors={errors}
              />
              <h6>Дата начала</h6>
              <CustomInput
                name="from"
                type="date"
                value={from}
                onChange={handleFrom}
                errors={errors}
              />
              <h6>Дата завершения</h6>
              <CustomInput
                name="to"
                type="date"
                value={to}
                onChange={handleTo}
                errors={errors}
                disabled={disabled ? true : false}
              />
              <div className="form-check mb-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="current"
                  value={current}
                  checked={current}
                  onChange={onCheck}
                  id="current"
                />
                <label htmlFor="current" className="form-check-label">
                  Текущее место работы
                </label>
              </div>
              <CustomTextArea
                placeholder="Описание программы"
                name="description"
                value={description}
                onChange={handleDescription}
                errors={errors}
                info="Расскажите нам о программе, которую вы проходили"
              />
              <CustomButton type="submit" value="Добавить" btnBlock marginTop />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AddEducation);
