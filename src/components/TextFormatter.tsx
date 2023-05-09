export function TextFormatter({
  text,
  urls,
}: {
  text?: string;
  urls: {
    url: string;
    original_url: string;
  }[];
}) {
  if (!text) return null;

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const htmlContent = text?.replace(urlRegex, (textUrl) => {
    const url = textUrl.replace(",", "");
    // remove url if that is photo or video
    const isPhoto = urls.find(
      (item) => item.original_url === url && item.url.includes("/photo/")
    );
    const isVideo = urls.find(
      (item) => item.original_url === url && item.url.includes("/video/")
    );
    if (isPhoto || isVideo) return ``;

    return `<a class="link" href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });

  // convert @username to link
  const usernameRegex = /(@[a-z0-9_]+)/gi;
  const htmlContentWithUsername = htmlContent?.replace(
    usernameRegex,
    (username) => {
      return `<a class="link" href="https://twitter.com/${username.slice(
        1
      )}" target="_blank" rel="noopener noreferrer">${username}</a>`;
    }
  );

  // convert #hashtag to link
  const hashtagRegex = /(#\w+)/g;
  const htmlContentWithHashtag = htmlContentWithUsername?.replace(
    hashtagRegex,
    (hashtag) => {
      return `<a class="link" href="https://twitter.com/hashtag/${hashtag.slice(
        1
      )}" target="_blank" rel="noopener noreferrer">${hashtag}</a>`;
    }
  );

  return (
    <p
      class="w-full min-w-full text-xl prose"
      innerHTML={htmlContentWithHashtag}
    />
  );
}
