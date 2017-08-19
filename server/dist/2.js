/*! 版权所有，违者必究 */
webpackJsonp([2],{

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_register_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7225845c_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_register_vue__ = __webpack_require__(46);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(43)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7225845c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_register_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7225845c_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_register_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "client/components/register.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] register.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7225845c", Component.options)
  } else {
    hotAPI.reload("data-v-7225845c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("0f261e1e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7225845c\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7225845c\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n#container[data-v-7225845c] {\n    background: #ededed;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    left: 0;\n    top: 0;\n}\n#wrap[data-v-7225845c] {\n    background: #fff;\n    width: 600px;\n    height: 400px;\n    padding: 30px 30px 10px 30px;\n    box-shadow: 0 0 25px 0 rgba(0, 0, 0, .2);\n    left: 50%;\n    top: 50%;\n    position: absolute;\n    margin-left: -300px;\n    margin-top: -200px;\n    border-top: 4px #2ca290 solid;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ 45:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            current: 0,
            formValidate: {
                username: '',
                email: '',
                password: '',
                repassword: '',
                city: '',
                gender: '',
                interest: [],
                date: '',
                time: '',
                desc: ''
            },
            ruleValidate: {
                username: [{ required: true, message: '姓名不能为空', trigger: 'blur' }],
                email: [{ required: true, message: '邮箱不能为空', trigger: 'blur' }, { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }],
                password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
                repassword: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
                city: [{ required: true, message: '请选择城市', trigger: 'change' }],
                gender: [{ required: true, message: '请选择性别', trigger: 'change' }],
                interest: [{ required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' }, { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }],
                date: [{ required: true, type: 'date', message: '请选择日期', trigger: 'change' }],
                time: [{ required: true, type: 'date', message: '请选择时间', trigger: 'change' }],
                desc: [{ required: true, message: '请输入个人介绍', trigger: 'blur' }, { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }]
            }
        };
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    this.$Message.success('提交成功!');
                } else {
                    this.$Message.error('表单验证失败!');
                }
            });
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        },
        next() {
            console.log(this.current);
            if (this.current == 3) {
                this.current = 0;
            } else {
                this.current += 1;
            }
        }
    }
});

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "container"
    }
  }, [_c('div', {
    attrs: {
      "id": "wrap"
    }
  }, [_c('Steps', {
    attrs: {
      "current": _vm.current,
      "id": "step"
    }
  }, [_c('Step', {
    attrs: {
      "title": "基本信息",
      "icon": "person-add"
    }
  }), _vm._v(" "), _c('Step', {
    attrs: {
      "title": "附加信息",
      "icon": "person-add"
    }
  }), _vm._v(" "), _c('Step', {
    attrs: {
      "title": "上传头像",
      "icon": "camera"
    }
  }), _vm._v(" "), _c('Step', {
    attrs: {
      "title": "验证邮箱",
      "icon": "email"
    }
  })], 1), _vm._v(" "), (_vm.current == 0) ? _c('Form', {
    ref: "formValidate",
    attrs: {
      "model": _vm.formValidate,
      "rules": _vm.ruleValidate,
      "label-width": 80
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "姓名",
      "prop": "username"
    }
  }, [_c('i-input', {
    attrs: {
      "placeholder": "请输入姓名"
    },
    model: {
      value: (_vm.formValidate.username),
      callback: function($$v) {
        _vm.formValidate.username = $$v
      },
      expression: "formValidate.username"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "邮箱",
      "prop": "email"
    }
  }, [_c('i-input', {
    attrs: {
      "placeholder": "请输入邮箱"
    },
    model: {
      value: (_vm.formValidate.email),
      callback: function($$v) {
        _vm.formValidate.email = $$v
      },
      expression: "formValidate.email"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "密码",
      "prop": "password"
    }
  }, [_c('i-input', {
    attrs: {
      "placeholder": "请输入密码"
    },
    model: {
      value: (_vm.formValidate.password),
      callback: function($$v) {
        _vm.formValidate.password = $$v
      },
      expression: "formValidate.password"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "重复密码",
      "prop": "repassword"
    }
  }, [_c('i-input', {
    attrs: {
      "placeholder": "请再次输入密码"
    },
    model: {
      value: (_vm.formValidate.repassword),
      callback: function($$v) {
        _vm.formValidate.repassword = $$v
      },
      expression: "formValidate.repassword"
    }
  })], 1), _vm._v(" "), _c('Form-item', [_c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.handleSubmit('formValidate')
      }
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('Button', {
    staticStyle: {
      "margin-left": "8px"
    },
    attrs: {
      "type": "ghost"
    },
    on: {
      "click": function($event) {
        _vm.handleReset('formValidate')
      }
    }
  }, [_vm._v("重置")])], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.current == 1) ? _c('Form', {
    ref: "formValidate",
    attrs: {
      "model": _vm.formValidate,
      "rules": _vm.ruleValidate,
      "label-width": 80
    }
  }, [_vm._v("\n            1\n        ")]) : _vm._e(), _vm._v(" "), (_vm.current == 2) ? _c('Form', {
    ref: "formValidate",
    attrs: {
      "model": _vm.formValidate,
      "rules": _vm.ruleValidate,
      "label-width": 80
    }
  }, [_vm._v("\n            2\n        ")]) : _vm._e(), _vm._v(" "), (_vm.current == 3) ? _c('Form', {
    ref: "formValidate",
    attrs: {
      "model": _vm.formValidate,
      "rules": _vm.ruleValidate,
      "label-width": 80
    }
  }, [_vm._v("\n            3\n        ")]) : _vm._e(), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.next
    }
  }, [_vm._v("下一步")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7225845c", esExports)
  }
}

/***/ })

});