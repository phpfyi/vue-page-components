import { defineComponent as g, computed as h, openBlock as u, createElementBlock as c, normalizeStyle as L, unref as s, renderSlot as k, createElementVNode as v, normalizeClass as f, createBlock as S, Transition as R, withCtx as q, resolveDynamicComponent as F, createTextVNode as w, toDisplayString as y, resolveComponent as _, createCommentVNode as T, createVNode as I, Fragment as A, renderList as U, mergeProps as D, ref as C, onMounted as z, onUnmounted as Y, reactive as H, nextTick as P } from "vue";
import G from "axios";
const Pe = /* @__PURE__ */ g({
  __name: "PerspectivePlane",
  props: {
    rotateX: { default: "0deg" },
    rotateY: { default: "0deg" },
    translateY: { default: "0px" },
    translateZ: { default: "0px" }
  },
  setup(e) {
    const t = e, a = h(() => ({
      transform: `
            rotateX(${t.rotateX}) 
            rotateY(${t.rotateY}) 
            translateY(${t.translateY}) 
            translateZ(${t.translateZ})`
    }));
    return (l, n) => (u(), c("div", {
      class: "perspective-plane",
      style: L(s(a))
    }, [
      k(l.$slots, "default")
    ], 4));
  }
}), X = { class: "perspective" }, Me = /* @__PURE__ */ g({
  __name: "PerspectiveWrapper",
  props: {
    size: { default: "0px" }
  },
  setup(e) {
    const t = e, a = h(() => ({
      height: t.size,
      width: t.size
    }));
    return (l, n) => (u(), c("div", X, [
      v("div", {
        class: "perspective__inner",
        style: L(s(a))
      }, [
        k(l.$slots, "default")
      ], 4)
    ]));
  }
}), Fe = /* @__PURE__ */ g({
  __name: "SlantWrapper",
  props: {
    height: null,
    top: { default: "-5px" },
    reverse: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, a = h(() => ({
      height: t.height,
      top: t.top
    })), l = h(() => ({
      "slant-wrapper-reverse": t.reverse
    }));
    return (n, o) => (u(), c("div", {
      class: f(["slant-wrapper", s(l)]),
      style: L(s(a))
    }, null, 6));
  }
});
const K = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [l, n] of t)
    a[l] = n;
  return a;
}, W = {};
function J(e, t) {
  return u(), S(R, {
    name: "fade",
    mode: "out-in"
  }, {
    default: q(() => [
      k(e.$slots, "default", {}, void 0, !0)
    ]),
    _: 3
  });
}
const Ae = /* @__PURE__ */ K(W, [["render", J], ["__scopeId", "data-v-51fc47aa"]]), N = {
  INPUT_ELEMENT: "form-element",
  INPUT: "input",
  HEADING: "h"
}, $ = {
  BASE_HEADING: ["app-heading"],
  BASE_TEXT: ["app-text"],
  BASE_LINK: ["app-link"],
  BASE_EXTERNAL_LINK: ["app-link", "app-external-link"],
  INPUT_ELEMENT: ["form-element"],
  INPUT_INNER: ["form-element-inner"],
  INPUT: ["input"],
  INPUT_ERROR: ["input-error"],
  SUBMIT_INPUT: ["button"]
}, Ue = /* @__PURE__ */ g({
  __name: "BaseHeading",
  props: {
    size: null,
    text: { default: void 0 }
  },
  setup(e) {
    const t = e, a = h(() => [...$.BASE_HEADING, l.value]), l = h(() => `${N.HEADING}${t.size}`);
    return (n, o) => (u(), S(F(s(l)), {
      class: f(s(a))
    }, {
      default: q(() => [
        k(n.$slots, "default", {}, () => [
          w(y(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), De = /* @__PURE__ */ g({
  __name: "BaseText",
  props: {
    tag: { default: "p" },
    text: { default: void 0 }
  },
  setup(e) {
    const t = h(() => $.BASE_TEXT);
    return (a, l) => (u(), S(F(e.tag), {
      class: f(s(t))
    }, {
      default: q(() => [
        k(a.$slots, "default", {}, () => [
          w(y(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
function B(e) {
  const t = h(() => e.name ? `${N.INPUT_ELEMENT}-${e.name}` : ""), a = h(() => e.id ? e.id : e.name ? `${N.INPUT}-${e.name}` : ""), l = h(
    () => $.INPUT_ELEMENT.concat([`${$.INPUT_ELEMENT}-${e.type}`])
  ), n = h(() => $.INPUT_INNER), o = h(() => [
    ...$.INPUT,
    ...e.type ? [`${N.INPUT}-${e.type}`] : [],
    ...(e.messages || []).length > 0 ? $.INPUT_ERROR : []
  ]), r = h(() => e.label !== !1 ? e.label ? String(e.label) : (e.name.charAt(0).toUpperCase() + e.name.slice(1)).replace("_", " ") : e.label);
  return {
    elementId: t,
    inputId: a,
    elementClasses: l,
    innerClasses: n,
    inputClasses: o,
    labelText: r
  };
}
const Z = ["id"], j = ["for"], Q = { class: "label-content" }, ee = {
  key: 0,
  class: "required"
}, te = ["id", "type", "name", "required", "readonly", "checked"], ne = /* @__PURE__ */ v("span", { class: "switch" }, null, -1), ae = /* @__PURE__ */ v("div", { class: "cl" }, null, -1), Oe = /* @__PURE__ */ g({
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
    const a = e, { elementId: l, inputId: n, elementClasses: o, innerClasses: r, inputClasses: i, labelText: d } = B(a), m = (p) => t("update:modelValue", Boolean(p.target.checked));
    return (p, x) => {
      const b = _("FormMessages");
      return u(), c("div", {
        id: s(l),
        class: f(s(o))
      }, [
        v("div", {
          class: f(s(r))
        }, [
          s(d) ? (u(), c("label", {
            key: 0,
            for: s(n)
          }, [
            v("span", Q, y(s(d)), 1),
            e.required ? (u(), c("span", ee, " *")) : T("", !0),
            v("input", {
              id: s(n),
              type: e.type,
              name: e.name,
              class: f(s(i)),
              required: e.required,
              readonly: e.readonly,
              checked: e.modelValue,
              onInput: m
            }, null, 42, te),
            ne,
            ae
          ], 8, j)) : T("", !0),
          I(b, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, Z);
    };
  }
}), se = ["id"], le = ["id", "type", "name", "placeholder", "readonly", "required", "value"], oe = { key: 0 }, Re = /* @__PURE__ */ g({
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
    const a = e, { elementId: l, inputId: n, elementClasses: o, innerClasses: r, inputClasses: i, labelText: d } = B(a), m = (p) => t("update:modelValue", p.target.value);
    return (p, x) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return u(), c("div", {
        id: s(l),
        class: f(s(o))
      }, [
        I(b, {
          id: s(n),
          label: s(d),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        v("div", {
          class: f(s(r))
        }, [
          v("input", {
            id: s(n),
            type: e.type,
            name: e.name,
            class: f(s(i)),
            placeholder: e.placeholder,
            readonly: e.readonly,
            required: e.required,
            value: e.modelValue,
            onInput: m
          }, null, 42, le),
          e.description ? (u(), c("i", oe, y(e.description), 1)) : T("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, se);
    };
  }
}), re = ["id", "name", "action", "method", "novalidate"], ze = /* @__PURE__ */ g({
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
    const a = e, l = (n) => {
      t("submit", n), a.guard && n.preventDefault();
    };
    return (n, o) => {
      const r = _("FormMessages");
      return u(), c("form", {
        id: e.id,
        name: e.name,
        action: e.action,
        method: e.method,
        class: "form",
        novalidate: e.novalidate,
        onSubmit: l
      }, [
        I(r, { messages: e.messages }, null, 8, ["messages"]),
        k(n.$slots, "default")
      ], 40, re);
    };
  }
}), ie = {
  key: 0,
  class: "form-messages input-error"
}, Ye = /* @__PURE__ */ g({
  __name: "FormMessages",
  props: {
    messages: { default: () => [] }
  },
  setup(e) {
    return (t, a) => e.messages.length ? (u(), c("div", ie, [
      (u(!0), c(A, null, U(e.messages, (l, n) => (u(), c("span", { key: n }, y(l), 1))), 128))
    ])) : T("", !0);
  }
}), ue = ["for"], de = { class: "label-content" }, ce = {
  key: 0,
  class: "required"
}, He = /* @__PURE__ */ g({
  __name: "InputLabel",
  props: {
    label: { type: [String, Boolean] },
    id: null,
    required: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, a) => e.label ? (u(), c("label", {
      key: 0,
      for: e.id
    }, [
      v("span", de, y(e.label), 1),
      e.required ? (u(), c("span", ce, " *")) : T("", !0)
    ], 8, ue)) : T("", !0);
  }
}), me = ["id"], fe = ["id", "type", "name", "placeholder", "readonly", "required", "value"], pe = { key: 0 }, Ge = /* @__PURE__ */ g({
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
    const a = e, { elementId: l, inputId: n, elementClasses: o, innerClasses: r, inputClasses: i, labelText: d } = B(a), m = (p) => t("update:modelValue", p.target.value);
    return (p, x) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return u(), c("div", {
        id: s(l),
        class: f(s(o))
      }, [
        I(b, {
          id: s(n),
          label: s(d),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        v("div", {
          class: f(s(r))
        }, [
          v("input", {
            id: s(n),
            type: e.type,
            name: e.name,
            class: f(s(i)),
            placeholder: e.placeholder,
            readonly: e.readonly,
            required: e.required,
            value: e.modelValue,
            onInput: m
          }, null, 42, fe),
          e.description ? (u(), c("i", pe, y(e.description), 1)) : T("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, me);
    };
  }
}), ge = ["id"], he = ["id", "value", "name", "required", "readonly"], ve = {
  key: 0,
  selected: "",
  value: ""
}, ye = ["value"], Xe = /* @__PURE__ */ g({
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
    const a = e, { elementId: l, inputId: n, elementClasses: o, innerClasses: r, inputClasses: i, labelText: d } = B(a), m = (p) => t("update:modelValue", p.target.value);
    return (p, x) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return u(), c("div", {
        id: s(l),
        class: f(s(o))
      }, [
        I(b, {
          id: s(n),
          label: s(d),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        v("div", {
          class: f(s(r))
        }, [
          v("select", {
            id: s(n),
            value: e.modelValue,
            name: e.name,
            class: f(s(i)),
            required: e.required,
            readonly: e.readonly,
            onInput: m
          }, [
            e.emptyOption ? (u(), c("option", ve, y(e.emptyOption), 1)) : T("", !0),
            (u(!0), c(A, null, U(e.options, (V, O) => (u(), c("option", {
              key: O,
              value: V.value
            }, y(V.title), 9, ye))), 128))
          ], 42, he),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, ge);
    };
  }
}), _e = ["id", "type", "name", "value", "disabled"], Ke = /* @__PURE__ */ g({
  __name: "SubmitInput",
  props: {
    type: { default: "submit" },
    name: { default: void 0 },
    id: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    modelValue: { type: [String, Number, Boolean, Array], default: "Submit" }
  },
  setup(e) {
    const t = e, { inputId: a } = B(t), l = h(() => $.SUBMIT_INPUT);
    return (n, o) => (u(), c("input", {
      id: s(a),
      type: e.type,
      name: e.name,
      value: e.modelValue,
      class: f(s(l)),
      disabled: e.disabled
    }, null, 10, _e));
  }
}), Ie = ["id"], be = ["id", "name", "rows", "value", "placeholder", "required", "readonly"], $e = { key: 0 }, We = /* @__PURE__ */ g({
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
    const a = e, { elementId: l, inputId: n, elementClasses: o, innerClasses: r, inputClasses: i, labelText: d } = B(a), m = (p) => t("update:modelValue", p.target.value);
    return (p, x) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return u(), c("div", {
        id: s(l),
        class: f(s(o))
      }, [
        I(b, {
          id: s(n),
          label: s(d),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        v("div", {
          class: f(s(r))
        }, [
          v("textarea", {
            id: s(n),
            name: e.name,
            rows: e.rows,
            class: f(s(i)),
            value: e.modelValue,
            placeholder: e.placeholder,
            required: e.required,
            readonly: e.readonly,
            onInput: m
          }, null, 42, be),
          e.description ? (u(), c("i", $e, y(e.description), 1)) : T("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, Ie);
    };
  }
}), Te = ["id"], Ee = ["id", "type", "name", "placeholder", "readonly", "required", "value"], ke = { key: 0 }, Je = /* @__PURE__ */ g({
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
    const a = e, { elementId: l, inputId: n, elementClasses: o, innerClasses: r, inputClasses: i, labelText: d } = B(a), m = (p) => t("update:modelValue", p.target.value);
    return (p, x) => {
      const b = _("InputLabel"), E = _("FormMessages");
      return u(), c("div", {
        id: s(l),
        class: f(s(o))
      }, [
        I(b, {
          id: s(n),
          label: s(d),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        v("div", {
          class: f(s(r))
        }, [
          v("input", {
            id: s(n),
            type: e.type,
            name: e.name,
            class: f(s(i)),
            placeholder: e.placeholder,
            readonly: e.readonly,
            required: e.required,
            value: e.modelValue,
            onInput: m
          }, null, 42, Ee),
          e.description ? (u(), c("i", ke, y(e.description), 1)) : T("", !0),
          I(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, Te);
    };
  }
}), xe = ["src"], Ze = /* @__PURE__ */ g({
  __name: "BaseImage",
  props: {
    src: null,
    size: null,
    height: null,
    loading: null,
    width: null
  },
  setup(e) {
    const t = e, a = h(() => ({
      height: t.height || t.size,
      ...t.loading ? { loading: t.loading } : {},
      width: t.width || t.size
    }));
    return (l, n) => (u(), c("img", D({ class: "app-image block" }, s(a), { src: e.src }), null, 16, xe));
  }
});
function Be(e) {
  const t = C(null), a = C(!1), l = () => {
    t.value = new IntersectionObserver((o) => {
      o[0].isIntersecting && (a.value = !0, n());
    }), t.value.observe(e.value);
  }, n = () => {
    var o;
    return (o = t.value) == null ? void 0 : o.disconnect();
  };
  return {
    observer: t,
    intersected: a,
    observe: l,
    unobserve: n
  };
}
const Ce = ["src"], je = /* @__PURE__ */ g({
  __name: "BaseIntersectionImage",
  props: {
    src: null,
    size: null,
    height: null,
    width: null
  },
  setup(e) {
    const t = e, a = C(null), { intersected: l, observe: n, unobserve: o } = Be(a), r = h(() => l.value ? t.src : ""), i = h(() => ({
      height: t.height || t.size,
      width: t.width || t.size
    }));
    return z(() => n()), Y(() => o()), (d, m) => (u(), c("img", D({
      ref_key: "image",
      ref: a,
      class: ["app-image block", { intersected: s(l) }]
    }, s(i), { src: s(r) }), null, 16, Ce));
  }
}), Ne = ["href", "target", "rel"], Qe = /* @__PURE__ */ g({
  __name: "BaseExternalLink",
  props: {
    href: null,
    target: { default: "_blank" },
    rel: { default: "noopener" },
    text: { default: void 0 }
  },
  setup(e) {
    return (t, a) => (u(), c("a", {
      href: e.href,
      class: f(s($).BASE_EXTERNAL_LINK),
      target: e.target,
      rel: e.rel
    }, [
      k(t.$slots, "default", {}, () => [
        w(y(e.text), 1)
      ])
    ], 10, Ne));
  }
}), et = /* @__PURE__ */ g({
  __name: "BaseLink",
  props: {
    text: { default: void 0 },
    to: null
  },
  setup(e) {
    return (t, a) => {
      const l = _("RouterLink");
      return u(), S(l, {
        to: e.to,
        class: f(s($).BASE_LINK)
      }, {
        default: q(() => [
          k(t.$slots, "default", {}, () => [
            w(y(e.text), 1)
          ])
        ]),
        _: 3
      }, 8, ["to", "class"]);
    };
  }
}), Se = {}, M = {
  DEVELOPMENT: "development",
  PRODUCTION: "production"
};
function qe() {
  const e = (n) => process.env.NODE_ENV === n;
  return {
    isEnv: e,
    isDev: () => e(M.DEVELOPMENT),
    isProd: () => e(M.PRODUCTION),
    isSSR: () => typeof window > "u"
  };
}
function tt() {
  const { isSSR: e } = qe(), t = C(!1), a = () => G.create({
    ...e() ? {
      httpsAgent: new Se.Agent({
        rejectUnauthorized: !1
      })
    } : {}
  });
  return {
    fetch: async (n) => {
      var d;
      let o = null, r = null;
      t.value = !0;
      try {
        o = await n(a());
      } catch (m) {
        r = m;
      }
      t.value = !1;
      const i = r ? (d = r == null ? void 0 : r.response) == null ? void 0 : d.data : o == null ? void 0 : o.data;
      return { response: o, exception: r, body: i };
    },
    fetching: t
  };
}
function we() {
  const e = (n) => a(n, document.cookie), t = (n, o, r = 30) => {
    let i = "";
    if (r) {
      const d = new Date();
      d.setTime(d.getTime() + r * 24 * 60 * 60 * 1e3), i = "; expires=" + d.toUTCString();
    }
    document.cookie = n + "=" + (o || "") + i + "; path=/";
  }, a = (n, o) => {
    const r = `${n}=`, i = o.split(";");
    for (let d = 0; d < i.length; d++) {
      let m = i[d];
      for (; m.charAt(0) == " "; )
        m = m.substring(1, m.length);
      if (m.indexOf(r) == 0)
        return m.substring(r.length, m.length);
    }
    return null;
  };
  return {
    setCookie: t,
    getCookie: e,
    parseCookie: a,
    deleteCookie: (n) => {
      document.cookie = n + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
  };
}
function nt(e = "app_settings") {
  const { getCookie: t, setCookie: a } = we(), l = C(null);
  return {
    consentCookie: l,
    createConsent: () => H({
      preferences: !1,
      marketing: !1,
      statistics: !1
    }),
    getConsentCookie: () => {
      const i = String(t(e));
      return l.value = i ? JSON.parse(i) : null;
    },
    setConsentCookie: (i) => {
      a(e, JSON.stringify(i)), l.value = i;
    }
  };
}
function at() {
  const e = (a) => Array.from(document.querySelectorAll(a) || []);
  return {
    getNodes: e,
    removeNodes: (a) => e(a).forEach((l) => l.remove())
  };
}
function st() {
  return {
    bootGoogleTagManager: () => {
      window.dataLayer = window.dataLayer || [];
    },
    pushData: (l) => {
      window.dataLayer.push(l);
    },
    trackPage: (l, n) => {
      window.dataLayer.push({
        event: "PageView",
        page_path: l,
        page_title: n
      });
    }
  };
}
function lt() {
  const e = C(!1), t = () => window.addEventListener("scroll", a), a = () => {
    e.value = window.scrollY > 100;
  }, l = (r = 0, i = "auto") => {
    window.scrollTo({
      top: r,
      left: 0,
      behavior: i
    });
  };
  return {
    scrolled: e,
    bootScroll: t,
    scrollTo: l,
    scrollToElement: (r, i = 0, d = "auto") => {
      const m = document.querySelector(r);
      m && P(() => {
        setTimeout(() => {
          l(m.getBoundingClientRect().top + window.scrollY - i, d);
        }, 0);
      });
    },
    scrollIntoView: (r) => {
      const i = document.querySelector(r);
      i && P(() => {
        setTimeout(() => {
          i.scrollIntoView({ behavior: "smooth" });
        }, 0);
      });
    }
  };
}
function ot() {
  const e = () => new Date().getTime() / 1e3, t = () => new Date().getFullYear(), a = () => new Date().getHours(), l = () => {
    const o = new Date(), r = o.getFullYear(), i = n(o.getMonth() + 1), d = n(o.getDate()), m = n(o.getHours()), p = n(o.getMinutes()), x = n(o.getSeconds());
    return `${r}-${i}-${d} ${m}:${p}:${x}`;
  }, n = (o) => o < 10 ? `0${o}` : `${o}`;
  return {
    microtime: e,
    currentYear: t,
    currentHour: a,
    timestamp: l
  };
}
export {
  Qe as BaseExternalLink,
  Ue as BaseHeading,
  Ze as BaseImage,
  je as BaseIntersectionImage,
  et as BaseLink,
  De as BaseText,
  Oe as CheckboxInput,
  Re as EmailInput,
  ze as FormBase,
  Ye as FormMessages,
  He as InputLabel,
  Pe as PerspectivePlane,
  Me as PerspectiveWrapper,
  Ge as PhoneNumberInput,
  Xe as SelectInput,
  Fe as SlantWrapper,
  Ke as SubmitInput,
  Je as TextInput,
  We as TextareaInput,
  Ae as TransitionFade,
  tt as useAxios,
  nt as useConsent,
  we as useCookie,
  at as useDOM,
  qe as useEnvironment,
  B as useFormInput,
  st as useGoogleTagManager,
  Be as useIntersectionObserver,
  lt as useScroll,
  ot as useTime
};
