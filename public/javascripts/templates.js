this["JST"] = this["JST"] || {};

this["JST"]["header"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = ( title )) == null ? '' : __t) +
'\n';

}
return __p
};

this["JST"]["item"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="question" class="well well-lg">\n  <strong>Question</strong><br>\n  ' +
((__t = ( question )) == null ? '' : __t) +
'\n</div>\n<div id="vote"></div>\n';

}
return __p
};

this["JST"]["item_choice_item"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<label><input type="radio" class="choice" name="choice" value="' +
((__t = ( _id )) == null ? '' : __t) +
'"> ' +
((__t = ( text )) == null ? '' : __t) +
'</label>\n';

}
return __p
};

this["JST"]["item_choice_list"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p class="lead">Please select one of the following options.</p>\n<form id="vote-form" role="form">\n  <div id="choice-list"></div>\n  <p><hr></p>\n  <div class="row">\n    <div class="col-xs-6">\n    <a href="../#/polls" class="btn btn-default" role="button"><span class="glyphicon glyphicon-arrow-left"></span> Back to Poll</a>\n    </div>\n    <div class="col-xs-6">\n      <button id="vote-btn" class="btn btn-primary pull-right" type="submit">Vote &raquo;</button>\n    </div>\n  </div>\n</form>\n';

}
return __p
};

this["JST"]["item_result"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="result-graph"></div>\n<p>\n  ' +
((__t = ( totalVotes )) == null ? '' : __t) +
' votes counted so far.\n  <span>You voted for <strong>' +
((__t = ( showUserChoiceText() )) == null ? '' : __t) +
'</strong></span>\n</p>\n<p><hr></p>\n<p>\n  <a href="/#/polls" class="btn btn-default" role="button">\n    <span class="glyphicon glyphicon-arrow-left"></span> Back to Poll List\n  </a>\n</p>\n';

}
return __p
};

this["JST"]["item_result_choice_item"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td>' +
((__t = ( text )) == null ? '' : __t) +
'</td>\n<td>\n  <table style="width: ' +
((__t = ( votes.length / totalVotes * 100 )) == null ? '' : __t) +
'%">\n    <tr><td>' +
((__t = ( votes.length )) == null ? '' : __t) +
'</td></tr>\n  </table>\n</td>\n';

}
return __p
};

this["JST"]["list"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n  <div class="col-xs-5">\n    <a href="/#/new" id="new-btn" class="btn btn-default"><span class="glyphicon glyphicon-plus"></span> New Poll</a>\n  </div>\n  <div class="col-xs-7">\n    <input type="text" id="search-input" class="form-control" placeholder="Search for a poll">\n  </div>\n</div>\n<div class="row">\n  <div class="col-xs-12">\n    <hr>\n  </div>\n</div>\n<div id="polls" class="row">\n</div>\n<p>&nbsp;</p>\n';

}
return __p
};

this["JST"]["list_item"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="/#/poll/' +
((__t = ( _id )) == null ? '' : __t) +
'">' +
((__t = ( question )) == null ? '' : __t) +
'</a>\n';

}
return __p
};

this["JST"]["list_none"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<li><em>No Polls in database. Would you like to <a href="/#new">create one</a>?</em></li>\n';

}
return __p
};

this["JST"]["new"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form id="new-poll" role="form">\n  <div class="form-group">\n    <label for="pollQuestion">Question</label>\n    <input type="text" class="form-control" id="pollQuestion" placeholder="Enter poll question">\n  </div>\n  <div class="form-group">\n    <label>Choices</label>\n    <div id="choice-list"></div>\n  </div>\n  <div class="row">\n    <div class="col-xs-12">\n      <button type="button" id="add-choice" class="btn btn-default"><span class="glyphicon glyphicon-plus"></span> Add another</button>\n    </div>\n  </div>\n  <p></p>\n  <hr>\n  <p></p>\n  <div class="row">\n    <div class="col-xs-6">\n      <a href="/#/polls" class="btn btn-default" role="button">\n        <span class="glyphicon glyphicon-arrow-left"></span> Back to Poll List\n      </a>\n    </div>\n    <div class="col-xs-6">\n      <button class="btn btn-primary pull-right" type="submit">Create Poll &raquo;</button>\n    </div>\n  </div>\n  <p>&nbsp;</p>\n</form>\n';

}
return __p
};

this["JST"]["new_choice_item"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<input type="text" class="choice form-control" placeholder="Enter choice ' +
((__t = ( idx )) == null ? '' : __t) +
' text"><br>\n';

}
return __p
};