
function renderLicenseBadge(licenseInfo) {
  if (!licenseInfo) {
    return '';
  }
  return `

  ## License
  ![License](https://img.shields.io/badge/License-${licenseInfo}-blue.svg)`
}

function renderLanguageBadge(language) {
if (!language) {
  return '';
}
return `
  ## Language
  ![Image of Badge](https://img.shields.io/badge/-${language}-61DAFB)`
}

module.exports = templateData => {

  const {projectName, description, email, Installation, Usage, usagePicture, githubname, licenseInfo, language} = templateData;

  return  `# ${projectName}

  ## Description 
  ${description}

  ## Table of contents 
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Language Badge](#Language)

  ## Installation
  ${Installation}

  ## Usage
  ${Usage}
  ![Image of Usage Pic](${usagePicture})

  ${renderLicenseBadge(licenseInfo)}

  ${renderLanguageBadge(language)}

  ## Questions 
  - Contact me via email at ${email}
  - Visit my [Github Page](www.github.com/${githubname})`
};
