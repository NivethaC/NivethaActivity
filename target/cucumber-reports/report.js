$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Eclipse/NivethaActivity/src/main/resources/Login.feature");
formatter.feature({
  "name": "Verifying demo bank details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verifying login details",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on rapid test page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterMain.url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter details",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterMain.product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks submit and logout",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterMain.select()"
});
formatter.result({
  "status": "passed"
});
});