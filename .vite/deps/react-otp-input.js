import {
  require_react
} from "./chunk-YWBCN2AJ.js";
import {
  __toESM
} from "./chunk-7TNKEIRG.js";

// node_modules/react-otp-input/lib/index.esm.js
var import_react = __toESM(require_react());
var isStyleObject = function(obj) {
  return typeof obj === "object" && obj !== null;
};
var OTPInput = function(_a) {
  var _b = _a.value, value = _b === void 0 ? "" : _b, _c = _a.numInputs, numInputs = _c === void 0 ? 4 : _c, onChange = _a.onChange, onPaste = _a.onPaste, renderInput = _a.renderInput, _d = _a.shouldAutoFocus, shouldAutoFocus = _d === void 0 ? false : _d, _e = _a.inputType, inputType = _e === void 0 ? "text" : _e, renderSeparator = _a.renderSeparator, placeholder = _a.placeholder, containerStyle = _a.containerStyle, inputStyle = _a.inputStyle, _f = _a.skipDefaultStyles, skipDefaultStyles = _f === void 0 ? false : _f;
  var _g = import_react.default.useState(0), activeInput = _g[0], setActiveInput = _g[1];
  var inputRefs = import_react.default.useRef([]);
  var getOTPValue = function() {
    return value ? value.toString().split("") : [];
  };
  var isInputNum = inputType === "number" || inputType === "tel";
  import_react.default.useEffect(function() {
    inputRefs.current = inputRefs.current.slice(0, numInputs);
  }, [numInputs]);
  import_react.default.useEffect(function() {
    var _a2;
    if (shouldAutoFocus) {
      (_a2 = inputRefs.current[0]) === null || _a2 === void 0 ? void 0 : _a2.focus();
    }
  }, [shouldAutoFocus]);
  var getPlaceholderValue = function() {
    if (typeof placeholder === "string") {
      if (placeholder.length === numInputs) {
        return placeholder;
      }
      if (placeholder.length > 0) {
        console.error("Length of the placeholder should be equal to the number of inputs.");
      }
    }
    return void 0;
  };
  var isInputValueValid = function(value2) {
    var isTypeValid = isInputNum ? !isNaN(Number(value2)) : typeof value2 === "string";
    return isTypeValid && value2.trim().length === 1;
  };
  var handleChange = function(event) {
    var value2 = event.target.value;
    if (isInputValueValid(value2)) {
      changeCodeAtFocus(value2);
      focusInput(activeInput + 1);
    }
  };
  var handleInputChange = function(event) {
    var nativeEvent = event.nativeEvent;
    var value2 = event.target.value;
    if (!isInputValueValid(value2)) {
      if (value2.length === numInputs) {
        var hasInvalidInput = value2.split("").some(function(cellInput) {
          return !isInputValueValid(cellInput);
        });
        if (!hasInvalidInput) {
          handleOTPChange(value2.split(""));
          focusInput(numInputs - 1);
        }
      }
      if (nativeEvent.data === null && nativeEvent.inputType === "deleteContentBackward") {
        event.preventDefault();
        changeCodeAtFocus("");
        focusInput(activeInput - 1);
      }
      event.target.value = "";
    }
  };
  var handleFocus = function(event) {
    return function(index) {
      setActiveInput(index);
      event.target.select();
    };
  };
  var handleBlur = function() {
    setActiveInput(activeInput - 1);
  };
  var handleKeyDown = function(event) {
    var otp = getOTPValue();
    if ([event.code, event.key].includes("Backspace")) {
      event.preventDefault();
      changeCodeAtFocus("");
      focusInput(activeInput - 1);
    } else if (event.code === "Delete") {
      event.preventDefault();
      changeCodeAtFocus("");
    } else if (event.code === "ArrowLeft") {
      event.preventDefault();
      focusInput(activeInput - 1);
    } else if (event.code === "ArrowRight") {
      event.preventDefault();
      focusInput(activeInput + 1);
    } else if (event.key === otp[activeInput]) {
      event.preventDefault();
      focusInput(activeInput + 1);
    } else if (event.code === "Spacebar" || event.code === "Space" || event.code === "ArrowUp" || event.code === "ArrowDown") {
      event.preventDefault();
    }
  };
  var focusInput = function(index) {
    var _a2, _b2;
    var activeInput2 = Math.max(Math.min(numInputs - 1, index), 0);
    if (inputRefs.current[activeInput2]) {
      (_a2 = inputRefs.current[activeInput2]) === null || _a2 === void 0 ? void 0 : _a2.focus();
      (_b2 = inputRefs.current[activeInput2]) === null || _b2 === void 0 ? void 0 : _b2.select();
      setActiveInput(activeInput2);
    }
  };
  var changeCodeAtFocus = function(value2) {
    var otp = getOTPValue();
    otp[activeInput] = value2[0];
    handleOTPChange(otp);
  };
  var handleOTPChange = function(otp) {
    var otpValue = otp.join("");
    onChange(otpValue);
  };
  var handlePaste = function(event) {
    var _a2;
    event.preventDefault();
    var otp = getOTPValue();
    var nextActiveInput = activeInput;
    var pastedData = event.clipboardData.getData("text/plain").slice(0, numInputs - activeInput).split("");
    if (isInputNum && pastedData.some(function(value2) {
      return isNaN(Number(value2));
    })) {
      return;
    }
    for (var pos = 0; pos < numInputs; ++pos) {
      if (pos >= activeInput && pastedData.length > 0) {
        otp[pos] = (_a2 = pastedData.shift()) !== null && _a2 !== void 0 ? _a2 : "";
        nextActiveInput++;
      }
    }
    focusInput(nextActiveInput);
    handleOTPChange(otp);
  };
  return import_react.default.createElement("div", { style: Object.assign({ display: "flex", alignItems: "center" }, isStyleObject(containerStyle) && containerStyle), className: typeof containerStyle === "string" ? containerStyle : void 0, onPaste }, Array.from({ length: numInputs }, function(_, index) {
    return index;
  }).map(function(index) {
    var _a2, _b2, _c2;
    return import_react.default.createElement(
      import_react.default.Fragment,
      { key: index },
      renderInput({
        value: (_a2 = getOTPValue()[index]) !== null && _a2 !== void 0 ? _a2 : "",
        placeholder: (_c2 = (_b2 = getPlaceholderValue()) === null || _b2 === void 0 ? void 0 : _b2[index]) !== null && _c2 !== void 0 ? _c2 : void 0,
        ref: function(element) {
          return inputRefs.current[index] = element;
        },
        onChange: handleChange,
        onFocus: function(event) {
          return handleFocus(event)(index);
        },
        onBlur: handleBlur,
        onKeyDown: handleKeyDown,
        onPaste: handlePaste,
        autoComplete: "off",
        "aria-label": "Please enter OTP character ".concat(index + 1),
        style: Object.assign(!skipDefaultStyles ? { width: "1em", textAlign: "center" } : {}, isStyleObject(inputStyle) ? inputStyle : {}),
        className: typeof inputStyle === "string" ? inputStyle : void 0,
        type: inputType,
        inputMode: isInputNum ? "numeric" : "text",
        onInput: handleInputChange
      }, index),
      index < numInputs - 1 && (typeof renderSeparator === "function" ? renderSeparator(index) : renderSeparator)
    );
  }));
};
export {
  OTPInput as default
};
//# sourceMappingURL=react-otp-input.js.map
