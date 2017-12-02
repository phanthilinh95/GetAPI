$( document ).ready(function() {
	var promise = () => new Promise(function(resolve, reject){
		const result = $.get("https://www.googleapis.com/youtube/v3/channels", {
	        part : "contentDetails",
	        id : "UCh-A27eKaTrPM_gkfIw_-mA",
	        key : "AIzaSyCZhs9sDw8X5QjR9mdXs4FwfdTbJO_qnZc"
    		
        });
        if (result){
        	resolve('success');
 		}else {
     		reject('error');
     	}
	});

	promise().then(function(data) {
		console.log(data);

	}).catch(e => console.log(e));
});