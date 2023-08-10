import { Jazzicon as Icon } from '@ukstv/jazzicon-react';

interface JazziconProps {
  // only string types with values of 'small' or 'medium' are allowed
  address: string;
  size?: string;
}

function Jazzicon({ address, size }: JazziconProps) {
  const dimensions =
    (size === 'small' && 8) ||
    (size === 'medium' && 10) ||
    (size === 'large' && 12) ||
    10;
  const h = dimensions;
  const w = dimensions;

  return <Icon className={`jazzicon h-${h} w-${w}`} address={address} />;
}

export default Jazzicon;
