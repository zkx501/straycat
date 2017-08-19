/*! 版权所有，违者必究 */
webpackJsonp([0],{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("3331945f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4747a169\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4747a169\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n#container[data-v-4747a169] {\n    width: 100%;\n    height: 100%;\n    font-size: 12px;\n    background-color: #e7ecef;\n}\n#header[data-v-4747a169] {\n    width: 100%;\n    height: 50px;\n    line-height: 50px;\n    background-color: #000;\n}\n#header ul[data-v-4747a169] {\n}\n#header ul li[data-v-4747a169] {\n    list-style: none;\n    float: left;\n    margin: 0 30px 0 0;\n}\n#header ul li a[data-v-4747a169] {\n    font-size: 20px;\n}\n#recommend[data-v-4747a169] {\n    margin: 10px 0;\n}\n#recommend .content[data-v-4747a169] {\n    padding: 2px 4px 2px 20px;\n    border: dashed 1px #f8cc7e;\n    background: #fffce7 ;\n    font: normal 12px/22px Arial;\n}\n#main[data-v-4747a169] {\n    margin: 20px 0 0 0;\n}\n#main .article[data-v-4747a169] {\n    border-bottom: 1px #ccc dashed;\n    margin: 0 0 20px 0;\n}\n#main .article .title a[data-v-4747a169] {\n    color: #000;\n    font-size: 20px;\n    font-weight: bold;\n}\n#main .article .introduction[data-v-4747a169] {\n    font-size: 14px;\n    color: #999;\n    line-height: 24px;\n}\n#main .article ul[data-v-4747a169] {\n    float: right;\n}\n#main .article ul li[data-v-4747a169] {\n    list-style: none;\n    float: left;\n    margin-left: 16px;\n    font-size: 10px;\n}\n#main .article ul li a[data-v-4747a169] {\n    font-size: 10px;\n}\n.card[data-v-4747a169] {\n    float: right;\n    width: 300px;\n    margin-bottom: 20px;\n}\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            movieList: [{
                name: '这个杀手不太冷',
                url: 'https://movie.douban.com/subject/1295644/',
                rate: 9.4
            }, {
                name: '霸王别姬',
                url: 'https://movie.douban.com/subject/1291546/',
                rate: 9.5
            }, {
                name: '千与千寻',
                url: 'https://movie.douban.com/subject/1291561/',
                rate: 9.2
            }, {
                name: '辛德勒的名单',
                url: 'https://movie.douban.com/subject/1295124/',
                rate: 9.4
            }, {
                name: '海上钢琴师',
                url: 'https://movie.douban.com/subject/1292001/',
                rate: 9.2
            }],
            randomMovieList: []

        };
    },
    mounted() {
        this.changeLimit();
    },
    methods: {
        changeLimit() {
            function getArrayItems(arr, num) {
                const temp_array = [];
                for (let index in arr) {
                    temp_array.push(arr[index]);
                }
                const return_array = [];
                for (let i = 0; i < num; i++) {
                    if (temp_array.length > 0) {
                        const arrIndex = Math.floor(Math.random() * temp_array.length);
                        return_array[i] = temp_array[arrIndex];
                        temp_array.splice(arrIndex, 1);
                    } else {
                        break;
                    }
                }
                return return_array;
            }
            this.randomMovieList = getArrayItems(this.movieList, 5);
        }
    }
});

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "container"
    }
  }, [_c('Affix', [_c('Row', {
    attrs: {
      "id": "header"
    }
  }, [_c('i-col', {
    attrs: {
      "span": "2"
    }
  }, [_vm._v(" ")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "20"
    }
  }, [_c('ul', [_c('li', [_c('a', [_vm._v("首页")])]), _vm._v(" "), _c('li', [_c('a', [_vm._v("关于")])]), _vm._v(" "), _c('li', [_c('a', [_vm._v("图片库")])]), _vm._v(" "), _c('li', [_c('a', [_vm._v("存档")])]), _vm._v(" "), _c('li', [_c('a', [_vm._v("登录/注册")])]), _vm._v(" "), _c('li', [_c('a', [_vm._v("test")])])])]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "2"
    }
  }, [_vm._v(" ")])], 1)], 1), _vm._v(" "), _c('Row', {
    attrs: {
      "id": "recommend"
    }
  }, [_c('i-col', {
    attrs: {
      "span": "2"
    }
  }, [_vm._v(" ")]), _vm._v(" "), _c('i-col', {
    staticClass: "content",
    attrs: {
      "span": "14"
    }
  }, [_vm._v("\n            每周荐书：Kotlin、分布式、Keras（评论送书） 【获奖公布】征文|你会为AI转型？ 热门搜索：java、\n            python,c++,spring,php\n        ")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "8"
    }
  }, [_vm._v(" ")])], 1), _vm._v(" "), _c('Row', {
    attrs: {
      "id": "main"
    }
  }, [_c('i-col', {
    attrs: {
      "span": "2"
    }
  }, [_vm._v(" ")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "14"
    }
  }, [_c('div', {
    staticClass: "article"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("让世界充满AI—时代的开拓者（程序员）")])]), _vm._v(" "), _c('div', {
    staticClass: "introduction"
  }, [_vm._v("\n                    人工智能是一门涵盖多学科知识，而又被当今社会广泛应用于多领域，给人带来便捷、高效的同时，\n                    又让业界为其担心的交叉学科知识的综合产物。随着各种智能机器人开始服务于各大领域，有超强力量的机械手臂，\n                    高效解决问题的专家系统，公众日常可接触到的可穿戴智能设备，\n                    从智能手机到各类功能的3D打印技术，从谷歌眼镜到全息投影，各类机器设备如雨后春笋不断涌出。\n\n\n                ")]), _vm._v(" "), _c('ul', {
    staticClass: "commend"
  }, [_c('li', [_vm._v("2017-8-18 13:34")]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("阅读")]), _vm._v("(111)")]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("评论")]), _vm._v("(222)")]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("点赞")]), _vm._v("(333)")])])])]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "6",
      "id": "sider"
    }
  }, [_c('Row', {
    staticClass: "card"
  }, [_vm._v("\n                书签\n                "), _c('Tag', {
    attrs: {
      "color": "blue"
    }
  }, [_vm._v("标签一")]), _vm._v(" "), _c('Tag', {
    attrs: {
      "color": "green"
    }
  }, [_vm._v("标签二")]), _vm._v(" "), _c('Tag', {
    attrs: {
      "color": "red"
    }
  }, [_vm._v("标签三")]), _vm._v(" "), _c('Tag', {
    attrs: {
      "color": "yellow"
    }
  }, [_vm._v("标签四")])], 1), _vm._v(" "), _c('Row', {
    staticClass: "card"
  }, [_vm._v("\n                最新文章\n                "), _c('ul', [_c('li', [_c('a', [_vm._v("文章1")])]), _vm._v(" "), _c('li', [_c('a', [_vm._v("文章2")])]), _vm._v(" "), _c('li', [_c('a', [_vm._v("文章3")])])])]), _vm._v(" "), _c('Card', {
    staticClass: "card"
  }, [_c('p', {
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-film-outline"
    }
  }), _vm._v("\n                    经典文章\n                ")], 1), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.changeLimit($event)
      }
    },
    slot: "extra"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-loop-strong"
    }
  }), _vm._v("\n                    换一换\n                ")], 1), _vm._v(" "), _c('ul', _vm._l((_vm.randomMovieList), function(item) {
    return _c('li', [_c('a', {
      attrs: {
        "href": item.url,
        "target": "_blank"
      }
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', [_vm._l((4), function(n) {
      return _c('Icon', {
        key: n,
        attrs: {
          "type": "ios-star"
        }
      })
    }), (item.rate >= 9.5) ? _c('Icon', {
      attrs: {
        "type": "ios-star"
      }
    }) : _c('Icon', {
      attrs: {
        "type": "ios-star-half"
      }
    }), _vm._v("\n                " + _vm._s(item.rate) + "\n            ")], 2)])
  }))]), _vm._v(" "), _c('Card', {
    staticClass: "card"
  }, [_c('p', {
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-film-outline"
    }
  }), _vm._v("\n                    友情社区\n                ")], 1), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.changeLimit($event)
      }
    },
    slot: "extra"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-loop-strong"
    }
  }), _vm._v("\n                    换一换\n                ")], 1), _vm._v(" "), _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("友情社区1")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("友情社区2")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("友情社区3")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("友情社区4")])])])])], 1), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "2"
    }
  }, [_vm._v(" ")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4747a169", esExports)
  }
}

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4747a169_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(38);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(35)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4747a169"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4747a169_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "client/components/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4747a169", Component.options)
  } else {
    hotAPI.reload("data-v-4747a169", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});