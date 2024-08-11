import Head from 'next/head';

export default function PageHead({ title, description, ogImg }) {
  return (
    <Head>
      {title ? (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} key="ogTitle" />
          <meta name="twitter:title" content={title} key="metaTitleTw" />
        </>
      ) : (
        ''
      )}
      {description ? (
        <>
          <meta
            name="description"
            content={description.replace(/(<([^>]+)>)/gi, '')}
            key="metaDescription"
          />
          <meta
            property="og:description"
            content={description.replace(/(<([^>]+)>)/gi, '')}
            key="ogDescription"
          />
          <meta
            name="twitter:description"
            content={description.replace(/(<([^>]+)>)/gi, '')}
            key="metaDescriptionTw"
          />
        </>
      ) : (
        ''
      )}
      {ogImg ? (
        <>
          <meta property="og:image" content={ogImg} key="metaImageFb" />
          <meta name="twitter:image" content={ogImg} key="metaImageTw" />
        </>
      ) : (
        ''
      )}
    </Head>
  );
}
