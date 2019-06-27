import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { CustomInput, CustomTextArea, CustomLink, CustomButton } from "../";
import { ErrorContext } from "../../context/ErrorContext";
import { addExperienceAction } from "../../actions/profileActions";
import { GET_ERRORS } from "../../actions/types";

const AddExperience = props => {
  const { errors, changeErrors } = useContext(ErrorContext);

  useEffect(() => {
    return () => {
      changeErrors({
        type: GET_ERRORS,
        payload: {}
      });
    };
  }, []);

  const [company, changeCompany] = useState("");
  const [title, changeTitle] = useState("");
  const [location, changeLocation] = useState("");
  const [from, changeFrom] = useState("");
  const [to, changeTo] = useState("");
  const [current, changeCurrent] = useState(false);
  const [description, changeDescription] = useState("");
  const [disabled, changeDisabled] = useState(false);

  const handleCompany = event => changeCompany(event.target.value);
  const handleTitle = event => changeTitle(event.target.value);
  const handleLocation = event => changeLocation(event.target.value);
  const handleFrom = event => changeFrom(event.target.value);
  const handleTo = event => changeTo(event.target.value);
  const handleDescription = event => changeDescription(event.target.value);

  const onCheck = event => {
    changeDisabled(!disabled);
    changeCurrent(!current);
  };

  const onSubmit = event => {
    event.preventDefault();

    const expData = {
      company,
      title,
      location,
      from,
      to,
      current,
      description
    };

    addExperienceAction(expData, props.history, changeErrors);
  };

  return (
    <div className="add-experience min-height pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <CustomLink to="dashboard" btnLight title="Назад" />
            <h1 className="display-4 text-center">Добавить Опыт</h1>
            <p className="p-lead text-center">
              Добавьте любую работу или должность, которая у вас была в прошлом
              или текущую
            </p>
            <small className="d-block pb-3">* = обязательные поля</small>
            <form onSubmit={onSubmit}>
              <CustomInput
                placeholder="* Компания"
                name="company"
                value={company}
                onChange={handleCompany}
                errors={errors}
              />
              <CustomInput
                placeholder="* Должность"
                name="title"
                value={title}
                onChange={handleTitle}
                errors={errors}
              />
              <CustomInput
                placeholder="Местоположение"
                name="location"
                value={location}
                onChange={handleLocation}
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
                placeholder="Описание работы"
                name="description"
                value={description}
                onChange={handleDescription}
                errors={errors}
              />
              <CustomButton type="submit" value="Добавить" btnBlock marginTop />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AddExperience);
