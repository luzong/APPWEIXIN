var ipt = document.querySelector('.center input')
        	var pic = document.querySelector('.old')
        	ipt.onchange = function(){
        		var txt = ipt.files[0];
        		var msg = window.URL.createObjectURL(txt);
        		pic.src=msg
        	}