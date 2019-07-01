import React from "react";
import { Link } from "react-router-dom";
import "./Link.scss";
import classNames from "classnames";
import { ThemeContext } from "../../../context/ThemeContext";
import PropTypes from "prop-types";

const CustomLink = props => {
  const { theme } = React.useContext(ThemeContext);

  let className = classNames({
    btn: true,
    "btn-lg": props.large && !props.navLink && !props.navBrand,
    "dark-link ": theme.darkMode && !props.navLink && !props.navBrand,
    "dark-bg": theme.darkMode && !props.navLink && !props.navBrand,
    "current-bg":
      !theme.darkMode && !props.btnLight && !props.navLink && !props.navBrand,
    "mr-2": props.marginRight,
    "ml-2": props.marginLeft,
    "mb-3": props.marginBottom,
    p4: props.padding,
    "btn-light": props.btnLight,
    "nav-link": props.navLink,
    "navbar-brand": props.navBrand
  });
  return (
    <Link to={props.to} className={className}>
      {props.title}
    </Link>
  );
};

CustomLink.propTypes = {
  title: PropTypes.string.isRequired,
  large: PropTypes.bool,
  navLink: PropTypes.bool,
  navBrand: PropTypes.bool,
  btnLight: PropTypes.bool,
  padding: PropTypes.bool,
  marginRight: PropTypes.bool,
  marginLeft: PropTypes.bool
};

export default CustomLink;
