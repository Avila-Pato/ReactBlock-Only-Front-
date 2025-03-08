import { IKContext, IKImage } from "imagekitio-react";




// eslint-disable-next-line react/prop-types
const Image = ({ src, className, w, h, alt }) => {
  return (
    <IKContext 
      publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} 
    >
      <IKImage
        path={src}
        className={className}
        loading="lazy"
        lqip={{ active: true, quality: 20 }}
        alt={alt}
        width={w}
        height={h}
        transformation={[{ width: w, height: h }]}
      />
    </IKContext>
  );
};
console.log("PUBLIC KEY:", import.meta.env.VITE_IK_PUBLIC_KEY);
console.log("URL ENDPOINT:", import.meta.env.VITE_IK_URL_ENDPOINT);


export default Image;
