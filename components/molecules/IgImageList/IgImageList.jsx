import axios from "axios";
import { useEffect, useState } from "react";
import IgImage from "../../atoms/IgImage/IgImage";

function IgImageList() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?limit=6")
      .then((response) => {
        setImages(response.data);
      })
      .catch((e) => {
        throw e;
      });
  }, []);

  return (
    <div className="igimage-list">
      {
        // eslint-disable-next-line camelcase
        images.map(({ author, download_url, id }) => (
          // eslint-disable-next-line camelcase
          <IgImage url={download_url} author={author} key={`igimage-${id}`} />
        ))
      }
    </div>
  );
}

export default IgImageList;
