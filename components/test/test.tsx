import { Link } from "next-view-transitions";

type TestProps = {
  url: string;
};

export function Test({ url }: TestProps) {
  return (
    <>
      <header
        style={{
          height: "20px",
        }}
      >
        <Link href="/">RETOUR</Link>
        <p>SMALL HEADER</p>
      </header>

      <main>
        <iframe src={url} allowFullScreen></iframe>
      </main>
    </>
  );
}
