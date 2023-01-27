import { defineComponent as _, computed as O, openBlock as b, createElementBlock as w, normalizeStyle as pe, unref as f, renderSlot as $, createElementVNode as R, normalizeClass as S, createBlock as te, Transition as rt, withCtx as ne, resolveDynamicComponent as ke, createTextVNode as se, toDisplayString as N, resolveComponent as x, createCommentVNode as I, createVNode as C, Fragment as Le, renderList as Fe, mergeProps as $e, ref as M, onMounted as ot, onUnmounted as at, reactive as it, nextTick as Te } from "vue";
const us = /* @__PURE__ */ _({
  __name: "PerspectivePlane",
  props: {
    rotateX: { default: "0deg" },
    rotateY: { default: "0deg" },
    translateY: { default: "0px" },
    translateZ: { default: "0px" }
  },
  setup(e) {
    const t = e, n = O(() => ({
      transform: `
            rotateX(${t.rotateX}) 
            rotateY(${t.rotateY}) 
            translateY(${t.translateY}) 
            translateZ(${t.translateZ})`
    }));
    return (s, r) => (b(), w("div", {
      class: "perspective-plane",
      style: pe(f(n))
    }, [
      $(s.$slots, "default")
    ], 4));
  }
}), lt = { class: "perspective" }, ds = /* @__PURE__ */ _({
  __name: "PerspectiveWrapper",
  props: {
    size: { default: "0px" }
  },
  setup(e) {
    const t = e, n = O(() => ({
      height: t.size,
      width: t.size
    }));
    return (s, r) => (b(), w("div", lt, [
      R("div", {
        class: "perspective__inner",
        style: pe(f(n))
      }, [
        $(s.$slots, "default")
      ], 4)
    ]));
  }
}), fs = /* @__PURE__ */ _({
  __name: "SlantWrapper",
  props: {
    height: null,
    top: { default: "-5px" },
    reverse: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = O(() => ({
      height: t.height,
      top: t.top
    })), s = O(() => ({
      "slant-wrapper-reverse": t.reverse
    }));
    return (r, o) => (b(), w("div", {
      class: S(["slant-wrapper", f(s)]),
      style: pe(f(n))
    }, null, 6));
  }
});
const ct = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, ut = {};
function dt(e, t) {
  return b(), te(rt, {
    name: "fade",
    mode: "out-in"
  }, {
    default: ne(() => [
      $(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  });
}
const ms = /* @__PURE__ */ ct(ut, [["render", dt], ["__scopeId", "data-v-51fc47aa"]]), X = {
  INPUT_ELEMENT: "form-element",
  INPUT: "input",
  HEADING: "h"
}, v = {
  BASE_HEADING: ["app-heading"],
  BASE_TEXT: ["app-text"],
  BASE_LINK: ["app-link"],
  BASE_EXTERNAL_LINK: ["app-link", "app-external-link"],
  INPUT_ELEMENT: ["form-element"],
  INPUT_INNER: ["form-element-inner"],
  INPUT: ["input"],
  INPUT_ERROR: ["input-error"],
  SUBMIT_INPUT: ["button"]
}, ps = /* @__PURE__ */ _({
  __name: "BaseHeading",
  props: {
    size: null,
    text: { default: void 0 }
  },
  setup(e) {
    const t = e, n = O(() => [...v.BASE_HEADING, s.value]), s = O(() => `${X.HEADING}${t.size}`);
    return (r, o) => (b(), te(ke(f(s)), {
      class: S(f(n))
    }, {
      default: ne(() => [
        $(r.$slots, "default", {}, () => [
          se(N(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), hs = /* @__PURE__ */ _({
  __name: "BaseText",
  props: {
    tag: { default: "p" },
    text: { default: void 0 }
  },
  setup(e) {
    const t = O(() => v.BASE_TEXT);
    return (n, s) => (b(), te(ke(e.tag), {
      class: S(f(t))
    }, {
      default: ne(() => [
        $(n.$slots, "default", {}, () => [
          se(N(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
function U(e) {
  const t = O(() => e.name ? `${X.INPUT_ELEMENT}-${e.name}` : ""), n = O(() => e.id ? e.id : e.name ? `${X.INPUT}-${e.name}` : ""), s = O(
    () => v.INPUT_ELEMENT.concat([`${v.INPUT_ELEMENT}-${e.type}`])
  ), r = O(() => v.INPUT_INNER), o = O(() => [
    ...v.INPUT,
    ...e.type ? [`${X.INPUT}-${e.type}`] : [],
    ...(e.messages || []).length > 0 ? v.INPUT_ERROR : []
  ]), a = O(() => e.label !== !1 ? e.label ? String(e.label) : (e.name.charAt(0).toUpperCase() + e.name.slice(1)).replace("_", " ") : e.label);
  return {
    elementId: t,
    inputId: n,
    elementClasses: s,
    innerClasses: r,
    inputClasses: o,
    labelText: a
  };
}
const ft = ["id"], mt = ["for"], pt = { class: "label-content" }, ht = {
  key: 0,
  class: "required"
}, yt = ["id", "type", "name", "required", "readonly", "checked"], gt = /* @__PURE__ */ R("span", { class: "switch" }, null, -1), bt = /* @__PURE__ */ R("div", { class: "cl" }, null, -1), ys = /* @__PURE__ */ _({
  __name: "CheckboxInput",
  props: {
    type: { default: "checkbox" },
    label: { type: [String, Boolean], default: !0 },
    id: { default: void 0 },
    name: { default: void 0 },
    description: { default: void 0 },
    modelValue: { type: Boolean, default: void 0 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    messages: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { elementId: s, inputId: r, elementClasses: o, innerClasses: a, inputClasses: l, labelText: d } = U(n), c = (u) => t("update:modelValue", Boolean(u.target.checked));
    return (u, p) => {
      const E = x("FormMessages");
      return b(), w("div", {
        id: f(s),
        class: S(f(o))
      }, [
        R("div", {
          class: S(f(a))
        }, [
          f(d) ? (b(), w("label", {
            key: 0,
            for: f(r)
          }, [
            R("span", pt, N(f(d)), 1),
            e.required ? (b(), w("span", ht, " *")) : I("", !0),
            R("input", {
              id: f(r),
              type: e.type,
              name: e.name,
              class: S(f(l)),
              required: e.required,
              readonly: e.readonly,
              checked: e.modelValue,
              onInput: c
            }, null, 42, yt),
            gt,
            bt
          ], 8, mt)) : I("", !0),
          C(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, ft);
    };
  }
}), Et = ["id"], wt = ["id", "type", "name", "placeholder", "readonly", "required", "value"], St = { key: 0 }, gs = /* @__PURE__ */ _({
  __name: "EmailInput",
  props: {
    type: { default: "email" },
    label: { type: [String, Boolean], default: !0 },
    id: { default: void 0 },
    name: { default: void 0 },
    description: { default: void 0 },
    modelValue: { default: void 0 },
    placeholder: { default: void 0 },
    readonly: { type: Boolean, default: void 0 },
    required: { type: Boolean, default: void 0 },
    messages: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { elementId: s, inputId: r, elementClasses: o, innerClasses: a, inputClasses: l, labelText: d } = U(n), c = (u) => t("update:modelValue", u.target.value);
    return (u, p) => {
      const E = x("InputLabel"), y = x("FormMessages");
      return b(), w("div", {
        id: f(s),
        class: S(f(o))
      }, [
        C(E, {
          id: f(r),
          label: f(d),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        R("div", {
          class: S(f(a))
        }, [
          R("input", {
            id: f(r),
            type: e.type,
            name: e.name,
            class: S(f(l)),
            placeholder: e.placeholder,
            readonly: e.readonly,
            required: e.required,
            value: e.modelValue,
            onInput: c
          }, null, 42, wt),
          e.description ? (b(), w("i", St, N(e.description), 1)) : I("", !0),
          C(y, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, Et);
    };
  }
}), Tt = ["id", "name", "action", "method", "novalidate"], bs = /* @__PURE__ */ _({
  __name: "FormBase",
  props: {
    id: { default: void 0 },
    name: { default: void 0 },
    action: { default: void 0 },
    method: { default: "POST" },
    novalidate: { type: Boolean, default: !0 },
    guard: { type: Boolean, default: !0 },
    processing: { type: Boolean, default: !0 },
    messages: { default: () => [] }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = e, s = (r) => {
      t("submit", r), n.guard && r.preventDefault();
    };
    return (r, o) => {
      const a = x("FormMessages");
      return b(), w("form", {
        id: e.id,
        name: e.name,
        action: e.action,
        method: e.method,
        class: "form",
        novalidate: e.novalidate,
        onSubmit: s
      }, [
        C(a, { messages: e.messages }, null, 8, ["messages"]),
        $(r.$slots, "default")
      ], 40, Tt);
    };
  }
}), _t = {
  key: 0,
  class: "form-messages input-error"
}, Es = /* @__PURE__ */ _({
  __name: "FormMessages",
  props: {
    messages: { default: () => [] }
  },
  setup(e) {
    return (t, n) => e.messages.length ? (b(), w("div", _t, [
      (b(!0), w(Le, null, Fe(e.messages, (s, r) => (b(), w("span", { key: r }, N(s), 1))), 128))
    ])) : I("", !0);
  }
}), Ot = ["for"], Rt = { class: "label-content" }, Nt = {
  key: 0,
  class: "required"
}, ws = /* @__PURE__ */ _({
  __name: "InputLabel",
  props: {
    label: { type: [String, Boolean] },
    id: null,
    required: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => e.label ? (b(), w("label", {
      key: 0,
      for: e.id
    }, [
      R("span", Rt, N(e.label), 1),
      e.required ? (b(), w("span", Nt, " *")) : I("", !0)
    ], 8, Ot)) : I("", !0);
  }
}), xt = ["id"], Ct = ["id", "type", "name", "placeholder", "readonly", "required", "value"], At = { key: 0 }, Ss = /* @__PURE__ */ _({
  __name: "PhoneNumberInput",
  props: {
    type: { default: "tel" },
    label: { type: [String, Boolean], default: !0 },
    description: { default: void 0 },
    id: { default: void 0 },
    modelValue: { default: void 0 },
    name: { default: void 0 },
    placeholder: { default: void 0 },
    readonly: { type: Boolean, default: void 0 },
    required: { type: Boolean, default: void 0 },
    messages: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { elementId: s, inputId: r, elementClasses: o, innerClasses: a, inputClasses: l, labelText: d } = U(n), c = (u) => t("update:modelValue", u.target.value);
    return (u, p) => {
      const E = x("InputLabel"), y = x("FormMessages");
      return b(), w("div", {
        id: f(s),
        class: S(f(o))
      }, [
        C(E, {
          id: f(r),
          label: f(d),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        R("div", {
          class: S(f(a))
        }, [
          R("input", {
            id: f(r),
            type: e.type,
            name: e.name,
            class: S(f(l)),
            placeholder: e.placeholder,
            readonly: e.readonly,
            required: e.required,
            value: e.modelValue,
            onInput: c
          }, null, 42, Ct),
          e.description ? (b(), w("i", At, N(e.description), 1)) : I("", !0),
          C(y, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, xt);
    };
  }
}), vt = ["id"], Pt = ["id", "value", "name", "required", "readonly"], It = {
  key: 0,
  selected: "",
  value: ""
}, Bt = ["value"], Ts = /* @__PURE__ */ _({
  __name: "SelectInput",
  props: {
    type: { default: "select" },
    label: { type: [String, Boolean], default: !0 },
    id: { default: void 0 },
    name: { default: void 0 },
    description: { default: void 0 },
    modelValue: { type: [String, Number, Boolean, Array], default: void 0 },
    placeholder: { default: void 0 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    messages: { default: () => [] },
    options: { default: () => [] },
    emptyOption: { default: "- select one -" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { elementId: s, inputId: r, elementClasses: o, innerClasses: a, inputClasses: l, labelText: d } = U(n), c = (u) => t("update:modelValue", u.target.value);
    return (u, p) => {
      const E = x("InputLabel"), y = x("FormMessages");
      return b(), w("div", {
        id: f(s),
        class: S(f(o))
      }, [
        C(E, {
          id: f(r),
          label: f(d),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        R("div", {
          class: S(f(a))
        }, [
          R("select", {
            id: f(r),
            value: e.modelValue,
            name: e.name,
            class: S(f(l)),
            required: e.required,
            readonly: e.readonly,
            onInput: c
          }, [
            e.emptyOption ? (b(), w("option", It, N(e.emptyOption), 1)) : I("", !0),
            (b(!0), w(Le, null, Fe(e.options, (m, h) => (b(), w("option", {
              key: h,
              value: m.value
            }, N(m.title), 9, Bt))), 128))
          ], 42, Pt),
          C(y, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, vt);
    };
  }
}), kt = ["id", "type", "name", "value", "disabled"], _s = /* @__PURE__ */ _({
  __name: "SubmitInput",
  props: {
    type: { default: "submit" },
    name: { default: void 0 },
    id: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    modelValue: { type: [String, Number, Boolean, Array], default: "Submit" }
  },
  setup(e) {
    const t = e, { inputId: n } = U(t), s = O(() => v.SUBMIT_INPUT);
    return (r, o) => (b(), w("input", {
      id: f(n),
      type: e.type,
      name: e.name,
      value: e.modelValue,
      class: S(f(s)),
      disabled: e.disabled
    }, null, 10, kt));
  }
}), Lt = ["id"], Ft = ["id", "name", "rows", "value", "placeholder", "required", "readonly"], $t = { key: 0 }, Os = /* @__PURE__ */ _({
  __name: "TextareaInput",
  props: {
    type: { default: "textarea" },
    label: { type: [String, Boolean], default: !0 },
    id: { default: void 0 },
    name: { default: void 0 },
    description: { default: void 0 },
    modelValue: { default: void 0 },
    placeholder: { default: void 0 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    rows: { default: 4 },
    messages: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { elementId: s, inputId: r, elementClasses: o, innerClasses: a, inputClasses: l, labelText: d } = U(n), c = (u) => t("update:modelValue", u.target.value);
    return (u, p) => {
      const E = x("InputLabel"), y = x("FormMessages");
      return b(), w("div", {
        id: f(s),
        class: S(f(o))
      }, [
        C(E, {
          id: f(r),
          label: f(d),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        R("div", {
          class: S(f(a))
        }, [
          R("textarea", {
            id: f(r),
            name: e.name,
            rows: e.rows,
            class: S(f(l)),
            value: e.modelValue,
            placeholder: e.placeholder,
            required: e.required,
            readonly: e.readonly,
            onInput: c
          }, null, 42, Ft),
          e.description ? (b(), w("i", $t, N(e.description), 1)) : I("", !0),
          C(y, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, Lt);
    };
  }
}), Dt = ["id"], Ut = ["id", "type", "name", "placeholder", "readonly", "required", "value"], qt = { key: 0 }, Rs = /* @__PURE__ */ _({
  __name: "TextInput",
  props: {
    type: { default: "text" },
    label: { type: [String, Boolean], default: !0 },
    id: { default: void 0 },
    name: { default: void 0 },
    description: { default: void 0 },
    modelValue: { default: void 0 },
    placeholder: { default: void 0 },
    readonly: { type: Boolean, default: void 0 },
    required: { type: Boolean, default: void 0 },
    messages: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { elementId: s, inputId: r, elementClasses: o, innerClasses: a, inputClasses: l, labelText: d } = U(n), c = (u) => t("update:modelValue", u.target.value);
    return (u, p) => {
      const E = x("InputLabel"), y = x("FormMessages");
      return b(), w("div", {
        id: f(s),
        class: S(f(o))
      }, [
        C(E, {
          id: f(r),
          label: f(d),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        R("div", {
          class: S(f(a))
        }, [
          R("input", {
            id: f(r),
            type: e.type,
            name: e.name,
            class: S(f(l)),
            placeholder: e.placeholder,
            readonly: e.readonly,
            required: e.required,
            value: e.modelValue,
            onInput: c
          }, null, 42, Ut),
          e.description ? (b(), w("i", qt, N(e.description), 1)) : I("", !0),
          C(y, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, Dt);
    };
  }
}), Mt = ["src"], Ns = /* @__PURE__ */ _({
  __name: "BaseImage",
  props: {
    src: null,
    size: null,
    height: null,
    loading: null,
    width: null
  },
  setup(e) {
    const t = e, n = O(() => ({
      height: t.height || t.size,
      ...t.loading ? { loading: t.loading } : {},
      width: t.width || t.size
    }));
    return (s, r) => (b(), w("img", $e({ class: "app-image block" }, f(n), { src: e.src }), null, 16, Mt));
  }
});
function Vt(e) {
  const t = M(null), n = M(!1), s = () => {
    t.value = new IntersectionObserver((o) => {
      o[0].isIntersecting && (n.value = !0, r());
    }), t.value.observe(e.value);
  }, r = () => {
    var o;
    return (o = t.value) == null ? void 0 : o.disconnect();
  };
  return {
    observer: t,
    intersected: n,
    observe: s,
    unobserve: r
  };
}
const jt = ["src"], xs = /* @__PURE__ */ _({
  __name: "BaseIntersectionImage",
  props: {
    src: null,
    size: null,
    height: null,
    width: null
  },
  setup(e) {
    const t = e, n = M(null), { intersected: s, observe: r, unobserve: o } = Vt(n), a = O(() => s.value ? t.src : ""), l = O(() => ({
      height: t.height || t.size,
      width: t.width || t.size
    }));
    return ot(() => r()), at(() => o()), (d, c) => (b(), w("img", $e({
      ref_key: "image",
      ref: n,
      class: ["app-image block", { intersected: f(s) }]
    }, f(l), { src: f(a) }), null, 16, jt));
  }
}), Ht = ["href", "target", "rel"], Cs = /* @__PURE__ */ _({
  __name: "BaseExternalLink",
  props: {
    href: null,
    target: { default: "_blank" },
    rel: { default: "noopener" },
    text: { default: void 0 }
  },
  setup(e) {
    return (t, n) => (b(), w("a", {
      href: e.href,
      class: S(f(v).BASE_EXTERNAL_LINK),
      target: e.target,
      rel: e.rel
    }, [
      $(t.$slots, "default", {}, () => [
        se(N(e.text), 1)
      ])
    ], 10, Ht));
  }
}), As = /* @__PURE__ */ _({
  __name: "BaseLink",
  props: {
    text: { default: void 0 },
    to: null
  },
  setup(e) {
    return (t, n) => {
      const s = x("RouterLink");
      return b(), te(s, {
        to: e.to,
        class: S(f(v).BASE_LINK)
      }, {
        default: ne(() => [
          $(t.$slots, "default", {}, () => [
            se(N(e.text), 1)
          ])
        ]),
        _: 3
      }, 8, ["to", "class"]);
    };
  }
});
function De(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ue } = Object.prototype, { getPrototypeOf: he } = Object, ye = ((e) => (t) => {
  const n = Ue.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), L = (e) => (e = e.toLowerCase(), (t) => ye(t) === e), re = (e) => (t) => typeof t === e, { isArray: j } = Array, z = re("undefined");
function zt(e) {
  return e !== null && !z(e) && e.constructor !== null && !z(e.constructor) && D(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const qe = L("ArrayBuffer");
function Jt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && qe(e.buffer), t;
}
const Wt = re("string"), D = re("function"), Me = re("number"), ge = (e) => e !== null && typeof e == "object", Kt = (e) => e === !0 || e === !1, G = (e) => {
  if (ye(e) !== "object")
    return !1;
  const t = he(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Xt = L("Date"), Gt = L("File"), Yt = L("Blob"), Zt = L("FileList"), Qt = (e) => ge(e) && D(e.pipe), en = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Ue.call(e) === t || D(e.toString) && e.toString() === t);
}, tn = L("URLSearchParams"), nn = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function J(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let s, r;
  if (typeof e != "object" && (e = [e]), j(e))
    for (s = 0, r = e.length; s < r; s++)
      t.call(null, e[s], s, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let l;
    for (s = 0; s < a; s++)
      l = o[s], t.call(null, e[l], l, e);
  }
}
function Ve(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length, r;
  for (; s-- > 0; )
    if (r = n[s], t === r.toLowerCase())
      return r;
  return null;
}
const je = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), He = (e) => !z(e) && e !== je;
function ue() {
  const { caseless: e } = He(this) && this || {}, t = {}, n = (s, r) => {
    const o = e && Ve(t, r) || r;
    G(t[o]) && G(s) ? t[o] = ue(t[o], s) : G(s) ? t[o] = ue({}, s) : j(s) ? t[o] = s.slice() : t[o] = s;
  };
  for (let s = 0, r = arguments.length; s < r; s++)
    arguments[s] && J(arguments[s], n);
  return t;
}
const sn = (e, t, n, { allOwnKeys: s } = {}) => (J(t, (r, o) => {
  n && D(r) ? e[o] = De(r, n) : e[o] = r;
}, { allOwnKeys: s }), e), rn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), on = (e, t, n, s) => {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, an = (e, t, n, s) => {
  let r, o, a;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
      a = r[o], (!s || s(a, e, t)) && !l[a] && (t[a] = e[a], l[a] = !0);
    e = n !== !1 && he(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, ln = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const s = e.indexOf(t, n);
  return s !== -1 && s === n;
}, cn = (e) => {
  if (!e)
    return null;
  if (j(e))
    return e;
  let t = e.length;
  if (!Me(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, un = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && he(Uint8Array)), dn = (e, t) => {
  const s = (e && e[Symbol.iterator]).call(e);
  let r;
  for (; (r = s.next()) && !r.done; ) {
    const o = r.value;
    t.call(e, o[0], o[1]);
  }
}, fn = (e, t) => {
  let n;
  const s = [];
  for (; (n = e.exec(t)) !== null; )
    s.push(n);
  return s;
}, mn = L("HTMLFormElement"), pn = (e) => e.toLowerCase().replace(
  /[_-\s]([a-z\d])(\w*)/g,
  function(n, s, r) {
    return s.toUpperCase() + r;
  }
), _e = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), hn = L("RegExp"), ze = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  J(n, (r, o) => {
    t(r, o, e) !== !1 && (s[o] = r);
  }), Object.defineProperties(e, s);
}, yn = (e) => {
  ze(e, (t, n) => {
    if (D(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const s = e[n];
    if (!!D(s)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, gn = (e, t) => {
  const n = {}, s = (r) => {
    r.forEach((o) => {
      n[o] = !0;
    });
  };
  return j(e) ? s(e) : s(String(e).split(t)), n;
}, bn = () => {
}, En = (e, t) => (e = +e, Number.isFinite(e) ? e : t), wn = (e) => {
  const t = new Array(10), n = (s, r) => {
    if (ge(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        t[r] = s;
        const o = j(s) ? [] : {};
        return J(s, (a, l) => {
          const d = n(a, r + 1);
          !z(d) && (o[l] = d);
        }), t[r] = void 0, o;
      }
    }
    return s;
  };
  return n(e, 0);
}, i = {
  isArray: j,
  isArrayBuffer: qe,
  isBuffer: zt,
  isFormData: en,
  isArrayBufferView: Jt,
  isString: Wt,
  isNumber: Me,
  isBoolean: Kt,
  isObject: ge,
  isPlainObject: G,
  isUndefined: z,
  isDate: Xt,
  isFile: Gt,
  isBlob: Yt,
  isRegExp: hn,
  isFunction: D,
  isStream: Qt,
  isURLSearchParams: tn,
  isTypedArray: un,
  isFileList: Zt,
  forEach: J,
  merge: ue,
  extend: sn,
  trim: nn,
  stripBOM: rn,
  inherits: on,
  toFlatObject: an,
  kindOf: ye,
  kindOfTest: L,
  endsWith: ln,
  toArray: cn,
  forEachEntry: dn,
  matchAll: fn,
  isHTMLForm: mn,
  hasOwnProperty: _e,
  hasOwnProp: _e,
  reduceDescriptors: ze,
  freezeMethods: yn,
  toObjectSet: gn,
  toCamelCase: pn,
  noop: bn,
  toFiniteNumber: En,
  findKey: Ve,
  global: je,
  isContextDefined: He,
  toJSONObject: wn
};
function g(e, t, n, s, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), s && (this.request = s), r && (this.response = r);
}
i.inherits(g, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: i.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Je = g.prototype, We = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
].forEach((e) => {
  We[e] = { value: e };
});
Object.defineProperties(g, We);
Object.defineProperty(Je, "isAxiosError", { value: !0 });
g.from = (e, t, n, s, r, o) => {
  const a = Object.create(Je);
  return i.toFlatObject(e, a, function(d) {
    return d !== Error.prototype;
  }, (l) => l !== "isAxiosError"), g.call(a, e.message, t, n, s, r), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
var Sn = typeof self == "object" ? self.FormData : window.FormData;
const Tn = Sn;
function de(e) {
  return i.isPlainObject(e) || i.isArray(e);
}
function Ke(e) {
  return i.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Oe(e, t, n) {
  return e ? e.concat(t).map(function(r, o) {
    return r = Ke(r), !n && o ? "[" + r + "]" : r;
  }).join(n ? "." : "") : t;
}
function _n(e) {
  return i.isArray(e) && !e.some(de);
}
const On = i.toFlatObject(i, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Rn(e) {
  return e && i.isFunction(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator];
}
function oe(e, t, n) {
  if (!i.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new (Tn || FormData)(), n = i.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, B) {
    return !i.isUndefined(B[h]);
  });
  const s = n.metaTokens, r = n.visitor || u, o = n.dots, a = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && Rn(t);
  if (!i.isFunction(r))
    throw new TypeError("visitor must be a function");
  function c(m) {
    if (m === null)
      return "";
    if (i.isDate(m))
      return m.toISOString();
    if (!d && i.isBlob(m))
      throw new g("Blob is not supported. Use a Buffer instead.");
    return i.isArrayBuffer(m) || i.isTypedArray(m) ? d && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function u(m, h, B) {
    let A = m;
    if (m && !B && typeof m == "object") {
      if (i.endsWith(h, "{}"))
        h = s ? h : h.slice(0, -2), m = JSON.stringify(m);
      else if (i.isArray(m) && _n(m) || i.isFileList(m) || i.endsWith(h, "[]") && (A = i.toArray(m)))
        return h = Ke(h), A.forEach(function(K, st) {
          !(i.isUndefined(K) || K === null) && t.append(
            a === !0 ? Oe([h], st, o) : a === null ? h : h + "[]",
            c(K)
          );
        }), !1;
    }
    return de(m) ? !0 : (t.append(Oe(B, h, o), c(m)), !1);
  }
  const p = [], E = Object.assign(On, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: de
  });
  function y(m, h) {
    if (!i.isUndefined(m)) {
      if (p.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      p.push(m), i.forEach(m, function(A, q) {
        (!(i.isUndefined(A) || A === null) && r.call(
          t,
          A,
          i.isString(q) ? q.trim() : q,
          h,
          E
        )) === !0 && y(A, h ? h.concat(q) : [q]);
      }), p.pop();
    }
  }
  if (!i.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function Re(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(s) {
    return t[s];
  });
}
function be(e, t) {
  this._pairs = [], e && oe(e, this, t);
}
const Xe = be.prototype;
Xe.append = function(t, n) {
  this._pairs.push([t, n]);
};
Xe.toString = function(t) {
  const n = t ? function(s) {
    return t.call(this, s, Re);
  } : Re;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function Nn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ge(e, t, n) {
  if (!t)
    return e;
  const s = n && n.encode || Nn, r = n && n.serialize;
  let o;
  if (r ? o = r(t, n) : o = i.isURLSearchParams(t) ? t.toString() : new be(t, n).toString(s), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class xn {
  constructor() {
    this.handlers = [];
  }
  use(t, n, s) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
    }), this.handlers.length - 1;
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    i.forEach(this.handlers, function(s) {
      s !== null && t(s);
    });
  }
}
const Ne = xn, Ye = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Cn = typeof URLSearchParams < "u" ? URLSearchParams : be, An = FormData, vn = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Pn = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), P = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Cn,
    FormData: An,
    Blob
  },
  isStandardBrowserEnv: vn,
  isStandardBrowserWebWorkerEnv: Pn,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function In(e, t) {
  return oe(e, new P.classes.URLSearchParams(), Object.assign({
    visitor: function(n, s, r, o) {
      return P.isNode && i.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Bn(e) {
  return i.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function kn(e) {
  const t = {}, n = Object.keys(e);
  let s;
  const r = n.length;
  let o;
  for (s = 0; s < r; s++)
    o = n[s], t[o] = e[o];
  return t;
}
function Ze(e) {
  function t(n, s, r, o) {
    let a = n[o++];
    const l = Number.isFinite(+a), d = o >= n.length;
    return a = !a && i.isArray(r) ? r.length : a, d ? (i.hasOwnProp(r, a) ? r[a] = [r[a], s] : r[a] = s, !l) : ((!r[a] || !i.isObject(r[a])) && (r[a] = []), t(n, s, r[a], o) && i.isArray(r[a]) && (r[a] = kn(r[a])), !l);
  }
  if (i.isFormData(e) && i.isFunction(e.entries)) {
    const n = {};
    return i.forEachEntry(e, (s, r) => {
      t(Bn(s), r, n, 0);
    }), n;
  }
  return null;
}
const Ln = {
  "Content-Type": void 0
};
function Fn(e, t, n) {
  if (i.isString(e))
    try {
      return (t || JSON.parse)(e), i.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (n || JSON.stringify)(e);
}
const ae = {
  transitional: Ye,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const s = n.getContentType() || "", r = s.indexOf("application/json") > -1, o = i.isObject(t);
    if (o && i.isHTMLForm(t) && (t = new FormData(t)), i.isFormData(t))
      return r && r ? JSON.stringify(Ze(t)) : t;
    if (i.isArrayBuffer(t) || i.isBuffer(t) || i.isStream(t) || i.isFile(t) || i.isBlob(t))
      return t;
    if (i.isArrayBufferView(t))
      return t.buffer;
    if (i.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return In(t, this.formSerializer).toString();
      if ((l = i.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return oe(
          l ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return o || r ? (n.setContentType("application/json", !1), Fn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ae.transitional, s = n && n.forcedJSONParsing, r = this.responseType === "json";
    if (t && i.isString(t) && (s && !this.responseType || r)) {
      const a = !(n && n.silentJSONParsing) && r;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (a)
          throw l.name === "SyntaxError" ? g.from(l, g.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: P.classes.FormData,
    Blob: P.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
i.forEach(["delete", "get", "head"], function(t) {
  ae.headers[t] = {};
});
i.forEach(["post", "put", "patch"], function(t) {
  ae.headers[t] = i.merge(Ln);
});
const Ee = ae, $n = i.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Dn = (e) => {
  const t = {};
  let n, s, r;
  return e && e.split(`
`).forEach(function(a) {
    r = a.indexOf(":"), n = a.substring(0, r).trim().toLowerCase(), s = a.substring(r + 1).trim(), !(!n || t[n] && $n[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
  }), t;
}, xe = Symbol("internals");
function H(e) {
  return e && String(e).trim().toLowerCase();
}
function Y(e) {
  return e === !1 || e == null ? e : i.isArray(e) ? e.map(Y) : String(e);
}
function Un(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
function qn(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function Ce(e, t, n, s) {
  if (i.isFunction(s))
    return s.call(this, t, n);
  if (!!i.isString(t)) {
    if (i.isString(s))
      return t.indexOf(s) !== -1;
    if (i.isRegExp(s))
      return s.test(t);
  }
}
function Mn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function Vn(e, t) {
  const n = i.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function(r, o, a) {
        return this[s].call(this, t, r, o, a);
      },
      configurable: !0
    });
  });
}
class ie {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const r = this;
    function o(l, d, c) {
      const u = H(d);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const p = i.findKey(r, u);
      (!p || r[p] === void 0 || c === !0 || c === void 0 && r[p] !== !1) && (r[p || d] = Y(l));
    }
    const a = (l, d) => i.forEach(l, (c, u) => o(c, u, d));
    return i.isPlainObject(t) || t instanceof this.constructor ? a(t, n) : i.isString(t) && (t = t.trim()) && !qn(t) ? a(Dn(t), n) : t != null && o(n, t, s), this;
  }
  get(t, n) {
    if (t = H(t), t) {
      const s = i.findKey(this, t);
      if (s) {
        const r = this[s];
        if (!n)
          return r;
        if (n === !0)
          return Un(r);
        if (i.isFunction(n))
          return n.call(this, r, s);
        if (i.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = H(t), t) {
      const s = i.findKey(this, t);
      return !!(s && (!n || Ce(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let r = !1;
    function o(a) {
      if (a = H(a), a) {
        const l = i.findKey(s, a);
        l && (!n || Ce(s, s[l], l, n)) && (delete s[l], r = !0);
      }
    }
    return i.isArray(t) ? t.forEach(o) : o(t), r;
  }
  clear() {
    return Object.keys(this).forEach(this.delete.bind(this));
  }
  normalize(t) {
    const n = this, s = {};
    return i.forEach(this, (r, o) => {
      const a = i.findKey(s, o);
      if (a) {
        n[a] = Y(r), delete n[o];
        return;
      }
      const l = t ? Mn(o) : String(o).trim();
      l !== o && delete n[o], n[l] = Y(r), s[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return i.forEach(this, (s, r) => {
      s != null && s !== !1 && (n[r] = t && i.isArray(s) ? s.join(", ") : s);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const s = new this(t);
    return n.forEach((r) => s.set(r)), s;
  }
  static accessor(t) {
    const s = (this[xe] = this[xe] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function o(a) {
      const l = H(a);
      s[l] || (Vn(r, a), s[l] = !0);
    }
    return i.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
ie.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
i.freezeMethods(ie.prototype);
i.freezeMethods(ie);
const k = ie;
function le(e, t) {
  const n = this || Ee, s = t || n, r = k.from(s.headers);
  let o = s.data;
  return i.forEach(e, function(l) {
    o = l.call(n, o, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), o;
}
function Qe(e) {
  return !!(e && e.__CANCEL__);
}
function W(e, t, n) {
  g.call(this, e == null ? "canceled" : e, g.ERR_CANCELED, t, n), this.name = "CanceledError";
}
i.inherits(W, g, {
  __CANCEL__: !0
});
const jn = null;
function Hn(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(new g(
    "Request failed with status code " + n.status,
    [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const zn = P.isStandardBrowserEnv ? function() {
  return {
    write: function(n, s, r, o, a, l) {
      const d = [];
      d.push(n + "=" + encodeURIComponent(s)), i.isNumber(r) && d.push("expires=" + new Date(r).toGMTString()), i.isString(o) && d.push("path=" + o), i.isString(a) && d.push("domain=" + a), l === !0 && d.push("secure"), document.cookie = d.join("; ");
    },
    read: function(n) {
      const s = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return s ? decodeURIComponent(s[3]) : null;
    },
    remove: function(n) {
      this.write(n, "", Date.now() - 864e5);
    }
  };
}() : function() {
  return {
    write: function() {
    },
    read: function() {
      return null;
    },
    remove: function() {
    }
  };
}();
function Jn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Wn(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function et(e, t) {
  return e && !Jn(t) ? Wn(e, t) : t;
}
const Kn = P.isStandardBrowserEnv ? function() {
  const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
  let s;
  function r(o) {
    let a = o;
    return t && (n.setAttribute("href", a), a = n.href), n.setAttribute("href", a), {
      href: n.href,
      protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
      host: n.host,
      search: n.search ? n.search.replace(/^\?/, "") : "",
      hash: n.hash ? n.hash.replace(/^#/, "") : "",
      hostname: n.hostname,
      port: n.port,
      pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
    };
  }
  return s = r(window.location.href), function(a) {
    const l = i.isString(a) ? r(a) : a;
    return l.protocol === s.protocol && l.host === s.host;
  };
}() : function() {
  return function() {
    return !0;
  };
}();
function Xn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Gn(e, t) {
  e = e || 10;
  const n = new Array(e), s = new Array(e);
  let r = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const c = Date.now(), u = s[o];
    a || (a = c), n[r] = d, s[r] = c;
    let p = o, E = 0;
    for (; p !== r; )
      E += n[p++], p = p % e;
    if (r = (r + 1) % e, r === o && (o = (o + 1) % e), c - a < t)
      return;
    const y = u && c - u;
    return y ? Math.round(E * 1e3 / y) : void 0;
  };
}
function Ae(e, t) {
  let n = 0;
  const s = Gn(50, 250);
  return (r) => {
    const o = r.loaded, a = r.lengthComputable ? r.total : void 0, l = o - n, d = s(l), c = o <= a;
    n = o;
    const u = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: l,
      rate: d || void 0,
      estimated: d && a && c ? (a - o) / d : void 0,
      event: r
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const Yn = typeof XMLHttpRequest < "u", Zn = Yn && function(e) {
  return new Promise(function(n, s) {
    let r = e.data;
    const o = k.from(e.headers).normalize(), a = e.responseType;
    let l;
    function d() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    i.isFormData(r) && (P.isStandardBrowserEnv || P.isStandardBrowserWebWorkerEnv) && o.setContentType(!1);
    let c = new XMLHttpRequest();
    if (e.auth) {
      const y = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(y + ":" + m));
    }
    const u = et(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Ge(u, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function p() {
      if (!c)
        return;
      const y = k.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), h = {
        data: !a || a === "text" || a === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: y,
        config: e,
        request: c
      };
      Hn(function(A) {
        n(A), d();
      }, function(A) {
        s(A), d();
      }, h), c = null;
    }
    if ("onloadend" in c ? c.onloadend = p : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, c.onabort = function() {
      !c || (s(new g("Request aborted", g.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      s(new g("Network Error", g.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const h = e.transitional || Ye;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), s(new g(
        m,
        h.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
        e,
        c
      )), c = null;
    }, P.isStandardBrowserEnv) {
      const y = (e.withCredentials || Kn(u)) && e.xsrfCookieName && zn.read(e.xsrfCookieName);
      y && o.set(e.xsrfHeaderName, y);
    }
    r === void 0 && o.setContentType(null), "setRequestHeader" in c && i.forEach(o.toJSON(), function(m, h) {
      c.setRequestHeader(h, m);
    }), i.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), a && a !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Ae(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Ae(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (y) => {
      !c || (s(!y || y.type ? new W(null, e, c) : y), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const E = Xn(u);
    if (E && P.protocols.indexOf(E) === -1) {
      s(new g("Unsupported protocol " + E + ":", g.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(r || null);
  });
}, Z = {
  http: jn,
  xhr: Zn
};
i.forEach(Z, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Qn = {
  getAdapter: (e) => {
    e = i.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, s;
    for (let r = 0; r < t && (n = e[r], !(s = i.isString(n) ? Z[n.toLowerCase()] : n)); r++)
      ;
    if (!s)
      throw s === !1 ? new g(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        i.hasOwnProp(Z, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!i.isFunction(s))
      throw new TypeError("adapter is not a function");
    return s;
  },
  adapters: Z
};
function ce(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new W(null, e);
}
function ve(e) {
  return ce(e), e.headers = k.from(e.headers), e.data = le.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Qn.getAdapter(e.adapter || Ee.adapter)(e).then(function(s) {
    return ce(e), s.data = le.call(
      e,
      e.transformResponse,
      s
    ), s.headers = k.from(s.headers), s;
  }, function(s) {
    return Qe(s) || (ce(e), s && s.response && (s.response.data = le.call(
      e,
      e.transformResponse,
      s.response
    ), s.response.headers = k.from(s.response.headers))), Promise.reject(s);
  });
}
const Pe = (e) => e instanceof k ? e.toJSON() : e;
function V(e, t) {
  t = t || {};
  const n = {};
  function s(c, u, p) {
    return i.isPlainObject(c) && i.isPlainObject(u) ? i.merge.call({ caseless: p }, c, u) : i.isPlainObject(u) ? i.merge({}, u) : i.isArray(u) ? u.slice() : u;
  }
  function r(c, u, p) {
    if (i.isUndefined(u)) {
      if (!i.isUndefined(c))
        return s(void 0, c, p);
    } else
      return s(c, u, p);
  }
  function o(c, u) {
    if (!i.isUndefined(u))
      return s(void 0, u);
  }
  function a(c, u) {
    if (i.isUndefined(u)) {
      if (!i.isUndefined(c))
        return s(void 0, c);
    } else
      return s(void 0, u);
  }
  function l(c, u, p) {
    if (p in t)
      return s(c, u);
    if (p in e)
      return s(void 0, c);
  }
  const d = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (c, u) => r(Pe(c), Pe(u), !0)
  };
  return i.forEach(Object.keys(e).concat(Object.keys(t)), function(u) {
    const p = d[u] || r, E = p(e[u], t[u], u);
    i.isUndefined(E) && p !== l || (n[u] = E);
  }), n;
}
const tt = "1.2.5", we = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  we[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ie = {};
we.transitional = function(t, n, s) {
  function r(o, a) {
    return "[Axios v" + tt + "] Transitional option '" + o + "'" + a + (s ? ". " + s : "");
  }
  return (o, a, l) => {
    if (t === !1)
      throw new g(
        r(a, " has been removed" + (n ? " in " + n : "")),
        g.ERR_DEPRECATED
      );
    return n && !Ie[a] && (Ie[a] = !0, console.warn(
      r(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, a, l) : !0;
  };
};
function es(e, t, n) {
  if (typeof e != "object")
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let r = s.length;
  for (; r-- > 0; ) {
    const o = s[r], a = t[o];
    if (a) {
      const l = e[o], d = l === void 0 || a(l, o, e);
      if (d !== !0)
        throw new g("option " + o + " must be " + d, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new g("Unknown option " + o, g.ERR_BAD_OPTION);
  }
}
const fe = {
  assertOptions: es,
  validators: we
}, F = fe.validators;
class ee {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Ne(),
      response: new Ne()
    };
  }
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = V(this.defaults, n);
    const { transitional: s, paramsSerializer: r, headers: o } = n;
    s !== void 0 && fe.assertOptions(s, {
      silentJSONParsing: F.transitional(F.boolean),
      forcedJSONParsing: F.transitional(F.boolean),
      clarifyTimeoutError: F.transitional(F.boolean)
    }, !1), r !== void 0 && fe.assertOptions(r, {
      encode: F.function,
      serialize: F.function
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = o && i.merge(
      o.common,
      o[n.method]
    ), a && i.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete o[m];
      }
    ), n.headers = k.concat(a, o);
    const l = [];
    let d = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (d = d && h.synchronous, l.unshift(h.fulfilled, h.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(h) {
      c.push(h.fulfilled, h.rejected);
    });
    let u, p = 0, E;
    if (!d) {
      const m = [ve.bind(this), void 0];
      for (m.unshift.apply(m, l), m.push.apply(m, c), E = m.length, u = Promise.resolve(n); p < E; )
        u = u.then(m[p++], m[p++]);
      return u;
    }
    E = l.length;
    let y = n;
    for (p = 0; p < E; ) {
      const m = l[p++], h = l[p++];
      try {
        y = m(y);
      } catch (B) {
        h.call(this, B);
        break;
      }
    }
    try {
      u = ve.call(this, y);
    } catch (m) {
      return Promise.reject(m);
    }
    for (p = 0, E = c.length; p < E; )
      u = u.then(c[p++], c[p++]);
    return u;
  }
  getUri(t) {
    t = V(this.defaults, t);
    const n = et(t.baseURL, t.url);
    return Ge(n, t.params, t.paramsSerializer);
  }
}
i.forEach(["delete", "get", "head", "options"], function(t) {
  ee.prototype[t] = function(n, s) {
    return this.request(V(s || {}, {
      method: t,
      url: n,
      data: (s || {}).data
    }));
  };
});
i.forEach(["post", "put", "patch"], function(t) {
  function n(s) {
    return function(o, a, l) {
      return this.request(V(l || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  ee.prototype[t] = n(), ee.prototype[t + "Form"] = n(!0);
});
const Q = ee;
class Se {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const s = this;
    this.promise.then((r) => {
      if (!s._listeners)
        return;
      let o = s._listeners.length;
      for (; o-- > 0; )
        s._listeners[o](r);
      s._listeners = null;
    }), this.promise.then = (r) => {
      let o;
      const a = new Promise((l) => {
        s.subscribe(l), o = l;
      }).then(r);
      return a.cancel = function() {
        s.unsubscribe(o);
      }, a;
    }, t(function(o, a, l) {
      s.reason || (s.reason = new W(o, a, l), n(s.reason));
    });
  }
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Se(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
}
const ts = Se;
function ns(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function ss(e) {
  return i.isObject(e) && e.isAxiosError === !0;
}
const me = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(me).forEach(([e, t]) => {
  me[t] = e;
});
const rs = me;
function nt(e) {
  const t = new Q(e), n = De(Q.prototype.request, t);
  return i.extend(n, Q.prototype, t, { allOwnKeys: !0 }), i.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return nt(V(e, r));
  }, n;
}
const T = nt(Ee);
T.Axios = Q;
T.CanceledError = W;
T.CancelToken = ts;
T.isCancel = Qe;
T.VERSION = tt;
T.toFormData = oe;
T.AxiosError = g;
T.Cancel = T.CanceledError;
T.all = function(t) {
  return Promise.all(t);
};
T.spread = ns;
T.isAxiosError = ss;
T.mergeConfig = V;
T.AxiosHeaders = k;
T.formToJSON = (e) => Ze(i.isHTMLForm(e) ? new FormData(e) : e);
T.HttpStatusCode = rs;
T.default = T;
const os = T, as = {}, Be = {
  DEVELOPMENT: "development",
  PRODUCTION: "production"
};
function is() {
  const e = (r) => process.env.NODE_ENV === r;
  return {
    isEnv: e,
    isDev: () => e(Be.DEVELOPMENT),
    isProd: () => e(Be.PRODUCTION),
    isSSR: () => typeof window > "u"
  };
}
function vs() {
  const { isSSR: e } = is(), t = M(!1), n = () => os.create({
    ...e() ? {
      httpsAgent: new as.Agent({
        rejectUnauthorized: !1
      })
    } : {}
  });
  return {
    fetch: async (r) => {
      var d;
      let o = null, a = null;
      t.value = !0;
      try {
        o = await r(n());
      } catch (c) {
        a = c;
      }
      t.value = !1;
      const l = a ? (d = a == null ? void 0 : a.response) == null ? void 0 : d.data : o == null ? void 0 : o.data;
      return { response: o, exception: a, body: l };
    },
    fetching: t
  };
}
function ls() {
  const e = (r) => n(r, document.cookie), t = (r, o, a = 30) => {
    let l = "";
    if (a) {
      const d = new Date();
      d.setTime(d.getTime() + a * 24 * 60 * 60 * 1e3), l = "; expires=" + d.toUTCString();
    }
    document.cookie = r + "=" + (o || "") + l + "; path=/";
  }, n = (r, o) => {
    const a = `${r}=`, l = o.split(";");
    for (let d = 0; d < l.length; d++) {
      let c = l[d];
      for (; c.charAt(0) == " "; )
        c = c.substring(1, c.length);
      if (c.indexOf(a) == 0)
        return c.substring(a.length, c.length);
    }
    return null;
  };
  return {
    setCookie: t,
    getCookie: e,
    parseCookie: n,
    deleteCookie: (r) => {
      document.cookie = r + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
  };
}
function Ps(e = "app_settings") {
  const { getCookie: t, setCookie: n } = ls(), s = M(null);
  return {
    consentCookie: s,
    createConsent: () => it({
      preferences: !1,
      marketing: !1,
      statistics: !1
    }),
    getConsentCookie: () => {
      const l = String(t(e));
      return s.value = l ? JSON.parse(l) : null;
    },
    setConsentCookie: (l) => {
      n(e, JSON.stringify(l)), s.value = l;
    }
  };
}
function Is() {
  const e = (n) => Array.from(document.querySelectorAll(n) || []);
  return {
    getNodes: e,
    removeNodes: (n) => e(n).forEach((s) => s.remove())
  };
}
function Bs() {
  return {
    bootGoogleTagManager: () => {
      window.dataLayer = window.dataLayer || [];
    },
    pushData: (s) => {
      window.dataLayer.push(s);
    },
    trackPage: (s, r) => {
      window.dataLayer.push({
        event: "PageView",
        page_path: s,
        page_title: r
      });
    }
  };
}
function ks() {
  const e = M(!1), t = () => window.addEventListener("scroll", n), n = () => {
    e.value = window.scrollY > 100;
  }, s = (a = 0, l = "auto") => {
    window.scrollTo({
      top: a,
      left: 0,
      behavior: l
    });
  };
  return {
    scrolled: e,
    bootScroll: t,
    scrollTo: s,
    scrollToElement: (a, l = 0, d = "auto") => {
      const c = document.querySelector(a);
      c && Te(() => {
        setTimeout(() => {
          s(c.getBoundingClientRect().top + window.scrollY - l, d);
        }, 0);
      });
    },
    scrollIntoView: (a) => {
      const l = document.querySelector(a);
      l && Te(() => {
        setTimeout(() => {
          l.scrollIntoView({ behavior: "smooth" });
        }, 0);
      });
    }
  };
}
function Ls() {
  const e = () => new Date().getTime() / 1e3, t = () => new Date().getFullYear(), n = () => new Date().getHours(), s = () => {
    const o = new Date(), a = o.getFullYear(), l = r(o.getMonth() + 1), d = r(o.getDate()), c = r(o.getHours()), u = r(o.getMinutes()), p = r(o.getSeconds());
    return `${a}-${l}-${d} ${c}:${u}:${p}`;
  }, r = (o) => o < 10 ? `0${o}` : `${o}`;
  return {
    microtime: e,
    currentYear: t,
    currentHour: n,
    timestamp: s
  };
}
export {
  Cs as BaseExternalLink,
  ps as BaseHeading,
  Ns as BaseImage,
  xs as BaseIntersectionImage,
  As as BaseLink,
  hs as BaseText,
  ys as CheckboxInput,
  gs as EmailInput,
  bs as FormBase,
  Es as FormMessages,
  ws as InputLabel,
  us as PerspectivePlane,
  ds as PerspectiveWrapper,
  Ss as PhoneNumberInput,
  Ts as SelectInput,
  fs as SlantWrapper,
  _s as SubmitInput,
  Rs as TextInput,
  Os as TextareaInput,
  ms as TransitionFade,
  vs as useAxios,
  Ps as useConsent,
  ls as useCookie,
  Is as useDOM,
  is as useEnvironment,
  U as useFormInput,
  Bs as useGoogleTagManager,
  Vt as useIntersectionObserver,
  ks as useScroll,
  Ls as useTime
};
