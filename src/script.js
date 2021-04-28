// conventional method of selecting all paragraphs 
//and changing their color property to blue
var div = document.getElementsByTagName("div.container-flex");
for (var i = 0; i < div.length; i++) {
  var div = div.item(i);
  div.style.setProperty("color", "#35598f", null);
}
//D3 way of doing the same
d3.selectAll("p").style("color", "#35598f");