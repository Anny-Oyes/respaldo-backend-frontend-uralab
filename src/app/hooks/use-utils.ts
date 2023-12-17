const useUtils = () => {
  const getParams = (fields: any) => {
    let params: string = "";
    Object.keys(fields).forEach((key) => {
      if (fields[key] !== undefined) {
        params = params.concat(`&${key}=${fields[key]}`);
      }
    });
    return params;
  };

  return {
    getParams,
  };
};

export default useUtils;
