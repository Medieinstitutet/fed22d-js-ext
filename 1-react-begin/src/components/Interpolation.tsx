export const Interpolation = () => {
  const msg = "Hello world";
  const imageUrl = "http://....png";

  return (
    <>
      <article>{msg}</article>
      <img src={imageUrl} alt="Logo" />
    </>
  );
};
