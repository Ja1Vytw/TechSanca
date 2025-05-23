"use client"

function OptionSelector({ title, type, options, value, onChange }) {
  const handleRadioChange = (optionValue) => {
    onChange(optionValue)
  }

  const handleCheckboxChange = (optionValue) => {
    if (optionValue === "responsive") {
      return
    }

    onChange(optionValue, !value[optionValue])
  }

  return (
    <div className="option-selector">
      <h3 className="option-title">{title}</h3>

      <div className="option-list">
        {type === "radio" &&
          options.map((option) => (
            <div
              key={option.value}
              className={`option-item ${value === option.value ? "selected" : ""} ${
                option.label.includes("Não disponível") ? "disabled" : ""
              }`}
              onClick={() => {
                if (!option.label.includes("Não disponível")) {
                  handleRadioChange(option.value)
                }
              }}
            >
              <div className="option-radio">
                <div className="radio-outer">{value === option.value && <div className="radio-inner"></div>}</div>
                <div className="option-text">
                  <div className="option-label">{option.label}</div>
                  <div className="option-description">{option.description}</div>
                </div>
              </div>
            </div>
          ))}

        {type === "checkbox" &&
          options.map((option) => (
            <div
              key={option.value}
              className={`option-item ${value[option.value] ? "selected" : ""} ${
                option.value === "responsive" || option.label.includes("Incluído") ? "disabled" : ""
              }`}
              onClick={() => {
                if (!option.label.includes("Incluído") || option.label.includes("todos os planos")) {
                  handleCheckboxChange(option.value)
                }
              }}
            >
              <div className="option-checkbox">
                <div className="checkbox-outer">
                  {value[option.value] && (
                    <svg className="checkbox-check" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div className="option-text">
                  <div className="option-label">{option.label}</div>
                  <div className="option-description">{option.description}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
