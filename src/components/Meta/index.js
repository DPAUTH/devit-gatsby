import React, {Fragment} from 'react';

const Meta = () => {
  return (
    <Fragment>
      {/* <title>{% if page.title %}{{ page.title | append: site.data.config.titlePostfix }}{% else %}{{ site.data.config.defaults.title | append: site.data.config.titlePostfix}}{% endif %}</title> */}

      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta name="description" content="{% if page.description %}{{ page.description }}{% else %}{{ site.data.config.defaults.description }}{% endif %}" />

      {/* Schema.org markup for Google+ */}
      <meta itemprop="name" content="{% if page.title %}{{ page.title | append: site.data.config.titlePostfix }}{% else %}{{ site.data.config.defaults.title | append: site.data.config.titlePostfix}}{% endif %}" />
      <meta itemprop="description" content="{% if page.description %}{{ page.description }}{% else %}{{ site.data.config.defaults.description }}{% endif %}" />
      <meta itemprop="image" content="{{ site.url }}{% if page.image %}{{ page.image }}{% else %}{{ site.data.config.defaults.image }}{% endif %}" />

      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@devitconf" />

      <meta name="twitter:title" content="{% if page.title %}{{ page.title | append: site.data.config.titlePostfix }}{% else %}{{ site.data.config.defaults.title | append: site.data.config.titlePostfix}}{% endif %}" />
      <meta name="twitter:image" content="{{ site.url }}{% if page.image %}{{ page.image }}{% else %}{{ site.data.config.defaults.image }}{% endif %}" />
      <meta name="twitter:description" content="{% if page.description %}{{ page.description }}{% else %}{{ site.data.config.defaults.description }}{% endif %}" />

      {/* Open Graph data */}
      <meta property="og:title" content="{% if page.title %}{{ page.title | append: site.data.config.titlePostfix }}{% else %}{{ site.data.config.defaults.title | append: site.data.config.titlePostfix}}{% endif %}" />
      <meta property="og:site_name" content="devitconf.org" />
      <meta property="og:url" content="http://devitconf.org{{ page.url }}" />

      <meta property="og:description" content="{% if page.description %}{{ page.description }}{% else %}{{ site.data.config.defaults.description }}{% endif %}" />
      <meta property="og:image" content="{{ site.url }}{% if page.image %}{{ page.image }}{% else %}{{ site.data.config.defaults.image }}{% endif %}" />
      <meta property="og:type" content="website" />

      <link href="/assets/css/main.css" rel="stylesheet" media="screen" />

      <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon/apple-touch-icon.png?v=GvJLOgvboj" />
      <link rel="icon" type="image/png" href="/assets/images/favicon/favicon-32x32.png?v=GvJLOgvboj" sizes="32x32" />
      <link rel="icon" type="image/png" href="/assets/images/favicon/favicon-16x16.png?v=GvJLOgvboj" sizes="16x16" />
      <link rel="manifest" href="/assets/images/favicon/manifest.json?v=GvJLOgvboj" />
      <link rel="mask-icon" href="/assets/images/favicon/safari-pinned-tab.svg?v=GvJLOgvboj" color="#5bbad5" />
      <link rel="shortcut icon" href="/assets/images/favicon/favicon.ico?v=GvJLOgvboj" />

      <meta name="apple-mobile-web-app-title" content="DEVit Conf" />
      <meta name="application-name" content="DEVit Conf" />
      <meta name="msapplication-config" content="/assets/images/favicon/browserconfig.xml?v=GvJLOgvboj" />
      <meta name="theme-color" content="#ffffff" />

      {/* {% include schemas/homepage.html %} */}
    </Fragment>
  );
};

export default Meta;
