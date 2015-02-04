var sites=[
	['baidu.com',''],
	['aol.com',''],
	['qq.com','']
];
chrome.browserAction.onClicked.addListener(function(tab) {
	//console.dir(tab);
	chrome.tabs.create({url:"http://www.codetyphon.com/wall/index.html",selected:true})
});
chrome.tabs.onUpdated.addListener(function(tab_id){
	chrome.tabs.get(tab_id,function(tab){
		var url=tab.url;
		var w=false;
		for(var i=0;i<sites.length;i++){
			var site_key=sites[i][0];
			if(url.indexOf(site_key)!=-1){
				w=true;
			}
		}
		//console.log(tab);
		if(w){
			chrome.browserAction.setIcon({tabId: tab_id, path:"icons/wall_red.png"});
    		chrome.browserAction.setTitle({tabId: tab_id, title:"walled"});
			chrome.tabs.executeScript(tab.id, {file: "wall.js"});
		}
	});

});
