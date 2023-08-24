import { useCookies } from "react-cookie";

export const Home = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["FED22D"]);

  const handleSetCookie = () => {
    const d = new Date();
    setCookie("FED22D", "The best class ever!", {
      expires: new Date(d.setTime(d.getTime() + 10 * 24 * 60 * 60 * 1000)),
    });
  };

  const handleRemoveCookie = () => {
    removeCookie("FED22D");
  };

  console.log(cookies.FED22D);

  return (
    <>
      <h3>Hem</h3>
      <>
        <section>
          <button onClick={handleSetCookie}>Spara cookie</button>
          <button onClick={handleRemoveCookie}>Remove cookie</button>
        </section>
      </>
    </>
  );
};
