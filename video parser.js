var link = [];
var provider = [];
var video_id = [];
var youtube_data = [];
var parsed_data = [];
var title = [];
$('.videoWrapper').each(
  function(index) {
    link[index] = $(this).find('iframe').attr('src');
    provider[index] = link[index].match(/http:\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be))\/(video\/|embed\/|watch\?v=)?([A-Za-z0-9._%-]*)(\&\S+)?/)[2]
    video_id[index] = link[index].match(/http:\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be))\/(video\/|embed\/|watch\?v=)?([A-Za-z0-9._%-]*)(\&\S+)?/)[5]
  if(provider[index] == 'youtube.com' || provider[index] == 'youtu.be') {
    youtube_data[index] = $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+video_id[index]+'?v=2&alt=jsonc');
    // parsed_data = $.parseJSON(youtube_data.responseText);
    // title = parsed_data.data.title;
  };
});

if(match.url == 'vimeo.com'){

}