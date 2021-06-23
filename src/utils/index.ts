export const removeURLCharacter = (urlParam: string) => {
    return urlParam
      .replace(/ /g, "-")
      .replace(/\//g, "-")
      .replace(/%/g, "-")
      .replace(/&/g, "-")
      .replace(/;/g, "-")
      .replace(/\?/g, "-")
      .replace(/:/g, "-")
      .replace(/@/g, "-")
      .replace(/=/g, "-")
      .replace(/\+/g, "-")
      .replace(/\$/g, "-")
      .replace(/,/g, "-")
      .replace(/>/g, "-");
  };