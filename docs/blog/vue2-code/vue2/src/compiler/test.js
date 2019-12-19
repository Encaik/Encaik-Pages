var singleAttrIdentifier = /([^\s"'<>\/=]+)/,
  singleAttrAssign = /=/,
  singleAttrAssigns = [singleAttrAssign],
  singleAttrValues = [
    // attr value double quotes
    /"([^"]*)"+/.source,
    // attr value, single quotes
    /'([^']*)'+/.source,
    // attr value, no quotes
    /([^\s"'=<>`]+)/.source
  ]

function attrForHandler() {
  let str1 = singleAttrIdentifier.source;
  let str2 = joinSingleAttrAssigns();
  let str3 = singleAttrValues.join('|');
  console.log(str1);
  console.log(str2);
  console.log(str3);
  var pattern = str1 + '(?:\\s*(' + str2 + ')' + '\\s*(?:' + str3 + '))?';
  console.log(pattern);
  return new RegExp('^\\s*' + pattern)
}

function joinSingleAttrAssigns() {
  let joinstr = singleAttrAssigns.map(function (assign) {
    let str = '(?:' + assign.source + ')';
    console.log(str);
    return str;
  }).join('|');
  console.log(joinstr);
  return joinstr;
}

attrForHandler();
