/*
Copyright (c) NAVER Corp.
name: @obsidian/view3d
license: MIT
author: NAVER Corp.
repository: https://github.com/naver/egjs-view3d
version: 2.10.1
*/
import Component from '@egjs/component';
import { Vector3, Vector2, Vector4, Matrix4, LinearToneMapping, ReinhardToneMapping, CineonToneMapping, ACESFilmicToneMapping, WebGLRenderer, sRGBEncoding, Clock, TextureLoader as TextureLoader$1, FloatType, EquirectangularReflectionMapping, Group, WebGLRenderTarget, RGBAFormat, OrthographicCamera, Sphere, PlaneBufferGeometry, MeshBasicMaterial, BackSide, Mesh, MeshDepthMaterial, ShaderMaterial, Scene as Scene$1, PointLight, BoxBufferGeometry, MeshStandardMaterial, LinearEncoding, NoToneMapping, PMREMGenerator, WebGLCubeRenderTarget, CubeCamera, IcosahedronBufferGeometry, Color, PerspectiveCamera, AnimationClip, VectorKeyframeTrack, AnimationMixer, LoopOnce, LoopRepeat, Quaternion, Plane, Ray, Euler, CanvasTexture, PlaneGeometry, RingGeometry, Raycaster, Triangle, DoubleSide, MathUtils, FileLoader, Box3, DefaultLoadingManager, LoadingManager } from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { HorizontalBlurShader } from 'three/examples/jsm/shaders/HorizontalBlurShader';
import { VerticalBlurShader } from 'three/examples/jsm/shaders/VerticalBlurShader';
import { LightProbeGenerator } from 'three/examples/jsm/lights/LightProbeGenerator';
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
import { XREstimatedLight } from 'three/examples/jsm/webxr/XREstimatedLight';
import { GLTFLoader as GLTFLoader$1 } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import React, { useRef, useEffect } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".para-component{color:#639}";
styleInject(css_248z);

var css_248z$1 = ".view3d-annotation-wrapper{counter-reset:annotation-index;height:100%;left:0;overflow:hidden;pointer-events:none;position:absolute;top:0;width:100%}.view3d-annotation{cursor:pointer;opacity:0;pointer-events:all;position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.view3d-annotation.default{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:hsla(0,0%,100%,.8);border-radius:100%;-webkit-box-shadow:1px 1px 6px rgba(0,0,0,.3);box-shadow:1px 1px 6px rgba(0,0,0,.3);color:#000;counter-increment:annotation-index;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;font-weight:700;height:25px;justify-content:center;-webkit-transition:opacity .5s;transition:opacity .5s;width:25px}.view3d-annotation.default:before{content:counter(annotation-index)}.view3d-annotation.default .view3d-annotation-tooltip{left:35px;top:12px}.view3d-annotation.default.flip-y .view3d-annotation-tooltip{bottom:12px;top:auto}.view3d-annotation.default.flip-x .view3d-annotation-tooltip{left:auto;right:35px}.view3d-annotation>*{visibility:hidden}.view3d-annotation.hidden{display:none;pointer-events:none}.view3d-annotation.selected{opacity:1!important;z-index:9999!important}.view3d-annotation.selected>*{visibility:visible}.view3d-annotation-tooltip{cursor:auto;position:absolute;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;width:-webkit-max-content;width:-moz-max-content;width:max-content}.view3d-annotation-tooltip.default{background-color:rgba(0,0,0,.3);border-radius:10px;color:#fff;padding:10px}";
styleInject(css_248z$1);

var css_248z$2 = ".view3d-ar-overlay{height:100%;position:relative;width:100%}.view3d-ar-button,.view3d-ar-overlay{display:-webkit-box;display:-ms-flexbox;display:flex}.view3d-ar-button{fill:rgba(0,0,0,.7);background-color:#fff;border:1px solid #dbdbdb;border-radius:9999px;bottom:10px;padding:12px;position:absolute;right:10px}.view3d-ar-button:before{display:block;height:32px;width:32px}.view3d-ar-button:disabled{-webkit-box-shadow:none;box-shadow:none;cursor:not-allowed;opacity:.5;pointer-events:all}.view3d-ar-button .view3d-tooltip{background-color:#000;border-radius:6px;bottom:100%;color:#fff;font-size:16px;font-size:1rem;font-weight:700;line-height:1.5;padding:12px;position:absolute;right:0;text-align:center;visibility:hidden;white-space:nowrap;z-index:1}.view3d-ar-button .view3d-tooltip:after{border:5px solid transparent;border-top-color:#000;content:\" \";margin-left:-5px;position:absolute;right:23px;top:100%}.view3d-ar-button:hover .view3d-tooltip{visibility:visible}.view3d-ar-root{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;justify-content:center;left:0;pointer-events:none;top:0;width:100%}.view3d-ar-close,.view3d-ar-root{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute}.view3d-ar-close{cursor:pointer;left:10px;pointer-events:all;top:10px}.view3d-ar-detection{display:none;pointer-events:none;position:relative}.view3d-ar-detection-icon,.view3d-ar-detection.visible{display:-webkit-box;display:-ms-flexbox;display:flex}.view3d-ar-detection-icon{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;justify-content:center;-webkit-perspective:1000px;perspective:1000px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.view3d-ar-phone{-webkit-animation:view3d-detection-find 6s ease-in-out infinite;animation:view3d-detection-find 6s ease-in-out infinite;border:8px solid #fff;border-radius:10px;height:180px;position:absolute;width:100px}.view3d-ar-phone:after,.view3d-ar-phone:before{border-bottom:8px solid #fff;content:\"\";left:0;position:absolute;width:100%}.view3d-ar-phone:before{top:10px}.view3d-ar-phone:after{bottom:20px}.view3d-ar-cube{-webkit-animation:view3d-cube-spin 10s linear infinite;animation:view3d-cube-spin 10s linear infinite;-webkit-transform:rotateX(-30deg) rotateY(45deg);transform:rotateX(-30deg) rotateY(45deg);-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.view3d-ar-cube,.view3d-ar-cube-face{height:30px;position:absolute;width:30px}.view3d-ar-cube-face{-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.view3d-ar-cube-face:first-child{-webkit-transform:translateY(-16px) rotateX(90deg);transform:translateY(-16px) rotateX(90deg)}.view3d-ar-cube-face:nth-child(2){-webkit-transform:translateZ(16px);transform:translateZ(16px)}.view3d-ar-cube-face:nth-child(3){-webkit-transform:translateX(16px) rotateY(90deg);transform:translateX(16px) rotateY(90deg)}.view3d-ar-cube-face:nth-child(4){-webkit-transform:translateX(-16px) rotateY(-90deg);transform:translateX(-16px) rotateY(-90deg)}.view3d-ar-cube-face:nth-child(5){-webkit-transform:translateZ(-16px) rotateY(180deg);transform:translateZ(-16px) rotateY(180deg)}.view3d-ar-plane{border:10px solid #fff;height:300px;position:absolute;-webkit-transform:translateY(10px) rotateX(75deg) translateY(-40px);transform:translateY(10px) rotateX(75deg) translateY(-40px);-webkit-transform-style:preserve-3d;transform-style:preserve-3d;width:200px}.view3d-ar-detection-toast{background-color:rgba(0,0,0,.7);border-radius:10px;bottom:10px;color:#fff;left:10px;padding:16px;position:fixed;text-align:center;width:calc(100vw - 20px)}@-webkit-keyframes view3d-cube-spin{0%{-webkit-transform:rotateX(-30deg) rotateY(45deg);transform:rotateX(-30deg) rotateY(45deg)}50%{-webkit-transform:rotateX(-30deg) rotateY(225deg);transform:rotateX(-30deg) rotateY(225deg)}to{-webkit-transform:rotateX(-30deg) rotateY(405deg);transform:rotateX(-30deg) rotateY(405deg)}}@keyframes view3d-cube-spin{0%{-webkit-transform:rotateX(-30deg) rotateY(45deg);transform:rotateX(-30deg) rotateY(45deg)}50%{-webkit-transform:rotateX(-30deg) rotateY(225deg);transform:rotateX(-30deg) rotateY(225deg)}to{-webkit-transform:rotateX(-30deg) rotateY(405deg);transform:rotateX(-30deg) rotateY(405deg)}}@-webkit-keyframes view3d-detection-find{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}12.5%{-webkit-transform:translate3d(30px,0,0);transform:translate3d(30px,0,0)}25%{-webkit-transform:translateZ(0);transform:translateZ(0)}37.5%{-webkit-transform:translate3d(-30px,0,0);transform:translate3d(-30px,0,0)}50%{-webkit-transform:translateZ(0);transform:translateZ(0)}62.5%{-webkit-transform:translate3d(0,30px,0);transform:translate3d(0,30px,0)}75%{-webkit-transform:translateZ(0);transform:translateZ(0)}87.5%{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes view3d-detection-find{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}12.5%{-webkit-transform:translate3d(30px,0,0);transform:translate3d(30px,0,0)}25%{-webkit-transform:translateZ(0);transform:translateZ(0)}37.5%{-webkit-transform:translate3d(-30px,0,0);transform:translate3d(-30px,0,0)}50%{-webkit-transform:translateZ(0);transform:translateZ(0)}62.5%{-webkit-transform:translate3d(0,30px,0);transform:translate3d(0,30px,0)}75%{-webkit-transform:translateZ(0);transform:translateZ(0)}87.5%{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}";
styleInject(css_248z$2);

var css_248z$3 = "\\:root{--view3d-cb-primary:#fff;--view3d-cb-bg:rgba(0,0,0,.3);--view3d-cb-track:hsla(0,0%,90%,.4);--view3d-cb-thumb-bg:rgba(30,30,30,.4);--view3d-cb-thumb-text:hsla(0,0%,100%,.8)}.view3d-control-bar{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-user-drag:none;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-size:16px;left:0;opacity:0;padding:8px 12px;position:absolute;-webkit-transition:opacity .3s;transition:opacity .3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.view3d-control-bar.visible{opacity:1}@media (max-width:996px){.view3d-control-bar{opacity:1!important}}.view3d-controls-background{background:var(--view3d-cb-bg);bottom:0;height:100%;left:0;position:absolute;width:100%}.view3d-top-controls{margin-bottom:8px}.view3d-top-controls:empty{margin-bottom:0}.view3d-top-controls>.view3d-progress-bar{margin-top:8px}.view3d-side-controls{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:32px;position:relative}.view3d-left-controls,.view3d-side-controls{display:-webkit-box;display:-ms-flexbox;display:flex}.view3d-left-controls{-webkit-box-flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex:1;flex:1;text-overflow:ellipsis;white-space:nowrap}.view3d-left-controls:not(:only-child),.view3d-left-controls>:not(:last-child),.view3d-right-controls>:not(:last-child){margin-right:8px}.view3d-control-item{fill:var(--view3d-cb-primary);background-color:transparent;border:0;border-radius:16px;cursor:pointer;display:inline-block;height:100%;margin:0;padding:0;position:relative}.view3d-control-item>svg{height:24px;margin:4px;width:24px}.view3d-control-item.disabled{display:none}.view3d-control-item:not(:first-child){margin-left:1em}.view3d-control-item:hover{background-color:rgba(0,0,0,.3)}.view3d-progress-bar{-webkit-box-flex:1;cursor:pointer;-ms-flex:1;flex:1;height:13px;pointer-events:all;position:relative;width:100%}.view3d-progress-track{background-color:var(--view3d-cb-track);height:3px;left:0;position:absolute;top:5px;width:100%}.view3d-progress-filler{background-color:var(--view3d-cb-primary);height:100%;left:0;position:absolute;top:0;width:0}.view3d-progress-thumb{background-color:var(--view3d-cb-primary);border-radius:50%;height:13px;left:-6.5px;top:-5px;width:13px}.view3d-progress-thumb,.view3d-progress-thumb:before{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute}.view3d-progress-thumb:before{background-color:var(--view3d-cb-thumb-bg);border-radius:5px;color:var(--view3d-cb-thumb-text);content:attr(data-time);display:inline-block;font-size:12px;left:50%;opacity:0;padding:4px 8px;top:-48px;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}.view3d-progress-thumb.visible:before{opacity:1}.view3d-animation-name{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--view3d-cb-primary);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:100%;padding-left:12px;padding-right:24px;position:relative}.view3d-animation-name:after{border:4px solid transparent;border-top:4px solid var(--view3d-cb-primary);content:\"\";display:inline-block;height:0;position:absolute;right:12px;top:50%;width:0}.view3d-animation-list{background-color:rgba(0,0,0,.3);border-radius:5px;bottom:calc(100% + 5px);display:none;left:0;padding:.5em;position:absolute}.view3d-animation-list.visible{display:block}.view3d-animation-item{border-radius:5px;color:var(--view3d-cb-primary);height:100%;padding:0 1em;position:relative}.view3d-animation-item.selected{font-weight:700}.view3d-animation-item.selected:before{background-color:var(--view3d-cb-primary);border-radius:50%;content:\"\";height:4px;left:6px;position:absolute;top:calc(50% - 2px);width:4px}.view3d-animation-item:hover{background-color:hsla(0,0%,100%,.3)}.view3d-gizmo{height:120px;margin:0;overflow:hidden;padding:0;pointer-events:none;position:absolute;right:10px;top:10px;width:120px}.view3d-gizmo>canvas{height:100%;width:100%}.view3d-gizmo .view3d-gizmo-axis{cursor:pointer;height:20px;pointer-events:all;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:20px}";
styleInject(css_248z$3);

var css_248z$4 = ".view3d-lb-overlay{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.view3d-lb-overlay.is-top,.view3d-lb-overlay.type-top{background-color:transparent!important;height:auto}.view3d-lb-overlay.is-top .view3d-lb-label,.view3d-lb-overlay.type-top .view3d-lb-label{display:none}.view3d-lb-overlay.is-top .view3d-lb-base,.view3d-lb-overlay.type-top .view3d-lb-base{border-radius:0;margin-left:0;width:100%}.view3d-lb-wrapper{position:relative;width:100%}.view3d-lb-base{border-radius:9999px;margin-bottom:5px;margin-left:auto;margin-right:auto;overflow:hidden;position:relative}.view3d-lb-base.is-spinner,.view3d-lb-base.type-spinner{background-color:transparent;height:0;-webkit-transition:all .5s;transition:all .5s}.view3d-lb-base.is-spinner .view3d-lb-filler,.view3d-lb-base.type-spinner .view3d-lb-filler{-webkit-animation:view3d-lb-spin 1.2s linear infinite;animation:view3d-lb-spin 1.2s linear infinite;background-color:transparent;border-style:solid;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}.view3d-lb-filler{border-radius:9999px;height:100%;left:0;position:absolute;top:0;width:0}.view3d-lb-label{text-align:center}@-webkit-keyframes view3d-lb-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes view3d-lb-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}";
styleInject(css_248z$4);

var css_248z$5 = ".view3d-wrapper{position:relative;-ms-touch-action:pan-y;touch-action:pan-y}.view3d-wrapper:-webkit-full-screen{height:100vh;padding:0;width:100vw}.view3d-wrapper:-moz-full-screen{height:100vh;padding:0;width:100vw}.view3d-wrapper:-ms-fullscreen{height:100vh;padding:0;width:100vw}.view3d-wrapper:fullscreen{height:100vh;padding:0;width:100vw}.view3d-canvas{-webkit-user-drag:none;height:100%;left:0;position:absolute;top:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.view3d-canvas.ctx-lost{text-indent:.001px}.view3d-1by1,.view3d-square{padding-top:100%}.view3d-5by4{padding-top:80%}.view3d-4by3{padding-top:75%}.view3d-3by2{padding-top:66.6666%}.view3d-5by3{padding-top:60%}.view3d-16by9{padding-top:56.25%}.view3d-2by1{padding-top:50%}.view3d-3by1{padding-top:33.3333%}.view3d-4by5{padding-top:125%}.view3d-3by4{padding-top:133.3333%}.view3d-2by3{padding-top:150%}.view3d-3by5{padding-top:166.6666%}.view3d-9by16{padding-top:177.7777%}.view3d-1by2{padding-top:200%}.view3d-1by3{padding-top:300%}.view3d-poster{filter:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feGaussianBlur stdDeviation=\"16\" /></filter></svg>#filter');-webkit-filter:blur(1em);filter:blur(1em);height:100%;left:0;-o-object-fit:cover;object-fit:cover;position:absolute;top:0;width:100%}.noblur .view3d-poster{-webkit-filter:none;filter:none}";
styleInject(css_248z$5);

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Error thrown by View3D
 */
class View3DError extends Error {
  /**
   * Create new instance of View3DError
   * @param {string} message Error message
   * @param {number} code Error code, see {@link ERROR_CODES}
   */
  constructor(message, code) {
    super(message);
    Object.setPrototypeOf(this, View3DError.prototype);
    this.name = "View3DError";
    this.code = code;
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Error codes of {@link View3DError}
 * @type object
 * @property {0} WRONG_TYPE The given value's type is not expected
 * @property {1} ELEMENT_NOT_FOUND The element with given CSS selector does not exist
 * @property {2} CANVAS_NOT_FOUND The element given is not a \<canvas\> element
 * @property {3} WEBGL_NOT_SUPPORTED The browser does not support WebGL
 * @property {4} PROVIDE_SRC_FIRST `init()` is called before setting `src`
 * @property {5} FILE_NOT_SUPPORTED The given file is not supported
 * @property {6} NOT_INITIALIZED The action is called before the component is initialized
 * @property {7} MODEL_FAIL_TO_LOAD The 3D model failed to load
 */
const ERROR_CODES = {
  WRONG_TYPE: 0,
  ELEMENT_NOT_FOUND: 1,
  CANVAS_NOT_FOUND: 2,
  WEBGL_NOT_SUPPORTED: 3,
  PROVIDE_SRC_FIRST: 4,
  FILE_NOT_SUPPORTED: 5,
  NOT_INITIALIZED: 6,
  MODEL_FAIL_TO_LOAD: 7
};
const MESSAGES = {
  WRONG_TYPE: (val, types) => `${typeof val} is not a ${types.map(type => `"${type}"`).join(" or ")}.`,
  ELEMENT_NOT_FOUND: query => `Element with selector "${query}" not found.`,
  CANVAS_NOT_FOUND: "The canvas element was not found inside the given root element.",
  WEBGL_NOT_SUPPORTED: "WebGL is not supported on this browser.",
  PROVIDE_SRC_FIRST: "\"src\" should be provided before initialization.",
  FILE_NOT_SUPPORTED: src => `Given file "${src}" is not supported.`,
  NOT_INITIALIZED: "View3D is not initialized yet.",
  MODEL_FAIL_TO_LOAD: url => `Failed to load/parse the 3D model with the given url: "${url}". Check "loadError" event for actual error instance.`
};
var ERROR = {
  CODES: ERROR_CODES,
  MESSAGES
};

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
const isNumber = val => typeof val === "number";
const isString = val => typeof val === "string";
const isElement = val => !!val && val.nodeType === Node.ELEMENT_NODE;
const getNullableElement = (el, parent) => {
  let targetEl = null;
  if (isString(el)) {
    const parentEl = parent ? parent : document;
    const queryResult = parentEl.querySelector(el);
    if (!queryResult) {
      return null;
    }
    targetEl = queryResult;
  } else if (isElement(el)) {
    targetEl = el;
  }
  return targetEl;
};
const getElement = (el, parent) => {
  const targetEl = getNullableElement(el, parent);
  if (!targetEl) {
    if (isString(el)) {
      throw new View3DError(ERROR.MESSAGES.ELEMENT_NOT_FOUND(el), ERROR.CODES.ELEMENT_NOT_FOUND);
    } else {
      throw new View3DError(ERROR.MESSAGES.WRONG_TYPE(el, ["HTMLElement", "string"]), ERROR.CODES.WRONG_TYPE);
    }
  }
  return targetEl;
};
const findCanvas = (root, selector) => {
  const canvas = root.querySelector(selector);
  if (!canvas) {
    throw new View3DError(ERROR.MESSAGES.CANVAS_NOT_FOUND, ERROR.CODES.CANVAS_NOT_FOUND);
  }
  return canvas;
};
const isCSSSelector = val => {
  if (!isString(val)) return false;
  const dummyEl = document.createDocumentFragment();
  try {
    dummyEl.querySelector(val);
  } catch (_a) {
    return false;
  }
  return true;
};
const range = end => {
  if (!end || end <= 0) {
    return [];
  }
  return Array.apply(0, Array(end)).map((undef, idx) => idx);
};
const toRadian = x => x * Math.PI / 180;
const toDegree = x => x * 180 / Math.PI;
const clamp = (x, min, max) => Math.max(Math.min(x, max), min);
// Linear interpolation between a and b
const lerp = (a, b, t) => {
  return a * (1 - t) + b * t;
};
const circulate = (val, min, max) => {
  const size = Math.abs(max - min);
  if (val < min) {
    const offset = (min - val) % size;
    val = max - offset;
  } else if (val > max) {
    const offset = (val - max) % size;
    val = min + offset;
  }
  return val;
};
// eslint-disable-next-line @typescript-eslint/ban-types
const merge = (target, ...srcs) => {
  srcs.forEach(source => {
    Object.keys(source).forEach(key => {
      const value = source[key];
      if (Array.isArray(target[key]) && Array.isArray(value)) {
        target[key] = [...target[key], ...value];
      } else {
        target[key] = value;
      }
    });
  });
  return target;
};
const getBoxPoints = box => {
  return [box.min.clone(), new Vector3(box.min.x, box.min.y, box.max.z), new Vector3(box.min.x, box.max.y, box.min.z), new Vector3(box.min.x, box.max.y, box.max.z), new Vector3(box.max.x, box.min.y, box.min.z), new Vector3(box.max.x, box.min.y, box.max.z), new Vector3(box.max.x, box.max.y, box.min.z), box.max.clone()];
};
const toPowerOfTwo = val => {
  let result = 1;
  while (result < val) {
    result *= 2;
  }
  return result;
};
const getPrimaryAxisIndex = (basis, viewDir) => {
  let primaryIdx = 0;
  let maxDot = 0;
  basis.forEach((axes, axesIdx) => {
    const dotProduct = Math.abs(viewDir.dot(axes));
    if (dotProduct > maxDot) {
      primaryIdx = axesIdx;
      maxDot = dotProduct;
    }
  });
  return primaryIdx;
};
// In radian
const getRotationAngle = (center, v1, v2) => {
  const centerToV1 = new Vector2().subVectors(v1, center).normalize();
  const centerToV2 = new Vector2().subVectors(v2, center).normalize();
  // Get the rotation angle with the model's NDC coordinates as the center.
  const deg = centerToV2.angle() - centerToV1.angle();
  const compDeg = -Math.sign(deg) * (2 * Math.PI - Math.abs(deg));
  // Take the smaller deg
  const rotationAngle = Math.abs(deg) < Math.abs(compDeg) ? deg : compDeg;
  return rotationAngle;
};
const getObjectOption = val => typeof val === "object" ? val : {};
const toBooleanString = val => val ? "true" : "false";
const getRotatedPosition = (distance, yawDeg, pitchDeg) => {
  const yaw = toRadian(yawDeg);
  const pitch = toRadian(pitchDeg);
  const newPos = new Vector3(0, 0, 0);
  newPos.y = distance * Math.sin(pitch);
  newPos.z = distance * Math.cos(pitch);
  newPos.x = newPos.z * Math.sin(-yaw);
  newPos.z = newPos.z * Math.cos(-yaw);
  return newPos;
};
// In Radians
const directionToYawPitch = direction => {
  const xz = new Vector2(direction.x, direction.z);
  const origin = new Vector2();
  const yaw = Math.abs(direction.y) <= 0.99 ? getRotationAngle(origin, new Vector2(0, 1), xz) : 0;
  const pitch = Math.atan2(direction.y, xz.distanceTo(origin));
  return {
    yaw,
    pitch
  };
};
const createLoadingContext = (view3D, src) => {
  const context = {
    src,
    loaded: 0,
    total: 0,
    lengthComputable: false,
    initialized: false
  };
  view3D.loadingContext.push(context);
  return context;
};
const getAttributeScale = attrib => {
  if (attrib.normalized && ArrayBuffer.isView(attrib.array)) {
    const buffer = attrib.array;
    const isSigned = isSignedArrayBuffer(buffer);
    const scale = 1 / (Math.pow(2, 8 * buffer.BYTES_PER_ELEMENT) - 1);
    return isSigned ? scale * 2 : scale;
  } else {
    return 1;
  }
};
const getSkinnedVertex = (posIdx, mesh, positionScale, skinWeightScale) => {
  const geometry = mesh.geometry;
  const positions = geometry.attributes.position;
  const skinIndicies = geometry.attributes.skinIndex;
  const skinWeights = geometry.attributes.skinWeight;
  const skeleton = mesh.skeleton;
  const boneMatricies = skeleton.boneMatrices;
  const pos = new Vector3().fromBufferAttribute(positions, posIdx).multiplyScalar(positionScale);
  const skinned = new Vector4(0, 0, 0, 0);
  const skinVertex = new Vector4(pos.x, pos.y, pos.z).applyMatrix4(mesh.bindMatrix);
  const weights = [skinWeights.getX(posIdx), skinWeights.getY(posIdx), skinWeights.getZ(posIdx), skinWeights.getW(posIdx)].map(weight => weight * skinWeightScale);
  const indicies = [skinIndicies.getX(posIdx), skinIndicies.getY(posIdx), skinIndicies.getZ(posIdx), skinIndicies.getW(posIdx)];
  weights.forEach((weight, index) => {
    const boneMatrix = new Matrix4().fromArray(boneMatricies, indicies[index] * 16);
    skinned.add(skinVertex.clone().applyMatrix4(boneMatrix).multiplyScalar(weight));
  });
  const transformed = new Vector3().fromArray(skinned.applyMatrix4(mesh.bindMatrixInverse).toArray());
  transformed.applyMatrix4(mesh.matrixWorld);
  return transformed;
};
const isSignedArrayBuffer = buffer => {
  const testBuffer = new buffer.constructor(1);
  testBuffer[0] = -1;
  return testBuffer[0] < 0;
};
const checkHalfFloatAvailable = renderer => {
  if (renderer.capabilities.isWebGL2) {
    return true;
  } else {
    const gl = renderer.getContext();
    const texture = gl.createTexture();
    let available = true;
    try {
      const data = new Uint16Array(4);
      const ext = gl.getExtension("OES_texture_half_float");
      if (!ext) {
        available = false;
      } else {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, ext.HALF_FLOAT_OES, data);
        const err = gl.getError();
        available = err === gl.NO_ERROR;
      }
    } catch (err) {
      available = false;
    }
    gl.deleteTexture(texture);
    return available;
  }
};
const getFaceVertices = (model, meshIndex, faceIndex) => {
  var _a;
  if (!model || meshIndex < 0 || faceIndex < 0) return null;
  const mesh = model.meshes[meshIndex];
  const indexes = (_a = mesh === null || mesh === void 0 ? void 0 : mesh.geometry.index) === null || _a === void 0 ? void 0 : _a.array;
  const face = indexes ? range(3).map(idx => indexes[3 * faceIndex + idx]) : null;
  if (!mesh || !indexes || !face || face.some(val => val == null)) return null;
  const position = mesh.geometry.getAttribute("position");
  const vertices = face.map(index => {
    return new Vector3().fromBufferAttribute(position, index);
  });
  return vertices;
};
const getAnimatedFace = (model, meshIndex, faceIndex) => {
  const vertices = getFaceVertices(model, meshIndex, faceIndex);
  if (!vertices) return null;
  const mesh = model.meshes[meshIndex];
  const indexes = mesh.geometry.getIndex();
  const face = indexes.array.slice(3 * faceIndex, 3 * faceIndex + 3);
  if (mesh.isSkinnedMesh) {
    const geometry = mesh.geometry;
    const positions = geometry.attributes.position;
    const skinWeights = geometry.attributes.skinWeight;
    const positionScale = getAttributeScale(positions);
    const skinWeightScale = getAttributeScale(skinWeights);
    vertices.forEach((vertex, idx) => {
      const posIdx = face[idx];
      const transformed = getSkinnedVertex(posIdx, mesh, positionScale, skinWeightScale);
      vertex.copy(transformed);
    });
  } else {
    vertices.forEach(vertex => {
      vertex.applyMatrix4(mesh.matrixWorld);
    });
  }
  return vertices;
};
const subclip = (sourceClip, name, startTime, endTime) => {
  const clip = sourceClip.clone();
  clip.name = name;
  const tracks = [];
  clip.tracks.forEach(track => {
    const valueSize = track.getValueSize();
    const times = [];
    const values = [];
    for (let timeIdx = 0; timeIdx < track.times.length; ++timeIdx) {
      const time = track.times[timeIdx];
      const nextTime = track.times[timeIdx + 1];
      const prevTime = track.times[timeIdx - 1];
      const isPrevFrame = nextTime && time < startTime && nextTime > startTime;
      const isMiddleFrame = time >= startTime && time < endTime;
      const isNextFrame = prevTime && time >= endTime && prevTime < endTime;
      if (!isPrevFrame && !isMiddleFrame && !isNextFrame) continue;
      times.push(time);
      for (let k = 0; k < valueSize; ++k) {
        values.push(track.values[timeIdx * valueSize + k]);
      }
    }
    if (times.length === 0) return;
    track.times = convertArray(times, track.times.constructor);
    track.values = convertArray(values, track.values.constructor);
    tracks.push(track);
  });
  clip.tracks = tracks;
  for (let i = 0; i < clip.tracks.length; ++i) {
    clip.tracks[i].shift(-startTime);
  }
  clip.duration = endTime - startTime;
  return clip;
};
/**
 * OBSIDIAN:Converts Canvas to Image URL
 * @param view3D
 * @param fileName
 * @returns
 */
const screenshotImageUrl = (view3D, fileName = "screenshot") => {
  if (view3D.model) {
    view3D.camera.fit(view3D.model);
    view3D.renderer.renderSingleFrame(true);
  }
  const canvas = view3D.renderer.canvas;
  const imgURL = canvas.toDataURL("png");
  return imgURL;
};
// From three.js AnimationUtils
// https://github.com/mrdoob/three.js/blob/68daccedef9c9c325cc5f4c929fcaf05229aa1b3/src/animation/AnimationUtils.js#L20
// The MIT License
// Copyright © 2010-2022 three.js authors
const convertArray = (array, type, forceClone = false) => {
  if (!array ||
  // let 'undefined' and 'null' pass
  !forceClone && array.constructor === type) return array;
  if (typeof type.BYTES_PER_ELEMENT === "number") {
    return new type(array); // create typed array
  }

  return Array.prototype.slice.call(array); // create Array
};

const parseAsBboxRatio = (arr, bbox) => {
  const min = bbox.min.toArray();
  const size = new Vector3().subVectors(bbox.max, bbox.min).toArray();
  return new Vector3().fromArray(arr.map((val, idx) => {
    if (!isString(val)) return val;
    const ratio = parseFloat(val) * 0.01;
    return min[idx] + ratio * size[idx];
  }));
};
const rawGLTF = () => {
  //Scene with nothing
  const rawGLTF = '{ "asset": { "version": "2.0", "generator": "THREE.GLTFExporter" }, "scenes": [ { "name": "Scene", "nodes": [ 0 ] } ], "scene": 0, "nodes": [ { "name": "Plane", "mesh": 0 } ], "bufferViews": [ { "buffer": 0, "byteOffset": 0, "byteLength": 48, "target": 34962, "byteStride": 12 }, { "buffer": 0, "byteOffset": 48, "byteLength": 48, "target": 34962, "byteStride": 12 }, { "buffer": 0, "byteOffset": 96, "byteLength": 32, "target": 34962, "byteStride": 8 }, { "buffer": 0, "byteOffset": 128, "byteLength": 12, "target": 34963 } ], "buffers": [ { "byteLength": 140, "uri": "data:application/octet-stream;base64,AAAAvwAAAD8AAAAAAAAAPwAAAD8AAAAAAAAAvwAAAL8AAAAAAAAAPwAAAL8AAAAAAAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAgD8AAIA/AACAPwAAAAAAAAAAAACAPwAAAAAAAAIAAQACAAMAAQA=" } ], "accessors": [ { "bufferView": 0, "componentType": 5126, "count": 4, "max": [ 0.5, 0.5, 0 ], "min": [ -0.5, -0.5, 0 ], "type": "VEC3" }, { "bufferView": 1, "componentType": 5126, "count": 4, "max": [ 0, 0, 1 ], "min": [ 0, 0, 1 ], "type": "VEC3" }, { "bufferView": 2, "componentType": 5126, "count": 4, "max": [ 1, 1 ], "min": [ 0, 0 ], "type": "VEC2" }, { "bufferView": 3, "componentType": 5123, "count": 6, "max": [ 3 ], "min": [ 0 ], "type": "SCALAR" } ], "materials": [ { "pbrMetallicRoughness": { "metallicFactor": 0, "roughnessFactor": 1, "baseColorTexture": { "index": 0, "texCoord": 0 } }, "emissiveFactor": [ 1, 1, 1 ], "alphaMode": "BLEND", "doubleSided": true, "extensions": { "KHR_materials_emissive_strength": { "emissiveStrength": 0 } } } ], "textures": [ { "sampler": 0, "source": 0 } ], "samplers": [ { "magFilter": 9729, "minFilter": 9987, "wrapS": 33071, "wrapT": 33071 } ], "images": [ { "mimeType": "image/png", "uri": "data:image/png;base64,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BAgQINB9AQF692eoAwIECBAgQIAAgSkKrIz2Nutc/cW3zKeI6lUECBAgQIBA6wROT6dXqf7Po+HGbusKVBABAgQIECBAgACBBQkI0BcEb1kCBAgQIECAAIF2CJw9ZZ6i/iJFWm5HZaogQIAAAQIECMxHIEc+yVH9Hin/Grl6PR6uHs9nZasQIECAAAECBAgQaJ+AAL19M1ERAQIECBAgQIDAjAVczT5jYK8nQIAAAQIEOi3gqvdOj0/xBAgQIECAAAECNxQQoN8Q0M8JECBAgAABAgS6IdBczf4+Vaspx7cpYr0bVauSAAECBAgQILBYgeaq95zih6VcH7rqfbGzsDoBAgQIECBAgMB8BATo83G2CgECBAgQIECAwAIEfM98AeiWJECAAAECBHor4LvpvR2txggQIECAAAECBM4ICNBtBwIECBAgQIAAgV4JDF4ePIic/uZ75r0aq2YIECBAgACBlgmc/W76eHttp2XlKYcAAQIECBAgQIDAtQUE6Nem80MCBAgQIECAAIG2CAjN2zIJdRAgQIAAAQIlCgjTS5y6ngkQIECAAAEC/RUQoPd3tjojQIAAAQIECPRWYDA6vBWpvtecNK8ib/W2UY0RIECAAAECBDooUEd6FSn/Grl6PR6uHnewBSUTIECAAAECBAgULCBAL3j4WidAgAABAgQIdElAaN6laamVAAECBAgQIPBBQJhuJxAgQIAAAQIECHRNQIDetYmplwABAgQIECBQkIDQvKBha5UAAQIECBDovYAwvfcj1iABAgQIECBAoBcCAvRejFETBAgQIECAAIH+CAjN+zNLnRAgQIAAAQIELhIQptsbBAgQIECAAAECbRUQoLd1MuoiQIAAAQIECBQkIDQvaNhaJUCAAAECBAicExCm2xIECBAgQIAAAQJtEhCgt2kaaiFAgAABAgQIFCQgNC9o2FolQIAAAQIECEwoIEyfEMpjBAgQIECAAAECMxMQoM+M1osJECBAgAABAgQ+JTB4efAgcvpbivqLFGmZEgECBAgQIECAAIHzAjnySY7q90j51/H22g4hAgQIECBAgAABAvMSEKDPS9o6BAgQIECAAIGCBYTmBQ9f6wQIECBAgACBGwoI028I6OcECBAgQIAAAQJXEhCgX4nLwwQIECBAgAABApMKrIz2Nutc/SVS/DVFrE/6O88RIECAAAECBAgQuEggR+xHjn9Wqf7Po+HGLikCBAgQIECAAAEC0xYQoE9b1PsIECBAgAABAgULNN81T7n+Wmhe8CbQOgECBAgQIEBgTgKnYXpO1U/j4erxnJa1DAECBAgQIECAQM8FBOg9H7D2CBAgQIAAAQKzFmhC80j1vZTjWyfNZ63t/QQIECBAgAABAp8SaML0nOKHyNVrYbo9QoAAAQIECBAgcBMBAfpN9PyWAAECBAgQIFCwwOl3zavIWwUzaJ0AAQIECBAgQKBlAnWkV5Hyr+PttZ2WlaYcAgQIECBAgACBDggI0DswJCUSIECAAAECBNoi0HzX/H0sfZOi/iJFWm5LXeogQIAAAQIECBAgcF4gRz7JUf2+FO9/9L10+4MAAQIECBAgQGBSAQH6pFKeI0CAAAECBAgUKuC75oUOXtsECBAgQIAAgR4J+F56j4apFQIECBAgQIDAjAUE6DMG9noCBAgQIECAQBcFfNe8i1NTMwECBAgQIECAwCQCvpc+iZJnCBAgQIAAAQLlCgjQy529zgkQIECAAAECfxLwXXObggABAgQIECBAoCQB30svadp6JUCAAAECBAhMJiBAn8zJUwQIECBAgACB3gq4or23o9UYAQIECBAgQIDAhAKueJ8QymMECBAgQIAAgQIEBOgFDFmLBAgQIECAAIHzAqdXtEdOf6sibxEiQIAAAQIECBAgQOCDwOmp9MjV6/Fw9ZgLAQIECBAgQIBAWQIC9LLmrVsCBAgQIECgcIGV0d7m+1j6JkX9RYq0XDiH9gkQIECAAAECBAhcKJAjn+Sofl+K9z8eDTd2UREgQIAAAQIECJQhIEAvY866JECAAAECBAoWOD1tnnJ8myLWC6bQOgECBAgQIECAAIFrCTRXvOcUPziVfi0+PyJAgAABAgQIdEpAgN6pcSmWAAECBAgQIDC5wODlwQNXtE/u5UkCBAgQIECAAAECkwicXvE+3l7bmeR5zxAgQIAAAQIECHRLQIDerXmplgABAgQIECDwWYHmtHnK9deR4q9Om9ssBAgQIECAAAECBGYn0JxKjxz/zKn6ybfSZ+fszQQIECBAgACBeQsI0Octbj0CBAgQIECAwAwEnDafAapXEiBAgAABAgQIEJhQwKn0CaE8RoAAAQIECBDogIAAvQNDUiIBAgQIECBA4FMCTpvbFwQIECBAgAABAgTaJeBUervmoRoCBAgQIECAwHUEBOjXUfMbAgQIECBAgMACBZw2XyC+pQkQIECAAAECBAhMKOBU+oRQHiNAgAABAgQItExAgN6ygSiHAAECBAgQIPApAafN7QsCBAgQIECAAAEC3RRwKr2bc1M1AQIECBAgUK6AAL3c2eucAAECBAgQ6IDAymhv830sfVNF3upAuUokQIAAAQIECBAgQOAzAs2p9KV4/+PRcGMXFAECBAgQIECAQDsFBOjtnIuqCBAgQIAAgYIFmtPmkep7Kce3KWK9YAqtEyBAgAABAgQIEOilQHMqPaf4IXL1ejxcPe5lk5oiQIAAAQIECHRUQIDe0cEpmwABAgQIEOifwB/BeeTnKeovUqTl/nWoIwIECBAgQIAAAQIEzgrkyCc5qt8j0iNBur1BgAABAgQIEGiHgAC9HXNQBQECBAgQIFCwwODlwYPI6W+uaS94E2idAAECBAgQIECgeIHmevdI+dfx9tpO8RgACBAgQIAAAQILFBCgLxDf0gQIECBAgEC5As1p85TrryPFX13TXu4+0DkBAgQIECBAgACB8wLN9e6R4585VT85lW5/ECBAgAABAgTmLyBAn7+5FQkQIECAAIGCBVZGe5vvY+kbp80L3gRaJ0CAAAECBAgQIDChQHMqfSne/3g03Nid8CceI0CAAAECBAgQuKGAAP2GgH5OgAABAgQIEJhEoLmmPeX41mnzSbQ8Q4AAAQIECBAgQIDAWYHmVHpO8YPr3e0LAgQIECBAgMDsBQTosze2AgECBAgQIFCogGvaCx28tgkQIECAAAECBAjMSMD17jOC9VoCBAgQIECAwBkBAbrtQIAAAQIECBCYsoBr2qcM6nUECBAgQIAAAQIECPxJwPXuNgUBAgQIECBAYDYCAvTZuHorAQIECBAgUKBAc0175PQ33zcvcPhaJkCAAAECBAgQILAggSZIj5R/db37ggZgWQIECBAgQKB3AgL03o1UQwQIECBAgMA8BZpr2iPV93zffJ7q1iJAgAABAgQIECBA4LzA6XfSI1evx8PVY0IECBAgQIAAAQLXExCgX8/NrwgQIECAAIHCBf71ffP89xRpuXAO7RMgQIAAAQIECBAg0BKBHPkkcvpHTtVPgvSWDEUZBAgQIECAQKcEBOidGpdiCRAgQIAAgUUL+L75oidgfQIECBAgQIAAAQIEJhXwnfRJpTxHgAABAgQIEPiXgADdbiBAgAABAgQITCDg++YTIHmEAAECBAgQIECAAIFWCvhOeivHoigCBAgQIECgpQIC9JYORlkECBAgQIDA4gV833zxM1ABAQIECBAgQIAAAQLTE/Cd9OlZehMBAgQIECDQXwEBen9nqzMCBAgQIEDgmgK+b35NOD8jQIAAAQIECBAgQKATAr6T3okxKZIAAQIECBBYkIAAfUHwliVAgAABAgTaJ/DHifPIz6vIW+2rTkUECBAgQIAAAQIECBCYvsAf17tHejQerh5P/+3eSIAAAQIECBDonoAAvXszUzEBAgQIECAwZYGV0d7m+1j6RnA+ZVivI0CAAAECBAgQIECgMwJNkL4U7388Gm7sdqZohRIgQIAAAQIEZiAgQJ8BqlcSIECAAAEC3RAQnHdjTqokQIAAAQIECBAgQGB+AoL0+VlbiQABAgQIEGingAC9nXNRFQECBAgQIDBDgcHLgwcpx7cpYn2Gy3g1AQIECBAgQIAAAQIEOiuQI/Zzih/G22s7nW1C4QQIECBAgACBawgI0K+B5icECBAgQIBANwUE592cm6oJECBAgAABAgQIEFicgCB9cfZWJkCAAAECBBYjIEBfjLtVCRAgQIAAgTkJDEaHt1Kuv46U/54iLc9pWcsQIECAAAECBAgQIECgVwI58knk9I+cqp/Gw9XjXjWnGQIECBAgQIDAGQEBuu1AgAABAgQI9FJAcN7LsWqKAAECBAgQIECAAIEFCwjSFzwAyxMgQIAAAQIzFxCgz5zYAgQIECBAgMA8BQTn89S2FgECBAgQIECAAAECpQoI0kudvL4JECBAgED/BQTo/Z+xDgkQIECAQBECTXAekZ9XkbeKaFiTBAgQIECAAAECBAgQaIlAHelVRHrkaveWDEQZBAgQIECAwI0EBOg34vNjAgQIECBAYNECgvNFT8D6BAgQIECAAAECBAgQ+CAgSLcTCBAgQIAAgT4ICND7MEU9ECBAgACBAgUE5wUOXcsECBAgQIAAAQIECHRCQJDeiTEpkgABAgQIELhAQIBuaxAgQIAAAQKdElgZ7W2+j6VvXNXeqbEplgABAgQIECBAgACBAgWaIH0p3v94NNzYLbB9LRMgQIAAAQIdFRCgd3RwyiZAgAABAqUJCM5Lm7h+CRAgQIAAAQIECBDoi4AgvS+T1AcBAgQIEChDQIBexpx1SYAAAQIEOisgOO/s6BROgAABAgQIECBAgACBfxMQpNsQBAgQIECAQBcEBOhdmJIaCRAgQIBAgQKC8wKHrmUCBAgQIECAAAECBIoQEKQXMWZNEiBAgACBzgoI0Ds7OoUTIECAAIF+CgjO+zlXXREgQIAAAQIECBAgQOC8gCDdniBAgAABAgTaKCBAb+NU1ESAAAECBAoUEJwXOHQtEyBAgAABAgQIECBAICIE6bYBAQIECBAg0CYBAXqbpqEWAgQIECBQoIDgvMCha5kAAQIECBAgQIAAAQKfEBCk2xYECBAgQIBAGwQE6G2YghoIECBAgECBAoPR4a2I/LyKvFVg+1omQIAAAQIECBAgQIAAgQsEmiA9Ij0aD1ePIREgQIAAAQIE5i0gQJ+3uPUIECBAgEDhAoLzwjeA9gkQIECAAAECBAgQIDChgCB9QiiPESBAgAABAlMVEKBPldPLCBAgQIAAgYsEBOf2BgECBAgQIECAAAECBAhcR0CQfh01vyFAgAABAgSuKyBAv66c3xEgQIAAAQITCQjOJ2LyEAECBAgQIECAAAECBAhcIiBIt0UIECBAgACBeQgI0OehbA0CBAgQIFCgQBOcp1x/nVI8KbB9LRMgQIAAAQIECBAgQIDAjARyjqc5VT/5RvqMgL2WAAECBAgULiBAL3wDaJ8AAQIECExb4DQ4j5T/niItT/v93keAAAECBAgQIECAAAECBHLkk8jpH4J0e4EAAQIECBCYtoAAfdqi3keAAAECBAoVEJwXOnhtEyBAgAABAgQIECBAYIECgvQF4luaAAECBAj0VECA3tPBaosAAQIECMxTYPDy4EHK+ZkT5/NUtxYBAgQIECBAgAABAgQInAo0QXpO6fF4e22HCgECBAgQIEDgJgIC9Jvo+S0BAgQIEChc4ENwHt+miPXCKbRPgAABAgQIECBAgAABAi0QyBH7OcUPgvQWDEMJBAgQIECgowIC9I4OTtkECBAgQGCRAiujvc06qp8F54ucgrUJECBAgAABAgQIECBA4CKBJkivov7qaLixS4kAAQIECBAgcBUBAfpVtDxLgAABAgQKF2iC8/ex9E0VeatwCu0TIECAAAECBAgQIECAQAcE6kivluL9j4L0DgxLiQQIECBAoCUCAvSWDEIZBAgQIECgzQKD0eGtiPxccN7mKamNAAECBAgQIECAAAECBC4SaIL0iPRoPFw9pkSAAAECBAgQ+JyAAN3+IECAAAECBC4UEJzbHAQIECBAgAABAgQIECDQJwFBep+mqRcCBAgQIDAbAQH6bFy9lQABAgQIdFqgCc5Trr+OlP+eIi13uhnFEyBAgAABAgQIECBAgACBMwI58knk9I+cqp+cSLc1CBAgQIAAgfMCAnR7ggABAgQIEPg3gcHLgwcp52eCcxuDAAECBAgQIECAAAECBPos0ATpOaXH4+21nT73qTcCBAgQIEDgagIC9Kt5eZoAAQIECPRW4ENwHt+miPXeNqkxAgQIECBAgAABAgQIECBwTiBH7OcUPwjSbQ0CBAgQIECgERCg2wcECBAgQKBwgZXR3ub7WPqmirxVOIX2CRAgQIAAAQIECBAgQKBggeb76Evx/sej4cZuwQxaJ0CAAAECxQsI0IvfAgAIECBAoFSB5jvnEfm54LzUHaBvAgQIECBAgAABAgQIEPiUQBOkR6RHvo9ufxAgQIAAgTIFBOhlzl3XBAgQIFCwQBOcp1x/nVI8KZhB6wQIECBAgAABAgQIECBA4LMCOcfTnKqfBOk2CgECBAgQKEtAgF7WvHVLgAABAoULfPjOeX6WIi0XTqF9AgQIECBAgAABAgQIECBwqUCOfJJTeuz76JdSeYAAAQIECPRGQIDem1FqhAABAgQIXCzQfOe8jurnFLHOiQABAgQIECBAgAABAgQIELiaQI7Yr6L+yvfRr+bmaQIECBAg0EUBAXoXp6ZmAgQIECAwoYDvnE8I5TECBAgQIECAAAECBAgQIDCBgO+jT4DkEQIECBAg0HEBAXrHB6h8AgQIECDwKQHfObcvCBAgQIAAAQIECBAgQIDA7AR8H312tt5MgAABAgQWLSBAX/QErE+AAAECBKYs4DvnUwb1OgIECBAgQIAAAQIECBAg8AkB30e3LQgQIECAQD8FBOj9nKuuCBAgQKBAAd85L3DoWiZAgAABAgQIECBAgACBhQv4PvrCR6AAAgQIECAwVQEB+lQ5vYwAAQIECMxfwHfO529uRQIECBAgQIAAAQIECBAgcF7A99HtCQIECBAg0A8BAXo/5qgLAgQIEChQwHfOCxy6lgkQIECAAAECBAgQIECg9QK+j976ESmQAAECBAh8VkCAboMQIECAAIEOCvjOeQeHpmQCBAgQIECAAAECBAgQKEbA99GLGbVGCRAgQKCHAgL0Hg5VSwQIECDQXwHfOe/vbHVGgAABAgQIECBAgAABAv0T8H30/s1URwQIECDQfwEBev9nrEMCBAgQ6IGA75z3YIhaIECAAAECBAgQIECAAIFiBXwfvdjRa5wAAQIEOiggQO/g0JRMgAABAmUJ3P7l4PtI+e8p0nJZneuWAAECBAgQIEBPI7dJAAAgAElEQVSAAAECBAj0R6C51j1y+se7L9e+609XOiFAgAABAv0TEKD3b6Y6IkCAAIGeCLiuvSeD1AYBAgQIECBAgAABAgQIEDgj4Fp324EAAQIECLRbQIDe7vmojgABAgQKFHBde4FD1zIBAgQIECBAgAABAgQIFCfgWvfiRq5hAgQIEOiIgAC9I4NSJgECBAiUIeC69jLmrEsCBAgQIECAAAECBAgQINAIuNbdPiBAgAABAu0TEKC3byYqIkCAAIECBVzXXuDQtUyAAAECBAgQIECAAAECBD4KuNbdViBAgAABAu0REKC3ZxYqIUCAAIECBVzXXuDQtUyAAAECBAgQIECAAAECBC4QcK27rUGAAAECBBYvIEBf/AxUQIAAAQKFCriuvdDBa5sAAQIECBAgQIAAAQIECHxGwLXutgcBAgQIEFisgAB9sf5WJ0CAAIECBVzXXuDQtUyAAAECBAgQIECAAAECBK4o4Fr3K4J5nAABAgQITElAgD4lSK8hQIAAAQKXCbiu/TIh/ydAgAABAgQIECBAgAABAgTOC7jW3Z4gQIAAAQLzFRCgz9fbagQIECBQqMDg5cGDlPOzFGm5UAJtEyBAgAABAgQIECBAgAABAtcUaK51zyk9Hm+v7VzzFX5GgAABAgQITCggQJ8QymMECBAgQOA6As117e9j6Zsq8tZ1fu83BAgQIECAAAECBAgQIECAAIFTgeY0+lK8//FouLFLhQABAgQIEJiNgAB9Nq7eSoAAAQKFCzTXtadcf51SPCmcQvsECBAgQIAAAQIECBAgQIDAlAVyjqc5VT+Nh6vHU3611xEgQIAAgeIFBOjFbwEABAgQIDBtgQ/Xtce3KWJ92u/2PgIECBAgQIAAAQIECBAgQIBAI5Aj9nOKH1zrbj8QIECAAIHpCgjQp+vpbQQIECBQsEBz6jwiP3dde8GbQOsECBAgQIAAAQIECBAgQGDOAs217hHpkdPoc4a3HAECBAj0VkCA3tvRaowAAQIE5inw4dR5fpYiLc9zXWsRIECAAAECBAgQIECAAAECBHLkk5zSY6fR7QUCBAgQIHBzAQH6zQ29gQABAgQKFlgZ7W2+j6VvnDoveBNonQABAgQIECBAgAABAgQItESgOY2+FO9/PBpu7LakJGUQIECAAIHOCQjQOzcyBRMgQIBAGwSa69pTrr9OKZ60oR41ECBAgAABAgQIECBAgAABAgROBXKOpzlVP7nW3Z4gQIAAAQJXFxCgX93MLwgQIECgcIHm1Hkd1c8pYr1wCu0TIECAAAECBAgQIECAAAECLRXIEftV1F85jd7SASmLAAECBForIEBv7WgURoAAAQJtE2hOnUfk565rb9tk1EOAAAECBAgQIECAAAECBAhcJNBc6x6RHjmNbo8QIECAAIHJBATokzl5igABAgQKFxi8PHiQcn6WIi0XTqF9AgQIECBAgAABAgQIECBAoGMCOfJJTunxeHttp2OlK5cAAQIECMxdQIA+d3ILEiBAgECXBJw679K01EqAAAECBAgQIECAAAECBAh8TsBpdPuDAAECBAhcLiBAv9zIEwQIECBQqIBT54UOXtsECBAgQIAAAQIECBAgQKDHAk6j93i4WiNAgACBqQgI0KfC6CUECBAg0CcBp877NE29ECBAgAABAgQIECBAgAABAp8ScBrdviBAgAABAp8WEKDbGQQIECBA4IzA7V8Ovo+U/+5b57YFAQIECBAgQIAAAQIECBAg0HeB5jR65PSPd1+ufdf3XvVHgAABAgQmFRCgTyrlOQIECBDotcDKaG+zjurnFLHe60Y1R4AAAQIECBAgQIAAAQIECBA4J5Aj9quovzoabuzCIUCAAAECpQsI0EvfAfonQIAAgWhOnacUT1AQIECAAAECBAgQIECAAAECBEoWyDmeOo1e8g7QOwECBAg0AgJ0+4AAAQIEihVw6rzY0WucAAECBAgQIECAAAECBAgQuEDAaXRbgwABAgRKFxCgl74D9E+AAIFCBZw6L3Tw2iZAgAABAgQIECBAgAABAgQmEnAafSImDxEgQIBADwUE6D0cqpYIECBA4GIBp87tDgIECBAgQIAAAQIECBAgQIDAZAJOo0/m5CkCBAgQ6JeAAL1f89QNAQIECHxGwKlz24MAAQIECBAgQIAAAQIECBAgcHUBp9GvbuYXBAgQINBdAQF6d2en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CriyvY1TURMBAgQIECBAgAABAgQIECBAgMB5AVe62xMECBAgcB0BAfp11PyGAAEChQq4sr3QwWubAAECBAgQIECAAAECBAgQINBhAVe6d3h4SidAgMACBAToC0C3JAECBLom4Mr2rk1MvQQIECBAgAABAgQIECBAgAABAmcFXOluPxAgQIDApAIC9EmlPEeAAIFCBVzZXujgtU2AAAECBAgQIECAAAECBAgQ6JmAK917NlDtECBAYEYCAvQZwXotAQIE+iDQXNmecn6WIi33oR89ECBAgAABAgQIECBAgAABAgQIlC2QI5/klB6Pt9d2ypbQPQECBAhcJCBAtzcIECBA4E8Crmy3KQgQIECAAAECBAgQIECAAAECBPos4Er3Pk9XbwQIELiZgAD9Zn5+TYAAgd4JNOF5ivpNiljvXXMaIkCAAAECBAgQIECAAAECBAgQIPBRoLnSPUd1dzxcPYZCgAABAgROBQTo9gIBAgQI/I+AK9ttBgIECBAgQIAAAQIECBAgQIAAgZIEXOle0rT1SoAAgckEBOiTOXmKAAECvRe4/cvB9ynFk943qkECBAgQIECAAAECBAgQIECAAAEC5wRyjqfvvlz7DgwBAgQIEBCg2wMECBAoXMD3zgvfANonQIAAAQIECBAgQIAAAQIECBD4Q8B30W0EAgQIEGgEBOj2AQECBAoWWBntbdaRXqdIywUzaJ0AAQIECBAgQIAAAQIECBAgQIDAHwLNle5V5HtHw41dJAQIECBQpoAAvcy565oAAQLRfO+8yvECBQECBAgQIECAAAECBAgQIECAAAEC/y5Qp3g43l7b4UKAAAEC5QkI0MubuY4JEChcwJXthW8A7RMgQIAAAQIECBAgQIAAAQIECEwk4Er3iZg8RIAAgd4JCNB7N1INESBA4GKBJjxPUb9JEeucCBAgQIAAAQIECBAgQIAAAQIECBD4vECO2M9R3R0PV49ZESBAgEAZAgL0MuasSwIECPxxZXvK+ZnvndsMBAgQIECAAAECBAgQIECAAAECBCYXaL6LnlN67Er3yc08SYAAgS4LCNC7PD21EyBAYEKB278cfJ9SPJnwcY8RIECAAAECBAgQIECAAAECBAgQIHBOIOd4+u7Lte/AECBAgEC/BQTo/Z6v7ggQKFzA984L3wDaJ0CAAAECBAgQIECAAAECBAgQmKqA76JP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RqAJ0SPSo/Fw9ZgIAQIEuiggQO/i1NRMgEA04XmK+k2KWMdBgAABAgQIECBAgAABAgQIECBAgAABAu0RyBH7Oaq7QvT2zEQlBAhMLiBAn9zKkwQItERAeN6SQSiDAAECBAgQIECAAAECBAgQIECAAAECFwgI0W0NAgS6KiBA7+rk1E2gUAHheaGD1zYBAgQIECBAgAABAgQIECBAgAABAp0TEKJ3bmQKJkAgIgTotgEBAp0REJ53ZlQKJUCAAAECBAgQIECAAAECBAgQIECAwB8CQnQbgQCBrgkI0Ls2MfUSKFRAeF7o4LVNgAABAgQIECBAgAABAgQIEFuerPwAACAASURBVCBAgEDnBYTonR+hBggUJSBAL2rcmiXQTQHheTfnpmoCBAgQIECAAAECBAgQIECAAAECBAicCgjR7QUCBLoiIEDvyqTUSaBQAeF5oYPXNgECBAgQIECAAAECBAgQIECAAAECvRMQovdupBoi0EsBAXovx6opAv0QEJ73Y466IECAAAECBAgQIECAAAECBAgQIECAwKmAEN1eIECg7QIC9LZPSH0EChUQnhc6eG0TIECAAAECBAgQIECAAAECBAgQINB7ASF670esQQKdFhCgd3p8iifQTwHheT/nqisCBAgQIECAAAECBAgQIECAAAECBAicCgjR7QUCBNoqIEBv62TURaBQAeF5oYPXNgECBAgQIECAAAECBAgQIECAAAECxQkI0YsbuYYJdEJAgN6JMSmSQBkCwvMy5qxLAgQIECBAgAABAgQIECBAgAABAgQInAoI0e0FAgTaJiBAb9tE1EOgUAHheaGD1zYBAgQIECBAgAABAgQIECBAgAABAsULCNGL3wIACLRKQIDeqnEohkCZAsLzMueuawIECBAgQIAAAQIECBAgQIAAAQIECJwKCNHtBQIE2iIgQG/LJNRBoFAB4Xmhg9c2AQIECBAgQIAAAQIECBAgQIAAAQIEzgkI0W0JAgTaICBAb8MU1ECgUAHheaGD1zYBAgQIECBAgAABAgQIECBAgAABAgQuEBCi2xoECCxaQIC+6AlYn0ChAsLzQgevbQIECBAgQIAAAQIECBAgQIAAAQIECFwiIES3RQgQWKSAAH2R+tYmUKiA8LzQwWubAAECBAgQIECAAAECBAgQIECAAAECEwoI0SeE8hgBAlMXEKBPndQLCRD4nIDw3P4gQIAAAQIECBAgQIAAAQIECBAgQIAAgUkEhOiTKHmGAIFpCwjQpy3qfQQIXCggPLc5CBAgQIAAAQIECBAgQIAAAQIECBAgQOAqAkL0q2h5lgCBaQgI0Keh6B0ECFwqIDy/lMgDBAgQIECAAAECBAgQIECAAAECBAgQIPAJASG6bUGAwDwFBOjz1LYWgUIFhOeFDl7bBAgQIECAAAECBAgQIECAAAECBAgQmJKAEH1KkF5DgMClAgL0S4k8QIDATQSE5zfR81sCBAgQIECAAAECBAgQIECAAAECBAgQOBUQotsLBAjMQ0CAPg9laxAoVEB4XujgtU2AAAECBAgQIECAAAECBAgQIECAAIEZCQjRZwTrtQQI/I+AAN1mIEBgZgKD0dvfqshbM1vAiwkQIECAAAECBAgQIECAAAECBAgQIECgOIE60qvx8M794hrXMAECcxEQoM+F2SIEyhMQnpc3cx0TIECAAAECBAgQIECAAAECBAgQIEBgXgJC9HlJW4dAeQIC9PJmrmMCMxcQns+c2AIECBAgQIAAAQIECBAgQIAAAQIECBAoXkCIXvwWAEBgJgIC9JmweimBcgWE5+XOXucECBAgQIAAAQIECBAgQIAAAQIECBCYt4AQfd7i1iPQfwEBev9nrEMCcxMQns+N2kIECBAgQIAAAQIECBAgQIAAAQIECBAg8FFAiG4rECAwTQEB+jQ1vYtAwQLC84KHr3UCBAgQIECAAAECBAgQIECAAAECBAgsWECIvuABWJ5AjwQE6D0aplYILEpg8PLgQZXjxaLWty4BAgQIECBAgAABAgQIECBAgAABAgQIEKhTPBxvr+2QIECAwE0EBOg30fNbAgRCeG4TECBAgAABAgQIECBAgAABAgQIECBAgEBbBITobZmEOgh0V0CA3t3ZqZzAwgWE5wsfgQIIECBAgAABAgQIECBAgAABAgQIECBA4JyAEN2WIEDgJgIC9Jvo+S2BggWE5wUPX+sECBAgQIAAAQIECBAgQIAAAQIECBBouYAQveUDUh6BFgsI0Fs8HKURaKuA8Lytk1EXAQIECBAgQIAAAQIECBAgQIAAAQIECJwKCNHtBQIEriMgQL+Omt8QKFhgZbS3WUd6nSItF8ygdQIECBAgQIAAAQIECBAgQIAAAQIECBBouUCOfFJFvnc03NhteanKI0CgRQIC9BYNQykE2i4gPG/7hNRHgAABAgQIECBAgAABAgQIECBAgAABAmcFhOj2AwECVxUQoF9VzPMEChUQnhc6eG0TIECAAAECBAgQIECAAAECBAgQIECg4wJC9I4PUPkE5iwgQJ8zuOUIdFFgMDq8leL9oWvbuzg9NRMgQIAAAQIECBAgQIAAAQIECBAgQIBAE6LnWFodD1ePaRAgQOBzAgJ0+4MAgc8KfAjP6zcpYh0VAQIECBAgQIAAAQIECBAgQIAAAQIECBDoqkCO2M9R3RWid3WC6iYwHwEB+nycrUKgkwLC806OTdEECBAgQIAAAQIECBAgQIAAAQIECBAgcIGAEN3WIEDgMgEB+mVC/k+gYIHbo4M9J88L3gBaJ0CAAAECBAgQIECAAAECBAgQIECAQA8FmhD93XBto4etaYkAgSkICNCngOgVBPooMBi9/a2KvNXH3vREgAABAgQIECBAgAABAgQIECBAgAABAmUL1JFejYd37petoHsCBD4lIEC3LwgQ+JOA8NymIECAAAECBAgQIECAAAECBAgQIECAAIG+CwjR+z5h/RG4noAA/XpufkWgtwK3fzn4PqV40tsGNUaAAAECBAgQIECAAAECBAgQIECAAAECBD4K5BxP33259h0QAgQInAoI0O0FAgT+R2Dw8uBBleMFEgIECBAgQIAAAQIECBAgQIAAAQIECBAgUIpAneLheHttp5R+9UmAwOcFBOh2CAECfwgIz20EAgQIECBAgAABAgQIECBAgAABAgQIEChVQIhe6uT1TeDPAgJ0u4IAgVgZ7W3mqP4LBQECBAgQIECAAAECBAgQIECAAAECBAgQKFVAiF7q5PVN4N8FBOh2BIHCBZrwvI70OkVaLpxC+wQIECBAgAABAgQIECBAgAABAgQIECBQsECOfFJFvnc03NgtmEHrBIoXEKAXvwUAlCwgPC95+nonQIAAAQIECBAgQIAAAQIECBAgQIAAgfMCQnR7ggABAbo9QKBQgcHo8FaK+k2KWC+UQNsECBAgQIAAAQIECBAgQIAAAQIECBAgQOBPAjliP0d1dzxcPcZDgEB5AgL08mauYwIhPLcJCBAgQIAAAQIECBAgQIAAAQIECBAgQIDAxQJCdLuDQLkCAvRyZ6/zggVujw72nDwveANonQABAgQIECBAgAABAgQIECBAgAABAgQuFagjvRoP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rwIC9F75bZ6SwJHR3ZOTUP1HFapXUqpbrQQIECBAgAABAgQIECBAgAABAgQIECBAgEC5AtP70Aeh/vdHwxN3ylXQOYHZBQTos1t5smAB954XPHytEyBAgAABAgQIECBAgAABAgQIECBAgACBxAXch574AJXfqYAAvVNum6Uq4N7zVCenbgIECBAgQIAAAQIECBAgQIAAAQIECBAgQGAq4D503wGB2QQE6LM5eapgAfeeFzx8rRMgQIAAAQIECBAgQIAAAQIECBAgQIAAgYwE3Iee0TC10pqAAL01WgvnIDC997wOg69y6EUPBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEqTN52H7rvgMDzBQTovg4CzxFw77lPgwABAgQIECBAgAABAgQIECBAgAABAgQIEMhNwH3ouU1UP00LCNCbFrVeNgLuPc9mlBohQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEfifgPnSfA4HnCwjQfR0EdhFw77nPggABAgQIECBAgAABAgQIECBAgAABAgQIEMhZwH3oOU9Xb8sICNCX0fNulgLuPc9yrJoiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIE/iDgPnSfBIE/CwjQfRUEfifg3nOfAwECBAgQIECAAAECBAgQIECAAAECBAgQIFCKgPvQS5m0PucREKDPo+XZ7AXce579iDVIgAABAgQIECBAgAABAgQIECBAgAABAgQI/E7Afeg+BwL/LCBA90UQ+E3Avec+BQIECBAgQIAAAQLPF/iXfYPw3msvh8v/9QQTgc4Fbvz3/xY++GYcvn826XxvGxIgQIAAAQIECBAoQcB96CVMWY+zCgjQZ5XyXNYC03vPJ6H6jypUr2TdqOYIECBAgAABAgQILCBw6V//EoZ/+2s4dGB/OHLz/gIreIXAcgKPzh4L//f/90sY/e//j/8njuUovU2AAAECBAgQIEBgV4E61D8OQv3vj4Yn7iAiULqAAL30L0D/wb3nPgICBAgQIECAAAECuwv8z3/5n8K7x14Np44e/McDAnRfSx8C0wB95/+mQfpHX26FL5781Ecp9iRAgAABAgQIECCQrYD70LMdrcbmFBCgzwnm8fwE3Hue30x1RIAAAQIECBAgsJzAGy/tDx++vvJPwfnOigL05Wy9vZjA7wP0nRX+t//j/w2ffLcdvv35l8UW9RYB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gvSazFubBAgQIFANgV5oTiy1P/+lDN2UJkCPMT3GvQxHSo0ECBAgUDYBwXnZJqZeAgQIECBAgAABAgQIEIgF4iD9yqPl8PDdKhACBAgQIECgwAJlenx7zFiuAN1j3At89JVGgAABAmUTOLRxLJw/OOEb52UbnHoJECBAgAABAgQIECBA4C8CgnQHggABAgQIFFugTI9vL1+A7jHuxT79qiNAgACBUggIzksxJkUSIECAAAECBAgQIECAwIACcZD+zY9L4eX73oB3upwAAQIECBBIU6BMj28vXYAeFzzV6c43Qtif5hCtTYAAAQIEqiiwc0MznN2zNZw7PFHF9vREgAABAgQIECBAgAABAgTCr7+vhs7jV+HaszeCdOeBAAECBAgUQCAK4cliuzVTgFL6LqFUj3CPu5r0GPe+h+tCAgQIECAQC6wF5+0D28OOzWNQCBAgQIAAAQIECBAgQIBA5QUE6ZUfsQYJECBAoCQCURQuL55uzZak3D/KLF2AvrszfyQKzXtlQlYrAQIECBDIS2B233gQnOelb18CBAgQIECAAAECBAgQyFtgLUife7qSdyn2J0CAAAECtRRohN7R5+2Z+2VqvnQBeozrMe5lOmJqJUCAAIE8BATneajbkwABAgQIECBAgAABAgSKKiBIL+pk1EWAAAECVRYo4+Pb43mUM0C/2Z1rNMKFKh8ovREgQIAAgWEEBOfDqLmHAAECBAgQIECAAAECBOoiEAfpF+8uhlsrb+vSsj4JECBAgEBuAmV8fHtpA3SPcc/tnNuYAAECBAoqcGp8UzgzvS0c37uloBUqiwABAgQIECBAgAABAgQIFEfgh59/CzcWXgvSizMSlRAgQIBABQV6jfD10pet78rWWim/gR4jT3WerDRC419lA1cvAQIECBBIUkBwnqSmtQgQIECAAAECBAgQIECgbgJxkH7l0XJ4+G61bq3rlwABAgQIpCoQhejfi+3946luktLipQ3QJzsLt5shOpGSi2UJECBAgEChBQ5tHAvnD074xnmhp6Q4AgQIECBAgAABAgQIECiLgCC9LJNSJwECBAiURaAXGneW2tMny1Lvn+ssb4D+fferZhSulxFdzQQIECBAYFgBwfmwcu4jQIAAAQIECBAgQIAAAQLrC1x9sByuPXsTXr7vrX+xKwgQIECAAIGPCpT18e1xQ6UN0OPiPcbd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c+2f/jiKe3t5s2FkR4AAAQIECBAgQIBAUgLmnidVDsEkKqCBnmhhhJWWgHnoadVDNAQIECBAgAABAgRSFdhvPnrZOP9269e4/uBRqimIiwABAgQIECBAgACBhgqYe97QwkqrcgEN9MpJLdhEAfPQm1hVOREgQIAAAQIECBCYn8DT89E91z4/aysTIECAAAECBAgQILC/QBFxp4jOh6P+2v39f+0XBNotoIHe7vrLfgKBch56Htk/s8gOTfCZnxIgQIAAAQIECBAg0FKBcj76V+924//d///im19+81x7S8+BtAkQIECAAAECBAikIGDueQpVEENdBDTQ61IpcSYhYB56EmUQBAECBAgQIECAAAECBAgQIECAAAECBAgQIDCmQJ7FudHp3pUxf+5nBFovoIHe+iMAYFIB89AnFfN7AgQIECBAgAABAgQIECBAgAABAgQIECBAYBkC5p4vQ92edRfQQK97BcW/cAHz0BdObkMCBAgQIECAAAECBAgQIECAAAECBAgQIEBgQgFzzycE83MC/xLQQHcUCEwh8GcTfW/bPPQp8HxCgAABAgQIECBAgAABAgQIECBAgAABAgQIzFWgiOJhJ4p/3O1v3J7rRhYn0EABDfQGFlVKixEwD30xznYhQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEJhMw93wyL78m8FcBDXTngcAMAqtXhxezLM7PsIRPCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKVCZh7XhmlhVoqoIHe0sJLuzqB7mDrRieKk9WtaCUCBAgQIDnqlO0AACAASURBVECAAAECBAgQIECAAAECBAgQIECAwOQC5dzznX5vY/IvfUGAwBMBDXRngcCMAuahzwjocwIECBAgQIAAAQIECBAgQIAAAQIECBAgQGBmgXLueREH1kb9tfszL2YBAi0W0EBvcfGlXp3A0cHm8SI6t6pb0UoECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgfEFsshP3O1v3B7/C78kQOBZAhrozgWBigS614ZnO0Vcrmg5yxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIExhIoiri0c6Z3Yawf+xEBAi8U0EB3QAhUKGAeeoWYliJAgAABAgQIECBAgAABAgQIECBAgAABAgT2Fcgjuznqr5/a94d+QIDAWAIa6GMx+RGB8QT+nIeef5dFHBvvC78iQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECEwnUETcKaLzobnn0/n5isCzBDTQnQsCFQv82UTf284iO1Tx0pYjQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECDwWKKJ42IniH+aeOxAEqhXQQK/W02oEHguYh+4gECBAgAABAgQIECBAgAABAgQIECBAgAABAvMUyLM4NzrduzLPPaxNoI0CGuhtrLqcFyKwenV4Mcvi/EI2swkBAgQIECBAgAABAgQIECBAgAABAgQIECDQGoGiiEs7Z3oXWpOwRAksUEADfYHYtmqfQHewdaMTxcn2ZS5jAgQIECBAgAABAgQIECBAgAABAgQIECBAYB4CeWQ3R/31U/NY25oECERooDsFBOYo8Oc89Py7LOLYHLexNAECBAgQIECAAAECBAgQIECAAAECBAgQINACgSLiThGdD0f9tfstSFeKBJYioIG+FHabtkng6GDzeB7ZP7PIDrUpb7kSIECAAAECBAgQIECAAAECBAgQIECAAAEC1QkUUTzsRPGPu/2N29WtaiUCBJ4W0EB3JggsQKB7bXi2U8TlBWxlCwIECBAgQIAAAQIECBAgQIAAAQIECBAgQKCBAnkW50ane1camJqUCCQloIGeVDkE02SB1avDi1kW55uco9wIECBAgAABAgQIECBAgAABAgQIECBAgACB6gWKIi7tnOldqH5lKxIg8LSABrozQWCBAt3B1o1OFCcXuKWtCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgRoL5JHdHPXXT9U4BaETqJWABnqtyiXYugt0B9tHssi/yyKO1T0X8RMgQIAAAQIECBAgQIAAAQIECBAgQIAAAQLzFSgi7hTR+XDUX7s/352sToDAEwENdGeBwIIFjg42j+eR/TOL7NCCt7YdAQIECBAgQIAAAQIECBAgQIAAAQIECBAgUBOBIoqHnSj+cbe/cbsmIQuTQCMENNAbUUZJ1E2ge214tlPE5brFLV4CBAgQIECAAAECBAgQIECAAAECBAgQIEBgMQJ5FudGp3tXFrObXQgQeCKgge4sEFiSgCb6kuBtS4AAAQIECBAgQIAAAQIECBAgQIAAAQIEEhcoiri0c6Z3IfEwhUegkQIa6I0sq6TqItAdbN3oRHGyLvGKkwABAgQIECBAgAABAgQIECBAgAABAgQIEJivQB7ZzVF//dR8d7E6AQLPE9BAdzYILFGgO9g+kkX+XRZxbIlh2JoAAQIECBAgQIAAAQIECBAgQIAAAQIECBBIQKCIuFNE58NRf+1+AuEIgUArBTTQW1l2Sack8GcTfW87i+xQSnGJhQABAgQIECBAgAABAgQIECBAgAABAgQIEFicQBHFw04U/7jb37i9uF3tRIDA0wIa6M4EgQQEjg42jxfRuZVAKEIgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEliCQRX5C83wJ8LYk8JSABrojQSARge614dlOEZcTCUcYBAgQIECAAAECBAgQIECAAAECBAgQIECAwIIE8izOjU73rixoO9sQIPACAQ10x4NAQgKrV4cXsyzOJxSSUAgQIECAAAECBAgQIECAAAECBAgQIECAAIE5CuSR3Rz110/NcQtLEyAwgYAG+gRYfkpgEQLdwdaNThQnF7GXPQgQIECAAAECBAgQIECAAAECBAgQIECAAIHlCRQRd3b6vY3lRWBnAgSeFtBAdyYIJCbQHWwfySL/Los4llhowiFAgAABAgQIECBAgAABAgQIECBAgAABAgQqEiib50V0Phz11+5XtKRlCBCoQEADvQJESxCoWuDPJvredhbZoarXth4BAgQIECBAgAABAgQIECBAgAABAgQIECCwXIEiioedKP5xt79xe7mR2J0AgacFNNCdCQKJChwdbB4vonMr0fCERYAAAQIECBAgQIAAAQIECBAgQIAAAQIECEwpkGdxbnS6d2XKz31GgMAcBTTQ54hraQKzCnSvDc92irg86zq+J0CAAAECBAgQIECAAAECBAgQIECAAAECBNIQ0DxPow6iIPA8AQ10Z4NA4gKrV4cXsyzOJx6m8AgQIECAAAECBAgQIECAAAECBAgQIECAAIF9BPLIbo7666dAESCQroAGerq1ERmBfwt0B1s3OlGcREKAAAECBAgQIECAAAECBAgQIECAAAECBAjUU6CIuLPT723UM3pRE2iPgAZ6e2ot0xoLdAfbR7LIv8sijtU4DaETIECAAAECBAgQIECAAAECBAgQIECAAIFWCpTN8yI6H476a/dbCSBpAjUS0ECvUbGE2m6BP5voe9tZZIfaLSF7AgQIECBAgAABAgQIECBAgAABAgQIECBQH4EiioedKP5xt79xuz5Ri5RAewU00Ntbe5nX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BAgQIECAAAECBAgQIECAAAECBAgQOJeA8PxcbB4i0LyAAL35EWuQwPkEhOjnc/MUAQIECBAgQIAAAQIECBAgQIAAAQIECJQvIDwvf0YqJDCVgAB9Knn7EqhA4O29g8cpYqeCUpVIgAABAgQIECBAgAABAgQIECBAgAABAgROJZAjnuTo3l0uto5O9YAfESAwKwEB+qzGrVkCZxPY3Hv6Vor+FyH62dz8mgABAgQIECBAgAABAgQIECBAgAABAgTKFBCelzkXVREoSUCAXtI01EKgQAEheoFDURIBAgQIECBAgAABAgQIECBAgAABAgQInFkgR36e49KWm+dnpvMAgVkJCNBnNW7NEjifwG8h+ounKdLG+VbwFAECBAgQIECAAAECBAgQIECAAAECBAgQmE5gCM+7yFcPF7v701VhZwIEahAQoNcwJTUSKEDg8t7jK32kR0L0AoahBAIECBAgQIAAAQIECBAgQIAAAQIECBA4tYDw/NRUfkiAQEQI0B0DAgROLSBEPzWVHxIgQIAAAQIECBAgQIAAAQIECBAgQIBAAQLC8wKGoAQClQkI0CsbmHIJTC0gRJ96AvYnQIAAAQIECBAgQIAAAQIECBAgQIAAgdMK9Ck+Wl7fvn/a3/sdAQIEBOjOAAECZxbYfHBws8vx/Zkf9AABAgQIECBAgAABAgQIECBAgAABAgQIEFiTgPB8TdC2IdCYgAC9sYFqh8C6BITo65K2DwECBAgQIECAAAECBAgQIECAAAECBAicVUB4flYxvydA4FhAgO4sECBwbgEh+rnpPEiAAAECBAgQIECAAAECBAgQIECAAAECIwkIz0eCtSyBmQgI0GcyaG0SGEtAiD6WrHUJECBAgAABAgQIECBAgAABAgQIECBA4KwCOcedZze2b5/1Ob8nQIDAsYAA3VkgQODCAkL0CxNagAABAgQIECBAgAABAgQIECBAgAABAgQuKNBHerhcvPP+BZfxOAECMxcQoM/8AGifwKoENvd+/amLfG1V61mHAAECBAgQIECAAAECBAgQIECAAAECBAicVkB4flopvyNA4CQBAfpJQv5OgMCpBYTop6byQwIECBAgQIAAAQIECBAgQIAAAQIECBBYkYDwfEWQliFA4KWAAN1BIEBgpQJC9JVyWowAAQIECBAgQIAAAQIECBAgQIAAAQIE/kRAeO54ECCw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3tO3UvS/CNHbmqtuCBAgQIAAAQIECBAgQIAAAQIECMxBIEc8ydG9u1xsHc2hXz0SIEDgIgIC9IvoeZYAgVkJCNFnNW7NEiBAgAABAgQIECBAgAABAgQIEGhCQHjexBg1QYDAGgUE6GvEthUBAm0IbO79+lMX+Vob3eiCAAECBAgQIECAAAECBAgQIECAAIFWBfpIDyPSLTfPW52wvggQGENAgD6GqjUJEGheQIje/Ig1SIAAAQIECBAgQIAAAQIECBAgQKBqgSE8Xy7eeb/qJhRPgACBCQQE6BOg25IAgTYENh8c3OxyfN9GN7ogQIAAAQIECBAgQIAAAQIECBAgQKAVgZzjzrMb27db6UcfBAgQWKeAAH2d2vYiQKA5gSFETznfTZE2mmtOQwQIECBAgAABAgQIECBAgAABAgQIVCfQp/hoeX37fnWFK5gAAQKFCAjQCxmEMggQqFfg8t7jK32kR0L0emeocgIECBAgQIAAAQIECBAgQIAAAQK1C+TIz7vIVw8Xu/u196J+AgQITCkgQJ9S394ECDQj8FuI3n2XInaaaUojBAgQIECAAAECBAgQIECAAAECBAhUISA8r2JMiiRAoBIBAXolg1ImAQLlC2zuPX0rRf+LEL38WamQAAECBAgQIECAAAECBAgQIECAQCsCOeJJju7d5WLrqJWe9EGAAIEpBQToU+rbmwCB5gSGED0i3+siX2uuOQ0RIECAAAECBAgQIECAAAECBAgQIFCUgPC8qHEohgCBRgQE6I0MUhsECJQlsLn3609C9LJmohoCBAgQIECAAAECBAgQIECAAAECLQn0kR4uF++831JPeiFAgEAJAgL0EqagBgIEmhTYfHBws8vxfZPNaYoAAQIECBAgQIAAAQIECBAgQIAAgckEco47z25s356sABsTIECgYQEBesPD1RoBMMmopQAAIABJREFUAtMLDCF6yvluirQxfTUqIECAAAECBAgQIECAAAECBAgQIECgdoE+xUfL69v3a+9D/QQIEChVQIBe6mTURYBAMwKX9x5f6SM9EqI3M1KNECBAgAABAgQIECBAgAABAgQIEFi7QI78vIt89XCxu7/2zW1IgACBGQkI0Gc0bK0SIDCdwG8hevdditiZrgo7EyBAgAABAgQIECBAgAABAgQIECBQo0COeNJF/7HwvMbpqZkAgdoEBOi1TUy9BAhUK7C59/StFP0vQvRqR6hwAgQIECBAgAABAgQIECBAgAABAmsXGMLzHN27y8XW0do3tyEBAgRmKCBAn+HQtUyAwLQCm3u//tRFvjZtFXYnQIAAAQIECBAgQIAAAQIECBAgQKB0gT7Sw4h0S3he+qTUR4BASwIC9JamqRcCBKoR2HxwcLPL8X01BSuUAAECBAgQIECAAAECBAgQIECAAIG1CuQcd57d2L691k1tRoAAAQIhQHcICBAgMJHAEKKnnO+mSBsTlWBbAgQIECBAgAABAgQIECBAgAABAgQKFOhTfLS8vn2/wNKURIAAgeYFBOjNj1iDBAiULHB57/GVPtIjIXrJU1IbAQIECBAgQIAAAQIECBAgQIAAgfUI5MjPu8hXDxe7++vZ0S4ECBAg8LqAAN2ZIECAwMQCm3tP30rR/5IidiYuxfYECBAgQIAAAQIECBAgQIAAAQIECEwkkCOedNF/LDyfaAC2JUCAwL8FBOiOAgECBAoQGEL0iHyvi3ytgHKUQIAAAQIECBAgQIAAAQIECBAgQIDAGgX6SA8j0q3lYutojdvaigABAgTeICBAdywIECBQkMDbPxx8mVJ8UVBJSiFAgAABAgQIECBAgAABAgQIECBAYESBITxfLt55f8QtLE2AAAECZxAQoJ8By08JECCwDoHNBwc3uxzfr2MvexAgQIAAAQIECBAgQIAAAQIECBAgMJ1An+Kj5fXt+9NVYGcCBAgQeF1AgO5MECBAoECBy3uPr/SRHqVIGwWWpyQCBAgQIECAAAECBAgQIECAAAECBC4gkCM/zyl9Ijy/AKJHCRAgMJKAAH0kWMsSIEDgogLDd9FT9L+kiJ2LruV5AgQIECBAgAABAgQIECBAgAABAgTKEMgRT7roPz5c7O6XUZEqCBAgQOBVAQG680CAAIGCBYYQPSLf6yJfK7hMpREgQIAAAQIECBAgQIAAAQIECBAgcAqBITzP0b27XGwdneLnfkKAAAECEwgI0CdAtyUBAgTOKvD2DwdfphRfnPU5vydAgAABAgQIECBAgAABAgQIECBAoAyBPtLD5eKd98uoRhUECBAg8EcCAnRngwABApUIbD44uNnl+L6ScpVJgAABAgQIECBAgAABAgQIECBAgMC/BfoUH/neueNAgACBOgQE6HXMSZUECBB4KXB57/GVPtKjFGkDCQECBAgQIECAAAECBAgQIECAAAECZQvkyM+7yFd977zsOamOAAECrwoI0J0HAgQIVCYwfBc9Rf9LitiprHTlEiBAgAABAgQIECBAgAABAgQIEJiNgO+dz2bUGiVAoDEBAXpjA9UOAQLzEBhC9Ih8r4t8bR4d65IAAQIECBAgQIAAAQIECBAgQIBAPQLD984j0q3lYuuonqpVSoAAAQKDgADdOSBAgEDFAr6LXvHwlE6AAAECBAgQIECAAAECBAgQINCkQM5x59mN7dtNNqcpAgQIzEBAgD6DIWuRAIG2BYYQPeV813fR256z7ggQIECAAAECBAgQIECAAAECBMoWGL53nlP6ZHl9+37ZlaqOAAECBP5MQIDufBAgQKABgct7j6/00X3nu+gNDFMLBAgQIECAAAECBAgQIECAAAEC1QkM3zvvov/4cLG7X13xCiZAgACB3wkI0B0IAgQINCLgu+iNDFIbBAgQIECAAAECBAgQIECAAAECVQn43nlV41IsAQIEThQQoJ9I5AcECBCoS+DtHw6+TCm+qKtq1RIgQIAAAQIECBAgQIAAAQIECBCoT8D3zuubmYoJECBwkoAA/SQhfydAgECFAr6LXuHQlEyAAAECBAgQIECAAAECBAgQIFCNgO+dVzMqhRIgQODMAgL0M5N5gAABAnUI+C56HXNSJQECBAgQIECAAAECBAgQIECAQF0Cvnde17xUS4AAgbMKCNDPKub3BAgQqEjAd9ErGpZSCRAgQIAAAQIECBAgQIAAAQIEihfwvfPiR6RAAgQIXFhAgH5hQgsQIECgfAHfRS9/RiokQIAAAQIECBAgQIAAAQIECBAoW8D3zsuej+oIECCwKgEB+qokrUOAAIHCBXwXvfABKY8AAQIECBAgQIAAAQIECBAgQKBIAd87L3IsiiJAgMBoAgL00WgtTIAAgfIEhle6p+h/SRE75VWnIgIECBAgQIAAAQIECBAgQIAAAQJlCfjeeVnzUA0BAgTWISBAX4eyPQgQIFCQgO+iFzQMpRAgQIAAAQIECBAgQIAAAQIECBQr4HvnxY5GYQQIEBhVQIA+Kq/FCRAgUK7A8Er3Lsf35VaoMgIECBAgQIAAAQIECBAgQIAAAQLTCPQpPlpe374/ze52JUCAAIEpBQToU+rbmwABAhMLXN57fKWP9ChF2pi4FNsTIECAAAECBAgQIECAAAECBAgQmFxg+N55F/nq4WJ3f/JiFECAAAECkwgI0CdhtykBAgTKEfBK93JmoRICBAgQIECAAAECBAgQIECAAIHpBIbvnefo3l0uto6mq8LOBAgQIDC1gAB96gnYnwABAoUIvP3DwZcpxReFlKMMAgQIECBAgAABAgQIECBAgAABAmsTyDnuPLuxfXttG9qIAAECBIoVEKAXOxqFESBAYP0Cw3fRU853vdJ9/fZ2JECAAAECBAgQIECAAAECBAgQWL/A8Mr2nNInvne+fns7EiBAoFQBAXqpk1EXAQIEJhIYXumeov8lRexMVIJtCRAgQIAAAQIECBAgQIAAAQIECIwuMLyyvYv+Y987H53aBgQIEKhKQIBe1bgUS4AAgfUI+C76epztQoAAAQIECBAgQIAAAQIECBAgMI1AH+lhRLrle+fT+NuVAAECJQsI0EuejtoIECAwsYBXuk88ANsTIECAAAECBAgQIECAAAECBAisXKBP8ZFXtq+c1YIECBBoRkCA3swoNUKAAIFxBC7vPb7SR/edV7qP42tVAgQIECBAgAABAgQIECBAgACB9Qh4Zft6nO1CgACB2gUE6LVPUP0ECBBYg4BXuq8B2RYECBAgQIAAAQIECBAgQIAAAQKjCXhl+2i0FiZAgEBzAgL05kaqIQIECIwnMLzSvcvx/Xg7WJkAAQIECBAgQIAAAQIECBAgQIDAagW8sn21nlYjQIBA6wIC9NYnrD8CBAisWMAr3VcMajkCBAgQIECAAAECBAgQIECAAIFRBHLk513kq4eL3f1RNrAoAQIECDQpIEBvcqyaIkCAwLgCXuk+rq/VCRAgQIAAAQIECBAgQIAAAQIELibgle0X8/M0AQIE5iwgQJ/z9PVOgACBCwp4pfsFAT1OgAABAgQIECBAgAABAgQIECCwcoGc486zG9u3V76wBQkQIEBgFgIC9FmMWZMECBAYT8Ar3ceztTIBAgQIECBAgAABAgQIECBAgMDpBXLEky76j72y/fRmfkmAAAEC/y0gQHcqCBAgQODCAl7pfmFCCxAgQIAAAQIECBAgQIAAAQIECFxAwCvbL4DnUQIECBD4nYAA3YEgQIAAgZUJDK90TznfTZE2VraohQgQIECAAAECBAgQIECAAAECBAj8iUCf4qPl9e37kAgQIECAwCoEBOirULQGAQIECPxHwCvdHQYCBAgQIECAAAECBAgQIECAAIF1CHhl+zqU7UGAAIH5CQjQ5zdzHRMgQGB0Aa90H53YBgQIECBAgAABAgQIECBAgACBWQt4Zfusx695AgQIjCogQB+V1+IECBCYt4BXus97/ronQIAAAQIECBAgQIAAAQIECKxaIEd+nlP6xCvbVy1rPQIECBA4FhCgOwsECBAgMKrAcBs9Rf9LitgZdSOLEyBAgAABAgQIECBAgAABAgQINC3gle1Nj1dzBAgQKEZAgF7MKBRCgACBtgXe/uHgy5Tii7a71B0BAgQIECBAgAABAgQIECBAgMAYAjnHnWc3tm+PsbY1CRAgQIDAqwICdOeBAAECBNYmcHnv8ZU+0qMUaWNtm9qIAAECBAgQIECAAAECBAgQIECgWgGvbK92dAonQIBAtQIC9GpHp3ACBAjUKTC80j0i3+siX6uzA1UTIECAAAECBAgQIECAAAECBAisQ6CP9DAi3Vouto7WsZ89CBAgQIDAICBAdw4IECBAYBKBzQcHN7sc30+yuU0JECBAgAABAgQIECBAgAABAgSKFvDK9qLHozgCBAg0LSBAb3q8miNAgEDZAr+90r37LkXslF2p6ggQIECAAAECBAgQIECAAAECBNYhkCOedNF/fLjY3V/HfvYgQIAAAQKvCwjQnQkCBAgQmFRgeKV7yv2nKcUXkxZicwIECBAgQIAAAQIECBAgQIAAgUkFvLJ9Un6bEyBAgMC/BQTojgIBAgQIFCEwvNI95Xw3RdoooiBFECBAgAABAgQIECBAgAABAgQIrEUgR36eU/pkeX37/lo2tAkBAgQIEPgTAQG640GAAAECxQgMt9Ej8r0u8rViilIIAQIECBAgQIAAAQIECBAgQIDAaAJunY9Ga2ECBAgQOKeAAP2ccB4jQIAAgfEE3EYfz9bKBAgQIECAAAECBAgQIECAAIFSBPoUH7l1Xso01EGAAAECxwICdGeBAAECBIoUuLz3+Eof3XcpYqfIAhVFgAABAgQIECBAgAABAgQIECBwLoEc8aSL/uPDxe7+uRbwEAECBAgQGFFAgD4irqUJECBA4OICb/9w8GVK8cXFV7ICAQIECBAgQIAAAQIECBAgQIDA1AI5x52cum+Wi62jqWuxPwECBAgQeJOAAN25IECAAIHiBdxGL35ECiRAgAABAgQIECBAgAABAgQI/KlAjvy8i3zVrXMHhQABAgRKFxCglz4h9REgQIDAS4HNvadvReR7XeRrSAgQIECAAAECBAgQIECAAAECBOoR6CM9jEi33DqvZ2YqJUCAwJwFBOhznr7eCRAgUKHA5oODmynnuynSRoXlK5kAAQIECBAgQIAAAQIECBAgMBuB4dZ5TumT5fXt+7NpWqMECBAgUL2AAL36EWqAAAEC8xNwG31+M9cxAQIECBAgQIAAAQIECBAgUJeAW+d1zUu1BAgQIPC/AgJ0p4EAAQIEqhVwG73a0SmcAAECBAgQIECAAAECBAgQaFTArfNGB6stAgQIzEhAgD6jYWuVAAECLQq4jd7iVPVEgAABAgQIECBAgAABAgQI1CiQI5500X98uNjdr7F+NRMgQIAAgUFAgO4cECBAgEATAsNt9C7H9000owkCBAgQIECAAAECBAgQIECAQGUCOcedZze2b1dWtnIJECBAgMB/CQjQHQoCBAgQaEbg8t7jK31036WInWaa0ggBAgQIECBAgAABAgQIECBAoGABt84LHo7SCBAgQOBcAgL0c7F5iAABAgRKFnj7h4MvU4ovSq5RbQQIECBAgAABAgQIECBAgACB2gXcOq99guonQIAAgTcJCNCdCwIECBBoUsBt9CbHqikCBAgQIECAAAECBAgQIECgAAG3zgsYghIIECBAYDQBAfpotBYmQIAAgRIE3EYvYQpqIECAAAECBAgQIECAAAECBFoRGG6d59R9s1xsHbXSkz4IECBAgMCrAgJ054EAAQIEmhdwG735EWuQAAECBAgQIECAAAECBAgQGFnArfORgS1PgAABAsUICNCLGYVCCBAgQGBsAbfRxxa2PgECBAgQIECAAAECBAgQINCigFvnLU5VTwQIECDwRwICdGeDAAECBGYl4Db6rMatWQIECBAgQIAAAQIECBAgQOACAm6dXwDPowQIECBQrYAAvdrRKZwAAQIELiLgNvpF9DxLgAABAgQIECBAgAABAgQItC7g1nnrE9YfAQIECPyRgADd2SBAgACB2Qq4jT7b0WucAAECBAgQIECAAAECBAgQ+AMBt84dDQIECBCYu4AAfe4nQP8ECBAgEG6jOwQECBAgQIAAAQIECBAgQIAAgQi3zp0CAgQIECAQIUB3CggQIECAQES4je4YECBAgAABAgQIECBAgAABAnMVcOt8rpPXNwECBAi8SUCA7lwQIECAAIFXBIbb6JHy31KkDTAECBAgQIAAAQIECBAgQIAAgdYFhlvnz25s3269T/0RIECAAIHTCgjQTyvldwQIECAwG4HNvadvReR7XeRrs2laowQIECBAgAABAgQIECBAgMCsBNw6n9W4NUuAAAECZxAQoJ8By08JECBAYF4Cmw8Obqac77qNPq+565YAAQIECBAgQIAAAQIECLQskCM/zyl9sry+fb/lPvVGgAABAgTOKyBAP6+c5wgQIEBgFgJuo89izJokQIAAAQIECBAgQIAAAQKzEOgjPYxIt5aLraNZNKxJAgQIECBwDgEB+jnQPEKAAAEC8xNwG31+M9cxAQIECBAgQIAAAQIECBBoRcCt81YmqQ8CBAgQWIeAAH0dyvYgQIAAgSYE3EZvYoyaIECAAAECBAgQIECAAAECsxJw63xW49YsAQIECKxAQIC+AkRLECBAgMC8BC7vPb7SR/dditiZV+e6JUCAAAECBAgQIECAAAECBGoRyBFPcoqvfOu8lompkwABAgRKERCglzIJdRAgQIBAVQLDbfSU+09Tii+qKlyxBAgQIECAAAECBAgQIECAQPMCOcednLpvfOu8+VFrkAABAgRGEBCgj4BqSQIECBCYj8BwG/1FXPqsi3xtPl3rlAABAgQIECBAgAABAgQIEChRYLh13kX/8eFid7/E+tREgAABAgRqEBCg1zAlNRIgQIBA8QKbDw5uppzvpkgbxRerQAIECBAgQIAAAQIECBAgQKApgRz5eeT07bMb27ebakwzBAgQIEBgAgEB+gTotiRAgACBNgWG17pH5Htuo7c5X10RIECAAAECBAgQIECAAIESBfpIDyPSLa9rL3E6aiJAgACBGgUE6DVOTc0ECBAgULTAb7fR4/MUsVN0oYojQIAAAQIECBAgQIAAAQIEqhUYbp3nlD5ZXt++X20TCidAgAABAgUKCNALHIqSCBAgQKB+geE2esr9pynFF/V3owMCBAgQIECAAAECBAgQIECgJIGc405O3TdunZc0FbUQIECAQCsCAvRWJqkPAgQIEChS4PLe4ysv4tJnXute5HgURYAAAQIECBAgQIAAAQIEqhLIEU+66D8+XOzuV1W4YgkQIECAQEUCAvSKhqVUAgQIEKhX4LfXuue7KdJGvV2onAABAgQIECBAgAABAgQIEJhCwOvap1C3JwEC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IECAAAECBAjMRmD4vnnk+HtO3TeC89mMXaMECBAgQIDACAIC9BFQLUmAAAECBAjMU8B30uc5d10TIECAAAECBAgQmFLA982n1Lc3AQIECBAg0KKAAL3FqeqJAAECBAgQmFTAd9In5bc5AQIECBAgQIAAgVkI+L75LMasSQIECBAgQGACAQH6BOi2JECAAAECBOYh8L/fSY8PUsTOPLrWJQECBAgQIECAAAECYwkM3zePnL71mvaxhK1LgAABAgQIEIgQoDsFBAgQIECAAIE1CAyvd085PhekrwHbFgQIECBAgAABAgQaExi+b55TfLW8vn2/sda0Q4AAAQIECBAoTkCAXtxIFESAAAECBAi0LOD17i1PV28ECBAgQIAAAQIEVivgNe2r9bQaAQIECBAgQOA0AgL00yj5DQECBAgQIEBgxQJe775iUMsRIECAAAECBAgQaETAa9obGaQ2CBAgQIAAgWoFBOjVjk7hBAgQIECAQCsCw+vdI6cPu8jXWulJHwQIECBAgAABAgQInE1guG0eKf/oNe1nc/NrAgQIECBAgMCqBQToqxa1HgECBAgQIEDgnALDrfSIfC9F/16KtHHOZTxGgAABAgQIECBAgEAlAsNt8xzdz5fixdeHi939SspWJgECBAgQIECgaQEBetPj1RwBAgQIECBQo8DLID31V1OOz1PETo09qJkAAQIECBAgQIAAgT8WyBFPcoqvInePloutI1YECBAgQIAAAQLlCAjQy5mFSggQIECAAAEC/yVwee/xlRdx6TOvd3c4CBAgQIAAAQIECNQvMLym3W3z+ueoAwIECBAgQKBtAQF62/PVHQECBAgQINCIwHArPeX+00jxgVvpjQxVGwQIECBAgAABArMQGG6bR46/59R947b5LEauSQIECBAgQKByAQF65QNUPgECBAgQIDA/gc0HBzcjpw/dSp/f7HVMgAABAgQIECBQj8Bw2zxS/nF5fft+PVWrlAABAgQIECBAQIDuDBAgQIAAAQIEKhVwK73SwSmbAAECBAgQIECgWQG3zZsdrcYIECBAgACBGQkI0Gc0bK0SIECAAAEC7Qq4ld7ubHVGgAABAgQIECBQvoDb5uXPSIUECBAgQIAAgdMKCNBPK+V3BAgQIECAAIEKBNxKr2BISiRAgAABAgQIEGhCwG3zJsaoCQIECBAgQIDAfwkI0B0K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" } ], "meshes": [ { "primitives": [ { "mode": 4, "attributes": { "POSITION": 0, "NORMAL": 1, "TEXCOORD_0": 2 }, "indices": 3, "material": 0 } ] } ], "extensionsUsed": [ "KHR_materials_emissive_strength" ] }';
  const b64 = btoa(rawGLTF);
  const dataURL = 'data:model/gltf+json;base64,' + b64;
  return dataURL;
};

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
// Browser related constants
const IS_IOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
const IS_ANDROID = () => /android/i.test(navigator.userAgent);
const EVENTS = {
  MOUSE_DOWN: "mousedown",
  MOUSE_MOVE: "mousemove",
  MOUSE_UP: "mouseup",
  TOUCH_START: "touchstart",
  TOUCH_MOVE: "touchmove",
  TOUCH_END: "touchend",
  WHEEL: "wheel",
  RESIZE: "resize",
  CONTEXT_MENU: "contextmenu",
  MOUSE_ENTER: "mouseenter",
  MOUSE_LEAVE: "mouseleave",
  POINTER_DOWN: "pointerdown",
  POINTER_MOVE: "pointermove",
  POINTER_UP: "pointerup",
  POINTER_ENTER: "pointerenter",
  POINTER_LEAVE: "pointerleave",
  LOAD: "load",
  ERROR: "error",
  CLICK: "click",
  DOUBLE_CLICK: "dblclick",
  CONTEXT_LOST: "webglcontextlost",
  CONTEXT_RESTORED: "webglcontextrestored"
};
const CURSOR = {
  GRAB: "grab",
  GRABBING: "grabbing",
  NONE: ""
};
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent.button
var MOUSE_BUTTON;
(function (MOUSE_BUTTON) {
  MOUSE_BUTTON[MOUSE_BUTTON["LEFT"] = 0] = "LEFT";
  MOUSE_BUTTON[MOUSE_BUTTON["MIDDLE"] = 1] = "MIDDLE";
  MOUSE_BUTTON[MOUSE_BUTTON["RIGHT"] = 2] = "RIGHT";
})(MOUSE_BUTTON || (MOUSE_BUTTON = {}));
const ANONYMOUS = "anonymous";
const EL_DIV = "div";
const EL_BUTTON = "button";

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * "auto"
 * @type {"auto"}
 */
const AUTO = "auto";
/**
 * Event type object with event name strings of {@link View3D}
 * @type {object}
 * @property {"ready"} READY {@link /docs/events/ready Ready event}
 * @property {"loadStart"} LOAD_START {@link /docs/events/loadStart Load start event}
 * @property {"load"} LOAD {@link /docs/events/load Load event}
 * @property {"loadError"} LOAD_ERROR {@link /docs/events/loadError Load error event}
 * @property {"resize"} RESIZE {@link /docs/events/resize Resize event}
 * @property {"beforeRender"} BEFORE_RENDER {@link /docs/events/beforeRender Before render event}
 * @property {"render"} RENDER {@link /docs/events/render Render event}
 * @property {"progress"} PROGRESS {@link /docs/events/progress Progress event}
 * @property {"inputStart"} INPUT_START {@link /docs/events/inputStart Input start event}
 * @property {"inputEnd"} INPUT_END {@link /docs/events/inputEnd Input end event}
 * @property {"cameraChange"} CAMERA_CHANGE {@link /docs/events/cameraChange Camera change event}
 * @property {"animationStart"} ANIMATION_START {@link /docs/events/animationStart Animation start event}
 * @property {"animationLoop"} ANIMATION_LOOP {@link /docs/events/animationLoop Animation loop event}
 * @property {"animationFinished"} ANIMATION_FINISHED {@link /docs/events/animationFinished Animation finished event}
 * @property {"annotationFocus"} ANNOTATION_FOCUS {@link /docs/events/annotationFocus Annotation focus event}
 * @property {"annotationUnfocus"} ANNOTATION_UNFOCUS {@link /docs/events/annotationUnfocus Annotation unfocus event}
 * @property {"quickLookTap"} QUICK_LOOK_TAP {@link /docs/events/quickLookTap Quick Look Tap event}
 * @property {"arStart"} AR_START {@link /docs/events/arStart AR start evemt}
 * @property {"arEnd"} AR_END {@link /docs/events/arEnd AR end event}
 * @property {"arModelPlaced"} AR_MODEL_PLACED {@link /docs/events/arModelPlaced AR model placed event}
 * @example
 * ```ts
 * import { EVENTS } from "@egjs/view3d";
 * EVENTS.RESIZE; // "resize"
 * ```
 */
const EVENTS$1 = {
  READY: "ready",
  LOAD_START: "loadStart",
  LOAD: "load",
  LOAD_ERROR: "loadError",
  LOAD_FINISH: "loadFinish",
  MODEL_CHANGE: "modelChange",
  RESIZE: "resize",
  BEFORE_RENDER: "beforeRender",
  RENDER: "render",
  PROGRESS: "progress",
  INPUT_START: "inputStart",
  INPUT_END: "inputEnd",
  CAMERA_CHANGE: "cameraChange",
  ANIMATION_START: "animationStart",
  ANIMATION_LOOP: "animationLoop",
  ANIMATION_FINISHED: "animationFinished",
  ANNOTATION_FOCUS: "annotationFocus",
  ANNOTATION_UNFOCUS: "annotationUnfocus",
  AR_START: "arStart",
  AR_END: "arEnd",
  AR_MODEL_PLACED: "arModelPlaced",
  QUICK_LOOK_TAP: "quickLookTap"
};
/**
 * Collection of predefined easing functions
 * @type {object}
 * @property {function} SINE_WAVE
 * @property {function} EASE_OUT_CUBIC
 * @property {function} EASE_OUT_BOUNCE
 * @example
 * ```ts
 * import View3D, { EASING } from "@egjs/view3d";
 *
 * new RotateControl({
 *  easing: EASING.EASE_OUT_CUBIC,
 * });
 * ```
 */
const EASING = {
  SINE_WAVE: x => Math.sin(x * Math.PI * 2),
  EASE_OUT_CUBIC: x => 1 - Math.pow(1 - x, 3),
  EASE_OUT_BOUNCE: x => {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
  }
};
/**
 * Default class names that View3D uses
 * @type {object}
 * @property {"view3d-wrapper"} WRAPPER A class name for wrapper element
 * @property {"view3d-canvas"} CANVAS A class name for canvas element
 * @property {"view3d-poster"} POSTER A class name for poster element
 * @property {"view3d-ar-overlay"} AR_OVERLAY A class name for AR overlay element
 * @property {"view3d-annotation-wrapper"} ANNOTATION_WRAPPER A class name for annotation wrapper element
 * @property {"view3d-annotation"} ANNOTATION A class name for annotation element
 * @property {"default"} ANNOTATION_DEFAULT A class name for default style annotation element
 * @property {"selected"} ANNOTATION_SELECTED A class name for selected annotation element
 * @property {"flip-x"} ANNOTATION_FLIP_X A class name for annotation element which has tooltip on the left side
 * @property {"flip-y"} ANNOTATION_FLIP_Y A class name for annotation element which has tooltip on the bottom side
 * @property {"ctx-lost"} CTX_LOST A class name for canvas element which will be added on context lost
 */
const DEFAULT_CLASS = {
  WRAPPER: "view3d-wrapper",
  CANVAS: "view3d-canvas",
  POSTER: "view3d-poster",
  AR_OVERLAY: "view3d-ar-overlay",
  ANNOTATION_WRAPPER: "view3d-annotation-wrapper",
  ANNOTATION: "view3d-annotation",
  ANNOTATION_TOOLTIP: "view3d-annotation-tooltip",
  ANNOTATION_DEFAULT: "default",
  ANNOTATION_SELECTED: "selected",
  ANNOTATION_HIDDEN: "hidden",
  ANNOTATION_FLIP_X: "flip-x",
  ANNOTATION_FLIP_Y: "flip-y",
  CTX_LOST: "ctx-lost"
};
/**
 * Possible values for the toneMapping option.
 * This is used to approximate the appearance of high dynamic range (HDR) on the low dynamic range medium of a standard computer monitor or mobile device's screen.
 * @type {object}
 * @property {THREE.LinearToneMapping} LINEAR
 * @property {THREE.ReinhardToneMapping} REINHARD
 * @property {THREE.CineonToneMapping} CINEON
 * @property {THREE.ACESFilmicToneMapping} ACES_FILMIC
 */
const TONE_MAPPING = {
  LINEAR: LinearToneMapping,
  REINHARD: ReinhardToneMapping,
  CINEON: CineonToneMapping,
  ACES_FILMIC: ACESFilmicToneMapping
};
/**
 * Types of zoom control
 * @type {object}
 * @property {"fov"} FOV Zoom by chaning fov(field-of-view). This will prevent camera from going inside the model.
 * @property {"distance"} DISTANCE Zoom by changing camera distance from the model.
 */
const ZOOM_TYPE = {
  FOV: "fov",
  DISTANCE: "distance"
};
/**
 * Available AR session types
 * @type {object}
 * @property {"WebXR"} WEBXR An AR session based on {@link https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API WebXR Device API}
 * @property {"SceneViewer"} SCENE_VIEWER An AR session based on {@link https://developers.google.com/ar/develop/java/scene-viewer Google SceneViewer}, which is only available in Android
 * @property {"QuickLook"} QUICK_LOOK An AR session based on Apple {@link https://developer.apple.com/augmented-reality/quick-look/ AR Quick Look}, which is only available in iOS
 */
const AR_SESSION_TYPE = {
  WEBXR: "webAR",
  SCENE_VIEWER: "sceneViewer",
  QUICK_LOOK: "quickLook"
};
/**
 * @type {object}
 * @property {"ar_only"} ONLY_AR
 * @property {"3d_only"} ONLY_3D
 * @property {"ar_preferred"} PREFER_AR
 * @property {"3d_preferred"} PREFER_3D
 */
const SCENE_VIEWER_MODE = {
  ONLY_AR: "ar_only",
  ONLY_3D: "3d_only",
  PREFER_AR: "ar_preferred",
  PREFER_3D: "3d_preferred"
};
/**
 * <img src="https://docs-assets.developer.apple.com/published/b122cc68df/10cb0534-e1f6-42ed-aadb-5390c55ad3ff.png" />
 * @see https://developer.apple.com/documentation/arkit/adding_an_apple_pay_button_or_a_custom_action_in_ar_quick_look
 * @property {"plain"} PLAIN
 * @property {"pay"} PAY
 * @property {"buy"} BUY
 * @property {"check-out"} CHECK_OUT
 * @property {"book"} BOOK
 * @property {"donate"} DONATE
 * @property {"subscribe"} SUBSCRIBE
 */
const QUICK_LOOK_APPLE_PAY_BUTTON_TYPE = {
  PLAIN: "plain",
  PAY: "pay",
  BUY: "buy",
  CHECK_OUT: "check-out",
  BOOK: "book",
  DONATE: "donate",
  SUBSCRIBE: "subscribe"
};
/**
 * Available size of the custom banner
 * @type {object}
 * @property {"small"} SMALL 81pt
 * @property {"medium"} MEDIUM 121pt
 * @property {"large"} LARGE 161pt
 */
const QUICK_LOOK_CUSTOM_BANNER_SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
};
/**
 * Input types
 * @type {object}
 * @property {0} ROTATE Rotate input
 * @property {1} TRANSLATE Translate input
 * @property {2} ZOOM Zoom input
 */
const INPUT_TYPE = {
  ROTATE: 0,
  TRANSLATE: 1,
  ZOOM: 2
};
/**
 * Animation repeat modes
 * @type {object}
 * @property {"one"} ONE Repeat single animation
 * @property {"none"} NONE Pause on animation's last frame
 * @property {"all"} ALL Repeat all animations
 */
const ANIMATION_REPEAT_MODE = {
  ONE: "one",
  NONE: "none",
  ALL: "all"
};

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Renderer that renders View3D's Scene
 */
class Renderer {
  /**
   * Create new Renderer instance
   * @param {View3D} view3D An instance of View3D
   */
  constructor(view3D) {
    this._defaultRenderLoop = delta => {
      const view3D = this._view3D;
      const {
        control,
        autoPlayer,
        animator
      } = view3D;
      if (!animator.animating && !control.animating && !autoPlayer.animating) return;
      this._renderFrame(delta);
    };
    this._onContextLost = () => {
      const canvas = this._canvas;
      canvas.classList.add(DEFAULT_CLASS.CTX_LOST);
    };
    this._onContextRestore = () => {
      const canvas = this._canvas;
      const scene = this._view3D.scene;
      canvas.classList.remove(DEFAULT_CLASS.CTX_LOST);
      scene.initTextures();
      this.renderSingleFrame();
    };
    const canvas = findCanvas(view3D.rootEl, view3D.canvasSelector);
    this._canvas = canvas;
    this._view3D = view3D;
    this._renderQueued = false;
    const renderer = new WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true
    });
    renderer.toneMapping = view3D.toneMapping;
    renderer.toneMappingExposure = view3D.exposure;
    renderer.outputEncoding = sRGBEncoding;
    renderer.setClearColor(0x000000, 0);
    this._halfFloatAvailable = checkHalfFloatAvailable(renderer);
    this._renderer = renderer;
    this._clock = new Clock(false);
    this._canvasSize = new Vector2();
    canvas.addEventListener(EVENTS.CONTEXT_LOST, this._onContextLost);
    canvas.addEventListener(EVENTS.CONTEXT_RESTORED, this._onContextRestore);
  }
  /**
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement HTMLCanvasElement} given when creating View3D instance
   * @type HTMLCanvasElement
   * @readonly
   */
  get canvas() {
    return this._canvas;
  }
  /**
   * Current {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext WebGLRenderingContext}
   * @type WebGLRenderingContext
   * @readonly
   */
  get context() {
    return this._renderer.getContext();
  }
  /**
   * Three.js {@link https://threejs.org/docs/#api/en/renderers/WebGLRenderer WebGLRenderer} instance
   * @type THREE.WebGLRenderer
   * @readonly
   */
  get threeRenderer() {
    return this._renderer;
  }
  /**
   * Default render loop of View3D
   * @type {function}
   * @readonly
   */
  get defaultRenderLoop() {
    return this._defaultRenderLoop;
  }
  /**
   * The rendering width and height of the canvas
   * @type {object}
   * @param {number} width Width of the canvas
   * @param {number} height Height of the canvas
   * @readonly
   */
  get size() {
    const renderingSize = this._renderer.getSize(new Vector2());
    return {
      width: renderingSize.width,
      height: renderingSize.y
    };
  }
  /**
   * Canvas element's actual size
   * @type THREE.Vector2
   * @readonly
   */
  get canvasSize() {
    return this._canvasSize;
  }
  /**
   * An object containing details about the capabilities of the current RenderingContext.
   * Merged with three.js WebGLRenderer's capabilities.
   */
  get capabilities() {
    const renderer = this._renderer;
    return Object.assign(Object.assign({}, renderer.capabilities), {
      halfFloat: this._halfFloatAvailable
    });
  }
  /**
   * Destroy the renderer and stop active animation loop
   */
  destroy() {
    const canvas = this._canvas;
    this.stopAnimationLoop();
    this._renderer.dispose();
    canvas.removeEventListener(EVENTS.CONTEXT_LOST, this._onContextLost);
    canvas.removeEventListener(EVENTS.CONTEXT_RESTORED, this._onContextRestore);
  }
  /**
   * Resize the renderer based on current canvas width / height
   * @returns {void}
   */
  resize() {
    const renderer = this._renderer;
    const canvas = this._canvas;
    if (renderer.xr.isPresenting) return;
    const width = canvas.clientWidth || 1;
    const height = canvas.clientHeight || 1;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height, false);
    this._canvasSize.set(width, height);
  }
  setAnimationLoop(callback) {
    const view3D = this._view3D;
    const clock = this._clock;
    clock.start();
    this._renderer.setAnimationLoop((timestamp, frame) => {
      const delta = Math.min(clock.getDelta(), view3D.maxDeltaTime);
      callback(delta, frame);
    });
  }
  stopAnimationLoop() {
    this._clock.stop();
    // See https://threejs.org/docs/#api/en/renderers/WebGLRenderer.setAnimationLoop
    this._renderer.setAnimationLoop(null);
  }
  renderSingleFrame(immediate = false) {
    const renderer = this._renderer;
    if (!renderer.xr.isPresenting) {
      if (immediate) {
        this._renderFrame(0);
      } else if (!this._renderQueued) {
        requestAnimationFrame(() => {
          this._renderFrame(0);
        });
        this._renderQueued = true;
      }
    }
  }
  _renderFrame(delta) {
    const view3D = this._view3D;
    const threeRenderer = this._renderer;
    const {
      scene,
      camera,
      control,
      autoPlayer,
      animator,
      annotation
    } = view3D;
    if (threeRenderer.getContext().isContextLost()) return;
    const deltaMiliSec = delta * 1000;
    this._renderQueued = false;
    animator.update(delta);
    control.update(deltaMiliSec);
    autoPlayer.update(deltaMiliSec);
    view3D.trigger(EVENTS$1.BEFORE_RENDER, {
      type: EVENTS$1.BEFORE_RENDER,
      target: view3D,
      delta: deltaMiliSec
    });
    camera.updatePosition();
    scene.shadowPlane.render();
    threeRenderer.render(scene.root, camera.threeCamera);
    // Render annotations
    annotation.render();
    view3D.trigger(EVENTS$1.RENDER, {
      type: EVENTS$1.RENDER,
      target: view3D,
      delta: deltaMiliSec
    });
  }
}

/**
 * Base class for all loaders that View3D uses
 */
class Loader {
  /** */
  constructor(view3D) {
    this._onLoadingProgress = (evt, src, context) => {
      const view3D = this._view3D;
      context.initialized = true;
      context.lengthComputable = evt.lengthComputable;
      context.loaded = evt.loaded;
      context.total = evt.total;
      view3D.trigger(EVENTS$1.PROGRESS, {
        type: EVENTS$1.PROGRESS,
        target: view3D,
        src,
        lengthComputable: evt.lengthComputable,
        loaded: evt.loaded,
        total: evt.total
      });
    };
    this._view3D = view3D;
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Texture loader
 */
class TextureLoader extends Loader {
  /**
   * Create new TextureLoader instance
   * @param {View3D} view3D An instance of View3D
   */
  constructor(view3D) {
    super(view3D);
  }
  /**
   * Create new {@link https://threejs.org/docs/index.html#api/en/textures/Texture Texture} with given url
   * Texture's {@link https://threejs.org/docs/index.html#api/en/textures/Texture.flipY flipY} property is `true` by Three.js's policy, so be careful when using it as a map texture.
   * @param url url to fetch image
   */
  load(url) {
    const view3D = this._view3D;
    return new Promise((resolve, reject) => {
      const loader = new TextureLoader$1();
      const loadingContext = createLoadingContext(view3D, url);
      loader.setCrossOrigin(ANONYMOUS);
      loader.load(url, resolve, evt => this._onLoadingProgress(evt, url, loadingContext), err => {
        loadingContext.initialized = true;
        reject(err);
      });
    });
  }
  /**
   * Create new texture with given HDR(RGBE) image url
   * @param url image url
   */
  loadHDRTexture(url) {
    const view3D = this._view3D;
    return new Promise((resolve, reject) => {
      const loader = new RGBELoader();
      if (!view3D.renderer.capabilities.halfFloat) {
        loader.type = FloatType;
      }
      const loadingContext = createLoadingContext(view3D, url);
      loader.setCrossOrigin(ANONYMOUS);
      loader.load(url, texture => {
        texture.mapping = EquirectangularReflectionMapping;
        resolve(texture);
      }, evt => this._onLoadingProgress(evt, url, loadingContext), err => {
        loadingContext.initialized = true;
        reject(err);
      });
    });
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
// Constants that used internally
// Texture map names that used in THREE#MeshStandardMaterial
const STANDARD_MAPS = ["alphaMap", "aoMap", "bumpMap", "displacementMap", "emissiveMap", "envMap", "lightMap", "map", "metalnessMap", "normalMap", "roughnessMap", "sheenColorMap", "sheenRoughnessMap", "specularColorMap", "specularIntensityMap", "transmissionMap", "clearcoatMap", "clearcoatNormalMap"];
const CONTROL_EVENTS = {
  HOLD: "hold",
  RELEASE: "release",
  ENABLE: "enable",
  DISABLE: "disable"
};
var GESTURE;
(function (GESTURE) {
  GESTURE[GESTURE["NONE"] = 0] = "NONE";
  GESTURE[GESTURE["ONE_FINGER_HORIZONTAL"] = 1] = "ONE_FINGER_HORIZONTAL";
  GESTURE[GESTURE["ONE_FINGER_VERTICAL"] = 2] = "ONE_FINGER_VERTICAL";
  GESTURE[GESTURE["ONE_FINGER"] = 3] = "ONE_FINGER";
  GESTURE[GESTURE["TWO_FINGER_HORIZONTAL"] = 4] = "TWO_FINGER_HORIZONTAL";
  GESTURE[GESTURE["TWO_FINGER_VERTICAL"] = 8] = "TWO_FINGER_VERTICAL";
  GESTURE[GESTURE["TWO_FINGER"] = 12] = "TWO_FINGER";
  GESTURE[GESTURE["PINCH"] = 16] = "PINCH";
})(GESTURE || (GESTURE = {}));
const VARIANT_EXTENSION = "KHR_materials_variants";
const CUSTOM_TEXTURE_LOD_EXTENSION = "EXT_View3D_texture_LOD";
const TEXTURE_LOD_EXTRA = "view3d-lod";
const ANNOTATION_EXTRA = "view3d-annotation";

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Helper class to easily add shadow plane under your 3D model
 */
class ShadowPlane {
  /**
   * Create new shadow plane
   * @param {object} options Options
   * @param {number} [options.darkness=0.5] Darkness of the shadow.
   * @param {number} [options.mapSize=9] Size of the shadow map. Texture of size (n * n) where n = 2 ^ (mapSize) will be used as shadow map. Should be an integer value.
   * @param {number} [options.blur=3.5] Blurriness of the shadow.
   * @param {number} [options.shadowScale=1] Scale of the shadow range. This usually means which height of the 3D model shadow will be affected by.
   * @param {number} [options.planeScale=2] Scale of the shadow plane. Use higher value if the shadow is clipped.
   */
  constructor(view3D, {
    darkness = 0.5,
    mapSize = 9,
    blur = 3.5,
    shadowScale = 1,
    planeScale = 2
  } = {}) {
    this._view3D = view3D;
    this._darkness = darkness;
    this._mapSize = mapSize;
    this._blur = blur;
    this._shadowScale = shadowScale;
    this._planeScale = planeScale;
    const threeRenderer = view3D.renderer.threeRenderer;
    const maxTextureSize = Math.min(Math.pow(2, Math.floor(mapSize)), threeRenderer.capabilities.maxTextureSize);
    this._root = new Group();
    this._renderTarget = new WebGLRenderTarget(maxTextureSize, maxTextureSize, {
      format: RGBAFormat
    });
    this._blurTarget = new WebGLRenderTarget(maxTextureSize, maxTextureSize, {
      format: RGBAFormat
    });
    this._renderTarget.texture.generateMipmaps = false;
    this._blurTarget.texture.generateMipmaps = false;
    const shadowCamera = new OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0);
    shadowCamera.rotation.x = Math.PI / 2;
    this._shadowCamera = shadowCamera;
    this._root.add(shadowCamera);
    const blurCamera = new OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0);
    this._blurCamera = blurCamera;
    this._setupPlanes();
  }
  /**
   * Root of the object
   * @readonly
   */
  get root() {
    return this._root;
  }
  /**
   * Darkness of the shadow.
   * @type {number}
   * @default 0.5
   */
  get darkness() {
    return this._darkness;
  }
  /**
   * Size of the shadow map. Texture of size (n * n) where n = 2 ^ (mapSize) will be used as shadow map. Should be an integer value.
   * @type {number}
   * @default 9
   */
  get mapSize() {
    return this._mapSize;
  }
  /**
   * Blurriness of the shadow.
   * @type {number}
   * @default 3.5
   */
  get blur() {
    return this._blur;
  }
  /**
   * Scale of the shadow range. Using higher values will make shadow more even-textured.
   * @type {number}
   * @default 1
   */
  get shadowScale() {
    return this._shadowScale;
  }
  /**
   * Scale of the shadow plane. Use higher value if the shadow is clipped.
   * @type {number}
   * @default 2
   */
  get planeScale() {
    return this._planeScale;
  }
  set darkness(val) {
    this._plane.material.opacity = val;
    this._darkness = val;
  }
  set blur(val) {
    this._blur = val;
  }
  set shadowScale(val) {
    this._shadowScale = val;
    const model = this._view3D.model;
    if (model) {
      this.updateDimensions(model);
    }
  }
  updateDimensions(model) {
    const root = this._root;
    const shadowCam = this._shadowCamera;
    const baseScale = this._planeScale;
    const boundingSphere = model.bbox.getBoundingSphere(new Sphere());
    const radius = boundingSphere.radius;
    const camSize = baseScale * 2 * radius;
    const shadowScale = this._shadowScale;
    shadowCam.far = shadowScale * (model.bbox.max.y - model.bbox.min.y) / camSize;
    shadowCam.rotation.set(Math.PI / 2, Math.PI, 0, "YXZ");
    root.position.copy(boundingSphere.center).setY(model.bbox.min.y);
    root.scale.setScalar(camSize);
    shadowCam.updateProjectionMatrix();
  }
  render() {
    this._plane.visible = false;
    const view3D = this._view3D;
    const {
      renderer,
      ar
    } = view3D;
    const shadowCamera = this._shadowCamera;
    const threeRenderer = renderer.threeRenderer;
    const scene = ar.activeSession ? ar.activeSession.arScene : view3D.scene;
    // disable XR for offscreen rendering
    const xrEnabled = threeRenderer.xr.enabled;
    threeRenderer.xr.enabled = false;
    const sceneRoot = scene.root;
    const initialBackground = sceneRoot.background;
    sceneRoot.background = null;
    // force the depthMaterial to everything
    sceneRoot.overrideMaterial = this._depthMaterial;
    // set renderer clear alpha
    const initialClearAlpha = threeRenderer.getClearAlpha();
    threeRenderer.setClearAlpha(0);
    // render to the render target to get the depths
    const prevRenderTarget = threeRenderer.getRenderTarget();
    threeRenderer.setRenderTarget(this._renderTarget);
    threeRenderer.clear();
    threeRenderer.render(sceneRoot, shadowCamera);
    // and reset the override material
    sceneRoot.overrideMaterial = null;
    this._blurShadow(this._blur);
    // a second pass to reduce the artifacts
    // (0.4 is the minimum blur amout so that the artifacts are gone)
    this._blurShadow(this._blur * 0.4);
    // reset and render the normal scene
    threeRenderer.xr.enabled = xrEnabled;
    threeRenderer.setRenderTarget(prevRenderTarget);
    threeRenderer.setClearAlpha(initialClearAlpha);
    sceneRoot.background = initialBackground;
    this._plane.visible = true;
  }
  _blurShadow(amount) {
    const {
      renderer
    } = this._view3D;
    const blurCamera = this._blurCamera;
    const threeRenderer = renderer.threeRenderer;
    const blurPlane = this._blurPlane;
    const renderTarget = this._renderTarget;
    const blurTarget = this._blurTarget;
    const horizontalBlurMaterial = this._horizontalBlurMaterial;
    const verticalBlurMaterial = this._verticalBlurMaterial;
    blurPlane.visible = true;
    // blur horizontally and draw in the renderTargetBlur
    horizontalBlurMaterial.uniforms.tDiffuse.value = renderTarget.texture;
    horizontalBlurMaterial.uniforms.h.value = amount * 1 / 256;
    horizontalBlurMaterial.needsUpdate = true;
    blurPlane.material = horizontalBlurMaterial;
    threeRenderer.setRenderTarget(blurTarget);
    threeRenderer.render(blurPlane, blurCamera);
    // blur vertically and draw in the main renderTarget
    verticalBlurMaterial.uniforms.tDiffuse.value = blurTarget.texture;
    verticalBlurMaterial.uniforms.v.value = amount * 1 / 256;
    verticalBlurMaterial.needsUpdate = true;
    blurPlane.material = verticalBlurMaterial;
    threeRenderer.setRenderTarget(renderTarget);
    threeRenderer.render(blurPlane, blurCamera);
    blurPlane.visible = false;
  }
  _setupPlanes() {
    const root = this._root;
    const planeGeometry = new PlaneBufferGeometry();
    const planeMat = new MeshBasicMaterial({
      opacity: this._darkness,
      transparent: true,
      side: BackSide,
      depthWrite: false,
      map: this._renderTarget.texture
    });
    const plane = new Mesh(planeGeometry, planeMat);
    plane.renderOrder = 1;
    plane.scale.set(-1, -1, 1);
    plane.rotation.order = "YXZ";
    plane.rotation.x = Math.PI / 2;
    this._plane = plane;
    root.add(plane);
    const blurPlane = new Mesh(planeGeometry);
    this._blurPlane = blurPlane;
    const depthMaterial = new MeshDepthMaterial();
    depthMaterial.onBeforeCompile = shader => {
      shader.fragmentShader = `
        ${shader.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );", "gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * opacity );")}`;
    };
    this._depthMaterial = depthMaterial;
    const horizontalBlurMaterial = new ShaderMaterial(HorizontalBlurShader);
    horizontalBlurMaterial.depthTest = false;
    this._horizontalBlurMaterial = horizontalBlurMaterial;
    const verticalBlurMaterial = new ShaderMaterial(VerticalBlurShader);
    verticalBlurMaterial.depthTest = false;
    this._verticalBlurMaterial = verticalBlurMaterial;
  }
}

/**
 * Skybox texture generator
 */
class Skybox {
  static createDefaultEnv(renderer) {
    const envScene = new Scene$1();
    const point = new PointLight(0xffffff, 0.8, 20);
    point.decay = 2;
    point.position.set(0, 7, 0);
    envScene.add(point);
    const boxGeo = new BoxBufferGeometry(1, 1, 1);
    const boxMat = new MeshStandardMaterial({
      side: BackSide
    });
    const box = new Mesh(boxGeo, boxMat);
    box.castShadow = false;
    box.scale.set(15, 45, 15);
    box.position.set(0, 20, 0);
    envScene.add(box);
    const topLight = Skybox._createRectAreaLightSource({
      intensity: 4.5,
      width: 4,
      height: 4
    });
    topLight.position.set(0, 2.5, 0);
    topLight.rotateX(Math.PI / 2);
    const frontLightIntensity = 3;
    const frontLight0 = Skybox._createRectAreaLightSource({
      intensity: frontLightIntensity,
      width: 2,
      height: 2
    });
    frontLight0.position.set(0, 1, 4);
    frontLight0.lookAt(0, 0, 0);
    const frontLight1 = Skybox._createRectAreaLightSource({
      intensity: frontLightIntensity,
      width: 2,
      height: 2
    });
    frontLight1.position.set(-4, 1, 1);
    frontLight1.lookAt(0, 0, 0);
    const frontLight2 = Skybox._createRectAreaLightSource({
      intensity: frontLightIntensity,
      width: 2,
      height: 2
    });
    frontLight2.position.set(4, 1, 1);
    frontLight2.lookAt(0, 0, 0);
    const backLight1 = Skybox._createRectAreaLightSource({
      intensity: 2.5,
      width: 2,
      height: 2
    });
    backLight1.position.set(1.5, 1, -4);
    backLight1.lookAt(0, 0, 0);
    const backLight2 = Skybox._createRectAreaLightSource({
      intensity: 2.5,
      width: 2,
      height: 2
    });
    backLight2.position.set(-1.5, 1, -4);
    backLight2.lookAt(0, 0, 0);
    envScene.add(topLight, frontLight0, frontLight1, frontLight2, backLight1, backLight2);
    const outputEncoding = renderer.outputEncoding;
    const toneMapping = renderer.toneMapping;
    renderer.outputEncoding = LinearEncoding;
    renderer.toneMapping = NoToneMapping;
    const renderTarget = new PMREMGenerator(renderer).fromScene(envScene, 0.035);
    renderer.outputEncoding = outputEncoding;
    renderer.toneMapping = toneMapping;
    return renderTarget.texture;
  }
  /**
   * Create blurred cubemap texture of the given texture and use that as the skybox
   * @param {THREE.Texture} texture Equirect texture
   * @returns {this}
   */
  static createBlurredHDR(view3D, texture) {
    const threeRenderer = view3D.renderer.threeRenderer;
    const bgScene = new Scene$1();
    bgScene.background = texture;
    // To prevent exposure applied twice
    const origExposure = threeRenderer.toneMappingExposure;
    threeRenderer.toneMappingExposure = 1;
    const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
      encoding: sRGBEncoding,
      format: RGBAFormat
    });
    const cubeCamera = new CubeCamera(0.1, 1000, cubeRenderTarget);
    cubeCamera.update(threeRenderer, bgScene);
    const lightProbe = LightProbeGenerator.fromCubeRenderTarget(threeRenderer, cubeRenderTarget);
    const skyboxMat = new MeshStandardMaterial({
      side: BackSide
    });
    const geometry = new IcosahedronBufferGeometry(1, 4);
    const skyboxScene = new Scene$1();
    const skyboxMesh = new Mesh(geometry, skyboxMat);
    const normals = geometry.getAttribute("normal");
    for (let i = 0; i < normals.count; i++) {
      normals.setXYZ(i, -normals.getX(i), -normals.getY(i), -normals.getZ(i));
    }
    skyboxScene.add(skyboxMesh);
    skyboxScene.add(lightProbe);
    cubeCamera.update(threeRenderer, skyboxScene);
    threeRenderer.toneMappingExposure = origExposure;
    return cubeRenderTarget.texture;
  }
  static _createRectAreaLightSource({
    intensity,
    width,
    height
  }) {
    const planeBufferGeo = new PlaneBufferGeometry(width, height);
    const mat = new MeshBasicMaterial();
    mat.color.setScalar(intensity);
    return new Mesh(planeBufferGeo, mat);
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Scene that View3D will render.
 * All model datas including Mesh, Lights, etc. will be included on this
 */
class Scene {
  /**
   * Create new Scene instance
   * @param {View3D} view3D An instance of View3D
   */
  constructor(view3D) {
    this._view3D = view3D;
    this._root = new Scene$1();
    this._userObjects = new Group();
    this._envObjects = new Group();
    this._fixedObjects = new Group();
    this._shadowPlane = new ShadowPlane(view3D, getObjectOption(view3D.shadow));
    const root = this._root;
    const userObjects = this._userObjects;
    const envObjects = this._envObjects;
    const fixedObjects = this._fixedObjects;
    const shadowPlane = this._shadowPlane;
    userObjects.name = "userObjects";
    envObjects.name = "envObjects";
    fixedObjects.name = "fixedObjects";
    root.add(userObjects, envObjects, fixedObjects);
    if (view3D.shadow) {
      fixedObjects.add(shadowPlane.root);
    }
  }
  /**
   * Root {@link https://threejs.org/docs/#api/en/scenes/Scene THREE.Scene} object
   * @readonly
   */
  get root() {
    return this._root;
  }
  /**
   * Shadow plane & light
   * @type {ShadowPlane}
   * @readonly
   */
  get shadowPlane() {
    return this._shadowPlane;
  }
  /**
   * Group that contains volatile user objects
   * @readonly
   */
  get userObjects() {
    return this._userObjects;
  }
  /**
   * Group that contains non-volatile user objects
   * @readonly
   */
  get envObjects() {
    return this._envObjects;
  }
  /**
   * Group that contains objects that View3D manages
   * @readonly
   */
  get fixedObjects() {
    return this._fixedObjects;
  }
  /**
   * Reset scene to initial state
   * @param {object} options Options
   * @param {boolean} [options.volatileOnly=true] Remove only volatile objects
   * @returns {void}
   */
  reset({
    volatileOnly = true
  } = {}) {
    this._removeChildsOf(this._userObjects);
    if (!volatileOnly) {
      this._removeChildsOf(this._envObjects);
    }
  }
  /**
   * Add new Three.js {@link https://threejs.org/docs/#api/en/core/Object3D Object3D} into the scene
   * @param object {@link https://threejs.org/docs/#api/en/core/Object3D THREE.Object3D}s to add
   * @param volatile If set to true, objects will be removed after displaying another 3D model
   * @returns {void}
   */
  add(object, volatile = true) {
    const objRoot = volatile ? this._userObjects : this._envObjects;
    const objects = Array.isArray(object) ? object : [object];
    objRoot.add(...objects);
  }
  /**
   * Remove Three.js {@link https://threejs.org/docs/#api/en/core/Object3D Object3D} into the scene
   * @param object {@link https://threejs.org/docs/#api/en/core/Object3D THREE.Object3D}s to add
   * @returns {void}
   */
  remove(object) {
    const objects = Array.isArray(object) ? object : [object];
    this._userObjects.remove(...objects);
    this._envObjects.remove(...objects);
  }
  /**
   * Set background of the scene.
   * @param background A color / image url to set as background
   * @returns {Promise<void>}
   */
  setBackground(background) {
    return __awaiter(this, void 0, void 0, function* () {
      const view3D = this._view3D;
      const root = this._root;
      if (typeof background === "number" || background.charAt(0) === "#") {
        root.background = new Color(background);
      } else {
        const textureLoader = new TextureLoader(view3D);
        const texture = yield textureLoader.load(background);
        texture.encoding = sRGBEncoding;
        root.background = texture;
      }
      view3D.renderer.renderSingleFrame();
    });
  }
  /**
   * Set scene's skybox, which both affects background & envmap
   * @param url An URL to equirectangular image
   * @returns {Promise<void>}
   */
  setSkybox(url) {
    return __awaiter(this, void 0, void 0, function* () {
      const root = this._root;
      const view3D = this._view3D;
      // Destroy previous skybox
      if (root.background && root.background.isTexture) {
        root.background.dispose();
      }
      if (url) {
        const textureLoader = new TextureLoader(view3D);
        const texture = yield textureLoader.loadHDRTexture(url);
        if (view3D.skyboxBlur) {
          root.background = Skybox.createBlurredHDR(view3D, texture);
        } else {
          root.background = texture;
        }
        root.environment = texture;
      } else {
        root.background = null;
        root.environment = null;
      }
      view3D.renderer.renderSingleFrame();
    });
  }
  /**
   * Set scene's environment map that affects all physical materials in the scene
   * @param url An URL to equirectangular image
   * @returns {void}
   */
  setEnvMap(url) {
    return __awaiter(this, void 0, void 0, function* () {
      const view3D = this._view3D;
      const root = this._root;
      if (url) {
        const textureLoader = new TextureLoader(view3D);
        const texture = yield textureLoader.loadHDRTexture(url);
        root.environment = texture;
      } else {
        root.environment = null;
      }
      view3D.renderer.renderSingleFrame();
    });
  }
  /**
   * @internal
   */
  initTextures() {
    const {
      skybox,
      envmap,
      background,
      useDefaultEnv
    } = this._view3D;
    const tasks = [];
    if (useDefaultEnv) {
      this.setDefaultEnv();
    }
    const hasEnvmap = skybox || envmap;
    if (hasEnvmap) {
      const loadEnv = skybox ? this.setSkybox(skybox) : this.setEnvMap(envmap);
      tasks.push(loadEnv);
    }
    if (!skybox && background) {
      tasks.push(this.setBackground(background));
    }
    return tasks;
  }
  /**
   * @internal
   */
  setDefaultEnv() {
    const renderer = this._view3D.renderer;
    const defaultEnv = Skybox.createDefaultEnv(renderer.threeRenderer);
    this._root.environment = defaultEnv;
  }
  _removeChildsOf(obj) {
    obj.traverse(child => {
      if (child.isMesh) {
        const mesh = child;
        // Release geometry & material memory
        mesh.geometry.dispose();
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        materials.forEach(mat => {
          STANDARD_MAPS.forEach(map => {
            if (mat[map]) {
              mat[map].dispose();
            }
          });
        });
      }
    });
    while (obj.children.length > 0) {
      obj.remove(obj.children[0]);
    }
  }
}

// Animation
const EASING$1 = EASING.EASE_OUT_CUBIC;
const ANIMATION_DURATION = 300;
const ANIMATION_LOOP = false;
const ANIMATION_RANGE = {
  min: 0,
  max: 1
};
// Camera
const FOV = 45;
const INFINITE_RANGE = {
  min: -Infinity,
  max: Infinity
};
const PITCH_RANGE = {
  min: -89.9,
  max: 89.9
};
const ANNOTATION_BREAKPOINT = {
  165: 0,
  135: 0.4,
  0: 1
};
const AR_OVERLAY_CLASS = "view3d-ar-overlay";
const DRACO_DECODER_URL = "https://www.gstatic.com/draco/versioned/decoders/1.4.1/";
const KTX_TRANSCODER_URL = "https://unpkg.com/three@0.134.0/examples/js/libs/basis/";
const AR_PRIORITY = [AR_SESSION_TYPE.WEBXR, AR_SESSION_TYPE.SCENE_VIEWER, AR_SESSION_TYPE.QUICK_LOOK];

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
class Motion {
  constructor({
    duration = ANIMATION_DURATION,
    loop = ANIMATION_LOOP,
    range = ANIMATION_RANGE,
    easing = EASING$1
  } = {}) {
    this._duration = duration;
    this._loop = loop;
    this._range = range;
    this._easing = easing;
    this._activated = false;
    this.reset(0);
  }
  get val() {
    return this._val;
  }
  get start() {
    return this._start;
  }
  get end() {
    return this._end;
  }
  get progress() {
    return this._progress;
  }
  get duration() {
    return this._duration;
  }
  get loop() {
    return this._loop;
  }
  get range() {
    return this._range;
  }
  get easing() {
    return this._easing;
  }
  get activated() {
    return this._activated;
  }
  set duration(val) {
    this._duration = val;
  }
  set loop(val) {
    this._loop = val;
  }
  set range(val) {
    this._range = val;
  }
  set easing(val) {
    this._easing = val;
  }
  /**
   * Update motion and progress it by given deltaTime
   * @param deltaTime number of milisec to update motion
   * @returns Difference(delta) of the value from the last update.
   */
  update(deltaTime) {
    if (!this._activated) return 0;
    const start = this._start;
    const end = this._end;
    const duration = this._duration;
    const prev = this._val;
    const loop = this._loop;
    const nextProgress = this._progress + deltaTime / duration;
    this._progress = loop ? circulate(nextProgress, 0, 1) : clamp(nextProgress, 0, 1);
    const easedProgress = this._easing(this._progress);
    this._val = lerp(start, end, easedProgress);
    if (!loop && this._progress >= 1) {
      this._activated = false;
    }
    return this._val - prev;
  }
  reset(defaultVal) {
    const range = this._range;
    const val = clamp(defaultVal, range.min, range.max);
    this._start = val;
    this._end = val;
    this._val = val;
    this._progress = 0;
    this._activated = false;
  }
  setEndDelta(delta) {
    const range = this._range;
    this._start = this._val;
    this._end = clamp(this._end + delta, range.min, range.max);
    this._progress = 0;
    this._activated = true;
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Control that animates model without user input
 */
class AnimationControl {
  /**
   * Create new instance of AnimationControl
   * @param from Start pose
   * @param to End pose
   * @param {object} options Options
   * @param {number} [options.duration=500] Animation duration
   * @param {function} [options.easing=(x: number) => 1 - Math.pow(1 - x, 3)] Animation easing function
   */
  constructor(view3D, from, to, {
    duration = ANIMATION_DURATION,
    easing = EASING$1,
    disableOnFinish = true
  } = {}) {
    this._enabled = false;
    this._finishCallbacks = [];
    this._view3D = view3D;
    this._motion = new Motion({
      duration,
      range: ANIMATION_RANGE,
      easing
    });
    this._disableOnFinish = disableOnFinish;
    this.changeStartEnd(from, to);
  }
  get element() {
    return null;
  }
  /**
   * Whether this control is enabled or not
   * @readonly
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * Duration of the animation
   */
  get duration() {
    return this._motion.duration;
  }
  /**
   * Easing function of the animation
   */
  get easing() {
    return this._motion.easing;
  }
  /**
   * Whether this control is animating the camera
   * @readonly
   * @type {boolean}
   */
  get animating() {
    return this._motion.activated;
  }
  set duration(val) {
    this._motion.duration = val;
  }
  set easing(val) {
    this._motion.easing = val;
  }
  /**
   * Destroy the instance and remove all event listeners attached
   * This also will reset CSS cursor to intial
   * @returns {void}
   */
  destroy() {
    this.disable();
  }
  changeStartEnd(from, to) {
    from = from.clone();
    to = to.clone();
    from.yaw = circulate(from.yaw, 0, 360);
    to.yaw = circulate(to.yaw, 0, 360);
    // Take the smaller degree
    if (Math.abs(to.yaw - from.yaw) > 180) {
      to.yaw = to.yaw < from.yaw ? to.yaw + 360 : to.yaw - 360;
    }
    this._from = from;
    this._to = to;
  }
  /**
   * Update control by given deltaTime
   * @param deltaTime Number of milisec to update
   * @returns {void}
   */
  update(deltaTime) {
    if (!this._enabled) return;
    const camera = this._view3D.camera;
    const from = this._from;
    const to = this._to;
    const motion = this._motion;
    motion.update(deltaTime);
    // Progress that easing is applied
    const progress = motion.val;
    camera.yaw = lerp(from.yaw, to.yaw, progress);
    camera.pitch = lerp(from.pitch, to.pitch, progress);
    camera.zoom = lerp(from.zoom, to.zoom, progress);
    camera.pivot = from.pivot.clone().lerp(to.pivot, progress);
    if (progress >= 1) {
      if (this._disableOnFinish) {
        this.disable();
      }
      this._finishCallbacks.forEach(callback => callback());
      this.clearFinished();
    }
  }
  /**
   * Enable this input and add event listeners
   * @returns {void}
   */
  enable() {
    if (this._enabled) return;
    this._enabled = true;
    this.reset();
  }
  /**
   * Disable this input and remove all event handlers
   * @returns {void}
   */
  disable() {
    if (!this._enabled) return;
    this._enabled = false;
  }
  reset() {
    this._motion.reset(0);
    this._motion.setEndDelta(1);
  }
  /**
   * Add callback which is called when animation is finished
   * @param callback Callback that will be called when animation finishes
   * @returns {void}
   */
  onFinished(callback) {
    this._finishCallbacks.push(callback);
  }
  /**
   * Remove all onFinished callbacks
   * @returns {void}
   */
  clearFinished() {
    this._finishCallbacks = [];
  }
  /* eslint-disable @typescript-eslint/no-unused-vars */
  resize(size) {
    // DO NOTHING
  }
  sync() {
    // Do nothing
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Data class of camera's pose
 */
class Pose {
  /**
   * Create new instance of pose
   * @param {number} yaw yaw
   * @param {number} pitch pitch
   * @param {number} zoom zoom
   * @param {number[]} pivot pivot
   * @example
   * ```ts
   * import { THREE, Pose } from "@egjs/view3d";
   *
   * const pose = new Pose(180, 45, 150, [5, -1, 3]);
   * ```
   */
  constructor(yaw, pitch, zoom, pivot = [0, 0, 0]) {
    this.yaw = yaw;
    this.pitch = pitch;
    this.zoom = zoom;
    this.pivot = new Vector3().fromArray(pivot);
  }
  /**
   * Clone this pose
   * @returns Cloned pose
   */
  clone() {
    return new Pose(this.yaw, this.pitch, this.zoom, this.pivot.toArray());
  }
  /**
   * Copy values from the other pose
   * @param {Pose} pose pose to copy
   */
  copy(pose) {
    this.yaw = pose.yaw;
    this.pitch = pose.pitch;
    this.zoom = pose.zoom;
    this.pivot.copy(pose.pivot);
  }
  /**
   * Return whether values of this pose is equal to other pose
   * @param {Pose} pose pose to check
   */
  equals(pose) {
    const {
      yaw,
      pitch,
      zoom,
      pivot
    } = this;
    return circulate(yaw, 0, 360) === circulate(pose.yaw, 0, 360) && pitch === pose.pitch && zoom === pose.zoom && pivot.equals(pose.pivot);
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Camera that renders the scene of View3D
 */
class Camera {
  /**
   * Create new Camera instance
   * @param {View3D} view3D An instance of View3D
   */
  constructor(view3D) {
    this._view3D = view3D;
    this._threeCamera = new PerspectiveCamera();
    this._maxTanHalfHFov = 0;
    this._baseFov = 45;
    this._baseDistance = 0;
    const initialZoom = isNumber(view3D.initialZoom) ? view3D.initialZoom : 0;
    this._defaultPose = new Pose(view3D.yaw, view3D.pitch, initialZoom);
    this._currentPose = this._defaultPose.clone();
    this._newPose = this._currentPose.clone();
  }
  /**
   * Three.js {@link https://threejs.org/docs/#api/en/cameras/PerspectiveCamera PerspectiveCamera} instance
   * @readonly
   * @type THREE.PerspectiveCamera
   */
  get threeCamera() {
    return this._threeCamera;
  }
  /**
   * Camera's default pose(yaw, pitch, zoom, pivot)
   * This will be new currentPose when {@link Camera#reset reset()} is called
   * @readonly
   * @type {Pose}
   */
  get defaultPose() {
    return this._defaultPose;
  }
  /**
   * Camera's current pose value
   * @readonly
   * @type {Pose}
   */
  get currentPose() {
    return this._currentPose.clone();
  }
  /**
   * Camera's new pose that will be applied on the next frame
   * {@link Camera#updatePosition} should be called after changing this value.
   * @type {Pose}
   */
  get newPose() {
    return this._newPose;
  }
  /**
   * Camera's current yaw
   * {@link Camera#updatePosition} should be called after changing this value.
   * @type {number}
   */
  get yaw() {
    return this._currentPose.yaw;
  }
  /**
   * Camera's current pitch
   * {@link Camera#updatePosition} should be called after changing this value.
   * @type {number}
   */
  get pitch() {
    return this._currentPose.pitch;
  }
  /**
   * Camera's current zoom value
   * {@link Camera#updatePosition} should be called after changing this value.
   * @type {number}
   */
  get zoom() {
    return this._currentPose.zoom;
  }
  /**
   * Camera's disatance from current camera pivot(target)
   * @type {number}
   * @readonly
   */
  get distance() {
    return this._view3D.control.zoom.type === ZOOM_TYPE.FOV ? this._baseDistance : this._baseDistance - this._currentPose.zoom;
  }
  /**
   * Camera's default distance from the model center.
   * This will be automatically calculated based on the model size.
   * @type {number}
   * @readonly
   */
  get baseDistance() {
    return this._baseDistance;
  }
  /**
   * Camera's default fov value.
   * This will be automatically chosen when `view3D.fov` is "auto", otherwise it is equal to `view3D.fov`
   * @type {number}
   * @readonly
   */
  get baseFov() {
    return this._baseFov;
  }
  /**
   * Current pivot point of camera rotation
   * @type THREE.Vector3
   * @readonly
   * @see {@link https://threejs.org/docs/#api/en/math/Vector3 THREE#Vector3}
   */
  get pivot() {
    return this._currentPose.pivot;
  }
  /**
   * Camera's focus of view value (vertical)
   * @type number
   * @readonly
   * @see {@link https://threejs.org/docs/#api/en/cameras/PerspectiveCamera.fov THREE#PerspectiveCamera}
   */
  get fov() {
    return this._threeCamera.fov;
  }
  /**
   * Camera's frustum width
   * @type number
   * @readonly
   */
  get renderWidth() {
    return this.renderHeight * this._threeCamera.aspect;
  }
  /**
   * Camera's frustum height
   * @type number
   * @readonly
   */
  get renderHeight() {
    return 2 * this.distance * Math.tan(toRadian(this._threeCamera.getEffectiveFOV() / 2));
  }
  set yaw(val) {
    this._newPose.yaw = val;
  }
  set pitch(val) {
    this._newPose.pitch = val;
  }
  set zoom(val) {
    this._newPose.zoom = val;
  }
  set pivot(val) {
    this._newPose.pivot.copy(val);
  }
  set baseFov(val) {
    this._baseFov = val;
  }
  /**
   * Reset camera to default pose
   * @param {number} [duration=0] Duration of the reset animation
   * @param {function} [easing] Easing function for the reset animation
   * @param {Pose} [pose] Pose to reset, camera will reset to `defaultPose` if pose is not given.
   * @returns Promise that resolves when the animation finishes
   */
  reset(duration = 0, easing = EASING$1, pose) {
    const view3D = this._view3D;
    const control = view3D.control;
    const autoPlayer = view3D.autoPlayer;
    const newPose = this._newPose;
    const currentPose = this._currentPose;
    const targetPose = pose !== null && pose !== void 0 ? pose : this._defaultPose;
    if (duration <= 0) {
      // Reset camera immediately
      newPose.copy(targetPose);
      currentPose.copy(targetPose);
      view3D.renderer.renderSingleFrame();
      control.sync();
      return Promise.resolve();
    } else {
      // Play the animation
      const autoplayEnabled = autoPlayer.enabled;
      const resetControl = new AnimationControl(view3D, currentPose, targetPose);
      resetControl.duration = duration;
      resetControl.easing = easing;
      resetControl.enable();
      if (autoplayEnabled) {
        autoPlayer.disable();
      }
      control.add(resetControl);
      return new Promise(resolve => {
        resetControl.onFinished(() => {
          newPose.copy(targetPose);
          currentPose.copy(targetPose);
          control.remove(resetControl);
          control.sync();
          if (autoplayEnabled) {
            autoPlayer.enableAfterDelay();
          }
          resolve();
        });
      });
    }
  }
  /**
   * Update camera's aspect to given size
   * @param {object} size New size to apply
   * @param {number} [size.width] New width
   * @param {number} [size.height] New height
   * @returns {void}
   */
  resize({
    width,
    height
  }, prevSize = null) {
    const {
      control,
      fov,
      maintainSize
    } = this._view3D;
    const threeCamera = this._threeCamera;
    const aspect = width / height;
    threeCamera.aspect = aspect;
    if (fov === AUTO) {
      if (!maintainSize || prevSize == null) {
        this._applyEffectiveFov(FOV);
      } else {
        const heightRatio = height / prevSize.height;
        const currentZoom = this._currentPose.zoom;
        const tanHalfFov = Math.tan(toRadian((this._baseFov - currentZoom) / 2));
        this._baseFov = toDegree(2 * Math.atan(heightRatio * tanHalfFov)) + currentZoom;
      }
    } else {
      this._baseFov = fov;
    }
    control.zoom.updateRange();
  }
  /**
   * Fit camera frame to the given model
   */
  fit(model) {
    const view3D = this._view3D;
    const camera = this._threeCamera;
    const defaultPose = this._defaultPose;
    const control = view3D.control;
    const pivot = view3D.pivot;
    const bbox = model.bbox;
    const fov = view3D.fov;
    const hfov = fov === AUTO ? FOV : fov;
    const modelCenter = model.center;
    const maxDistToCenterSquared = view3D.ignoreCenterOnFit || view3D.center === AUTO ? new Vector3().subVectors(bbox.max, bbox.min).lengthSq() / 4 : model.reduceVertices((dist, vertice) => {
      return Math.max(dist, vertice.distanceToSquared(modelCenter));
    }, 0);
    const maxDistToCenter = Math.sqrt(maxDistToCenterSquared);
    const effectiveCamDist = maxDistToCenter / Math.sin(toRadian(hfov / 2));
    const maxTanHalfHFov = model.reduceVertices((res, vertex) => {
      const distToCenter = new Vector3().subVectors(vertex, modelCenter);
      const radiusXZ = Math.hypot(distToCenter.x, distToCenter.z);
      return Math.max(res, radiusXZ / (effectiveCamDist - Math.abs(distToCenter.y)));
    }, 0);
    if (fov === AUTO) {
      // Cache for later use in resize
      this._maxTanHalfHFov = maxTanHalfHFov;
      this._applyEffectiveFov(hfov);
    } else {
      this._maxTanHalfHFov = fov;
    }
    defaultPose.pivot = pivot === AUTO ? modelCenter.clone() : parseAsBboxRatio(pivot, bbox);
    this._baseDistance = effectiveCamDist;
    camera.near = (effectiveCamDist - maxDistToCenter) * 0.1;
    camera.far = (effectiveCamDist + maxDistToCenter) * 10;
    control.zoom.updateRange();
    if (!isNumber(view3D.initialZoom)) {
      const baseFov = this._baseFov;
      const modelBbox = model.bbox;
      const alignAxis = view3D.initialZoom.axis;
      const targetRatio = view3D.initialZoom.ratio;
      const bboxDiff = new Vector3().subVectors(modelBbox.max, modelBbox.min);
      const axisDiff = bboxDiff[alignAxis];
      const newViewHeight = alignAxis === "y" ? axisDiff / targetRatio : axisDiff / (targetRatio * camera.aspect);
      const camDist = alignAxis !== "z" ? effectiveCamDist - bboxDiff.z / 2 : effectiveCamDist - bboxDiff.x / 2;
      const newFov = toDegree(2 * Math.atan(newViewHeight / (2 * camDist)));
      defaultPose.zoom = baseFov - newFov;
    } else {
      defaultPose.zoom = view3D.initialZoom;
    }
  }
  /**
   * Update camera position
   * @returns {void}
   */
  updatePosition() {
    const view3D = this._view3D;
    const control = view3D.control;
    const threeCamera = this._threeCamera;
    const currentPose = this._currentPose;
    const newPose = this._newPose;
    const baseFov = this._baseFov;
    const baseDistance = this._baseDistance;
    const isFovZoom = control.zoom.type === ZOOM_TYPE.FOV;
    const prevPose = currentPose.clone();
    // Clamp current pose
    currentPose.yaw = circulate(newPose.yaw, 0, 360);
    currentPose.pitch = clamp(newPose.pitch, PITCH_RANGE.min, PITCH_RANGE.max);
    currentPose.zoom = newPose.zoom;
    currentPose.pivot.copy(newPose.pivot);
    const fov = isFovZoom ? baseFov - currentPose.zoom : baseFov;
    const distance = isFovZoom ? baseDistance : baseDistance - currentPose.zoom;
    const newCamPos = getRotatedPosition(distance, currentPose.yaw, currentPose.pitch);
    newCamPos.add(currentPose.pivot);
    threeCamera.fov = fov;
    threeCamera.position.copy(newCamPos);
    threeCamera.lookAt(currentPose.pivot);
    threeCamera.updateProjectionMatrix();
    newPose.copy(currentPose);
    view3D.trigger(EVENTS$1.CAMERA_CHANGE, {
      type: EVENTS$1.CAMERA_CHANGE,
      target: view3D,
      pose: currentPose.clone(),
      prevPose
    });
  }
  _applyEffectiveFov(fov) {
    const camera = this._threeCamera;
    const tanHalfHFov = Math.tan(toRadian(fov / 2));
    const tanHalfVFov = tanHalfHFov * Math.max(1, this._maxTanHalfHFov / tanHalfHFov / camera.aspect);
    this._baseFov = toDegree(2 * Math.atan(tanHalfVFov));
  }
  _parseBboxRatioOption(arr, bbox) {
    const min = bbox.min.toArray();
    const size = new Vector3().subVectors(bbox.max, bbox.min).toArray();
    return arr.map((val, idx) => {
      if (!isString(val)) return val;
      const ratio = parseFloat(val) * 0.01;
      return min[idx] + ratio * size[idx];
    });
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Automatic resizer that uses both ResizeObserver and window resize event
 */
class AutoResizer {
  /** */
  constructor(view3d) {
    this._onResize = () => {
      this._view3d.resize();
    };
    // eslint-disable-next-line @typescript-eslint/member-ordering
    this._skipFirstResize = (() => {
      let isFirstResize = true;
      return () => {
        if (isFirstResize) {
          isFirstResize = false;
          return;
        }
        this._onResize();
      };
    })();
    this._view3d = view3d;
    this._enabled = false;
    this._resizeObserver = null;
  }
  /**
   * Returns whether AutoResizer is enabled
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * Enable resizer
   */
  enable() {
    const view3d = this._view3d;
    if (this._enabled) {
      this.disable();
    }
    if (view3d.useResizeObserver && !!window.ResizeObserver) {
      const canvasEl = view3d.renderer.canvas;
      const canvasBbox = canvasEl.getBoundingClientRect();
      const resizeImmediate = canvasBbox.width !== 0 || canvasBbox.height !== 0;
      const resizeObserver = new ResizeObserver(resizeImmediate ? this._skipFirstResize : this._onResize);
      // This will automatically call `resize` for the first time
      resizeObserver.observe(canvasEl);
      this._resizeObserver = resizeObserver;
    } else {
      view3d.resize();
      window.addEventListener(EVENTS.RESIZE, this._onResize);
    }
    this._enabled = true;
    return this;
  }
  /**
   * Disable resizer
   */
  disable() {
    if (!this._enabled) return this;
    const resizeObserver = this._resizeObserver;
    if (resizeObserver) {
      resizeObserver.disconnect();
      this._resizeObserver = null;
    } else {
      window.removeEventListener(EVENTS.RESIZE, this._onResize);
    }
    this._enabled = false;
    return this;
  }
}

let copymesh = new Map(),
  dragedMeshes = new Map(),
  copymesh2 = new Map();
let disassembleKeyFrameTracks = [],
  assembleKeyFrameTracks = [],
  idleKeyFrameTracks = [];
let view3DRef;
let dragControls;
// OBSIDIAN:
// Is Recording the animations
let isRecording = false;
/**
 * OBSIDIAN:
 * Set Recording state
 * @param isRec state:true/false
 */
const setRecording = isRec => {
  isRecording = isRec;
};
/**
 * OBSIDIAN:
 * Function for init the custom animations
 * @param view3D Reference of the view3D
 */
const initAddAnimations = view3D => {
  view3DRef = view3D;
  // Set Meshes Initial Position
  view3DRef.model.meshes.forEach((value, index) => {
    copymesh.set(value.name, Object.assign({}, value.position));
    copymesh2.set(value.name, Object.assign({}, value.position));
  });
  // Creating Idle Animations
  createIdleAnimation(view3DRef);
  //Create Drag Controls
  dragControls = new DragControls(view3DRef.model.meshes, view3DRef.camera.threeCamera, view3DRef.renderer.threeRenderer.domElement);
  dragControls.addEventListener('dragstart', function (e) {
    // disable orbit controls on drag start
    view3DRef.scene.root.updateMatrixWorld(true);
    view3DRef.control.disable();
    dragedMeshes.set(e.object.name, e.object);
  });
  dragControls.addEventListener('dragend', function (e) {
    //Update the world matrix position
    view3DRef.scene.root.updateMatrixWorld(false);
    // enable orbit controls on drag start
    view3DRef.control.enable();
  });
  // Stop Drag Controls At the start works only when recording is true
  enableDragControl(false);
};
/**
 * OBSIDIAN:
 * Enables and Disable drag controls
 * @param enable state:True/False
 * @returns
 */
const enableDragControl = enable => {
  if (!dragControls) {
    console.log("Drag Controls Not Found!!!");
    return;
  }
  if (enable) {
    dragControls.activate();
  } else {
    dragControls.deactivate();
  }
};
/**
 * OBSIDIAN:
 * Create object vector to array
 * @param vector reference Three.vector
 * @returns integer array of vector ex:[x, y, z]
 */
const createVectorToArray = vector => {
  return [vector.x, vector.y, vector.z];
};
/**
 * OBSIDIAN
 * Create a combined array of start and end position
 * @param startPos start position
 * @param endPos end position
 * @returns combined array of start and end position
 */
const createVectorPositionArray = (startPos, endPos) => {
  startPos.push(...endPos);
  return startPos;
};
/**
 * OBSIDIAN:Create vector keyframe tracks for each object and specific property of that object
 * @param objectName Target object or root object for animations
 * @param property root object property ex(position,rotation,scale)
 * @param durationArray change duration
 * @param vectorPositionArray vector array
 * @returns
 */
//  
const createKeyFrameTracks = (objectName, property, durationArray, vectorPositionArray) => {
  const keyFrame = new VectorKeyframeTrack(`${objectName}${property}`, durationArray, vectorPositionArray);
  return keyFrame;
};
/**
 * OBSIDIAN:Create default idle animation for creating custom animation
 * @param view3DRef
 */
const createIdleAnimation = view3DRef => {
  // create vector position array for Idle Animation
  const vectorPositionArrayIdle = createVectorPositionArray(new Vector3().toArray(), new Vector3().toArray());
  // create KeyFrame Track for Idle Animation
  const keyFrameTrackIdle = createKeyFrameTracks(view3DRef.scene.root.name, ".position", [0, 2], vectorPositionArrayIdle);
  let idleKeyFrameTracks = [keyFrameTrackIdle];
  // Create Idle AnimationClip and Animation Action
  const idleAnimation = new AnimationClip(`${view3DRef.animator.clips.length + 1}.Idle(def)`, -1, idleKeyFrameTracks);
  const idleAction = view3DRef.animator.mixer.clipAction(idleAnimation);
  // Pushing this clips and actions in view3d actions and clips array at index:0
  view3DRef.animator.actions.push(idleAction);
  view3DRef.animator.clips.push(idleAnimation);
  // Restart Animator
  view3DRef.animator.pause();
  view3DRef.animator.play(view3DRef.animator.clips.length - 1);
};
/** OBSIDIAN:Record disassemble animation and assemble animation */
const RecordAnimation = () => {
  console.log("Record Clicked");
  let counter = 0;
  // Creating Assemble and DisAssemble Animation 
  dragedMeshes.forEach((value, key) => {
    // create vector position array for disAssemble Animation
    const vectorPositionArrayDisassemble = createVectorPositionArray(createVectorToArray(copymesh.get(key)), value.position.toArray());
    // create KeyFrame Track for disAssemble Animation
    const keyFrameTrackDisassemble = createKeyFrameTracks(value.name, ".position", [0, 2], vectorPositionArrayDisassemble);
    // Pushing different key frame track of dragged mesh into a keyframe track array for disAssemble Animation
    disassembleKeyFrameTracks.push(keyFrameTrackDisassemble);
    // create vector position array for ssemble Animation
    const vectorPositionArrayAssemble = createVectorPositionArray(value.position.toArray(), createVectorToArray(copymesh.get(key)));
    // create KeyFrame Track for ssemble Animation
    const keyFrameTrackAssemble = createKeyFrameTracks(value.name, ".position", [0, 2], vectorPositionArrayAssemble);
    // Pushing different key frame track of dragged mesh into a keyframe track array for ssemble Animation
    assembleKeyFrameTracks.push(keyFrameTrackAssemble);
    // create vector position array for Idle Animation
    const vectorPositionArrayIdle = createVectorPositionArray(createVectorToArray(copymesh.get(key)), createVectorToArray(copymesh.get(key)));
    // create KeyFrame Track for Idle Animation
    const keyFrameTrackIdle = createKeyFrameTracks(value.name, ".position", [0, 2], vectorPositionArrayIdle);
    // Pushing different key frame track of dragged mesh into a keyframe track array for Idle Animation
    idleKeyFrameTracks.push(keyFrameTrackIdle);
    if (counter === dragedMeshes.size - 1) {
      //Removing Default Idle Animation
      view3DRef.animator.actions.pop();
      view3DRef.animator.clips.pop();
      // Create DisAssemble AnimationClip and Animation Action
      const disassembleAnimation = new AnimationClip(`${view3DRef.animator.clips.length + 1}.disAssemblev2`, -1, disassembleKeyFrameTracks);
      const disassembleAction = view3DRef.animator.mixer.clipAction(disassembleAnimation);
      // Pushing this clips and actions in view3d actions and clips array
      view3DRef.animator.actions.push(disassembleAction);
      view3DRef.animator.clips.push(disassembleAnimation);
      // Create Assemble AnimationClip and Animation Action
      const assembleAnimation = new AnimationClip(`${view3DRef.animator.clips.length + 1}.assemblev2`, -1, assembleKeyFrameTracks);
      const assembleAction = view3DRef.animator.mixer.clipAction(assembleAnimation);
      // Pushing this clips and actions in view3d actions and clips array 
      view3DRef.animator.actions.push(assembleAction);
      view3DRef.animator.clips.push(assembleAnimation);
      // Create Idle AnimationClip and Animation Action
      const idleAnimation = new AnimationClip(`${view3DRef.animator.clips.length + 1}.Idle(def)`, -1, idleKeyFrameTracks);
      const idleAction = view3DRef.animator.mixer.clipAction(idleAnimation);
      // Updating Default Idle Animation
      view3DRef.animator.actions.push(idleAction);
      view3DRef.animator.clips.push(idleAnimation);
      view3DRef.animator.mixer.stopAllAction();
      // Restart Animator
      view3DRef.animator.pause();
      view3DRef.animator.play(0);
      console.log(view3DRef);
      //Reset Dragged Mesh
      dragedMeshes.forEach((value, key) => {
        value.position.set(copymesh2.get(key).x, copymesh2.get(key).y, copymesh2.get(key).z);
      });
      view3DRef.animator.updateRepeatMode();
    }
    counter++;
  });
};
/**
 * OBSIDIAN:Function to start recording the custom animations
 */
const StartRecordingCustomAnimations = () => {
  if (!isRecording) {
    if (view3DRef) {
      view3DRef.animator.stop();
      view3DRef.animator.play(view3DRef.animator.clips.length - 1);
    }
    setRecording(true);
    enableDragControl(true);
  }
};
/**
 * OBSIDIAN:Function to stop recording the custom animations and save the animations into the model
 */
const StopRecordingCustomAnimations = () => {
  if (isRecording) {
    enableDragControl(false);
    RecordAnimation();
    setRecording(false);
  }
};

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Component that manages animations of the 3D Model
 */
class ModelAnimator {
  /**
   * Create new ModelAnimator instance
   */
  constructor(view3D) {
    this._onAnimationLoop = evt => {
      const view3D = this._view3D;
      const actions = this._actions;
      const clips = this._clips;
      const index = actions.findIndex(action => action === evt.action);
      view3D.trigger(EVENTS$1.ANIMATION_LOOP, {
        type: EVENTS$1.ANIMATION_LOOP,
        target: view3D,
        index,
        action: evt.action,
        clip: clips[index]
      });
      if (view3D.animationRepeatMode === ANIMATION_REPEAT_MODE.ALL) {
        const nextIndex = index + 1 >= clips.length ? 0 : index + 1;
        this.play(nextIndex);
      }
    };
    this._onAnimationFinished = evt => {
      const view3D = this._view3D;
      const actions = this._actions;
      const clips = this._clips;
      const index = actions.findIndex(action => action === evt.action);
      view3D.trigger(EVENTS$1.ANIMATION_FINISHED, {
        type: EVENTS$1.ANIMATION_FINISHED,
        target: view3D,
        index,
        action: evt.action,
        clip: clips[index]
      });
    };
    this._view3D = view3D;
    this._mixer = new AnimationMixer(view3D.scene.userObjects);
    this._clips = [];
    this._actions = [];
    this._activeAnimationIdx = -1;
    this._timeScale = 1;
    this._fadePromises = [];
  }
  /**
   * Three.js {@link https://threejs.org/docs/#api/en/animation/AnimationClip AnimationClip}s that stored
   * @type THREE.AnimationClip
   * @readonly
   */
  get clips() {
    return this._clips;
  }
  /**
   * {@link https://threejs.org/docs/#api/en/animation/AnimationMixer THREE.AnimationMixer} instance
   * @type THREE.AnimationMixer
   * @readonly
   */
  get mixer() {
    return this._mixer;
  }
  /**
   * An array of active {@link https://threejs.org/docs/#api/en/animation/AnimationAction AnimationAction}s
   * @type THREE.AnimationAction
   * @readonly
   */
  get actions() {
    return this._actions;
  }
  /**
   * Current length of animations
   * @type {number}
   * @readonly
   */
  get animationCount() {
    return this._clips.length;
  }
  /**
   * Infomation of the animation currently playing, `null` if there're no animation or stopped.
   * @see {@link https://threejs.org/docs/#api/en/animation/AnimationClip AnimationClip}
   * @type {THREE.AnimationClip | null}
   */
  get activeAnimation() {
    var _a;
    return (_a = this._clips[this._activeAnimationIdx]) !== null && _a !== void 0 ? _a : null;
  }
  /**
   * THREE.AnimationAction instance of the animation currently playing, `null` if there're no animation or stopped.
   * @see {@link https://threejs.org/docs/#api/en/animation/AnimationAction AnimationAction}
   * @type {THREE.AnimationAction | null}
   */
  get activeAction() {
    var _a;
    return (_a = this._actions[this._activeAnimationIdx]) !== null && _a !== void 0 ? _a : null;
  }
  /**
   * An index of the animation currently playing.
   * @type {number}
   * @readonly
   */
  get activeAnimationIndex() {
    return this._activeAnimationIdx;
  }
  /**
   * An boolean value indicating whether the animations are paused
   * @type {boolean}
   * @readonly
   */
  get paused() {
    return this._mixer.timeScale === 0;
  }
  /**
   * An boolean value indicating whether at least one of the animation is playing
   * @type {boolean}
   * @readonly
   */
  get animating() {
    var _a;
    return ((_a = this.activeAction) === null || _a === void 0 ? void 0 : _a.isRunning()) && !this.paused;
  }
  /**
   * Global time scale for animations
   * @type {number}
   */
  get timeScale() {
    return this._timeScale;
  }
  set timeScale(val) {
    this._timeScale = val;
  }
  /**
   * Initialize ModelAnimator
   */
  init() {
    this._mixer.addEventListener("loop", this._onAnimationLoop);
    this._mixer.addEventListener("finished", this._onAnimationFinished);
  }
  /**
   * Destroy ModelAnimator instance
   */
  destroy() {
    this.reset();
    this._mixer.removeEventListener("loop", this._onAnimationLoop);
    this._mixer.removeEventListener("finished", this._onAnimationFinished);
  }
  /**
   * Store the given clips
   * @param clips Three.js {@link https://threejs.org/docs/#api/en/animation/AnimationClip AnimationClip}s of the model
   * @returns {void}
   * @example
   * ```ts
   * // After loading model
   * view3d.animator.setClips(model.animations);
   * ```
   */
  setClips(clips) {
    const mixer = this._mixer;
    this._clips = clips;
    this._actions = clips.map(clip => {
      const action = mixer.clipAction(clip);
      action.setEffectiveWeight(0);
      return action;
    });
    this.updateRepeatMode();
  }
  /**
   * Play one of the model's animation
   * @param {number} index Index of the animation to play
   * @returns {void}
   */
  play(index) {
    const view3D = this._view3D;
    const action = this._actions[index];
    if (!action) return;
    this.stop(); // Stop all previous actions
    this._restoreTimeScale();
    action.setEffectiveTimeScale(1);
    action.setEffectiveWeight(1);
    action.play();
    this._activeAnimationIdx = index;
    this._flushFadePromises();
    view3D.trigger(EVENTS$1.ANIMATION_START, {
      type: EVENTS$1.ANIMATION_START,
      target: view3D,
      index,
      action,
      clip: this._clips[index]
    });
  }
  /**
   * Crossfade animation from one to another
   * @param {number} index Index of the animation to crossfade to
   * @param {number} duration Duration of the crossfade animation, in milisec
   * @returns {Promise<boolean>} A promise that resolves boolean value that indicates whether the crossfade is fullfilled without any inference
   */
  crossFade(index, duration, {
    synchronize = false
  } = {}) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      const view3D = this._view3D;
      const mixer = this._mixer;
      const actions = this._actions;
      const activeAnimationIdx = this._activeAnimationIdx;
      const endAction = actions[index];
      const startAction = (_a = actions[activeAnimationIdx]) !== null && _a !== void 0 ? _a : endAction;
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const EVT_LOOP = "loop";
      this._restoreTimeScale();
      const doCrossfade = () => {
        endAction.enabled = true;
        endAction.setEffectiveTimeScale(1);
        endAction.setEffectiveWeight(1);
        endAction.time = 0;
        endAction.play();
        startAction.crossFadeTo(endAction, duration / 1000, true);
        this._activeAnimationIdx = index;
      };
      if (synchronize) {
        const onLoop = evt => {
          if (evt.action === startAction) {
            mixer.removeEventListener(EVT_LOOP, onLoop);
            doCrossfade();
          }
        };
        mixer.addEventListener(EVT_LOOP, onLoop);
      } else {
        doCrossfade();
      }
      this._flushFadePromises();
      const fadePromise = new Promise(resolve => {
        const onFrame = () => {
          if (endAction.getEffectiveWeight() < 1) return;
          view3D.off(EVENTS$1.BEFORE_RENDER, onFrame);
          resolve(true);
        };
        view3D.on(EVENTS$1.BEFORE_RENDER, onFrame);
        this._fadePromises.push({
          listener: onFrame,
          resolve
        });
      });
      return fadePromise;
    });
  }
  /**
   * Fadeout active animation, and restore to the default pose
   * @param {number} duration Duration of the crossfade animation, in milisec
   * @returns {Promise<boolean>} A promise that resolves boolean value that indicates whether the fadeout is fullfilled without any inference
   */
  fadeOut(duration) {
    return __awaiter(this, void 0, void 0, function* () {
      const view3D = this._view3D;
      const actions = this._actions;
      const activeAction = actions[this._activeAnimationIdx];
      if (!activeAction) return false;
      this._flushFadePromises();
      this._restoreTimeScale();
      activeAction.fadeOut(duration / 1000);
      const fadePromise = new Promise(resolve => {
        const onFrame = () => {
          if (activeAction.getEffectiveWeight() > 0) return;
          view3D.off(EVENTS$1.BEFORE_RENDER, onFrame);
          this._activeAnimationIdx = -1;
          resolve(true);
        };
        view3D.on(EVENTS$1.BEFORE_RENDER, onFrame);
        this._fadePromises.push({
          listener: onFrame,
          resolve
        });
      });
      return fadePromise;
    });
  }
  /**
   * Pause all animations
   * If you want to stop animation completely, you should call {@link ModelAnimator#stop stop} instead
   * You should call {@link ModelAnimator#resume resume} to resume animation
   * @returns {void}
   */
  pause() {
    this._mixer.timeScale = 0;
  }
  /**
   * Resume all animations
   * This will play animation from the point when the animation is paused
   * @returns {void}
   */
  resume() {
    this._restoreTimeScale();
  }
  /**
   * Fully stops one of the model's animation
   * @returns {void}
   */
  stop() {
    this._actions.forEach(action => {
      action.stop();
      action.setEffectiveWeight(0);
    });
    // Render single frame to show deactivated state
    this._view3D.renderer.renderSingleFrame();
    this._activeAnimationIdx = -1;
    this._flushFadePromises();
  }
  /**
   * Update animations
   * @param {number} delta number of seconds to play animations attached
   * @internal
   * @returns {void}
   */
  update(delta) {
    this._mixer.update(delta);
  }
  /**
   * Update animation repeat mode of the animation actions
   */
  updateRepeatMode() {
    const view3D = this._view3D;
    const actions = this._actions;
    const repeatMode = view3D.animationRepeatMode;
    if (repeatMode === ANIMATION_REPEAT_MODE.NONE) {
      actions.forEach(action => {
        action.clampWhenFinished = true;
        action.loop = LoopOnce;
      });
    } else {
      actions.forEach(action => {
        action.clampWhenFinished = false;
        action.loop = LoopRepeat;
      });
    }
  }
  /**
   * Init the process of custom disassemble or assemble animation feature
   * @param view3D View3D Reference
   */
  initCustomAnimations(view3D) {
    if (view3D.editMode) {
      initAddAnimations(view3D);
    }
  }
  /**
   * Reset the instance and remove all cached animation clips attached to it
   * @returns {void}
   */
  reset() {
    const mixer = this._mixer;
    this.stop();
    mixer.uncacheRoot(mixer.getRoot());
    this._clips = [];
    this._actions = [];
  }
  _restoreTimeScale() {
    this._mixer.timeScale = this._timeScale;
  }
  _flushFadePromises() {
    const view3D = this._view3D;
    const fadePromises = this._fadePromises;
    fadePromises.forEach(({
      resolve,
      listener
    }) => {
      resolve(false);
      view3D.off(EVENTS$1.BEFORE_RENDER, listener);
    });
    this._fadePromises = [];
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Fires for every animation frame when animation is active.
 * @type object
 * @property {object} event Event object.
 * @property {number} [event.progress] Current animation progress value.
 * Value is ranged from 0(start) to 1(end).
 * @property {number} [event.easedProgress] Eased progress value.
 * @event Animation#progress
 */
/**
 * Fires for every animation loop except for the last loop
 * This will be triggered only when repeat > 0
 * @type object
 * @property {object} event Event object.
 * @property {number} [event.progress] Current animation progress value.
 * Value is ranged from 0(start) to 1(end).
 * @property {number} [event.easedProgress] Eased progress value.
 * @property {number} [event.loopIndex] Index of the current loop.
 * @event Animation#loop
 */
/**
 * Fires when animation ends.
 * @type void
 * @event Animation#finish
 */
/**
 * Self-running animation
 */
class Animation extends Component {
  /**
   * Create new instance of the Animation
   * @param {object} [options={}] Options
   */
  constructor({
    context = window,
    repeat = 0,
    duration = ANIMATION_DURATION,
    easing = EASING$1
  } = {}) {
    super();
    this._loop = () => {
      const delta = this._getDeltaTime();
      const duration = this._duration;
      const repeat = this._repeat;
      const prevTime = this._time;
      const time = prevTime + delta;
      const loopIncrease = Math.floor(time / duration);
      this._time = this._loopCount >= repeat ? clamp(time, 0, duration) : circulate(time, 0, duration);
      const progress = this._time / duration;
      const progressEvent = {
        progress,
        easedProgress: this._easing(progress)
      };
      this.trigger("progress", progressEvent);
      for (let loopIdx = 0; loopIdx < loopIncrease; loopIdx++) {
        this._loopCount++;
        if (this._loopCount > repeat) {
          this.trigger("finish");
          this.stop();
          return;
        } else {
          this.trigger("loop", Object.assign(Object.assign({}, progressEvent), {
            loopIndex: this._loopCount
          }));
        }
      }
      this._rafId = this._ctx.requestAnimationFrame(this._loop);
    };
    // Options
    this._repeat = repeat;
    this._duration = duration;
    this._easing = easing;
    // Internal States
    this._ctx = context;
    this._rafId = -1;
    this._time = 0;
    this._clock = 0;
    this._loopCount = 0;
  }
  start() {
    if (this._rafId >= 0) return;
    // This guarantees "progress" event with progress = 0 on first start
    this._updateClock();
    this._loop();
  }
  stop() {
    if (this._rafId < 0) return;
    this._time = 0;
    this._loopCount = 0;
    this._stopLoop();
  }
  pause() {
    if (this._rafId < 0) return;
    this._stopLoop();
  }
  _stopLoop() {
    this._ctx.cancelAnimationFrame(this._rafId);
    this._rafId = -1;
  }
  _getDeltaTime() {
    const lastTime = this._clock;
    this._updateClock();
    return this._clock - lastTime;
  }
  _updateClock() {
    this._clock = Date.now();
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/* eslint-enable */
const QUICK_LOOK_SUPPORTED = () => {
  const anchorEl = document.createElement("a");
  return anchorEl.relList && anchorEl.relList.supports && anchorEl.relList.supports("ar");
};
const WEBXR_SUPPORTED = () => navigator.xr && !!navigator.xr.isSessionSupported;
const HIT_TEST_SUPPORTED = () => window.XRSession && window.XRSession.prototype.requestHitTestSource;
const DOM_OVERLAY_SUPPORTED = () => window.XRDOMOverlayState != null;
const SESSION = {
  AR: "immersive-ar",
  VR: "immersive-vr"
};
const REFERENCE_SPACE = {
  LOCAL: "local",
  LOCAL_FLOOR: "local-floor",
  VIEWER: "viewer"
};
const EVENTS$2 = {
  SELECT_START: "selectstart",
  SELECT: "select",
  SELECT_END: "selectend",
  ESTIMATION_START: "estimationstart",
  ESTIMATION_END: "estimationend"
};
const INPUT_PROFILE = {
  TOUCH: "generic-touchscreen"
};
const FEATURES = {
  HIT_TEST: {
    requiredFeatures: ["hit-test"]
  },
  DOM_OVERLAY: root => root ? {
    requiredFeatures: ["dom-overlay"],
    domOverlay: {
      root
    }
  } : {},
  LIGHT_ESTIMATION: {
    optionalFeatures: ["light-estimation"]
  }
};
// For type definition
const EMPTY_FEATURES = {};
const SCENE_VIEWER = {
  INTENT_AR_CORE: (params, fallback) => `intent://arvr.google.com/scene-viewer/1.2?${params}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;${fallback ? `S.browser_fallback_url=${fallback};` : ""}end;`,
  INTENT_SEARCHBOX: (params, fallback) => `intent://arvr.google.com/scene-viewer/1.2?${params}#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;${fallback ? `S.browser_fallback_url=${fallback};` : ""}end;`,
  FALLBACK_DEFAULT: params => `https://arvr.google.com/scene-viewer?${params}`
};

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * One finger swirl control on single axis
 */
class ARSwirlControl {
  /**
   * Create new ARSwirlControl
   * @param {ARSwirlControlOptions} [options={}] Options
   * @param {number} [options.scale=1] Scale(speed) factor of the rotation
   * @param {boolean} [options.showIndicator=true] Whether to show rotation indicator or not.
   */
  constructor({
    scale = 1
  } = {}) {
    /**
     * Current rotation value
     */
    this.rotation = new Quaternion();
    // Internal States
    this._axis = new Vector3(0, 1, 0);
    this._enabled = false;
    this._active = false;
    this._prevPos = new Vector2();
    this._fromQuat = new Quaternion();
    this._toQuat = new Quaternion();
    this._motion = new Motion({
      range: INFINITE_RANGE
    });
    this._userScale = scale;
  }
  /**
   * Whether this control is enabled or not.
   * @readonly
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * Scale(speed) factor of this control.
   */
  get scale() {
    return this._userScale;
  }
  set scale(val) {
    this._userScale = val;
  }
  updateRotation(rotation) {
    this.rotation.copy(rotation);
    this._fromQuat.copy(rotation);
    this._toQuat.copy(rotation);
  }
  /**
   * Enable this control
   */
  enable() {
    this._enabled = true;
  }
  /**
   * Disable this control
   */
  disable() {
    this._enabled = false;
  }
  activate() {
    if (!this._enabled) return;
    this._active = true;
  }
  deactivate() {
    this._active = false;
  }
  updateAxis(axis) {
    this._axis.copy(axis);
  }
  setInitialPos(coords) {
    this._prevPos.copy(coords[0]);
  }
  process({
    scene,
    xrCam
  }, {
    coords
  }) {
    if (!this._active || coords.length !== 1) return;
    const prevPos = this._prevPos;
    const motion = this._motion;
    const coord = coords[0];
    const modelPos = scene.modelMovable.getWorldPosition(new Vector3());
    const ndcModelPos = new Vector2().fromArray(modelPos.project(xrCam).toArray());
    // Get the rotation angle with the model's NDC coordinates as the center.
    const rotationAngle = getRotationAngle(ndcModelPos, prevPos, coord) * this._userScale;
    const rotation = new Quaternion().setFromAxisAngle(this._axis, rotationAngle);
    const interpolated = this._getInterpolatedQuaternion();
    this._fromQuat.copy(interpolated);
    this._toQuat.premultiply(rotation);
    motion.reset(0);
    motion.setEndDelta(1);
    prevPos.copy(coord);
  }
  update({
    scene
  }, deltaTime) {
    if (!this._active) return;
    const motion = this._motion;
    motion.update(deltaTime);
    const interpolated = this._getInterpolatedQuaternion();
    this.rotation.copy(interpolated);
    scene.setModelRotation(interpolated);
  }
  _getInterpolatedQuaternion() {
    const motion = this._motion;
    const toEuler = this._toQuat;
    const fromEuler = this._fromQuat;
    const progress = motion.val;
    return new Quaternion().copy(fromEuler).slerp(toEuler, progress);
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
var STATE;
(function (STATE) {
  STATE[STATE["WAITING"] = 0] = "WAITING";
  STATE[STATE["TRANSLATING"] = 1] = "TRANSLATING";
  STATE[STATE["BOUNCING"] = 2] = "BOUNCING";
})(STATE || (STATE = {}));
/**
 * Model's translation(position) control for {@link WebARControl}
 */
class ARTranslateControl {
  /**
   * Create new instance of ARTranslateControl
   * @param {ARTranslateControlOption} [options={}] Options
   */
  constructor({
    hoverHeight = 0.1,
    bounceDuration = 1000,
    bounceEasing = EASING.EASE_OUT_BOUNCE
  } = {}) {
    // Internal states
    this._hoverPosition = new Vector3();
    this._floorPosition = new Vector3();
    this._wallRotation = new Quaternion();
    this._dragPlane = new Plane();
    this._enabled = false;
    this._vertical = false;
    this._state = STATE.WAITING;
    this._initialPos = new Vector2();
    this._hoverHeight = hoverHeight;
    this._bounceMotion = new Motion({
      duration: bounceDuration,
      easing: bounceEasing,
      range: INFINITE_RANGE
    });
  }
  /**
   * Whether this control is enabled or not
   * @readonly
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * Last detected floor position
   * @readonly
   */
  get floorPosition() {
    return this._floorPosition.clone();
  }
  /**
   * How much model will float from the floor, in meter.
   */
  get hoverHeight() {
    return this._hoverHeight;
  }
  set hoverHeight(val) {
    this._hoverHeight = val;
  }
  /**
   * Enable this control
   */
  enable() {
    this._enabled = true;
  }
  /**
   * Disable this control
   */
  disable() {
    this.deactivate();
    this._enabled = false;
  }
  activate() {
    if (!this._enabled) return;
    const dragPlane = this._dragPlane;
    dragPlane.constant = this._calcDragPlaneConstant(this._floorPosition);
    this._state = STATE.TRANSLATING;
  }
  deactivate() {
    if (!this._enabled || this._vertical || this._state === STATE.WAITING) {
      this._state = STATE.WAITING;
      return;
    }
    this._state = STATE.BOUNCING;
    const floorPosition = this._floorPosition;
    const hoverPosition = this._hoverPosition;
    const bounceMotion = this._bounceMotion;
    const hoveringAmount = hoverPosition.y - floorPosition.y;
    bounceMotion.reset(hoveringAmount);
    bounceMotion.setEndDelta(-hoveringAmount);
  }
  init(position, rotation, vertical) {
    this._floorPosition.copy(position);
    this._hoverPosition.copy(position);
    const planeNormal = vertical ? new Vector3(0, 1, 0).applyQuaternion(rotation) : new Vector3(0, 1, 0);
    this._dragPlane.normal.copy(planeNormal);
    this._wallRotation.copy(rotation);
    this._vertical = vertical;
  }
  setInitialPos(coords) {
    this._initialPos.copy(coords[0]);
  }
  process({
    frame,
    referenceSpace,
    xrCam
  }, {
    hitResults
  }) {
    const state = this._state;
    const notActive = state === STATE.WAITING || state === STATE.BOUNCING;
    if (!hitResults || hitResults.length !== 1 || notActive) return;
    const hitResult = hitResults[0];
    const prevFloorPosition = this._floorPosition.clone();
    const floorPosition = this._floorPosition;
    const hoverPosition = this._hoverPosition;
    const hoverHeight = this._hoverHeight;
    const dragPlane = this._dragPlane;
    const vertical = this._vertical;
    const hitPose = hitResult.results[0] && hitResult.results[0].getPose(referenceSpace);
    const hitMatrix = hitPose && new Matrix4().fromArray(hitPose.transform.matrix);
    const isFloorHit = hitPose && hitMatrix.elements[5] > 0.75;
    const isWallHit = hitPose && hitMatrix.elements[5] < 0.25;
    const camPos = new Vector3().setFromMatrixPosition(xrCam.matrixWorld);
    const hitPosition = hitPose && new Vector3().setFromMatrixPosition(hitMatrix);
    if (!vertical) {
      if (frame && (!hitPose || !isFloorHit)) {
        // Use previous drag plane if no hit plane is found
        const targetRayPose = frame.getPose(hitResult.inputSource.targetRaySpace, referenceSpace);
        if (!targetRayPose) return;
        const rayPos = targetRayPose.transform.position;
        const fingerPos = new Vector3(rayPos.x, rayPos.y, rayPos.z);
        const fingerDir = fingerPos.sub(camPos).normalize();
        const fingerRay = new Ray(camPos, fingerDir);
        const intersection = fingerRay.intersectPlane(dragPlane, new Vector3());
        if (intersection) {
          floorPosition.copy(intersection);
          floorPosition.setY(prevFloorPosition.y);
          hoverPosition.copy(intersection);
        }
        return;
      }
      // Set new floor level when it's increased at least 10cm
      const currentDragPlaneHeight = -dragPlane.constant;
      const hitDragPlaneHeight = hitPosition.y + hoverHeight;
      if (hitDragPlaneHeight - currentDragPlaneHeight > 0.1) {
        dragPlane.constant = -hitDragPlaneHeight;
      }
      const camToHitDir = new Vector3().subVectors(hitPosition, camPos).normalize();
      const camToHitRay = new Ray(camPos, camToHitDir);
      const hitOnDragPlane = camToHitRay.intersectPlane(dragPlane, new Vector3());
      if (!hitOnDragPlane) return;
      floorPosition.copy(hitOnDragPlane);
      floorPosition.setY(hitPosition.y);
      hoverPosition.copy(hitOnDragPlane);
    } else {
      if (frame && (!hitPose || !isWallHit)) {
        // Use previous drag plane if no hit plane is found
        const targetRayPose = frame.getPose(hitResult.inputSource.targetRaySpace, referenceSpace);
        if (!targetRayPose) return;
        const rayPos = targetRayPose.transform.position;
        const fingerPos = new Vector3(rayPos.x, rayPos.y, rayPos.z);
        const fingerDir = fingerPos.sub(camPos).normalize();
        const fingerRay = new Ray(camPos, fingerDir);
        const intersection = fingerRay.intersectPlane(dragPlane, new Vector3());
        if (intersection) {
          floorPosition.copy(intersection);
        }
        return;
      }
      const globalUp = new Vector3(0, 1, 0);
      const hitOrientation = hitPose.transform.orientation;
      const wallNormal = globalUp.clone().applyQuaternion(new Quaternion(hitOrientation.x, hitOrientation.y, hitOrientation.z, hitOrientation.w)).normalize();
      const wallX = new Vector3().crossVectors(new Vector3(0, 1, 0), wallNormal);
      // Update rotation if it differs more than 10deg
      const prevWallNormal = new Vector3(0, 1, 0).applyQuaternion(this._wallRotation).normalize();
      if (Math.acos(Math.abs(prevWallNormal.dot(wallNormal))) >= Math.PI / 18) {
        const wallMatrix = new Matrix4().makeBasis(wallX, globalUp, wallNormal);
        const wallEuler = new Euler(0, 0, 0, "YXZ").setFromRotationMatrix(wallMatrix);
        wallEuler.z = 0;
        wallEuler.x = Math.PI / 2;
        this._wallRotation.setFromEuler(wallEuler);
        dragPlane.normal.copy(new Vector3(0, 1, 0).applyQuaternion(this._wallRotation));
        dragPlane.constant = this._calcDragPlaneConstant(hitPosition);
      }
      const camToHitDir = new Vector3().subVectors(hitPosition, camPos).normalize();
      const camToHitRay = new Ray(camPos, camToHitDir);
      const hitOnDragPlane = camToHitRay.intersectPlane(dragPlane, new Vector3());
      if (!hitOnDragPlane) return;
      floorPosition.copy(hitOnDragPlane);
    }
  }
  update({
    scene
  }, delta) {
    const state = this._state;
    const floorPosition = this._floorPosition;
    const hoverPosition = this._hoverPosition;
    const bounceMotion = this._bounceMotion;
    const vertical = this._vertical;
    if (state === STATE.BOUNCING) {
      bounceMotion.update(delta);
      hoverPosition.setY(floorPosition.y + bounceMotion.val);
      if (bounceMotion.progress >= 1) {
        this._state = STATE.WAITING;
      }
    }
    scene.setRootPosition(floorPosition);
    if (!vertical) {
      scene.setModelHovering(hoverPosition.y - floorPosition.y);
    } else {
      scene.setWallRotation(this._wallRotation);
    }
  }
  _calcDragPlaneConstant(floor) {
    const vertical = this._vertical;
    const dragPlaneNormal = this._dragPlane.normal.clone();
    const dragPlaneAtZero = new Plane(dragPlaneNormal, 0);
    const hoverHeight = vertical ? 0 : this._hoverHeight;
    const dragPlaneConstant = -(dragPlaneAtZero.distanceToPoint(floor) + hoverHeight);
    return dragPlaneConstant;
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * UI element displaying model's scale percentage info when user chaning model's scale.
 */
class ScaleUI {
  /**
   * Create new instance of ScaleUI
   * @param {ScaleUIOptions} [options={}] Options
   */
  constructor({
    width = 0.1,
    padding = 20,
    offset = 0.05,
    font = "64px sans-serif",
    color = "white"
  } = {}) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.font = font;
    // Maximum canvas width should be equal to this
    const maxText = ctx.measureText("100%");
    // Following APIs won't work on IE, but it's WebXR so I think it's okay
    const maxWidth = maxText.actualBoundingBoxLeft + maxText.actualBoundingBoxRight;
    const maxHeight = maxText.actualBoundingBoxAscent + maxText.actualBoundingBoxDescent;
    const widthPowerOfTwo = toPowerOfTwo(maxWidth);
    canvas.width = widthPowerOfTwo;
    canvas.height = widthPowerOfTwo;
    // This considers increased amount by making width to power of two
    const planeWidth = width * (widthPowerOfTwo / maxWidth);
    this._ctx = ctx;
    this._canvas = canvas;
    this._height = planeWidth * maxHeight / maxWidth; // Text height inside plane
    this._texture = new CanvasTexture(canvas);
    // Plane is square
    const uiGeometry = new PlaneGeometry(planeWidth, planeWidth);
    const mesh = new Mesh(uiGeometry, new MeshBasicMaterial({
      map: this._texture,
      transparent: true,
      depthTest: false
    }));
    this._mesh = mesh;
    this._font = font;
    this._color = color;
    this._padding = padding;
    this._offset = offset;
    this.hide();
  }
  /**
   * Scale UI's plane mesh
   * @readonly
   */
  get mesh() {
    return this._mesh;
  }
  /**
   * Scale UI's height value
   * @readonly
   */
  get height() {
    return this._height;
  }
  /**
   * Whether UI is visible or not.
   * @readonly
   */
  get visible() {
    return this._mesh.visible;
  }
  updatePosition(worldRotation, focus, modelHeight) {
    const mesh = this._mesh;
    const offset = this._height / 2 + this._offset + modelHeight;
    const offsetVec = new Vector3(0, offset, 0).applyQuaternion(worldRotation.clone().invert());
    // Update mesh
    mesh.position.copy(offsetVec);
    mesh.lookAt(focus);
  }
  updateScale(scale) {
    const ctx = this._ctx;
    const canvas = this._canvas;
    const padding = this._padding;
    const scalePercentage = (scale * 100).toFixed(0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    // Draw round rect
    const textSize = ctx.measureText(`${scalePercentage}%`);
    const halfWidth = (textSize.actualBoundingBoxLeft + textSize.actualBoundingBoxRight) / 2;
    const halfHeight = (textSize.actualBoundingBoxAscent + textSize.actualBoundingBoxDescent) / 2;
    ctx.beginPath();
    ctx.moveTo(centerX - halfWidth, centerY - halfHeight - padding);
    ctx.lineTo(centerX + halfWidth, centerY - halfHeight - padding);
    ctx.quadraticCurveTo(centerX + halfWidth + padding, centerY - halfHeight - padding, centerX + halfWidth + padding, centerY - halfHeight);
    ctx.lineTo(centerX + halfWidth + padding, centerY + halfHeight);
    ctx.quadraticCurveTo(centerX + halfWidth + padding, centerY + halfHeight + padding, centerX + halfWidth, centerY + halfHeight + padding);
    ctx.lineTo(centerX - halfWidth, centerY + halfHeight + padding);
    ctx.quadraticCurveTo(centerX - halfWidth - padding, centerY + halfHeight + padding, centerX - halfWidth - padding, centerY + halfHeight);
    ctx.lineTo(centerX - halfWidth - padding, centerY - halfHeight);
    ctx.quadraticCurveTo(centerX - halfWidth - padding, centerY - halfHeight - padding, centerX - halfWidth, centerY - halfHeight - padding);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.fill();
    ctx.stroke();
    // Draw text
    ctx.font = this._font;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.strokeStyle = this._color;
    ctx.fillStyle = this._color;
    ctx.fillText(`${scalePercentage}%`, centerX, centerY);
    this._texture.needsUpdate = true;
    this._mesh.scale.setScalar(1 / scale);
  }
  /**
   * Show UI
   */
  show() {
    this._mesh.visible = true;
  }
  /**
   * Hide UI
   */
  hide() {
    this._mesh.visible = false;
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Model's scale controller which works on AR(WebXR) mode.
 */
class ARScaleControl {
  /**
   * Create new instance of ARScaleControl
   * @param {ARScaleControlOptions} [options={}] Options
   * @param {number} [options.min=0.05] Minimum scale, default is 0.05(5%)
   * @param {number} [options.max=5] Maximum scale, default is 5(500%)
   */
  constructor({
    min = 0.05,
    max = 5
  } = {}) {
    this._enabled = false;
    this._active = false;
    this._prevCoordDistance = -1;
    this._scaleMultiplier = 1;
    this._ui = new ScaleUI();
    this._motion = new Motion({
      duration: 0,
      range: {
        min,
        max
      }
    });
    this._motion.reset(1); // default scale is 1(100%)
    this._ui = new ScaleUI();
  }
  /**
   * Whether this control is enabled or not
   * @readonly
   */
  get enabled() {
    return this._enabled;
  }
  get scale() {
    return this._scaleMultiplier;
  }
  get ui() {
    return this._ui;
  }
  /**
   * Range of the scale
   * @readonly
   */
  get range() {
    return this._motion.range;
  }
  setInitialScale({
    scene,
    model,
    floorPosition,
    xrCam,
    initialScale
  }) {
    const motion = this._motion;
    const scaleRange = motion.range;
    if (initialScale === AUTO) {
      const camFov = 2 * Math.atan(1 / xrCam.projectionMatrix.elements[5]); // in radians
      const aspectInv = xrCam.projectionMatrix.elements[0] / xrCam.projectionMatrix.elements[5]; // x/y
      const camPos = xrCam.position;
      const modelHeight = model.bbox.max.y - model.bbox.min.y;
      const camToFloorDist = camPos.distanceTo(new Vector3().addVectors(floorPosition, new Vector3(0, modelHeight / 2, 0)));
      const viewY = camToFloorDist * Math.tan(camFov / 2);
      const viewX = viewY * aspectInv;
      const modelBoundingSphere = model.bbox.getBoundingSphere(new Sphere());
      const scaleY = viewY / modelBoundingSphere.radius;
      const scaleX = viewX / modelBoundingSphere.radius;
      const scale = clamp(Math.min(scaleX, scaleY), scaleRange.min, 1);
      motion.reset(scale);
    } else {
      motion.reset(clamp(initialScale, scaleRange.min, scaleRange.max));
    }
    const scale = this._motion.val;
    this._scaleMultiplier = scale;
    scene.setModelScale(scale);
  }
  setInitialPos(coords) {
    this._prevCoordDistance = new Vector2().subVectors(coords[0], coords[1]).length();
  }
  /**
   * Enable this control
   */
  enable() {
    this._enabled = true;
  }
  /**
   * Disable this control
   */
  disable() {
    this._enabled = false;
    this.deactivate();
  }
  activate(ctx) {
    this._active = true;
    this._ui.show();
    this._updateUIPosition(ctx);
  }
  deactivate() {
    this._active = false;
    this._ui.hide();
    this._prevCoordDistance = -1;
  }
  process(ctx, {
    coords
  }) {
    if (coords.length !== 2 || !this._enabled || !this._active) return;
    const motion = this._motion;
    const distance = new Vector2().subVectors(coords[0], coords[1]).length();
    const delta = distance - this._prevCoordDistance;
    motion.setEndDelta(delta);
    this._prevCoordDistance = distance;
    this._updateUIPosition(ctx);
  }
  update({
    scene
  }, deltaTime) {
    if (!this._enabled || !this._active) return;
    const motion = this._motion;
    motion.update(deltaTime);
    this._scaleMultiplier = motion.val;
    this._ui.updateScale(this._scaleMultiplier);
    scene.setModelScale(this._scaleMultiplier);
  }
  _updateUIPosition({
    view3D,
    scene,
    xrCam,
    vertical
  }) {
    // Update UI
    const model = view3D.model;
    const camPos = new Vector3().setFromMatrixPosition(xrCam.matrixWorld);
    const modelHeight = vertical ? model.bbox.getBoundingSphere(new Sphere()).radius : model.bbox.max.y - model.bbox.min.y;
    this._ui.updatePosition(scene.root.quaternion, camPos, modelHeight);
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Ring type indicator for showing where the model's at.
 */
class FloorIndicator {
  /**
   * Create new instance of FloorIndicator
   * @param {FloorIndicatorOptions} [options={}] Options
   */
  constructor({
    ringOpacity = 0.3,
    dirIndicatorOpacity = 1,
    fadeoutDuration = 1000
  } = {}) {
    const deg10 = Math.PI / 18;
    const ringGeomtry = new RingGeometry(0.975, 1, 150, 1, -6 * deg10, 30 * deg10);
    ringGeomtry.rotateX(-Math.PI / 2);
    const arrowGeometry = new RingGeometry(0.96, 1.015, 30, 1, 25 * deg10, 4 * deg10);
    // Create little triangle in ring
    const {
      position: arrowGeometryPosition
    } = arrowGeometry.attributes;
    const triangleStartIdx = Math.floor(11 * arrowGeometryPosition.count / 16);
    const triangleEndIdx = Math.floor(13 * arrowGeometryPosition.count / 16);
    const midIndex = Math.floor((triangleEndIdx - triangleStartIdx + 1) / 2);
    const firstY = new Vector3().fromBufferAttribute(arrowGeometryPosition, triangleStartIdx).y;
    for (let idx = triangleStartIdx; idx < triangleEndIdx; idx++) {
      const vecIndex = idx - triangleStartIdx;
      const offsetAmount = 0.025 * (midIndex - Math.abs(vecIndex - midIndex));
      arrowGeometryPosition.setY(idx, firstY - offsetAmount);
    }
    arrowGeometry.rotateX(-Math.PI / 2);
    const dimmedMaterial = new MeshBasicMaterial({
      transparent: true,
      opacity: ringOpacity,
      color: 0xffffff
    });
    const highlightMaterial = new MeshBasicMaterial({
      transparent: true,
      opacity: dirIndicatorOpacity,
      color: 0xffffff
    });
    const ring = new Mesh(ringGeomtry, dimmedMaterial);
    const arrow = new Mesh(arrowGeometry, highlightMaterial);
    const merged = new Group();
    merged.add(ring, arrow);
    merged.position.setY(0.0001); // Set Y higher than shadow plane
    this._mesh = merged;
    this._ring = ring;
    this._arrow = arrow;
    this._animator = new Motion({
      duration: fadeoutDuration
    });
    this._opacityRange = {
      min: ringOpacity,
      max: dirIndicatorOpacity
    };
    this.hide();
  }
  /**
   * Ring mesh
   */
  get mesh() {
    return this._mesh;
  }
  updateSize(model) {
    this._mesh.scale.setScalar(model.bbox.getBoundingSphere(new Sphere()).radius);
  }
  update({
    delta,
    rotation
  }) {
    const mesh = this._mesh;
    const animator = this._animator;
    if (!mesh.visible) return;
    animator.update(delta);
    const minOpacityMat = this._ring.material;
    const maxOpacityMat = this._arrow.material;
    const opacityRange = this._opacityRange;
    minOpacityMat.opacity = animator.val * opacityRange.min;
    maxOpacityMat.opacity = animator.val * opacityRange.max;
    if (animator.val <= 0) {
      mesh.visible = false;
    }
    // Update mesh
    mesh.quaternion.copy(rotation);
    mesh.updateMatrix();
  }
  show() {
    this._mesh.visible = true;
    this._animator.reset(1);
  }
  hide() {
    this._mesh.visible = false;
  }
  fadeout() {
    this._animator.setEndDelta(-1);
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
var STATE$1;
(function (STATE) {
  STATE[STATE["WAITING"] = 0] = "WAITING";
  STATE[STATE["IN_DEADZONE"] = 1] = "IN_DEADZONE";
  STATE[STATE["OUT_OF_DEADZONE"] = 2] = "OUT_OF_DEADZONE";
})(STATE$1 || (STATE$1 = {}));
/**
 * Deadzone checker for deadzone-based controls
 */
class DeadzoneChecker {
  /**
   * Create new DeadzoneChecker
   * @param {DeadzoneCheckerOptions} [options={}] Options
   * @param {number} [options.size=0.1] Size of the deadzone circle.
   */
  constructor({
    size = 0.1
  } = {}) {
    // Internal States
    this._state = STATE$1.WAITING;
    this._detectedGesture = GESTURE.NONE;
    this._testingGestures = GESTURE.NONE;
    this._lastFingerCount = 0;
    this._aspect = 1;
    // Store two prev positions, as it should be maintained separately
    this._prevOneFingerPos = new Vector2();
    this._prevTwoFingerPos = new Vector2();
    this._initialTwoFingerDistance = 0;
    this._prevOneFingerPosInitialized = false;
    this._prevTwoFingerPosInitialized = false;
    this._size = size;
  }
  /**
   * Size of the deadzone.
   * @type {number}
   */
  get size() {
    return this._size;
  }
  /**
   * Whether the input is in the deadzone
   * @type {boolean}
   */
  get inDeadzone() {
    return this._state === STATE$1.IN_DEADZONE;
  }
  set size(val) {
    this._size = val;
  }
  /**
   * Set screen aspect(height / width)
   * @param aspect Screen aspect value
   */
  setAspect(aspect) {
    this._aspect = aspect;
  }
  setFirstInput(inputs) {
    const fingerCount = inputs.length;
    if (fingerCount === 1 && !this._prevOneFingerPosInitialized) {
      this._prevOneFingerPos.copy(inputs[0]);
      this._prevOneFingerPosInitialized = true;
    } else if (fingerCount === 2 && !this._prevTwoFingerPosInitialized) {
      this._prevTwoFingerPos.copy(new Vector2().addVectors(inputs[0], inputs[1]).multiplyScalar(0.5));
      this._initialTwoFingerDistance = new Vector2().subVectors(inputs[0], inputs[1]).length();
      this._prevTwoFingerPosInitialized = true;
    }
    this._lastFingerCount = fingerCount;
    this._state = STATE$1.IN_DEADZONE;
  }
  addTestingGestures(...gestures) {
    this._testingGestures = this._testingGestures | gestures.reduce((gesture, accumulated) => gesture | accumulated, GESTURE.NONE);
  }
  cleanup() {
    this._testingGestures = GESTURE.NONE;
    this._lastFingerCount = 0;
    this._prevOneFingerPosInitialized = false;
    this._prevTwoFingerPosInitialized = false;
    this._initialTwoFingerDistance = 0;
    this._detectedGesture = GESTURE.NONE;
    this._state = STATE$1.WAITING;
  }
  applyScreenAspect(inputs) {
    const aspect = this._aspect;
    inputs.forEach(input => {
      if (aspect > 1) {
        input.setY(input.y * aspect);
      } else {
        input.setX(input.x / aspect);
      }
    });
  }
  check(inputs) {
    const state = this._state;
    const deadzone = this._size;
    const testingGestures = this._testingGestures;
    const lastFingerCount = this._lastFingerCount;
    const fingerCount = inputs.length;
    if (state === STATE$1.OUT_OF_DEADZONE) {
      return this._detectedGesture;
    }
    this._lastFingerCount = fingerCount;
    this.applyScreenAspect(inputs);
    if (fingerCount !== lastFingerCount) {
      this.setFirstInput(inputs);
      return GESTURE.NONE;
    }
    if (fingerCount === 1) {
      const input = inputs[0];
      const prevPos = this._prevOneFingerPos.clone();
      const diff = new Vector2().subVectors(input, prevPos);
      if (diff.length() > deadzone) {
        if (Math.abs(diff.x) > Math.abs(diff.y)) {
          if (GESTURE.ONE_FINGER_HORIZONTAL & testingGestures) {
            this._detectedGesture = GESTURE.ONE_FINGER_HORIZONTAL;
          }
        } else {
          if (GESTURE.ONE_FINGER_VERTICAL & testingGestures) {
            this._detectedGesture = GESTURE.ONE_FINGER_VERTICAL;
          }
        }
      }
    } else if (fingerCount === 2) {
      const middle = new Vector2().addVectors(inputs[1], inputs[0]).multiplyScalar(0.5);
      const prevPos = this._prevTwoFingerPos.clone();
      const diff = new Vector2().subVectors(middle, prevPos);
      if (diff.length() > deadzone) {
        if (Math.abs(diff.x) > Math.abs(diff.y)) {
          if (GESTURE.TWO_FINGER_HORIZONTAL & testingGestures) {
            this._detectedGesture = GESTURE.TWO_FINGER_HORIZONTAL;
          }
        } else {
          if (GESTURE.TWO_FINGER_VERTICAL & testingGestures) {
            this._detectedGesture = GESTURE.TWO_FINGER_VERTICAL;
          }
        }
      }
      const distance = new Vector2().subVectors(inputs[1], inputs[0]).length();
      if (Math.abs(distance - this._initialTwoFingerDistance) > deadzone) {
        if (GESTURE.PINCH & testingGestures) {
          this._detectedGesture = GESTURE.PINCH;
        }
      }
    }
    if (this._detectedGesture !== GESTURE.NONE) {
      this._state = STATE$1.OUT_OF_DEADZONE;
    }
    return this._detectedGesture;
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * AR control for {@link WebARSession}
 */
class WebARControl {
  /**
   * Create new instance of ARControl
   * @param {WebARControlOptions} options Options
   */
  constructor(view3D, arScene, {
    rotate,
    translate,
    scale,
    ring,
    deadzone,
    initialScale
  }) {
    this._onSelectStart = evt => {
      const frame = evt.frame;
      const view3D = this._view3D;
      const arScene = this._arScene;
      const hitTestSource = this._hitTestSource;
      const deadzoneChecker = this._deadzoneChecker;
      const rotateControl = this._rotateControl;
      const translateControl = this._translateControl;
      const scaleControl = this._scaleControl;
      const threeRenderer = view3D.renderer.threeRenderer;
      const xrCamArray = threeRenderer.xr.getCamera(new PerspectiveCamera());
      const referenceSpace = threeRenderer.xr.getReferenceSpace();
      if (!hitTestSource || xrCamArray.cameras.length <= 0) return;
      const xrCam = xrCamArray.cameras[0];
      const model = view3D.model;
      // Update deadzone testing gestures
      if (rotateControl.enabled) {
        deadzoneChecker.addTestingGestures(GESTURE.ONE_FINGER);
      }
      if (translateControl.enabled) {
        deadzoneChecker.addTestingGestures(GESTURE.ONE_FINGER);
      }
      if (scaleControl.enabled) {
        deadzoneChecker.addTestingGestures(GESTURE.PINCH);
      }
      const hitResults = frame.getHitTestResultsForTransientInput(hitTestSource);
      const coords = this._hitResultToVector(hitResults);
      deadzoneChecker.applyScreenAspect(coords);
      deadzoneChecker.setFirstInput(coords);
      if (coords.length === 1) {
        // Check finger is on the model
        const targetRayPose = frame.getPose(hitResults[0].inputSource.targetRaySpace, referenceSpace);
        if (targetRayPose) {
          const camPos = new Vector3().setFromMatrixPosition(xrCam.matrixWorld);
          const rayPose = targetRayPose.transform.position;
          const fingerDir = new Vector3(rayPose.x, rayPose.y, rayPose.z).sub(camPos).normalize();
          const fingerRay = new Ray(camPos, fingerDir);
          const modelBoundingSphere = model.bbox.getBoundingSphere(new Sphere());
          modelBoundingSphere.applyMatrix4(arScene.modelMovable.matrixWorld);
          const intersection = fingerRay.intersectSphere(modelBoundingSphere, new Vector3());
          if (intersection) {
            // Touch point intersected with model
            this._modelHit = true;
          }
        }
      }
      if (!this._vertical || this._modelHit) {
        this._floorIndicator.show();
      }
    };
    this._onSelectEnd = () => {
      this._deactivate();
      this._floorIndicator.fadeout();
    };
    this._view3D = view3D;
    this._arScene = arScene;
    this._vertical = false;
    this._initialized = false;
    this._modelHit = false;
    this._hitTestSource = null;
    this._rotate = rotate;
    this._translate = translate;
    this._scale = scale;
    this._initialScale = initialScale;
    this._rotateControl = new ARSwirlControl(getObjectOption(rotate));
    this._translateControl = new ARTranslateControl(getObjectOption(translate));
    this._scaleControl = new ARScaleControl(getObjectOption(scale));
    this._floorIndicator = new FloorIndicator(ring);
    this._deadzoneChecker = new DeadzoneChecker(deadzone);
  }
  /**
   * {@link ARSwirlControl} in this control
   */
  get rotate() {
    return this._rotateControl;
  }
  /**
   * {@link ARTranslateControl} in this control
   */
  get translate() {
    return this._translateControl;
  }
  /**
   * {@link ARScaleControl} in this control
   */
  get scale() {
    return this._scaleControl;
  }
  init({
    model,
    session,
    size,
    vertical,
    hitPosition,
    hitRotation
  }) {
    return __awaiter(this, void 0, void 0, function* () {
      const arScene = this._arScene;
      const translateControl = this._translateControl;
      const scaleControl = this._scaleControl;
      const floorIndicator = this._floorIndicator;
      const deadzoneChecker = this._deadzoneChecker;
      this._vertical = vertical;
      translateControl.init(hitPosition, hitRotation, vertical);
      deadzoneChecker.setAspect(size.height / size.width);
      arScene.add(floorIndicator.mesh, scaleControl.ui.mesh);
      this.syncTargetModel(model);
      const transientHitTestSource = yield session.requestHitTestSourceForTransientInput({
        profile: INPUT_PROFILE.TOUCH
      });
      this._hitTestSource = transientHitTestSource;
      this._initialized = true;
    });
  }
  /**
   * Destroy this control and deactivate it
   */
  destroy(session) {
    if (!this._initialized) return;
    if (this._hitTestSource) {
      this._hitTestSource.cancel();
      this._hitTestSource = null;
    }
    this.disable(session);
    this._floorIndicator.hide();
    this._scaleControl.ui.hide();
    session.removeEventListener(EVENTS$2.SELECT_START, this._onSelectStart);
    session.removeEventListener(EVENTS$2.SELECT_END, this._onSelectEnd);
    this._initialized = false;
  }
  enable(session) {
    const rotate = this._rotate;
    const translate = this._translate;
    const scale = this._scale;
    const rotateControl = this._rotateControl;
    const translateControl = this._translateControl;
    const scaleControl = this._scaleControl;
    const vertical = this._vertical;
    session.addEventListener(EVENTS$2.SELECT_START, this._onSelectStart);
    session.addEventListener(EVENTS$2.SELECT_END, this._onSelectEnd);
    if (rotate && !vertical) {
      rotateControl.enable();
    }
    if (translate) {
      translateControl.enable();
    }
    if (scale) {
      scaleControl.enable();
    }
  }
  disable(session) {
    const rotateControl = this._rotateControl;
    const translateControl = this._translateControl;
    const scaleControl = this._scaleControl;
    session.removeEventListener(EVENTS$2.SELECT_START, this._onSelectStart);
    session.removeEventListener(EVENTS$2.SELECT_END, this._onSelectEnd);
    this._deactivate();
    rotateControl.disable();
    translateControl.disable();
    scaleControl.disable();
  }
  update(ctx) {
    var _a;
    const {
      view3D,
      session,
      frame
    } = ctx;
    const hitTestSource = this._hitTestSource;
    if (!hitTestSource || !view3D.model) return;
    const deadzoneChecker = this._deadzoneChecker;
    const inputSources = session.inputSources;
    const hitResults = (_a = frame === null || frame === void 0 ? void 0 : frame.getHitTestResultsForTransientInput(hitTestSource)) !== null && _a !== void 0 ? _a : [];
    const coords = this._hitResultToVector(hitResults);
    const xrInputs = {
      coords,
      inputSources,
      hitResults
    };
    if (deadzoneChecker.inDeadzone) {
      this._checkDeadzone(ctx, xrInputs);
    } else {
      this._processInput(ctx, xrInputs);
    }
    this._updateControls(ctx);
  }
  syncTargetModel(model) {
    const initialScale = this._initialScale;
    const floorPosition = this._translateControl.floorPosition;
    const xrCam = this._view3D.renderer.threeRenderer.xr.getCamera(new PerspectiveCamera()).cameras[0];
    this._floorIndicator.updateSize(model);
    this._scaleControl.setInitialScale({
      scene: this._arScene,
      model,
      floorPosition,
      xrCam,
      initialScale
    });
  }
  _deactivate() {
    this._modelHit = false;
    this._deadzoneChecker.cleanup();
    this._rotateControl.deactivate();
    this._translateControl.deactivate();
    this._scaleControl.deactivate();
  }
  _checkDeadzone(ctx, {
    coords
  }) {
    const arScene = this._arScene;
    const rotateControl = this._rotateControl;
    const translateControl = this._translateControl;
    const scaleControl = this._scaleControl;
    const gesture = this._deadzoneChecker.check(coords.map(coord => coord.clone()));
    if (gesture === GESTURE.NONE) return;
    switch (gesture) {
      case GESTURE.ONE_FINGER_HORIZONTAL:
      case GESTURE.ONE_FINGER_VERTICAL:
        if (this._modelHit) {
          translateControl.activate();
          translateControl.setInitialPos(coords);
        } else {
          rotateControl.activate();
          rotateControl.updateRotation(arScene.modelMovable.quaternion);
          rotateControl.setInitialPos(coords);
        }
        break;
      case GESTURE.PINCH:
        scaleControl.activate(ctx);
        scaleControl.setInitialPos(coords);
        break;
    }
  }
  _processInput(ctx, inputs) {
    this._rotateControl.process(ctx, inputs);
    this._translateControl.process(ctx, inputs);
    this._scaleControl.process(ctx, inputs);
  }
  _updateControls(ctx) {
    const {
      delta
    } = ctx;
    const arScene = this._arScene;
    const rotateControl = this._rotateControl;
    const translateControl = this._translateControl;
    const scaleControl = this._scaleControl;
    const floorIndicator = this._floorIndicator;
    const deltaMilisec = delta * 1000;
    rotateControl.update(ctx, deltaMilisec);
    translateControl.update(ctx, deltaMilisec);
    scaleControl.update(ctx, deltaMilisec);
    const modelRotation = rotateControl.rotation;
    const floorPosition = translateControl.floorPosition;
    arScene.setRootPosition(floorPosition);
    floorIndicator.update({
      delta: deltaMilisec,
      rotation: modelRotation
    });
  }
  _hitResultToVector(hitResults) {
    return hitResults.map(input => {
      return new Vector2().set(input.inputSource.gamepad.axes[0], -input.inputSource.gamepad.axes[1]);
    });
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * A dedicated scene for WebXR-based AR session
 */
class ARScene {
  /** */
  constructor() {
    this._root = new Scene$1();
    this._modelRoot = new Group();
    this._modelMovable = new Group();
    this._modelFixed = new Group();
    this._arRoot = new Group();
    const root = this._root;
    const modelRoot = this._modelRoot;
    const modelMovable = this._modelMovable;
    const modelFixed = this._modelFixed;
    const arRoot = this._arRoot;
    modelRoot.add(modelMovable);
    root.add(modelRoot, modelFixed, arRoot);
  }
  get root() {
    return this._root;
  }
  get modelRoot() {
    return this._modelRoot;
  }
  get modelMovable() {
    return this._modelMovable;
  }
  get arRoot() {
    return this._arRoot;
  }
  init(view3D) {
    const root = this._root;
    const modelMovable = this._modelMovable;
    const modelFixed = this._modelFixed;
    // Copy all scene objects into model objects
    const originalScene = view3D.scene;
    modelMovable.add(originalScene.userObjects, originalScene.envObjects);
    modelFixed.add(originalScene.fixedObjects);
    // Copy environment
    root.environment = originalScene.root.environment;
    // Start with root hidden, as floor should be detected first
    this.hideModel();
  }
  destroy(view3D) {
    const modelMovable = this._modelMovable;
    const modelFixed = this._modelFixed;
    const originalScene = view3D.scene;
    [...modelMovable.children, ...modelFixed.children].forEach(child => {
      originalScene.root.add(child);
    });
  }
  /**
   * Make this scene visible
   * @returns {void}
   */
  showModel() {
    this._modelRoot.visible = true;
  }
  /**
   * Make this scene invisible
   * @returns {void}
   */
  hideModel() {
    this._modelRoot.visible = false;
  }
  /**
   * Add AR-exclusive object
   */
  add(...objects) {
    this._arRoot.add(...objects);
  }
  /**
   * Remove objects from scene
   */
  remove(...objects) {
    this._arRoot.remove(...objects);
  }
  setRootPosition(pos) {
    const root = this._root;
    root.position.copy(pos);
  }
  setWallRotation(quat) {
    const root = this._root;
    root.quaternion.copy(quat);
  }
  updateModelRootPosition(model, vertical) {
    const modelRoot = this._modelRoot;
    if (!vertical) return;
    const modelHeight = model.bbox.max.y - model.bbox.min.y;
    modelRoot.position.setZ(modelHeight / 2);
    modelRoot.position.setY(-model.bbox.min.z);
    modelRoot.rotateX(-Math.PI / 2);
    modelRoot.updateMatrix();
  }
  setModelHovering(hoverAmount) {
    const modelMovable = this._modelMovable;
    modelMovable.position.setY(hoverAmount);
  }
  setModelRotation(quat) {
    const modelMovable = this._modelMovable;
    modelMovable.quaternion.copy(quat);
  }
  setModelScale(scalar) {
    const root = this._root;
    root.scale.setScalar(scalar);
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Manager for WebXR dom-overlay feature
 */
class DOMOverlay {
  constructor() {
    this._root = null;
  }
  /**
   * Return whether dom-overlay feature is available
   */
  static isAvailable() {
    return DOM_OVERLAY_SUPPORTED();
  }
  get root() {
    return this._root;
  }
  destroy() {
    this._root = null;
  }
  getFeatures(root) {
    this._root = root;
    return FEATURES.DOM_OVERLAY(root);
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Manager for WebXR hit-test feature
 */
class HitTest {
  constructor() {
    this._source = null;
  }
  /**
   * Return whether hit-test feature is available
   */
  static isAvailable() {
    return HIT_TEST_SUPPORTED();
  }
  /**
   * Return whether hit-test is ready
   */
  get ready() {
    return this._source != null;
  }
  /**
   * Destroy instance
   */
  destroy() {
    if (this._source) {
      this._source.cancel();
      this._source = null;
    }
  }
  /**
   * Initialize hit-test feature
   * @param {XRSession} session XRSession instance
   */
  init(session) {
    session.requestReferenceSpace(REFERENCE_SPACE.VIEWER).then(referenceSpace => {
      session.requestHitTestSource({
        space: referenceSpace
      }).then(source => {
        this._source = source;
      });
    });
  }
  /**
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/XRSessionInit XRSessionInit} object for hit-test feature
   */
  getFeatures() {
    return FEATURES.HIT_TEST;
  }
  /**
   * Get hit-test results
   * @param {XRFrame} frame XRFrame instance
   */
  getResults(frame) {
    var _a;
    return (_a = frame === null || frame === void 0 ? void 0 : frame.getHitTestResults(this._source)) !== null && _a !== void 0 ? _a : [];
  }
}

/**
 * Manager for WebXR light-estimation feature
 */
class LightEstimation {
  constructor(view3D, arScene) {
    this._onEstimationStart = () => {
      const estimatedLight = this._light;
      const scene = this._arScene;
      if (!estimatedLight) return;
      scene.add(estimatedLight);
      if (estimatedLight.environment) {
        scene.root.environment = estimatedLight.environment;
      }
    };
    this._onEstimationEnd = () => {
      const estimatedLight = this._light;
      const scene = this._arScene;
      if (!estimatedLight) return;
      scene.remove(estimatedLight);
      scene.root.environment = this._origEnvironment;
    };
    this._view3D = view3D;
    this._arScene = arScene;
    this._light = null;
    this._origEnvironment = null;
  }
  /**
   * As light estimation is optional, always return true
   * @type {true}
   */
  static isAvailable() {
    return true;
  }
  /**
   * "light-estimation" as optionalFeatures
   */
  getFeatures() {
    return FEATURES.LIGHT_ESTIMATION;
  }
  init() {
    const renderer = this._view3D.renderer.threeRenderer;
    const estimatedLight = new XREstimatedLight(renderer);
    this._light = estimatedLight;
    estimatedLight.addEventListener(EVENTS$2.ESTIMATION_START, this._onEstimationStart);
    estimatedLight.addEventListener(EVENTS$2.ESTIMATION_END, this._onEstimationEnd);
  }
  destroy() {
    const estimatedLight = this._light;
    if (!estimatedLight) return;
    estimatedLight.removeEventListener(EVENTS$2.ESTIMATION_START, this._onEstimationStart);
    estimatedLight.removeEventListener(EVENTS$2.ESTIMATION_END, this._onEstimationEnd);
    this._light = null;
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * WebXR based abstract AR session class
 */
class WebARSession {
  /**
   * Create new instance of WebARSession
   * @param {View3D} view3D Instance of the View3D
   * @param {object} [options={}] Options
   * @param {object} [options.features={}] Additional features(see {@link https://developer.mozilla.org/en-US/docs/Web/API/XRSessionInit XRSessionInit}) of the WebXR session.
   * @param {boolean} [options.vertical=false] Whether to place 3D model vertically on the wall.
   * @param {HTMLElement|string|null} [options.overlayRoot=null] `dom-overlay`'s root element. You can set either HTMLElement or query selector for that element.
   * @param {boolean} [options.useLightEstimation=true] Whether to use `light-estimation` feature.
   * @param {boolean|ARSwirlControlOptions} [options.rotate=true] Options for the rotate control inside the AR session. You can disable rotate control by giving `false`.
   * @param {boolean|ARTranslateControlOptions} [options.translate=true] Options for the translate control inside the AR session. You can disable translate control by giving `false`.
   * @param {boolean|ARScaleControlOptions} [options.scale=true] Options for the scale control inside the AR session. You can disable scale control by giving `false`.
   * @param {FloorIndicatorOptions} [options.ring={}] Options for the floor ring.
   * @param {DeadzoneCheckerOptions} [options.deadzone={}] Control's deadzone options.
   * @param {"auto"|number} [options.initialScale="auto"] Initial scale of the model. If set to "auto", it will modify big overflowing 3D model's scale to fit the screen when it's initially displayed. This won't increase the 3D model's scale more than 1.
   */
  constructor(view3D, {
    features = EMPTY_FEATURES,
    vertical = false,
    overlayRoot = null,
    useLightEstimation = true,
    rotate = true,
    translate = true,
    scale = true,
    ring = {},
    deadzone = {},
    initialScale = AUTO
  } = {}) {
    this._view3D = view3D;
    // Init internal states
    this._modelPlaced = false;
    // Bind options
    this.features = features;
    this.vertical = vertical;
    this.overlayRoot = overlayRoot;
    this.useLightEstimation = useLightEstimation;
    // Create internal components
    this._arScene = new ARScene();
    this._control = new WebARControl(view3D, this._arScene, {
      rotate,
      translate,
      scale,
      ring,
      deadzone,
      initialScale
    });
    this._hitTest = new HitTest();
    this._domOverlay = new DOMOverlay();
    this._lightEstimation = new LightEstimation(view3D, this._arScene);
  }
  /**
   * Return availability of this session
   * @returns {Promise<boolean>} A Promise that resolves availability of this session(boolean).
   */
  static isAvailable() {
    if (!WEBXR_SUPPORTED() || !HitTest.isAvailable() || !DOMOverlay.isAvailable()) return Promise.resolve(false);
    return navigator.xr.isSessionSupported(SESSION.AR);
  }
  /**
   * {@link ARControl} instance of this session
   * @type ARFloorControl
   */
  get control() {
    return this._control;
  }
  get arScene() {
    return this._arScene;
  }
  get hitTest() {
    return this._hitTest;
  }
  get domOverlay() {
    return this._domOverlay;
  }
  get lightEstimation() {
    return this._lightEstimation;
  }
  /**
   * Enter session
   * @param view3D Instance of the View3D
   * @returns {Promise}
   */
  enter() {
    return __awaiter(this, void 0, void 0, function* () {
      const view3D = this._view3D;
      const scene = view3D.scene;
      const arScene = this._arScene;
      const renderer = view3D.renderer;
      const threeRenderer = renderer.threeRenderer;
      const control = this._control;
      const hitTest = this._hitTest;
      const domOverlay = this._domOverlay;
      const useLightEstimation = this.useLightEstimation;
      const lightEstimation = this._lightEstimation;
      const vertical = this.vertical;
      const features = this._getAllXRFeatures();
      // Enable xr
      threeRenderer.xr.enabled = true;
      if (useLightEstimation) {
        // Estimation requires "sessionstart" event of the renderer
        // So it should be initialized before requesting session
        lightEstimation.init();
      }
      const session = yield navigator.xr.requestSession(SESSION.AR, features);
      // Cache original values
      const originalPixelRatio = threeRenderer.getPixelRatio();
      threeRenderer.setPixelRatio(1);
      threeRenderer.xr.setReferenceSpaceType(REFERENCE_SPACE.LOCAL);
      yield threeRenderer.xr.setSession(session);
      arScene.init(view3D);
      hitTest.init(session);
      const onSessionEnd = () => __awaiter(this, void 0, void 0, function* () {
        control.destroy(session);
        arScene.destroy(view3D);
        lightEstimation.destroy();
        domOverlay.destroy();
        // Restore original values
        threeRenderer.setPixelRatio(originalPixelRatio);
        // Restore render loop
        renderer.stopAnimationLoop();
        renderer.setAnimationLoop(renderer.defaultRenderLoop);
        view3D.trigger(EVENTS$1.AR_END, {
          target: view3D,
          type: EVENTS$1.AR_END,
          session: this
        });
      });
      session.addEventListener("end", onSessionEnd, {
        once: true
      });
      // Set XR session render loop
      const screenSize = new Vector2(window.outerWidth, window.outerHeight);
      const arClock = new Clock();
      arClock.start();
      renderer.stopAnimationLoop();
      threeRenderer.xr.setAnimationLoop((_, frame) => {
        var _a, _b;
        const xrCamArray = threeRenderer.xr.getCamera(new PerspectiveCamera());
        const delta = arClock.getDelta();
        if (xrCamArray.cameras.length <= 0) return;
        const xrCam = xrCamArray.cameras[0];
        const referenceSpace = threeRenderer.xr.getReferenceSpace();
        const glLayer = session.renderState.baseLayer;
        const size = {
          width: (_a = glLayer === null || glLayer === void 0 ? void 0 : glLayer.framebufferWidth) !== null && _a !== void 0 ? _a : 1,
          height: (_b = glLayer === null || glLayer === void 0 ? void 0 : glLayer.framebufferHeight) !== null && _b !== void 0 ? _b : 1
        };
        const ctx = {
          view3D,
          scene: arScene,
          session,
          delta,
          frame,
          vertical,
          referenceSpace,
          xrCam,
          size
        };
        const deltaMiliSec = delta * 1000;
        view3D.trigger(EVENTS$1.BEFORE_RENDER, {
          type: EVENTS$1.BEFORE_RENDER,
          target: view3D,
          delta: deltaMiliSec
        });
        if (!this._modelPlaced) {
          this._initModelPosition(ctx);
        } else {
          view3D.animator.update(delta);
          control.update(ctx);
          scene.shadowPlane.render();
          threeRenderer.render(arScene.root, xrCam);
          view3D.annotation.render(xrCam, screenSize);
        }
        view3D.trigger(EVENTS$1.RENDER, {
          type: EVENTS$1.RENDER,
          target: view3D,
          delta: deltaMiliSec
        });
      });
      view3D.trigger(EVENTS$1.AR_START, {
        type: EVENTS$1.AR_START,
        target: view3D,
        session: this
      });
    });
  }
  /**
   * Exit this session
   */
  exit() {
    return __awaiter(this, void 0, void 0, function* () {
      const session = this._view3D.renderer.threeRenderer.xr.getSession();
      return session === null || session === void 0 ? void 0 : session.end();
    });
  }
  _getAllXRFeatures() {
    var _a;
    const userFeatures = this.features;
    const overlayRoot = (_a = getNullableElement(this.overlayRoot)) !== null && _a !== void 0 ? _a : this._createARRootElement();
    return merge({}, this._domOverlay.getFeatures(overlayRoot), this._hitTest.getFeatures(), this._lightEstimation.getFeatures(), userFeatures);
  }
  _initModelPosition(ctx) {
    const {
      frame,
      session,
      size,
      vertical,
      referenceSpace
    } = ctx;
    const view3D = this._view3D;
    const model = view3D.model;
    const arScene = this._arScene;
    const hitTest = this._hitTest;
    // Make sure the model is loaded
    if (!hitTest.ready || !model) return;
    const control = this._control;
    const hitTestResults = hitTest.getResults(frame);
    if (hitTestResults.length <= 0) return;
    const hit = hitTestResults[0];
    const hitPose = hit.getPose(referenceSpace);
    if (!hitPose) return;
    const hitMatrix = new Matrix4().fromArray(hitPose.transform.matrix);
    // If transformed coords space's y axis is not facing the correct direction, don't use it.
    if (!vertical && hitMatrix.elements[5] < 0.75 || vertical && (hitMatrix.elements[5] >= 0.25 || hitMatrix.elements[5] <= -0.25)) return;
    const hitPosition = new Vector3().setFromMatrixPosition(hitMatrix);
    const hitRotation = new Quaternion();
    if (vertical) {
      const globalUp = new Vector3(0, 1, 0);
      const hitOrientation = hitPose.transform.orientation;
      const wallNormal = globalUp.clone().applyQuaternion(new Quaternion(hitOrientation.x, hitOrientation.y, hitOrientation.z, hitOrientation.w)).normalize();
      const wallX = new Vector3().crossVectors(new Vector3(0, 1, 0), wallNormal);
      const wallMatrix = new Matrix4().makeBasis(wallX, globalUp, wallNormal);
      const wallEuler = new Euler(0, 0, 0, "YXZ").setFromRotationMatrix(wallMatrix);
      wallEuler.z = 0;
      wallEuler.x = Math.PI / 2;
      hitRotation.setFromEuler(wallEuler);
      arScene.setWallRotation(hitRotation);
    }
    // Reset rotation & update position
    arScene.updateModelRootPosition(model, vertical);
    arScene.setRootPosition(hitPosition);
    arScene.showModel();
    // Don't need hit-test anymore, as we're having new one in WebARControl
    hitTest.destroy();
    this._modelPlaced = true;
    view3D.trigger(EVENTS$1.AR_MODEL_PLACED, {
      type: EVENTS$1.AR_MODEL_PLACED,
      target: view3D,
      session: this,
      model
    });
    void control.init({
      model,
      vertical,
      session,
      size,
      hitPosition,
      hitRotation
    });
    const initialScale = control.scale.scale;
    // Show scale up animation
    const scaleUpAnimation = new Animation({
      context: session,
      duration: 1000
    });
    scaleUpAnimation.on("progress", evt => {
      arScene.setModelScale(evt.easedProgress * initialScale);
    });
    scaleUpAnimation.on("finish", () => {
      arScene.setModelScale(initialScale);
      control.enable(session);
    });
    scaleUpAnimation.start();
  }
  _createARRootElement() {
    const view3D = this._view3D;
    const root = document.createElement(EL_DIV);
    root.classList.add(AR_OVERLAY_CLASS);
    view3D.rootEl.appendChild(root);
    view3D.once(EVENTS$1.AR_END, () => {
      view3D.rootEl.removeChild(root);
    });
    return root;
  }
}
WebARSession.type = AR_SESSION_TYPE.WEBXR;

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * AR session using Google's scene-viewer
 * @see https://developers.google.com/ar/develop/java/scene-viewer
 */
class SceneViewerSession {
  /**
   * Create new instance of SceneViewerSession
   * @see https://developers.google.com/ar/develop/java/scene-viewer
   * @param {View3D} view3D Instance of the View3D
   * @param {object} [params={}] Session params
   * @param {string} [params.file=null] This URL specifies the glTF or glb file that should be loaded into Scene Viewer. This should be URL-escaped. If `null` is given, it will try to use current model shown on the canvas. This behavior only works when the format of the model shown is either "glTF" or "glb".
   * @param {string} [params.mode="ar_only"] See [SCENE_VIEWER_MODE](/docs/api/SCENE_VIEWER_MODE) for available modes (also check their [official page](https://developers.google.com/ar/develop/java/scene-viewer) for details).
   * @param {string} [params.fallbackURL=null] This is a Google Chrome feature supported only for web-based implementations. When the Google app com.google.android.googlequicksearchbox is not present on the device, this is the URL that Google Chrome navigates to.
   * @param {string} [params.title=null] A name for the model. If present, it will be displayed in the UI. The name will be truncated with ellipses after 60 characters.
   * @param {string} [params.link=null] A URL for an external webpage. If present, a button will be surfaced in the UI that intents to this URL when clicked.
   * @param {string} [params.sound=null] A URL to a looping audio track that is synchronized with the first animation embedded in a glTF file. It should be provided alongside a glTF with an animation of matching length. If present, the sound is looped after the model is loaded. This should be URL-escaped.
   * @param {boolean} [params.resizable=true] When set to false, users will not be able to scale the model in the AR experience. Scaling works normally in the 3D experience.
   * @param {boolean} [params.vertical=false] When set to true, users will be able to place the model on a vertical surface.
   * @param {boolean} [params.disableOcclusion=false] When set to true, SceneViewer will disable {@link https://developers.google.com/ar/develop/java/depth/introduction object blending}
   * @param {string} [params.initialScale="auto"] Initial scale of the 3D model. If set to `null`, 3D model will shown as its original size and will disable the "View actual size" button. Default value is "auto", and "1" will show model size in 100%, "2" in 200%, "0.5" in 50% and so on.
   * @param {string} [params.shareText=null] A text that will be displayed when user clicked the share button.
   */
  constructor(view3D, _a = {}) {
    var {
        file = null,
        mode = SCENE_VIEWER_MODE.ONLY_AR,
        fallbackURL = null,
        title = null,
        link = null,
        sound = null,
        resizable = true,
        vertical = false,
        disableOcclusion = false,
        initialScale = AUTO,
        shareText = null
      } = _a,
      otherParams = __rest(_a, ["file", "mode", "fallbackURL", "title", "link", "sound", "resizable", "vertical", "disableOcclusion", "initialScale", "shareText"]);
    this._view3D = view3D;
    this.file = file;
    this.fallbackURL = fallbackURL;
    this.mode = mode;
    this.title = title;
    this.link = link;
    this.sound = sound;
    this.resizable = resizable;
    this.vertical = vertical;
    this.disableOcclusion = disableOcclusion;
    this.initialScale = initialScale;
    this.shareText = shareText;
    this.otherParams = otherParams;
  }
  /**
   * Return the availability of SceneViewerSession.
   * Scene-viewer is available on all android devices with google ARCore installed.
   * @returns {Promise} A Promise that resolves availability of this session(boolean).
   */
  static isAvailable() {
    return Promise.resolve(IS_ANDROID());
  }
  /**
   * Enter Scene-viewer AR session
   */
  enter() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
      const model = this._view3D.model;
      const params = Object.assign({
        title: this.title,
        link: this.link,
        sound: this.sound,
        mode: this.mode,
        initial_scale: this.initialScale
      }, this.otherParams);
      params.resizable = toBooleanString(this.resizable);
      params.enable_vertical_placement = toBooleanString(this.vertical);
      params.disable_occlusion = toBooleanString(this.disableOcclusion);
      params.share_text = this.shareText ? encodeURIComponent(this.shareText) : null;
      const file = (_a = this.file) !== null && _a !== void 0 ? _a : model.src;
      if (!file) {
        return Promise.reject(new View3DError(ERROR.MESSAGES.FILE_NOT_SUPPORTED((_b = this.file) !== null && _b !== void 0 ? _b : model.src), ERROR.CODES.FILE_NOT_SUPPORTED));
      }
      params.file = new URL(file, window.location.href).href;
      const fallbackURL = this.fallbackURL;
      const queryString = Object.keys(params).filter(key => params[key] != null).map(key => `${key}=${params[key]}`).join("&");
      const intentURL = params.mode === SCENE_VIEWER_MODE.ONLY_AR ? SCENE_VIEWER.INTENT_AR_CORE(queryString, fallbackURL) : SCENE_VIEWER.INTENT_SEARCHBOX(queryString, fallbackURL || SCENE_VIEWER.FALLBACK_DEFAULT(queryString));
      const anchor = document.createElement("a");
      anchor.href = intentURL;
      anchor.click();
    });
  }
  exit() {
    return Promise.resolve();
  }
}
SceneViewerSession.type = AR_SESSION_TYPE.SCENE_VIEWER;

/**
 * AR Session using Apple AR Quick Look Viewer
 * @see https://developer.apple.com/augmented-reality/quick-look/
 */
class QuickLookSession {
  /**
   * Create new instance of QuickLookSession
   * @param {View3D} view3D Instance of the View3D
   * @param {object} [options={}] Quick Look options
   * @param {boolean} [options.allowsContentScaling=true] Whether to allow content scaling.
   * @param {string | null} [options.canonicalWebPageURL=null] The web URL to share when the user invokes the share sheet. If `null` is given, the USDZ file will be shared.
   * @param {string | null} [options.applePayButtonType=null] Type of the apple pay button in the banner. See {@link QUICK_LOOK_APPLE_PAY_BUTTON_TYPE}
   * @param {string | null} [options.callToAction=null] A text that will be displayed instead of Apple Pay Button. See {@link https://developer.apple.com/documentation/arkit/adding_an_apple_pay_button_or_a_custom_action_in_ar_quick_look#3405143 Official Guide Page}
   * @param {string | null} [options.checkoutTitle=null] Title of the previewed item. See {@link https://developer.apple.com/documentation/arkit/adding_an_apple_pay_button_or_a_custom_action_in_ar_quick_look#3405142 Official Guide Page}
   * @param {string | null} [options.checkoutSubtitle=null] Subtitle of the previewed item. See {@link https://developer.apple.com/documentation/arkit/adding_an_apple_pay_button_or_a_custom_action_in_ar_quick_look#3405142 Official Guide Page}
   * @param {string | null} [options.price=null] Price of the previewed item. See {@link https://developer.apple.com/documentation/arkit/adding_an_apple_pay_button_or_a_custom_action_in_ar_quick_look#3405142 Official Guide Page}
   * @param {string | null} [options.custom=null] Custom URL to the banner HTML. See {@link https://developer.apple.com/documentation/arkit/adding_an_apple_pay_button_or_a_custom_action_in_ar_quick_look#3402837 Official Guide Page}
   * @param {string | null} [options.customHeight=null] Height of the custom banner. See {@link QUICK_LOOK_CUSTOM_BANNER_SIZE}
   */
  constructor(view3D, {
    allowsContentScaling = true,
    canonicalWebPageURL = null,
    applePayButtonType = null,
    callToAction = null,
    checkoutTitle = null,
    checkoutSubtitle = null,
    price = null,
    custom = null,
    customHeight = null
  } = {}) {
    this._view3D = view3D;
    this.allowsContentScaling = allowsContentScaling;
    this.canonicalWebPageURL = canonicalWebPageURL;
    this.applePayButtonType = applePayButtonType;
    this.callToAction = callToAction;
    this.checkoutTitle = checkoutTitle;
    this.checkoutSubtitle = checkoutSubtitle;
    this.price = price;
    this.custom = custom;
    this.customHeight = customHeight;
  }
  /**
   * Return the availability of QuickLookSession.
   * QuickLook AR is available on iOS12+
   * @returns {Promise} A Promise that resolves availability of this session(boolean).
   */
  static isAvailable() {
    return Promise.resolve(QUICK_LOOK_SUPPORTED() && IS_IOS());
  }
  /**
   * Enter QuickLook AR Session
   */
  enter() {
    const view3D = this._view3D;
    const file = view3D.iosSrc;
    if (!file) {
      return Promise.reject(new View3DError(ERROR.MESSAGES.FILE_NOT_SUPPORTED(`${file}`), ERROR.CODES.FILE_NOT_SUPPORTED));
    }
    const canonicalWebPageURL = this.canonicalWebPageURL;
    const custom = this.custom;
    const currentHref = window.location.href;
    const anchor = document.createElement("a");
    anchor.setAttribute("rel", "ar");
    anchor.appendChild(document.createElement("img"));
    const hashObj = Object.entries({
      applePayButtonType: this.applePayButtonType,
      callToAction: this.callToAction,
      checkoutTitle: this.checkoutTitle,
      checkoutSubtitle: this.checkoutSubtitle,
      price: this.price,
      customHeight: this.customHeight
    }).reduce((obj, [key, value]) => {
      if (value) {
        obj[key] = value;
      }
      return obj;
    }, {});
    const usdzURL = new URL(file, currentHref);
    if (!this.allowsContentScaling) {
      hashObj.allowsContentScaling = "0";
    }
    if (canonicalWebPageURL) {
      hashObj.canonicalWebPageURL = new URL(canonicalWebPageURL, currentHref).href;
    }
    if (custom) {
      hashObj.custom = new URL(custom, currentHref).href;
    }
    usdzURL.hash = new URLSearchParams(hashObj).toString();
    anchor.setAttribute("href", usdzURL.href);
    anchor.addEventListener("message", evt => {
      if (evt.data === "_apple_ar_quicklook_button_tapped") {
        // User tapped either Apple pay button / Custom action button
        view3D.trigger(EVENTS$1.QUICK_LOOK_TAP, Object.assign(Object.assign({}, evt), {
          type: EVENTS$1.QUICK_LOOK_TAP,
          target: view3D
        }));
      }
    }, false);
    anchor.click();
    return Promise.resolve();
  }
  exit() {
    return Promise.resolve();
  }
}
QuickLookSession.type = AR_SESSION_TYPE.QUICK_LOOK;

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
const sessionCtors = {
  [AR_SESSION_TYPE.WEBXR]: WebARSession,
  [AR_SESSION_TYPE.SCENE_VIEWER]: SceneViewerSession,
  [AR_SESSION_TYPE.QUICK_LOOK]: QuickLookSession
};
/**
 * ARManager that manages AR sessions
 */
class ARManager {
  /**
   * Create a new instance of the ARManager
   * @param {View3D} view3D An instance of the View3D
   */
  constructor(view3D) {
    this._view3D = view3D;
    this._activeSession = null;
    view3D.on(EVENTS$1.AR_START, ({
      session
    }) => {
      this._activeSession = session;
    });
    view3D.on(EVENTS$1.AR_END, () => {
      this._activeSession = null;
    });
  }
  get activeSession() {
    return this._activeSession;
  }
  /**
   * Return a Promise containing whether any of the added session is available
   * If any of the AR session in current environment, this will return `true`
   * @returns {Promise<boolean>} Availability of the AR session
   */
  isAvailable() {
    return __awaiter(this, void 0, void 0, function* () {
      const sessions = this._getSesssionClasses();
      const results = yield Promise.all(sessions.map(session => session.isAvailable()));
      return results.some(result => result === true);
    });
  }
  /**
   * Enter XR Session.
   * This should be called from a user interaction.
   */
  enter() {
    return __awaiter(this, void 0, void 0, function* () {
      const view3D = this._view3D;
      if (!view3D.model || !view3D.initialized) {
        throw new View3DError(ERROR.MESSAGES.NOT_INITIALIZED, ERROR.CODES.NOT_INITIALIZED);
      }
      const sessions = this._getSesssionClasses();
      for (const session of sessions) {
        try {
          if (yield session.isAvailable()) {
            const sessionInstance = new session(view3D, getObjectOption(view3D[session.type]));
            yield sessionInstance.enter();
            return Promise.resolve();
          }
        } catch (err) {} // eslint-disable-line no-empty
      }
      // No sessions were available
      return Promise.reject();
    });
  }
  /**
   * Exit current XR Session.
   */
  exit() {
    return __awaiter(this, void 0, void 0, function* () {
      const activeSession = this._activeSession;
      activeSession === null || activeSession === void 0 ? void 0 : activeSession.exit();
    });
  }
  _getSesssionClasses() {
    return this._getUsingSessionTypes().map(sessionType => sessionCtors[sessionType]);
  }
  _getUsingSessionTypes() {
    const view3D = this._view3D;
    const priority = view3D.arPriority;
    return priority.filter(sessionType => !!view3D[sessionType]);
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Annotation(Hotspot) base class
 */
class Annotation {
  /**
   * @param {View3D} view3D Instance of the view3D
   * @param {AnnotationOptions} [options={}] Options
   */
  constructor(view3D, {
    element = null,
    focus = [],
    focusDuration = 1000,
    focusOffset = [],
    baseFov = 45,
    baseDistance = null
  } = {}) {
    this._onClick = () => {
      void this.focus();
    };
    this._onWheel = evt => {
      evt.preventDefault();
      evt.stopPropagation();
    };
    this._view3D = view3D;
    this._element = element;
    this._focus = focus;
    this._focusDuration = focusDuration;
    this._focusOffset = focusOffset;
    this._baseFov = baseFov;
    this._baseDistance = baseDistance;
    this._enabled = false;
    this._hidden = false;
    this._focusing = false;
    this._tooltipSize = new Vector2();
    if (element) {
      element.draggable = false;
      this.resize();
    }
  }
  /**
   * Element of the annotation
   * @type {HTMLElement}
   * @readonly
   */
  get element() {
    return this._element;
  }
  /**
   * Whether this annotation is renderable in the screen
   * @type {boolean}
   * @readonly
   */
  get renderable() {
    return !!this._element;
  }
  /**
   * Whether this annotation is focused
   * @type {boolean}
   * @readonly
   */
  get focusing() {
    return this._focusing;
  }
  /**
   * An array of values in order of [yaw, pitch, zoom]
   * @type {number[]}
   * @readonly
   */
  get focusPose() {
    return this._focus;
  }
  /**
   * Duration of the focus animation
   * @type {number}
   */
  get focusDuration() {
    return this._focusDuration;
  }
  /**
   * Offset vector from the pivot when focused
   * @type {number[]}
   * @readonly
   */
  get focusOffset() {
    return this._focusOffset;
  }
  /**
   * Base fov value that annotation is referencing
   * @type {number}
   */
  get baseFov() {
    return this._baseFov;
  }
  /**
   * Base dsitance value that annotation is referencing
   * @type {number | null}
   */
  get baseDistance() {
    return this._baseDistance;
  }
  /**
   * Whether the annotation is hidden and not rendered
   * @type {boolean}
   * @readonly
   */
  get hidden() {
    return this._hidden;
  }
  set focusDuration(val) {
    this._focusDuration = val;
  }
  set baseFov(val) {
    this._baseFov = val;
  }
  set baseDistance(val) {
    this._baseDistance = val;
  }
  /**
   * Destroy annotation and release all resources.
   */
  destroy() {
    const wrapper = this._view3D.annotation.wrapper;
    const element = this._element;
    this.disableEvents();
    if (element && element.parentElement === wrapper) {
      wrapper.removeChild(element);
    }
  }
  /**
   * Resize annotation to the current size
   */
  resize() {
    const el = this._element;
    if (!el) return;
    const tooltip = el.querySelector(`.${DEFAULT_CLASS.ANNOTATION_TOOLTIP}`);
    if (tooltip) {
      this._tooltipSize.set(tooltip.offsetWidth, tooltip.offsetHeight);
    }
  }
  /**
   * Render annotation element
   * @param {object} params
   * @internal
   */
  render({
    screenPos,
    screenSize,
    renderOrder
  }) {
    const el = this._element;
    const tooltipSize = this._tooltipSize;
    if (!el || this._hidden) return;
    el.style.zIndex = `${renderOrder + 1}`;
    el.style.transform = `translate(-50%, -50%) translate(${screenPos.x}px, ${screenPos.y}px)`;
    if (screenPos.y + tooltipSize.y > screenSize.y) {
      el.classList.add(DEFAULT_CLASS.ANNOTATION_FLIP_Y);
    } else {
      el.classList.remove(DEFAULT_CLASS.ANNOTATION_FLIP_Y);
    }
    if (screenPos.x + tooltipSize.x > screenSize.x) {
      el.classList.add(DEFAULT_CLASS.ANNOTATION_FLIP_X);
    } else {
      el.classList.remove(DEFAULT_CLASS.ANNOTATION_FLIP_X);
    }
  }
  /**
   * Show annotation.
   * A class "hidden" will be removed from the annotation element.
   */
  show() {
    const el = this._element;
    this._hidden = false;
    if (el) {
      el.classList.remove(DEFAULT_CLASS.ANNOTATION_HIDDEN);
    }
  }
  /**
   * Hide annotation and prevent it from being rendered.
   * A class "hidden" will be added to the annotation element.
   */
  hide() {
    const el = this._element;
    this._hidden = true;
    if (el) {
      el.classList.add(DEFAULT_CLASS.ANNOTATION_HIDDEN);
    }
  }
  /**
   * Set opacity of the annotation
   * Opacity is automatically controlled with [annotationBreakpoints](/docs/options/annotation/annotationBreakpoints)
   * @param {number} opacity Opacity to apply, number between 0 and 1
   */
  setOpacity(opacity) {
    const el = this._element;
    if (!el) return;
    el.style.opacity = `${opacity}`;
  }
  /**
   * Add browser event handlers
   * @internal
   */
  enableEvents() {
    const el = this._element;
    if (!el || this._enabled) return;
    el.addEventListener(EVENTS.CLICK, this._onClick);
    el.addEventListener(EVENTS.WHEEL, this._onWheel);
    this._enabled = true;
  }
  /**
   * Remove browser event handlers
   * @internal
   */
  disableEvents() {
    const el = this._element;
    if (!el || !this._enabled) return;
    el.removeEventListener(EVENTS.CLICK, this._onClick);
    el.removeEventListener(EVENTS.WHEEL, this._onWheel);
    this._enabled = false;
  }
  handleUserInput() {
    if (!this._focusing) return;
    const view3D = this._view3D;
    if (view3D.annotationAutoUnfocus) {
      this.unfocus();
    }
  }
  _getFocus() {
    var _a;
    const view3D = this._view3D;
    const focusVector = new Vector3().fromArray(this._focus);
    const currentDistance = view3D.camera.baseDistance;
    const baseFov = this._baseFov;
    const baseDistance = (_a = this._baseDistance) !== null && _a !== void 0 ? _a : currentDistance;
    const targetRenderHeight = baseDistance * Math.tan(toRadian((baseFov - focusVector.z) / 2));
    const targetFov = 2 * toDegree(Math.atan(targetRenderHeight / currentDistance));
    // zoom value
    focusVector.z = view3D.camera.baseFov - targetFov;
    return focusVector;
  }
  _getPivotOffset() {
    var _a, _b, _c;
    const offset = this._focusOffset;
    return new Vector3((_a = offset[0]) !== null && _a !== void 0 ? _a : 0, (_b = offset[1]) !== null && _b !== void 0 ? _b : 0, (_c = offset[2]) !== null && _c !== void 0 ? _c : 0);
  }
  _onFocus() {
    const view3D = this._view3D;
    const el = this._element;
    view3D.annotation.list.forEach(annotation => {
      if (annotation._focusing) {
        annotation.unfocus();
      }
    });
    if (el) {
      el.classList.add(DEFAULT_CLASS.ANNOTATION_SELECTED);
    }
    this._focusing = true;
    view3D.trigger(EVENTS$1.ANNOTATION_FOCUS, {
      type: EVENTS$1.ANNOTATION_FOCUS,
      target: view3D,
      annotation: this
    });
  }
  _onUnfocus() {
    const view3D = this._view3D;
    const el = this._element;
    if (el) {
      el.classList.remove(DEFAULT_CLASS.ANNOTATION_SELECTED);
    }
    this._focusing = false;
    view3D.trigger(EVENTS$1.ANNOTATION_UNFOCUS, {
      type: EVENTS$1.ANNOTATION_UNFOCUS,
      target: view3D,
      annotation: this
    });
  }
}

/**
 * {@link Annotation} that stays at one point
 */
class PointAnnotation extends Annotation {
  /** */
  constructor(view3D, _a = {}) {
    var {
        position = []
      } = _a,
      commonOptions = __rest(_a, ["position"]);
    super(view3D, commonOptions);
    this._position = new Vector3().fromArray(position);
  }
  get position() {
    return this._position;
  }
  focus() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this._focusing) return;
      const {
        camera
      } = this._view3D;
      const focus = this._focus;
      let targetPose;
      const pivotOffset = this._getPivotOffset();
      const position = new Vector3().addVectors(this._position, pivotOffset);
      if (focus.length > 0) {
        const focusVector = this._getFocus();
        targetPose = new Pose(focusVector.x, focusVector.y, focusVector.z, position.toArray());
      } else {
        const modelToPos = this._calculateNormalFromModelCenter();
        const {
          yaw,
          pitch
        } = directionToYawPitch(modelToPos);
        targetPose = new Pose(toDegree(yaw), toDegree(pitch), 0, position.toArray());
      }
      window.addEventListener(EVENTS.CLICK, () => {
        this.unfocus();
      }, {
        once: true,
        capture: true
      });
      this._onFocus();
      if (!targetPose.equals(camera.currentPose)) {
        return camera.reset(this._focusDuration, EASING$1, targetPose);
      } else {
        return Promise.resolve();
      }
    });
  }
  unfocus() {
    if (!this._focusing) return;
    this._onUnfocus();
  }
  toJSON() {
    return {
      position: this._position.toArray(),
      focus: this._focus,
      duration: this._focusDuration,
      focusOffset: this._focusOffset
    };
  }
  _calculateNormalFromModelCenter() {
    const view3D = this._view3D;
    const model = view3D.model;
    const center = model ? model.bbox.getCenter(new Vector3()) : new Vector3();
    return new Vector3().subVectors(this._position, center).normalize();
  }
}

/**
 * {@link Annotation} that tracks position of mesh face(triangle)
 */
class FaceAnnotation extends Annotation {
  /** */
  constructor(view3D, _a = {}) {
    var {
        meshIndex = -1,
        faceIndex = -1,
        weights = range(3).map(() => 1 / 3)
      } = _a,
      commonOptions = __rest(_a, ["meshIndex", "faceIndex", "weights"]);
    super(view3D, commonOptions);
    this._meshIndex = meshIndex;
    this._faceIndex = faceIndex;
    this._weights = weights;
    this._trackingControl = null;
  }
  get position() {
    return this._getPosition();
  }
  get renderable() {
    return !!this._element && this._meshIndex >= 0 && this._faceIndex >= 0;
  }
  get meshIndex() {
    return this._meshIndex;
  }
  get faceIndex() {
    return this._faceIndex;
  }
  get weights() {
    return this._weights;
  }
  focus() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this._focusing) return;
      const view3D = this._view3D;
      const {
        camera,
        control
      } = view3D;
      const focus = this._getFocus();
      const pivot = this._getFocusPivot();
      const targetPose = new Pose(focus.x, focus.y, focus.z, pivot.toArray());
      const trackingControl = new AnimationControl(view3D, camera.currentPose, targetPose, {
        duration: this._focusDuration,
        disableOnFinish: false
      });
      this._trackingControl = trackingControl;
      trackingControl.enable();
      control.add(trackingControl);
      this._onFocus();
    });
  }
  unfocus() {
    if (!this._focusing) return;
    this.destroyTrackingControl();
    this._onUnfocus();
  }
  render(params) {
    super.render(params);
    const trackingControl = this._trackingControl;
    if (!trackingControl) return;
    const {
      camera
    } = this._view3D;
    const focus = this._getFocus();
    const pivot = this._getFocusPivot();
    const targetPose = new Pose(focus.x, focus.y, focus.z, pivot.toArray());
    trackingControl.changeStartEnd(camera.currentPose, targetPose);
    trackingControl.reset();
  }
  handleUserInput() {
    if (!this._focusing) return;
    const view3D = this._view3D;
    if (view3D.annotationAutoUnfocus) {
      this.unfocus();
    } else {
      this.destroyTrackingControl();
    }
  }
  toJSON() {
    return {
      meshIndex: this._meshIndex,
      faceIndex: this._faceIndex,
      focus: this._focus,
      duration: this._focusDuration,
      focusOffset: this._focusOffset
    };
  }
  destroyTrackingControl() {
    const {
      control
    } = this._view3D;
    const trackingControl = this._trackingControl;
    if (!trackingControl) return;
    control.sync();
    control.remove(trackingControl);
    trackingControl.destroy();
    this._trackingControl = null;
  }
  _getPosition() {
    const model = this._view3D.model;
    const meshIndex = this._meshIndex;
    const faceIndex = this._faceIndex;
    const weights = this._weights;
    const animatedVertices = getAnimatedFace(model, meshIndex, faceIndex);
    if (!animatedVertices) return new Vector3();
    // barycentric
    return new Vector3().addScaledVector(animatedVertices[0], weights[0]).addScaledVector(animatedVertices[1], weights[1]).addScaledVector(animatedVertices[2], weights[2]);
  }
  _getFocusPivot() {
    const basePosition = this._getPosition();
    const pivotOffset = this._getPivotOffset();
    return new Vector3().addVectors(basePosition, pivotOffset);
  }
}

const _inverseMatrix = new Matrix4();
const _ray = new Ray();
const _sphere = new Sphere();
const _vA = new Vector3();
const _vB = new Vector3();
const _vC = new Vector3();
const _uvA = new Vector2();
const _uvB = new Vector2();
const _uvC = new Vector2();
const _intersectionPoint = new Vector3();
const _intersectionPointWorld = new Vector3();
class FixedRaycaster {
  constructor() {
    this._raycaster = new Raycaster();
  }
  setFromCamera(pointer, camera) {
    this._raycaster.setFromCamera(pointer, camera);
  }
  intersectObject(object) {
    const intersects = [];
    this._intersectObject(object, intersects);
    intersects.sort((a, b) => a.distance - b.distance);
    return intersects;
  }
  // Original code from three.js#r134 Raycaster#intersectObject
  // Modified for Meshopt support
  // https://github.com/mrdoob/three.js/blob/00a692864f541a3ec194d266e220efd597eb28fa/src/core/Raycaster.js#L88
  _intersectObject(object, intersects) {
    const raycaster = this._raycaster;
    if (object.layers.test(raycaster.layers)) {
      if (object.isMesh) {
        this._raycast(object, raycaster, intersects);
      } else {
        object.raycast(raycaster, intersects);
      }
    }
    const children = object.children;
    for (let i = 0, l = children.length; i < l; i++) {
      this._intersectObject(children[i], intersects);
    }
  }
  // Original code from three.js#r134 Mesh#raycast
  // Modified for Meshopt support
  // https://github.com/mrdoob/three.js/blob/00a692864f541a3ec194d266e220efd597eb28fa/src/objects/Mesh.js#L118
  _raycast(obj, raycaster, intersects) {
    const geometry = obj.geometry;
    const material = obj.material;
    const matrixWorld = obj.matrixWorld;
    if (material === undefined) return;
    _inverseMatrix.copy(matrixWorld).invert();
    _ray.copy(raycaster.ray).applyMatrix4(_inverseMatrix);
    let intersection;
    if (geometry.isBufferGeometry) {
      const index = geometry.index;
      const position = geometry.attributes.position;
      const morphPosition = geometry.morphAttributes.position;
      const morphTargetsRelative = geometry.morphTargetsRelative;
      const uv = geometry.attributes.uv;
      const uv2 = geometry.attributes.uv2;
      const groups = geometry.groups;
      const drawRange = geometry.drawRange;
      _ray.copy(raycaster.ray);
      if (index !== null) {
        // indexed buffer geometry
        if (Array.isArray(material)) {
          for (let i = 0, il = groups.length; i < il; i++) {
            const group = groups[i];
            const groupMaterial = material[group.materialIndex];
            const start = Math.max(group.start, drawRange.start);
            const end = Math.min(index.count, Math.min(group.start + group.count, drawRange.start + drawRange.count));
            for (let j = start, jl = end; j < jl; j += 3) {
              const a = index.getX(j);
              const b = index.getX(j + 1);
              const c = index.getX(j + 2);
              intersection = this._checkBufferGeometryIntersection(obj, groupMaterial, raycaster, _ray, position, morphPosition, morphTargetsRelative, uv, uv2, a, b, c);
              if (intersection) {
                intersection.faceIndex = Math.floor(j / 3); // triangle number in indexed buffer semantics
                if (group.materialIndex) {
                  if (intersection.face) {
                    intersection.face.materialIndex = group.materialIndex;
                  }
                }
                intersects.push(intersection);
              }
            }
          }
        } else {
          const start = Math.max(0, drawRange.start);
          const end = Math.min(index.count, drawRange.start + drawRange.count);
          for (let i = start, il = end; i < il; i += 3) {
            const a = index.getX(i);
            const b = index.getX(i + 1);
            const c = index.getX(i + 2);
            intersection = this._checkBufferGeometryIntersection(obj, material, raycaster, _ray, position, morphPosition, morphTargetsRelative, uv, uv2, a, b, c);
            if (intersection) {
              intersection.faceIndex = Math.floor(i / 3); // triangle number in indexed buffer semantics
              intersects.push(intersection);
            }
          }
        }
      } else if (position !== undefined) {
        // non-indexed buffer geometry
        if (Array.isArray(material)) {
          for (let i = 0, il = groups.length; i < il; i++) {
            const group = groups[i];
            const groupMaterial = material[group.materialIndex];
            const start = Math.max(group.start, drawRange.start);
            const end = Math.min(position.count, Math.min(group.start + group.count, drawRange.start + drawRange.count));
            for (let j = start, jl = end; j < jl; j += 3) {
              const a = j;
              const b = j + 1;
              const c = j + 2;
              intersection = this._checkBufferGeometryIntersection(obj, groupMaterial, raycaster, _ray, position, morphPosition, morphTargetsRelative, uv, uv2, a, b, c);
              if (intersection) {
                intersection.faceIndex = Math.floor(j / 3); // triangle number in non-indexed buffer semantics
                if (group.materialIndex) {
                  if (intersection.face) {
                    intersection.face.materialIndex = group.materialIndex;
                  }
                }
                intersects.push(intersection);
              }
            }
          }
        } else {
          const start = Math.max(0, drawRange.start);
          const end = Math.min(position.count, drawRange.start + drawRange.count);
          for (let i = start, il = end; i < il; i += 3) {
            const a = i;
            const b = i + 1;
            const c = i + 2;
            intersection = this._checkBufferGeometryIntersection(obj, material, raycaster, _ray, position, morphPosition, morphTargetsRelative, uv, uv2, a, b, c);
            if (intersection) {
              intersection.faceIndex = Math.floor(i / 3); // triangle number in non-indexed buffer semantics
              intersects.push(intersection);
            }
          }
        }
      }
    }
  }
  _checkBufferGeometryIntersection(object, material, raycaster, ray, position, morphPosition, morphTargetsRelative, uv, uv2, a, b, c) {
    if (object.isSkinnedMesh) {
      const skinned = object;
      const skinWeight = skinned.geometry.attributes.skinWeight;
      const positionScale = getAttributeScale(position);
      const skinWeightScale = getAttributeScale(skinWeight);
      _vA.copy(getSkinnedVertex(a, skinned, positionScale, skinWeightScale));
      _vB.copy(getSkinnedVertex(b, skinned, positionScale, skinWeightScale));
      _vC.copy(getSkinnedVertex(c, skinned, positionScale, skinWeightScale));
    } else {
      _vA.fromBufferAttribute(position, a).applyMatrix4(object.matrixWorld);
      _vB.fromBufferAttribute(position, b).applyMatrix4(object.matrixWorld);
      _vC.fromBufferAttribute(position, c).applyMatrix4(object.matrixWorld);
    }
    const intersection = this._checkIntersection(object, material, raycaster, ray, _vA, _vB, _vC, _intersectionPoint);
    if (intersection) {
      if (uv) {
        _uvA.fromBufferAttribute(uv, a);
        _uvB.fromBufferAttribute(uv, b);
        _uvC.fromBufferAttribute(uv, c);
        intersection.uv = Triangle.getUV(_intersectionPoint, _vA, _vB, _vC, _uvA, _uvB, _uvC, new Vector2());
      }
      if (uv2) {
        _uvA.fromBufferAttribute(uv2, a);
        _uvB.fromBufferAttribute(uv2, b);
        _uvC.fromBufferAttribute(uv2, c);
        intersection.uv2 = Triangle.getUV(_intersectionPoint, _vA, _vB, _vC, _uvA, _uvB, _uvC, new Vector2());
      }
      const face = {
        a: a,
        b: b,
        c: c,
        normal: new Vector3(),
        materialIndex: 0
      };
      Triangle.getNormal(_vA, _vB, _vC, face.normal);
      intersection.face = face;
    }
    return intersection;
  }
  _checkIntersection(object, material, raycaster, ray, pA, pB, pC, point) {
    let intersect;
    if (material.side === BackSide) {
      intersect = ray.intersectTriangle(pC, pB, pA, true, point);
    } else {
      intersect = ray.intersectTriangle(pA, pB, pC, material.side !== DoubleSide, point);
    }
    if (intersect === null) return null;
    _intersectionPointWorld.copy(point);
    const distance = raycaster.ray.origin.distanceTo(_intersectionPointWorld);
    if (distance < raycaster.near || distance > raycaster.far) return null;
    return {
      distance: distance,
      point: _intersectionPointWorld.clone(),
      object: object
    };
  }
}

/**
 * OBSIDIAN:Function for adding the custom annotations
 * @param view3D reference view3D object
 */
const listenAnnotationAdd = view3D => {
  const canvas = view3D.renderer.canvas;
  const raycaster = new FixedRaycaster();
  canvas.addEventListener("dblclick", evt => {
    const model = view3D.model;
    if (!model) return;
    const pointer = new Vector2();
    pointer.x = evt.offsetX / canvas.clientWidth * 2 - 1;
    pointer.y = -(evt.offsetY / canvas.clientHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, view3D.camera.threeCamera);
    const intersects = raycaster.intersectObject(model.scene);
    if (!intersects.length) return;
    const currentPose = view3D.camera.currentPose;
    const el = document.createElement("div");
    el.classList.add("view3d-annotation");
    el.classList.add("default");
    const tooltip = document.createElement("div");
    tooltip.classList.add("view3d-annotation-tooltip");
    tooltip.classList.add("default");
    el.appendChild(tooltip);
    view3D.annotation.wrapper.appendChild(el);
    const intersect = intersects[0];
    const meshIndex = model.meshes.findIndex(mesh => mesh === intersects[0].object);
    const faceIndex = intersect.faceIndex;
    const animatedVertices = getAnimatedFace(model, meshIndex, faceIndex);
    if (!animatedVertices) return;
    const weights = getBarycentricWeight(intersect.point, animatedVertices);
    const focusOffset = new Vector3().subVectors(view3D.camera.pivot, intersect.point);
    const newAnnotation = new FaceAnnotation(view3D, {
      element: el,
      baseFov: view3D.camera.baseFov,
      baseDistance: view3D.camera.baseDistance,
      focus: [currentPose.yaw, currentPose.pitch, currentPose.zoom],
      focusOffset: focusOffset.toArray(),
      meshIndex,
      faceIndex,
      weights
    });
    newAnnotation.uuid = MathUtils.generateUUID();
    view3D.annotation.add(newAnnotation);
    view3D.renderer.renderSingleFrame();
  });
};
const getBarycentricWeight = (p, vertices) => {
  const v1 = new Vector3().subVectors(vertices[0], p);
  const v2 = new Vector3().subVectors(vertices[1], p);
  const v3 = new Vector3().subVectors(vertices[2], p);
  const faceSize = new Vector3().crossVectors(new Vector3().subVectors(v1, v2), new Vector3().subVectors(v1, v3)).length();
  const w1 = new Vector3().crossVectors(v2, v3).length() / faceSize;
  const w2 = new Vector3().crossVectors(v1, v3).length() / faceSize;
  const w3 = new Vector3().crossVectors(v1, v2).length() / faceSize;
  return [w1, w2, w3];
};
/**
 * OBSIDIAN:Add Label to Annotataions
 * @param view3D View 3D Reference
 * @param label label/name for annotations
 * @param annotationIndex Annotation Index in Annotation list
 */
const addAnnotationLabel = (view3D, label, annotationIndex) => {
  view3D.annotation.list[annotationIndex].element.querySelector(".view3d-annotation-tooltip").innerHTML = label;
};

/**
 * Manager class for {@link Annotation}
 */
class AnnotationManager {
  /** */
  constructor(view3D) {
    this._onInput = () => {
      const annotations = this._list;
      annotations.forEach(annotation => {
        annotation.handleUserInput();
      });
    };
    this._view3D = view3D;
    this._list = [];
    this._wrapper = getNullableElement(view3D.annotationWrapper, view3D.rootEl) || this._createWrapper();
  }
  /**
   * List of annotations
   * @type {Annotation[]}
   * @readonly
   */
  get list() {
    return this._list;
  }
  /**
   * Wrapper element for annotations
   * @type {HTMLElement}
   * @readonly
   */
  get wrapper() {
    return this._wrapper;
  }
  /**
   * Init AnnotationManager
   */
  init() {
    const view3D = this._view3D;
    if (view3D.editMode) {
      listenAnnotationAdd(view3D);
    }
    view3D.control.controls.forEach(control => {
      control.on({
        [CONTROL_EVENTS.HOLD]: this._onInput
      });
    });
  }
  /**
   * Destroy all annotations & event handlers
   */
  destroy() {
    this._view3D.control.controls.forEach(control => {
      control.off({
        [CONTROL_EVENTS.HOLD]: this._onInput
      });
    });
    this.reset();
  }
  /**
   * Resize annotations
   */
  resize() {
    this._list.forEach(annotation => {
      annotation.resize();
    });
  }
  /**
   * Collect annotations inside the wrapper element
   */
  collect() {
    const view3D = this._view3D;
    const wrapper = this._wrapper;
    const annotationEls = [].slice.apply(wrapper.querySelectorAll(view3D.annotationSelector));
    const annotations = annotationEls.map(element => {
      const focusStr = element.dataset.focus;
      const focus = focusStr ? focusStr.split(" ").map(val => parseFloat(val)) : [];
      const focusDuration = element.dataset.duration ? parseFloat(element.dataset.duration) : void 0;
      const commonOptions = {
        element,
        focus,
        focusDuration
      };
      if (element.dataset.meshIndex) {
        const meshIndex = parseFloat(element.dataset.meshIndex);
        const faceIndex = element.dataset.faceIndex ? parseFloat(element.dataset.faceIndex) : void 0;
        return new FaceAnnotation(view3D, Object.assign(Object.assign({}, commonOptions), {
          meshIndex,
          faceIndex
        }));
      } else {
        const positionStr = element.dataset.position;
        const position = positionStr ? positionStr.split(" ").map(val => parseFloat(val)) : [];
        return new PointAnnotation(view3D, Object.assign(Object.assign({}, commonOptions), {
          position
        }));
      }
    });
    this.add(...annotations);
  }
  /**
   * Load annotation JSON from URL
   * @param {string} url URL to annotations json
   */
  load(url) {
    const fileLoader = new FileLoader();
    return new Promise((resolve, reject) => {
      fileLoader.load(url, json => {
        const data = JSON.parse(json);
        const parsed = this.parse(data);
        this.add(...parsed);
        resolve(parsed);
      }, undefined, error => {
        reject(error);
      });
    });
  }
  /**
   * Parse an array of annotation data
   * @param {object[]} data An array of annotation data
   */
  parse(data) {
    const view3D = this._view3D;
    const {
      baseFov,
      baseDistance,
      items
    } = data;
    const annotations = items.map(annotationData => {
      const {
          meshIndex,
          faceIndex,
          position
        } = annotationData,
        commonData = __rest(annotationData, ["meshIndex", "faceIndex", "position"]);
      const element = this._createDefaultAnnotationElement(annotationData.label);
      if (meshIndex != null && faceIndex != null) {
        return new FaceAnnotation(view3D, Object.assign(Object.assign({
          meshIndex,
          faceIndex
        }, commonData), {
          baseFov,
          baseDistance,
          element
        }));
      } else {
        return new PointAnnotation(view3D, Object.assign(Object.assign({
          position: position
        }, commonData), {
          baseFov,
          baseDistance,
          element
        }));
      }
    });
    return annotations;
  }
  /**
   * Render annotations
   */
  render(camera, size) {
    const view3D = this._view3D;
    const model = view3D.model;
    if (!model) return;
    const screenSize = size !== null && size !== void 0 ? size : view3D.renderer.canvasSize;
    const halfScreenSize = screenSize.clone().multiplyScalar(0.5);
    const threeCamera = camera !== null && camera !== void 0 ? camera : view3D.camera.threeCamera;
    const camPos = threeCamera.position;
    const modelCenter = model.center;
    const breakpoints = view3D.annotationBreakpoints;
    // Sort by distance most far to camera (descending)
    const annotationsDesc = [...this._list].filter(annotation => annotation.renderable).map(annotation => {
      const position = annotation.position;
      return {
        annotation,
        position,
        distToCameraSquared: camPos.distanceToSquared(position)
      };
    }).sort((a, b) => b.distToCameraSquared - a.distToCameraSquared);
    const centerToCamDir = new Vector3().subVectors(camPos, modelCenter).normalize();
    const breakpointKeysDesc = Object.keys(breakpoints).map(val => parseFloat(val)).sort((a, b) => b - a);
    annotationsDesc.forEach(({
      annotation,
      position
    }, idx) => {
      if (!annotation.element) return;
      const screenRelPos = position.clone().project(threeCamera);
      const screenPos = new Vector2(screenRelPos.x, -screenRelPos.y);
      const centerToAnnotationDir = new Vector3().subVectors(position, modelCenter).normalize();
      const camToAnnotationDegree = toDegree(Math.abs(Math.acos(centerToAnnotationDir.dot(centerToCamDir))));
      screenPos.multiply(halfScreenSize);
      screenPos.add(halfScreenSize);
      for (const breakpoint of breakpointKeysDesc) {
        if (camToAnnotationDegree >= breakpoint) {
          annotation.setOpacity(breakpoints[breakpoint]);
          break;
        }
      }
      annotation.render({
        position,
        renderOrder: idx,
        screenPos,
        screenSize
      });
    });
  }
  /**
   * Add new annotation to the scene
   * @param {Annotation} annotations Annotations to add
   */
  add(...annotations) {
    const wrapper = this._wrapper;
    annotations.forEach(annotation => {
      annotation.enableEvents();
      if (annotation.element && annotation.element.parentElement !== wrapper) {
        wrapper.appendChild(annotation.element);
      }
    });
    this._list.push(...annotations);
  }
  /**
   * Remove annotation at the given index
   * @param {number} index Index of the annotation to remove
   */
  remove(index) {
    const removed = this._list.splice(index, 1)[0];
    if (!removed) return null;
    removed.destroy();
    return removed;
  }
  /**
   * Remove all annotations
   */
  reset() {
    const annotations = this._list;
    const removed = annotations.splice(0, annotations.length);
    removed.forEach(annotation => {
      annotation.destroy();
    });
  }
  /**
   * Save annotations as JSON
   */
  toJSON() {
    const view3D = this._view3D;
    const annotations = this._list;
    const items = annotations.map(annotation => {
      var _a, _b;
      return Object.assign(Object.assign({}, annotation.toJSON()), {
        label: ((_b = (_a = annotation.element) === null || _a === void 0 ? void 0 : _a.querySelector(`.${DEFAULT_CLASS.ANNOTATION_TOOLTIP}`)) === null || _b === void 0 ? void 0 : _b.innerHTML) || null
      });
    });
    const size = view3D.renderer.size;
    const aspect = Math.max(size.height / size.width, 1);
    return {
      baseFov: view3D.camera.baseFov,
      baseDistance: view3D.camera.baseDistance,
      aspect,
      items
    };
  }
  _createWrapper() {
    const view3D = this._view3D;
    const wrapper = document.createElement(EL_DIV);
    wrapper.classList.add(DEFAULT_CLASS.ANNOTATION_WRAPPER);
    view3D.rootEl.appendChild(wrapper);
    return wrapper;
  }
  _createDefaultAnnotationElement(label) {
    const annotation = document.createElement(EL_DIV);
    annotation.classList.add(DEFAULT_CLASS.ANNOTATION);
    annotation.classList.add(DEFAULT_CLASS.ANNOTATION_DEFAULT);
    if (label) {
      const tooltip = document.createElement(EL_DIV);
      tooltip.classList.add(DEFAULT_CLASS.ANNOTATION_TOOLTIP);
      tooltip.classList.add(DEFAULT_CLASS.ANNOTATION_DEFAULT);
      tooltip.innerHTML = label;
      annotation.appendChild(tooltip);
    }
    return annotation;
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Model's rotation control that supports both mouse & touch
 */
class RotateControl extends Component {
  /**
   * Create new RotateControl instance
   * @param {View3D} view3D An instance of View3D
   * @param {RotateControlOptions} options Options
   */
  constructor(view3D, {
    duration = ANIMATION_DURATION,
    easing = EASING$1,
    scale = 1,
    disablePitch = false,
    disableYaw = false
  } = {}) {
    super();
    this._screenScale = new Vector2(0, 0);
    this._prevPos = new Vector2(0, 0);
    this._isFirstTouch = false;
    this._scrolling = false;
    this._enabled = false;
    this._onMouseDown = evt => {
      if (evt.button !== MOUSE_BUTTON.LEFT) return;
      const targetEl = this._view3D.renderer.canvas;
      evt.preventDefault();
      if (!!targetEl.focus) {
        targetEl.focus();
      } else {
        window.focus();
      }
      this._prevPos.set(evt.clientX, evt.clientY);
      window.addEventListener(EVENTS.MOUSE_MOVE, this._onMouseMove, false);
      window.addEventListener(EVENTS.MOUSE_UP, this._onMouseUp, false);
      this.trigger(CONTROL_EVENTS.HOLD, {
        inputType: INPUT_TYPE.ROTATE
      });
    };
    this._onMouseMove = evt => {
      evt.preventDefault();
      const prevPos = this._prevPos;
      const rotateDelta = new Vector2(evt.clientX, evt.clientY).sub(prevPos).multiplyScalar(this._scale);
      rotateDelta.multiply(this._screenScale);
      this._xMotion.setEndDelta(rotateDelta.x);
      this._yMotion.setEndDelta(rotateDelta.y);
      prevPos.set(evt.clientX, evt.clientY);
    };
    this._onMouseUp = () => {
      this._prevPos.set(0, 0);
      window.removeEventListener(EVENTS.MOUSE_MOVE, this._onMouseMove, false);
      window.removeEventListener(EVENTS.MOUSE_UP, this._onMouseUp, false);
      this.trigger(CONTROL_EVENTS.RELEASE, {
        inputType: INPUT_TYPE.ROTATE
      });
    };
    this._onTouchStart = evt => {
      const touch = evt.touches[0];
      this._isFirstTouch = true;
      this._prevPos.set(touch.clientX, touch.clientY);
      this.trigger(CONTROL_EVENTS.HOLD, {
        inputType: INPUT_TYPE.ROTATE
      });
    };
    this._onTouchMove = evt => {
      // Only the one finger motion should be considered
      if (evt.touches.length > 1 || this._scrolling) return;
      const touch = evt.touches[0];
      const scrollable = this._view3D.scrollable;
      if (this._isFirstTouch) {
        if (scrollable) {
          const delta = new Vector2(touch.clientX, touch.clientY).sub(this._prevPos);
          if (Math.abs(delta.y) > Math.abs(delta.x)) {
            // Assume Scrolling
            this._scrolling = true;
            return;
          }
        }
        this._isFirstTouch = false;
      }
      if (evt.cancelable !== false) {
        evt.preventDefault();
      }
      evt.stopPropagation();
      const prevPos = this._prevPos;
      const rotateDelta = new Vector2(touch.clientX, touch.clientY).sub(prevPos).multiplyScalar(this._scale);
      rotateDelta.multiply(this._screenScale);
      this._xMotion.setEndDelta(rotateDelta.x);
      this._yMotion.setEndDelta(rotateDelta.y);
      prevPos.set(touch.clientX, touch.clientY);
    };
    this._onTouchEnd = evt => {
      const touch = evt.touches[0];
      if (touch) {
        this._prevPos.set(touch.clientX, touch.clientY);
      } else {
        this._prevPos.set(0, 0);
        this.trigger(CONTROL_EVENTS.RELEASE, {
          inputType: INPUT_TYPE.ROTATE
        });
      }
      this._scrolling = false;
    };
    this._view3D = view3D;
    this._scale = scale;
    this._duration = duration;
    this._easing = easing;
    this._disablePitch = disablePitch;
    this._disableYaw = disableYaw;
    this._xMotion = new Motion({
      duration,
      range: INFINITE_RANGE,
      easing
    });
    this._yMotion = new Motion({
      duration,
      range: PITCH_RANGE,
      easing
    });
  }
  /**
   * Whether this control is enabled or not
   * @readonly
   * @type {boolean}
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * Whether this control is animating the camera
   * @readonly
   * @type {boolean}
   */
  get animating() {
    return this._xMotion.activated || this._yMotion.activated;
  }
  /**
   * Scale factor for rotation
   * @type {number}
   * @default 1
   */
  get scale() {
    return this._scale;
  }
  /**
   * Duration of the input animation (ms)
   * @type {number}
   * @default 300
   */
  get duration() {
    return this._duration;
  }
  /**
   * Easing function of the animation
   * @type {function}
   * @default EASING.EASE_OUT_CUBIC
   * @see EASING
   */
  get easing() {
    return this._easing;
  }
  /**
   * Disable X-axis(pitch) rotation
   * @type {boolean}
   * @default false
   */
  get disablePitch() {
    return this._disablePitch;
  }
  /**
   * Disable Y-axis(yaw) rotation
   * @type {boolean}
   * @default false
   */
  get disableYaw() {
    return this._disableYaw;
  }
  set scale(val) {
    this._scale = val;
  }
  set duration(val) {
    this._duration = val;
    this._xMotion.duration = val;
    this._yMotion.duration = val;
  }
  set easing(val) {
    this._easing = val;
    this._xMotion.easing = val;
    this._yMotion.easing = val;
  }
  /**
   * Destroy the instance and remove all event listeners attached
   * @returns {void}
   */
  destroy() {
    this.disable();
    this.reset();
    this.off();
  }
  /**
   * Reset internal values
   * @returns {void}
   */
  reset() {
    this._isFirstTouch = false;
    this._scrolling = false;
  }
  /**
   * Update control by given deltaTime
   * @param {number} deltaTime Number of milisec to update
   * @returns {void}
   */
  update(deltaTime) {
    const camera = this._view3D.camera;
    const xMotion = this._xMotion;
    const yMotion = this._yMotion;
    const newPose = camera.newPose;
    const yawEnabled = !this._disableYaw;
    const pitchEnabled = !this._disablePitch;
    const delta = new Vector2(xMotion.update(deltaTime), yMotion.update(deltaTime));
    if (yawEnabled) {
      newPose.yaw += delta.x;
    }
    if (pitchEnabled) {
      newPose.pitch += delta.y;
    }
  }
  /**
   * Resize control to match target size
   * @param {object} size New size to apply
   * @param {number} [size.width] New width
   * @param {number} [size.height] New height
   */
  resize(size) {
    this._screenScale.set(360 / size.width, 180 / size.height);
  }
  /**
   * Enable this input and add event listeners
   * @returns {void}
   */
  enable() {
    if (this._enabled) return;
    const targetEl = this._view3D.renderer.canvas;
    targetEl.addEventListener(EVENTS.MOUSE_DOWN, this._onMouseDown);
    targetEl.addEventListener(EVENTS.TOUCH_START, this._onTouchStart, {
      passive: false
    });
    targetEl.addEventListener(EVENTS.TOUCH_MOVE, this._onTouchMove, {
      passive: false
    });
    targetEl.addEventListener(EVENTS.TOUCH_END, this._onTouchEnd);
    this._enabled = true;
    this.sync();
    this.trigger(CONTROL_EVENTS.ENABLE, {
      inputType: INPUT_TYPE.ROTATE
    });
  }
  /**
   * Disable this input and remove all event handlers
   * @returns {void}
   */
  disable() {
    if (!this._enabled) return;
    const targetEl = this._view3D.renderer.canvas;
    targetEl.removeEventListener(EVENTS.MOUSE_DOWN, this._onMouseDown);
    window.removeEventListener(EVENTS.MOUSE_MOVE, this._onMouseMove, false);
    window.removeEventListener(EVENTS.MOUSE_UP, this._onMouseUp, false);
    targetEl.removeEventListener(EVENTS.TOUCH_START, this._onTouchStart);
    targetEl.removeEventListener(EVENTS.TOUCH_MOVE, this._onTouchMove);
    targetEl.removeEventListener(EVENTS.TOUCH_END, this._onTouchEnd);
    this._enabled = false;
    this.trigger(CONTROL_EVENTS.DISABLE, {
      inputType: INPUT_TYPE.ROTATE
    });
  }
  /**
   * Synchronize this control's state to given camera position
   * @returns {void}
   */
  sync() {
    const camera = this._view3D.camera;
    this._xMotion.reset(camera.yaw);
    this._yMotion.reset(camera.pitch);
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Model's translation control that supports both mouse & touch
 */
class TranslateControl extends Component {
  /**
   * Create new TranslateControl instance
   * @param {View3D} view3D An instance of View3D
   * @param {TranslateControlOptions} options Options
   */
  constructor(view3D, {
    easing = EASING$1,
    duration = 0,
    scale = 1
  } = {}) {
    super();
    this._enabled = false;
    // Sometimes, touchstart for second finger doesn't triggered.
    // This flag checks whether that happened
    this._touchInitialized = false;
    this._prevPos = new Vector2(0, 0);
    this._screenSize = new Vector2(0, 0);
    this._onMouseDown = evt => {
      if (evt.button !== MOUSE_BUTTON.RIGHT) return;
      const targetEl = this._view3D.renderer.canvas;
      evt.preventDefault();
      if (!!targetEl.focus) {
        targetEl.focus();
      } else {
        window.focus();
      }
      this._prevPos.set(evt.clientX, evt.clientY);
      window.addEventListener(EVENTS.MOUSE_MOVE, this._onMouseMove, false);
      window.addEventListener(EVENTS.MOUSE_UP, this._onMouseUp, false);
      window.addEventListener(EVENTS.CONTEXT_MENU, this._onContextMenu, false);
      this.trigger(CONTROL_EVENTS.HOLD, {
        inputType: INPUT_TYPE.TRANSLATE
      });
    };
    this._onMouseMove = evt => {
      evt.preventDefault();
      const prevPos = this._prevPos;
      const delta = new Vector2(evt.clientX, evt.clientY).sub(prevPos).multiplyScalar(this._scale);
      // X value is negated to match cursor direction
      this._xMotion.setEndDelta(-delta.x);
      this._yMotion.setEndDelta(delta.y);
      prevPos.set(evt.clientX, evt.clientY);
    };
    this._onMouseUp = () => {
      this._prevPos.set(0, 0);
      window.removeEventListener(EVENTS.MOUSE_MOVE, this._onMouseMove, false);
      window.removeEventListener(EVENTS.MOUSE_UP, this._onMouseUp, false);
      this.trigger(CONTROL_EVENTS.RELEASE, {
        inputType: INPUT_TYPE.TRANSLATE
      });
    };
    this._onTouchStart = evt => {
      // Only the two finger motion should be considered
      if (evt.touches.length !== 2) return;
      if (evt.cancelable !== false) {
        evt.preventDefault();
      }
      this._prevPos.copy(this._getTouchesMiddle(evt.touches));
      this._touchInitialized = true;
      this.trigger(CONTROL_EVENTS.HOLD, {
        inputType: INPUT_TYPE.TRANSLATE
      });
    };
    this._onTouchMove = evt => {
      // Only the two finger motion should be considered
      if (evt.touches.length !== 2) return;
      if (evt.cancelable !== false) {
        evt.preventDefault();
      }
      evt.stopPropagation();
      const prevPos = this._prevPos;
      const middlePoint = this._getTouchesMiddle(evt.touches);
      if (!this._touchInitialized) {
        prevPos.copy(middlePoint);
        this._touchInitialized = true;
        return;
      }
      const delta = new Vector2().subVectors(middlePoint, prevPos).multiplyScalar(this._scale);
      // X value is negated to match cursor direction
      this._xMotion.setEndDelta(-delta.x);
      this._yMotion.setEndDelta(delta.y);
      prevPos.copy(middlePoint);
    };
    this._onTouchEnd = evt => {
      // Only the two finger motion should be considered
      if (evt.touches.length !== 2) {
        if (this._touchInitialized) {
          this._touchInitialized = false;
          this.trigger(CONTROL_EVENTS.RELEASE, {
            inputType: INPUT_TYPE.TRANSLATE
          });
        }
        return;
      }
      // Three fingers to two fingers
      this._prevPos.copy(this._getTouchesMiddle(evt.touches));
      this._touchInitialized = true;
    };
    this._onContextMenu = evt => {
      evt.preventDefault();
      window.removeEventListener(EVENTS.CONTEXT_MENU, this._onContextMenu, false);
    };
    this._view3D = view3D;
    this._xMotion = new Motion({
      duration,
      range: INFINITE_RANGE,
      easing
    });
    this._yMotion = new Motion({
      duration,
      range: INFINITE_RANGE,
      easing
    });
    this._scale = scale;
  }
  /**
   * Whether this control is enabled or not
   * @readonly
   * @type {boolean}
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * Whether this control is animating the camera
   * @readonly
   * @type {boolean}
   */
  get animating() {
    return this._xMotion.activated || this._yMotion.activated;
  }
  /**
   * Scale factor for translation
   * @type number
   * @default 1
   * @see https://threejs.org/docs/#api/en/math/Vector2
   */
  get scale() {
    return this._scale;
  }
  /**
   * Duration of the input animation (ms)
   * @type {number}
   * @default 300
   */
  get duration() {
    return this._duration;
  }
  /**
   * Easing function of the animation
   * @type {function}
   * @default EASING.EASE_OUT_CUBIC
   * @see EASING
   */
  get easing() {
    return this._easing;
  }
  set scale(val) {
    this._scale = val;
  }
  set duration(val) {
    this._duration = val;
    this._xMotion.duration = val;
    this._yMotion.duration = val;
  }
  set easing(val) {
    this._easing = val;
    this._xMotion.easing = val;
    this._yMotion.easing = val;
  }
  /**
   * Destroy the instance and remove all event listeners attached
   * @returns {void}
   */
  destroy() {
    this.disable();
    this.reset();
    this.off();
  }
  /**
   * Reset internal values
   * @returns {void}
   */
  reset() {
    this._touchInitialized = false;
  }
  /**
   * Update control by given deltaTime
   * @param {number} deltaTime Number of milisec to update
   * @returns {void}
   */
  update(deltaTime) {
    const camera = this._view3D.camera;
    const newPose = camera.newPose;
    const screenSize = this._screenSize;
    const delta = new Vector2(this._xMotion.update(deltaTime), this._yMotion.update(deltaTime));
    const viewXDir = new Vector3(1, 0, 0).applyQuaternion(camera.threeCamera.quaternion);
    const viewYDir = new Vector3(0, 1, 0).applyQuaternion(camera.threeCamera.quaternion);
    const screenScale = new Vector2(camera.renderWidth, camera.renderHeight).divide(screenSize);
    delta.multiply(screenScale);
    const newPivot = newPose.pivot.clone();
    newPose.pivot = newPivot.add(viewXDir.multiplyScalar(delta.x)).add(viewYDir.multiplyScalar(delta.y));
  }
  /**
   * Resize control to match target size
   * @param {object} size New size to apply
   * @param {number} [size.width] New width
   * @param {number} [size.height] New height
   */
  resize(size) {
    const screenSize = this._screenSize;
    screenSize.copy(new Vector2(size.width, size.height));
  }
  /**
   * Enable this input and add event listeners
   * @returns {void}
   */
  enable() {
    if (this._enabled) return;
    const targetEl = this._view3D.renderer.canvas;
    targetEl.addEventListener(EVENTS.MOUSE_DOWN, this._onMouseDown, false);
    targetEl.addEventListener(EVENTS.TOUCH_START, this._onTouchStart, {
      passive: false,
      capture: false
    });
    targetEl.addEventListener(EVENTS.TOUCH_MOVE, this._onTouchMove, {
      passive: false,
      capture: false
    });
    targetEl.addEventListener(EVENTS.TOUCH_END, this._onTouchEnd, {
      passive: false,
      capture: false
    });
    this._enabled = true;
    this.sync();
    this.trigger(CONTROL_EVENTS.ENABLE, {
      inputType: INPUT_TYPE.TRANSLATE
    });
  }
  /**
   * Disable this input and remove all event handlers
   * @returns {void}
   */
  disable() {
    if (!this._enabled) return;
    const targetEl = this._view3D.renderer.canvas;
    targetEl.removeEventListener(EVENTS.MOUSE_DOWN, this._onMouseDown, false);
    window.removeEventListener(EVENTS.MOUSE_MOVE, this._onMouseMove, false);
    window.removeEventListener(EVENTS.MOUSE_UP, this._onMouseUp, false);
    targetEl.removeEventListener(EVENTS.TOUCH_START, this._onTouchStart, false);
    targetEl.removeEventListener(EVENTS.TOUCH_MOVE, this._onTouchMove, false);
    targetEl.removeEventListener(EVENTS.TOUCH_END, this._onTouchEnd, false);
    window.removeEventListener(EVENTS.CONTEXT_MENU, this._onContextMenu, false);
    this._enabled = false;
    this.trigger(CONTROL_EVENTS.DISABLE, {
      inputType: INPUT_TYPE.TRANSLATE
    });
  }
  /**
   * Synchronize this control's state to the camera position
   * @returns {void}
   */
  sync() {
    this._xMotion.reset(0);
    this._yMotion.reset(0);
  }
  _getTouchesMiddle(touches) {
    return new Vector2(touches[0].clientX + touches[1].clientX, touches[0].clientY + touches[1].clientY).multiplyScalar(0.5);
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Distance controller handling both mouse wheel and pinch zoom(fov)
 */
class ZoomControl extends Component {
  /**
   * Create new ZoomControl instance
   * @param {View3D} view3D An instance of View3D
   * @param {ZoomControlOptions} [options={}] Options
   */
  constructor(view3D, {
    type = ZOOM_TYPE.FOV,
    scale = 1,
    duration = ANIMATION_DURATION,
    minFov = 1,
    maxFov = AUTO,
    minDistance = 0.1,
    maxDistance = 2,
    doubleTap = true,
    easing = EASING$1
  } = {}) {
    super();
    this._scaleModifier = 1;
    this._wheelModifier = 0.02;
    this._touchModifier = 0.05;
    this._prevTouchDistance = -1;
    this._enabled = false;
    this._isFirstTouch = true;
    this._isWheelScrolling = false;
    this._onWheel = evt => {
      const wheelScrollable = this._view3D.wheelScrollable;
      if (evt.deltaY === 0 || wheelScrollable) return;
      evt.preventDefault();
      evt.stopPropagation();
      const motion = this._motion;
      const delta = -this._scale * this._scaleModifier * this._wheelModifier * evt.deltaY;
      if (!this._isWheelScrolling) {
        this.trigger(CONTROL_EVENTS.HOLD, {
          inputType: INPUT_TYPE.ZOOM
        });
      }
      this._isWheelScrolling = true;
      motion.setEndDelta(delta);
    };
    this._onTouchMove = evt => {
      const touches = evt.touches;
      if (touches.length !== 2) return;
      if (evt.cancelable !== false) {
        evt.preventDefault();
      }
      evt.stopPropagation();
      const motion = this._motion;
      const prevTouchDistance = this._prevTouchDistance;
      const touchPoint1 = new Vector2(touches[0].pageX, touches[0].pageY);
      const touchPoint2 = new Vector2(touches[1].pageX, touches[1].pageY);
      const touchDiff = touchPoint1.sub(touchPoint2);
      const touchDistance = touchDiff.length() * this._scale * this._scaleModifier * this._touchModifier;
      const delta = this._isFirstTouch ? 0 : touchDistance - prevTouchDistance;
      this._prevTouchDistance = touchDistance;
      if (this._isFirstTouch) {
        this.trigger(CONTROL_EVENTS.HOLD, {
          inputType: INPUT_TYPE.ZOOM
        });
      }
      this._isFirstTouch = false;
      motion.setEndDelta(delta);
    };
    this._onTouchEnd = evt => {
      if (evt.touches.length !== 0) return;
      this.trigger(CONTROL_EVENTS.RELEASE, {
        inputType: INPUT_TYPE.ZOOM
      });
      this._prevTouchDistance = -1;
      this._isFirstTouch = true;
    };
    this._onDoubleClick = evt => {
      const view3D = this._view3D;
      if (!this._doubleTap || !view3D.model) return;
      const {
        zoomIn = 0.8,
        duration = ANIMATION_DURATION,
        easing = EASING$1,
        useZoomOut = true
      } = getObjectOption(this._doubleTap);
      const zoomRange = this._motion.range;
      const maxZoom = -zoomRange.min * zoomIn;
      if (view3D.camera.zoom >= maxZoom && useZoomOut) {
        const resetPose = view3D.camera.currentPose.clone();
        resetPose.zoom = 0;
        void view3D.camera.reset(duration, easing, resetPose);
        return;
      }
      const raycaster = new Raycaster();
      const pointer = new Vector2();
      const canvasSize = view3D.renderer.canvasSize;
      pointer.x = evt.offsetX / canvasSize.x * 2 - 1;
      pointer.y = -(evt.offsetY / canvasSize.y) * 2 + 1;
      raycaster.setFromCamera(pointer, view3D.camera.threeCamera);
      const intersects = raycaster.intersectObject(view3D.model.scene);
      if (!intersects.length) return;
      // Nearest
      const intersect = intersects[0];
      const newPivot = intersect.point;
      const {
        yaw,
        pitch
      } = view3D.camera;
      const resetPose = new Pose(yaw, pitch, maxZoom, newPivot.toArray());
      void view3D.camera.reset(duration, easing, resetPose);
    };
    this._view3D = view3D;
    this._type = type;
    this._scale = scale;
    this._duration = duration;
    this._minFov = minFov;
    this._maxFov = maxFov;
    this._minDistance = minDistance;
    this._maxDistance = maxDistance;
    this._doubleTap = doubleTap;
    this._easing = easing;
    this._motion = new Motion({
      duration,
      easing,
      range: {
        min: -Infinity,
        max: Infinity
      }
    });
  }
  /**
   * Whether this control is enabled or not
   * @readonly
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * Whether this control is animating the camera
   * @readonly
   * @type {boolean}
   */
  get animating() {
    return this._motion.activated;
  }
  /**
   * Currenet fov/distance range
   * @readonly
   * @type {Range}
   */
  get range() {
    return this._motion.range;
  }
  /**
   * Current control type
   * @readonly
   * @see {ZOOM_TYPE}
   * @default "fov"
   */
  get type() {
    return this._type;
  }
  /**
   * Scale factor of the zoom
   * @type number
   * @default 1
   */
  get scale() {
    return this._scale;
  }
  /**
   * Duration of the input animation (ms)
   * @type {number}
   * @default 300
   */
  get duration() {
    return this._duration;
  }
  /**
   * Minimum vertical fov(field of view).
   * Only available when type is "fov".
   * You can get a bigger image with the smaller value of this.
   * @type {number}
   * @default 1
   */
  get minFov() {
    return this._minFov;
  }
  /**
   * Maximum vertical fov(field of view).
   * Only available when type is "fov".
   * You can get a smaller image with the bigger value of this.
   * If `"auto"` is given, it will use Math.min(default fov + 45, 175).
   * @type {"auto" | number}
   * @default "auto"
   */
  get maxFov() {
    return this._maxFov;
  }
  /**
   * Minimum camera distance. This will be scaled to camera's default distance({@link camera.baseDistance Camera#baseDistance})
   * Only available when type is "distance".
   * @type {number}
   * @default 0.1
   */
  get minDistance() {
    return this._minDistance;
  }
  /**
   * Maximum camera distance. This will be scaled to camera's default distance({@link camera.baseDistance Camera#baseDistance})
   * Only available when type is "distance".
   * @type {number}
   * @default 2
   */
  get maxDistance() {
    return this._maxDistance;
  }
  get doubleTap() {
    return this._doubleTap;
  }
  /**
   * Easing function of the animation
   * @type {function}
   * @default EASING.EASE_OUT_CUBIC
   * @see EASING
   */
  get easing() {
    return this._easing;
  }
  set type(val) {
    this._type = val;
  }
  set scale(val) {
    this._scale = val;
  }
  /**
   * Destroy the instance and remove all event listeners attached
   * @returns {void}
   */
  destroy() {
    this.disable();
    this.reset();
    this.off();
  }
  /**
   * Reset internal values
   * @returns {void}
   */
  reset() {
    this._prevTouchDistance = -1;
    this._isFirstTouch = true;
    this._isWheelScrolling = false;
  }
  /**
   * Update control by given deltaTime
   * @param deltaTime Number of milisec to update
   * @returns {void}
   */
  update(deltaTime) {
    const camera = this._view3D.camera;
    const newPose = camera.newPose;
    const motion = this._motion;
    const prevProgress = motion.progress;
    const delta = motion.update(deltaTime);
    const newProgress = motion.progress;
    newPose.zoom -= delta;
    if (this._isWheelScrolling && prevProgress < 1 && newProgress >= 1) {
      this.trigger(CONTROL_EVENTS.RELEASE, {
        inputType: INPUT_TYPE.ZOOM
      });
      this._isWheelScrolling = false;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resize(size) {
    // DO NOTHING
  }
  /**
   * Enable this input and add event listeners
   * @returns {void}
   */
  enable() {
    if (this._enabled) return;
    const targetEl = this._view3D.renderer.canvas;
    targetEl.addEventListener(EVENTS.WHEEL, this._onWheel, {
      passive: false,
      capture: false
    });
    targetEl.addEventListener(EVENTS.TOUCH_MOVE, this._onTouchMove, {
      passive: false,
      capture: false
    });
    targetEl.addEventListener(EVENTS.TOUCH_END, this._onTouchEnd, {
      passive: false,
      capture: false
    });
    targetEl.addEventListener(EVENTS.DOUBLE_CLICK, this._onDoubleClick);
    this._enabled = true;
    this.sync();
    this.trigger(CONTROL_EVENTS.ENABLE, {
      inputType: INPUT_TYPE.ZOOM
    });
  }
  /**
   * Disable this input and remove all event handlers
   * @returns {void}
   */
  disable() {
    if (!this._enabled) return;
    const targetEl = this._view3D.renderer.canvas;
    targetEl.removeEventListener(EVENTS.WHEEL, this._onWheel, false);
    targetEl.removeEventListener(EVENTS.TOUCH_MOVE, this._onTouchMove, false);
    targetEl.removeEventListener(EVENTS.TOUCH_END, this._onTouchEnd, false);
    targetEl.removeEventListener(EVENTS.DOUBLE_CLICK, this._onDoubleClick);
    this._enabled = false;
    this.trigger(CONTROL_EVENTS.DISABLE, {
      inputType: INPUT_TYPE.ZOOM
    });
  }
  /**
   * Synchronize this control's state to given camera position
   * @returns {void}
   */
  sync() {
    const camera = this._view3D.camera;
    const motion = this._motion;
    motion.reset(-camera.zoom);
    if (this._type === ZOOM_TYPE.FOV) {
      this._scaleModifier = -1;
    } else {
      this._scaleModifier = -camera.baseDistance / 44;
    }
  }
  /**
   * Update fov range by the camera's current fov value
   * @returns {void}
   */
  updateRange() {
    const range = this._motion.range;
    const {
      camera
    } = this._view3D;
    if (this._type === ZOOM_TYPE.FOV) {
      const baseFov = camera.baseFov;
      const maxFov = this._maxFov;
      range.max = maxFov === AUTO ? Math.min(baseFov + 45, 175) - baseFov : maxFov - baseFov;
      range.min = this._minFov - baseFov;
    } else {
      range.max = camera.baseDistance * this._maxDistance - camera.baseDistance;
      range.min = camera.baseDistance * this._minDistance - camera.baseDistance;
    }
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Aggregation of {@link RotateControl}, {@link TranslateControl}, and {@link ZoomControl}.
 */
class OrbitControl {
  /**
   * Create new OrbitControl instance
   * @param {View3D} view3D An instance of View3D
   */
  constructor(view3D) {
    this._onEnable = ({
      inputType
    }) => {
      if (inputType === INPUT_TYPE.ZOOM) return;
      const view3D = this._view3D;
      const canvas = view3D.renderer.canvas;
      const shouldSetGrabCursor = view3D.useGrabCursor && (this._rotateControl.enabled || this._translateControl.enabled) && canvas.style.cursor === CURSOR.NONE;
      if (shouldSetGrabCursor) {
        this._setCursor(CURSOR.GRAB);
      }
    };
    this._onDisable = ({
      inputType
    }) => {
      if (inputType === INPUT_TYPE.ZOOM) return;
      const canvas = this._view3D.renderer.canvas;
      const shouldRemoveGrabCursor = canvas.style.cursor !== CURSOR.NONE && !this._rotateControl.enabled && !this._translateControl.enabled;
      if (shouldRemoveGrabCursor) {
        this._setCursor(CURSOR.NONE);
      }
    };
    this._onHold = ({
      inputType
    }) => {
      const view3D = this._view3D;
      if (inputType !== INPUT_TYPE.ZOOM) {
        const grabCursorEnabled = view3D.useGrabCursor && (this._rotateControl.enabled || this._translateControl.enabled);
        if (grabCursorEnabled) {
          this._setCursor(CURSOR.GRABBING);
        }
      }
      view3D.trigger(EVENTS$1.INPUT_START, {
        type: EVENTS$1.INPUT_START,
        target: view3D,
        inputType
      });
    };
    this._onRelease = ({
      inputType
    }) => {
      const view3D = this._view3D;
      if (inputType !== INPUT_TYPE.ZOOM) {
        const grabCursorEnabled = view3D.useGrabCursor && (this._rotateControl.enabled || this._translateControl.enabled);
        if (grabCursorEnabled) {
          this._setCursor(CURSOR.GRAB);
        }
      }
      view3D.trigger(EVENTS$1.INPUT_END, {
        type: EVENTS$1.INPUT_END,
        target: view3D,
        inputType
      });
    };
    this._view3D = view3D;
    this._rotateControl = new RotateControl(view3D, getObjectOption(view3D.rotate));
    this._translateControl = new TranslateControl(view3D, getObjectOption(view3D.translate));
    this._zoomControl = new ZoomControl(view3D, getObjectOption(view3D.zoom));
    this._extraControls = [];
    [this._rotateControl, this._translateControl, this._zoomControl].forEach(control => {
      control.on({
        [CONTROL_EVENTS.HOLD]: this._onHold,
        [CONTROL_EVENTS.RELEASE]: this._onRelease,
        [CONTROL_EVENTS.ENABLE]: this._onEnable,
        [CONTROL_EVENTS.DISABLE]: this._onDisable
      });
    });
  }
  // Internal Values Getter
  /**
   * Rotate(left-click) part of this control
   * @type {RotateControl}
   * @readonly
   */
  get rotate() {
    return this._rotateControl;
  }
  /**
   * Translation(right-click) part of this control
   * @type {TranslateControl}
   * @readonly
   */
  get translate() {
    return this._translateControl;
  }
  /**
   * Zoom(mouse wheel) part of this control
   * @type {ZoomControl}
   * @readonly
   */
  get zoom() {
    return this._zoomControl;
  }
  /**
   * Base controls
   * @type {CameraControl[]}
   * @readonly
   */
  get controls() {
    return [this._rotateControl, this._translateControl, this._zoomControl];
  }
  /**
   * Extra camera controls added, like {@link AnimationControl}
   * @type {CameraControl[]}
   * @readonly
   */
  get extraControls() {
    return this._extraControls;
  }
  /**
   * Whether one of the controls is animating at the moment
   * @type {boolean}
   * @readonly
   */
  get animating() {
    return this._rotateControl.animating || this._translateControl.animating || this._zoomControl.animating || this._extraControls.some(control => control.animating);
  }
  /**
   * Destroy the instance and remove all event listeners attached
   * This also will reset CSS cursor to intial
   * @returns {void}
   */
  destroy() {
    this._rotateControl.destroy();
    this._translateControl.destroy();
    this._zoomControl.destroy();
    this._extraControls.forEach(control => control.destroy());
    this._extraControls = [];
  }
  /**
   * Update control by given deltaTime
   * @param {number} deltaTime Number of milisec to update
   * @returns {void}
   */
  update(deltaTime) {
    this._rotateControl.update(deltaTime);
    this._translateControl.update(deltaTime);
    this._zoomControl.update(deltaTime);
    this._extraControls.forEach(control => control.update(deltaTime));
  }
  /**
   * Resize control to match target size
   * @param {object} size New size to apply
   * @param {number} [size.width] New width
   * @param {number} [size.height] New height
   * @returns {void}
   */
  resize(size) {
    this._rotateControl.resize(size);
    this._translateControl.resize(size);
    this._zoomControl.resize(size);
    this._extraControls.forEach(control => control.resize(size));
  }
  /**
   * Enable this control and add event listeners
   * @returns {void}
   */
  enable() {
    const view3D = this._view3D;
    if (view3D.rotate) {
      this._rotateControl.enable();
    }
    if (view3D.translate) {
      this._translateControl.enable();
    }
    if (view3D.zoom) {
      this._zoomControl.enable();
    }
    this._extraControls.forEach(control => control.enable());
  }
  /**
   * Disable this control and remove all event handlers
   * @returns {void}
   */
  disable() {
    this._rotateControl.disable();
    this._translateControl.disable();
    this._zoomControl.disable();
    this._extraControls.forEach(control => control.disable());
  }
  /**
   * Synchronize this control's state to current camera position
   * @returns {void}
   */
  sync() {
    this._rotateControl.sync();
    this._translateControl.sync();
    this._zoomControl.sync();
    this._extraControls.forEach(control => control.sync());
  }
  /**
   * Add extra control
   * @param {CameraControl} control Control to add
   * @returns {void}
   */
  add(control) {
    this._extraControls.push(control);
  }
  /**
   * Remove extra control
   * @param {CameraControl} control Control to add
   * @returns {void}
   */
  remove(control) {
    const extraControls = this._extraControls;
    const controlIdx = extraControls.findIndex(ctrl => ctrl === control);
    if (controlIdx >= 0) {
      extraControls.splice(controlIdx, 1);
    }
  }
  /**
   * Update cursor to current option
   * @returns {void}
   */
  updateCursor() {
    const cursor = this._view3D.useGrabCursor ? CURSOR.GRAB : CURSOR.NONE;
    this._setCursor(cursor);
  }
  _setCursor(newCursor) {
    const view3D = this._view3D;
    if (!view3D.useGrabCursor && newCursor !== CURSOR.NONE) return;
    const targetEl = view3D.renderer.canvas;
    targetEl.style.cursor = newCursor;
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Autoplayer that animates model without user input
 */
class AutoPlayer {
  /**
   * Create new AutoPlayer instance
   * @param {View3D} view3D An instance of View3D
   * @param {object} options Options
   * @param {number} [options.delay=2000] Reactivation delay after mouse input in milisecond
   * @param {number} [options.delayOnMouseLeave=0] Reactivation delay after mouse leave
   * @param {number} [options.speed=1] Y-axis(yaw) rotation speed
   * @param {boolean} [options.pauseOnHover=false] Whether to pause rotation on mouse hover
   * @param {boolean} [options.canInterrupt=true] Whether user can interrupt the rotation with click/wheel input
   * @param {boolean} [options.disableOnInterrupt=false] Whether to disable autoplay on user interrupt
   */
  constructor(view3D, {
    delay = 2000,
    delayOnMouseLeave = 0,
    speed = 1,
    pauseOnHover = false,
    canInterrupt = true,
    disableOnInterrupt = false
  } = {}) {
    this._enabled = false;
    this._interrupted = false;
    this._interruptionTimer = -1;
    this._hovering = false;
    this._onMouseDown = evt => {
      if (!this._canInterrupt) return;
      if (evt.button !== MOUSE_BUTTON.LEFT && evt.button !== MOUSE_BUTTON.RIGHT) return;
      this._interrupted = true;
      this._clearTimeout();
      window.addEventListener(EVENTS.MOUSE_UP, this._onMouseUp, false);
    };
    this._onMouseUp = () => {
      window.removeEventListener(EVENTS.MOUSE_UP, this._onMouseUp, false);
      this._setUninterruptedAfterDelay(this._delay);
    };
    this._onTouchStart = () => {
      if (!this._canInterrupt) return;
      this._interrupted = true;
      this._clearTimeout();
    };
    this._onTouchEnd = () => {
      this._setUninterruptedAfterDelay(this._delay);
    };
    this._onMouseEnter = () => {
      if (!this._pauseOnHover) return;
      this._interrupted = true;
      this._hovering = true;
    };
    this._onMouseLeave = () => {
      if (!this._pauseOnHover) return;
      this._hovering = false;
      this._setUninterruptedAfterDelay(this._delayOnMouseLeave);
    };
    this._onWheel = () => {
      if (!this._canInterrupt) return;
      this._interrupted = true;
      this._setUninterruptedAfterDelay(this._delay);
    };
    this._view3D = view3D;
    this._delay = delay;
    this._delayOnMouseLeave = delayOnMouseLeave;
    this._speed = speed;
    this._pauseOnHover = pauseOnHover;
    this._canInterrupt = canInterrupt;
    this._disableOnInterrupt = disableOnInterrupt;
  }
  /**
   * Whether autoplay is enabled or not
   * @readonly
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * Whether autoplay is updating the camera at the moment
   * @readonly
   */
  get animating() {
    return this._enabled && !this._interrupted;
  }
  /**
   * Reactivation delay after mouse input in milisecond
   */
  get delay() {
    return this._delay;
  }
  /**
   * Reactivation delay after mouse leave
   * This option only works when {@link AutoPlayer#pauseOnHover pauseOnHover} is activated
   */
  get delayOnMouseLeave() {
    return this._delayOnMouseLeave;
  }
  /**
   * Y-axis(yaw) rotation speed
   * @default 1
   */
  get speed() {
    return this._speed;
  }
  /**
   * Whether to pause rotation on mouse hover
   * @default false
   */
  get pauseOnHover() {
    return this._pauseOnHover;
  }
  /**
   * Whether user can interrupt the rotation with click/wheel input
   * @default true
   */
  get canInterrupt() {
    return this._canInterrupt;
  }
  /**
   * Whether to disable autoplay on user interrupt
   * @default false
   */
  get disableOnInterrupt() {
    return this._disableOnInterrupt;
  }
  set delay(val) {
    this._delay = val;
  }
  set delayOnMouseLeave(val) {
    this._delayOnMouseLeave = val;
  }
  set speed(val) {
    this._speed = val;
  }
  set pauseOnHover(val) {
    this._pauseOnHover = val;
  }
  set canInterrupt(val) {
    this._canInterrupt = val;
  }
  set disableOnInterrupt(val) {
    this._disableOnInterrupt = val;
  }
  /**
   * Destroy the instance and remove all event listeners attached
   * This also will reset CSS cursor to intial
   * @returns {void}
   */
  destroy() {
    this.disable();
  }
  /**
   * Update camera by given deltaTime
   * @param camera Camera to update position
   * @param deltaTime Number of milisec to update
   * @returns {void}
   */
  update(deltaTime) {
    if (!this._enabled) return;
    if (this._interrupted) {
      if (this._disableOnInterrupt) {
        this.disable();
      }
      return;
    }
    const newPose = this._view3D.camera.newPose;
    newPose.yaw += this._speed * deltaTime / 100;
  }
  /**
   * Enable autoplay and add event listeners
   * @returns {void}
   */
  enable() {
    if (this._enabled) return;
    const targetEl = this._view3D.renderer.canvas;
    targetEl.addEventListener(EVENTS.MOUSE_DOWN, this._onMouseDown, false);
    targetEl.addEventListener(EVENTS.TOUCH_START, this._onTouchStart, {
      passive: false,
      capture: false
    });
    targetEl.addEventListener(EVENTS.TOUCH_END, this._onTouchEnd, {
      passive: false,
      capture: false
    });
    targetEl.addEventListener(EVENTS.MOUSE_ENTER, this._onMouseEnter, false);
    targetEl.addEventListener(EVENTS.MOUSE_LEAVE, this._onMouseLeave, false);
    targetEl.addEventListener(EVENTS.WHEEL, this._onWheel, {
      passive: false,
      capture: false
    });
    this._enabled = true;
  }
  /**
   * Enable autoplay after current delay value
   * @returns {void}
   */
  enableAfterDelay() {
    this.enable();
    this._interrupted = true;
    this._setUninterruptedAfterDelay(this._delay);
  }
  /**
   * Disable this input and remove all event handlers
   * @returns {void}
   */
  disable() {
    if (!this._enabled) return;
    const targetEl = this._view3D.renderer.canvas;
    targetEl.removeEventListener(EVENTS.MOUSE_DOWN, this._onMouseDown, false);
    window.removeEventListener(EVENTS.MOUSE_UP, this._onMouseUp, false);
    targetEl.removeEventListener(EVENTS.TOUCH_START, this._onTouchStart, false);
    targetEl.removeEventListener(EVENTS.TOUCH_END, this._onTouchEnd, false);
    targetEl.removeEventListener(EVENTS.MOUSE_ENTER, this._onMouseEnter, false);
    targetEl.removeEventListener(EVENTS.MOUSE_LEAVE, this._onMouseLeave, false);
    targetEl.removeEventListener(EVENTS.WHEEL, this._onWheel, false);
    this._enabled = false;
    this._interrupted = false;
    this._hovering = false;
    this._clearTimeout();
  }
  _setUninterruptedAfterDelay(delay) {
    if (this._hovering) return;
    this._clearTimeout();
    if (delay > 0) {
      this._interruptionTimer = window.setTimeout(() => {
        this._interrupted = false;
        this._interruptionTimer = -1;
      }, delay);
    } else {
      this._interrupted = false;
      this._interruptionTimer = -1;
    }
  }
  _clearTimeout() {
    if (this._interruptionTimer >= 0) {
      window.clearTimeout(this._interruptionTimer);
      this._interruptionTimer = -1;
    }
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Data class for loaded 3d model
 */
class Model {
  /**
   * Create new Model instance
   */
  constructor({
    src,
    scenes,
    center = AUTO,
    parser = null,
    animations = [],
    annotations = [],
    variants = [],
    fixSkinnedBbox = false,
    castShadow = true,
    receiveShadow = false
  }) {
    this._src = src;
    const scene = new Group();
    scene.add(...scenes);
    this._scene = scene;
    this._parser = parser;
    this._animations = animations;
    this._annotations = annotations;
    this._variants = variants;
    const bbox = this._getInitialBbox(fixSkinnedBbox);
    // Move to position where bbox.min.y = 0
    const offset = bbox.min.y;
    scene.translateY(-offset);
    scene.updateMatrixWorld();
    bbox.translate(new Vector3(0, -offset, 0));
    this._fixSkinnedBbox = fixSkinnedBbox;
    this._bbox = bbox;
    this._center = center === AUTO ? bbox.getCenter(new Vector3()) : parseAsBboxRatio(center, bbox);
    this.castShadow = castShadow;
    this.receiveShadow = receiveShadow;
  }
  /**
   * Source URL of this model
   * @type {string}
   * @readonly
   */
  get src() {
    return this._src;
  }
  /**
   * Scene of the model, see {@link https://threejs.org/docs/#api/en/objects/Group THREE.Group}
   * @readonly
   */
  get scene() {
    return this._scene;
  }
  /**
   * {@link https://threejs.org/docs/#api/en/animation/AnimationClip THREE.AnimationClip}s inside model
   * @readonly
   */
  get animations() {
    return this._animations;
  }
  /**
   * {@link Annotation}s included inside the model
   * @readonly
   */
  get annotations() {
    return this._annotations;
  }
  /**
   * {@link https://threejs.org/docs/#api/en/objects/Mesh THREE.Mesh}es inside model if there's any.
   * @readonly
   */
  get meshes() {
    return this._getAllMeshes();
  }
  /**
   * Get a copy of model's current bounding box
   * @type THREE#Box3
   * @readonly
   * @see https://threejs.org/docs/#api/en/math/Box3
   */
  get bbox() {
    return this._bbox;
  }
  /**
   * Center of the model
   * @type THREE#Vector3
   * @readonly
   * @see https://threejs.org/docs/#api/en/math/Vector3
   */
  get center() {
    return this._center;
  }
  /**
   * Whether the model's meshes gets rendered into shadow map
   * @type boolean
   * @example
   * ```ts
   * model.castShadow = true;
   * ```
   */
  set castShadow(val) {
    const meshes = this.meshes;
    meshes.forEach(mesh => mesh.castShadow = val);
  }
  /**
   * Whether the model's mesh materials receive shadows
   * @type boolean
   * @example
   * ```ts
   * model.receiveShadow = true;
   * ```
   */
  set receiveShadow(val) {
    const meshes = this.meshes;
    meshes.forEach(mesh => mesh.receiveShadow = val);
  }
  selectVariant(variant) {
    return __awaiter(this, void 0, void 0, function* () {
      const variants = this._variants;
      const parser = this._parser;
      if (variants.length <= 0 || !parser) return;
      let variantIndex = 0;
      if (variant != null) {
        if (isString(variant)) {
          variantIndex = variants.findIndex(({
            name
          }) => name === variant);
        } else {
          variantIndex = variant;
        }
      }
      const scene = this._scene;
      const matLoadPromises = [];
      scene.traverse(obj => __awaiter(this, void 0, void 0, function* () {
        if (!obj.isMesh || !obj.userData.gltfExtensions) return;
        const meshVariantDef = obj.userData.gltfExtensions[VARIANT_EXTENSION];
        if (!meshVariantDef) return;
        if (!obj.userData.originalMaterial) {
          obj.userData.originalMaterial = obj.material;
        }
        const mapping = meshVariantDef.mappings.find(mapping => mapping.variants.includes(variantIndex));
        if (mapping) {
          const loadMat = parser.getDependency("material", mapping.material);
          matLoadPromises.push(loadMat);
          obj.material = yield loadMat;
          parser.assignFinalMaterial(obj);
        } else {
          obj.material = obj.userData.originalMaterial;
        }
      }));
      return Promise.all(matLoadPromises);
    });
  }
  /**
   * Executes a user-supplied "reducer" callback function on each vertex of the model, in order, passing in the return value from the calculation on the preceding element.
   */
  reduceVertices(callbackfn, initialVal) {
    const meshes = this.meshes;
    let result = initialVal;
    meshes.forEach(mesh => {
      const {
        position
      } = mesh.geometry.attributes;
      if (!position) return;
      mesh.updateMatrixWorld();
      if (this._fixSkinnedBbox && mesh.isSkinnedMesh) {
        this._forEachSkinnedVertices(mesh, vertex => {
          result = callbackfn(result, vertex);
        });
      } else {
        const posScale = getAttributeScale(position);
        for (let idx = 0; idx < position.count; idx++) {
          const vertex = new Vector3().fromBufferAttribute(position, idx);
          if (position.normalized) {
            vertex.multiplyScalar(posScale);
          }
          vertex.applyMatrix4(mesh.matrixWorld);
          result = callbackfn(result, vertex);
        }
      }
    });
    return result;
  }
  _getInitialBbox(fixSkinnedBbox) {
    this._scene.updateMatrixWorld();
    if (fixSkinnedBbox && this._hasSkinnedMesh()) {
      return this._getSkeletonBbox();
    } else {
      return new Box3().setFromObject(this._scene);
    }
  }
  _getSkeletonBbox() {
    const bbox = new Box3();
    this.meshes.forEach(mesh => {
      if (!mesh.isSkinnedMesh) {
        bbox.expandByObject(mesh);
        return;
      }
      this._forEachSkinnedVertices(mesh, vertex => bbox.expandByPoint(vertex));
    });
    return bbox;
  }
  /**
   * Get all {@link https://threejs.org/docs/#api/en/objects/Mesh THREE.Mesh}es inside model if there's any.
   * @private
   * @returns Meshes found at model's scene
   */
  _getAllMeshes() {
    const meshes = [];
    this._scene.traverse(obj => {
      if (obj.isMesh) {
        meshes.push(obj);
      }
    });
    return meshes.sort((a, b) => a.name.localeCompare(b.name));
  }
  _hasSkinnedMesh() {
    return this._getAllMeshes().some(mesh => mesh.isSkinnedMesh);
  }
  _forEachSkinnedVertices(mesh, callback) {
    const geometry = mesh.geometry;
    const positions = geometry.attributes.position;
    const skinWeights = geometry.attributes.skinWeight;
    const skeleton = mesh.skeleton;
    skeleton.update();
    const positionScale = getAttributeScale(positions);
    const skinWeightScale = getAttributeScale(skinWeights);
    for (let posIdx = 0; posIdx < positions.count; posIdx++) {
      const transformed = getSkinnedVertex(posIdx, mesh, positionScale, skinWeightScale);
      callback(transformed);
    }
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
const dracoLoader = new DRACOLoader();
const ktx2Loader = new KTX2Loader();
/**
 * glTF/glb 3D model loader
 */
class GLTFLoader extends Loader {
  /**
   * Create a new instance of GLTFLoader
   */
  constructor(view3D) {
    super(view3D);
    this._loader = new GLTFLoader$1();
    const loader = this._loader;
    loader.setCrossOrigin("anonymous");
    loader.setDRACOLoader(dracoLoader);
    loader.setKTX2Loader(ktx2Loader.detectSupport(view3D.renderer.threeRenderer));
  }
  static setMeshoptDecoder(meshoptPath) {
    return __awaiter(this, void 0, void 0, function* () {
      return new Promise((resolve, reject) => {
        const scriptTag = document.createElement("script");
        scriptTag.addEventListener("load", () => __awaiter(this, void 0, void 0, function* () {
          yield window.MeshoptDecoder.ready;
          GLTFLoader.meshoptDecoder = window.MeshoptDecoder;
          document.body.removeChild(scriptTag);
          resolve();
        }));
        scriptTag.addEventListener("error", () => {
          document.body.removeChild(scriptTag);
          reject();
        });
        scriptTag.src = new URL(meshoptPath, location.href).href;
        document.body.appendChild(scriptTag);
      });
    });
  }
  /**
   * Load new GLTF model from the given url
   * @param {string} url URL to fetch glTF/glb file
   * @returns Promise that resolves {@link Model}
   */
  load(url) {
    const view3D = this._view3D;
    const loader = this._loader;
    const loadingContext = createLoadingContext(view3D, url);
    dracoLoader.setDecoderPath(view3D.dracoPath);
    ktx2Loader.setTranscoderPath(view3D.ktxPath);
    if (GLTFLoader.meshoptDecoder) {
      loader.setMeshoptDecoder(GLTFLoader.meshoptDecoder);
    }
    loader.manager = DefaultLoadingManager;
    return new Promise((resolve, reject) => {
      try {
        loader.load(url, gltf => __awaiter(this, void 0, void 0, function* () {
          const model = yield this._parseToModel(gltf, url);
          resolve(model);
        }), evt => this._onLoadingProgress(evt, url, loadingContext), err => {
          loadingContext.initialized = true;
          reject(err);
        });
      } catch (err) {
        reject(err);
      }
    });
  }
  /**
   * Load new GLTF model from the given files
   * @param files Files that has glTF/glb and all its associated resources like textures and .bin data files
   * @returns Promise that resolves {@link Model}
   */
  loadFromFiles(files) {
    const view3D = this._view3D;
    const loader = this._loader;
    const objectURLs = [];
    const revokeURLs = () => {
      objectURLs.forEach(url => {
        URL.revokeObjectURL(url);
      });
    };
    dracoLoader.setDecoderPath(view3D.dracoPath);
    ktx2Loader.setTranscoderPath(view3D.ktxPath);
    if (GLTFLoader.meshoptDecoder) {
      loader.setMeshoptDecoder(GLTFLoader.meshoptDecoder);
    }
    return new Promise((resolve, reject) => {
      if (files.length <= 0) {
        reject(new Error("No files found"));
        return;
      }
      const gltfFile = files.find(file => /\.(gltf|glb)$/i.test(file.name));
      if (!gltfFile) {
        reject(new Error("No glTF file found"));
        return;
      }
      const filesMap = new Map();
      files.forEach(file => {
        filesMap.set(file.name, file);
      });
      const gltfURL = URL.createObjectURL(gltfFile);
      objectURLs.push(gltfURL);
      const manager = new LoadingManager();
      manager.setURLModifier(fileURL => {
        if (/^data:.*,.*$/i.test(fileURL)) return fileURL;
        const fileNameResult = /[^\/|\\]+$/.exec(fileURL);
        const fileName = fileNameResult && fileNameResult[0] || "";
        if (filesMap.has(fileName)) {
          const blob = filesMap.get(fileName);
          const blobURL = URL.createObjectURL(blob);
          objectURLs.push(blobURL);
          return blobURL;
        }
        return fileURL;
      });
      const loadingContext = createLoadingContext(view3D, gltfURL);
      loader.manager = manager;
      loader.load(gltfURL, gltf => __awaiter(this, void 0, void 0, function* () {
        const model = yield this._parseToModel(gltf, gltfFile.name);
        revokeURLs();
        resolve(model);
      }), evt => this._onLoadingProgress(evt, gltfURL, loadingContext), err => {
        loadingContext.initialized = true;
        revokeURLs();
        reject(err);
      });
    });
  }
  _parseToModel(gltf, src) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
      const view3D = this._view3D;
      const fixSkinnedBbox = view3D.fixSkinnedBbox;
      gltf.scenes.forEach(scene => {
        scene.traverse(obj => {
          obj.frustumCulled = false;
        });
      });
      const maxTextureSize = view3D.renderer.threeRenderer.capabilities.maxTextureSize;
      const meshes = [];
      gltf.scenes.forEach(scene => {
        scene.traverse(obj => {
          if (obj.isMesh) {
            meshes.push(obj);
          }
        });
      });
      const materials = meshes.reduce((allMaterials, mesh) => {
        return [...allMaterials, ...(Array.isArray(mesh.material) ? mesh.material : [mesh.material])];
      }, []);
      const textures = materials.reduce((allTextures, material) => {
        return [...allTextures, ...STANDARD_MAPS.filter(map => material[map]).map(mapName => material[mapName])];
      }, []);
      const associations = gltf.parser.associations;
      const gltfJSON = gltf.parser.json;
      const gltfTextures = textures.filter(texture => associations.has(texture)).map(texture => {
        return gltfJSON.textures[associations.get(texture).textures];
      });
      const texturesByLevel = Array.from(new Set(gltfTextures).values()).reduce((levels, texture, texIdx) => {
        const hasExtension = texture.extensions && texture.extensions[CUSTOM_TEXTURE_LOD_EXTENSION];
        const hasExtra = texture.extras && texture.extras[TEXTURE_LOD_EXTRA];
        if (!hasExtension && !hasExtra) return levels;
        const currentTexture = textures[texIdx];
        const lodLevels = hasExtension ? texture.extensions[CUSTOM_TEXTURE_LOD_EXTENSION].levels : texture.extras[TEXTURE_LOD_EXTRA].levels;
        lodLevels.forEach(({
          index,
          size
        }, level) => {
          if (size > maxTextureSize) return;
          if (!levels[level]) {
            levels[level] = [];
          }
          levels[level].push({
            index,
            texture: currentTexture
          });
        });
        return levels;
      }, []);
      const loaded = texturesByLevel.map(() => false);
      texturesByLevel.forEach((levelTextures, level) => __awaiter(this, void 0, void 0, function* () {
        // Change textures when all texture of the level loaded
        const texturesLoaded = yield Promise.all(levelTextures.map(({
          index
        }) => gltf.parser.getDependency("texture", index)));
        const higherLevelLoaded = loaded.slice(level + 1).some(val => !!val);
        loaded[level] = true;
        if (higherLevelLoaded) return;
        texturesLoaded.forEach((texture, index) => {
          const origTexture = levelTextures[index].texture;
          origTexture.image = texture.image;
          origTexture.needsUpdate = true;
          view3D.renderer.renderSingleFrame();
        });
      }));
      const annotations = [];
      if (gltf.parser.json.extras && gltf.parser.json.extras[ANNOTATION_EXTRA]) {
        const data = gltf.parser.json.extras[ANNOTATION_EXTRA];
        annotations.push(...view3D.annotation.parse(data));
      }
      const userData = (_a = gltf.userData) !== null && _a !== void 0 ? _a : {};
      const extensions = (_b = userData.gltfExtensions) !== null && _b !== void 0 ? _b : {};
      const variants = extensions[VARIANT_EXTENSION] ? extensions[VARIANT_EXTENSION].variants : [];
      const model = new Model({
        src,
        scenes: gltf.scenes,
        center: view3D.center,
        annotations,
        parser: gltf.parser,
        animations: gltf.animations,
        variants,
        fixSkinnedBbox
      });
      if (view3D.variant) {
        yield model.selectVariant(view3D.variant);
      }
      return model;
    });
  }
}

/**
 * @extends Component
 * @see https://naver.github.io/egjs-component/
 */
class View3D extends Component {
  /**
   * Creates new View3D instance.
   * @param root A root element or selector of it to initialize View3D
   * @param {View3DOptions} [options={}] An options object for View3D
   * @throws {View3DError}
   */
  constructor(root, {
    src = null,
    iosSrc = null,
    editMode = false,
    variant = null,
    dracoPath = DRACO_DECODER_URL,
    ktxPath = KTX_TRANSCODER_URL,
    meshoptPath = null,
    fixSkinnedBbox = false,
    fov = AUTO,
    center = AUTO,
    yaw = 0,
    pitch = 0,
    pivot = AUTO,
    initialZoom = 0,
    rotate = true,
    translate = true,
    zoom = true,
    autoplay = false,
    scrollable = true,
    wheelScrollable = false,
    useGrabCursor = true,
    ignoreCenterOnFit = false,
    skybox = null,
    envmap = null,
    background = null,
    exposure = 1,
    shadow = true,
    skyboxBlur = false,
    toneMapping = TONE_MAPPING.LINEAR,
    useDefaultEnv = true,
    defaultAnimationIndex = 0,
    animationRepeatMode = ANIMATION_REPEAT_MODE.ONE,
    annotationURL = null,
    annotationWrapper = `.${DEFAULT_CLASS.ANNOTATION_WRAPPER}`,
    annotationSelector = `.${DEFAULT_CLASS.ANNOTATION}`,
    annotationBreakpoints = ANNOTATION_BREAKPOINT,
    annotationAutoUnfocus = true,
    webAR = true,
    sceneViewer = true,
    quickLook = true,
    arPriority = AR_PRIORITY,
    poster = null,
    canvasSelector = "canvas",
    autoInit = true,
    autoResize = true,
    useResizeObserver = true,
    maintainSize = false,
    on = {},
    plugins = [],
    maxDeltaTime = 1 / 30
  } = {}) {
    super();
    this._rootEl = getElement(root);
    // Bind options
    this._src = src;
    this._iosSrc = iosSrc;
    this._editMode = editMode;
    this._variant = variant;
    this._dracoPath = dracoPath;
    this._ktxPath = ktxPath;
    this._meshoptPath = meshoptPath;
    this._fixSkinnedBbox = fixSkinnedBbox;
    this._fov = fov;
    this._center = center;
    this._yaw = yaw;
    this._pitch = pitch;
    this._pivot = pivot;
    this._initialZoom = initialZoom;
    this._rotate = rotate;
    this._translate = translate;
    this._zoom = zoom;
    this._autoplay = autoplay;
    this._scrollable = scrollable;
    this._wheelScrollable = wheelScrollable;
    this._useGrabCursor = useGrabCursor;
    this._ignoreCenterOnFit = ignoreCenterOnFit;
    this._skybox = skybox;
    this._envmap = envmap;
    this._background = background;
    this._exposure = exposure;
    this._shadow = shadow;
    this._skyboxBlur = skyboxBlur;
    this._toneMapping = toneMapping;
    this._useDefaultEnv = useDefaultEnv;
    this._defaultAnimationIndex = defaultAnimationIndex;
    this._animationRepeatMode = animationRepeatMode;
    this._annotationURL = annotationURL;
    this._annotationWrapper = annotationWrapper;
    this._annotationSelector = annotationSelector;
    this._annotationBreakpoints = annotationBreakpoints;
    this._annotationAutoUnfocus = annotationAutoUnfocus;
    this._webAR = webAR;
    this._sceneViewer = sceneViewer;
    this._quickLook = quickLook;
    this._arPriority = arPriority;
    this._poster = poster;
    this._canvasSelector = canvasSelector;
    this._autoInit = autoInit;
    this._autoResize = autoResize;
    this._useResizeObserver = useResizeObserver;
    this._maintainSize = maintainSize;
    this._model = null;
    this._initialized = false;
    this._loadingContext = [];
    this._plugins = plugins;
    this._maxDeltaTime = maxDeltaTime;
    // Create internal components
    this._renderer = new Renderer(this);
    this._camera = new Camera(this);
    this._control = new OrbitControl(this);
    this._scene = new Scene(this);
    this._animator = new ModelAnimator(this);
    this._autoPlayer = new AutoPlayer(this, getObjectOption(autoplay));
    this._autoResizer = new AutoResizer(this);
    this._arManager = new ARManager(this);
    this._annotationManager = new AnnotationManager(this);
    this._addEventHandlers(on);
    this._addPosterImage();
    void (() => __awaiter(this, void 0, void 0, function* () {
      yield this._initPlugins(plugins);
      if (src && autoInit) {
        yield this.init();
      }
    }))();
  }
  // Internal Components Getter
  /**
   * {@link Renderer} instance of the View3D
   * @type {Renderer}
   * @readonly
   */
  get renderer() {
    return this._renderer;
  }
  /**
   * {@link Scene} instance of the View3D
   * @type {Scene}
   * @readonly
   */
  get scene() {
    return this._scene;
  }
  /**
   * {@link Camera} instance of the View3D
   * @type {Camera}
   * @readonly
   */
  get camera() {
    return this._camera;
  }
  /**
   * {@link OrbitControl} instance of the View3D
   * @type {OrbitControl}
   * @readonly
   */
  get control() {
    return this._control;
  }
  /**
   * {@link AutoPlayer} instance of the View3D
   * @type {AutoPlayer}
   * @readonly
   */
  get autoPlayer() {
    return this._autoPlayer;
  }
  /**
   * Current {@link Model} displaying. `null` if nothing is displayed on the canvas.
   * @type {Model | null}
   * @readonly
   */
  get model() {
    return this._model;
  }
  /**
   * {@link ModelAnimator} instance of the View3D
   * @type {ModelAnimator}
   * @readonly
   */
  get animator() {
    return this._animator;
  }
  /**
   * {@link ARManager} instance of the View3D
   * @type {ARManager}
   * @readonly
   */
  get ar() {
    return this._arManager;
  }
  /**
   * {@link AnnotationManager} instance of the View3D
   * @type {AnnotationManager}
   */
  get annotation() {
    return this._annotationManager;
  }
  // Internal State Getter
  /**
   * Root(Wrapper) element of View3D that given in the constructor
   * @type {HTMLElement}
   * @readonly
   */
  get rootEl() {
    return this._rootEl;
  }
  /**
   * Whether the View3D is initialized. This is set to `true` just before triggering "ready" event.
   * @type {boolean}
   * @readonly
   */
  get initialized() {
    return this._initialized;
  }
  /**
   * An array of loading status of assets.
   * @type {LoadingItem[]}
   * @readonly
   * @internal
   */
  get loadingContext() {
    return this._loadingContext;
  }
  /**
   * Active plugins of view3D
   * @type {View3DPlugin[]}
   * @readonly
   */
  get plugins() {
    return this._plugins;
  }
  // Options Getter
  /**
   * Source URL to fetch 3D model. `glb` / `glTF` models are supported.
   * @type {string | null}
   * @default null
   */
  get src() {
    return this._src;
  }
  /**
   * Source URL to fetch 3D model in iOS AR Quick Look. `usdz` models are supported.
   * @type {string | null}
   * @default null
   */
  get iosSrc() {
    return this._iosSrc;
  }
  /**
     * OBSIDIAN:Edit Mode for starting the editor functionality.
     * @type {boolean}
     * @default null
     */
  get editMode() {
    return this._editMode;
  }
  /**
   * Active material variant of the model.
   * Either can be index of the variant(number), or the name of the variant(string)
   * Changing this value will change the material of the model
   * @default null
   * @see https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_variants/README.md
   */
  get variant() {
    return this._variant;
  }
  /**
   * URL to {@link https://github.com/google/draco Draco} decoder location.
   * @type {string}
   * @default https://www.gstatic.com/draco/versioned/decoders/1.4.1/
   */
  get dracoPath() {
    return this._dracoPath;
  }
  /**
   * URL to {@link http://github.khronos.org/KTX-Specification/#basisu_gd KTX2 texture} transcoder location.
   * @type {string}
   * @default https://unpkg.com/three@0.134.0/examples/js/libs/basis/
   */
  get ktxPath() {
    return this._ktxPath;
  }
  /**
   * URL to {@link https://github.com/zeux/meshoptimizer Meshoptimizer} decoder js path.
   * @type {string | null}
   * @default null
   */
  get meshoptPath() {
    return this._meshoptPath;
  }
  /**
   * Sometimes, some rigged model has the wrong bounding box that when displaying on three.js (usually converted glTF model from Sketchfab)
   * Enabling this option can resolve that issue by recalculating bounding box size with the influence of the skeleton weight.
   * @type {boolean}
   * @default false
   */
  get fixSkinnedBbox() {
    return this._fixSkinnedBbox;
  }
  /**
   * A vertical FOV(Field of View) value of the camera frustum, in degrees.
   * If `"auto"` is used, View3D will try to find the appropriate FOV value that model is not clipped at any angle.
   * @type {"auto" | number}
   * @default "auto"
   */
  get fov() {
    return this._fov;
  }
  /**
   * Specifies the center of the model.
   * If `"auto"` is given, it will use the center of the model's bounding box.
   * Else, you can use a number array as any world position.
   * Or, you can use a string array as a relative position to bounding box min/max. ex) ["0%", "100%", "50%"]
   * The difference to {@link View3D#pivot pivot} is model's bounding box and center position will be shown on screen at every rotation angle.
   * @type {"auto" | Array<number | string>}
   * @default "auto"
   */
  get center() {
    return this._center;
  }
  /**
   * Initial Y-axis rotation of the camera, in degrees.
   * Use {@link Camera#yaw view3D.camera.yaw} instead if you want current yaw value.
   * @type {number}
   * @default 0
   */
  get yaw() {
    return this._yaw;
  }
  /**
   * Initial X-axis rotation of the camera, in degrees.
   * Should be a value from -90 to 90.
   * Use {@link Camera#pitch view3D.camera.pitch} instead if you want current pitch value.
   * @type {number}
   * @default 0
   */
  get pitch() {
    return this._pitch;
  }
  /**
   * Initial origin point of rotation of the camera.
   * If `"auto"` is given, it will use {@link View3D#center model's center} as pivot.
   * Else, you can use a number array as any world position.
   * Or, you can use a string array as a relative position to bounding box min/max. ex) ["0%", "100%", "50%"]
   * Use {@link Camera#pivot view3D.camera.pivot} instead if you want current pivot value.
   * @type {"auto" | Array<number | string>}
   * @default "auto"
   */
  get pivot() {
    return this._pivot;
  }
  /**
   * Initial zoom value.
   * If `number` is given, positive value will make camera zoomed in and negative value will make camera zoomed out.
   * If `object` is given, it will fit model's bounding box's front / side face to the given ratio of the canvas height / width.
   * For example, `{ axis: "y", ratio: 0.5 }` will set the zoom of the camera so that the height of the model to 50% of the height of the canvas.
   * @type {number}
   * @default 0
   */
  get initialZoom() {
    return this._initialZoom;
  }
  /**
   * Options for the {@link RotateControl}.
   * If `false` is given, it will disable the rotate control.
   * @type {boolean | RotateControlOptions}
   * @default true
   */
  get rotate() {
    return this._rotate;
  }
  /**
   * Options for the {@link TranslateControl}.
   * If `false` is given, it will disable the translate control.
   * @type {boolean | TranslateControlOptions}
   * @default true
   */
  get translate() {
    return this._translate;
  }
  /**
   * Options for the {@link ZoomControl}.
   * If `false` is given, it will disable the zoom control.
   * @type {boolean | ZoomControlOptions}
   * @default true
   */
  get zoom() {
    return this._zoom;
  }
  /**
   * Enable Y-axis rotation autoplay.
   * If `true` is given, it will enable autoplay with default values.
   * @type {boolean | AutoplayOptions}
   * @default true
   */
  get autoplay() {
    return this._autoplay;
  }
  /**
   * Enable browser scrolling with touch on the canvas area.
   * This will block the rotate(pitch) control if the user is currently scrolling.
   * @type {boolean}
   * @default true
   */
  get scrollable() {
    return this._scrollable;
  }
  /**
   * Enable browser scrolling with mouse wheel on the canvas area.
   * This will block the zoom control with mouse wheel.
   * @type {boolean}
   * @default false
   */
  get wheelScrollable() {
    return this._wheelScrollable;
  }
  /**
   * Enable CSS `cursor: grab` on the canvas element.
   * `cursor: grabbing` will be used on mouse click.
   * @type {boolean}
   * @default true
   */
  get useGrabCursor() {
    return this._useGrabCursor;
  }
  /**
   * When {@link Camera#pivot camera.fit} is called, View3D will adjust camera with the model so that the model is not clipped from any camera rotation by assuming {@link View3D#center center} as origin of the rotation by default.
   * This will ignore that behavior by forcing model's bbox center as center of the rotation while fitting the camera to the model.
   * @type {boolean}
   * @default false
   */
  get ignoreCenterOnFit() {
    return this._ignoreCenterOnFit;
  }
  /**
   * Source to the HDR texture image (RGBE), which will used as the scene environment map & background.
   * `envmap` will be ignored if this value is not `null`.
   * @type {string | null}
   * @default null
   */
  get skybox() {
    return this._skybox;
  }
  /**
   * Source to the HDR texture image (RGBE), which will used as the scene environment map.
   * @type {string | null}
   * @default null
   */
  get envmap() {
    return this._envmap;
  }
  /**
   * Color code / URL to a image to use as the background.
   * For transparent background, use `null`. (default value)
   * Can be enabled only when the `skybox` is `null`.
   * @type {number | string | null}
   * @default null
   */
  get background() {
    return this._background;
  }
  /**
   * Exposure value of the HDR envmap/skybox image.
   * @type {number}
   * @default 1
   */
  get exposure() {
    return this._exposure;
  }
  /**
   * Enable shadow below the model.
   * If `true` is given, it will enable shadow with the default options.
   * If `false` is given, it will disable the shadow.
   * @type {boolean | ShadowOptions}
   * @default true
   */
  get shadow() {
    return this._shadow;
  }
  /**
   * Apply blur to the current skybox image.
   * @type {boolean}
   * @default false
   */
  get skyboxBlur() {
    return this._skyboxBlur;
  }
  /**
   * This is used to approximate the appearance of high dynamic range (HDR) on the low dynamic range medium of a standard computer monitor or mobile device's screen.
   * @type {number}
   * @see TONE_MAPPING
   * @default THREE.LinearToneMapping
   */
  get toneMapping() {
    return this._toneMapping;
  }
  /**
   * Whether to use generated default environment map.
   * @type {boolean}
   * @default true
   */
  get useDefaultEnv() {
    return this._useDefaultEnv;
  }
  /**
   * Index of the animation to play after the model is loaded
   * @type {number}
   * @default 0
   */
  get defaultAnimationIndex() {
    return this._defaultAnimationIndex;
  }
  /**
   * Repeat mode of the animator.
   * "one" will repeat single animation, and "all" will repeat all animations.
   * "none" will make animation to automatically paused on its last frame.
   * @see ANIMATION_REPEAT_MODE
   * @type {string}
   * @default "one"
   */
  get animationRepeatMode() {
    return this._animationRepeatMode;
  }
  /**
   * An URL to the JSON file that has annotation informations.
   * @type {string | null}
   * @default null
   */
  get annotationURL() {
    return this._annotationURL;
  }
  /**
   * An element or CSS selector of the annotation wrapper element.
   * @type {HTMLElement | string}
   * @default ".view3d-annotation-wrapper"
   */
  get annotationWrapper() {
    return this._annotationWrapper;
  }
  /**
   * CSS selector of the annotation elements inside the root element
   * @type {string}
   * @default ".view3d-annotation"
   */
  get annotationSelector() {
    return this._annotationSelector;
  }
  /**
   * Breakpoints for the annotation opacity, mapped by degree between (camera-model center-annotation) as key.
   * @type {Record<number, number>}
   * @default { 165: 0, 135: 0.4, 0: 1 }
   */
  get annotationBreakpoints() {
    return this._annotationBreakpoints;
  }
  /**
   * Whether to automatically unfocus annotation on user input
   * @type {boolean}
   * @default true
   */
  get annotationAutoUnfocus() {
    return this._annotationAutoUnfocus;
  }
  /**
   * Options for the WebXR-based AR session.
   * If `false` is given, it will disable WebXR-based AR session.
   * @type {boolean | WebARSessionOptions}
   * @default true
   */
  get webAR() {
    return this._webAR;
  }
  /**
   * Options for the {@link https://developers.google.com/ar/develop/java/scene-viewer Google SceneViewer} based AR session.
   * If `false` is given, it will disable SceneViewer based AR session.
   * See {@link https://developers.google.com/ar/develop/java/scene-viewer#supported_intent_parameters Official Page} for the parameter details.
   * @type {boolean | SceneViewerSessionOptions}
   * @default true
   */
  get sceneViewer() {
    return this._sceneViewer;
  }
  /**
   * Options for the {@link https://developer.apple.com/augmented-reality/quick-look/ Apple AR Quick Look} based AR session.
   * If `false` is given, it will disable AR Quick Look based AR session.
   * @type {boolean | QuickLookSessionOptions}
   * @default true
   */
  get quickLook() {
    return this._quickLook;
  }
  /**
   * Priority array for the AR sessions.
   * If the two sessions are available in one environment, the session listed earlier will be used first.
   * If the session name is not included in this priority array, that session will be ignored.
   * See {@link AR_SESSION_TYPE}
   * @type {string[]}
   * @default ["webAR", "sceneViewer", "quickLook"]
   */
  get arPriority() {
    return this._arPriority;
  }
  /**
   * Poster image that will be displayed before the 3D model is loaded.
   * If `string` URL is given, View3D will temporarily show poster image element with that url as src before the first model is loaded
   * If `string` CSS selector of DOM element inside view3d-wrapper or `HTMLElement` is given, View3D will remove that element after the first model is loaded
   * @type {string | HTMLElement | null}
   * @default null
   */
  get poster() {
    return this._poster;
  }
  /**
   * CSS Selector for the canvas element.
   * @type {string}
   * @default "canvas"
   */
  get canvasSelector() {
    return this._canvasSelector;
  }
  /**
   * Call {@link View3D#init init()} automatically when creating View3D's instance
   * This option won't work if `src` is not given
   * @type {boolean}
   * @default true
   * @readonly
   */
  get autoInit() {
    return this._autoInit;
  }
  /**
   * Whether to automatically call {@link View3D#resize resize()} when the canvas element's size is changed
   * @type {boolean}
   * @default true
   */
  get autoResize() {
    return this._autoResize;
  }
  /**
   * Whether to listen {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver ResizeObserver}'s event instead of Window's {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event resize} event when using the `autoResize` option
   * @type {boolean}
   * @default true
   */
  get useResizeObserver() {
    return this._useResizeObserver;
  }
  /**
   * Whether to retain 3D model's visual size on canvas resize
   * @type {boolean}
   * @default false
   */
  get maintainSize() {
    return this._maintainSize;
  }
  /**
   * Maximum delta time in any given frame
   * This can prevent a long frame hitch / lag
   * The default value is 1/30(30 fps). Set this value to `Infinity` to disable
   * @type {number}
   * @default 1/30
   */
  get maxDeltaTime() {
    return this._maxDeltaTime;
  }
  set iosSrc(val) {
    this._iosSrc = val;
  }
  set editMode(val) {
    this._editMode = val;
  }
  set variant(val) {
    if (this._model) {
      this._model.selectVariant(val).then(() => {
        this.renderer.renderSingleFrame();
      });
    }
    this._variant = val;
  }
  set defaultAnimationIndex(val) {
    this._defaultAnimationIndex = val;
  }
  set initialZoom(val) {
    this._initialZoom = val;
  }
  set skybox(val) {
    void this._scene.setSkybox(val);
    this._skybox = val;
    if (!val && this._useDefaultEnv) {
      this._scene.setDefaultEnv();
    }
  }
  set envmap(val) {
    void this._scene.setEnvMap(val);
    this._envmap = val;
    if (!val && this._useDefaultEnv) {
      this._scene.setDefaultEnv();
    }
  }
  set exposure(val) {
    this._exposure = val;
    this._renderer.threeRenderer.toneMappingExposure = val;
    this._renderer.renderSingleFrame();
  }
  set skyboxBlur(val) {
    this._skyboxBlur = val;
    const scene = this._scene;
    const root = scene.root;
    const origEnvmapTexture = scene.root.environment;
    if (origEnvmapTexture && root.background !== null) {
      if (val) {
        root.background = Skybox.createBlurredHDR(this, origEnvmapTexture);
      } else {
        root.background = origEnvmapTexture;
      }
    }
  }
  set toneMapping(val) {
    this._toneMapping = val;
    this._renderer.threeRenderer.toneMapping = val;
    this._renderer.renderSingleFrame();
  }
  set useGrabCursor(val) {
    this._useGrabCursor = val;
    this._control.updateCursor();
  }
  set animationRepeatMode(val) {
    this._animationRepeatMode = val;
    this._animator.updateRepeatMode();
  }
  set autoResize(val) {
    this._autoResize = val;
    if (val) {
      this._autoResizer.enable();
    } else {
      this._autoResizer.disable();
    }
  }
  set maintainSize(val) {
    this._maintainSize = val;
  }
  set maxDeltaTime(val) {
    this._maxDeltaTime = val;
  }
  /**
   * Destroy View3D instance and remove all events attached to it
   * @returns {void}
   */
  destroy() {
    this._scene.reset();
    this._renderer.destroy();
    this._control.destroy();
    this._autoResizer.disable();
    this._animator.destroy();
    this._annotationManager.destroy();
    this._plugins.forEach(plugin => plugin.teardown(this));
    this._plugins = [];
  }
  /**
   * Initialize View3d & load 3D model
   * @fires View3D#load
   * @returns {Promise<void>}
   */
  init() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this._src) {
        throw new View3DError(ERROR.MESSAGES.PROVIDE_SRC_FIRST, ERROR.CODES.PROVIDE_SRC_FIRST);
      }
      const scene = this._scene;
      const renderer = this._renderer;
      const control = this._control;
      const animator = this._animator;
      const annotationManager = this._annotationManager;
      const meshoptPath = this._meshoptPath;
      const tasks = [];
      this.resize();
      animator.init();
      annotationManager.init();
      if (this._autoResize) {
        this._autoResizer.enable();
      }
      if (meshoptPath && !GLTFLoader.meshoptDecoder) {
        yield GLTFLoader.setMeshoptDecoder(meshoptPath);
      }
      // Load & set skybox / envmap before displaying model
      tasks.push(...scene.initTextures());
      const loadModel = this._loadModel(this._src);
      tasks.push(...loadModel);
      void this._resetLoadingContextOnFinish(tasks);
      yield Promise.race(loadModel);
      if (this._annotationURL) {
        yield this._annotationManager.load(this._annotationURL);
      }
      control.enable();
      if (this._autoplay) {
        this._autoPlayer.enable();
      }
      // Start rendering
      renderer.stopAnimationLoop();
      renderer.setAnimationLoop(renderer.defaultRenderLoop);
      renderer.renderSingleFrame();
      this._initialized = true;
      this.trigger(EVENTS$1.READY, {
        type: EVENTS$1.READY,
        target: this
      });
    });
  }
  /**
   * Resize View3D instance to fit current canvas size
   * @returns {void}
   */
  resize() {
    const renderer = this._renderer;
    const prevSize = this._initialized ? renderer.size : null;
    renderer.resize();
    const newSize = renderer.size;
    this._camera.resize(newSize, prevSize);
    this._control.resize(newSize);
    this._annotationManager.resize();
    // Prevent flickering on resize
    if (this._initialized) {
      renderer.renderSingleFrame(true);
    }
    this.trigger(EVENTS$1.RESIZE, Object.assign(Object.assign({}, newSize), {
      type: EVENTS$1.RESIZE,
      target: this
    }));
  }
  /**
   * Load a new 3D model and replace it with the current one
   * @param {string | string[]} src Source URL to fetch 3D model from
   * @param {object} [options={}] Options
   * @param {string | null} [options.iosSrc] Source URL to fetch 3D model in iOS AR Quick Look. `usdz` models are supported.
   */
  load(src, {
    iosSrc = null
  } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this._initialized) {
        const loadModel = this._loadModel(src);
        void this._resetLoadingContextOnFinish(loadModel);
        yield Promise.race(loadModel);
        // Change the src later as an error can occur while loading the model
        this._src = src;
        this._iosSrc = iosSrc;
      } else {
        this._src = src;
        this._iosSrc = iosSrc;
        yield this.init();
      }
    });
  }
  /**
   * Display the given model in the canvas
   * @param {Model} model A model to display
   * @param {object} options Options for displaying model
   * @param {boolean} [options.resetCamera=true] Reset camera to default pose
   */
  display(model, {
    resetCamera = true
  } = {}) {
    const renderer = this._renderer;
    const scene = this._scene;
    const camera = this._camera;
    const animator = this._animator;
    const annotationManager = this._annotationManager;
    const inXR = renderer.threeRenderer.xr.isPresenting;
    scene.reset();
    scene.add(model.scene);
    scene.shadowPlane.updateDimensions(model);
    if (resetCamera) {
      camera.fit(model);
      void camera.reset(0);
    }
    animator.reset();
    animator.setClips(model.animations);
    if (model.animations.length > 0) {
      animator.play(this._defaultAnimationIndex);
    }
    annotationManager.reset();
    annotationManager.collect();
    annotationManager.add(...model.annotations);
    this._model = model;
    animator.initCustomAnimations(this);
    if (inXR) {
      const activeSession = this._arManager.activeSession;
      if (activeSession) {
        activeSession.control.syncTargetModel(model);
      }
    }
    if (this._initialized) {
      renderer.renderSingleFrame();
    }
    this.trigger(EVENTS$1.MODEL_CHANGE, {
      type: EVENTS$1.MODEL_CHANGE,
      target: this,
      model
    });
  }
  /**
   * Add new plugins to View3D
   * @param {View3DPlugin[]} plugins Plugins to add
   * @returns {Promise<void>} A promise that resolves when all plugins are initialized
   */
  loadPlugins(...plugins) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this._initPlugins(plugins);
      this._plugins.push(...plugins);
    });
  }
  /**
   * Remove plugins from View3D
   * @param {View3DPlugin[]} plugins Plugins to remove
   * @returns {Promise<void>} A promise that resolves when all plugins are removed
   */
  removePlugins(...plugins) {
    return __awaiter(this, void 0, void 0, function* () {
      yield Promise.all(plugins.map(plugin => plugin.teardown(this)));
      plugins.forEach(plugin => {
        const pluginIdx = this._plugins.indexOf(plugin);
        if (pluginIdx < 0) return;
        this._plugins.splice(pluginIdx, 1);
      });
    });
  }
  /**
   * Take a screenshot of current rendered canvas image and download it
   */
  screenshot(fileName = "screenshot") {
    const canvas = this._renderer.canvas;
    const imgURL = canvas.toDataURL("png");
    const anchorEl = document.createElement("a");
    anchorEl.href = imgURL;
    anchorEl.download = fileName;
    anchorEl.click();
  }
  _loadModel(src) {
    const loader = new GLTFLoader(this);
    if (Array.isArray(src)) {
      const loaded = src.map(() => false);
      const loadModels = src.map((srcLevel, level) => this._loadSingleModel(loader, srcLevel, level, loaded));
      return loadModels;
    } else {
      return [this._loadSingleModel(loader, src, 0, [false])];
    }
  }
  _loadSingleModel(loader, src, level, loaded) {
    return __awaiter(this, void 0, void 0, function* () {
      const maxLevel = loaded.length - 1;
      this.trigger(EVENTS$1.LOAD_START, {
        type: EVENTS$1.LOAD_START,
        target: this,
        src,
        level,
        maxLevel
      });
      try {
        const model = yield loader.load(src);
        const higherLevelLoaded = loaded.slice(level + 1).some(val => !!val);
        const modelLoadedBefore = loaded.some(val => !!val);
        this.trigger(EVENTS$1.LOAD, {
          type: EVENTS$1.LOAD,
          target: this,
          model,
          level,
          maxLevel
        });
        loaded[level] = true;
        if (higherLevelLoaded) return;
        this.display(model, {
          resetCamera: !modelLoadedBefore
        });
      } catch (error) {
        this.trigger(EVENTS$1.LOAD_ERROR, {
          type: EVENTS$1.LOAD_ERROR,
          target: this,
          level,
          maxLevel,
          error
        });
        throw new View3DError(ERROR.MESSAGES.MODEL_FAIL_TO_LOAD(src), ERROR.CODES.MODEL_FAIL_TO_LOAD);
      }
    });
  }
  _addEventHandlers(events) {
    Object.keys(events).forEach(evtName => {
      this.on(evtName, events[evtName]);
    });
  }
  _addPosterImage() {
    const poster = this._poster;
    const rootEl = this._rootEl;
    if (!poster) return;
    const isPosterEl = isElement(poster);
    let posterEl;
    if (isPosterEl || isCSSSelector(poster)) {
      const elCandidate = isPosterEl ? poster : rootEl.querySelector(poster);
      if (!elCandidate) {
        throw new View3DError(ERROR.MESSAGES.ELEMENT_NOT_FOUND(poster), ERROR.CODES.ELEMENT_NOT_FOUND);
      }
      posterEl = elCandidate;
    } else {
      const imgEl = document.createElement("img");
      imgEl.className = DEFAULT_CLASS.POSTER;
      imgEl.src = poster;
      rootEl.appendChild(imgEl);
      posterEl = imgEl;
      this.once(EVENTS$1.READY, () => {
        if (imgEl.parentElement !== rootEl) return;
        rootEl.removeChild(imgEl);
      });
    }
    this.once(EVENTS$1.READY, () => {
      if (!posterEl.parentElement) return;
      // Remove that element from the parent element
      posterEl.parentElement.removeChild(posterEl);
    });
  }
  _initPlugins(plugins) {
    return __awaiter(this, void 0, void 0, function* () {
      yield Promise.all(plugins.map(plugin => plugin.init(this)));
    });
  }
  _resetLoadingContextOnFinish(tasks) {
    return __awaiter(this, void 0, void 0, function* () {
      void Promise.all(tasks).then(() => {
        this.trigger(EVENTS$1.LOAD_FINISH, {
          type: EVENTS$1.LOAD_FINISH,
          target: this
        });
        this._loadingContext = [];
      });
    });
  }
}
/**
 * Current version of the View3D
 * @type {string}
 * @readonly
 */
View3D.VERSION = "2.10.1";

/*
 * "View In Ar" Icon from [Google Material Design Icons](https://github.com/google/material-design-icons)
 * Licensed under [Apache Lincese Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE)
 */
// eslint-disable-next-line quotes
var ARIcon = '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width="32px" height="32px"><g><rect fill="none" height="24" width="24" x="0" y="0"/></g><g><g><path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.34,1,1,2.34,1,4v2h2V4z"/><path d="M3,20v-2H1v2c0,1.66,1.34,3,3,3h2v-2H4C3.45,21,3,20.55,3,20z"/><path d="M20,1h-2v2h2c0.55,0,1,0.45,1,1v2h2V4C23,2.34,21.66,1,20,1z"/><path d="M21,20c0,0.55-0.45,1-1,1h-2v2h2c1.66,0,3-1.34,3-3v-2h-2V20z"/><path d="M19,14.87V9.13c0-0.72-0.38-1.38-1-1.73l-5-2.88c-0.31-0.18-0.65-0.27-1-0.27s-0.69,0.09-1,0.27L6,7.39 C5.38,7.75,5,8.41,5,9.13v5.74c0,0.72,0.38,1.38,1,1.73l5,2.88c0.31,0.18,0.65,0.27,1,0.27s0.69-0.09,1-0.27l5-2.88 C18.62,16.25,19,15.59,19,14.87z M11,17.17l-4-2.3v-4.63l4,2.33V17.17z M12,10.84L8.04,8.53L12,6.25l3.96,2.28L12,10.84z M17,14.87l-4,2.3v-4.6l4-2.33V14.87z"/></g></g></svg>';

/**
 * A button that will be shown on the right-bottom side with the AR icon.
 * It will be disabled automatically when it's not available to enter AR sessions.
 * User can enter AR sessions by clicking this.
 */
class ARButton {
  /**
   * Create new instance of ARButton
   * @param {object} [options={}] Options for the ARButton
   * @param {string} [options.availableText="View in AR"] A text that will be shown on mouse hover when it's available to enter the AR session.
   * @param {string} [options.unavailableText="AR is not available in this browser"] A text that will be shown on mouse hover when it's not available to enter the AR session.
   * @param {string} [options.buttonClass="view3d-ar-button"] A class that will be applied to the button element.
   * @param {string} [options.tooltipClass="view3d-tooltip"] A class that will be applied to the tooltip element.
   */
  constructor(options = {}) {
    this._options = options;
    this._button = null;
  }
  init(view3D) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this._addButton(view3D);
    });
  }
  teardown(view3D) {
    const button = this._button;
    if (!button) return;
    if (button.parentElement === view3D.rootEl) {
      view3D.rootEl.removeChild(button);
    }
    this._button = null;
  }
  _addButton(view3D) {
    return __awaiter(this, void 0, void 0, function* () {
      const {
        availableText = "View in AR",
        unavailableText = "AR is not available in this browser",
        buttonClass = "view3d-ar-button",
        tooltipClass = "view3d-tooltip"
      } = this._options;
      const arAvailable = yield view3D.ar.isAvailable();
      const button = document.createElement(EL_BUTTON);
      const tooltip = document.createElement(EL_DIV);
      const tooltipText = document.createTextNode(arAvailable ? availableText : unavailableText);
      button.classList.add(buttonClass);
      tooltip.classList.add(tooltipClass);
      button.disabled = true;
      button.innerHTML = ARIcon;
      button.appendChild(tooltip);
      tooltip.appendChild(tooltipText);
      view3D.rootEl.appendChild(button);
      this._button = button;
      if (view3D.initialized) {
        yield this._setAvailable(view3D, button, arAvailable);
      } else {
        view3D.once(EVENTS$1.MODEL_CHANGE, () => {
          void this._setAvailable(view3D, button, arAvailable);
        });
      }
    });
  }
  _setAvailable(view3D, button, arAvailable) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!arAvailable) {
        button.disabled = true;
      } else {
        button.disabled = false;
        button.addEventListener("click", () => {
          void view3D.ar.enter();
        });
      }
    });
  }
}

/*
 * "Close" Icon from [Google Material Design Icons](https://github.com/google/material-design-icons)
 * Licensed under [Apache Lincese Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE)
 */
// eslint-disable-next-line quotes
var CloseIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>';

/**
 * An UI that will be displayed on top of {@link WebARSession}.
 * This will be automatically added on the overlayRoot of the {@link WebARSession}.
 */
class AROverlay {
  /**
   * Create new instance of AROverlay
   * @param {object} [options={}] Options for the AROverlay
   */
  constructor({
    className = {},
    showPlaneDetection = true,
    toastText = "Point your device downwards to find the ground and move it around."
  } = {}) {
    this.className = className;
    this.showPlaneDetection = showPlaneDetection;
    this.toastText = toastText;
    this._createElements();
  }
  init(view3D) {
    return __awaiter(this, void 0, void 0, function* () {
      const rootEl = this._rootEl;
      const detectionRoot = this._detectionRootEl;
      const closeButton = this._closeButtonEl;
      const className = Object.assign(Object.assign({}, AROverlay.DEFAULT_CLASS), this.className);
      view3D.on(EVENTS$1.AR_START, ({
        session
      }) => {
        const overlayRoot = session.domOverlay.root;
        if (!overlayRoot) return;
        overlayRoot.appendChild(rootEl);
        const closeButtonHandler = () => {
          void session.exit();
        };
        detectionRoot === null || detectionRoot === void 0 ? void 0 : detectionRoot.classList.add(className.DETECTION_VISIBLE);
        const onPlacedHandler = () => {
          detectionRoot === null || detectionRoot === void 0 ? void 0 : detectionRoot.classList.remove(className.DETECTION_VISIBLE);
        };
        view3D.once(EVENTS$1.AR_MODEL_PLACED, onPlacedHandler);
        closeButton.addEventListener(EVENTS.CLICK, closeButtonHandler);
        view3D.once(EVENTS$1.AR_END, () => {
          if (rootEl.parentElement) {
            rootEl.parentElement.removeChild(rootEl);
          }
          closeButton.removeEventListener(EVENTS.CLICK, closeButtonHandler);
          view3D.off(EVENTS$1.AR_MODEL_PLACED, onPlacedHandler);
        });
      });
    });
  }
  teardown() {
    // DO NOTHING
  }
  _createElements() {
    const className = Object.assign(Object.assign({}, AROverlay.DEFAULT_CLASS), this.className);
    const root = document.createElement(EL_DIV);
    const closeButton = document.createElement(EL_DIV);
    closeButton.classList.add(className.CLOSE_BUTTON);
    closeButton.innerHTML = CloseIcon;
    root.classList.add(className.ROOT);
    root.appendChild(closeButton);
    if (this.showPlaneDetection) {
      this._detectionRootEl = this._createPlaneDetectionElements();
      root.appendChild(this._detectionRootEl);
    }
    this._rootEl = root;
    this._closeButtonEl = closeButton;
  }
  _createPlaneDetectionElements() {
    const className = Object.assign(Object.assign({}, AROverlay.DEFAULT_CLASS), this.className);
    const detectionRoot = document.createElement(EL_DIV);
    const detectionIcon = document.createElement(EL_DIV);
    const detectionLabel = document.createElement(EL_DIV);
    const detectionPhone = document.createElement(EL_DIV);
    const detectionCube = document.createElement(EL_DIV);
    const detectionPlane = document.createElement(EL_DIV);
    const cubeFaces = range(5).map(() => document.createElement(EL_DIV));
    detectionRoot.classList.add(className.DETECTION_ROOT);
    detectionIcon.classList.add(className.DETECTION_ICON);
    detectionLabel.classList.add(className.DETECTION_TOAST);
    detectionPhone.classList.add(className.DETECTION_PHONE);
    detectionCube.classList.add(className.DETECTION_CUBE);
    detectionPlane.classList.add(className.DETECTION_PLANE);
    detectionLabel.innerHTML = this.toastText;
    cubeFaces.forEach(face => {
      face.classList.add(className.DETECTION_CUBE_FACE);
      detectionCube.appendChild(face);
    });
    detectionIcon.appendChild(detectionPhone);
    detectionIcon.appendChild(detectionCube);
    detectionIcon.appendChild(detectionPlane);
    detectionRoot.appendChild(detectionIcon);
    detectionRoot.appendChild(detectionLabel);
    return detectionRoot;
  }
}
/**
 * Default class names that AROverlay uses
 * @type {object}
 * @property {"view3d-ar-root"} ROOT A class name for the root element of AROverlay
 * @property {"view3d-ar-close"} CLOSE_BUTTON A class name for the close button element
 * @property {"view3d-ar-detection"} DETECTION_ROOT A class name for the root element of floor detection annotator
 * @property {"view3d-ar-detection-icon"} DETECTION_ICON A class name for the wrapper element of floor detection icon
 * @property {"view3d-ar-detection-toast"} DETECTION_TOAST A class name for the toast element of floor detection annotator
 * @property {"view3d-ar-phone"} DETECTION_PHONE A class name for the root element of floor detection phone shape
 * @property {"view3d-ar-cube"} DETECTION_CUBE A class name for the root element of floor detection cube
 * @property {"view3d-ar-cube-face"} DETECTION_CUBE_FACE A class name for the face elements of floor detection cube
 * @property {"view3d-ar-plane"} DETECTION_PLANE A class name for the face elements of floor detection plane
 */
AROverlay.DEFAULT_CLASS = {
  ROOT: "view3d-ar-root",
  CLOSE_BUTTON: "view3d-ar-close",
  DETECTION_ROOT: "view3d-ar-detection",
  DETECTION_ICON: "view3d-ar-detection-icon",
  DETECTION_TOAST: "view3d-ar-detection-toast",
  DETECTION_PHONE: "view3d-ar-phone",
  DETECTION_CUBE: "view3d-ar-cube",
  DETECTION_CUBE_FACE: "view3d-ar-cube-face",
  DETECTION_PLANE: "view3d-ar-plane",
  DETECTION_VISIBLE: "visible"
};

/**
 * A plugin that displays loading bar while
 */
class LoadingBar {
  /**
   * Create new instance of LoadingBar
   * @param {LoadingBarOptions} [options={}] Options for the LoadingBar
   */
  constructor(options = {}) {
    this._startLoading = ({
      target: view3D,
      level
    }) => {
      if (level !== 0) return;
      const {
        type = LoadingBar.TYPE.DEFAULT,
        loadingLabel = "Loading 3D Model...",
        parsingLabel = "Parsing 3D Model...",
        labelColor = "#ffffff",
        barWidth = "70%",
        barHeight = "10px",
        barBackground = "#bbbbbb",
        barForeground = "#3e8ed0",
        spinnerWidth = "30%",
        overlayBackground = "rgba(0, 0, 0, 0.3)"
      } = this._options;
      const loadingOverlay = document.createElement(EL_DIV);
      const loadingWrapper = document.createElement(EL_DIV);
      const loadingLabelEl = document.createElement(EL_DIV);
      const loadingBar = document.createElement(EL_DIV);
      const loadingFiller = document.createElement(EL_DIV);
      const className = Object.assign(Object.assign({}, this._options.className), LoadingBar.DEFAULT_CLASS);
      loadingOverlay.classList.add(className.OVERLAY);
      loadingWrapper.classList.add(className.WRAPPER);
      loadingBar.classList.add(className.BASE);
      loadingLabelEl.classList.add(className.LABEL);
      loadingFiller.classList.add(className.FILLER);
      loadingOverlay.style.backgroundColor = overlayBackground;
      if (type !== LoadingBar.TYPE.SPINNER) {
        loadingBar.style.height = barHeight;
        loadingBar.style.backgroundColor = barBackground;
        loadingFiller.style.backgroundColor = barForeground;
      } else {
        loadingBar.classList.add(className.TYPE_SPINNER);
        loadingBar.style.width = spinnerWidth;
        loadingBar.style.paddingTop = spinnerWidth;
        loadingFiller.style.borderWidth = barHeight;
        loadingFiller.style.borderColor = barForeground;
        loadingFiller.style.borderLeftColor = "transparent";
      }
      if (type === LoadingBar.TYPE.TOP) {
        loadingOverlay.classList.add(className.TYPE_TOP);
      } else if (type === LoadingBar.TYPE.DEFAULT) {
        loadingBar.style.width = barWidth;
      }
      loadingLabelEl.style.color = labelColor;
      loadingLabelEl.innerText = loadingLabel;
      loadingBar.appendChild(loadingFiller);
      loadingWrapper.appendChild(loadingBar);
      loadingWrapper.appendChild(loadingLabelEl);
      loadingOverlay.appendChild(loadingWrapper);
      view3D.rootEl.appendChild(loadingOverlay);
      if (type !== LoadingBar.TYPE.SPINNER) {
        const onProgress = () => {
          if (!view3D.loadingContext.every(ctx => ctx.initialized)) return;
          const [loaded, total] = view3D.loadingContext.filter(ctx => ctx.lengthComputable).reduce((values, ctx) => {
            values[0] += ctx.loaded;
            values[1] += ctx.total;
            return values;
          }, [0, 0]);
          if (total <= 0) return;
          const percentage = 100 * (loaded / total);
          loadingFiller.style.width = `${percentage.toFixed(2)}%`;
          if (loaded === total) {
            loadingLabelEl.innerText = parsingLabel;
          }
        };
        view3D.on(EVENTS$1.PROGRESS, onProgress);
        view3D.once(EVENTS$1.LOAD_FINISH, () => {
          view3D.off(EVENTS$1.PROGRESS, onProgress);
        });
      }
      view3D.once(EVENTS$1.LOAD_FINISH, () => {
        this._removeOverlay(view3D);
      });
      this._overlay = loadingOverlay;
    };
    this._options = options;
  }
  init(view3D) {
    return __awaiter(this, void 0, void 0, function* () {
      view3D.on(EVENTS$1.LOAD_START, this._startLoading);
    });
  }
  teardown(view3D) {
    view3D.off(EVENTS$1.LOAD_START, this._startLoading);
    this._removeOverlay(view3D);
  }
  _removeOverlay(view3D) {
    const overlay = this._overlay;
    if (!overlay) return;
    if (overlay.parentElement === view3D.rootEl) {
      view3D.rootEl.removeChild(overlay);
    }
    this._overlay = null;
  }
}
/**
 * Default class names that LoadingBar uses
 * @type {object}
 * @property {"view3d-lb-overlay"} OVERLAY A class name for overlay element of LoadingBar plugin
 * @property {"view3d-lb-wrapper"} WRAPPER A class name for wrapper element of LoadingBar plugin
 * @property {"view3d-lb-base"} BASE A class name for progress bar base element of LoadingBar plugin
 * @property {"view3d-lb-label"} LABEL A class name for label element of LoadingBar plugin
 * @property {"view3d-lb-filler"} FILLER A class name for progress bar filler element  of LoadingBar plugin
 * @property {"is-spinner"} TYPE_SPINNER A class name for LoadingBar plugin when the type is "spinner"
 * @property {"is-top"} TYPE_TOP A class name for LoadingBar plugin when the type is "top"
 */
LoadingBar.DEFAULT_CLASS = {
  OVERLAY: "view3d-lb-overlay",
  WRAPPER: "view3d-lb-wrapper",
  BASE: "view3d-lb-base",
  LABEL: "view3d-lb-label",
  FILLER: "view3d-lb-filler",
  TYPE_SPINNER: "is-spinner",
  TYPE_TOP: "is-top"
};
/**
 * Available styles of loading bar
 */
LoadingBar.TYPE = {
  DEFAULT: "default",
  TOP: "top",
  SPINNER: "spinner"
};

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Show animation progress bar, use with ControlBar
 */
class AnimationProgressBar {
  /** */
  constructor(view3D, controlBar, {
    position = ControlBar.POSITION.TOP,
    order = 9999
  } = {}) {
    this._onResize = () => {
      this._rootBbox = this._trackEl.getBoundingClientRect();
    };
    this._onRender = ({
      target: view3D
    }) => {
      const animator = view3D.animator;
      const activeAnimationIdx = animator.activeAnimationIndex;
      const activeAnimationClip = animator.activeAnimation;
      const activeAnimationAction = animator.actions[activeAnimationIdx];
      if (!activeAnimationClip || !activeAnimationAction) return;
      const progress = activeAnimationAction.time / activeAnimationClip.duration;
      this._fill(progress);
    };
    this._onMouseDown = evt => {
      if (evt.button !== MOUSE_BUTTON.LEFT) return;
      const animator = this._view3D.animator;
      const activeAnimationIdx = animator.activeAnimationIndex;
      const activeAnimationAction = animator.actions[activeAnimationIdx];
      evt.preventDefault();
      window.addEventListener(EVENTS.MOUSE_MOVE, this._onMouseMove, false);
      window.addEventListener(EVENTS.MOUSE_UP, this._onMouseUp, false);
      this._rootBbox = this._trackEl.getBoundingClientRect();
      this._showThumb();
      this._origTimeScale = activeAnimationAction.getEffectiveTimeScale();
      this._setAnimationTimeScale(0);
      this._updateAnimationProgress(evt.pageX);
    };
    this._onMouseMove = evt => {
      evt.preventDefault();
      this._updateAnimationProgress(evt.pageX);
    };
    this._onMouseUp = () => {
      window.removeEventListener(EVENTS.MOUSE_MOVE, this._onMouseMove, false);
      window.removeEventListener(EVENTS.MOUSE_UP, this._onMouseUp, false);
      this._hideThumb();
      this._setAnimationTimeScale(this._origTimeScale);
    };
    this._onTouchStart = evt => {
      if (evt.touches.length > 1) return;
      const touch = evt.touches[0];
      const animator = this._view3D.animator;
      const activeAnimationIdx = animator.activeAnimationIndex;
      const activeAnimationAction = animator.actions[activeAnimationIdx];
      this._rootBbox = this._trackEl.getBoundingClientRect();
      this._showThumb();
      this._firstTouch = {
        x: touch.pageX,
        y: touch.pageY
      };
      this._origTimeScale = activeAnimationAction.getEffectiveTimeScale();
      this._setAnimationTimeScale(0);
      this._updateAnimationProgress(touch.pageX);
    };
    this._onTouchMove = evt => {
      // Only the one finger motion should be considered
      if (evt.touches.length > 1 || this._scrolling) return;
      const touch = evt.touches[0];
      const scrollable = this._view3D.scrollable;
      const firstTouch = this._firstTouch;
      if (firstTouch) {
        if (scrollable) {
          const delta = new Vector2(touch.pageX, touch.pageY).sub(new Vector2(firstTouch.x, firstTouch.y));
          if (Math.abs(delta.y) > Math.abs(delta.x)) {
            // Assume Scrolling
            this._scrolling = true;
            this._release();
            return;
          }
        }
        this._firstTouch = null;
      }
      if (evt.cancelable) {
        evt.preventDefault();
      }
      evt.stopPropagation();
      this._setAnimationTimeScale(0);
      this._updateAnimationProgress(touch.pageX);
    };
    this._onTouchEnd = evt => {
      if (evt.touches.length > 0) return;
      this._release();
      this._scrolling = false;
    };
    this._updateAnimationProgress = x => {
      const view3D = this._view3D;
      const rootBbox = this._rootBbox;
      const thumb = this._thumbEl;
      const animator = view3D.animator;
      const activeAnimationIdx = animator.activeAnimationIndex;
      const activeAnimationClip = animator.activeAnimation;
      const activeAnimationAction = animator.actions[activeAnimationIdx];
      if (!activeAnimationClip || !activeAnimationAction) return;
      const progress = (x - rootBbox.x) / rootBbox.width;
      const newTime = clamp(progress, 0, 1) * activeAnimationClip.duration;
      activeAnimationAction.time = newTime;
      const newTimeSeconds = Math.floor(newTime);
      const newTimeFractions = Math.floor(100 * (newTime - newTimeSeconds));
      const padNumber = val => `${"0".repeat(Math.max(2 - val.toString().length, 0))}${val}`;
      thumb.setAttribute("data-time", `${padNumber(newTimeSeconds)}:${padNumber(newTimeFractions)}`);
      view3D.renderer.renderSingleFrame();
    };
    this.position = position;
    this.order = order;
    this._view3D = view3D;
    this._controlBar = controlBar;
    this._createElements();
    this._enabled = false;
    this._firstTouch = null;
    this._scrolling = false;
    this._origTimeScale = 1;
  }
  get element() {
    return this._rootEl;
  }
  get enabled() {
    return this._enabled;
  }
  /**
   * Enable control item
   */
  enable() {
    const view3D = this._view3D;
    if (this._enabled) return;
    this._rootBbox = this._trackEl.getBoundingClientRect();
    this._enabled = true;
    view3D.on(EVENTS$1.RESIZE, this._onResize);
    view3D.on(EVENTS$1.RENDER, this._onRender);
    this._fill(0);
    this.enableInput();
  }
  /**
   * Disable control item
   */
  disable() {
    const view3D = this._view3D;
    if (!this._enabled) return;
    this._enabled = false;
    view3D.off(EVENTS$1.RESIZE, this._onResize);
    view3D.off(EVENTS$1.RENDER, this._onRender);
    this.disableInput();
  }
  /**
   * Enable mouse / touch inputs
   */
  enableInput() {
    const root = this._rootEl;
    const view3D = this._view3D;
    this._firstTouch = null;
    this._scrolling = false;
    if (view3D.animator.animationCount <= 0) return;
    root.addEventListener(EVENTS.MOUSE_DOWN, this._onMouseDown);
    root.addEventListener(EVENTS.TOUCH_START, this._onTouchStart, {
      passive: false
    });
    root.addEventListener(EVENTS.TOUCH_MOVE, this._onTouchMove, {
      passive: false
    });
    root.addEventListener(EVENTS.TOUCH_END, this._onTouchEnd);
  }
  /**
   * Disable mouse / touch inputs
   */
  disableInput() {
    const root = this._rootEl;
    root.removeEventListener(EVENTS.MOUSE_DOWN, this._onMouseDown);
    window.removeEventListener(EVENTS.MOUSE_MOVE, this._onMouseMove, false);
    window.removeEventListener(EVENTS.MOUSE_UP, this._onMouseUp, false);
    root.removeEventListener(EVENTS.TOUCH_START, this._onTouchStart);
    root.removeEventListener(EVENTS.TOUCH_MOVE, this._onTouchMove);
    root.removeEventListener(EVENTS.TOUCH_END, this._onTouchEnd);
  }
  _createElements() {
    const controlBar = this._controlBar;
    const className = Object.assign(Object.assign({}, controlBar.className), ControlBar.DEFAULT_CLASS);
    const root = document.createElement(EL_DIV);
    root.classList.add(className.PROGRESS_ROOT);
    root.draggable = false;
    const track = document.createElement(EL_DIV);
    track.classList.add(className.PROGRESS_TRACK);
    const thumb = document.createElement(EL_DIV);
    thumb.classList.add(className.PROGRESS_THUMB);
    const filler = document.createElement(EL_DIV);
    filler.classList.add(className.PROGRESS_FILLER);
    track.appendChild(filler);
    track.appendChild(thumb);
    root.appendChild(track);
    this._rootEl = root;
    this._trackEl = track;
    this._thumbEl = thumb;
    this._fillerEl = filler;
  }
  _fill(progress) {
    this._fillerEl.style.width = `${progress * 100}%`;
    this._thumbEl.style.transform = `translateX(${progress * this._rootBbox.width}px)`;
  }
  _release() {
    this._hideThumb();
    this._setAnimationTimeScale(this._origTimeScale);
  }
  _showThumb() {
    const thumb = this._thumbEl;
    const controlBar = this._controlBar;
    const className = Object.assign(Object.assign({}, controlBar.className), ControlBar.DEFAULT_CLASS);
    thumb.classList.add(className.VISIBLE);
  }
  _hideThumb() {
    const thumb = this._thumbEl;
    const controlBar = this._controlBar;
    const className = Object.assign(Object.assign({}, controlBar.className), ControlBar.DEFAULT_CLASS);
    thumb.classList.remove(className.VISIBLE);
  }
  _setAnimationTimeScale(timeScale) {
    const view3D = this._view3D;
    const animator = view3D.animator;
    const activeAnimationIdx = animator.activeAnimationIndex;
    const activeAnimationClip = animator.activeAnimation;
    const activeAnimationAction = animator.actions[activeAnimationIdx];
    if (!activeAnimationClip || !activeAnimationAction) return;
    activeAnimationAction.setEffectiveTimeScale(timeScale);
  }
}

/*
 * "Play Arrow" Icon from [Google Material Design Icons](https://github.com/google/material-design-icons)
 * Licensed under [Apache Lincese Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE)
 */
// eslint-disable-next-line quotes
var PlayIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M16 37.85V9.85L38 23.85Z"/></svg>';

/*
 * "Pause" Icon from [Google Material Design Icons](https://github.com/google/material-design-icons)
 * Licensed under [Apache Lincese Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE)
 */
// eslint-disable-next-line quotes
var PauseIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M28.25 38V10H36V38ZM12 38V10H19.75V38Z"/></svg>';

/**
 * Show animation play/ pause button, use with ControlBar
 */
class PlayButton {
  /** */
  constructor(view3D, controlBar, {
    position = ControlBar.POSITION.LEFT,
    order = 9999
  } = {}) {
    this._updateIcon = () => {
      const view3D = this._view3D;
      if (view3D.animator.paused !== this._paused) {
        this._paused = view3D.animator.paused;
        this._element.innerHTML = this._paused ? PlayIcon : PauseIcon;
      }
    };
    this._onClick = () => {
      const animator = this._view3D.animator;
      if (animator.paused) {
        animator.resume();
      } else {
        animator.pause();
      }
      this._updateIcon();
    };
    this.position = position;
    this.order = order;
    this._view3D = view3D;
    this._element = this._createButton(controlBar);
    this._enabled = false;
    this._paused = true;
  }
  get element() {
    return this._element;
  }
  get enabled() {
    return this._enabled;
  }
  /**
   * Enable control item
   */
  enable() {
    if (this._enabled) return;
    this._view3D.on(EVENTS$1.RENDER, this._updateIcon);
    this._element.addEventListener(EVENTS.CLICK, this._onClick);
    this._enabled = true;
  }
  /**
   * Disable control item
   */
  disable() {
    if (!this._enabled) return;
    this._view3D.off(EVENTS$1.RENDER, this._updateIcon);
    this._element.removeEventListener(EVENTS.CLICK, this._onClick);
    this._enabled = false;
  }
  _createButton(controlBar) {
    const root = document.createElement(EL_BUTTON);
    const className = Object.assign(Object.assign({}, controlBar.className), ControlBar.DEFAULT_CLASS);
    root.classList.add(className.CONTROLS_ITEM);
    root.innerHTML = PlayIcon;
    return root;
  }
}

/**
 * Show animation selector, use with ControlBar
 */
class AnimationSelector {
  /** */
  constructor(view3D, controlBar, {
    position = ControlBar.POSITION.LEFT,
    order = 9999
  } = {}) {
    this._updateAnimations = () => {
      const view3D = this._view3D;
      const controlBar = this._controlBar;
      const animator = view3D.animator;
      const root = this._rootEl;
      const name = this._nameEl;
      const itemList = this._itemListEl;
      const animations = animator.clips;
      const className = Object.assign(Object.assign({}, controlBar.className), ControlBar.DEFAULT_CLASS);
      while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
      }
      if (animations.length <= 0) {
        root.classList.add(className.DISABLED);
        return;
      }
      root.classList.remove(className.DISABLED);
      const elements = animations.map(animation => {
        const el = document.createElement(EL_DIV);
        el.classList.add(className.ANIMATION_ITEM);
        el.innerHTML = animation.name;
        return el;
      });
      const selectAnimation = (animation, idx) => {
        elements[idx].classList.add(className.ANIMATION_SELECTED);
        name.innerHTML = animation.name;
      };
      animations.forEach((animation, idx) => {
        const el = elements[idx];
        if (idx === animator.activeAnimationIndex) {
          selectAnimation(animation, idx);
        }
        el.addEventListener(EVENTS.CLICK, evt => {
          const wasPaused = animator.paused;
          animator.play(idx);
          if (wasPaused) {
            animator.pause();
          }
          elements.forEach(element => {
            element.classList.remove(className.ANIMATION_SELECTED);
          });
          selectAnimation(animation, idx);
          this._hideList();
          evt.stopPropagation();
        });
        itemList.appendChild(el);
      });
    };
    this._toggleList = evt => {
      const controlBar = this._controlBar;
      const itemList = this._itemListEl;
      const className = Object.assign(Object.assign({}, controlBar.className), ControlBar.DEFAULT_CLASS);
      itemList.classList.toggle(className.VISIBLE);
      if (itemList.classList.contains(className.VISIBLE)) {
        this._view3D.rootEl.addEventListener(EVENTS.CLICK, this._hideList);
      }
      evt.stopPropagation();
    };
    this._hideList = () => {
      const controlBar = this._controlBar;
      const itemList = this._itemListEl;
      const className = Object.assign(Object.assign({}, controlBar.className), ControlBar.DEFAULT_CLASS);
      if (itemList.classList.contains(className.VISIBLE)) {
        itemList.classList.remove(className.VISIBLE);
      }
    };
    this.position = position;
    this.order = order;
    this._view3D = view3D;
    this._controlBar = controlBar;
    this._createElements();
    this._enabled = false;
  }
  get element() {
    return this._rootEl;
  }
  get enabled() {
    return this._enabled;
  }
  /**
   * Enable control item
   */
  enable() {
    if (this._enabled) return;
    if (this._view3D.initialized) {
      this._updateAnimations();
    }
    this._view3D.on(EVENTS$1.MODEL_CHANGE, this._updateAnimations);
    this._nameEl.addEventListener(EVENTS.CLICK, this._toggleList);
    this._enabled = true;
  }
  /**
   * Disable control item
   */
  disable() {
    if (!this._enabled) return;
    this._view3D.off(EVENTS$1.MODEL_CHANGE, this._updateAnimations);
    this._view3D.rootEl.removeEventListener(EVENTS.CLICK, this._hideList);
    this._nameEl.removeEventListener(EVENTS.CLICK, this._toggleList);
    this._enabled = false;
  }
  _createElements() {
    const controlBar = this._controlBar;
    const root = document.createElement(EL_DIV);
    const name = document.createElement(EL_DIV);
    const itemList = document.createElement(EL_DIV);
    const className = Object.assign(Object.assign({}, controlBar.className), ControlBar.DEFAULT_CLASS);
    root.classList.add(className.CONTROLS_ITEM);
    root.classList.add(className.DISABLED);
    name.classList.add(className.ANIMATION_NAME);
    itemList.classList.add(className.ANIMATION_LIST);
    root.appendChild(name);
    root.appendChild(itemList);
    this._rootEl = root;
    this._nameEl = name;
    this._itemListEl = itemList;
  }
}

/*
 * "Fullscreen" Icon from [Google Material Design Icons](https://github.com/google/material-design-icons)
 * Licensed under [Apache Lincese Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE)
 */
// eslint-disable-next-line quotes
var FullscreenIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M10 38v-9.65h3V35h6.65v3Zm0-18.35V10h9.65v3H13v6.65ZM28.35 38v-3H35v-6.65h3V38ZM35 19.65V13h-6.65v-3H38v9.65Z"/></svg>';

const requestFullscreen = ["requestFullscreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "webkitCancelFullScreen", "mozRequestFullScreen", "msRequestFullscreen"];
const fullscreenElement = ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"];
const exitFullscreen = ["exitFullscreen", "webkitExitFullscreen", "webkitCancelFullScreen", "mozCancelFullScreen", "msExitFullscreen"];
/**
 * Show fullscreen enter / exit button, use with ControlBar
 */
class FullscreenButton {
  /** */
  constructor(view3D, controlBar, {
    position = ControlBar.POSITION.RIGHT,
    order = 9999
  } = {}) {
    this._onClick = () => {
      const root = this._view3D.rootEl;
      if (this._isFullscreen()) {
        this._exitFullscreen();
      } else {
        this._requestFullscreen(root);
      }
    };
    this.position = position;
    this.order = order;
    this._view3D = view3D;
    this._element = this._createButton(controlBar);
    this._enabled = false;
  }
  get element() {
    return this._element;
  }
  get enabled() {
    return this._enabled;
  }
  /**
   * Enable control item
   */
  enable() {
    if (this._enabled) return;
    this._element.addEventListener(EVENTS.CLICK, this._onClick);
    this._enabled = true;
  }
  /**
   * Disable control item
   */
  disable() {
    if (!this._enabled) return;
    this._element.removeEventListener(EVENTS.CLICK, this._onClick);
    this._enabled = false;
  }
  _isFullscreen() {
    if (!document) return false;
    for (const key of fullscreenElement) {
      if (document[key]) return true;
    }
    return false;
  }
  _requestFullscreen(el) {
    for (const key of requestFullscreen) {
      const request = el[key];
      if (request) {
        request.call(el);
      }
    }
  }
  _exitFullscreen() {
    for (const key of exitFullscreen) {
      const exit = document[key];
      if (exit) {
        exit.call(document);
      }
    }
  }
  _createButton(controlBar) {
    const root = document.createElement(EL_BUTTON);
    const className = Object.assign(Object.assign({}, controlBar.className), ControlBar.DEFAULT_CLASS);
    root.classList.add(className.CONTROLS_ITEM);
    root.innerHTML = FullscreenIcon;
    return root;
  }
}

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Show navigation gizmos, use with ControlBar
 */
class NavigationGizmo {
  /** */
  constructor(view3D, controlBar, {
    axisWidth = 5,
    font = "14px sans-serif",
    xAxisColor = "#ef2746",
    yAxisColor = "#a7c031",
    zAxisColor = "#6571a6"
  } = {}) {
    /**
     *
     */
    this._onRender = () => {
      const view3D = this._view3D;
      const ctx = this._ctx;
      const canvasSize = this._canvasSize;
      const camera = view3D.camera.threeCamera;
      if (!ctx || !view3D.model) return;
      ctx.clearRect(0, 0, canvasSize.x, canvasSize.y);
      const quat = camera.quaternion.clone();
      quat.invert();
      const xPos = new Vector3(1, 0, 0).applyQuaternion(quat);
      const yPos = new Vector3(0, 1, 0).applyQuaternion(quat);
      const zPos = new Vector3(0, 0, 1).applyQuaternion(quat);
      const center = new Vector2(0.5, 0.5).multiply(canvasSize);
      ctx.lineCap = "round";
      ctx.lineWidth = this.axisWidth;
      const xColor = new Color(this.xAxisColor);
      const yColor = new Color(this.yAxisColor);
      const zColor = new Color(this.zAxisColor);
      // Sorted by distance, ASC
      const axisPositions = [{
        idx: 0,
        axis: "X",
        color: xColor,
        pos: xPos,
        negative: false
      }, {
        idx: 1,
        axis: "Y",
        color: yColor,
        pos: yPos,
        negative: false
      }, {
        idx: 2,
        axis: "Z",
        color: zColor,
        pos: zPos,
        negative: false
      }, {
        idx: 3,
        axis: "X",
        color: xColor,
        pos: xPos.clone().negate(),
        negative: true
      }, {
        idx: 4,
        axis: "Y",
        color: yColor,
        pos: yPos.clone().negate(),
        negative: true
      }, {
        idx: 5,
        axis: "Z",
        color: zColor,
        pos: zPos.clone().negate(),
        negative: true
      }].sort((a, b) => a.pos.z - b.pos.z);
      axisPositions.forEach(({
        axis,
        pos,
        color,
        negative,
        idx
      }, renderIdx) => {
        const screenPos = this._getScreenPos(pos);
        const alpha = pos.z >= 0 ? 1 : 0.6;
        const colorRGBA = this._getColorRGBAString(color, alpha);
        if (!negative) {
          ctx.strokeStyle = colorRGBA;
          ctx.beginPath();
          ctx.moveTo(center.x, center.y);
          ctx.lineTo(screenPos.x, screenPos.y);
          ctx.stroke();
          ctx.globalCompositeOperation = "destination-out";
          ctx.fillStyle = "white";
          ctx.beginPath();
          ctx.ellipse(screenPos.x, screenPos.y, 10, 10, 0, 0, 2 * Math.PI);
          ctx.fill();
          ctx.globalCompositeOperation = "source-over";
        }
        ctx.fillStyle = colorRGBA;
        ctx.beginPath();
        ctx.ellipse(screenPos.x, screenPos.y, 10, 10, 0, 0, 2 * Math.PI);
        ctx.fill();
        if (!negative) {
          ctx.font = this.font;
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(axis, screenPos.x, screenPos.y);
        }
        const axisEl = this._axisEls[idx];
        axisEl.style.left = `${screenPos.x}px`;
        axisEl.style.top = `${screenPos.y}px`;
        axisEl.style.zIndex = renderIdx.toString();
      });
    };
    this.axisWidth = axisWidth;
    this.font = font;
    this.xAxisColor = xAxisColor;
    this.yAxisColor = yAxisColor;
    this.zAxisColor = zAxisColor;
    this._view3D = view3D;
    this._createElement(controlBar);
    this._ctx = this._canvasEl.getContext("2d");
    this._enabled = false;
    this._canvasSize = new Vector2();
  }
  get element() {
    return this._rootEl;
  }
  get enabled() {
    return this._enabled;
  }
  /**
   * Enable control item
   */
  enable() {
    if (this._enabled || !this._ctx) return;
    const root = this._rootEl;
    const canvas = this._canvasEl;
    const view3D = this._view3D;
    this._enabled = true;
    view3D.rootEl.appendChild(root);
    view3D.on(EVENTS$1.RENDER, this._onRender);
    this._canvasSize.set(canvas.clientWidth, canvas.clientHeight);
    canvas.width = this._canvasSize.x;
    canvas.height = this._canvasSize.y;
    const poses = [new Pose(-90, 0, 0), new Pose(0, 90, 0), new Pose(0, 0, 0), new Pose(90, 0, 0), new Pose(0, -90, 0), new Pose(180, 0, 0)];
    poses.forEach(pose => {
      pose.pivot.copy(view3D.camera.defaultPose.pivot);
    });
    this._axisClickListeners = this._axisEls.map((el, idx) => {
      const targetPose = poses[idx];
      const listener = () => {
        void view3D.camera.reset(ANIMATION_DURATION, EASING$1, targetPose);
      };
      el.addEventListener(EVENTS.CLICK, listener);
      return listener;
    });
  }
  /**
   * Disable control item
   */
  disable() {
    if (!this._enabled) return;
    this._enabled = false;
    const root = this._view3D.rootEl;
    const element = this._rootEl;
    if (element && element.parentElement === root) {
      root.removeChild(element);
    }
    this._view3D.off(EVENTS$1.RENDER, this._onRender);
    this._axisEls.forEach((el, idx) => {
      const listener = this._axisClickListeners[idx];
      el.removeEventListener(EVENTS.CLICK, listener);
    });
    this._axisClickListeners = [];
  }
  _createElement(controlBar) {
    const root = document.createElement(EL_DIV);
    const canvas = document.createElement("canvas");
    const axisEls = range(6).map(() => document.createElement(EL_DIV));
    const className = Object.assign(Object.assign({}, controlBar.className), ControlBar.DEFAULT_CLASS);
    root.classList.add(className.GIZMO_ROOT);
    root.appendChild(canvas);
    axisEls.forEach(el => {
      el.classList.add(className.GIZMO_AXIS);
      root.appendChild(el);
    });
    this._rootEl = root;
    this._canvasEl = canvas;
    this._axisEls = axisEls;
  }
  _getScreenPos(pos) {
    const canvasSize = this._canvasSize;
    const screenPos = new Vector2(pos.x, -pos.y).multiplyScalar(0.8).addScalar(1).multiplyScalar(0.5).multiply(canvasSize);
    return screenPos;
  }
  _getColorRGBAString(color, alpha) {
    return `rgba(${Math.floor(color.r * 255)},${Math.floor(color.g * 255)},${Math.floor(color.b * 255)},${alpha})`;
  }
}

/*
 * "Replay" Icon from [Google Material Design Icons](https://github.com/google/material-design-icons)
 * Licensed under [Apache Lincese Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE)
 */
// eslint-disable-next-line quotes
var ResetIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M24 44q-3.75 0-7.025-1.4-3.275-1.4-5.725-3.85Q8.8 36.3 7.4 33.025 6 29.75 6 26h3q0 6.25 4.375 10.625T24 41q6.25 0 10.625-4.375T39 26q0-6.25-4.25-10.625T24.25 11H23.1l3.65 3.65-2.05 2.1-7.35-7.35 7.35-7.35 2.05 2.05-3.9 3.9H24q3.75 0 7.025 1.4 3.275 1.4 5.725 3.85 2.45 2.45 3.85 5.725Q42 22.25 42 26q0 3.75-1.4 7.025-1.4 3.275-3.85 5.725-2.45 2.45-5.725 3.85Q27.75 44 24 44Z"/></svg>';

/**
 * Show camera reset button, use with ControlBar
 */
class CameraResetButton {
  /** */
  constructor(view3D, controlBar, {
    position = ControlBar.POSITION.RIGHT,
    order = 9999,
    duration = 500
  } = {}) {
    this._onClick = () => {
      void this._view3D.camera.reset(this.duration);
    };
    this.position = position;
    this.order = order;
    this.duration = duration;
    this._view3D = view3D;
    this._element = this._createButton(controlBar);
    this._enabled = false;
  }
  get element() {
    return this._element;
  }
  get enabled() {
    return this._enabled;
  }
  /**
   * Enable control item
   */
  enable() {
    if (this._enabled) return;
    this._element.addEventListener(EVENTS.CLICK, this._onClick);
    this._enabled = true;
  }
  /**
   * Disable control item
   */
  disable() {
    if (!this._enabled) return;
    this._element.removeEventListener(EVENTS.CLICK, this._onClick);
    this._enabled = false;
  }
  _createButton(controlBar) {
    const root = document.createElement(EL_BUTTON);
    const className = Object.assign(Object.assign({}, controlBar.className), ControlBar.DEFAULT_CLASS);
    root.classList.add(className.CONTROLS_ITEM);
    root.innerHTML = ResetIcon;
    return root;
  }
}

/**
 * Add a bar at the bottom of the canvas that can control animation and other things
 */
class ControlBar {
  /** */
  constructor({
    autoHide = true,
    className = {},
    progressBar = true,
    playButton = true,
    animationSelector = true,
    fullscreenButton = true,
    navigationGizmo = true,
    cameraResetButton = true
  } = {}) {
    /**
     * Show control bar
     */
    this.show = () => {
      const root = this._rootEl;
      const className = Object.assign(Object.assign({}, ControlBar.DEFAULT_CLASS), this.className);
      root.classList.add(className.VISIBLE);
    };
    /**
     * Hide control bar
     */
    this.hide = () => {
      const wrapper = this._rootEl;
      const className = Object.assign(Object.assign({}, ControlBar.DEFAULT_CLASS), this.className);
      wrapper.classList.remove(className.VISIBLE);
    };
    this._updateModelParams = () => {
      this._items.forEach(item => {
        // Re-enable control items for new View3D instance
        item.disable();
        item.enable();
      });
    };
    this._hideAfterDelay = () => {
      const {
        delay = 0
      } = getObjectOption(this.autoHide);
      if (this._autoHideTimer) {
        window.clearTimeout(this._autoHideTimer);
        this._autoHideTimer = -1;
      }
      if (delay <= 0) {
        this.hide();
      } else {
        this._autoHideTimer = window.setTimeout(this.hide, delay);
      }
    };
    this.autoHide = autoHide;
    this.className = className;
    this.progressBar = progressBar;
    this.playButton = playButton;
    this.animationSelector = animationSelector;
    this.fullscreenButton = fullscreenButton;
    this.navigationGizmo = navigationGizmo;
    this.cameraResetButton = cameraResetButton;
    this._items = [];
    this._initElements();
    this._autoHideTimer = -1;
  }
  get rootEl() {
    return this._rootEl;
  }
  get items() {
    return this._items;
  }
  init(view3D) {
    return __awaiter(this, void 0, void 0, function* () {
      this._attachElements(view3D);
      if (view3D.model) {
        this._updateModelParams();
      }
      this._items = this._createDefaultItems(view3D);
      this._addItemElements();
      this._items.forEach(item => {
        item.enable();
      });
      view3D.on(EVENTS$1.MODEL_CHANGE, this._updateModelParams);
      this.show();
      this._setupAutoHide(view3D);
    });
  }
  teardown(view3D) {
    const root = view3D.rootEl;
    root.removeEventListener(EVENTS.POINTER_ENTER, this.show);
    root.removeEventListener(EVENTS.POINTER_LEAVE, this._hideAfterDelay);
    this._removeElements(view3D);
    this._items.forEach(item => {
      item.disable();
    });
    this._items = [];
    view3D.off(EVENTS$1.MODEL_CHANGE, this._updateModelParams);
    window.clearTimeout(this._autoHideTimer);
  }
  _initElements() {
    const className = Object.assign(Object.assign({}, ControlBar.DEFAULT_CLASS), this.className);
    const rootEl = document.createElement(EL_DIV);
    rootEl.classList.add(className.ROOT);
    this._rootEl = rootEl;
    const bgEl = document.createElement(EL_DIV);
    bgEl.classList.add(className.CONTROLS_BG);
    rootEl.appendChild(bgEl);
    const topControlsWrapper = document.createElement(EL_DIV);
    const sideControlsWrapper = document.createElement(EL_DIV);
    const leftControlsWrapper = document.createElement(EL_DIV);
    const rightControlsWrapper = document.createElement(EL_DIV);
    topControlsWrapper.classList.add(className.CONTROLS_TOP);
    sideControlsWrapper.classList.add(className.CONTROLS_SIDE);
    leftControlsWrapper.classList.add(className.CONTROLS_LEFT);
    rightControlsWrapper.classList.add(className.CONTROLS_RIGHT);
    rootEl.appendChild(topControlsWrapper);
    sideControlsWrapper.appendChild(leftControlsWrapper);
    sideControlsWrapper.appendChild(rightControlsWrapper);
    rootEl.appendChild(sideControlsWrapper);
    this._topControlsWrapper = topControlsWrapper;
    this._leftControlsWrapper = leftControlsWrapper;
    this._rightControlsWrapper = rightControlsWrapper;
  }
  _addItemElements() {
    const topControlsWrapper = this._topControlsWrapper;
    const leftControlsWrapper = this._leftControlsWrapper;
    const rightControlsWrapper = this._rightControlsWrapper;
    const positionedItems = this._items.filter(item => item.position && item.order != null);
    const posMap = {
      [ControlBar.POSITION.TOP]: {
        parentEl: topControlsWrapper,
        items: []
      },
      [ControlBar.POSITION.LEFT]: {
        parentEl: leftControlsWrapper,
        items: []
      },
      [ControlBar.POSITION.RIGHT]: {
        parentEl: rightControlsWrapper,
        items: []
      }
    };
    positionedItems.forEach(item => {
      posMap[item.position].items.push(item);
    });
    Object.keys(posMap).forEach(posKey => {
      const position = posMap[posKey];
      const {
        parentEl,
        items
      } = position;
      items.sort((a, b) => a.order - b.order);
      items.forEach(item => {
        parentEl.appendChild(item.element);
      });
    });
  }
  _attachElements(view3D) {
    view3D.rootEl.appendChild(this._rootEl);
  }
  _removeElements(view3D) {
    const wrapper = this._rootEl;
    const topControlsWrapper = this._topControlsWrapper;
    const leftControlsWrapper = this._leftControlsWrapper;
    const rightControlsWrapper = this._rightControlsWrapper;
    [topControlsWrapper, leftControlsWrapper, rightControlsWrapper].forEach(itemWrapper => {
      while (itemWrapper.firstChild) {
        itemWrapper.removeChild(itemWrapper.firstChild);
      }
    });
    if (wrapper.parentElement === view3D.rootEl) {
      view3D.rootEl.removeChild(wrapper);
    }
  }
  _setupAutoHide(view3D) {
    if (!this.autoHide) return;
    const {
      initialDelay = 3000
    } = getObjectOption(this.autoHide);
    const root = view3D.rootEl;
    this._autoHideTimer = window.setTimeout(() => {
      this.hide();
    }, initialDelay);
    root.addEventListener(EVENTS.POINTER_ENTER, this.show);
    root.addEventListener(EVENTS.POINTER_LEAVE, this._hideAfterDelay);
  }
  _createDefaultItems(view3D) {
    const items = [];
    if (this.progressBar) {
      items.push(new AnimationProgressBar(view3D, this, getObjectOption(this.progressBar)));
    }
    if (this.playButton) {
      items.push(new PlayButton(view3D, this, getObjectOption(this.playButton)));
    }
    if (this.animationSelector) {
      items.push(new AnimationSelector(view3D, this, getObjectOption(this.animationSelector)));
    }
    if (this.cameraResetButton) {
      items.push(new CameraResetButton(view3D, this, getObjectOption(this.cameraResetButton)));
    }
    if (this.fullscreenButton) {
      items.push(new FullscreenButton(view3D, this, getObjectOption(this.fullscreenButton)));
    }
    if (this.navigationGizmo) {
      items.push(new NavigationGizmo(view3D, this, getObjectOption(this.navigationGizmo)));
    }
    return items;
  }
}
/**
 * Default class names that ControlBar uses
 * @type {object}
 * @property {"view3d-control-bar"} ROOT A class name for wrapper element
 * @property {"visible"} VISIBLE A class name for visible elements
 * @property {"disabled"} DISABLED A class name for disabled elements
 * @property {"view3d-controls-background"} CONTROLS_BG A class name for background element
 * @property {"view3d-side-controls"} CONTROLS_SIDE A class name for controls wrapper element that includes both left & right controls
 * @property {"view3d-top-controls"} CONTROLS_TOP A class name for controls wrapper element that is placed on the top inside the control bar
 * @property {"view3d-left-controls"} CONTROLS_LEFT A class name for controls wrapper element that is placed on the left inside the control bar
 * @property {"view3d-right-controls"} CONTROLS_RIGHT A class name for controls wrapper element that is placed on the right inside the control bar
 * @property {"view3d-control-item"} CONTROLS_ITEM A class name for control item elements
 * @property {"view3d-progress-bar"} PROGRESS_ROOT A class name for root element of the progress bar
 * @property {"view3d-progress-track"} PROGRESS_TRACK A class name for progress track element of the progress bar
 * @property {"view3d-progress-thumb"} PROGRESS_THUMB A class name for thumb element of the progress bar
 * @property {"view3d-progress-filler"} PROGRESS_FILLER A class name for progress filler element of the progress bar
 * @property {"view3d-animation-name"} ANIMATION_NAME A class name for animation name element of the animation selector
 * @property {"view3d-animation-list"} ANIMATION_LIST A class name for animation list element of the animation selector
 * @property {"view3d-animation-item"} ANIMATION_ITEM A class name for animation list item element of the animation selector
 * @property {"selected"} ANIMATION_SELECTED A class name for selected animation list item element of the animation selector
 * @property {"view3d-gizmo"} GIZMO_ROOT A class name for root element of the navigation gizmo
 * @property {"view3d-gizmo-axis"} GIZMO_AXIS A class name for axis button element of the navigation gizmo
 */
ControlBar.DEFAULT_CLASS = {
  ROOT: "view3d-control-bar",
  VISIBLE: "visible",
  DISABLED: "disabled",
  CONTROLS_BG: "view3d-controls-background",
  CONTROLS_SIDE: "view3d-side-controls",
  CONTROLS_TOP: "view3d-top-controls",
  CONTROLS_LEFT: "view3d-left-controls",
  CONTROLS_RIGHT: "view3d-right-controls",
  CONTROLS_ITEM: "view3d-control-item",
  PROGRESS_ROOT: "view3d-progress-bar",
  PROGRESS_TRACK: "view3d-progress-track",
  PROGRESS_THUMB: "view3d-progress-thumb",
  PROGRESS_FILLER: "view3d-progress-filler",
  ANIMATION_NAME: "view3d-animation-name",
  ANIMATION_LIST: "view3d-animation-list",
  ANIMATION_ITEM: "view3d-animation-item",
  ANIMATION_SELECTED: "selected",
  GIZMO_ROOT: "view3d-gizmo",
  GIZMO_AXIS: "view3d-gizmo-axis"
};
/**
 * Position constant
 * @type {object}
 * @property {"top"} TOP
 * @property {"left"} LEFT
 * @property {"right"} RIGHT
 */
ControlBar.POSITION = {
  TOP: "top",
  LEFT: "left",
  RIGHT: "right"
};

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
/**
 * Check whether View3D can be initialized without any issues.
 * View3D supports browsers with es6+ support.
 * @param {object} [features={}] Features to test
 * @returns {boolean} A boolean value indicating whether View3D is avilable
 */
const isAvailable = ({
  webGL = true,
  fetch = true,
  stream = true,
  wasm = true
} = {}) => {
  if (webGL) {
    const webglAvailable = checkWebGLAvailability();
    if (!webglAvailable) return false;
  }
  if (fetch) {
    const fetchAvailable = window && window.fetch;
    if (!fetchAvailable) return false;
  }
  if (stream) {
    const streamAvailable = window && window.ReadableStream;
    if (!streamAvailable) return false;
  }
  if (wasm) {
    const wasmAvailable = checkWASMAvailability();
    if (!wasmAvailable) return false;
  }
  return true;
};
const checkWebGLAvailability = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!window.WebGLRenderingContext && !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch (e) {
    return false;
  }
};
const checkWASMAvailability = () => {
  try {
    if (typeof WebAssembly === "object" && typeof WebAssembly.instantiate === "function") {
      const wasmModule = new WebAssembly.Module(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00));
      if (wasmModule instanceof WebAssembly.Module) {
        return new WebAssembly.Instance(wasmModule) instanceof WebAssembly.Instance;
      }
    }
  } catch (e) {
    return false;
  }
};

const withMethods = (prototype, attr) => {
  [Component.prototype, View3D.prototype].forEach(proto => {
    Object.getOwnPropertyNames(proto).filter(name => name.charAt(0) !== "_" && name !== "constructor").forEach(name => {
      const descriptor = Object.getOwnPropertyDescriptor(proto, name);
      if (descriptor.value) {
        // Public Function
        Object.defineProperty(prototype, name, {
          value: function (...args) {
            return descriptor.value.call(this[attr], ...args);
          }
        });
      } else {
        const getterDescriptor = {};
        if (descriptor.get) {
          getterDescriptor.get = function () {
            var _a;
            return this[attr] && ((_a = descriptor.get) === null || _a === void 0 ? void 0 : _a.call(this[attr]));
          };
        }
        if (descriptor.set) {
          getterDescriptor.set = function (...args) {
            var _a;
            return (_a = descriptor.set) === null || _a === void 0 ? void 0 : _a.call(this[attr], ...args);
          };
        }
        Object.defineProperty(prototype, name, getterDescriptor);
      }
    });
  });
};

const getValidProps = propsObj => {
  return Object.keys(propsObj).reduce((props, propName) => {
    if (propsObj[propName] != null) {
      props[propName] = propsObj[propName];
    }
    return props;
  }, {});
};

const ChangeEnvmaps = (view3d, envmap) => __awaiter(void 0, void 0, void 0, function* () {
  yield view3d.scene.setEnvMap(envmap);
});

let view3d;
const View3DPlayer = props => {
  let root = useRef();
  const loadinit = () => __awaiter(void 0, void 0, void 0, function* () {
    yield view3d.init();
    if (props.onLoad) {
      props.onLoad(view3d);
      let imgUrl = screenshotImageUrl(view3d);
      if (props.onImageUpdate) {
        props.onImageUpdate(imgUrl);
      }
    }
    view3d.on("inputStart", evt => {
      if (props.onImageUpdate) {
        let imgUrl = screenshotImageUrl(view3d);
        props.onImageUpdate(imgUrl);
      }
    });
    view3d.on("inputEnd", evt => {
      if (props.onImageUpdate) {
        let imgUrl = screenshotImageUrl(view3d);
        props.onImageUpdate(imgUrl);
      }
    });
    view3d.on("modelChange", evt => {
      if (props.onImageUpdate) {
        let imgUrl = screenshotImageUrl(view3d);
        props.onImageUpdate(imgUrl);
      }
    });
  });
  useEffect(() => {
    const view3DRoot = root.current ? root.current : ".view3d-wrapper";
    view3d = new View3D(view3DRoot, {
      src: props.src,
      pitch: props.pitch,
      yaw: props.yaw,
      envmap: props.envmap,
      annotationURL: props.annotationURL,
      autoInit: false,
      editMode: props.editMode,
      animationRepeatMode: 'none',
      poster: props.posterImage
    });
    loadinit();
  }, []);
  return React.createElement("div", {
    className: "view3d-area",
    style: {
      height: "100%",
      width: "100%"
    }
  }, React.createElement("div", {
    ref: root,
    className: "view3d-wrapper view3d-16by9"
  }, React.createElement("canvas", {
    className: "view3d-canvas"
  })));
};

/*
 * Copyright (c) 2020 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */

export default View3D;
export { ANIMATION_REPEAT_MODE, ARButton, ARManager, AROverlay, ARScene, AR_SESSION_TYPE, AUTO, addAnnotationLabel as AddAnnotationLabel, Animation, AnimationControl, AnimationProgressBar, AnimationSelector, Annotation, AnnotationManager, AutoPlayer, AutoResizer, Camera, ChangeEnvmaps, ControlBar, DEFAULT_CLASS, DOMOverlay, EASING, ERROR_CODES, EVENTS$1 as EVENTS, FaceAnnotation, FullscreenButton, GLTFLoader, HitTest, INPUT_TYPE, LightEstimation, Loader, LoadingBar, Model, ModelAnimator, Motion, NavigationGizmo, OrbitControl, PlayButton, PointAnnotation, Pose, QUICK_LOOK_APPLE_PAY_BUTTON_TYPE, QUICK_LOOK_CUSTOM_BANNER_SIZE, QuickLookSession, Renderer, RotateControl, SCENE_VIEWER_MODE, Scene, SceneViewerSession, ShadowPlane, Skybox, StartRecordingCustomAnimations as StartRecordingAnimations, StopRecordingCustomAnimations as StopRecordingAnimations, TONE_MAPPING, TextureLoader, TranslateControl, View3DError, View3DPlayer as View3dPlayer, WebARSession, ZOOM_TYPE, ZoomControl, checkHalfFloatAvailable, circulate, clamp, createLoadingContext, directionToYawPitch, findCanvas, getAnimatedFace, getAttributeScale, getBoxPoints, getElement, getFaceVertices, getNullableElement, getObjectOption, getPrimaryAxisIndex, getRotatedPosition, getRotationAngle, getSkinnedVertex, getValidProps, isAvailable, isCSSSelector, isElement, isNumber, isSignedArrayBuffer, isString, lerp, merge, parseAsBboxRatio, range, rawGLTF, screenshotImageUrl, subclip, toBooleanString, toDegree, toPowerOfTwo, toRadian, withMethods };
