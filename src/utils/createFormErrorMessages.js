export function createFormErrorMessages(apiError, formErrors, fieldNames) {
  const messages = {};
  fieldNames.forEach(fieldName => {
    messages[fieldName] = [];
    if (apiError && apiError.response[fieldName]) {
      if (Array.isArray(apiError.response[fieldName])) {
        messages[fieldName].push(...apiError.response[fieldName]);
      } else {
        messages[fieldName].push(apiError.response[fieldName]);
      }
    }

    if (formErrors && formErrors[fieldName]) {
      messages[fieldName].push(formErrors[fieldName].message);
    }
  });
  if (apiError && apiError.response['non_field_errors']) {
    messages["non_field_errors"] = apiError.response['non_field_errors']
  }
  return messages;
}