import dynamic from "next/dynamic";
import Head from "next/head";
import { NextSeo } from "next-seo";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";
import Hero from "@/components/Hero";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Project = dynamic(() => import("@/components/ProjectShowcase"), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      <CursorTrailCanvas
        color="hsla(183, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      />
      <NextSeo
        title="Pratyasha"
        description="Explore the professional portfolio of Amit Chauhan, a skilled React and Frontend Developer with 2 years of hands-on experience. Discover innovative projects, expertise in modern web technologies, and a passion for creating seamless user experiences."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Pratyasha Portfolio",
          description: "Dive into the world of Pratyasha.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Pratyasha - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Portfolio, UI/UX, React.js, Frontend Development, Web Development, JavaScript Developer, Responsive Design",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <Hero />
      <Skills />
      <Project projects={PROJECT_SHOWCASE} />
    </>
  );
}
