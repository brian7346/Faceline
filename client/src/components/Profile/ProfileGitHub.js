import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ProfileGitHub = props => {
  const [clientId, changeClientId] = useState("59dbb5c7254052a001de");
  const [clientSecret, changeClientSecret] = useState(
    "41284f2457a4fce653a9ed1b8d08a15b0ab32d90"
  );
  const [count, changeCount] = useState(5);
  const [sort, changeSort] = useState("created: asc");
  const [repos, changeRepos] = useState([]);

  let githubRef;

  useEffect(() => {
    const { username } = props;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (githubRef) {
          changeRepos(data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  let repoItemClassName = classNames({
    card: true,
    "card-body": true,
    "mb-2": true,
    "dark-bg": props.darkMode
  });

  const reposItems = repos.map(repo => (
    <div key={repo.id} className={repoItemClassName}>
      <div className="row">
        <div className="col-md-6">
          <a href={repo.html_url} className="text-info" target="_blank">
            {repo.name}
          </a>
        </div>

        <div className="col-md-6">
          <span className="badge badge-info mr-1">
            Звезды: {repo.stargazers_count}
          </span>
          <span className="badge badge-secondary mr-1">
            Наблюдатели: {repo.watchers_count}
          </span>
          <span className="badge badge-success">Forks: {repo.forks_count}</span>
        </div>
      </div>
    </div>
  ));
  return (
    <div ref={ref => (githubRef = ref)}>
      <hr />
      <h3 className="mb-4">Последние репозитории на GitHub</h3>
      {reposItems}
    </div>
  );
};

ProfileGitHub.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGitHub;
