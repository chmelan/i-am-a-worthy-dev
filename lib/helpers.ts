export const validateXWS = (userInput: string) => {
  try {
    const parsed = JSON.parse(userInput);
    //check if userInput is valid JSON
    if (!parsed) {
      return undefined;
    }

    //Check if userInput contains common XWS fields

    //validate faction

    //validate pilots

    //validate upgrades for each pilot

    // if no squad name, add a default value of "New Squad" TODO: Create a fun x wing squad name generator

    // return validated object
    return parsed;
  } catch (error) {
    return undefined;
  }
};
