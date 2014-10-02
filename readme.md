IT2805 - Web Technologies ![Build Status](https://travis-ci.org/n1k0/casperjs.png?branch=master)
================

#### What is this?
This repository contains all my assignments in the IT2805 class at Norwegian
University of Science and Technology.

### Testing
For fun I've written a handful of tests with CasperJS. CasperJS will spawn a
virtual browser and assert different things for each exercise. Whenever a push
to <code>master</code> is done, [Travis-CI](http://travis-ci.org/n1k0/casperjs)
will run the tests and email me if anything broke.

#### Deployment-script
The deployment-script executes the following commands to sync the webserver on
folk.ntnu.no with the master branch of this repo. Feel free to modify to your own
needs.

Replace the <code>public_html/it2805</code>
directory with whatever directory you use. Furthermore change the url of the <code>wget</code> to
point to your repo. Optionally hook it into git to automate deployment.
```bash
  cd public_html/it2805;
  wget "https://github.com/michaelmcmillan/IT2805/tarball/master";
  tar -xvf "master" --strip 1;
  rm master*;
```

#### Course description
The focus in this course is on the World Wide Web as a platform for interactive
applications, content publishing and social services. The development of web-based
applications requires knowledge about the underlying technology and the formats
and standards the web is based upon.

In this course you will learn about the HTTP
communication protocol, the markup languages HTML, XHTML and XML, the CSS and XSLT
standards for formatting and transforming web content, event-based programming
on the client-side, interactive graphics and multimedia content on the web. The
course will also give an introduction in web search and indexing as well as
information management aspects such as digital rights and standards for describing
web content.
