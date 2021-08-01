function renderLicenseBadge(license) {
    if (license !== 'None' ){
      return `![license](https://img.shields.io/badge/license-${license}-green)`
    }
    return ``
  }
  
  function renderLicenseLink(license) {
    if (license !== 'None'){
      return `* [License](#Licenses)`
  }
  return ``
  }
  
  function renderLicenseSection(license) {
    if (license !== 'None'){
      return `## Licenses `}
  }
  
  function generateMarkdown(data) {
    return `
    # ${data.title} 
    ${renderLicenseBadge(data.license)} 
      
    ## Table of Contents
    * [Title](#title)
    * [License](#license)
    * [Description](#description)
    * [Installing the program](#installation)
    * [Using the program](#usage)
    * [contribute](#contributing)
    * [contact](#contact)
    
    ## Description
    ${data.description}
    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}
    
    ## Contributing
    ${data.contribute}
    
    ## Contact
    Reach out to me via email at ${data.email} or through [github](https://github.com/${data.github}) if you have any questions
  `;
  }
  
  module.exports = generateMarkdown;