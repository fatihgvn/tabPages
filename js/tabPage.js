function findGetParameter(t){for(var e=null,n=[],r=location.search.substr(1).split("&"),o=0;o<r.length;o++)(n=r[o].split("="))[0]===t&&(e=decodeURIComponent(n[1]));return e}
var tabPage = function(selector){
    this.datas = {
        tp: undefined,
        menu: [],
        tabs: [],
        defaultTab: 0,
        getSource: "tab"
    };
    this.datas.tp = document.querySelector(selector);
    this.datas.menu = this.datas.tp.querySelectorAll("ul li");

    for(let t of this.datas.tp.children){
        if(t.tagName == "DIV")
            this.datas.tabs.push(t);
    }
    
    var _this = this;
    this.datas.menu.forEach(function(element,index){
        element.setAttribute("tp-id",index);
        
        element.onclick = function(){
            var tpid = this.getAttribute("tp-id");
            for (let item of this.parentNode.children)
                item.classList.remove("active");
            for (let item of this.parentNode.parentNode.children)
                item.classList.remove("active");

            this.classList.add("active");
            
            _this.datas.tabs[tpid].classList.add("active");
        }
    });

    this.goIndex = function (index){
        this.datas.menu[index].click();
        return this;
    }

    this.defaultTab = function(v){
        this.datas.defaultTab=v;
        return this;
    }

    this.getSource = function(v){
        this.datas.getSource=v;
        return this;
    }

    this.run = function(){
        var ci = parseInt(findGetParameter(this.datas.getSource));
        
        if(ci != null && ci != undefined && this.datas.menu[ci] != undefined)
            this.datas.menu[ci].click();
        else
            this.datas.menu[this.datas.defaultTab].click();

        return this;
    }

    return this;
}