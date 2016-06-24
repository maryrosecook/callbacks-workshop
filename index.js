$.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
  peopleResponse.forEach(function(person) {
    $.get("https://async-workshops-api.herokuapp.com/people/" + person.id, function(personResponse) {
      console.log(personResponse.favouriteMusic);
    });
  });
});
