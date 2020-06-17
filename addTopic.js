// Add a set of topics to each of several courses

function addTopics() {
  var courseIds = ['100000000000', '100000000001', '100000000002']; // course ids
  var topicNames = ['3','2','1']; // topic names to add to each course
  for (var i = 0; i < courseIds.length; i++) {
    for (var j = 0; j < topicNames.length; j++) {
      var topic = Classroom.Courses.Topics.create({name:topicNames[j]}, courseIds[i]);
      var topicId = topic.topicId;
    }
  }
}
