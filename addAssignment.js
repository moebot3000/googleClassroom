// Add an assignment to multiple topics in multiple courses

function addAssignments() {
  var courseIds = ['10000000000', '10000000001', '10000000002'];
  var topicNames = ['3','2','1'];
  for (var i = 0; i < courseIds.length; i++) {

    var topics = Classroom.Courses.Topics.list(courseIds[i]).topic;
    var topicObj = topics.reduce((o, e) => Object.assign(o, {[e.name]: e.topicId}), {});

    for (var j = 0; j < topicNames.length; j++) {

      var topicId = topicObj[topicNames[j]];

      var exec = Classroom.Courses.CourseWork.create({
        title: "My Assignment",
        topicId: topicId,
        workType: "ASSIGNMENT",
      }, courseIds[i]);
    }
  }
}
