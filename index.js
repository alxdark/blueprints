Object.values = function(obj) {
    return Object.keys(obj).map(function(key) {
        return obj[key];
    });
}
function itemFieldMatch(item, fieldName, textValue) {
    var field = item[fieldName];
    return (field && field.toLowerCase().indexOf(textValue.toLowerCase()) > -1);
}
var SEARCH_FIELDS = ["title","info","author","pub"];

window.addEventListener("DOMContentLoaded", function() {
    var app = new Vue({
        el: document.getElementById('app'),
        data: {
            category: null,
            textValue: null,
            items: data,
            categories: c,
            date: "7 Mar 2017"
        },
        created: function() {
            var arr = document.location.hash.split("=");
            var value = decodeURIComponent(arr[1]);
            if (arr[0] === "#search") {
                this.textValue = value;
            } else if (arr[0] === "#category") {
                this.resetFilter(value, 'category');
            }
        },
        methods: {
            filteredData: function() {
                if (this.textValue) {
                    this.category = null;
                    document.location.hash = "#search="+this.textValue;
                    return this.items.filter(function(item) {
                        return SEARCH_FIELDS.some(function(fieldName) {
                            return itemFieldMatch(item, fieldName, this.textValue);
                        }, this);
                    }, this);
                } else if (this.category) {
                    document.location.hash = "#category=" + this.category;
                    return this.items.filter(function(item) {
                        return item.cat.indexOf(this.category) > -1;
                    }, this);
                } else {
                    document.location.hash = "";
                }
                return this.items;
            },
            filteredCat: function(item) {
                var array = [].concat(item.cat);
                if (this.category) {
                    array.splice(array.indexOf(this.category),1);
                }
                return array.join(', ');
            },
            resetFilter(value, type) {
                var existingValue = this.category;
                this.textValue = this.category = null;
                if (existingValue !== value) {
                    this.category = value;
                }
            },
            clear: function() {
                this.category = null;
                document.location.hash = "";
            },
            formatCitation: function(item) {
                var array = [];
                if (item.author) array.push(item.author);
                if (item.pub) array.push('<i>'+item.pub+'</i>');
                if (item.date) array.push(item.date);
                return (array.length) ? array.join(', ') + '.' : '';
            },
            isSelected: function(cat) {
                return cat === this.category;
            }
        }
    });
}, false);

