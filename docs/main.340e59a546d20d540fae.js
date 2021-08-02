(()=>{"use strict";function e(i,a){var b="undefined"!=typeof Symbol&&i[Symbol.iterator]||i["@@iterator"];if(!b){if(Array.isArray(i)||(b=f(i))||a&&i&&"number"==typeof i.length){b&&(i=b);var j=0,d=function(){};return{s:d,n:function(){return j>=i.length?{done:!0}:{done:!1,value:i[j++]}},e:function(b){throw b},f:d}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var k,l=!0,g=!1;return{s:function(){b=b.call(i)},n:function(){var c=b.next();return l=c.done,c},e:function(b){g=!0,k=b},f:function a(){try{l||null==b["return"]||b["return"]()}finally{if(g)throw a}}}}function f(e,f){if(e){if("string"==typeof e)return d(e,f);var b=Object.prototype.toString.call(e).slice(8,-1);return"Object"===b&&e.constructor&&(b=e.constructor.name),"Map"===b||"Set"===b?Array.from(e):"Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?d(e,f):void 0}}function d(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}function b(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function g(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function c(d,a,b){return a&&g(d.prototype,a),b&&g(d,b),d}function h(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function i(i,a){var b="undefined"!=typeof Symbol&&i[Symbol.iterator]||i["@@iterator"];if(!b){if(Array.isArray(i)||(b=j(i))||a&&i&&"number"==typeof i.length){b&&(i=b);var k=0,d=function(){};return{s:d,n:function(){return k>=i.length?{done:!0}:{done:!1,value:i[k++]}},e:function(b){throw b},f:d}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,f=!0,g=!1;return{s:function(){b=b.call(i)},n:function(){var c=b.next();return f=c.done,c},e:function(b){g=!0,l=b},f:function a(){try{f||null==b["return"]||b["return"]()}finally{if(g)throw a}}}}function j(d,e){if(d){if("string"==typeof d)return k(d,e);var b=Object.prototype.toString.call(d).slice(8,-1);return"Object"===b&&d.constructor&&(b=d.constructor.name),"Map"===b||"Set"===b?Array.from(d):"Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?k(d,e):void 0}}function k(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}var a={};(()=>{a.d=(b,c)=>{for(var d in c)a.o(c,d)&&!a.o(b,d)&&Object.defineProperty(b,d,{enumerable:!0,get:c[d]})}})(),(()=>{a.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b)})();a.d({},{L:()=>t});var l=function(){function d(){b(this,d),this.loadSessionStorage()}return c(d,[{key:"nuevoTodo",value:function(b){this.todos.push(b),this.saveSessionStorage()}},{key:"eliminarTodo",value:function(c){this.todos=this.todos.filter(function(a){return a.id!=c}),this.saveSessionStorage()}},{key:"marcarCompletado",value:function(f){var a,b=e(this.todos);try{for(b.s();!(a=b.n()).done;){var c=a.value;if(c.id==f){c.completado=!c.completado,this.saveSessionStorage();break}}}catch(c){b.e(c)}finally{b.f()}}},{key:"eliminarCompletado",value:function(){this.todos=this.todos.filter(function(b){return!b.completado}),this.saveSessionStorage()}},{key:"saveSessionStorage",value:function(){sessionStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"loadSessionStorage",value:function(){this.todos=sessionStorage.getItem("todo")?JSON.parse(sessionStorage.getItem("todo")):[]}}]),d}();var m=function c(a){h(this,c),this.tarea=a,this.id=new Date().getTime(),this.completado=!1,this.creado=new Date};var n=document.querySelector(".todo-list"),o=document.querySelector(".new-todo"),p=document.querySelector(".clear-completed"),q=document.querySelector(".filters"),r=document.querySelectorAll(".filtro"),s=function(d){var a="\n        <li class=\"".concat(d.completado?"completed":"","\" data-id=\"").concat(d.id,"\">\n        <div class=\"view\">\n            <input class=\"toggle\" type=\"checkbox\" ").concat(d.completado?"checked":"",">\n            <label>").concat(d.tarea,"</label>\n            <button class=\"destroy\"></button>\n        </div>\n        <input class=\"edit\" value=\"Create a TodoMVC template\">\n    </li>\n    "),b=document.createElement("div");return b.innerHTML=a,n.append(b.firstElementChild),b};o.addEventListener("keyup",function(c){if(13===c.keyCode&&0<o.value.length){console.log(o.value);var a=new m(o.value);t.nuevoTodo(a),s(a),o.value=""}}),n.addEventListener("click",function(e){var a=e.target.localName,b=e.target.parentElement.parentElement,c=b.getAttribute("data-id");a.includes("input")?(t.marcarCompletado(c),b.classList.toggle("completed")):a.includes("button")&&(t.eliminarTodo(c),n.removeChild(b))}),p.addEventListener("click",function(){t.eliminarCompletado();for(var c,a=n.children.length-1;0<=a;a--)c=n.children[a],c.classList.contains("completed")&&n.removeChild(c)}),q.addEventListener("click",function(g){var a=g.target.text;if(a){r.forEach(function(b){return b.classList.remove("selected")}),g.target.classList.add("selected");var b,c=i(n.children);try{for(c.s();!(b=c.n()).done;){var d=b.value;d.classList.remove("hidden");var e=d.classList.contains("completed");"Pendientes"===a?e&&d.classList.add("hidden"):"Completados"===a?e||d.classList.add("hidden"):void 0}}catch(b){c.e(b)}finally{c.f()}}});var t=new l;t.todos.forEach(function(b){return s(b)})})();