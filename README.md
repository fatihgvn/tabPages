
# easytabpages
jquery kullanmayan kolay kısa ve küçük bir tabPage uygulaması
tabPage.js için hazırlanmış dokumantasyon.

jquery is easy to use short and small tabPage application
Prepared for tabPage.js.

# Fonksiyon Listesi - Function List
## tabPage.js için - for tabPage.js

Yeni Tab tanımlamak için;
To define a new Tab;

    var tp = new tabPage(".tp");

## goIndex(index);
Belirtilen indexteki tab sekmesini açar.
Opens the tab tab in the specified index.

    tp.goIndex(1);

## defaultTab(index);
İki farklı kullanım mevcut.
Two different uses available.

    var tp = new tabPage(".tp").defaultTab(1); 

Ve - And

    tp.defaultTab(1);

## getSource(getParamaterName);
Get methodundaki parametrenin adını ayarlar.
Sets the name of the parameter in the Get method.

    var  tp2 = new  tabPage(".tp").getSource("tab2");
    
Ve - And

    tp.getSource("tab2");

Bu fonksiyon sayfa yüklendiğinde `defaultTab` değerini devre dışı bırakıp get methodunda bulunan `tab2=x` değerini alır. tab2 ile gelen değerdeki sayıya sahip tab sekmesini açar.
This function takes the value of `tab2=x` in the get method by disabling `defaultTab` when the page is loaded. Opens the tab tab with the number from the tab2.
örnek adres `http://example.com/?tab2=2`
sample address `http://example.com/?tab2=2`
## addTab(tabName,tabContent);
Yeni bir tab sekmesi ekler.
Adds a new tab tab.

    var  newtab = tp.addTab("<strong>New Tab Title</strong>","New Tab Content <hr/> test");

newtab bir tam sayıdır. yeni eklenen tab sekmesinin numarasını içerir.
newtab is an integer. contains the number of the newly added tab tab.

## removeTab(tabIndex);
Tab sekmesini siler.
Deletes the tab tab.

    tp.removeTab(1);

## setTabName(newTabName,tabIndex);
Tab ismini değiştirir.
Changes tab name.

    tp.setTabName("<strong>new tab name</strong>",1);

## setTabContent(newTabContent,tabIndex);
Tab içeriğini değiştirir.
Changes tab contents.

    tp.setTabContent("<h3>New tab content</h3>",1);

# tabPage.js Examples

Example 1

    var  tp = new  tabPage(".tp").defaultTab(0).getSource("tab").init();
    tp.addTab("test tab","testing tab");

Example 2

	var  tp = new  tabPage(".tp").defaultTab(0).getSource("tab");
	var  newtab = tp.addTab("new Tab","testing new tab");
	tp.setTabContent("<h3>test</h3>",newtab);
	tp.setTabName("test",newtab);
	tp.init();

Example 3

	var  tp = new  tabPage(".tp");
	tp.defaultTab(0);
	tp.getSource("tab");
	tp.init();

Example 4

	var  tp = new  tabPage(".tp").defaultTab(0).getSource("tab").init();
	tp.removeTab(2);
