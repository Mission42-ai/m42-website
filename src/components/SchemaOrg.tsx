
import { Helmet } from 'react-helmet-async';

const SchemaOrg = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mission42',
    url: 'https://mission42.ai',
    logo: 'https://mission42.ai/logos/logo-light-bg.png',
    sameAs: ['https://www.linkedin.com/company/mission42'],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaOrg;
