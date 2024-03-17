export const handleBlur = async (trigger, fieldName) => {
  try {
    await trigger(fieldName);
  } catch (error) {}
};
