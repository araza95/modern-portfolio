import Image from 'next/image';

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill objectFit='contain' priority alt='Profile picture' />
    </div>
  );
};

export default DevImg;
