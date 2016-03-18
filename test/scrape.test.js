"use strict";
var assert = require("chai").assert;
var Ajv = require("ajv");
var ajv = Ajv();
var _ = require("lodash");

var airlines = require("../bin/scrape.js").airlines;
var airlinesSchema = require("../schema/airline_destinations.schema.json");

describe("bin/scrape tests", function() {
  it("should return an array", function () {
    assert.typeOf(airlines, "array");
  });

  it("should meet the basic schema", function () {
    var validateAirlineSchema = ajv.compile(airlinesSchema);
    var validAirlineSchema = validateAirlineSchema(airlines);

    // console.log(validateAirlineSchema);
    // console.log(airlines[50]);

    assert.isTrue(validAirlineSchema, _.get(validateAirlineSchema, "errors[0].message"));
  });
});
