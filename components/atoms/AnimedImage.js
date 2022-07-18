import styled from 'styled-components';
import { useState } from 'react';
import Image from 'next/image';

const Wrapper = styled.div`
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
  transition: opacity .3s;
`;

const AnimedImage = ({ src, alt, sizes, priority }) => {
  const [isLoaded, setLoaded] = useState(false);
  return (
    <Wrapper isLoaded={isLoaded}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        placeholder="blur"
        objectFit="contain"
        sizes={sizes}
        priority={priority}
        onLoadingComplete={() => setLoaded(true)}
      />
    </Wrapper>
  );
};

export default AnimedImage;
