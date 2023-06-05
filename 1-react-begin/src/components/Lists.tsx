export const Lists = () => {
  const numbers: number[] = [1, 1, 2, 3, 5, 8, 13, 21];

  //   const lis: JSX.Element[] = [];
  //   numbers.forEach((n, i) => {
  //     const li = <li key={i}>{n}</li>;
  //     lis.push(li);
  //   });

  //   return <ul>{lis}</ul>;

  const html = numbers.map((n, i) => {
    return <li key={i}>{n}</li>;
  });

  return <ul>{html}</ul>;

  //   return (
  //     <ul>
  //       {numbers.map((n, i) => {
  //         return <li key={i}>{n}</li>;
  //       })}
  //     </ul>
  //   );
};
