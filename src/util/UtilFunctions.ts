export const deepClone = <T>(data: T) => {
  return JSON.parse(JSON.stringify(data));
};

export const generateId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

export const groupByDate = <T extends { created_at: string }>(
  data: T[],
  forSeconds: number
) => {
  const result: { [key: string]: T[] } = {};
  let timeDiff = new Date(data[0].created_at).getTime() + forSeconds * 1000;

  data.forEach((element) => {
    const dateInMiliSeconds = new Date(element.created_at).getTime();
    if (dateInMiliSeconds <= timeDiff) {
      if (result[timeDiff]) {
        result[timeDiff].push(element);
      } else {
        result[timeDiff] = [element];
      }
    } else {
      timeDiff = dateInMiliSeconds + 5000;
      result[timeDiff] = [element];
    }
  });

  return Object.keys(result).map((date: string) => ({
    date,
    data: result[date],
  }));
};
