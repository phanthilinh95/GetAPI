$( document ).ready(function() {
    $.get("https://www.googleapis.com/youtube/v3/channels", {
        part : "contentDetails",
        id : "UCh-A27eKaTrPM_gkfIw_-mA",
        key : "AIzaSyCZhs9sDw8X5QjR9mdXs4FwfdTbJO_qnZc"
    },
 
    function(data)
    {
        $.each(data.items, function(i, item)
        {
            // Upload ID
            var id = item.contentDetails.relatedPlaylists.uploads;
             
            $.get("https://www.googleapis.com/youtube/v3/playlistItems", {
                    part : "snippet",
                    maxResults : "20",
                    playlistId  : id,
                    key : "AIzaSyCZhs9sDw8X5QjR9mdXs4FwfdTbJO_qnZc"
                },
                function(result){
                    var output = '';
                    $.each(result.items, function(i, result_item){
                        output += '<div>';
                            var title = result_item.snippet.title;
                            var href = result_item.snippet.resourceId.videoId;
                            var img = result_item.snippet.thumbnails.default.url;
                            output += '<div><a href="https://www.youtube.com/watch?v='+href+'" title="'+title+'">'+title+'</a></div>';
                        output +='</div>';
                         output += '<iframe width="640" height="360" src="https://www.youtube.com/embed/'+href+'"frameborder="0" allowfullscreen></iframe>';
                          //console.log(title);
                    });
                    //console.log(title);
                    // Gán danh sách video vào body
                    $('body').html(output);
                }
            );
        });
    }
);
});