# siggame/registre
[![Travis](https://img.shields.io/travis/siggame/registre.svg?style=flat-square)](https://travis-ci.org/siggame/registre)
[![Docker Pulls](https://img.shields.io/docker/pulls/siggame/registre.svg?style=flat-square)](https://hub.docker.com/r/siggame/registre/)
[![GitHub release](https://img.shields.io/github/release/siggame/registre.svg?style=flat-square)](https://github.com/siggame/registre/releases)

Site allowing MMAI participants to register, which is logged to a CSV

## Table Of Contents
- [Description](#description)
- [Getting Started](#getting-started)
    - [Run Normally](#run-normally)
    - [Run with Docker](#run-with-docker)
- [Contributing](#contributing)

## Description
Registre is a simple web service for the purpose of recording basic pre-registration for the MegaMinerAI competition. The earlier of an idea we have of who will attend, the better we can plan for things such as shirts, pizza, etc. The idea is that those who mark themselves as pre-registered will be the first ones in line to recieve a shirt. Other information can be relayed to the user after pre-registration.

This is not a substitution for normal registration. Instead, is is closer to an RSVP system. The service will log to a CSV file rather than communicate with any external service as to make this service as easy as possible to develop, deploy, and maintain.

Current Maintainer: [Russley Shaw](https://github.com/russleyshaw)

### User Submission Data
This is the current schema of form data that will be requested of the user, as well as some additional comments to take into account when prompting the user.

|Name|Type|Description|Comments|
|---|---|---|---|
|name|string|The name of the competitor.|Request that the competitor use their real name.|  
|email|string|The E-Mail of the competitor.|Request that the competitor use their University E-Mail.|  
|competed_before|boolean|Whether or not the competitor has competed in MegaMinerAI before.| |
|on_discord|boolean|Whether or not the competitor is on our public discord.|Display an invite to ACM SIG-Game Public Discord server after form has been filled out.|  
|shirt_size|x-small, small, medium, large, x-large, 2x-large|The shirt size of the competitor.|Please note that we only provide men's shirt sizes. We would be more than happy to accommidate women's shirt sizes if there is enough demand. E-Mail [siggame@mst.edu](mailto:siggame@mst.edu) to voice such a complaint.|
|pizza_choice|cheese, pepperoni, chicken, n/a, other|The pizza the competitor likes.| |  
|pizza_other|string|Alternative pizza choice.|If there is enough demand for a different type of pizza, we will consider it.|
|is_acm_member|boolean|Is the competitor a member of ACM General?|An ACM General member is defined as a ACM General member that has paid his/her dues.| |

## Getting Started
### Run normally
```
# Initialize project
npm run setup

## Run project
npm run start
```

### Run with Docker
You can build the image yourself:
```
# Build the image locally
docker build --tag registre .

# Run the container
docker run registre
```

Or you can pull the DockerHub image:
```
# Get the latest docker image
docker pull siggame/registre

# Run the container
docker run siggame/registre
```

## Contributing
TODO: Add link to general contributing information
TODO: Add information about contributing

