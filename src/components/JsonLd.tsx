// components/JsonLd.tsx
import Head from "next/head";

interface JsonLdProps {
  data: Record<string, any>;
}

export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data);
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: json }}
      />
    </Head>
  );
}
