if (querySelectorAll in document) {
  var listAccordions = document.querySelectorAll('.list-accordion');

  // listen for clicks on list accordions
  listAccordions.addEventListener('click', toggleListAccordion, false);

  // add a class to the headers to make them look like links, and have little + and - icons

  // get the target of an event
  function getTarget(evt) {
    evt = evt || window.event;
    return evt.target || evt.srcElement;
  }

  var toggleListAccordion = function() {
    // check what the event target was with getTarget
    // show / hide the appropriate accordion
  }



}


// Look at http://filamentgroup.github.io/Accessible-jQuery-Tabs/demo-updateHash.html#weather
// for tabs js
