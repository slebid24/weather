export const setLinksDef = (faviconLink: string): any[] => {
  const linksDefArr = [
    [
      "apple-touch-icon",
      "180x180",
      "",
      `/favicons/${faviconLink}/apple-touch-icon.png`,
    ],
    [
      "icon",
      "32x32",
      "image/png",
      `/favicons/${faviconLink}/favicon-32x32.png`,
    ],
    [
      "icon",
      "16x16",
      "image/png",
      `/favicons/${faviconLink}/favicon-16x16.png`,
    ],
    ["manifest", "", "", `/favicons/${faviconLink}/site.webmanifest`],
    ["mask-icon", "", "", `/favicons/${faviconLink}/safari-pinned-tab.svg`],
  ];

  return linksDefArr;
};
