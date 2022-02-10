function loadMarkDown(elem){
    var converter = new showdown.Converter();
    var list = $('#items-list');
    var url = $(elem).attr('url');
    list.empty();
    $.get(url, function(data) {
        html = converter.makeHtml(data);
        list.append(`<li class="list-group-item">${html}</li>`);
    })
}