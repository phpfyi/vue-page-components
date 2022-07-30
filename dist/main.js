import { defineComponent as m, computed as p, openBlock as r, createElementBlock as u, normalizeStyle as L, unref as n, renderSlot as k, createElementVNode as g, normalizeClass as c, createBlock as S, Transition as G, withCtx as q, resolveDynamicComponent as O, createTextVNode as w, toDisplayString as v, resolveComponent as y, createCommentVNode as $, createVNode as b, Fragment as A, renderList as R, mergeProps as D, ref as C, onMounted as X, onUnmounted as Y, reactive as P, nextTick as M } from "vue";
const we = /* @__PURE__ */ m({
  __name: "PerspectivePlane",
  props: {
    rotateX: { default: "0deg" },
    rotateY: { default: "0deg" },
    translateY: { default: "0px" },
    translateZ: { default: "0px" }
  },
  setup(e) {
    const t = e, l = p(() => ({
      transform: `
            rotateX(${t.rotateX}) 
            rotateY(${t.rotateY}) 
            translateY(${t.translateY}) 
            translateZ(${t.translateZ})`
    }));
    return (a, s) => (r(), u("div", {
      class: "perspective-plane",
      style: L(n(l))
    }, [
      k(a.$slots, "default")
    ], 4));
  }
}), H = { class: "perspective" }, Le = /* @__PURE__ */ m({
  __name: "PerspectiveWrapper",
  props: {
    size: { default: "0px" }
  },
  setup(e) {
    const t = e, l = p(() => ({
      height: t.size,
      width: t.size
    }));
    return (a, s) => (r(), u("div", H, [
      g("div", {
        class: "perspective__inner",
        style: L(n(l))
      }, [
        k(a.$slots, "default")
      ], 4)
    ]));
  }
}), Ve = /* @__PURE__ */ m({
  __name: "SlantWrapper",
  props: {
    height: null,
    top: { default: "-5px" },
    reverse: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, l = p(() => ({
      height: t.height,
      top: t.top
    })), a = p(() => ({
      "slant-wrapper-reverse": t.reverse
    }));
    return (s, i) => (r(), u("div", {
      class: c(["slant-wrapper", n(a)]),
      style: L(n(l))
    }, null, 6));
  }
}), K = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [a, s] of t)
    l[a] = s;
  return l;
}, W = {};
function J(e, t) {
  return r(), S(G, {
    name: "fade",
    mode: "out-in"
  }, {
    default: q(() => [
      k(e.$slots, "default")
    ]),
    _: 3
  });
}
const Pe = /* @__PURE__ */ K(W, [["render", J]]), N = {
  INPUT_ELEMENT: "form-element",
  INPUT: "input",
  HEADING: "h"
}, T = {
  BASE_HEADING: ["app-heading"],
  BASE_TEXT: ["app-text"],
  BASE_LINK: ["app-link"],
  BASE_EXTERNAL_LINK: ["app-link", "app-external-link"],
  INPUT_ELEMENT: ["form-element"],
  INPUT_INNER: ["form-element-inner"],
  INPUT: ["input"],
  INPUT_ERROR: ["input-error"],
  SUBMIT_INPUT: ["button"]
}, Me = /* @__PURE__ */ m({
  __name: "BaseHeading",
  props: {
    size: null,
    text: { default: void 0 }
  },
  setup(e) {
    const t = e, l = p(() => [...T.BASE_HEADING, a.value]), a = p(() => `${N.HEADING}${t.size}`);
    return (s, i) => (r(), S(O(n(a)), {
      class: c(n(l))
    }, {
      default: q(() => [
        k(s.$slots, "default", {}, () => [
          w(v(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ue = /* @__PURE__ */ m({
  __name: "BaseText",
  props: {
    tag: { default: "p" },
    text: { default: void 0 }
  },
  setup(e) {
    const t = p(() => T.BASE_TEXT);
    return (l, a) => (r(), S(O(e.tag), {
      class: c(n(t))
    }, {
      default: q(() => [
        k(l.$slots, "default", {}, () => [
          w(v(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
function B(e) {
  const t = p(() => e.name ? `${N.INPUT_ELEMENT}-${e.name}` : ""), l = p(() => e.id ? e.id : e.name ? `${N.INPUT}-${e.name}` : ""), a = p(
    () => T.INPUT_ELEMENT.concat([`${T.INPUT_ELEMENT}-${e.type}`])
  ), s = p(() => T.INPUT_INNER), i = p(() => [
    ...T.INPUT,
    ...e.type ? [`${N.INPUT}-${e.type}`] : [],
    ...(e.messages || []).length > 0 ? T.INPUT_ERROR : []
  ]), d = p(() => e.label !== !1 ? e.label ? String(e.label) : (e.name.charAt(0).toUpperCase() + e.name.slice(1)).replace("_", " ") : e.label);
  return {
    elementId: t,
    inputId: l,
    elementClasses: a,
    innerClasses: s,
    inputClasses: i,
    labelText: d
  };
}
const Z = ["id"], j = ["for"], Q = { class: "label-content" }, ee = {
  key: 0,
  class: "required"
}, te = ["id", "type", "name", "required", "readonly", "checked"], ne = /* @__PURE__ */ g("span", { class: "switch" }, null, -1), ae = /* @__PURE__ */ g("div", { class: "cl" }, null, -1), Fe = /* @__PURE__ */ m({
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
    const l = e, { elementId: a, inputId: s, elementClasses: i, innerClasses: d, inputClasses: o, labelText: h } = B(l), I = (f) => t("update:modelValue", Boolean(f.target.checked));
    return (f, x) => {
      const _ = y("FormMessages");
      return r(), u("div", {
        id: n(a),
        class: c(n(i))
      }, [
        g("div", {
          class: c(n(d))
        }, [
          n(h) ? (r(), u("label", {
            key: 0,
            for: n(s)
          }, [
            g("span", Q, v(n(h)), 1),
            e.required ? (r(), u("span", ee, " *")) : $("", !0),
            g("input", {
              id: n(s),
              type: e.type,
              name: e.name,
              class: c(n(o)),
              required: e.required,
              readonly: e.readonly,
              checked: e.modelValue,
              onInput: I
            }, null, 42, te),
            ne,
            ae
          ], 8, j)) : $("", !0),
          b(_, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, Z);
    };
  }
}), se = ["id"], le = ["id", "type", "name", "placeholder", "readonly", "required", "value"], oe = { key: 0 }, Oe = /* @__PURE__ */ m({
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
    const l = e, { elementId: a, inputId: s, elementClasses: i, innerClasses: d, inputClasses: o, labelText: h } = B(l), I = (f) => t("update:modelValue", f.target.value);
    return (f, x) => {
      const _ = y("InputLabel"), E = y("FormMessages");
      return r(), u("div", {
        id: n(a),
        class: c(n(i))
      }, [
        b(_, {
          id: n(s),
          label: n(h),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        g("div", {
          class: c(n(d))
        }, [
          g("input", {
            id: n(s),
            type: e.type,
            name: e.name,
            class: c(n(o)),
            placeholder: e.placeholder,
            readonly: e.readonly,
            required: e.required,
            value: e.modelValue,
            onInput: I
          }, null, 42, le),
          e.description ? (r(), u("i", oe, v(e.description), 1)) : $("", !0),
          b(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, se);
    };
  }
}), ie = ["id", "name", "action", "method", "novalidate"], Ae = /* @__PURE__ */ m({
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
    const l = e, a = (s) => {
      t("submit", s), l.guard && s.preventDefault();
    };
    return (s, i) => {
      const d = y("FormMessages");
      return r(), u("form", {
        id: e.id,
        name: e.name,
        action: e.action,
        method: e.method,
        class: "form",
        novalidate: e.novalidate,
        onSubmit: a
      }, [
        b(d, { messages: e.messages }, null, 8, ["messages"]),
        k(s.$slots, "default")
      ], 40, ie);
    };
  }
}), de = {
  key: 0,
  class: "form-messages input-error"
}, Re = /* @__PURE__ */ m({
  __name: "FormMessages",
  props: {
    messages: { default: () => [] }
  },
  setup(e) {
    return (t, l) => e.messages.length ? (r(), u("div", de, [
      (r(!0), u(A, null, R(e.messages, (a, s) => (r(), u("span", { key: s }, v(a), 1))), 128))
    ])) : $("", !0);
  }
}), re = ["for"], ue = { class: "label-content" }, ce = {
  key: 0,
  class: "required"
}, De = /* @__PURE__ */ m({
  __name: "InputLabel",
  props: {
    label: { type: [String, Boolean] },
    id: null,
    required: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, l) => e.label ? (r(), u("label", {
      key: 0,
      for: e.id
    }, [
      g("span", ue, v(e.label), 1),
      e.required ? (r(), u("span", ce, " *")) : $("", !0)
    ], 8, re)) : $("", !0);
  }
}), me = ["id"], fe = ["id", "type", "name", "placeholder", "readonly", "required", "value"], pe = { key: 0 }, ze = /* @__PURE__ */ m({
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
    const l = e, { elementId: a, inputId: s, elementClasses: i, innerClasses: d, inputClasses: o, labelText: h } = B(l), I = (f) => t("update:modelValue", f.target.value);
    return (f, x) => {
      const _ = y("InputLabel"), E = y("FormMessages");
      return r(), u("div", {
        id: n(a),
        class: c(n(i))
      }, [
        b(_, {
          id: n(s),
          label: n(h),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        g("div", {
          class: c(n(d))
        }, [
          g("input", {
            id: n(s),
            type: e.type,
            name: e.name,
            class: c(n(o)),
            placeholder: e.placeholder,
            readonly: e.readonly,
            required: e.required,
            value: e.modelValue,
            onInput: I
          }, null, 42, fe),
          e.description ? (r(), u("i", pe, v(e.description), 1)) : $("", !0),
          b(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, me);
    };
  }
}), ge = ["id"], he = ["id", "value", "name", "required", "readonly"], ve = {
  key: 0,
  disabled: "",
  value: ""
}, ye = ["value"], Ge = /* @__PURE__ */ m({
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
    const l = e, { elementId: a, inputId: s, elementClasses: i, innerClasses: d, inputClasses: o, labelText: h } = B(l), I = (f) => t("update:modelValue", f.target.value);
    return (f, x) => {
      const _ = y("InputLabel"), E = y("FormMessages");
      return r(), u("div", {
        id: n(a),
        class: c(n(i))
      }, [
        b(_, {
          id: n(s),
          label: n(h),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        g("div", {
          class: c(n(d))
        }, [
          g("select", {
            id: n(s),
            value: e.modelValue,
            name: e.name,
            class: c(n(o)),
            required: e.required,
            readonly: e.readonly,
            onInput: I
          }, [
            e.emptyOption ? (r(), u("option", ve, v(e.emptyOption), 1)) : $("", !0),
            (r(!0), u(A, null, R(e.options, (V, z) => (r(), u("option", {
              key: z,
              value: V.value
            }, v(V.title), 9, ye))), 128))
          ], 42, he),
          b(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, ge);
    };
  }
}), Ie = ["id", "type", "name", "value", "disabled"], Xe = /* @__PURE__ */ m({
  __name: "SubmitInput",
  props: {
    type: { default: "submit" },
    name: { default: void 0 },
    id: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    modelValue: { type: [String, Number, Boolean, Array], default: "Submit" }
  },
  setup(e) {
    const t = e, { inputId: l } = B(t), a = p(() => T.SUBMIT_INPUT);
    return (s, i) => (r(), u("input", {
      id: n(l),
      type: e.type,
      name: e.name,
      value: e.modelValue,
      class: c(n(a)),
      disabled: e.disabled
    }, null, 10, Ie));
  }
}), be = ["id"], _e = ["id", "name", "rows", "value", "placeholder", "required", "readonly"], Te = { key: 0 }, Ye = /* @__PURE__ */ m({
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
    const l = e, { elementId: a, inputId: s, elementClasses: i, innerClasses: d, inputClasses: o, labelText: h } = B(l), I = (f) => t("update:modelValue", f.target.value);
    return (f, x) => {
      const _ = y("InputLabel"), E = y("FormMessages");
      return r(), u("div", {
        id: n(a),
        class: c(n(i))
      }, [
        b(_, {
          id: n(s),
          label: n(h),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        g("div", {
          class: c(n(d))
        }, [
          g("textarea", {
            id: n(s),
            name: e.name,
            rows: e.rows,
            class: c(n(o)),
            value: e.modelValue,
            placeholder: e.placeholder,
            required: e.required,
            readonly: e.readonly,
            onInput: I
          }, null, 42, _e),
          e.description ? (r(), u("i", Te, v(e.description), 1)) : $("", !0),
          b(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, be);
    };
  }
}), $e = ["id"], Ee = ["id", "type", "name", "placeholder", "readonly", "required", "value"], ke = { key: 0 }, He = /* @__PURE__ */ m({
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
    const l = e, { elementId: a, inputId: s, elementClasses: i, innerClasses: d, inputClasses: o, labelText: h } = B(l), I = (f) => t("update:modelValue", f.target.value);
    return (f, x) => {
      const _ = y("InputLabel"), E = y("FormMessages");
      return r(), u("div", {
        id: n(a),
        class: c(n(i))
      }, [
        b(_, {
          id: n(s),
          label: n(h),
          required: e.required
        }, null, 8, ["id", "label", "required"]),
        g("div", {
          class: c(n(d))
        }, [
          g("input", {
            id: n(s),
            type: e.type,
            name: e.name,
            class: c(n(o)),
            placeholder: e.placeholder,
            readonly: e.readonly,
            required: e.required,
            value: e.modelValue,
            onInput: I
          }, null, 42, Ee),
          e.description ? (r(), u("i", ke, v(e.description), 1)) : $("", !0),
          b(E, { messages: e.messages }, null, 8, ["messages"])
        ], 2)
      ], 10, $e);
    };
  }
}), Be = ["src"], Ke = /* @__PURE__ */ m({
  __name: "BaseImage",
  props: {
    src: null,
    size: null,
    height: null,
    width: null
  },
  setup(e) {
    const t = e, l = p(() => ({
      height: t.height || t.size,
      width: t.width || t.size
    }));
    return (a, s) => (r(), u("img", D({ class: "app-image block" }, n(l), { src: e.src }), null, 16, Be));
  }
});
function xe(e) {
  const t = C(null), l = C(!1), a = () => {
    t.value = new IntersectionObserver((i) => {
      i[0].isIntersecting && (l.value = !0, s());
    }), t.value.observe(e.value);
  }, s = () => {
    var i;
    return (i = t.value) == null ? void 0 : i.disconnect();
  };
  return {
    observer: t,
    intersected: l,
    observe: a,
    unobserve: s
  };
}
const Ce = ["src"], We = /* @__PURE__ */ m({
  __name: "BaseIntersectionImage",
  props: {
    src: null,
    size: null,
    height: null,
    width: null
  },
  setup(e) {
    const t = e, l = C(null), { intersected: a, observe: s, unobserve: i } = xe(l), d = p(() => a.value ? t.src : ""), o = p(() => ({
      height: t.height || t.size,
      width: t.width || t.size
    }));
    return X(() => s()), Y(() => i()), (h, I) => (r(), u("img", D({
      ref_key: "image",
      ref: l,
      class: ["app-image block", { intersected: n(a) }]
    }, n(o), { src: n(d) }), null, 16, Ce));
  }
}), Ne = ["href", "target", "rel"], Je = /* @__PURE__ */ m({
  __name: "BaseExternalLink",
  props: {
    href: null,
    target: { default: "_blank" },
    rel: { default: "noopener" },
    text: { default: void 0 }
  },
  setup(e) {
    return (t, l) => (r(), u("a", {
      href: e.href,
      class: c(n(T).BASE_EXTERNAL_LINK),
      target: e.target,
      rel: e.rel
    }, [
      k(t.$slots, "default", {}, () => [
        w(v(e.text), 1)
      ])
    ], 10, Ne));
  }
}), Ze = /* @__PURE__ */ m({
  __name: "BaseLink",
  props: {
    text: { default: void 0 },
    to: null
  },
  setup(e) {
    return (t, l) => {
      const a = y("RouterLink");
      return r(), S(a, {
        to: e.to,
        class: c(n(T).BASE_LINK)
      }, {
        default: q(() => [
          k(t.$slots, "default", {}, () => [
            w(v(e.text), 1)
          ])
        ]),
        _: 3
      }, 8, ["to", "class"]);
    };
  }
});
function Se() {
  return {
    setCookie: (a, s, i = 30) => {
      let d = "";
      if (i) {
        const o = new Date();
        o.setTime(o.getTime() + i * 24 * 60 * 60 * 1e3), d = "; expires=" + o.toUTCString();
      }
      document.cookie = a + "=" + (s || "") + d + "; path=/";
    },
    getCookie: (a) => {
      const s = `${a}=`, i = document.cookie.split(";");
      for (let d = 0; d < i.length; d++) {
        let o = i[d];
        for (; o.charAt(0) == " "; )
          o = o.substring(1, o.length);
        if (o.indexOf(s) == 0)
          return o.substring(s.length, o.length);
      }
      return null;
    },
    deleteCookie: (a) => {
      document.cookie = a + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
  };
}
const U = "phpfyi_settings";
function je() {
  const { getCookie: e, setCookie: t } = Se();
  let l = P({
    preferences: !1,
    marketing: !1,
    statistics: !1
  });
  const a = C(!0), s = () => {
    const o = i();
    o ? l = P(o) : a.value = !1;
  }, i = () => {
    const o = String(e(U));
    return o ? JSON.parse(o) : null;
  };
  return {
    consent: l,
    consentLogged: a,
    bootConsent: s,
    getConsentCookie: i,
    setConsentCookie: (o) => {
      t(U, JSON.stringify(o)), a.value = !0;
    }
  };
}
const F = {
  DEVELOPMENT: "development",
  PRODUCTION: "production"
};
function Qe() {
  const e = (s) => process.env.NODE_ENV === s;
  return {
    isEnv: e,
    isDev: () => e(F.DEVELOPMENT),
    isProd: () => e(F.PRODUCTION),
    isSSR: () => typeof window > "u"
  };
}
function et() {
  return {
    bootGoogleTagManager: () => {
      window.dataLayer = window.dataLayer || [];
    },
    pushData: (a) => {
      window.dataLayer.push(a);
    },
    trackPage: (a, s) => {
      window.dataLayer.push({
        event: "PageView",
        page_path: a,
        page_title: s
      });
    }
  };
}
function tt() {
  const e = C(!1), t = () => window.addEventListener("scroll", l), l = () => {
    e.value = window.scrollY > 100;
  }, a = (d = 0) => {
    window.scrollTo({
      top: d,
      left: 0,
      behavior: "smooth"
    });
  };
  return {
    scrolled: e,
    bootScroll: t,
    scrollTo: a,
    scrollToElement: (d, o = 0) => {
      const h = document.querySelector(d);
      h && M(() => {
        setTimeout(() => {
          a(h.getBoundingClientRect().top + window.scrollY - o);
        }, 0);
      });
    },
    scrollIntoView: (d) => {
      const o = document.querySelector(d);
      o && M(() => {
        setTimeout(() => {
          o.scrollIntoView({ behavior: "smooth" });
        }, 0);
      });
    }
  };
}
export {
  Je as BaseExternalLink,
  Me as BaseHeading,
  Ke as BaseImage,
  We as BaseIntersectionImage,
  Ze as BaseLink,
  Ue as BaseText,
  Fe as CheckboxInput,
  Oe as EmailInput,
  Ae as FormBase,
  Re as FormMessages,
  De as InputLabel,
  we as PerspectivePlane,
  Le as PerspectiveWrapper,
  ze as PhoneNumberInput,
  Ge as SelectInput,
  Ve as SlantWrapper,
  Xe as SubmitInput,
  He as TextInput,
  Ye as TextareaInput,
  Pe as TransitionFade,
  je as useConsent,
  Se as useCookie,
  Qe as useEnvironment,
  B as useFormInput,
  et as useGoogleTagManager,
  xe as useIntersectionObserver,
  tt as useScroll
};
