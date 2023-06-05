export const ConditionalRendering = () => {
  const age = 43;

  // 1.
  //   let html = <></>;
  //   if (age > 40) {
  //     html = <p>Ålder: {age}</p>;
  //   }

  //   return <>{html}</>;

  // 2.
  //   return <>{age > 40 ? <p>Ålder: {age}</p> : <></>}</>;

  // 3.
  return <>{age > 40 && <p>Ålder: {age}</p>}</>;
};
